'use client';

import Image from 'next/image';

export function Leagues() {
  const logos = [
    { type: 'image', src: 'https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png', alt: 'BISA', className: '' },
    { type: 'image', src: 'https://flosoccer.ottosport.ai/_files/tournaments-training/tournaments/usys_sc_statecup_tm_nodate_1c_blk.png', alt: 'SC State Cup', className: 'brightness-0 invert' },
    { type: 'image', src: 'https://i.imgur.com/B6rzPN4.png', alt: 'SCYSA', className: '' },
    { type: 'text', text: 'US CLUB SOCCER' },
    { type: 'text', text: 'CPL' },
  ];

  const marqueeItems = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-[#0a1f14] overflow-hidden relative pb-16 sm:pb-24 pt-4">
      <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-12 text-center relative z-20">
        <p className="font-montserrat font-semibold text-[10px] sm:text-xs tracking-[0.3em] text-[#ccff00]/60 uppercase">
          Proudly Competing In
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-[#0a1f14] via-[#0a1f14]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-[#0a1f14] via-[#0a1f14]/80 to-transparent z-10 pointer-events-none" />
        
        {/* Subtle background line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -translate-y-1/2 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="px-12 sm:px-20 flex items-center justify-center group h-[60px] sm:h-[100px] transition-all duration-500 cursor-pointer">
                {item.type === 'image' ? (
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    width={200}
                    height={100}
                    unoptimized={true}
                    className={`object-contain max-h-[50px] sm:max-h-[80px] w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${item.className || ''}`}
                  />
                ) : (
                  <span className="font-outfit font-black text-3xl sm:text-5xl tracking-tighter text-white/40 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
                    {item.text}
                  </span>
                )}
              </div>
              {/* Separator */}
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
