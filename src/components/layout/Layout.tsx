import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F0] min-h-screen flex font-sans select-none relative border-[4px] md:border-8 border-[#1A1A1A]">
      <aside className="w-[60px] border-r border-white/10 hidden md:flex flex-col items-center justify-between py-8 text-[10px] tracking-[0.3em] font-medium uppercase shrink-0 sticky top-0 h-screen overflow-hidden">
        <div className="rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>Double Pixel</div>
        <div className="w-px h-24 bg-gradient-to-b from-[#C6FF00] to-transparent"></div>
        <div className="rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>Web Agency Roma</div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
        
        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-center pointer-events-none">
          <a href="/#contatti" className="pointer-events-auto bg-[#C6FF00] text-black px-8 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-tight shadow-[0_0_20px_rgba(198,255,0,0.3)] hover:scale-105 transition-transform">
            Richiedi Preventivo
          </a>
        </div>
      </main>
    </div>
  );
}
