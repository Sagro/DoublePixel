import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Textarea } from '@/src/components/ui/Textarea';
import { Select } from '@/src/components/ui/Select';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Configura qui l'invio reale (es. Resend, Formspree, o Server Action in Next.js)
    // Esempio fittizio con timeout:
    setTimeout(() => {
      setFormState('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contatti" className="py-24 bg-[#C6FF00] text-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <motion.h2 
              className="text-[50px] md:text-[70px] font-display font-black tracking-tighter mb-8 italic uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Hai un progetto <br/>
              in mente?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl font-medium opacity-80 leading-relaxed max-w-md mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Raccontami la tua idea. Possiamo trasformarla in una presenza digitale capace di lasciare il segno.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-medium opacity-70">
                Preferisci scriverci direttamente? Mandaci una mail e raccontaci di cosa hai bisogno.
              </p>
              <a 
                href="mailto:simone.sagramati@gmail.com" 
                className="inline-flex items-center gap-3 text-2xl font-display font-bold hover:opacity-70 transition-opacity"
              >
                simone.sagramati@gmail.com
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#0A0A0A] p-8 md:p-12 text-[#f5f5f0] space-y-8 rounded-2xl border border-black/10">
              
              {/* Honeypot anti-spam invisibile */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Nome e cognome *</label>
                  <Input id="name" name="name" required placeholder="Mario Rossi" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email *</label>
                  <Input id="email" name="email" type="email" required placeholder="mario@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-zinc-400">Azienda o progetto (facoltativo)</label>
                <Input id="company" name="company" placeholder="Nome della tua azienda" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-400">Servizio di interesse *</label>
                  <Select id="service" name="service" required defaultValue="">
                    <option value="" disabled>Seleziona un'opzione</option>
                    <option value="Sito web">Sito web</option>
                    <option value="Restyling sito web">Restyling sito web</option>
                    <option value="Campagne Google Ads">Campagne Google Ads</option>
                    <option value="Campagne Meta Ads">Campagne Meta Ads</option>
                    <option value="Gestione Social Network">Gestione Social Network</option>
                    <option value="Consulenza digitale">Consulenza digitale</option>
                    <option value="Altro">Altro</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-zinc-400">Budget indicativo</label>
                  <Select id="budget" name="budget" defaultValue="">
                    <option value="" disabled>Seleziona un'opzione</option>
                    <option value="Da definire">Da definire</option>
                    <option value="Fino a 1.000 €">Fino a 1.000 €</option>
                    <option value="1.000 € – 3.000 €">1.000 € – 3.000 €</option>
                    <option value="3.000 € – 5.000 €">3.000 € – 5.000 €</option>
                    <option value="Oltre 5.000 €">Oltre 5.000 €</option>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Messaggio *</label>
                <Textarea id="message" name="message" required placeholder="Parlami della tua idea, dei tuoi obiettivi e di cosa vorresti realizzare..." />
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  required 
                  className="mt-1 w-4 h-4 rounded-sm border-zinc-700 bg-transparent text-[#C6FF00] focus:ring-[#C6FF00] focus:ring-offset-zinc-950 accent-[#C6FF00]"
                />
                <label htmlFor="privacy" className="text-sm text-zinc-400 font-light leading-snug">
                  Ho letto e accetto la <a href="/privacy-policy" className="text-zinc-50 underline underline-offset-2">Privacy Policy</a> per il trattamento dei miei dati personali. *
                </label>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="bg-[#C6FF00] text-black px-8 py-4 rounded-full text-[12px] font-bold uppercase tracking-tight hover:scale-105 transition-transform w-full sm:w-auto min-w-[200px]"
                  disabled={formState === 'submitting' || formState === 'success'}
                >
                  {formState === 'idle' && 'Invia richiesta'}
                  {formState === 'submitting' && 'Invio in corso...'}
                  {formState === 'success' && (
                    <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} /> Inviato con successo</span>
                  )}
                  {formState === 'error' && (
                    <span className="flex items-center justify-center gap-2"><AlertCircle size={16} /> Errore, riprova</span>
                  )}
                </button>
                {formState === 'success' && (
                  <p className="mt-4 text-sm text-[#C6FF00]">Grazie per avermi scritto. Ti risponderò il prima possibile.</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
