"use client";
import Link from "next/link";
import { useState } from "react";
import Section from "@/app/components/Section";
import { ExternalLink } from "lucide-react";
import Navbar from "../components/navbar";

export default function ProjectsPage() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Paws - Non-profit Website",
            description: "Modern website using Angular and Java Spring Boot for a non-profit organization focused on animal welfare.",
            tech: ["Angular", "Spring Boot"],
            category: "fullstack",
            status: "completed",
            website: "/projects/paws",
            featured: true
        },
        {
            id: 2,
            title: "Webscraping - RIT Dining",
            description: "Webscraping tool to extract dining hall hours.",
            tech: ["JavaScript", "Node.js", "Cheerio"],
            category: "backend",
            status: "completed",
            website: "/projects/webscraping-rit-dining",
            featured: false
        },
        {
            id: 3,
            title: "ThermoLink - IoT Project",
            description: "IoT project using ESP32 to monitor and control temperature remotely.",
            tech: ["ESP32", "Arduino", "InfluxDB", "TMP117"],
            category: "fullstack",
            status: "in-progress",
            website: "https://thermolinksensors.com",
            featured: true
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'fullstack', name: 'Full Stack' }
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'text-green-600';
            case 'in-progress': return 'text-blue-600';
            case 'planning': return 'text-orange-600';
            default: return 'text-gray-600';
        }
    };

    return (
        <div className="w-screen min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center lg:items-start w-full">
                <div>
                    <h2 className="uppercase font-bold text-xs text-gray-700 tracking-tighter w-full text-center lg:text-start">Check out my</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter">
                        Projects
                    </h1>
                </div>
                <div className="text-gray-700 mt-4">
                    A collection of work showcasing my skills in web development.
                </div>
            </section>

            {/* Filter Section */}
            <Section title="Browse by Category" id="filter" circlePosition="top-right" circleSize="w-48 h-48" circleOpacity="opacity-30">
                <div className="flex flex-wrap gap-4 mb-8">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`relative inline-block group ${filter === category.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                        >
                            <span className={`relative px-6 py-3 rounded-lg backdrop-blur-lg font-medium transition-colors inline-block ${filter === category.id
                                ? 'bg-white/30 text-gray-900'
                                : 'bg-white/20 text-gray-900 hover:bg-white/30'
                                }`}>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-transparent to-gray-200 p-px -z-10">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-300 via-transparent to-gray-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                {category.name}
                            </span>
                        </button>
                    ))}
                </div>
            </Section>

            {/* Projects Grid */}
            <Section title="Featured Work" id="projects" circlePosition="bottom-left" circleSize="w-56 h-56" circleOpacity="opacity-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="relative group">
                            <div className="relative p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 hover:bg-white/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Status */}
                                <div className="mb-3">
                                    <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                                        {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    {project.website && (
                                        <Link href={project.website} className="relative inline-block group flex-1" target="_blank" rel="noopener noreferrer">
                                            <span className="relative px-4 py-2 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block w-full text-center text-sm">
                                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200 via-transparent to-blue-200 p-px -z-10">
                                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                                </div>
                                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 via-transparent to-blue-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                                </div>
                                                <ExternalLink className="w-4 h-4 inline mr-2" />
                                                Website
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Contact CTA */}
            <Section title="Let's Work Together" id="contact-cta" circlePosition="top-right" circleSize="w-40 h-40" circleOpacity="opacity-25">
                <div className="text-gray-700">
                    <p className="mb-6">
                        Interested in collaborating on a project? I&apos;m always open to discussing new opportunities and interesting challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="mailto:devin@vasavong.com?subject=Project%20Collaboration" className="relative inline-block group">
                            <span className="relative px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200 via-transparent to-blue-200 p-px -z-10">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-300 via-transparent to-blue-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                Get in Touch
                            </span>
                        </Link>

                        <Link href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf" className="relative inline-block group">
                            <span className="relative px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-transparent to-gray-200 p-px -z-10">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-300 via-transparent to-gray-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                                </div>
                                View Resume
                            </span>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}