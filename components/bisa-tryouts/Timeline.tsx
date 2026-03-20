'use client';

import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';

export function Timeline() {
  const {t} = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-[#022c22] text-white overflow-x-hidden">
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
          <h2 className="font-montserrat font-black text-5xl sm:text-6xl tracking-tighter uppercase text-[#ccff00] mb-6">
            {t.timeline.headline}
          </h2>
          <p className="text-xl text-white/[0.78] font-light max-w-2xl mx-auto leading-[1.65]">
            {t.timeline.intro}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{scaleY: 0}}
            whileInView={{scaleY: 1}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 1, ease: 'easeInOut'}}
            className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 origin-top"
          />

          <div className="space-y-12 sm:space-y-16">
            {t.timeline.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-100px'}}
                transition={{duration: 0.5, delay: i * 0.2}}
                className={`relative flex items-center md:justify-between ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-[#ccff00] rounded-full border-2 sm:border-4 border-[#022c22] flex items-center justify-center font-montserrat font-black text-base sm:text-xl text-[#0a1f14] z-10 md:-translate-x-1/2 shadow-lg">
                  {i + 1}
                </div>

                <div className={`w-full md:w-5/12 pl-14 sm:pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                  <div className="bg-[#113321] p-5 sm:p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md transition-shadow">
                    <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-[16px] text-white/[0.78] leading-[1.65]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
