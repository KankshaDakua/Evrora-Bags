"use client";

import { useState, useEffect } from 'react';

const CountdownSection = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-03-01") - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <section id="limited-edition" className="py-24 bg-foreground text-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Limited Edition</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-background/80 mb-12">
                    A unique creation, available for a short time. Don't miss your chance to own a piece of art.
                </p>
                <div className="flex justify-center items-center space-x-4 md:space-x-8">
                    {Object.entries(timeLeft).map(([interval, value]) => (
                        <div key={interval} className="flex flex-col items-center">
                            <div className="text-5xl md:text-7xl font-bold text-primary bg-background/10 p-4 md:p-6 rounded-lg w-24 md:w-32 flex items-center justify-center">
                                {formatTime(value)}
                            </div>
                            <p className="text-lg uppercase tracking-widest mt-4 text-background/70">{interval}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
