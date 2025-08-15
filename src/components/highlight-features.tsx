'use client';

import { motion } from 'framer-motion';
import { Droplets, Vegan, Feather, ShieldCheck } from 'lucide-react';

const features = [
  { icon: <Droplets className="h-10 w-10 text-primary" />, title: 'Water-Resistant' },
  { icon: <Vegan className="h-10 w-10 text-primary" />, title: 'Vegan Leather' },
  { icon: <Feather className="h-10 w-10 text-primary" />, title: 'Feather-light' },
  { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: 'Ergonomic Design' },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const HighlightFeatures = () => {
  return (
    <section id="features" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="grid md:grid-cols-4 gap-10 text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} className="flex flex-col items-center" variants={cardVariants}>
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-background/50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightFeatures;
