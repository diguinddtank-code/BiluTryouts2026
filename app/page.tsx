'use client';

import {useEffect} from 'react';
import {LanguageProvider} from '@/components/bisa-tryouts/LanguageContext';
import {Navbar} from '@/components/bisa-tryouts/Navbar';
import {Hero} from '@/components/bisa-tryouts/Hero';
import {About} from '@/components/bisa-tryouts/About';
import {LogoDivider} from '@/components/bisa-tryouts/LogoDivider';
import {Leagues} from '@/components/bisa-tryouts/Leagues';
import {LocationSchedule} from '@/components/bisa-tryouts/LocationSchedule';
import {Timeline} from '@/components/bisa-tryouts/Timeline';
import {Pillars} from '@/components/bisa-tryouts/Pillars';
import {FAQ} from '@/components/bisa-tryouts/FAQ';
import {RegistrationForm} from '@/components/bisa-tryouts/RegistrationForm';
import {Footer} from '@/components/bisa-tryouts/Footer';

// Scrollytelling Components
import { ScrollProgress } from '@/components/scrollytelling/ScrollProgress';
import { WorldLanguages } from '@/components/scrollytelling/WorldLanguages';
import { AnimatedStats } from '@/components/scrollytelling/AnimatedStats';
import { ProjetoBilu } from '@/components/scrollytelling/ProjetoBilu';
import { EpicCta } from '@/components/scrollytelling/EpicCta';

export default function Page() {
  useEffect(() => {
    // Force scroll to top on initial load to prevent browser from restoring scroll position
    // or jumping to a hash
    window.scrollTo(0, 0);
    
    // Also clear hash if present
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-outfit bg-[#080808] text-[#F5F5F5] selection:bg-[#D0021B] selection:text-white overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          
          {/* Scrollytelling Narrative Starts Here */}
          <WorldLanguages />
          <AnimatedStats />
          
          <About />
          
          <ProjetoBilu />
          
          <LogoDivider />
          <Leagues />
          <LocationSchedule />
          
          <Timeline />
          <Pillars />
          <FAQ />
          
          <RegistrationForm />
          
          <EpicCta />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
