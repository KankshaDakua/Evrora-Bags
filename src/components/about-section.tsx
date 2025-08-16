
'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src="https://cdn11.bigcommerce.com/s-eie9lsi1uc/images/stencil/1280x1280/products/75025/810623/524537_K05NB_8745_001_078_0000_Light-Ophidia-GG-medium-tote-bag__12345.1697887767.jpg?c=1"
                    alt="Elegant handbag display"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                    data-ai-hint="handbag on display"
                />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary mb-6">Crafted for the Modern Muse</h2>
                <p className="text-muted-foreground mb-4">
                    At Randi Sahil Bags, we blend timeless craftsmanship with contemporary design. Each handbag is meticulously created by skilled artisans using sustainably sourced, high-quality materials.
                </p>
                <p className="text-muted-foreground mb-8">
                    Our philosophy is simple: create beautiful, functional pieces that you'll cherish for a lifetime. Randi Sahil Bags bags are designed to be more than just an accessory—they are a statement of style and a testament to enduring quality.
                </p>
                <Button asChild>
                    <Link href="/about">Learn More About Us</Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
