'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Section from "@/app/components/Section";
import { ArrowLeft, GithubIcon } from 'lucide-react';

import Navbar from '@/app/components/navbar';

export default function PawsPage() {
    const router = useRouter();
    const techStack = ['JavaScript', 'Node.js', 'Cheerio']
    return (
        <div className="w-screen min-h-screen">
            <Navbar />
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

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center lg:items-start w-full">
                <div>
                    <h2 className="uppercase font-bold text-xs text-gray-700 tracking-tighter w-full text-center lg:text-start">Personal Project</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter">
                        Webscraping - RIT Dining
                    </h1>
                </div>
                <div className="text-gray-700 mt-4 max-w-3xl">
                    Developed to make it easier for students to find opening dining options at RIT.
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                    {techStack.map((tech, index) => (
                        <span key={index} className="text-sm px-3 py-1 bg-white/20 backdrop-blur-lg border border-white/20 rounded-full text-gray-700 font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                <Link href="https://github.com/devinvasavong/rit_gethours/" className="relative inline-block group mt-8" prefetch={false}>
                    <span className="relative px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200 via-transparent to-blue-200 p-px -z-10">
                            <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 via-transparent to-blue-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                        </div>
                        <GithubIcon className="w-5 h-5 inline-block mr-2" />
                        View on GitHub
                    </span>
                </Link>
            </section>

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