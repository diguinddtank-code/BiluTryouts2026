'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function EpicCta() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as any}
      className="relative py-32 bg-[#022c22] flex flex-col items-center justify-center overflow-hidden px-6 border-t border-white/5"
    >
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-montserrat font-black leading-none tracking-tighter text-white mb-8 uppercase">
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-700 delay-100 ${
                isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {t.epicCta.line1}
            </span>
          </div>
          <div className="overflow-hidden">
            <span 
              className={`block text-[#ccff00] transition-all duration-700 delay-200 ${
                isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {t.epicCta.line2}
            </span>
          </div>
        </h2>

        <p 
          className={`max-w-2xl mx-auto text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t.epicCta.sub}
        </p>

        <div 
          className={`transition-all duration-700 delay-400 ${
            isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <a 
            href="https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc3OTAyMDM4M3x1dW9IaisxRnNyWFQxTVp3SE13WFFwVFJPZU12S0x2OG9OVkNBMk94ZDRnPQ==&program_id=92864" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-[#ccff00] text-[#0a1f14] text-sm sm:text-base font-montserrat font-black tracking-widest uppercase rounded-xl hover:bg-white transition-colors duration-300 shadow-lg"
          >
            {t.epicCta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
