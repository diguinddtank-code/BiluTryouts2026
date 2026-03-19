'use client';

import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

export function AnimatedStats() {
  const { t } = useLanguage();
  const { elementRef, isIntersecting } = useScrollReveal({ threshold: 0.5 });

  const countries = useCountUp(24, 2000, isIntersecting);
  const ages = useCountUp(12, 2000, isIntersecting);
  const reached = useCountUp(23, 2000, isIntersecting);

  return (
    <section 
      ref={elementRef as any}
      className="relative z-10 bg-[#080808] border-y border-[#F5F5F5]/5 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        {/* Stat 1 */}
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-black text-[#F5F5F5] tracking-tighter mb-4 leading-none">
            {countries}
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-[#D0021B] uppercase">
            {t.about.stats.countries}
          </div>
        </div>

        {/* Stat 2 */}
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-black text-[#F5F5F5] tracking-tighter mb-4 leading-none">
            {ages}
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-[#D0021B] uppercase">
            {t.about.stats.ages}
          </div>
        </div>

        {/* Stat 3 */}
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-black text-[#F5F5F5] tracking-tighter mb-4 leading-none">
            {reached}
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-[#D0021B] uppercase">
            {t.projetoBilu.stats[1].label}
          </div>
        </div>
      </div>
    </section>
  );
}
