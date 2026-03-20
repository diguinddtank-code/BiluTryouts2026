'use client';

import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';
import {Globe, User, Trophy, Medal, ShieldCheck} from 'lucide-react';

export function Pillars() {
  const {t} = useLanguage();

  const icons = [Globe, User, Trophy, Medal, ShieldCheck];

  return (
    <section className="py-12 sm:py-16 bg-[#0a1f14] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-20"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            // OUR DNA
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl">
            {t.pillars.headline}
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {t.pillars.cards.map((card, i) => {
            const Icon = icons[i] || Trophy;
            return (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-100px'}}
                transition={{duration: 0.5, delay: i * 0.15}}
                whileHover={{y: -8}}
                className="bg-[#0a1f14] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex-grow max-w-lg"
              >
                <div className="w-16 h-16 bg-[#113321] rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                  <Icon className="w-8 h-8 text-[#ccff00]" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl mb-4 tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/[0.78] leading-[1.65] font-light">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
