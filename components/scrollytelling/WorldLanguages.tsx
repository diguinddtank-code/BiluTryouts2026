'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LANGUAGES = [
  'PORTUGUÊS', 'ENGLISH', 'ESPAÑOL', 'FRANÇAIS', 'CREOLE', 'KOREAN', 
  'ARABIC', 'HINDI', 'GERMAN', 'ITALIAN', 'MANDARIN', 'JAPANESE'
];

export function WorldLanguages() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      ref={elementRef as any}
      className="relative min-h-screen bg-[#080808] flex flex-col items-center justify-center overflow-hidden py-24 px-6"
    >
      {/* Background Parallax Text */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="flex flex-wrap gap-8 p-12 text-[12vw] font-black leading-none uppercase">
          {LANGUAGES.map((lang, i) => (
            <span key={i} className="whitespace-nowrap">{lang}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <span 
          className={`inline-block font-mono text-xs tracking-[0.3em] text-[#D0021B] mb-8 transition-all duration-700 delay-100 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.worldLanguages.label}
        </span>

        <h2 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter text-[#F5F5F5] mb-12 uppercase">
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-700 delay-300 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.worldLanguages.headline1}
            </span>
          </div>
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-700 delay-500 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.worldLanguages.headline2}
            </span>
          </div>
        </h2>

        <p 
          className={`max-w-2xl mx-auto text-lg md:text-xl text-[#F5F5F5]/60 font-medium leading-relaxed transition-all duration-700 delay-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.worldLanguages.sub}
        </p>

        {/* Language Pills Cascade */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {LANGUAGES.slice(0, 8).map((lang, i) => (
            <div 
              key={i}
              className={`px-6 py-3 border border-[#F5F5F5]/10 bg-[#111111] text-xs font-bold tracking-widest text-[#F5F5F5] transition-all duration-500 ${
                isIntersecting 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-90'
              }`}
              style={{ transitionDelay: `${800 + (i * 100)}ms` }}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Line */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent to-[#D0021B] transition-all duration-1000 delay-1000 ${
          isIntersecting ? 'h-32' : 'h-0'
        }`}
      />
    </section>
  );
}
