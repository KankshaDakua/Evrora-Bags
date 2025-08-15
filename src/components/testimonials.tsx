import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const testimonials = [
  {
    name: "Emily R.",
    review: "The quality is outstanding. This bag is my new everyday essential. Truly a work of art!",
    stars: 5,
    avatar: "https://placehold.co/100x100.png",
    aiHint: "happy customer"
  },
  {
    name: "Jessica L.",
    review: "Absolutely in love with the timeless design. It’s versatile, elegant, and I get compliments constantly.",
    stars: 5,
    avatar: "https://placehold.co/100x100.png",
    aiHint: "stylish woman"
  },
  {
    name: "Sarah K.",
    review: "I was looking for a sustainable and stylish bag, and Lumino delivered. The craftsmanship is impeccable.",
    stars: 5,
    avatar: "https://placehold.co/100x100.png",
    aiHint: "professional woman"
  },
  {
    name: "Michael B.",
    review: "Bought this as a gift and it was a huge hit. The packaging was beautiful and the bag itself is stunning.",
    stars: 5,
    avatar: "https://placehold.co/100x100.png",
    aiHint: "smiling man"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="border-0 bg-secondary/50">
                    <CardContent className="flex flex-col items-center text-center p-6">
                       <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mb-4"
                        data-ai-hint={testimonial.aiHint}
                      />
                      <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                      <div className="flex justify-center my-2">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <blockquote className="text-gray-600 mt-2 text-sm">
                        "{testimonial.review}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
