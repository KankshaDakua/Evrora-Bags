import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import FeaturedProducts from '@/components/featured-products';
import BrandStory from '@/components/brand-story';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandStory />
        <WhyChooseUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
