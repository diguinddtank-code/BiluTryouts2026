'use client';

import {motion, useInView} from 'motion/react';
import {useRef, useState, useEffect} from 'react';
import {useLanguage} from './LanguageContext';
import Image from 'next/image';

function Counter({from, to, duration = 2}: {from: number; to: number; duration?: number}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  const {t} = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-[#0a1f14] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.7}}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-montserrat font-black text-5xl sm:text-6xl text-[#ccff00] mb-2">
                <Counter from={0} to={6} />+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-[0.08em]">
                {t.about.stats.countries}
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-montserrat font-black text-5xl sm:text-6xl text-[#ccff00] mb-2">
                U7-U17
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-[0.08em]">
                {t.about.stats.ages}
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-montserrat font-black text-5xl sm:text-6xl text-[#ccff00] mb-2">
                CPL
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-[0.08em]">
                {t.about.stats.cpl}
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-montserrat font-black text-5xl sm:text-6xl text-[#ccff00] mb-2">
                SC
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-[0.08em]">
                {t.about.stats.sc}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.7, delay: 0.2}}
            className="flex flex-col gap-8"
          >
            <p className="text-xl sm:text-2xl leading-[1.65] font-light text-white/[0.78]">
              {t.about.paragraph}
            </p>
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="h-12 w-auto opacity-50 hover:opacity-100 transition-all">
                {/* Placeholder for SC Youth Soccer logo */}
                <div className="font-montserrat font-bold text-sm tracking-widest text-white">SC YOUTH SOCCER</div>
              </div>
              <div className="h-12 w-auto opacity-50 hover:opacity-100 transition-all">
                {/* Placeholder for CPL logo */}
                <div className="font-montserrat font-bold text-sm tracking-widest text-white">CAROLINA PREMIER LEAGUE</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
