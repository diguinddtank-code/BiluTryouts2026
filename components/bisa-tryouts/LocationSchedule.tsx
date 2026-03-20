'use client';

import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';
import {MapPin, Clock} from 'lucide-react';

const SCHEDULE = [
  {
    ageGroup: 'U7 - U10',
    tryouts: 'April 29 & May 1st',
    tryoutTime: '6:00 PM - 7:30 PM',
    makeup: 'May 2nd',
    makeupTime: '9:00 AM - 10:30 AM'
  },
  {
    ageGroup: 'U11 - U12',
    tryouts: 'April 29 & May 1st',
    tryoutTime: '7:30 PM - 9:00 PM',
    makeup: 'May 2nd',
    makeupTime: '10:30 AM - 12:00 PM'
  },
  {
    ageGroup: 'U13 - U14',
    tryouts: 'May 4th & 6th',
    tryoutTime: '6:00 PM - 7:30 PM',
    makeup: 'May 9th',
    makeupTime: '9:00 AM - 10:30 AM'
  },
  {
    ageGroup: 'U15 - U17',
    tryouts: 'May 4th & 6th',
    tryoutTime: '7:30 PM - 9:00 PM',
    makeup: 'May 9th',
    makeupTime: '10:30 AM - 12:00 PM'
  },
];

export function LocationSchedule() {
  const {t} = useLanguage();

  return (
    <section id="schedule" className="py-10 sm:py-20 bg-[#0a1f14] text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="font-montserrat font-bold text-[10px] sm:text-[11px] tracking-[4px] sm:tracking-[6px] text-[#ccff00] uppercase mb-4 sm:mb-6 block">
            {`// LOGISTICS`}
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2rem,6vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-6 sm:mb-8 italic drop-shadow-2xl">
            {t.location.headline}
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Location Card */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
            className="lg:col-span-1 bg-[#113321]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 flex flex-col sm:flex-row lg:flex-col justify-between items-start sm:items-center lg:items-start gap-4"
          >
            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 sm:gap-6 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ccff00] rounded-xl flex items-center justify-center text-[#0a1f14] shadow-[0_0_20px_rgba(204,255,0,0.2)] shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-montserrat font-black text-xl sm:text-3xl mb-1 sm:mb-4 italic uppercase tracking-tight">
                  {t.location.addressName}
                </h3>
                <p className="text-white/70 text-sm sm:text-lg leading-relaxed">
                  {t.location.addressStreet}
                </p>
              </div>
            </div>
            
            <a
              href="https://maps.google.com/?q=1050+Discovery+Dr,+Ladson,+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto lg:w-full py-3 sm:py-4 px-6 bg-white/5 hover:bg-[#ccff00] text-white hover:text-[#0a1f14] font-montserrat font-bold uppercase text-[10px] sm:text-xs tracking-widest rounded-xl border border-white/10 hover:border-[#ccff00] transition-all duration-300 text-center whitespace-nowrap"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Schedule Grid */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7, delay: 0.2}}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {SCHEDULE.map((slot, i) => (
                <div key={i} className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#ccff00]/30 transition-all group">
                  <div className="flex justify-between items-center mb-3 sm:mb-6">
                    <span className="font-montserrat font-black text-lg sm:text-2xl italic text-[#ccff00]">{slot.ageGroup}</span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <Clock className="w-3 h-3 sm:w-4 h-4 text-white/30 group-hover:text-[#ccff00] transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Tryouts</span>
                      <span className="text-white font-bold text-[11px] sm:text-sm leading-tight">{slot.tryouts}</span>
                      <span className="text-[#ccff00] text-[11px] sm:text-sm font-medium">{slot.tryoutTime}</span>
                    </div>
                    
                    <div className="flex flex-col sm:pt-4 sm:border-t sm:border-white/5">
                      <span className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Make-up</span>
                      <span className="text-white font-bold text-[11px] sm:text-sm leading-tight">{slot.makeup}</span>
                      <span className="text-[#ccff00] text-[11px] sm:text-sm font-medium">{slot.makeupTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
