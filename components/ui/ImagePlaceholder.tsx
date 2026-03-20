'use client';

import { Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  aspectRatio: '16/9' | '4/3' | '3/4' | '1/1';
  suggestion: string;
  className?: string;
}

export function ImagePlaceholder({ aspectRatio, suggestion, className = '' }: ImagePlaceholderProps) {
  const aspectClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '1/1': 'aspect-square'
  };

  return (
    <div className={`relative overflow-hidden w-full bg-[#0a1f14] border border-white/[0.06] ${aspectClasses[aspectRatio]} ${className}`}>
      <div className="absolute inset-2 border border-dashed border-white/[0.04] flex flex-col items-center justify-center p-4 text-center bg-[#0a1f14]">
        <Camera className="w-8 h-8 text-white/[0.15] mb-3" strokeWidth={1.5} />
        <span className="font-montserrat font-medium text-[9px] tracking-[3px] text-[#666666]/50 mb-2 uppercase">
          Image
        </span>
        <span className="font-montserrat font-medium text-[9px] tracking-[2px] text-[#ccff00]/60 max-w-[80%] leading-relaxed uppercase">
          {suggestion}
        </span>
      </div>
    </div>
  );
}
