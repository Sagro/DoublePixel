import { SEO } from '@/src/components/SEO';

export function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy - Double Pixel" description="Informativa sulla privacy di Double Pixel." />
      <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 font-light leading-relaxed space-y-6">
        <p>
          <em>Ultimo aggiornamento: [Data]</em>
        </p>
        <p>
          Questa pagina è un placeholder per la tua Privacy Policy completa. Prima di pubblicare il sito, assicurati di inserire qui un testo redatto a norma del GDPR o affidati a servizi come Iubenda o Termly.
        </p>
        <h2 className="text-2xl font-display font-medium text-white mt-12 mb-4">Titolare del Trattamento dei Dati</h2>
        <p>
          Double Pixel<br />
          Email: simone.sagramati@gmail.com
        </p>
        <h2 className="text-2xl font-display font-medium text-white mt-12 mb-4">Tipologie di Dati raccolti</h2>
        <p>
          Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono:
          Cookie; Dati di utilizzo; nome; cognome; email; dati comunicati durante l'utilizzo del servizio.
        </p>
        {/* Aggiungi altri paragrafi qui */}
      </div>
      </div>
    </>
  );
}
