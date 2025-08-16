
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-accent/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold font-serif text-primary">
          WholeSale Wala
        </Link>
        <nav className="hidden md:flex gap-x-8 text-sm font-medium">
           <Link href="/" className="text-foreground hover:text-primary/80 transition-opacity">Home</Link>
           <Link href="/collection" className="text-foreground hover:text-primary/80 transition-opacity">Collection</Link>
           <Link href="/about" className="text-foreground hover:text-primary/80 transition-opacity">About</Link>
           <Link href="/contact" className="text-foreground hover:text-primary/80 transition-opacity">Contact</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
