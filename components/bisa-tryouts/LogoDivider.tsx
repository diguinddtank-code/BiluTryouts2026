'use client';

import {motion} from 'motion/react';
import Image from 'next/image';

export function LogoDivider() {
  return (
    <div className="w-full bg-[#0a1f14] py-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#ccff00]/50 to-[#ccff00]/50 max-w-[200px]" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-6 flex-shrink-0 group cursor-pointer"
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[#ccff00] rounded-full blur-[20px] opacity-20 scale-150 transition-opacity duration-300 group-hover:opacity-40" />
          
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
              alt="BISA Logo"
              fill
              unoptimized={true}
              className="object-contain drop-shadow-[0_0_8px_rgba(204,255,0,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(204,255,0,0.8)]"
            />
          </div>
        </motion.div>

        <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-[#ccff00]/50 to-[#ccff00]/50 max-w-[200px]" />
      </div>
    </div>
  );
}
