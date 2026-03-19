'use client';

import Image from 'next/image';
import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';
import {Facebook, Instagram, Mail, Phone} from 'lucide-react';

export function Footer() {
  const {t} = useLanguage();

  return (
    <footer className="bg-[#0a1f14] text-white py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <motion.div 
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-6 flex flex-col items-center group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-[#ccff00] rounded-full blur-[40px] opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40" />
          
          <div className="relative w-[90px] h-[90px] mb-4">
            <Image
              src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png"
              alt="BISA Logo"
              fill
              unoptimized={true}
              className="object-contain drop-shadow-[0_0_8px_rgba(204,255,0,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(204,255,0,0.8)]"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="font-outfit font-black text-2xl sm:text-3xl tracking-[0.08em] text-white uppercase group-hover:text-[#ccff00] transition-colors duration-300">
            BILU International Soccer Academy
          </h2>
        </motion.div>

        <div className="flex items-center gap-6 mb-12">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ccff00] hover:text-[#0a1f14] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ccff00] hover:text-[#0a1f14] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:amoreira@bilusoccer.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ccff00] hover:text-[#0a1f14] transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:8433049414" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ccff00] hover:text-[#0a1f14] transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>

        <div className="text-white/50 text-sm font-light space-y-2">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center justify-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#ccff00]" />
            {t.footer.affiliate}
            <span className="w-1 h-1 rounded-full bg-[#ccff00]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
