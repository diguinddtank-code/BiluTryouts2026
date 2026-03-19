'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIntersecting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    const handleScroll = () => {
      if (!element || !isIntersecting) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element has passed through the viewport
      // 0 when top enters bottom, 1 when bottom leaves top
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    if (isIntersecting) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, isIntersecting]);

  return { elementRef, isIntersecting, scrollProgress };
}
