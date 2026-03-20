'use client';

import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import Image from 'next/image';
import {useLanguage} from './LanguageContext';
import { Star, Globe, MapPin, Trophy, ShieldCheck, Users, Zap } from 'lucide-react';

const TRYOUT_DATE = new Date('2026-04-29T00:00:00').getTime();

export function Hero() {
  const {t} = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const marqueeIcons = [
    <Star key="star1" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Globe key="globe" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <MapPin key="mappin" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Trophy key="trophy" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <ShieldCheck key="shield" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Users key="users" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Star key="star2" className="w-3.5 h-3.5 text-[#ccff00]" />,
    <Zap key="zap" className="w-3.5 h-3.5 text-[#ccff00]" />
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TRYOUT_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-28 md:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        src="https://i.imgur.com/Mikmi09.mp4"
        className="absolute inset-0 w-full h-full object-cover -z-30"
      />
      
      {/* Video Overlay - Adjusted opacity to be less dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f14]/80 via-[#0a1f14]/40 to-[#0a1f14]/80 -z-20" />

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none -z-10 select-none">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-montserrat font-black text-[40vw] sm:text-[30vw] md:text-[25vw] leading-none text-white whitespace-nowrap italic"
        >
          BISA
        </motion.span>
      </div>

      {/* BISA Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] opacity-[0.02] pointer-events-none -z-10">
        <Image
          src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
          alt=""
          width={400}
          height={400}
          unoptimized={true}
          className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center flex-grow justify-center w-full pt-10 sm:pt-0">
        {/* Top Academy Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8 sm:mb-12"
        >
          <h2 className="font-montserrat font-black italic text-xl sm:text-2xl md:text-3xl text-white tracking-tight mb-1">
            {t.hero.academyName}
          </h2>
          <span className="text-[9px] sm:text-[11px] font-montserrat font-bold text-white/60 uppercase tracking-[0.3em]">
            {t.hero.academySub}
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="relative mb-8 sm:mb-12 w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 
            className="font-montserrat font-black uppercase leading-[0.85] flex flex-col items-center italic text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)', letterSpacing: '-0.04em' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="block text-white drop-shadow-2xl"
            >
              {t.hero.headlinePart1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="block text-[#ccff00] drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]"
            >
              {t.hero.headlinePart2}
            </motion.span>
          </h1>
          
          {/* Neon Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-12 sm:w-20 h-[2px] sm:h-[3px] bg-[#ccff00] mt-6 sm:mt-10 rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto"
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8, delay: 1}}
          className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 sm:mb-16 font-medium leading-relaxed tracking-tight px-4"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* Action Button (Optional, keeping it but styling it subtly) */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.2, duration: 0.5}}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="px-8 py-4 sm:px-10 sm:py-5 bg-[#ccff00] text-[#0a1f14] font-montserrat font-black uppercase text-xs sm:text-sm tracking-widest rounded-xl shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-all duration-300"
          >
            {t.hero.cta}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1}}
          className="flex flex-col items-center mt-12 sm:mt-20 mb-8 sm:mb-16"
        >
          <span className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">{t.hero.tryoutsIn}</span>
          <div className="grid grid-cols-2 sm:flex sm:gap-6 gap-3">
            {[
              {label: t.hero.days, value: timeLeft.days},
              {label: t.hero.hours, value: timeLeft.hours},
              {label: t.hero.minutes, value: timeLeft.minutes},
              {label: t.hero.seconds, value: timeLeft.seconds},
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-[#113321] border border-white/10 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]">
                <div className="text-3xl sm:text-5xl font-montserrat font-black text-[#ccff00] tabular-nums tracking-tighter">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-white/50 tracking-widest mt-1 uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Trust Strip Marquee */}
      <div className="w-full bg-white/[0.03] border-y border-white/[0.06] py-4 overflow-hidden flex">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] items-center">
          {[...t.trustStrip, ...t.trustStrip, ...t.trustStrip, ...t.trustStrip].map((item, i) => (
            <div key={i} className="flex items-center text-white/60 font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.08em] px-5 sm:px-8 gap-2">
              {marqueeIcons[i % marqueeIcons.length]}
              {item}
              <span className="ml-5 sm:ml-8 text-white/20">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

