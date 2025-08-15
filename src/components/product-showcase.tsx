
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { name: "The Minimalist", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m7000408l41bepfka5.png", aiHint: "minimalist handbag" },
  { name: "The Architect", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m7000508l47k7k7w46.png", aiHint: "architectural handbag" },
  { name: "The Sculpt", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m7000608l4dsuo9bkk.png", aiHint: "sculptural handbag" },
  { name: "The Classic", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m8000708l46g4s4648.png", aiHint: "classic handbag" },
  { name: "The Voyager", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m8000808l48q248l0b.png", aiHint: "voyager handbag" },
  { name: "The Muse", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m8000908l45j4j777c.png", aiHint: "muse handbag" },
  { name: "The Artisan", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m8000a08l495c02b37.png", aiHint: "artisan handbag" },
  { name: "The City", image: "https://storage.googleapis.com/maker-studio-project-files-prod/userID-clv6o2f1u001l08l10b503i1g/clxkvf1m9000b08l43acp1a0k.png", aiHint: "city handbag" },
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
