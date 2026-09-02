import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';
import { SEO } from '@/src/components/SEO';

export function NotFound() {
  return (
    <>
      <SEO title="404 - Pagina non trovata" description="La pagina che cerchi non è disponibile." />
      <div className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-8xl md:text-[150px] font-display font-bold text-[#C6FF00] mb-4 leading-none tracking-tighter">404</h1>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-50 mb-6 tracking-tight text-balance">
          Pagina non trovata
        </h2>
        <p className="text-xl text-zinc-400 font-light mb-12 text-balance leading-relaxed">
          Sembra che la pagina che stai cercando non esista o sia stata spostata.
        </p>
        <Link to="/">
          <Button size="lg" className="font-semibold">
            Torna alla Home
          </Button>
        </Link>
      </div>
      </div>
    </>
  );
}
