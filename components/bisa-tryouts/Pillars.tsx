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
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-[11px] font-bold text-[#ccff00] uppercase tracking-[0.2em]">BISA ACADEMY</span>
          </div>
          <h2 className="font-montserrat font-black text-[clamp(2rem,10vw,3.75rem)] tracking-tighter uppercase text-[#ccff00] leading-none">
            {t.pillars.headline}
          </h2>
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
