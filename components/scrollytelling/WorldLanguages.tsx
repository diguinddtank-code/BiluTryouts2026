'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FLAGS = [
  { emoji: '🇧🇷', name: 'BRAZIL' }, { emoji: '🇺🇸', name: 'USA' }, { emoji: '🇨🇺', name: 'CUBA' },
  { emoji: '🇸🇷', name: 'SURINAME' }, { emoji: '🇵🇪', name: 'PERU' }, { emoji: '🇭🇹', name: 'HAITI' },
  { emoji: '🇵🇹', name: 'PORTUGAL' }, { emoji: '🇺🇦', name: 'UKRAINE' }, { emoji: '🇭🇳', name: 'HONDURAS' },
  { emoji: '🇿🇦', name: 'SOUTH AFRICA' }, { emoji: '🇲🇦', name: 'MOROCCO' }, { emoji: '🇨🇮', name: 'IVORY COAST' },
  { emoji: '🇧🇫', name: 'BURKINA FASO' }, { emoji: '🇵🇾', name: 'PARAGUAY' }, { emoji: '🇨🇱', name: 'CHILE' },
  { emoji: '🇪🇸', name: 'SPAIN' }, { emoji: '🇫🇷', name: 'FRANCE' }, { emoji: '🇩🇴', name: 'DOMINICAN REP.' },
  { emoji: '🇸🇻', name: 'EL SALVADOR' }, { emoji: '🇲🇼', name: 'MALAWI' }, { emoji: '🇹🇷', name: 'TURKEY' },
  { emoji: '🇲🇴', name: 'MACAU' }, { emoji: '🇩🇿', name: 'ALGERIA' }
];

interface FlagStyle {
  left: string;
  rotation: number;
  delay: number;
  driftDuration: number;
  driftDelay: number;
  zIndex: number;
}

export function WorldLanguages() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.6 });
  const [flagStyles, setFlagStyles] = useState<FlagStyle[]>([]);
  const [displayFlags, setDisplayFlags] = useState(FLAGS);

  useEffect(() => {
    const t = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      const activeFlags = isMobile ? FLAGS.slice(0, 12) : FLAGS;
      setDisplayFlags(activeFlags);

      const styles = activeFlags.map((_, i) => ({
        left: `${5 + Math.random() * 85}%`,
        rotation: -8 + Math.random() * 16,
        delay: i * 60,
        driftDuration: 8 + Math.random() * 6,
        driftDelay: Math.random() * 4,
        zIndex: Math.floor(Math.random() * 20) + 10
      }));
      setFlagStyles(styles);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const headlineLine1 = "EVERYONE".split('');
  const headlineLine2 = "IS WELCOME".split('');

  return (
    <section 
      ref={elementRef as any}
      className="relative min-h-[55vh] md:min-h-[90vh] bg-[#080808] overflow-hidden flex flex-col items-center justify-center"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatDrift {
          0% { transform: translateY(0) rotate(var(--rot)); }
          50% { transform: translateY(-18px) rotate(calc(var(--rot) + 2deg)); }
          100% { transform: translateY(0) rotate(var(--rot)); }
        }
      `}} />

      {/* Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(208,2,27,0.04) 0%, transparent 70%)' }} />

      {/* Foreground Text */}
      <div className="relative z-[100] flex flex-col items-center text-center pointer-events-none px-4">
        <span 
          className="font-barlow font-bold text-[11px] tracking-[6px] text-[#D0021B] uppercase mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: '300ms'
          }}
        >
          THE WORLD TRAINS HERE
        </span>

        <h2 className="font-bebas text-[clamp(44px,10vw,130px)] leading-[0.85] tracking-tight flex flex-col items-center mb-8">
          <div className="overflow-hidden flex">
            {headlineLine1.map((char, i) => (
              <span 
                key={i} 
                className="inline-block text-[#F5F5F5] transition-all duration-500"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(-40px)',
                  transitionDelay: `${200 + (i * 25)}ms`,
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
                className="inline-block text-[#D0021B] transition-all duration-500"
                style={{
                  opacity: isIntersecting ? 1 : 0,
                  transform: isIntersecting ? 'translateY(0)' : 'translateY(-40px)',
                  transitionDelay: `${200 + (headlineLine1.length * 25) + (i * 25)}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </h2>

        <p 
          className="font-dm text-lg text-[#BFBFBF] max-w-lg text-center transition-all duration-700 ease-out"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '800ms'
          }}
        >
          {t.worldLanguages.sub}
        </p>
      </div>

      {/* Floating Flags */}
      {displayFlags.map((flag, i) => {
        const style = flagStyles[i];
        if (!style) return null;

        const hasLanded = isIntersecting;
        const animationDelay = style.delay;
        const totalLandingTime = (displayFlags.length * 60) + 700;

        return (
          <div 
            key={i}
            className="absolute bottom-[-100px] flex flex-col items-center group cursor-default transition-all duration-200 ease-in-out hover:scale-130 hover:z-50"
            style={{
              left: style.left,
              zIndex: style.zIndex,
              '--rot': `${style.rotation * 0.3}deg`,
              transform: hasLanded 
                ? `translateY(0) rotate(${style.rotation * 0.3}deg)` 
                : `translateY(120px) rotate(${style.rotation}deg)`,
              opacity: hasLanded ? 1 : 0,
              transition: `transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${animationDelay}ms, opacity 0.7s ease ${animationDelay}ms`,
              animation: hasLanded ? `floatDrift ${style.driftDuration}s ease-in-out ${totalLandingTime + style.driftDelay * 1000}ms infinite` : 'none',
              filter: 'drop-shadow(0 0 0 rgba(208,2,27,0))'
            } as React.CSSProperties}
          >
            <span className="text-3xl md:text-5xl lg:text-7xl group-hover:drop-shadow-[0_0_12px_rgba(208,2,27,0.5)] transition-all duration-200">
              {flag.emoji}
            </span>
            <span className="absolute top-full mt-2 font-barlow text-[10px] tracking-[2px] text-[#666666] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {flag.name}
            </span>
          </div>
        );
      })}
    </section>
  );
}
