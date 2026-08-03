import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section className="py-24 bg-[#C6FF00] text-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-display font-black italic tracking-tighter uppercase leading-[0.9] text-balance">
            Un sito non deve solo essere bello. <br className="hidden md:block"/>
            Deve farsi ricordare.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {[
            {
              id: "01",
              title: "Strategia",
              text: "Ogni scelta parte da obiettivi chiari, pubblico e identità del brand."
            },
            {
              id: "02",
              title: "Design",
              text: "Interfacce estetiche, funzionali e costruite per guidare l’attenzione."
            },
            {
              id: "03",
              title: "Esperienza",
              text: "Siti veloci, intuitivi e pensati per funzionare su ogni schermo."
            }
          ].map((item, index) => (
            <motion.div 
              key={item.id}
              className="text-center md:text-left flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-sm font-bold tracking-widest uppercase opacity-40 mb-6 block font-display">
                — {item.id}
              </span>
              <h3 className="text-2xl font-display font-bold mb-4">
                {item.title}
              </h3>
              <p className="font-medium opacity-80 leading-relaxed text-lg max-w-xs text-balance">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
