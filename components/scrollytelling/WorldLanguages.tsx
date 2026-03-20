'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';
import Image from 'next/image';

function Counter({from, to, duration = 2}: {from: number; to: number; duration?: number}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '0px'});
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function WorldLanguages() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.2 });

  const headlineLine1 = "EVERYONE".split('');
  const headlineLine2 = "IS WELCOME".split('');

  const flagCodes = ['br', 'us', 'es', 'fr', 'it', 'de', 'ar', 'mx', 'co', 'gb', 'jp', 'kr', 'pt', 'uy', 'cl', 'pe', 'ec', 'cr', 'hn', 'py'];
  const flags1 = flagCodes.map(code => ({
    src: `https://flagcdn.com/w80/${code}.png`,
    alt: code.toUpperCase()
  }));
  const flags2 = [...flags1].reverse();

  return (
    <section 
      ref={elementRef as any}
      className="relative bg-[#022c22] overflow-hidden flex flex-col items-center justify-center pt-12 pb-16 md:pt-16 md:pb-20"
    >
      {/* Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(204,255,0,0.04) 0%, transparent 70%)' }} />

      {/* Foreground Text */}
      <div className="relative z-10 flex flex-col items-center text-center pointer-events-none px-4 w-full">
        <span 
          className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: '100ms'
          }}
        >
          // THE WORLD TRAINS HERE
        </span>

        <h2 className="font-montserrat font-black text-[clamp(44px,10vw,130px)] leading-[0.85] tracking-tight flex flex-col items-center mb-8">
          <div className="overflow-hidden flex">
            {headlineLine1.map((char, i) => (
              <span 
                key={i} 
                className="inline-block text-[#F5F5F5] transition-all duration-500"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(-40px)',
                  transitionDelay: `${100 + (i * 20)}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div className="overflow-hidden flex">
            {headlineLine2.map((char, i) => (
              <span 
                key={i} 
                className="inline-block text-[#ccff00] transition-all duration-500"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(-40px)',
                  transitionDelay: `${100 + (headlineLine1.length * 20) + (i * 20)}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </h2>

        <p 
          className="font-outfit text-lg text-[#BFBFBF] max-w-lg text-center transition-all duration-700 ease-out mb-12"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '300ms'
          }}
        >
          {t.worldLanguages.sub}
        </p>

        {/* Flag Marquees */}
        <div className="w-full overflow-hidden flex flex-col gap-4 mb-16 relative"
             style={{
               opacity: isIntersecting ? 1 : 0,
               transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
               transition: 'all 1s ease-out 400ms'
             }}>
          {/* Add a subtle glow behind the flags */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-32 bg-[#ccff00]/10 blur-[50px] -z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap animate-marquee py-4" style={{ animationDuration: '40s' }}>
            {[...flags1, ...flags1, ...flags1, ...flags1].map((flag, i) => (
              <div key={i} className="mx-6 sm:mx-10 relative w-12 h-8 sm:w-20 sm:h-12 flex-shrink-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-300">
                <Image
                  src={flag.src}
                  alt={flag.alt}
                  fill
                  className="object-cover rounded-sm"
                  unoptimized={true}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-marquee py-4" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
            {[...flags2, ...flags2, ...flags2, ...flags2].map((flag, i) => (
              <div key={i} className="mx-6 sm:mx-10 relative w-12 h-8 sm:w-20 sm:h-12 flex-shrink-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-300">
                <Image
                  src={flag.src}
                  alt={flag.alt}
                  fill
                  className="object-cover rounded-sm"
                  unoptimized={true}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Integrated About Section */}
        <div 
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left pointer-events-auto px-4 sm:px-6 lg:px-8"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 500ms'
          }}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-4xl sm:text-5xl text-[#ccff00] mb-1">
                <Counter from={0} to={6} />+
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-[0.08em] leading-tight">
                {t.about.stats.countries}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-4xl sm:text-5xl text-[#ccff00] mb-1">
                U7-U19
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-[0.08em] leading-tight">
                {t.about.stats.ages}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-4xl sm:text-5xl text-[#ccff00] mb-1">
                CPL
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-[0.08em] leading-tight">
                {t.about.stats.cpl}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-4xl sm:text-5xl text-[#ccff00] mb-1">
                SC
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-[0.08em] leading-tight">
                {t.about.stats.sc}
              </span>
            </div>
          </div>

          {/* Paragraph */}
          <div className="flex flex-col gap-8">
            <p className="text-lg sm:text-xl leading-relaxed font-light text-white/[0.85]">
              {t.about.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
