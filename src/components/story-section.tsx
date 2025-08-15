"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const StorySection = () => {
    const [bgTranslateY, setBgTranslateY] = useState(0);
    const [textTranslateY, setTextTranslateY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                const speed = 0.2;
                const textSpeed = 0.1;
                if (top < window.innerHeight && top > -sectionRef.current.offsetHeight) {
                    setBgTranslateY(top * speed);
                    setTextTranslateY(top * textSpeed);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} id="story" className="relative min-h-screen py-24 bg-background overflow-hidden">
            <div 
                className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
                style={{ transform: `translateY(${bgTranslateY}px)` }}
            >
                <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Abstract background texture"
                    layout="fill"
                    objectFit="cover"
                    className="transform-gpu"
                    data-ai-hint="abstract texture"
                />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div 
                    className="max-w-3xl mx-auto text-center"
                    style={{ transform: `translateY(${textTranslateY}px)` }}
                >
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">Our Story</h2>
                    <div className="space-y-6 text-lg text-foreground/80">
                        <p>
                            LuminoBag was born from a vision: to blend timeless elegance with modern innovation. We believe a bag is not just an accessory, but a statement of identity. Our journey began with a single sketch, a passion for craftsmanship, and a commitment to sustainable luxury.
                        </p>
                        <p>
                            Each bag is meticulously crafted, a testament to the hands that shaped it and the story it's yet to tell. We invite you to be part of our journey, to carry a piece of art that illuminates your path.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
