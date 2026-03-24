'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';

export function FloatingCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const regSection = document.getElementById('registration-section');
      
      // Show after scrolling 400px down
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 100, x: '-50%' }}
          className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-sm sm:max-w-md pointer-events-auto"
        >
          <a
            href="https://playmetrics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 bg-[#ccff00] text-[#0a1f14] font-montserrat font-black uppercase text-xs sm:text-sm tracking-widest rounded-full shadow-[0_10px_30px_rgba(204,255,0,0.4)] hover:shadow-[0_10px_40px_rgba(204,255,0,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-white/20"
          >
            {t.hero.cta}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
