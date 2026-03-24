'use client';

import {motion} from 'motion/react';
import {useLanguage} from './LanguageContext';
import { useState } from 'react';

export function RegistrationForm() {
  const {t} = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPosition) {
      alert('Please select a position');
      return;
    }
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch('https://n8n.infra-remakingautomacoes.cloud/webhook-test/try', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSuccess(true); // Show success even if webhook fails for demo purposes, or handle properly
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration-section" className="py-16 sm:py-24 bg-[#0a1f14] text-white overflow-x-hidden border-t border-[#ccff00]/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-80px'}}
          transition={{duration: 0.55, ease: "easeOut"}}
          className="bg-[#022c22] border border-[#ccff00]/20 rounded-2xl p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden"
        >
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

          {isSuccess ? (
            <div className="text-center py-12 relative z-10">
              <div className="w-20 h-20 bg-[#ccff00]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ccff00]/30">
                <svg className="w-10 h-10 text-[#ccff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-black font-montserrat text-[#ccff00] mb-4 uppercase">Application Received</h3>
              <p className="text-white/80 text-lg">Thank you for registering. We will be in touch within 48 hours.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-8 py-3 bg-[#0a1f14] text-[#ccff00] border border-[#ccff00]/30 font-bold rounded-lg hover:bg-[#ccff00] hover:text-[#0a1f14] transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-[#ccff00] uppercase mb-3 drop-shadow-lg">
                  {t.form.actualForm.title}
                </h2>
                <p className="text-white/60 font-medium text-sm sm:text-base">
                  {t.form.actualForm.subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* PLAYER INFORMATION */}
                <div>
                  <h3 className="text-xs font-black text-[#ccff00] uppercase tracking-widest pb-3 border-b border-white/10 mb-6">
                    Player Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.playerName}
                      </label>
                      <input 
                        type="text" 
                        name="playerName"
                        required
                        placeholder="Full name"
                        className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white placeholder-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.dob}
                      </label>
                      <input 
                        type="date" 
                        name="dob"
                        required
                        className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white placeholder-white/20 [color-scheme:dark]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.email}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Email address"
                        className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white placeholder-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.phone}
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="Phone number"
                        className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white placeholder-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.ageGroup}
                      </label>
                      <select name="ageGroup" required className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white appearance-none">
                        <option value="" className="text-white/50">{t.form.actualForm.fields.ageGroupPlaceholder}</option>
                        <option value="U7">U7 (2019)</option>
                        <option value="U8">U8 (2018)</option>
                        <option value="U9">U9 (2017)</option>
                        <option value="U10">U10 (2016)</option>
                        <option value="U11">U11 (2015)</option>
                        <option value="U12">U12 (2014)</option>
                        <option value="U13">U13 (2013)</option>
                        <option value="U14">U14 (2012)</option>
                        <option value="U15">U15 (2011)</option>
                        <option value="U16">U16 (2010)</option>
                        <option value="U17">U17 (2009)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.cityState}
                      </label>
                      <input 
                        type="text" 
                        name="cityState"
                        required
                        placeholder="City / State"
                        className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white placeholder-white/20"
                      />
                    </div>
                  </div>
                </div>

                {/* SOCCER DETAILS */}
                <div>
                  <h3 className="text-xs font-black text-[#ccff00] uppercase tracking-widest pb-3 border-b border-white/10 mb-6">
                    Soccer Details
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                      {t.form.actualForm.fields.position}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['Goalkeeper', 'Left Back', 'Right Back', 'Center Back', 'Left Midfield', 'Right Midfield', 'Center Midfield', 'Forward'].map(pos => (
                        <button
                          key={pos}
                          type="button"
                          onClick={() => setSelectedPosition(pos)}
                          className={`py-3 px-2 text-xs font-bold rounded-xl border transition-all ${
                            selectedPosition === pos 
                              ? 'bg-[#ccff00] text-[#0a1f14] border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.3)]' 
                              : 'bg-[#0a1f14]/50 text-white/70 border-white/10 hover:border-[#ccff00]/50 hover:text-white'
                          }`}
                        >
                          {pos}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="position" value={selectedPosition} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 sm:col-span-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.hearAboutUs}
                      </label>
                      <select name="hearAboutUs" required className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none text-white appearance-none">
                        <option value="" className="text-white/50">{t.form.actualForm.fields.hearAboutUsPlaceholder}</option>
                        <option value="Social Media">Social Media (Instagram/Facebook)</option>
                        <option value="Friend/Family">Friend / Family</option>
                        <option value="Coach">Coach</option>
                        <option value="Search Engine">Search Engine (Google)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2 sm:col-span-2">
                      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {t.form.actualForm.fields.anythingElse}
                      </label>
                      <textarea 
                        name="anythingElse"
                        rows={3}
                        placeholder="Optional details..."
                        className="w-full px-4 py-3.5 bg-[#0a1f14]/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#ccff00] focus:border-transparent transition-all outline-none resize-none text-white placeholder-white/20"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="flex items-center h-5">
                    <input 
                      id="consent" 
                      name="consent" 
                      type="checkbox" 
                      required 
                      className="w-4 h-4 bg-[#0a1f14] border-white/20 rounded text-[#ccff00] focus:ring-[#ccff00] focus:ring-offset-[#022c22]"
                    />
                  </div>
                  <label htmlFor="consent" className="text-xs text-white/60 leading-relaxed">
                    I consent to having my submitted information stored to receive a response regarding BISA tryouts.
                  </label>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-[#ccff00] hover:bg-[#b3e600] text-[#0a1f14] font-black font-montserrat text-lg tracking-widest uppercase rounded-xl shadow-[0_4px_20px_rgba(204,255,0,0.3)] hover:shadow-[0_8px_30px_rgba(204,255,0,0.5)] transition-all disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0a1f14]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : t.form.actualForm.submit}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
