'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

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
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#ccff00]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
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
