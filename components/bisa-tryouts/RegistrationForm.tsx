'use client';

import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';
import { MousePointerClick, UserPlus, ShieldCheck, Trophy, Mail, RotateCcw, Zap } from 'lucide-react';

export function RegistrationForm() {
  const {t} = useLanguage();

  const playmetricsUrl = "https://playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS05OTEtMTc3OTAyMDM4M3x1dW9IaisxRnNyWFQxTVp3SE13WFFwVFJPZU12S0x2OG9OVkNBMk94ZDRnPQ==&program_id=92864";

  const trustStripIcons = [
    <ShieldCheck key="shield" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Trophy key="trophy" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Mail key="mail" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <RotateCcw key="rotate" className="w-3.5 h-3.5 text-[#ccff00]" />
  ];

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

  return (
    <section id="registration-section" className="py-12 sm:py-16 lg:py-24 bg-[#0a1a0a] text-white overflow-x-hidden border-t border-[#ccff00]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-80px'}}
          transition={{duration: 0.55, ease: "easeOut"}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-[11px] font-bold text-[#ccff00] uppercase tracking-[0.2em]">BISA ACADEMY</span>
          </div>
          <h2 className="font-montserrat font-black text-[clamp(2rem,10vw,3.75rem)] tracking-tighter uppercase text-[#ccff00] leading-[0.9] mb-6">
            {t.form.headline}
          </h2>
          <p className="text-lg sm:text-xl text-white/[0.78] font-light leading-[1.65]">
            {t.form.subheadline}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: '-80px'}}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Step 1 */}
          <motion.div variants={itemVariants} className="bg-[#122912] rounded-xl p-6 sm:p-8 border-t-2 border-[#ccff00] border-x border-b border-white/10 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ccff00] text-[#0a1a0a] font-black text-xl rounded-full flex items-center justify-center shadow-lg">1</div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <MousePointerClick className="w-6 h-6 text-[#ccff00]" />
              <h3 className="font-montserrat font-bold text-lg tracking-[0.08em] uppercase">{t.form.step1Title}</h3>
            </div>
            <p className="text-[15px] sm:text-[16px] text-white/[0.78] leading-[1.65]">
              {t.form.step1Desc}
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={itemVariants} className="bg-[#122912] rounded-xl p-6 sm:p-8 border-t-2 border-[#ccff00] border-x border-b border-white/10 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ccff00] text-[#0a1a0a] font-black text-xl rounded-full flex items-center justify-center shadow-lg">2</div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <UserPlus className="w-6 h-6 text-[#ccff00]" />
              <h3 className="font-montserrat font-bold text-lg tracking-[0.08em] uppercase">{t.form.step2Title}</h3>
            </div>
            <p className="text-[15px] sm:text-[16px] text-white/[0.78] leading-[1.65]">
              {t.form.step2Desc}
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={itemVariants} className="bg-[#122912] rounded-xl p-6 sm:p-8 border-t-2 border-[#ccff00] border-x border-b border-white/10 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#ccff00] text-[#0a1a0a] font-black text-xl rounded-full flex items-center justify-center shadow-lg">3</div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <ShieldCheck className="w-6 h-6 text-[#ccff00]" />
              <h3 className="font-montserrat font-bold text-lg tracking-[0.08em] uppercase">{t.form.step3Title}</h3>
            </div>
            <p className="text-[15px] sm:text-[16px] text-white/[0.78] leading-[1.65]">
              {t.form.step3Desc}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-80px'}}
          transition={{duration: 0.55, ease: "easeOut", delay: 0.3}}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-6 mb-10">
            {t.form.trustStrip.map((item: string, i: number, arr: string[]) => (
              <div key={i} className="flex items-center gap-2">
                {trustStripIcons[i % trustStripIcons.length]}
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-white/55 font-medium whitespace-nowrap">{item}</span>
                {i < arr.length - 1 && <span className="hidden sm:inline-block text-white/20 ml-4">·</span>}
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.a
            href={playmetricsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.02, filter: "brightness(1.1)"}}
            whileTap={{scale: 0.97}}
            className="w-full flex items-center justify-center px-8 py-4 min-h-[60px] font-montserrat font-black text-lg tracking-[0.08em] uppercase text-[#0a1a0a] bg-[#ccff00] rounded-xl shadow-[0_4px_20px_rgba(204,255,0,0.3)] hover:shadow-[0_8px_30px_rgba(204,255,0,0.5)] transition-all duration-200 mb-6"
          >
            {t.form.redirectCta}
          </motion.a>

          {/* Disclaimer */}
          <p className="text-[12px] text-white/40 mb-6">
            {t.form.redirectDisclaimer}
          </p>

          {/* Urgency Line */}
          <div className="flex items-center justify-center gap-2 text-[#ccff00] text-[13px] font-medium">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Zap className="w-4 h-4 fill-current" />
            </motion.div>
            <span>{t.form.redirectUrgency}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
