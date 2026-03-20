'use client';

import {motion} from 'motion/react';
import Image from 'next/image';
import {useLanguage} from './LanguageContext';

export function Leagues() {
  const {t} = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
  };

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
          className="text-center mb-16"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            // BISA ACADEMY
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl">
            {t.leagues.headline}
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            {t.leagues.subheadline}
          </p>
        </motion.div>

        {/* NEW STATEMENT STRIP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#022c22] border border-white/10 rounded-2xl p-6 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-none tracking-tight mb-2">
              FIRST DIVISION.
            </h3>
            <h3 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white/40 uppercase leading-none tracking-tight mb-4">
              EVERY CATEGORY.
            </h3>
            <p className="text-[#ccff00] font-bold text-sm sm:text-base tracking-widest uppercase">
              COMPETING AT THE HIGHEST LEVEL IN SCYSA
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {['U13', 'U14', 'U15', 'U16', 'U17', 'U19'].map((age) => (
              <div key={age} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-montserrat font-bold text-white/80 text-sm sm:text-base">
                {age}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-80px'}}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#ccff00]/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-20 flex items-center justify-center mb-8 w-full">
              <Image
                src="https://flosoccer.ottosport.ai/_files/tournaments-training/tournaments/usys_sc_statecup_tm_nodate_1c_blk.png"
                alt="SC State Cup"
                width={120}
                height={80}
                unoptimized={true}
                className="object-contain max-h-full brightness-0 invert opacity-100"
              />
            </div>
            <h3 className="font-montserrat font-bold text-xl tracking-[0.08em] uppercase mb-4 text-white">{t.leagues.cards[0].title}</h3>
            <p className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed">
              {t.leagues.cards[0].desc}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#ccff00]/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-20 flex items-center justify-center mb-8 w-full">
              <Image
                src="https://i.imgur.com/B6rzPN4.png"
                alt="SCYSA"
                width={120}
                height={80}
                unoptimized={true}
                className="object-contain max-h-full opacity-100"
              />
            </div>
            <h3 className="font-montserrat font-bold text-xl tracking-[0.08em] uppercase mb-4 text-white">{t.leagues.cards[1].title}</h3>
            <p className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed">
              {t.leagues.cards[1].desc}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#ccff00]/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center">
            <div className="h-20 flex items-center justify-center mb-8 w-full">
              <span className="font-outfit font-black text-6xl tracking-tighter text-white">
                CPL
              </span>
            </div>
            <h3 className="font-montserrat font-bold text-xl tracking-[0.08em] uppercase mb-4 text-white">{t.leagues.cards[2].title}</h3>
            <p className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed">
              {t.leagues.cards[2].desc}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <div className="relative w-full overflow-hidden bg-[#0a1f14] py-8 border-y border-white/5">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a1f14] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a1f14] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="px-8 sm:px-12 flex items-center justify-center group h-[40px]">
                {item.type === 'image' ? (
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    width={100}
                    height={40}
                    unoptimized={true}
                    className={`object-contain max-h-[40px] w-auto opacity-70 md:group-hover:opacity-100 transition-opacity duration-300 ${item.alt === 'SC State Cup' ? 'brightness-0 invert' : ''}`}
                  />
                ) : (
                  <span className="font-outfit font-black text-2xl tracking-tight text-white/60 md:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {item.text}
                  </span>
                )}
              </div>
              {/* Separator */}
              <div className="h-6 w-[1px] bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
