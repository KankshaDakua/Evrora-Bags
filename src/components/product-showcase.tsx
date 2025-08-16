
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { name: "Farfetch", image: "https://cdn-images.farfetch-contents.com/27/65/83/14/27658314_57434018_2048.jpg", aiHint: "designer handbag" },
  { name: "Chanel", image: "https://www.chanel.com/images///f_auto//-9543169867806.jpg", aiHint: "chanel handbag" },
  { name: "BigCommerce Bag", image: "https://cdn11.bigcommerce.com/s-mqq1i1xa2c/images/stencil/1280x1280/products/171716/5557605/972378_BEIG_1__41135.1702452771.jpg?c=1", aiHint: "beige handbag" },
  { name: "Louis Vuitton", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--M45495_PM2_Front%20view.jpg?wid=750&hei=870", aiHint: "louis vuitton handbag" },
  { name: "Louis Vuitton", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-onthego-gm--M45320_PM1_Side%20view.jpg", aiHint: "louis vuitton tote" },
  { name: "Farfetch", image: "https://cdn-images.farfetch-contents.com/27/65/83/14/27658314_57434018_1000.jpg", aiHint: "designer handbag" },
  { name: "Fendi", image: "https://cdn.theluxurycloset.com/uploads/opt/products/750x750/luxury-women-fendi-used-handbags-p1066518-006.jpeg", aiHint: "fendi handbag" },
  { name: "Gucci", image: "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1697733137/764960_K9GSG_8367_001_057_0000_Light-ophidia-mini-bag.jpg", aiHint: "gucci handbag" },
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
    <section id="products" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
