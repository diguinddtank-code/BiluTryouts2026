'use client';

import {useEffect} from 'react';
import {LanguageProvider} from '@/components/bisa-tryouts/LanguageContext';
import {Navbar} from '@/components/bisa-tryouts/Navbar';
import {Hero} from '@/components/bisa-tryouts/Hero';
import {LogoDivider} from '@/components/bisa-tryouts/LogoDivider';
import {Leagues} from '@/components/bisa-tryouts/Leagues';
import {LocationSchedule} from '@/components/bisa-tryouts/LocationSchedule';
import {Timeline} from '@/components/bisa-tryouts/Timeline';
import {Pillars} from '@/components/bisa-tryouts/Pillars';
import {FAQ} from '@/components/bisa-tryouts/FAQ';
import {RegistrationForm} from '@/components/bisa-tryouts/RegistrationForm';
import {Footer} from '@/components/bisa-tryouts/Footer';
import {FloatingCTA} from '@/components/bisa-tryouts/FloatingCTA';

// New Components
import { CoachesGrid } from '@/components/CoachesGrid';
import { ClubGallery } from '@/components/ClubGallery';
import { Testimonials } from '@/components/Testimonials';

// Scrollytelling Components
import { ScrollProgress } from '@/components/scrollytelling/ScrollProgress';
import { WorldLanguages } from '@/components/scrollytelling/WorldLanguages';
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
      <div className="min-h-screen flex flex-col font-outfit bg-[#022c22] text-[#F5F5F5] selection:bg-[#ccff00] selection:text-[#0a1f14] overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <FloatingCTA />
        <main className="flex-grow">
          <Hero />
          
          {/* Scrollytelling Narrative Starts Here */}
          <WorldLanguages />
          
          <ClubGallery />
          <CoachesGrid />
          <Testimonials />
          
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
