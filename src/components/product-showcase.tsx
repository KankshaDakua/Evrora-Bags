'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { name: "The Minimalist", image: "https://placehold.co/800x1000.png", aiHint: "minimalist handbag" },
  { name: "The Architect", image: "https://placehold.co/800x1000.png", aiHint: "architectural handbag" },
  { name: "The Sculpt", image: "https://placehold.co/800x1000.png", aiHint: "sculptural handbag" },
  { name: "The Classic", image: "https://placehold.co/800x1000.png", aiHint: "classic handbag" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold font-serif text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Our Collection
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-sm">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                    data-ai-hint={product.aiHint}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-accent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                    {product.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
