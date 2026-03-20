'use client';

import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {useLanguage} from './LanguageContext';
import {ChevronDown} from 'lucide-react';

export function FAQ() {
  const {t} = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-[#022c22] text-white overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-[11px] font-bold text-[#ccff00] uppercase tracking-[0.2em]">BISA ACADEMY</span>
          </div>
          <h2 className="font-montserrat font-black text-[clamp(2rem,10vw,3.75rem)] tracking-tighter uppercase text-[#ccff00] leading-none">
            {t.faq.headline}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-100px'}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className={`bg-[#113321] rounded-2xl overflow-hidden shadow-sm border border-white/10 transition-all ${
                  isOpen ? 'border-l-4 border-l-[#ccff00] shadow-md' : 'border-l-4 border-l-transparent hover:border-l-white/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-montserrat font-bold text-lg sm:text-xl pr-8 transition-colors ${
                    isOpen ? 'text-white' : 'text-white/80'
                  }`}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{rotate: isOpen ? 180 : 0}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a1f14] flex items-center justify-center border border-white/10"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-[#ccff00]' : 'text-white/50'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{duration: 0.3, ease: 'easeInOut'}}
                    >
                      <div className="px-6 pb-6 pt-2 text-[15px] sm:text-[16px] text-white/[0.78] leading-[1.65] font-light">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
