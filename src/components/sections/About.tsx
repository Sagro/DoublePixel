import { motion } from 'motion/react';

export function About() {
  const skills = [
    "Web Design", "UX/UI", "WordPress", "Landing Page", 
    "Google Ads", "Meta Ads", "Social Media", "SEO base"
  ];

  return (
    <section id="chisiamo" className="py-24 bg-[#0F0F0F] border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/5] bg-white/5 overflow-hidden relative border border-white/10">
              <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
              {/* Optional Placeholder Photo */}
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop" 
                alt="Double Pixel - Web Agency Roma" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                loading="lazy"
                onLoad={(e) => {
                  (e.target as HTMLImageElement).previousElementSibling?.remove(); // remove pulse placeholder
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 to-transparent pointer-events-none" />
            </div>
            
            {/* Graphic Detail */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-white/10 hidden md:block">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#C6FF00]" />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.h2 
              className="text-[40px] md:text-[60px] font-display font-black italic tracking-tighter uppercase leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Il digitale, <br />
              <span className="text-white/20">con intenzione.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-6 text-balance">
                Siamo Double Pixel, una Web Agency con base a Roma, specializzata in progettazione di siti web e presenze digitali che uniscono identità, chiarezza e attenzione all’esperienza utente. 
              </p>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 text-balance">
                Lavoriamo con realtà che vogliono raccontarsi meglio online attraverso un design contemporaneo, contenuti mirati e soluzioni curate.
              </p>

              <div className="mb-12">
                <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-6 font-display">Competenze</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 border border-white/10 text-white/80 text-[11px] font-bold uppercase tracking-widest hover:border-[#C6FF00] hover:text-[#C6FF00] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 inline-block">
                <span className="font-display text-2xl font-black italic tracking-tight text-white uppercase">
                  Double Pixel
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
