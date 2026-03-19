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

  const headlineWords = t.hero.headline.split(' ');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="https://i.imgur.com/Mikmi09.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f14] via-[#0a1f14]/50 to-[#0a1f14] -z-10" />

      {/* BISA Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] opacity-[0.07] pointer-events-none -z-10">
        <Image
          src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
          alt=""
          width={340}
          height={340}
          unoptimized={true}
          className="w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center flex-grow justify-center w-full">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-dot" />
          <span className="text-[11px] sm:text-[12px] font-medium text-white uppercase tracking-[0.08em]">
            {t.hero.badge}
          </span>
        </motion.div>

        <h1 
          className="font-montserrat font-black uppercase leading-[0.9] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-5xl text-white"
          style={{ fontSize: 'clamp(2.8rem, 11vw, 7rem)', letterSpacing: '-0.02em' }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: i * 0.1}}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          className="text-lg sm:text-2xl text-white/[0.78] max-w-3xl mx-auto mb-8 sm:mb-10 font-light leading-[1.65] drop-shadow-md"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.6, duration: 0.5, ease: "easeOut"}}
          className="flex flex-col items-center gap-3 w-full max-w-md mx-auto mb-16"
        >
          <motion.button
            onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{scale: 1.02, filter: "brightness(1.1)"}}
            whileTap={{scale: 0.97}}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 min-h-[56px] font-montserrat font-extrabold text-[16px] uppercase tracking-[0.08em] text-[#0a1a0a] bg-[#ccff00] rounded-xl shadow-[0_4px_20px_rgba(204,255,0,0.3)] hover:shadow-[0_8px_30px_rgba(204,255,0,0.5)] transition-shadow"
          >
            {t.hero.cta}
          </motion.button>
          <span className="text-[12px] font-medium text-white/50">
            {t.hero.microcopy}
          </span>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1}}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">{t.hero.tryoutsIn}</span>
          <div className="flex gap-3 sm:gap-6">
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

