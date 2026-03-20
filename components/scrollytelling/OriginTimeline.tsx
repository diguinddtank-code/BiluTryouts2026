'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

const SUGGESTIONS = [
  "SUGGESTED: Academy founding / early training photos",
  "SUGGESTED: First competition / team photo",
  "SUGGESTED: Projeto Bilu launch / humanitarian action",
  "SUGGESTED: MLS Next competition / current team"
];

export function OriginTimeline() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) setActiveIndex(index);
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#080808] text-[#F5F5F5] py-32">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sonar {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-sonar { animation: sonar 2s ease infinite; }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Sticky Header (Desktop Only) */}
        <div className="hidden lg:block w-[40%] relative">
          <div className="sticky top-[20vh]">
            <span className="block font-barlow text-[11px] tracking-[6px] text-[#D0021B] uppercase mb-4">
              {t.timeline.headline}
            </span>
            <div className="relative">
              <div className="font-bebas text-[clamp(160px,22vw,260px)] text-[#F5F5F5] opacity-[0.05] leading-none select-none transition-all duration-500">
                {String(activeIndex + 1).padStart(2, '0')}
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pr-8">
                {t.timeline.steps.map((step, i) => (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full transition-all duration-500"
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      transform: activeIndex === i ? 'translateY(-50%)' : 'translateY(-30%)',
                      pointerEvents: activeIndex === i ? 'auto' : 'none'
                    }}
                  >
                    <h3 className="font-bebas text-[clamp(36px,4vw,56px)] leading-[0.9] text-[#F5F5F5] uppercase">
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden mb-12">
          <span className="block font-barlow text-[11px] tracking-[6px] text-[#D0021B] uppercase mb-4">
            {t.timeline.headline}
          </span>
        </div>

        {/* Right Column: Scrolling Cards */}
        <div className="w-full lg:w-[60%] flex flex-col gap-24 lg:gap-48 pb-[20vh]">
          {t.timeline.steps.map((step, i) => {
            const isProjetoBilu = i === 2; // Card 3
            
            return (
              <div 
                key={i}
                ref={el => { cardRefs.current[i] = el; }}
                className={`relative pl-6 md:pl-10 transition-all duration-700 ease-out ${
                  activeIndex >= i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{
                  borderLeftWidth: isProjetoBilu ? '4px' : '2px',
                  borderLeftColor: isProjetoBilu ? '#D0021B' : 'rgba(255,255,255,0.2)',
                  borderLeftStyle: 'solid'
                }}
              >
                {/* Sonar Dot */}
                <div className="absolute top-0 -left-[5px] md:-left-[7px]">
                  <div className="relative w-[8px] h-[8px] md:w-[12px] md:h-[12px] bg-[#D0021B]">
                    <div className="absolute inset-0 border-2 border-[#D0021B] animate-sonar" />
                  </div>
                </div>

                {/* Mobile Number & Title */}
                <div className="lg:hidden mb-6">
                  <div className="font-bebas text-6xl text-[#F5F5F5] opacity-10 leading-none mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bebas text-4xl leading-[0.9] text-[#F5F5F5] uppercase">
                    {step.title}
                  </h3>
                </div>

                {/* Image Placeholder */}
                <div className="mb-8 w-full">
                  <ImagePlaceholder 
                    aspectRatio="16/9" 
                    suggestion={SUGGESTIONS[i] || "SUGGESTED: Timeline event photo"} 
                  />
                </div>

                {/* Description */}
                <div className="bg-[#111111] p-6 md:p-8 border border-white/[0.06]">
                  <p className="font-dm text-base md:text-lg text-[#BFBFBF] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
