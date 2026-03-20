'use client';

import {motion} from 'motion/react';
import Image from 'next/image';
import {useLanguage} from './LanguageContext';

export function Leagues() {
  const {t} = useLanguage();

  const logos = [
    { type: 'image', src: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png', alt: 'BISA' },
    { type: 'image', src: 'https://flosoccer.ottosport.ai/_files/tournaments-training/tournaments/usys_sc_statecup_tm_nodate_1c_blk.png', alt: 'SC State Cup' },
    { type: 'image', src: 'https://i.imgur.com/B6rzPN4.png', alt: 'SCYSA' },
    { type: 'text', text: 'US CLUB SOCCER' },
    { type: 'text', text: 'CPL' },
  ];

  const marqueeItems = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 sm:py-16 bg-[#0a1f14] text-white overflow-hidden border-y border-[#ccff00]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-80px'}}
          transition={{duration: 0.55, ease: "easeOut"}}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-4 block">
            // BISA ACADEMY
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-tighter uppercase text-white mb-6 italic drop-shadow-2xl">
            {t.leagues.headline}
          </h2>
          <div className="w-12 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            {t.leagues.subheadline}
          </p>
        </motion.div>

        {/* COMPACT STATEMENT STRIP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#022c22] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase leading-none tracking-tight mb-1">
              ELITE.
            </h3>
            <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-white/40 uppercase leading-none tracking-tight mb-3">
              EVERY CATEGORY.
            </h3>
            <p className="text-[#ccff00] font-bold text-xs sm:text-sm tracking-widest uppercase">
              COMPETING AT THE HIGHEST LEVEL IN SCYSA
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {['U13', 'U14', 'U15', 'U16', 'U17', 'U19'].map((age) => (
              <div key={age} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg font-montserrat font-bold text-white/80 text-xs sm:text-sm">
                {age}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <div className="relative w-full overflow-hidden bg-[#0a1f14] py-6 border-y border-white/5">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a1f14] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a1f14] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="px-6 sm:px-10 flex items-center justify-center group h-[30px] sm:h-[40px]">
                {item.type === 'image' ? (
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    width={100}
                    height={40}
                    unoptimized={true}
                    className={`object-contain max-h-[30px] sm:max-h-[40px] w-auto opacity-70 md:group-hover:opacity-100 transition-opacity duration-300 ${item.alt === 'SC State Cup' ? 'brightness-0 invert' : ''}`}
                  />
                ) : (
                  <span className="font-outfit font-black text-xl sm:text-2xl tracking-tight text-white/60 md:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {item.text}
                  </span>
                )}
              </div>
              {/* Separator */}
              <div className="h-4 sm:h-6 w-[1px] bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
