'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  { name: "The Minimalist", price: "$450", image: "https://placehold.co/600x800.png", aiHint: "minimalist handbag" },
  { name: "The Architect", price: "$620", image: "https://placehold.co/600x800.png", aiHint: "architectural handbag" },
  { name: "The Sculpt", price: "$580", image: "https://placehold.co/600x800.png", aiHint: "sculptural handbag" },
  { name: "The Classic", price: "$500", image: "https://placehold.co/600x800.png", aiHint: "classic handbag" },
  { name: "The Bold", price: "$710", image: "https://placehold.co/600x800.png", aiHint: "bold handbag" },
];

const ProductCarousel = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Curated Collection
        </motion.h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-none bg-transparent group">
                    <CardContent className="p-0 relative">
                      <div 
                        className="aspect-[3/4] w-full overflow-hidden rounded-lg transition-transform duration-500"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                         <motion.div whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={800}
                                className="h-full w-full object-cover rounded-lg"
                                data-ai-hint={product.aiHint}
                            />
                        </motion.div>
                      </div>
                      <div className="pt-4 text-center">
                        <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                        <p className="text-md text-primary/70">{product.price}</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <span className="text-white text-lg font-semibold">View</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
