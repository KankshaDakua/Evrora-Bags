'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map(interval => {
        if (!timeLeft[interval as keyof typeof timeLeft]) {
            return null;
        }

        return (
            <div key={interval} className="text-center">
                <div className="text-5xl md:text-7xl font-mono text-primary">
                    {timeLeft[interval as keyof typeof timeLeft].toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-lg text-primary/70 uppercase tracking-widest">
                    {interval}
                </div>
            </div>
        );
    });

    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2 
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Limited Edition Drop
                </motion.h2>
                <motion.p
                     className="text-lg text-primary/60 mb-12"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Coming soon.
                </motion.p>
                <motion.div 
                    className="flex justify-center gap-8 md:gap-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </motion.div>
            </div>
        </section>
    );
}

export default Countdown;
