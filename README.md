# Simone Sagramati - Portfolio

Questo è il codice sorgente per il sito portfolio di Simone Sagramati, sviluppato con React, Vite, Tailwind CSS e Framer Motion. 
*Nota: Il codice è stato sviluppato come React SPA (Single Page Application) ottimizzata con Vite, per garantire la massima compatibilità e stabilità con questo ambiente di sviluppo. L'architettura modulare adottata lo rende, all'occorrenza, facilmente trasportabile su Next.js App Router per il deploy finale.*

## 1. Struttura del Progetto

Il codice è organizzato in modo modulare:
- `/src/data/`: Contiene `projects.ts` con i dati dei progetti.
- `/src/components/ui/`: Componenti base riutilizzabili (Button, Input, ecc.).
- `/src/components/sections/`: Le sezioni principali della home page.
- `/src/components/layout/`: Header, Footer e Layout.
- `/src/pages/`: Pagine dell'applicazione (Home, 404, Privacy).

## 2. Installazione e Avvio Locale

Assicurati di avere Node.js installato.

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## 3. Sostituzione delle Immagini

Attualmente le immagini dei progetti puntano alla cartella `/public/images/projects/`. 
Per sostituire i placeholder con i tuoi screenshot reali:

1. Crea la cartella `/public/images/projects/`.
2. Inserisci le tue immagini `.webp` (consigliato per performance) o `.jpg/.png` nella cartella.
3. Rinominale per farle combaciare con i path indicati in `/src/data/projects.ts`, ad esempio `mai-dire-eventi.webp`.
4. Per la foto personale in Chi Sono, aggiorna il tag `<img>` in `/src/components/sections/About.tsx`.

## 4. Modifica dei Dati dei Progetti

Puoi aggiungere, rimuovere o modificare i progetti modificando il file `/src/data/projects.ts`. Il layout della griglia asimmetrica si adatterà automaticamente.

## 5. Modifica dell'Email e Configurazione Form

- **Mailto link:** Puoi aggiornare la mail di contatto in `/src/components/sections/Contact.tsx`.
- **Form invio email:** Attualmente il form simula l'invio. Per renderlo operativo, puoi integrare servizi come [Formspree](https://formspree.io/) o [Web3Forms](https://web3forms.com/). Cerca nel file `Contact.tsx` la funzione `handleSubmit` per inserire la tua chiamata fetch API.

## 6. Deploy su Vercel

Questo progetto Vite React è pronto per essere deployato su Vercel in modo nativo:

1. Carica il codice su un repository GitHub.
2. Collega Vercel al repository.
3. Vercel rileverà automaticamente il framework come "Vite".
4. Il Build Command predefinito (`npm run build`) e l'Output Directory (`dist`) andranno bene.
5. Clicca "Deploy".

**Nota per il routing SPA:** Su Vercel (se usi Vite), assicurati di avere un file `vercel.json` nella root per gestire il fallback del client-side routing, oppure Vercel lo gestirà automaticamente selezionando Vite come framework.

## 7. Checklist Pre-Pubblicazione

Prima del lancio ufficiale, assicurati di:
- [ ] Configurare il **dominio personalizzato**.
- [ ] Aggiornare l'**email** nei link mailto.
- [ ] Inserire **screenshot reali** in `/public/images/projects/`.
- [ ] Inserire la tua **foto reale** nella sezione Chi Sono.
- [ ] Inserire testi completi e a norma in `/src/pages/PrivacyPolicy.tsx` e `CookiePolicy.tsx`.
- [ ] Aggiungere i **link ai social** (LinkedIn, Instagram) nel Footer.
- [ ] Collegare il servizio di **invio form** (es. Formspree/Resend).
- [ ] Verificare Meta Tag per la SEO (Title, Description) in `index.html`.
