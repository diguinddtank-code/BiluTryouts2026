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
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            {`// THE PROCESS`}
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl">
            {t.timeline.headline}
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
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
