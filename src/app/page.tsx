'use client';

import Header from '@/components/header';
import FeatureBadges from '@/components/feature-badges';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';
import AboutSection from '@/components/about-section';
import CollectionCTA from '@/components/collection-cta';
import { useRef } from 'react';

const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false });

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection onScrollDown={handleScrollToFeatures} />
        <div ref={featuresRef}>
          <FeatureBadges />
        </div>
        <AboutSection />
        <CollectionCTA />
      </main>
      <Footer />
    </div>
  );
}
