"use client"
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const timelineData = [
  {
    year: "2021",
    title: "The Spark",
    description: "Our journey began with a simple sketch, envisioning a bag that was both beautiful and intelligent, blending classic form with future-forward function.",
    image: "https://placehold.co/600x600.png",
    aiHint: "design sketch"
  },
  {
    year: "2022",
    title: "Material Science",
    description: "We traveled the globe to source innovative, sustainable, and luxurious materials, ensuring every LuminoBag is an ethical masterpiece.",
    image: "https://placehold.co/600x600.png",
    aiHint: "fabric swatches"
  },
  {
    year: "2023",
    title: "Artisan Craft",
    description: "Our first prototype was hand-stitched by master artisans, a collaboration that infused generations of craftsmanship into our modern design.",
    image: "https://placehold.co/600x600.png",
    aiHint: "leather workshop"
  },
  {
    year: "2024",
    title: "Grand Unveiling",
    description: "LuminoBag is introduced to the world—not just as a product, but as a symbol of modern elegance and conscious luxury for the discerning individual.",
    image: "https://placehold.co/600x600.png",
    aiHint: "product launch"
  }
];

const TimelineSection = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="design" className="py-24 bg-secondary/30 dark:bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">The Design Journey</h2>
            <p className="text-lg text-foreground/80">From a spark of inspiration to a masterpiece of craftsmanship, follow the meticulous steps behind every LuminoBag.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent>
                        {timelineData.map((item, index) => (
                        <CarouselItem key={index}>
                            <Card className="border-0 shadow-2xl shadow-primary/10">
                            <CardContent className="relative flex aspect-square items-center justify-center p-0 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                                    data-ai-hint={item.aiHint}
                                />
                            </CardContent>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px]" />
                    <CarouselNext className="right-[-50px]" />
                </Carousel>
            </div>
            <div className="relative h-96">
                {timelineData.map((item, index) => (
                    <div 
                      key={index} 
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${current === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
                    >
                        <h3 className="text-4xl font-headline font-bold text-primary">{item.year}</h3>
                        <h4 className="text-3xl font-headline mt-2 mb-4">{item.title}</h4>
                        <p className="text-foreground/90 text-lg">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
export default TimelineSection;
