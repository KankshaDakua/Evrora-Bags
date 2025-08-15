import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProductCarousel from '@/components/product-carousel';
import HighlightFeatures from '@/components/highlight-features';
import Countdown from '@/components/countdown';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';

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