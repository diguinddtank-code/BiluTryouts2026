'use client';

import {motion} from 'motion/react';
import Image from 'next/image';

export function ClubGallery() {
  const images = [
    {
      src: 'https://i.imgur.com/skXQNVs.jpeg',
      alt: 'Boys with flags',
      className: 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2',
    },
    {
      src: 'https://i.imgur.com/tokFWqm.jpeg',
      alt: 'Action shot',
      className: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1',
    },
    {
      src: 'https://i.imgur.com/s9pNNni.jpeg',
      alt: 'Team huddle',
      className: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1',
    },
    {
      src: 'https://i.imgur.com/9rU8PaI.jpeg',
      alt: 'Team photo',
      className: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1',
    },
    {
      src: 'https://i.imgur.com/1UAUWpN.jpeg',
      alt: 'Action shot 2',
      className: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#022c22] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            {`// CLUB LIFE`}
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl flex flex-col items-center">
            <span className="block">MORE THAN A TEAM.</span>
            <span className="block text-[#ccff00] drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]">A FAMILY.</span>
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] sm:auto-rows-[250px] lg:auto-rows-[300px] gap-2 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true, margin: '-100px'}}
              transition={{duration: 0.5, delay: i * 0.15}}
              className={`relative overflow-hidden rounded-xl group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
