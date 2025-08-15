'use client';

import Header from '@/components/header';
import ProductCarousel from '@/components/product-carousel';
import HighlightFeatures from '@/components/highlight-features';
import Countdown from '@/components/countdown';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false });

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProductCarousel />
        <HighlightFeatures />
        <Gallery />
        <Countdown />
      </main>
      <Footer />
    </div>
  );
}
