
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { name: "Christian Dior", image: "https://images.prom.ua/6115105615_w600_h600_6115105615.jpg", aiHint: "designer handbag" },
  { name: "Chanel", image: "https://www.chanel.com/images///f_auto//-9543169867806.jpg", aiHint: "chanel handbag" },
  { name: "YSL", image: "https://cdn11.bigcommerce.com/s-mqq1i1xa2c/images/stencil/1280x1280/products/171716/5557605/972378_BEIG_1__41135.1702452771.jpg?c=1", aiHint: "beige handbag" },
  { name: "Louis Vuitton", image: "https://puzzlesegypt.com/cdn/shop/files/47_722b5484-08c2-4f6a-a115-a08080901c69_700x.png?v=1721738895", aiHint: "louis vuitton handbag" },
  { name: "Michael Kors", image: "https://images-cdn.ubuy.co.in/6545b97853378764dd0696c6-michael-kors-bag-handbag-jet-set-travel.jpg", aiHint: "michael kors handbag" },
  { name: "Coach Bag", image: "https://www.bellaonlinestore.com/cdn/shop/files/FullSizeRender_04999b9d-da32-4491-ab1e-e42268216272.jpg?v=1739602493&width=1445", aiHint: "coach handbag" },
  { name: "Fendi", image: "https://cdn.theluxurycloset.com/uploads/opt/products/750x750/luxury-women-fendi-used-handbags-p1066518-006.jpeg", aiHint: "fendi handbag" },
  { name: "Michael Kors", image: "https://michaelkors.scene7.com/is/image/MichaelKors/35F0GTVT9L-0001_1?$large$", aiHint: "tote bag" },
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
              <div className="group overflow-hidden rounded-lg shadow-sm border border-border">
                <motion.div 
                  className="overflow-hidden"
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1000}
                    className="w-full object-cover aspect-[4/5]"
                    data-ai-hint={product.aiHint}
                  />
                </motion.div>
                <div className="p-4 bg-card">
                  <h3 className="text-lg font-semibold text-card-foreground text-center truncate">
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
