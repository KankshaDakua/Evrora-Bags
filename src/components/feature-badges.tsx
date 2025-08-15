'use client';

import { motion } from 'framer-motion';
import { Gem, Leaf, Scissors } from 'lucide-react';

const features = [
  {
    icon: <Scissors className="h-6 w-6" />,
    text: 'Handcrafted',
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    text: 'Eco-Friendly Leather',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    text: 'Premium Stitching',
  },
];

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
};

const FeatureBadges = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.text}
              className="flex items-center gap-3"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={badgeVariants}
            >
              <div className="flex-shrink-0 rounded-full bg-accent p-3 text-primary shadow-md">
                {feature.icon}
              </div>
              <span className="text-sm sm:text-base font-medium text-primary">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBadges;
