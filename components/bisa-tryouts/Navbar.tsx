'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {useLanguage} from './LanguageContext';
import {Language} from '@/lib/i18n';

export function Navbar() {
  const {language, setLanguage, t} = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: Language[] = ['EN', 'ES', 'PT'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a1f14]/90 backdrop-blur-md border-b border-[#ccff00]/20 py-2' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 md:translate-y-4">
              <Image
                src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
                alt="BISA Logo"
                fill
                unoptimized={true}
                className="object-contain transition-all duration-300 drop-shadow-[0_0_10px_rgba(204,255,0,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(204,255,0,0.6)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Language Selectors */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-md font-montserrat font-bold text-[9px] sm:text-[12px] tracking-widest transition-all duration-200 border flex items-center ${
                  language === lang
                    ? 'bg-[#ccff00] text-[#0a1f14] border-[#ccff00]'
                    : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <span className="uppercase flex items-center justify-center">
                  <span className="text-[16px] leading-none">
                    {lang === 'EN' ? '🇺🇸' : lang === 'ES' ? '🇪🇸' : '🇧🇷'}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Register Button */}
          <button
            onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-[#ccff00] text-[#0a1f14] font-montserrat font-black text-[12px] uppercase tracking-widest rounded-md hover:bg-white transition-colors duration-300"
          >
            REGISTER <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
