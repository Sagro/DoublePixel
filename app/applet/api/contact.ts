import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  // Gestisce solo le richieste POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, company, service, budget, message, _honey } = req.body;

    // Honeypot check
    if (_honey) {
      return res.status(400).json({ error: "Spam detected" });
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      return res.status(500).json({ error: "RESEND_API_KEY is not defined" });
    }

    const resend = new Resend(key);
    
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // TODO: Modifica in produzione con il tuo dominio (es: contatti@tuodominio.it)
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

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error("Email API Error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
