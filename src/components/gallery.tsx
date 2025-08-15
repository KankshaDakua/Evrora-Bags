'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "https://placehold.co/600x800.png", alt: "Model with bag 1", aiHint: "woman stylish handbag", className: "col-span-1 row-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Bag detail", aiHint: "handbag detail", className: "col-span-1" },
  { src: "https://placehold.co/600x400.png", alt: "Lifestyle shot", aiHint: "lifestyle fashion", className: "col-span-1" },
  { src: "https://placehold.co/600x800.png", alt: "Model with bag 2", aiHint: "fashion model bag", className: "col-span-1 row-span-2" },
];

const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4" style={{gridAutoRows: 'minmax(200px, auto)'}}>
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className={`overflow-hidden rounded-lg ${image.className}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
              transition={{delay: index * 0.1}}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="w-full h-full object-cover"
                data-ai-hint={image.aiHint}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
