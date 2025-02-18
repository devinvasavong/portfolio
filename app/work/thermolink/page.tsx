"use client";
import Navbar from "@/app/components/navbar";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Thermometer,
    Bell,
    LineChart,
    Building2,
    Truck,
    Activity,
    Laptop,
    Shield,
    Battery,
    Signal,
    AlertTriangle
} from "lucide-react";
import Image, { StaticImageData } from "next/image";

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
        <div className="p-3 bg-blue-50 rounded-full mb-4">
            <Icon className="w-6 h-6 text-blue-500" />
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
                        <SectionTitle>ThermoLink</SectionTitle>
                        <p className="text-gray-600">
                            An intelligent temperature monitoring system for healthcare facilities,
                            pharmacies, and businesses that need to maintain precise temperature control.
                        </p>
                        {/* <ImageDisplay alt="ThermoLink Dashboard Interface" /> */}
                    </motion.div>
                </Section>

                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle>Problem Statement</SectionTitle>
                        <p className="text-gray-600">
                            Healthcare facilities and pharmacies face significant challenges in maintaining
                            precise temperature control for sensitive materials. Traditional monitoring
                            systems are often complex, expensive, and lack real-time alerting capabilities.
                            ThermoLink provides an affordable, user-friendly solution that ensures
                            compliance and prevents costly inventory losses.
                        </p>
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
                                icon={Activity}
                                title="Real-Time Monitoring"
                                description="Monitor temperature data in real-time with instant updates and historical tracking."
                            />
                            <Feature
                                icon={AlertTriangle}
                                title="Smart Alerts"
                                description="Receive immediate notifications when temperatures fall outside acceptable ranges."
                            />
                            <Feature
                                icon={LineChart}
                                title="Analytics Dashboard"
                                description="Visualize temperature trends and analyze performance with intuitive graphs."
                            />
                            <Feature
                                icon={Shield}
                                title="Compliance Ready"
                                description="Meet regulatory requirements with comprehensive reporting and audit trails."
                            />
                            <Feature
                                icon={Signal}
                                title="Reliable Connectivity"
                                description="Monitor sensor health and connectivity status to ensure continuous operation."
                            />
                            <Feature
                                icon={Battery}
                                title="Battery Management"
                                description="Track sensor battery levels and receive low battery alerts before failure."
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
                        <SectionTitle>Use Cases</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <Feature
                                icon={Building2}
                                title="Pharmacies"
                                description="Monitor medication storage conditions and maintain regulatory compliance."
                            />
                            <Feature
                                icon={Thermometer}
                                title="Healthcare Facilities"
                                description="Track temperature-sensitive medical supplies and equipment."
                            />
                            <Feature
                                icon={Truck}
                                title="Cold Chain Logistics"
                                description="Monitor temperature during transportation and storage of sensitive materials."
                            />
                            <Feature
                                icon={Laptop}
                                title="Research Labs"
                                description="Maintain precise temperature control for research materials and specimens."
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
                        <SectionTitle>Interested in ThermoLink?</SectionTitle>
                        <p className="text-gray-600">
                            ThermoLink is currently in development and will be launching soon.
                            If you&apos;re interested in learning more about our temperature monitoring
                            solution or would like to schedule a demo, please contact us at{' '}
                            <a href="mailto:contact@thermol.ink" className="text-blue-600 hover:underline">
                                contact@thermol.ink
                            </a>.
                        </p>
                    </motion.div>
                </Section>
            </div>
        </div>
    )
}