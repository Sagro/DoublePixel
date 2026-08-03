import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';

export function Hero() {
  return (
    <section id="home" className="relative flex flex-col md:flex-row md:items-stretch overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-24 left-[72px] pointer-events-none hidden lg:block">
        <div className="w-64 h-64 rounded-full border border-[#C6FF00]/20 absolute -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-white/5 absolute -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center md:border-r border-white/10 relative z-10 min-h-[85svh] md:min-h-[100svh] pt-32 md:pt-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-[1px] bg-[#C6FF00]"></div>
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#C6FF00] font-bold shadow-[0_0_10px_rgba(198,255,0,0.3)]">
                Web Design · Strategy
              </span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-[60px] md:text-[70px] lg:text-[84px] leading-[0.88] font-display font-black tracking-tighter mb-8 italic uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Design</span><br/>
            che fa la<br/>
            <span className="text-[#C6FF00]">differenza.</span>
          </motion.h1>

          <motion.p 
            className="text-lg text-white/60 leading-relaxed max-w-md font-light mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Siamo una Web Agency con base a Roma. Creiamo siti web e presenze digitali che aiutano brand, professionisti e progetti a distinguersi, comunicare meglio e crescere online.
          </motion.p>

          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#progetti" className="border-b-2 border-[#C6FF00] pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#C6FF00] transition-colors">
              Scopri i progetti
            </a>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] backdrop-blur-sm z-10">01</div>
              <div className="w-8 h-8 rounded-full bg-[#C6FF00] border border-black flex items-center justify-center text-[10px] text-black font-bold z-20">+14</div>
            </div>
          </motion.div>

          <motion.div
            className="md:hidden mt-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-[#C6FF00] to-transparent"></div>
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 py-16 md:p-12 lg:p-20 flex flex-col justify-between md:min-h-[100svh] relative z-10">
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl -z-10" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col h-full justify-between relative"
        >
          {/* Services Core Preview */}
          <div className="mt-auto md:mb-auto bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl backdrop-blur-md shadow-2xl">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6FF00]">Servizi Core</h4>
              <span className="text-[10px] font-mono opacity-50">[01—04]</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col group">
                <span className="text-3xl font-black italic font-display text-white/20 group-hover:text-white transition-colors duration-300">01</span>
                <div className="w-4 h-[1px] bg-[#C6FF00] my-2 scale-0 group-hover:scale-100 origin-left transition-transform duration-300" />
                <span className="text-[10px] uppercase tracking-tighter font-semibold">Web Development</span>
              </div>
              <div className="flex flex-col group">
                <span className="text-3xl font-black italic font-display text-white/20 group-hover:text-white transition-colors duration-300">02</span>
                <div className="w-4 h-[1px] bg-[#C6FF00] my-2 scale-0 group-hover:scale-100 origin-left transition-transform duration-300" />
                <span className="text-[10px] uppercase tracking-tighter font-semibold">Digital Strategy</span>
              </div>
              <div className="flex flex-col group">
                <span className="text-3xl font-black italic font-display text-white/20 group-hover:text-white transition-colors duration-300">03</span>
                <div className="w-4 h-[1px] bg-[#C6FF00] my-2 scale-0 group-hover:scale-100 origin-left transition-transform duration-300" />
                <span className="text-[10px] uppercase tracking-tighter font-semibold">Google Ads</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col gap-4">
            <p className="text-[10px] text-white/50 uppercase tracking-widest max-w-[250px]">
              Siti web, campagne e strategie digitali costruite con intenzione.
            </p>
            <div className="w-full h-[2px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent shadow-[0_0_10px_rgba(198,255,0,0.5)]"
                animate={{ left: ['-100%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
