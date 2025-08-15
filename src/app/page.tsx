import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StorySection from '@/components/story-section';
import TimelineSection from '@/components/timeline-section';
import TestimonialsSection from '@/components/testimonials-section';
import CountdownSection from '@/components/countdown-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <TimelineSection />
        <TestimonialsSection />
        <CountdownSection />
      </main>
      <Footer />
    </div>
  );
}
