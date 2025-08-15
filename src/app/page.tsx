'use client';

import Header from '@/components/header';
import FeatureBadges from '@/components/feature-badges';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';
import AboutSection from '@/components/about-section';
import CollectionCTA from '@/components/collection-cta';

const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false });

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeatureBadges />
        <AboutSection />
        <CollectionCTA />
      </main>
      <Footer />
    </div>
  );
}
