import { motion } from 'motion/react';

export function Method() {
  const steps = [
    {
      id: "01",
      title: "Ascolto",
      description: "Obiettivi, pubblico, contesto e identità: ogni progetto parte da una direzione chiara."
    },
    {
      id: "02",
      title: "Strategia",
      description: "Definiamo struttura, contenuti e priorità per costruire un’esperienza utile e coerente."
    },
    {
      id: "03",
      title: "Design",
      description: "Trasformo la strategia in un’interfaccia distintiva, funzionale e memorabile."
    },
    {
      id: "04",
      title: "Lancio e crescita",
      description: "Il progetto prende vita con attenzione a performance, visibilità e possibilità di evoluzione."
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            className="text-[40px] md:text-[60px] lg:text-[70px] font-display font-black italic tracking-tighter uppercase leading-[0.9] text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Dalla prima idea alla presenza digitale.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector Line (visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 right-0 h-[1px] bg-white/10 w-[calc(100%-3rem)]" />
              )}
              {/* Connector Line (visible on mobile, hidden on md) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute top-12 left-6 bottom-[-3rem] w-[1px] bg-white/10" />
              )}
              
              <div className="mb-8 relative z-10 group">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 text-[#C6FF00] font-display text-[10px] font-bold transition-transform group-hover:scale-110">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold italic tracking-tight text-white mb-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
