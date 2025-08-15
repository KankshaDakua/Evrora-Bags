"use client"

import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Eleanor Vance",
    title: "Fashion Critic",
    quote: "The LuminoBag is not just an accessory; it's a masterpiece of design and functionality. It turns heads wherever I go.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "elegant woman"
  },
  {
    name: "Jameson Clarke",
    title: "Tech Entrepreneur",
    quote: "Finally, a bag that keeps up with my lifestyle. The blend of classic style and modern features is simply genius.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "stylish man"
  },
  {
    name: "Sophia Dubois",
    title: "Art Gallerist",
    quote: "Holding the LuminoBag feels like holding a piece of art. The craftsmanship is impeccable, a true luxury item.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "artistic woman"
  },
    {
    name: "Liam O'Connell",
    title: "Architect",
    quote: "I appreciate details and structure. The LuminoBag's design is flawless, both aesthetically and structurally.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "professional man"
  },
]

const TestimonialsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-center text-primary mb-16">Words of Acclaim</h2>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-center items-center text-center p-8 bg-secondary/50 dark:bg-secondary/20 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-6 border-4 border-primary/50"
                        data-ai-hint={testimonial.aiHint}
                      />
                      <blockquote className="text-foreground/90 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="font-bold font-headline text-lg text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
  )
}

export default TestimonialsSection
