'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Image from 'next/image';

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [showMessage, setShowMessage] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const phoneNumber = "18542162168";
  
  const prefilledMessage = t.whatsapp?.prefilled || "Hi! I have a question about the BISA Tryouts.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000); // Show message after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseMessage = () => {
    setShowMessage(false);
    setHasNotification(true);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[60] flex items-center justify-end pointer-events-none">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, x: 15, y: "-50%", scale: 0.8, transformOrigin: 'right center' }}
            animate={{ opacity: 1, x: 0, y: "-50%", scale: 1 }}
            exit={{ opacity: 0, x: 10, y: "-50%", scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute right-[calc(100%+14px)] top-1/2 bg-[#0a1f14] text-[#F5F5F5] py-2.5 px-3.5 pr-8 rounded-2xl shadow-2xl pointer-events-auto w-max max-w-[200px] sm:max-w-[240px] border border-[#ccff00]/30"
          >
            {/* Speech bubble tail */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[6px] w-3 h-3 bg-[#0a1f14] border-t border-r border-[#ccff00]/30 rotate-45 rounded-tr-[2px] z-0" />
            
            <button 
              onClick={handleCloseMessage}
              className="absolute top-2 right-2 text-gray-400 hover:text-[#ccff00] transition-colors z-10 bg-[#0a1f14] rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="relative z-10 text-[11px] sm:text-xs font-medium leading-tight whitespace-normal">
              {t.whatsapp?.message || 'Any questions? Chat with us!'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasNotification(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0a1f14] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transition-shadow pointer-events-auto relative z-20 border-2 border-[#ccff00]"
      >
        <div className="relative w-7 h-7 sm:w-8 sm:h-8">
          <Image 
            src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
            alt="BISA Logo" 
            fill 
            className="object-contain"
            unoptimized
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Notification Badge */}
        <AnimatePresence>
          {hasNotification && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#0a1f14]"
            />
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
