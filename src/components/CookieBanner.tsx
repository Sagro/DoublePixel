import { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6">
            <p className="text-zinc-300 text-sm flex-grow">
              Utilizziamo cookie tecnici per il corretto funzionamento del sito. 
              Continuando la navigazione, accetti la nostra <a href="/cookie-policy" className="text-[#C6FF00] underline underline-offset-2">Cookie Policy</a> e <a href="/privacy-policy" className="text-[#C6FF00] underline underline-offset-2">Privacy Policy</a>.
            </p>
            <div className="flex shrink-0 gap-3">
              <Button size="sm" onClick={handleAccept} className="w-full md:w-auto font-semibold">
                Accetta
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
