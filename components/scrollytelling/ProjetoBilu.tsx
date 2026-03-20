'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

const TICKER_COUNTRIES = [
  { emoji: '🇧🇷', name: 'BRAZIL' }, { emoji: '🇺🇸', name: 'USA' }, { emoji: '🇨🇴', name: 'COLOMBIA' },
  { emoji: '🇲🇽', name: 'MEXICO' }, { emoji: '🇦🇷', name: 'ARGENTINA' }, { emoji: '🇨🇱', name: 'CHILE' },
  { emoji: '🇵🇪', name: 'PERU' }, { emoji: '🇪🇨', name: 'ECUADOR' }, { emoji: '🇵🇾', name: 'PARAGUAY' },
  { emoji: '🇺🇾', name: 'URUGUAY' }, { emoji: '🇧🇴', name: 'BOLIVIA' }, { emoji: '🇻🇪', name: 'VENEZUELA' }
];

function StatItem({ stat, index }: { stat: any, index: number }) {
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.5 });
  const { count, isComplete } = useCountUp(parseInt(stat.value) || 0, 2000);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (isComplete) {
      const t1 = setTimeout(() => setFlash(true), 0);
      const t2 = setTimeout(() => setFlash(false), 200);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isComplete]);

  const margins = ['md:mt-0', 'md:mt-8', 'md:mt-4', 'md:mt-12'];

  return (
    <div ref={elementRef as any} className={`relative overflow-hidden ${margins[index]} mb-8 md:mb-0`}>
      <div 
        className="absolute inset-0 font-bebas text-[clamp(120px,18vw,220px)] text-[#F5F5F5] opacity-[0.06] pointer-events-none leading-none select-none transition-transform duration-[3000ms] ease-out origin-bottom-left"
        style={{ transform: isIntersecting ? 'scale(1.05)' : 'scale(1)' }}
      >
        {stat.value}
      </div>
      <div className="relative z-10 pt-12 pb-4 px-4">
        <div className={`font-bebas text-[clamp(52px,7vw,90px)] leading-none transition-colors duration-200 ${flash ? 'text-[#D0021B]' : 'text-[#F5F5F5]'}`}>
          {count}+
        </div>
        <div className="font-barlow text-xs tracking-[3px] text-[#666666] uppercase mt-2">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export function ProjetoBilu() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.1 });
  const [quoteRotations, setQuoteRotations] = useState<number[]>([]);
  const quoteWords = t.projetoBilu.quote.split(' ');

  useEffect(() => {
    const t = setTimeout(() => {
      setQuoteRotations(quoteWords.map(() => -1 + Math.random() * 2));
    }, 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quoteWords.length]);

  return (
    <section ref={elementRef as any} className="relative bg-[#080808] text-[#F5F5F5] py-32 overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left { animation: marqueeLeft 35s linear infinite; }
        .animate-marquee-right { animation: marqueeRight 28s linear infinite; }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-24">
          <span className={`inline-block font-barlow text-[11px] tracking-[6px] text-[#D0021B] uppercase mb-8 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t.projetoBilu.label}
          </span>
          <h2 className="font-bebas text-[clamp(64px,10vw,140px)] leading-[0.85] tracking-tight uppercase mb-8">
            <div className="overflow-hidden">
              <span className={`block transition-all duration-700 delay-200 ${isIntersecting ? 'translate-y-0' : 'translate-y-full'}`}>
                {t.projetoBilu.title1}
              </span>
            </div>
            <div className="overflow-hidden">
              <span className={`block text-[#D0021B] transition-all duration-700 delay-400 ${isIntersecting ? 'translate-y-0' : 'translate-y-full'}`}>
                {t.projetoBilu.title2}
              </span>
            </div>
          </h2>
          <p className={`font-dm text-xl md:text-2xl text-[#BFBFBF] max-w-2xl leading-relaxed transition-all duration-700 delay-600 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {t.projetoBilu.sub}
          </p>
        </div>

        {/* Layout: Text+Numbers (Left) / Photo Collage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-32">
          
          {/* Left Column: Numbers & Portrait Image */}
          <div className="flex flex-col">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
              {t.projetoBilu.stats.map((stat, i) => (
                <StatItem key={i} stat={stat} index={i} />
              ))}
            </div>
            
            <div className={`w-full max-w-md transition-all duration-[600ms] delay-300 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <ImagePlaceholder 
                aspectRatio="3/4" 
                suggestion="SUGGESTED: Projeto Bilu — children on the field" 
              />
            </div>
          </div>

          {/* Right Column: Landscape & Square Images */}
          <div className="flex flex-col gap-8 lg:pt-24">
            <div className={`w-full transition-all duration-[600ms] delay-500 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <ImagePlaceholder 
                aspectRatio="16/9" 
                suggestion="SUGGESTED: Projeto Bilu — community moment" 
              />
            </div>
            <div className={`w-full max-w-lg self-end transition-all duration-[600ms] delay-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <ImagePlaceholder 
                aspectRatio="1/1" 
                suggestion="SUGGESTED: Volunteer group photo" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Country Ticker */}
      <div className="relative w-full overflow-hidden flex flex-col mb-32">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] cursor-default border-y border-white/[0.06] py-4 bg-transparent">
          {[...TICKER_COUNTRIES, ...TICKER_COUNTRIES].map((c, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl mx-6">{c.emoji}</span>
              <span className="font-bebas text-3xl text-[#F5F5F5] tracking-wider">{c.name}</span>
              <span className="text-[#D0021B] mx-6 text-xl">⬥</span>
            </div>
          ))}
        </div>
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] cursor-default border-b border-white/[0.06] py-4 bg-[#D0021B]/[0.04]">
          {[...TICKER_COUNTRIES, ...TICKER_COUNTRIES].reverse().map((c, i) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl mx-6">{c.emoji}</span>
              <span className="font-bebas text-3xl text-[#F5F5F5] tracking-wider">{c.name}</span>
              <span className="text-[#D0021B] mx-6 text-xl">⬥</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Quote */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="absolute top-[-80px] left-0 md:left-8 font-bebas text-[180px] text-[#D0021B] opacity-[0.07] pointer-events-none leading-none select-none">
          &quot;
        </div>
        <blockquote className="text-[clamp(24px,4vw,48px)] font-bebas tracking-wide leading-[1.1] mb-12">
          {quoteWords.map((word, i) => (
            <span 
              key={i} 
              className="inline-block mr-3 transition-all duration-700"
              style={{ 
                transform: isIntersecting ? `translateY(0) rotate(${quoteRotations[i] || 0}deg)` : 'translateY(20px) rotate(0deg)',
                opacity: isIntersecting ? 1 : 0,
                transitionDelay: `${800 + (i * 80)}ms`
              }}
            >
              {word}
            </span>
          ))}
        </blockquote>
        <div className="relative inline-block">
          <cite className={`block font-barlow text-[11px] tracking-[4px] text-[#BFBFBF] uppercase transition-all duration-700 delay-[1500ms] ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            {t.projetoBilu.attribution}
          </cite>
          <div 
            className="absolute -bottom-3 left-0 h-[1px] bg-[#D0021B] transition-all duration-800 ease-out delay-[1800ms]"
            style={{ width: isIntersecting ? '100%' : '0%' }}
          />
        </div>
      </div>

    </section>
  );
}
