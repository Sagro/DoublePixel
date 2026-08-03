import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

let resend: Resend | null = null;

function getResend() {
  if (!resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not defined");
    }
    resend = new Resend(key);
  }
  return resend;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, service, budget, message, _honey } = req.body;

      // Honeypot check
      if (_honey) {
        return res.status(400).json({ error: "Spam detected" });
      }

      const resendClient = getResend();
      
      const { data, error } = await resendClient.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["simone.sagramati@gmail.com"],
        subject: `Nuova richiesta contatto da ${name}`,
        html: `
          <h3>Nuova richiesta di contatto</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Azienda:</strong> ${company || "Non specificata"}</p>
          <p><strong>Servizio:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget || "Non specificato"}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: email,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (error: any) {
      console.error("Email API Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
