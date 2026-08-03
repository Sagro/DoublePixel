import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800/50 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <Link to="/" className="text-2xl font-display font-bold tracking-tight mb-4 block">
              Double Pixel<span className="text-[#C6FF00]">.</span>
            </Link>
            <p className="text-zinc-400 max-w-xs text-balance">
              Web Agency Roma. Sviluppo siti web, strategie digitali e design.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-display font-medium text-white mb-6">Navigazione</h4>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-zinc-400 hover:text-[#C6FF00] transition-colors">Home</a></li>
              <li><a href="/#progetti" className="text-zinc-400 hover:text-[#C6FF00] transition-colors">Progetti</a></li>
              <li><a href="/#servizi" className="text-zinc-400 hover:text-[#C6FF00] transition-colors">Servizi</a></li>
              <li><a href="/#metodo" className="text-zinc-400 hover:text-[#C6FF00] transition-colors">Metodo</a></li>
              <li><a href="/#chisiamo" className="text-zinc-400 hover:text-[#C6FF00] transition-colors">Chi siamo</a></li>
              <li><a href="/#contatti" className="text-zinc-400 hover:text-[#C6FF00] transition-colors">Contatti</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center py-6 bg-[#C6FF00] text-black font-bold text-[10px] uppercase tracking-widest px-6 mt-16 rounded-t-lg">
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:opacity-70 transition-opacity">Privacy</Link>
            <Link to="/cookie-policy" className="hover:opacity-70 transition-opacity">Cookie</Link>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>© {currentYear} Double Pixel</span>
            <div className="w-12 h-px bg-black hidden md:block"></div>
            <span>Designed with Intention</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
