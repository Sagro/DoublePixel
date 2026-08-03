import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: "01",
      title: "Web Design & Sviluppo",
      description: "Progetto siti web moderni, veloci, responsive e costruiti per rappresentare al meglio il valore di un brand."
    },
    {
      id: "02",
      title: "Campagne Google Ads",
      description: "Strategie Google Ads pensate per intercettare persone che stanno già cercando ciò che offri."
    },
    {
      id: "03",
      title: "Campagne Meta Ads",
      description: "Campagne per Facebook e Instagram create per aumentare visibilità, generare interesse e sostenere obiettivi di comunicazione."
    },
    {
      id: "04",
      title: "Gestione Social Network",
      description: "Piani editoriali e gestione dei contenuti per una presenza social più coerente, riconoscibile e continua."
    }
  ];

  return (
    <section id="servizi" className="py-24 bg-[#0F0F0F] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.h2 
              className="text-[50px] md:text-[70px] font-display font-black tracking-tighter mb-8 italic uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Non solo <br/>
              <span className="text-white/20">siti web.</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-white/60 font-light text-balance leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ogni presenza digitale funziona meglio quando design, comunicazione e strategia lavorano nella stessa direzione.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#contatti" 
                className="inline-flex items-center gap-3 border-b-2 border-[#C6FF00] pb-1 text-sm font-bold uppercase tracking-widest text-white hover:text-[#C6FF00] transition-colors group"
              >
                Parliamo della tua strategia
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="group relative border-b border-white/10 py-12 first:pt-0 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Hover Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C6FF00] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                
                <div className="pl-0 group-hover:pl-8 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <span className="text-xl font-bold italic font-display text-white/40 group-hover:text-[#C6FF00] transition-colors shrink-0 md:w-12">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold italic tracking-tight text-white mb-3 group-hover:text-[#C6FF00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
