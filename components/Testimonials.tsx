'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/components/bisa-tryouts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#022c22] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(204,255,0,0.03) 0%, transparent 70%)' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-4 block">
            // {t.testimonials.headline}
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tighter uppercase text-white drop-shadow-2xl">
            {t.testimonials.subheadline}
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#022c22] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#022c22] to-transparent z-20 pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] items-stretch gap-6 sm:gap-8 px-4" style={{ animationDuration: '40s' }}>
          {[...t.testimonials.items, ...t.testimonials.items, ...t.testimonials.items, ...t.testimonials.items].map((item, i) => (
            <div 
              key={i} 
              className="group relative w-[300px] sm:w-[400px] flex-shrink-0 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#ccff00]/30 rounded-2xl p-6 sm:p-8 transition-all duration-500 flex flex-col justify-between whitespace-normal backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#ccff00]/10 transition-colors duration-500">
                <Quote size={48} className="rotate-180" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={16} className="fill-[#ccff00] text-[#ccff00]" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-outfit font-light text-white/80 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1 relative z-10">
                <span className="font-montserrat font-bold text-white text-sm sm:text-base tracking-wide">
                  {item.author}
                </span>
                <span className="text-[#ccff00] font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
