"use client";
import Navbar from "@/app/components/navbar";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, LineChart, SoupIcon, Tablet, Timer, TrainTrack, Truck, Users } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import Mockup from '@/app/images/work/smallkds/ipadmockup.jpg'

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-10 ${className}`}>
        {children}
    </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-semibold text-3xl mb-6">
        {children}
    </h2>
);

const Feature = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <motion.div
        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
    >
        <div className="p-3 bg-purple-50 rounded-full mb-4">
            <Icon className="w-6 h-6 text-purple-500" />
        </div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-center text-sm">{description}</p>
    </motion.div>
);

const ImageDisplay = ({ src, alt }: { src: StaticImageData, alt: string }) => (
    <div className="relative w-full h-96">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        <p className="text-gray-600 text-sm mt-2 text-center">
            {alt}
        </p>
    </div>
)

export default function Page() {
    const [scrolled, setScrolled] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar scrolled={scrolled} />
            <div className="sm:max-w-5xl w-11/12 mx-auto pb-10">
                <motion.button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mt-8 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </motion.button>

                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <SectionTitle>SmallKDS</SectionTitle>
                        <p className="text-gray-600">
                            A simple and easy-to-use kitchen display system for small restaurants, cafes, and food trucks.
                        </p>
                        <ImageDisplay src={Mockup} alt="SmallKDS iPad Mockup" />
                    </motion.div>
                </Section>

                {/* why? */}
                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>Problem Statement</SectionTitle>
                        <p className="text-gray-600">
                            Many small, developing businesses struggle with the high costs of traditional kitchen display systems.
                            SmallKDS aims to provide an affordable and easy-to-use alternative for these businesses.
                        </p>
                    </motion.div>
                </Section>

                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>User Personas</SectionTitle>
                        <div className="grid gap-4 grid-col-1 md:grid-cols-2">
                            <Feature
                                icon={Users}
                                title="Restaurant Owners"
                                description="Owners of small restaurants, cafes, and food trucks who are looking for an affordable and easy-to-use kitchen display system."
                            />
                            <Feature
                                icon={Users}
                                title="Kitchen Staff"
                                description="Kitchen staff who need a simple and efficient way to manage orders and communicate with each other."
                            />
                        </div>
                    </motion.div>
                </Section>

                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>Key Features</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <Feature
                                icon={Timer}
                                title="Real-Time Order Management"
                                description="View and manage orders in real-time as they come in."
                            />
                            <Feature
                                icon={TrainTrack}
                                title="Order Tracking"
                                description="Track the status of each order and notify customers when their order is ready."
                            />
                            <Feature
                                icon={LineChart}
                                title="Performance Analytics"
                                description="Track kitchen performance and identify bottlenecks in order processing."
                            />
                        </div>
                    </motion.div>
                </Section>

                {/* use cases */}
                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>Use Cases</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <Feature
                                icon={Truck}
                                title="Food Truck"
                                description="A food truck owner uses SmallKDS to manage orders and communicate with their kitchen staff."
                            />
                            <Feature
                                icon={Coffee}
                                title="Cafe"
                                description="A cafe owner uses SmallKDS to track orders and improve their kitchen performance."
                            />
                            <Feature
                                icon={Tablet}
                                title="Catering"
                                description="A catering company uses SmallKDS to manage large orders and track their progress."
                            />
                            <Feature
                                icon={SoupIcon}
                                title="Restaurant"
                                description="A restaurant owner uses SmallKDS to streamline their kitchen operations and improve efficiency."
                            />
                        </div>
                    </motion.div>
                </Section>

                {/* interested in  */}
                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>Interested in SmallKDS?</SectionTitle>
                        <p className="text-gray-600">
                            SmallKDS is currently in development and will be available soon. If you&apos;re interested in learning more or trying out the system, please reach out to me at <a href="mailto:devin@vasavong.com?subject=SmallKDS Inquiry">
                                devin@vasavong.com</a>.
                        </p>
                    </motion.div>
                </Section>
            </div>
        </div>
    )
}