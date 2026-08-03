import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Logo } from '@/src/components/ui/Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Progetti', href: '#progetti' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Metodo', href: '#metodo' },
    { label: 'Chi siamo', href: '#chisiamo' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If not on home page, let it navigate to /#section
    if (location.pathname !== '/') return;
    
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 h-[80px] border-b border-white/10 flex items-center',
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="w-full px-6 md:px-10">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="group hover:opacity-90 transition-opacity z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-[11px] uppercase tracking-widest font-semibold">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={`/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#C6FF00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/#contatti" onClick={(e) => handleNavClick(e, '#contatti')} className="inline-block">
              <button className="bg-[#C6FF00] text-black px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-tight hover:scale-105 transition-transform">
                Parliamo del tuo progetto
              </button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-zinc-100 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={cn(
          "fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 w-full px-6">
          <ul className="flex flex-col items-center space-y-6 text-2xl font-display font-medium w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <a 
                  href={`/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-zinc-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/#contatti" onClick={(e) => handleNavClick(e, '#contatti')} className="w-full mt-4">
            <button className="w-full bg-[#C6FF00] text-black px-6 py-4 rounded-full text-[13px] font-bold uppercase tracking-tight">
              Parliamo del tuo progetto
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
