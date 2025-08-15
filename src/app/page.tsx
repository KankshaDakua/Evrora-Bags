'use client';

import Header from '@/components/header';
import ProductShowcase from '@/components/product-showcase';
import FeatureBadges from '@/components/feature-badges';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false });

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeatureBadges />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
