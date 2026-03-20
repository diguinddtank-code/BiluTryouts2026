'use client';

import {motion} from 'motion/react';
import Image from 'next/image';

export function CoachesGrid() {
  const featuredCoach = {
    name: 'Coach PC',
    role: 'Sports Director',
    photo: 'https://i.imgur.com/2yYRzpU.png',
    bio: 'Former professional player with over 15 years of international coaching experience across 24 countries. Dedicated to developing elite youth talent.',
    badges: ['UEFA A License', '24 Countries']
  };

  const staffCoaches = [
    {
      name: 'Manuel Luxgonzalez',
      role: 'Certified Staff',
      photo: 'https://i.imgur.com/WSvSZ4c.png',
    },
    {
      name: 'Paulo Oliveira',
      role: 'Certified Staff',
      photo: 'https://i.imgur.com/uy6yZxm.png',
    },
    {
      name: 'Tony Leal',
      role: 'Certified Staff',
      photo: 'https://i.imgur.com/trDxKdC.png',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0a1f14] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-[11px] font-bold text-[#ccff00] uppercase tracking-[0.2em]">OUR COACHING STAFF</span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4 leading-none">
            NATIONALLY CERTIFIED.
            <br className="hidden sm:block" />
            <span className="text-white/40"> GLOBALLY EXPERIENCED.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
            Every BISA coach holds national certifications and shares a unified philosophy of player development.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Featured Coach */}
          <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.5}}
            className="w-full bg-[#022c22] rounded-2xl overflow-hidden shadow-2xl border border-[#ccff00]/20 flex flex-col md:flex-row group relative"
          >
            <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto md:min-h-[400px] overflow-hidden">
              <Image
                src={featuredCoach.photo}
                alt={featuredCoach.name}
                fill
                className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#022c22] via-[#022c22]/50 to-transparent opacity-90 md:opacity-100" />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center w-full md:w-3/5 relative z-10 -mt-20 md:mt-0">
              <span className="text-[#ccff00] font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
                {featuredCoach.role}
              </span>
              <h3 className="font-montserrat font-black text-4xl md:text-5xl uppercase text-white mb-4 tracking-tight">
                {featuredCoach.name}
              </h3>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                {featuredCoach.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredCoach.badges.map((badge, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 rounded-lg text-xs sm:text-sm font-bold text-white/80 border border-white/10">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            {/* Accent line */}
            <div className="absolute bottom-0 left-0 w-full md:w-1 md:h-full bg-[#ccff00]" />
          </motion.div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffCoaches.map((coach, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-100px'}}
                transition={{duration: 0.5, delay: (i + 1) * 0.15}}
                className="group relative bg-[#022c22] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={coach.photo}
                    alt={coach.name}
                    fill
                    className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <h3 className="font-montserrat font-black text-2xl uppercase text-white mb-1 tracking-tight">
                    {coach.name}
                  </h3>
                  <p className="text-[#ccff00] font-bold text-xs uppercase tracking-widest">
                    {coach.role}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ccff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
