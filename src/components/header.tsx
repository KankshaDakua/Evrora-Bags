"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            Lumino
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="#new-arrivals" className="text-foreground hover:text-primary transition-colors">New Arrivals</Link>
            <Link href="#collections" className="text-foreground hover:text-primary transition-colors">Collections</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button variant="outline" asChild>
            <Link href="#">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
