'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/app/components/navbar';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const benefits = [
    { id: 1, text: "Easy to use and intuitive interface" },
    { id: 2, text: "Customizable for your business needs" },
    { id: 3, text: "Cost-effective and affordable" },
    { id: 4, text: "Mobile-friendly and accessible anywhere" }
];

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-10 ${className}`}>
        {children}
    </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-semibold text-2xl text-center mb-4">
        {children}
    </h2>
);

export default function WorkplaceSchedulingPage() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar scrolled={scrolled} />
            <div className="sm:max-w-5xl w-11/12 mx-auto pb-10">
                <Section>
                    <motion.div {...fadeIn}>
                        <h1 className="font-bold text-4xl text-center">
                            Simplify Workplace Management
                        </h1>
                        <p className="text-gray-500 mt-2 text-center">
                            Affordable, efficient, and tailored for small businesses.
                        </p>
                        <div className="text-center mt-4">
                            <Link
                                href="https://shiftlist.org"
                                className="inline-block text-sm bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Newsletter via Email
                            </Link>
                        </div>
                    </motion.div>
                </Section>

                <Section>
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        <SectionTitle>Why Choose Shiftlist?</SectionTitle>
                        <p className="text-center text-gray-500 mb-6">
                            We have planned to create a workplace management app that
                            has workplace scheduling, time tracking, and employee management features.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map(({ id, text }) => (
                                <motion.div
                                    key={id}
                                    className="flex items-center space-x-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: id * 0.1 }}
                                >
                                    <Badge variant="outline">✓</Badge>
                                    <p>{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Section>

                <Section className="flex flex-col items-center">
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        <SectionTitle>ShiftList Mockup</SectionTitle>
                        <Image
                            src="https://cdn.vasavong.dev/images/scheduling_made_easier.png"
                            width={500}
                            height={300}
                            alt="Shiftlist Preview"
                            className="rounded-lg mt-4 shadow-lg"
                        />
                    </motion.div>
                </Section>

                <Section>
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.6 }}
                    >
                        <SectionTitle>Subscription Plans</SectionTitle>
                        <p className="text-center text-gray-500">
                            We plan to offer tiers that make it affordable and cost-effective for small businesses.
                        </p>
                    </motion.div>
                </Section>

                <motion.section
                    id="contact"
                    className="py-10 bg-black text-white text-center rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <h2 className="font-semibold text-lg">Interested in Shiftlist?</h2>
                    <p className="mt-2">
                        Shiftlist is currently in development. Contact us to get early access or learn more.
                    </p>
                    <div className="mt-4">
                        <Link
                            href="mailto:devin@vasavong.dev?subject=Shiftlist Inquiry"
                            className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Contact me
                        </Link>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}