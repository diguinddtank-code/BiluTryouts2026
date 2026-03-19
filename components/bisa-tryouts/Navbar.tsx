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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a1a0a]/80 backdrop-blur-md border-b border-[#ccff00]/20 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="flex items-center gap-3 min-w-0 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
                alt="BISA Logo"
                fill
                unoptimized={true}
                className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(204,255,0,0.6)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-montserrat font-bold text-base sm:text-lg tracking-tight truncate text-white group-hover:text-[#ccff00] transition-colors duration-300">
              <span className="hidden sm:inline">{t.nav.title}</span>
              <span className="sm:hidden">BISA</span>
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#122912] p-1 rounded-full border border-white/10 flex-shrink-0">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`w-10 h-10 flex items-center justify-center text-lg rounded-full transition-all duration-200 ${
                  language === lang
                    ? 'bg-[#ccff00] shadow-sm scale-110'
                    : 'hover:bg-white/10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'
                }`}
                title={lang}
              >
                {lang === 'EN' ? '🇺🇸' : lang === 'ES' ? '🇪🇸' : '🇧🇷'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
