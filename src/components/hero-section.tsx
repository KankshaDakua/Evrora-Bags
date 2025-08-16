
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-serif text-primary">
              AURA
            </h1>
            <p className="text-lg md:text-xl text-primary/80 mt-4">
              Timeless by Design
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <Image
              src="https://pictures-nigeria.jijistatic.com/66970318_NzU2LTEwMDgtMGUyYTExMTc3Mw.jpg"
              alt="Luxury Handbag"
              width={300}
              height={375}
              objectFit="cover"
              className="rounded-lg shadow-2xl"
              data-ai-hint="elegant handbag lifestyle"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer pointer-events-auto"
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
