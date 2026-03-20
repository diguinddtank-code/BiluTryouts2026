'use client';

import {motion} from 'motion/react';
import { Trophy, Medal, Star } from 'lucide-react';

export function Championships() {
  const stats = [
    {
      title: '2024 SC State Cup',
      subtitle: 'Finalists',
      icon: Trophy,
    },
    {
      title: '2023 CPL',
      subtitle: 'Champions',
      icon: Medal,
    },
    {
      title: 'Top 10 in SC',
      subtitle: '(U15)',
      icon: Star,
    },
  ];

  return (
    <section className="py-24 bg-[#022c22] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            // CHAMPIONSHIP PEDIGREE
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl flex flex-col items-center">
            <span className="block">WE DON&apos;T JUST PLAY.</span>
            <span className="block text-[#ccff00] drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]">WE COMPETE.</span>
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
            BISA teams consistently perform at the highest levels of youth soccer in South Carolina.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-100px'}}
                transition={{duration: 0.5, delay: i * 0.15}}
                className="min-w-[280px] sm:min-w-0 snap-center bg-gradient-to-br from-[#022c22] to-[#113321] rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl hover:border-[#ccff00]/30 transition-all duration-500 relative overflow-hidden group"
              >
                {/* Metallic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-16 h-16 bg-[#022c22] rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-inner relative z-10">
                  <Icon className="w-8 h-8 text-[#ccff00]" />
                </div>
                
                <h3 className="font-montserrat font-black text-3xl sm:text-4xl uppercase text-white mb-2 tracking-tight relative z-10">
                  {stat.title}
                </h3>
                <p className="text-[#ccff00] font-bold text-lg sm:text-xl uppercase tracking-widest relative z-10">
                  {stat.subtitle}
                </p>
                
                {/* Decorative Number */}
                <div className="absolute -bottom-4 -right-4 font-montserrat font-black text-8xl text-white/5 select-none pointer-events-none z-0">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
