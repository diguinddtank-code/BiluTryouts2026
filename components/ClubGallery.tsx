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
      className: 'col-span-2 row-span-1 sm:col-span-2 sm:row-span-1',
    },
    {
      src: 'https://i.imgur.com/1UAUWpN.jpeg',
      alt: 'Action shot 2',
      className: 'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1',
    },
    {
      src: 'https://i.imgur.com/3DJsUvI.jpeg',
      alt: 'Boys with flags 2',
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
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-[11px] font-bold text-[#ccff00] uppercase tracking-[0.2em]">CLUB LIFE</span>
          </div>
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4 leading-none">
            MORE THAN A TEAM.
            <br className="hidden sm:block" />
            <span className="text-white/40"> A FAMILY.</span>
          </h2>
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
