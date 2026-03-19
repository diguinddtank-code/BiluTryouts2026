'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function OriginTimeline() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting, scrollProgress } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      ref={elementRef as any}
      className="relative min-h-[400vh] bg-[#080808] py-32 px-6"
    >
      {/* Sticky Section Header */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none z-10">
        <span 
          className={`inline-block font-mono text-xs tracking-[0.3em] text-[#D0021B] mb-8 transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.originTimeline.sectionTitle1}
        </span>

        <h2 className="text-8xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase mb-12 text-center">
          <div className="overflow-hidden">
            <span 
              className={`block transition-all duration-700 delay-200 ${
                isIntersecting ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {t.originTimeline.sectionTitle2}
            </span>
          </div>
        </h2>

        {/* Vertical Progress Line */}
        <div className="relative w-px h-64 bg-[#F5F5F5]/10 mt-12">
          <div 
            className="absolute top-0 left-0 w-full bg-[#D0021B] transition-all duration-75 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          {/* Moving Dot */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#D0021B] rounded-full shadow-[0_0_15px_rgba(208,2,27,0.5)] transition-all duration-75 ease-out"
            style={{ top: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="relative z-20 max-w-5xl mx-auto -mt-[50vh]">
        {t.originTimeline.milestones.map((milestone, i) => (
          <div 
            key={i}
            className={`min-h-[100vh] flex flex-col justify-center ${
              i % 2 === 0 ? 'items-start text-left' : 'items-end text-right'
            }`}
          >
            <div className={`max-w-md transition-all duration-1000 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <span className="font-mono text-xs tracking-widest text-[#D0021B] mb-4 block">
                {milestone.label}
              </span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-[#F5F5F5] mb-6 uppercase">
                {milestone.title}
              </h3>
              <p className="text-lg text-[#F5F5F5]/60 font-medium leading-relaxed">
                {milestone.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
