'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);


  return (
    <section ref={targetRef} id="home" className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale, opacity }} className="sticky top-0 h-full w-full">
        <div className="absolute inset-0 bg-gradient-hero" />
        <Image
          src="/hero-background.jpeg"
          alt="Luxury Handbag"
          fill
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="elegant handbag lifestyle"
          priority
        />
      </motion.div>

      <motion.div 
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold font-serif text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          AURA
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-primary/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Timeless by Design
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={onScrollDown}
      >
        <ChevronDown className="w-8 h-8 text-primary/50 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
