'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TICKER_COUNTRIES = [
  'BRAZIL', 'USA', 'COLOMBIA', 'MEXICO', 'ARGENTINA', 'CHILE', 
  'PERU', 'ECUADOR', 'PARAGUAY', 'URUGUAY', 'BOLIVIA', 'VENEZUELA'
];

export function ProjetoBilu() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as any}
      className="relative min-h-screen bg-[#F5F5F5] text-[#080808] py-32 overflow-hidden"
    >
      {/* Label Reveal */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <span 
          className={`inline-block font-mono text-xs tracking-[0.3em] text-[#D0021B] mb-8 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.projetoBilu.label}
        </span>

        <h2 className="text-8xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-700 delay-200 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.projetoBilu.title1}
            </span>
          </div>
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-700 delay-400 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.projetoBilu.title2}
            </span>
          </div>
        </h2>

        <p 
          className={`max-w-xl text-2xl md:text-3xl font-bold leading-tight transition-all duration-700 delay-600 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.projetoBilu.sub}
        </p>
      </div>

      {/* Impact Numbers Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
        {t.projetoBilu.stats.map((stat, i) => (
          <div 
            key={i}
            className={`transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${800 + (i * 100)}ms` }}
          >
            <div className="text-5xl md:text-7xl font-black text-[#080808] mb-2">
              {stat.value}+
            </div>
            <div className="text-[10px] font-bold tracking-widest text-[#080808]/40 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Country Ticker */}
      <div className="relative w-full border-y border-[#080808]/10 py-12 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TICKER_COUNTRIES, ...TICKER_COUNTRIES].map((country, i) => (
            <span 
              key={i}
              className="text-4xl md:text-6xl font-black tracking-tighter px-12 opacity-10"
            >
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Quote Reveal */}
      <div className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <blockquote 
          className={`text-3xl md:text-5xl font-black leading-tight italic mb-8 transition-all duration-1000 delay-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          &quot;{t.projetoBilu.quote}&quot;
        </blockquote>
        <cite 
          className={`block font-mono text-xs tracking-widest text-[#D0021B] transition-all duration-700 delay-1200 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t.projetoBilu.attribution}
        </cite>
      </div>

      {/* Style for Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
