import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/src/data/projects';
import { cn } from '@/src/lib/utils';

export function Projects() {
  return (
    <section id="progetti" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            className="text-[50px] md:text-[70px] font-display font-black tracking-tighter mb-8 italic uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Progetti <br/>
            <span className="text-white/20">selezionati</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-white/60 font-light text-balance leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Una raccolta di siti e identità digitali progettati per raccontare meglio un’idea, un brand o una comunità.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-12 items-stretch">
          {projects.map((project, index) => {
            return (
              <motion.div 
                key={project.id}
                className="group flex flex-col gap-6 h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl aspect-[4/3] w-full shrink-0 group/img backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Placeholder loading state */}
                  <img 
                    src={project.image} 
                    alt={`Screenshot del progetto ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 z-10"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${project.title.replace(' ', '+')}&background=18181b&color=fafafa&size=800&font-size=0.1`;
                    }}
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover/img:bg-transparent transition-colors duration-500 z-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-20" />
                  
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-[#C6FF00] text-[#0a0a0a] rounded-full flex items-center justify-center translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30 shadow-[0_0_20px_rgba(198,255,0,0.4)]">
                    <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                  </div>
                </a>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col group-hover:bg-white/[0.08] transition-colors flex-grow">
                  <span className="text-[10px] md:text-xs font-bold text-[#C6FF00] uppercase tracking-[0.2em] mb-2 md:mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-black italic tracking-tight text-white mb-3 group-hover:text-[#C6FF00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-md mb-4">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Realizzato da {project.credits || "Simone Sagramati"}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-20 pt-10 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-display font-medium text-white/70 italic">
            ...e molti altri progetti realizzati dietro le quinte.
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Questi sono solo alcuni dei lavori selezionati. Ogni progetto è un percorso unico studiato per le esigenze del cliente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
