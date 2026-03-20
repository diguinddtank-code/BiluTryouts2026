'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] md:h-[2px] z-[100] pointer-events-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progressSonar {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        .animate-progress-sonar { animation: progressSonar 1.5s ease-out infinite; }
      `}} />
      
      <div 
        className="h-full bg-[#D0021B] relative"
        style={{ width: `${progress * 100}%` }}
      >
        {/* Leading Dot with Sonar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#D0021B] translate-x-1/2">
          <div className="absolute inset-0 border-[1.5px] border-[#D0021B] animate-progress-sonar" />
        </div>
      </div>
    </div>
  );
}
