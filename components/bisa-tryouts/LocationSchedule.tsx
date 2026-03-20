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
    <section id="schedule" className="py-12 sm:py-20 bg-[#0a1f14] text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            {`// LOGISTICS`}
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl">
            {t.location.headline}
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Card */}
          <motion.div
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7}}
            className="lg:col-span-1 bg-[#113321]/30 rounded-3xl p-8 border border-white/10 flex flex-col justify-between h-full"
          >
            <div>
              <div className="w-12 h-12 bg-[#ccff00] rounded-2xl flex items-center justify-center text-[#0a1f14] mb-8 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat font-black text-3xl mb-4 italic uppercase tracking-tight">
                {t.location.addressName}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {t.location.addressStreet}
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=1050+Discovery+Dr,+Ladson,+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-white/5 hover:bg-[#ccff00] text-white hover:text-[#0a1f14] font-montserrat font-bold uppercase text-xs tracking-widest rounded-xl border border-white/10 hover:border-[#ccff00] transition-all duration-300 text-center"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Schedule Grid */}
          <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.7, delay: 0.2}}
            className="lg:col-span-2 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCHEDULE.map((slot, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#ccff00]/30 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-montserrat font-black text-2xl italic text-[#ccff00]">{slot.ageGroup}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white/30 group-hover:text-[#ccff00] transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Tryouts (Weekdays)</span>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">{slot.tryouts}</span>
                        <span className="text-[#ccff00] text-sm font-medium">{slot.tryoutTime}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Make-up (Saturday)</span>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">{slot.makeup}</span>
                        <span className="text-[#ccff00] text-sm font-medium">{slot.makeupTime}</span>
                      </div>
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
