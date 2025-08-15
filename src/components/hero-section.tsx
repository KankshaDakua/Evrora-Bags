"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import LuminoBagModel from './lumino-bag-model';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollZoom, setScrollZoom] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top, height } = heroRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, -top / (height / 1.5)));
        setScrollZoom(1 + scrollPercent * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LuminoBagModel zoom={scrollZoom} />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-extrabold text-background dark:text-foreground mix-blend-difference animate-fade-in-up">
          LuminoBag
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-background dark:text-foreground mix-blend-difference mt-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Elegance in Every Fiber. Unveil a new era of style with a bag that's as brilliant as you are.
        </p>
        <Button size="lg" className="font-bold text-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Discover Now
        </Button>
      </div>
      <div className="absolute bottom-10 z-10 text-white mix-blend-difference">
        <div className="animate-bounce">
            <ArrowDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
