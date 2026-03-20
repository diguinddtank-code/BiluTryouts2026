'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function EpicCta() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as any}
      className="relative min-h-screen bg-[#080808] flex flex-col items-center justify-center overflow-hidden py-32 px-6"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-gradient-radial from-[#D0021B]/20 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <h2 className="text-[clamp(3rem,15vw,15rem)] font-black leading-[0.8] tracking-tighter text-[#F5F5F5] mb-12 uppercase">
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-1000 delay-200 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.epicCta.line1}
            </span>
          </div>
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-1000 delay-400 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.epicCta.line2}
            </span>
          </div>
        </h2>

        <p 
          className={`max-w-2xl mx-auto text-xl sm:text-2xl md:text-3xl text-[#F5F5F5]/60 font-bold leading-tight mb-16 transition-all duration-1000 delay-600 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t.epicCta.sub}
        </p>

        {/* Breathing Button */}
        <div 
          className={`transition-all duration-1000 delay-800 ${
            isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <a 
            href="https://playmetrics.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-6 bg-[#D0021B] text-white text-lg font-black tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#D0021B] animate-pulse-slow"
          >
            {t.epicCta.button}
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D0021B] group-hover:border-white transition-colors" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D0021B] group-hover:border-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Style for Breathing Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(208, 2, 27, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 0 30px 10px rgba(208, 2, 27, 0.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
