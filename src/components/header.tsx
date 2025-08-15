"use client";

import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 dark:bg-background/50 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-headline font-bold text-primary">
            LuminoBag
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#story" className="text-foreground hover:text-primary transition-colors duration-300">Our Story</Link>
            <Link href="#design" className="text-foreground hover:text-primary transition-colors duration-300">Design</Link>
            <Link href="#reviews" className="text-foreground hover:text-primary transition-colors duration-300">Reviews</Link>
            <Link href="#limited-edition" className="text-foreground hover:text-primary transition-colors duration-300">Limited Edition</Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
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
