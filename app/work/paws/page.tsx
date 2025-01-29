'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from "@/app/components/navbar";
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    Users,
    Search,
    Shield,
    Layout,
    GitBranch,
    Code
} from 'lucide-react';

import RegularUserDashboard from '@/app/images/work/paws/RegularUserDashboard.png';
import NavbarGif from '@/app/images/work/paws/Navbar.gif';
import ReloadGif from '@/app/images/work/paws/Reload.gif';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-10 ${className}`}>
        {children}
    </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-semibold text-2xl mb-6">
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

const TechBadge = ({ children }: { children: React.ReactNode }) => (
    <Badge variant="outline" className="text-sm px-3 py-1">
        {children}
    </Badge>
);

export default function PawsPage() {
    const router = useRouter();
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
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="outline" className="mb-4">Academic Project</Badge>
                        <h1 className="font-bold text-4xl mb-4">Paws</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            A modern web application for pet adoption, built as part of SWEN-261 at RIT
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <TechBadge>Angular</TechBadge>
                            <TechBadge>Java</TechBadge>
                            <TechBadge>Spring Boot</TechBadge>
                        </div>

                        <div className="bg-gray-100 border rounded-lg p-4 text-sm text-gray-600 mb-8">
                            Note: Code for Paws cannot be shared due to academic policy.
                        </div>
                    </motion.div>
                </Section>

                <Section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-xl overflow-hidden mb-12"
                    >
                        <Image
                            src={RegularUserDashboard}
                            alt="Regular User Dashboard"
                            className="w-full shadow-lg rounded-xl"
                        />
                    </motion.div>
                </Section>

                <Section>
                    <SectionTitle>Key Features</SectionTitle>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <Feature
                            icon={Shield}
                            title="Secure Authentication"
                            description="Robust login and registration system with role-based access control"
                        />
                        <Feature
                            icon={Layout}
                            title="Admin Dashboard"
                            description="Comprehensive dashboard for managing pets, users, and adoption requests"
                        />
                        <Feature
                            icon={Search}
                            title="Advanced Search"
                            description="Filter pets by type, breed, age, and location with real-time updates"
                        />
                    </div>
                </Section>

                <Section>
                    <div className="bg-gray-50 rounded-xl p-8">
                        <SectionTitle>Development Process</SectionTitle>
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <h3 className="font-semibold text-xl mb-4">Team Collaboration</h3>
                                    <p className="text-gray-600 mb-4">
                                        Working with a team of 5 students, we adopted Agile methodologies with weekly sprints and stand-up meetings.
                                        Using Trello for task management and Slack for communication, we maintained consistent progress throughout the project.
                                    </p>
                                </div>
                                <div className="md:w-1/2">
                                    <Image
                                        src={NavbarGif}
                                        alt="Navigation Interface"
                                        className="rounded-lg shadow-md"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2 order-2 md:order-1">
                                    <Image
                                        src={ReloadGif}
                                        alt="Real-time Updates"
                                        className="rounded-lg shadow-md"
                                    />
                                </div>
                                <div className="md:w-1/2 order-1 md:order-2">
                                    <h3 className="font-semibold text-xl mb-4">Technical Challenges</h3>
                                    <p className="text-gray-600">
                                        Learning Angular on the fly while maintaining high code quality was a significant challenge.
                                        The team focused on clean architecture and maintainable code, ensuring scalability for future enhancements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8">
                        <h2 className="font-semibold text-2xl mb-4">My Role & Contributions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/80 p-6 rounded-lg">
                                <GitBranch className="w-6 h-6 text-purple-500 mb-4" />
                                <h3 className="font-medium text-lg mb-2">Frontend Development</h3>
                                <p className="text-gray-600">
                                    Led the development of user and admin dashboards, implementing responsive designs and intuitive interfaces.
                                </p>
                            </div>
                            <div className="bg-white/80 p-6 rounded-lg">
                                <Code className="w-6 h-6 text-purple-500 mb-4" />
                                <h3 className="font-medium text-lg mb-2">Search Feature Enhancement</h3>
                                <p className="text-gray-600">
                                    Revamped the search functionality to be more efficient and extensible for future updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}