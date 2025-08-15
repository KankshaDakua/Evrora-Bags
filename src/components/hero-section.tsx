import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Model with a handbag"
          layout="fill"
          objectFit="cover"
          className="object-center"
          data-ai-hint="woman handbag lifestyle"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Carry Your Story
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Handcrafted Bags for Modern Living
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
