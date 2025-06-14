'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from "next/link";
import Section from "@/app/components/Section";
import { ArrowLeft, Shield, Layout, Search, GitBranch, Code } from 'lucide-react';

import RegularUserDashboard from '@/app/images/work/paws/RegularUserDashboard.png';
import NavbarGif from '@/app/images/work/paws/Navbar.gif';
import ReloadGif from '@/app/images/work/paws/Reload.gif';
import Navbar from '@/app/components/navbar';

export default function PawsPage() {
    const router = useRouter();

    const techStack = ['Angular', 'Java', 'Spring Boot', 'TypeScript', 'REST API'];
    const features = [
        {
            icon: Shield,
            title: "Secure Authentication",
            description: "Robust login and registration system with role-based access control for users and administrators."
        },
        {
            icon: Layout,
            title: "Admin Dashboard",
            description: "Comprehensive dashboard for managing pets, users, and adoption requests with real-time updates."
        },
        {
            icon: Search,
            title: "Advanced Search",
            description: "Filter pets by type, breed, age, and location with intelligent matching algorithms."
        }
    ];

    const contributions = [
        {
            icon: GitBranch,
            title: "Frontend Development",
            description: "Led the development of user and admin dashboards, implementing responsive designs and intuitive interfaces with Angular."
        },
        {
            icon: Code,
            title: "Search Feature Enhancement",
            description: "Revamped the search functionality to be more efficient and extensible, improving user experience significantly."
        }
    ];

    return (
        <div className="w-screen min-h-screen">
            <Navbar />

            {/* Back Button */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <button
                    onClick={() => router.back()}
                    className="relative inline-block group mb-8"
                >
                    <span className="relative px-4 py-2 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-flex items-center gap-2">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-transparent to-gray-200 p-px -z-10">
                            <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-300 via-transparent to-gray-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                        </div>
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </span>
                </button>
            </section>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center lg:items-start w-full">
                <div>
                    <h2 className="uppercase font-bold text-xs text-gray-700 tracking-tighter w-full text-center lg:text-start">Academic Project</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter">
                        Paws
                    </h1>
                </div>
                <div className="text-gray-700 mt-4 max-w-3xl">
                    A modern web application for pet adoption, built as part of SWEN-261 at RIT with a team of 5 students using Agile methodologies.
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">
                    {techStack.map((tech, index) => (
                        <span key={index} className="text-sm px-3 py-1 bg-white/20 backdrop-blur-lg border border-white/20 rounded-full text-gray-700 font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-8 p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 max-w-2xl">
                    <p className="text-sm text-gray-600">
                        <strong>Note:</strong> Code for Paws cannot be shared due to academic policy.
                    </p>
                </div>
            </section>

            {/* Main Image */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={RegularUserDashboard}
                        alt="Regular User Dashboard"
                        className="w-full"
                    />
                </div>
            </section>

            {/* Features Section */}
            <Section title="Key Features" id="features" circlePosition="top-right" circleSize="w-48 h-48" circleOpacity="opacity-30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="relative group">
                            <div className="relative p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 hover:bg-white/30 transition-all duration-300 hover:shadow-lg h-full text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-lg border border-white/30 flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Development Process */}
            <Section title="Development Process" id="process" circlePosition="bottom-left" circleSize="w-56 h-56" circleOpacity="opacity-20">
                <div className="space-y-12">
                    {/* Team Collaboration */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Team Collaboration</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Working with a team of 5 students, we adopted Agile methodologies with weekly sprints and stand-up meetings.
                                Using Trello for task management and Slack for communication, we maintained consistent progress throughout the project.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                The collaborative approach helped us learn from each other and deliver a high-quality application within the semester timeline.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={NavbarGif}
                                    alt="Navigation Interface"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Technical Challenges */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={ReloadGif}
                                    alt="Real-time Updates"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Technical Challenges</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Learning Angular on the fly while maintaining high code quality was a significant challenge.
                                The team focused on clean architecture and maintainable code, ensuring scalability for future enhancements.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We implemented proper separation of concerns, utilized Angular&apos;s component-based architecture, and maintained comprehensive documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* My Contributions */}
            <Section title="My Role & Contributions" id="contributions" circlePosition="top-left" circleSize="w-40 h-40" circleOpacity="opacity-25">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contributions.map((contribution, index) => (
                        <div key={index} className="relative group">
                            <div className="relative p-8 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 hover:bg-white/30 transition-all duration-300 hover:shadow-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-lg border border-white/30 flex items-center justify-center">
                                        <contribution.icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                                        {contribution.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {contribution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Project Links */}
            <Section title="More Projects" id="more-projects" circlePosition="bottom-right" circleSize="w-44 h-44" circleOpacity="opacity-30">
                <div className="text-gray-700">
                    <p className="mb-6">
                        Interested in seeing more of my work? Check out my other projects or get in touch to discuss potential collaborations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/projects" className="relative inline-block group">
                            <span className="relative px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200 via-transparent to-blue-200 p-px -z-10">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 via-transparent to-blue-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                View All Projects
                            </span>
                        </Link>

                        <Link href="mailto:devin@vasavong.com?subject=Project%20Discussion" className="relative inline-block group">
                            <span className="relative px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-transparent to-gray-200 p-px -z-10">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-300 via-transparent to-gray-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                Get in Touch
                            </span>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}