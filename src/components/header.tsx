
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-20 relative">
        <div className="absolute left-4 sm:left-6 lg:left-8 flex items-center space-x-6">
           <Link href="#home" className="text-sm text-foreground hover:opacity-70 transition-opacity">Home</Link>
           <Link href="#products" className="text-sm text-foreground hover:opacity-70 transition-opacity">Products</Link>
        </div>
        <Link href="/" className="text-2xl font-bold text-primary">
          AURA
        </Link>
        <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center space-x-6">
           <Link href="#features" className="text-sm text-foreground hover:opacity-70 transition-opacity">Features</Link>
           <Link href="#contact" className="text-sm text-foreground hover:opacity-70 transition-opacity">Contact</Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
