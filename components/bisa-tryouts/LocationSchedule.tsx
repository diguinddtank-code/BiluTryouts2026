'use client';

import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';
import {MapPin, Clock} from 'lucide-react';

const SCHEDULE = [
  {ageGroup: 'U7 - U10 Boys & Girls', time: '9:00 AM - 10:30 AM'},
  {ageGroup: 'U11 - U14 Boys & Girls', time: '11:00 AM - 12:30 PM'},
  {ageGroup: 'U15 - U19 Boys & Girls', time: '1:30 PM - 3:00 PM'},
];

export function LocationSchedule() {
  const {t} = useLanguage();

  return (
    <section id="schedule" className="py-12 sm:py-16 bg-[#0a1f14] text-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <span className="font-montserrat font-bold text-[11px] tracking-[6px] text-[#ccff00] uppercase mb-6 block">
            // LOGISTICS
          </span>
          <h2 className="font-montserrat font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase text-white mb-8 italic drop-shadow-2xl">
            {t.location.headline}
          </h2>
          <div className="w-16 h-1 bg-[#ccff00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.5)] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7, delay: 0.2}}
          className="bg-[#0a1f14] rounded-2xl shadow-xl overflow-hidden border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 sm:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
              <a
                href="https://maps.google.com/?q=1050+Discovery+Dr,+Ladson,+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 hover:bg-white/5 p-4 -m-4 rounded-xl transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#113321] rounded-full flex items-center justify-center text-[#ccff00] group-hover:scale-110 transition-transform border border-white/10">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg sm:text-xl mb-1 text-white">
                    {t.location.addressName}
                  </h3>
                  <p className="text-sm sm:text-[16px] text-white/[0.78] leading-[1.65]">
                    {t.location.addressStreet}
                  </p>
                  <span className="text-xs sm:text-sm font-semibold text-[#0a1f14] mt-3 inline-block bg-[#ccff00] px-4 py-1.5 rounded-full transition-transform group-hover:scale-105">
                    Get Directions →
                  </span>
                </div>
              </a>
            </div>

            <div className="p-6 sm:p-12 bg-[#113321]/50 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00]" />
                <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white">
                  Tryout Schedule
                </h3>
              </div>
              <p className="text-[#ccff00] font-medium mb-6">
                {t.location.dates}
              </p>
              
              <div className="space-y-4">
                {SCHEDULE.map((slot, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-white/10 last:border-0">
                    <span className="font-semibold text-white/90">{slot.ageGroup}</span>
                    <span className="text-[#ccff00] bg-[#0a1f14] px-3 py-1 rounded-md shadow-sm text-sm font-medium border border-white/10 self-start sm:self-auto">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
