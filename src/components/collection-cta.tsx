'use client';

import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const CollectionCTA = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-primary mb-6">Explore the Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                From minimalist totes to sculptural clutches, discover the perfect Evrora Bags bag to complement your unique style. Each piece is designed with intention and crafted to perfection.
            </p>
            <Button asChild size="lg">
                <Link href="/collection">View All Products</Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionCTA;
