import { motion } from 'motion/react';

export function SocialProof() {
  const categories = [
    "Eventi", "Cultura", "Food & Beverage", "Tecnologia", 
    "Sport", "Non profit", "Hospitality", "Lifestyle"
  ];

  return (
    <section className="py-24 border-t border-white/10 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-display font-black italic tracking-tighter uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Esperienze digitali per realtà che vogliono farsi notare.
          </motion.h2>
          <motion.p 
            className="text-lg text-white/60 font-light text-balance leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dall’intrattenimento alla ristorazione, dal non profit allo sport: ogni progetto nasce dall’incontro tra identità, obiettivi e un design pensato per funzionare.
          </motion.p>
        </div>

        {/* Marquee or List */}
        <div className="relative overflow-hidden w-full flex items-center py-4">
          <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-[#0F0F0F] to-transparent z-10" />
          <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-[#0F0F0F] to-transparent z-10" />
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-12 items-center justify-center w-full">
            {categories.map((category, index) => (
              <motion.div 
                key={category} 
                className="flex items-center gap-8 md:gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className="text-white/40 font-bold tracking-[0.2em] uppercase text-[10px]">{category}</span>
                {index < categories.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[#C6FF00] hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
