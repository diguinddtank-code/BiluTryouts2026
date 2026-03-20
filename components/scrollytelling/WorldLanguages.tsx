'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export function WorldLanguages() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.6 });

  const headlineLine1 = "EVERYONE".split('');
  const headlineLine2 = "IS WELCOME".split('');

  return (
    <section 
      ref={elementRef as any}
      className="relative bg-[#022c22] overflow-hidden flex flex-col items-center justify-center pt-12 pb-24 md:pt-16 md:pb-32"
    >
      {/* Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(204,255,0,0.04) 0%, transparent 70%)' }} />

      {/* Foreground Text */}
      <div className="relative z-10 flex flex-col items-center text-center pointer-events-none px-4">
        <span 
          className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: '100ms'
          }}
        >
          THE WORLD TRAINS HERE
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
          className="font-outfit text-lg text-[#BFBFBF] max-w-lg text-center transition-all duration-700 ease-out"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '300ms'
          }}
        >
          {t.worldLanguages.sub}
        </p>

        <div 
          className="relative w-screen max-w-5xl h-[300px] md:h-[400px] mt-16 overflow-hidden rounded-2xl transition-all duration-1000 ease-out pointer-events-auto shadow-2xl"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          <Image
            src="https://i.imgur.com/3DJsUvI.jpeg"
            alt="Athletes training"
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
            <span className="font-montserrat font-bold text-sm md:text-base tracking-[4px] text-white uppercase text-center px-4 drop-shadow-md">
              Athletes from 6+ countries train together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
