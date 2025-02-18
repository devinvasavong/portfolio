"use client";
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { m, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const StatusBadge = ({ type }: { type: string }) => {
    const styles: { [key: string]: string } = {
        in_progress: "bg-yellow-200 text-yellow-700",
        completed: "bg-green-200 text-green-700",
        discontinued: "bg-red-200 text-red-700"
    };

    const labels: { [key: string]: string } = {
        in_progress: "In Progress",
        completed: "Completed",
        discontinued: "Discontinued"
    };

    return (
        <Badge className={`${styles[type]} mb-2 mr-2`}>
            {labels[type]}
        </Badge>
    );
};

const projects = [
    {
        id: 1,
        title: "ShiftList - Workplace Management",
        description: "A comprehensive workplace management solution for small businesses. Features include real-time scheduling, shift swapping, and time-off management.",
        status: ["in_progress"],
        tech: ["React", "Next.js", "Tailwind"],
        link: "/work/workplace-scheduling"
    },
    {
        id: 2,
        title: "Live Trivia for SHED LED Screen",
        description: "Interactive trivia game system with real-time display, audience participation, and automated scoring for large LED screens.",
        status: ["completed", "discontinued"],
        tech: ["JavaScript", "WebSocket", "CSS"],
        link: "/work/trivia-showdown"
    },
    {
        id: 3,
        title: "Paws - Non-Profit Website",
        description: "Modern website for animal welfare organization featuring adoption systems, donation processing, and volunteer management.",
        status: ["completed"],
        tech: ["React", "Node.js", "MongoDB"],
        link: "/work/paws"
    },
    {
        id: 4,
        title: "SmallKDS by Vasavong",
        description: "Kitchen display system for restaurants with real-time order management, order tracking, and kitchen performance analytics.",
        status: ["in_progress"],
        tech: ["Next.js", "Express", "Redis", "PostgreSQL", "Auth0"],
        link: "/work/smallkds"
    },
    {
        id: 5,
        title: "ThermoLink - Smart Thermostat",
        description: "Intelligent temperature monitoring system for healthcare facilities, pharmacies, and businesses that need to maintain precise temperature control.",
        status: ["in_progress"],
        tech: ["Microcontroller", "IoT", "React", "Firebase"],
        link: "/work/thermolink"
    }
];

const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        className="w-full"
    >
        <Card className="p-4 h-full border hover:shadow-md transition-shadow">
            <div className="flex flex-wrap mb-2">
                {project.status.map((status: string, index: number) => (
                    <StatusBadge key={index} type={status} />
                ))}
            </div>

            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                </h3>
                {project.link && (
                    <Link href={project.link}>
                        <ExternalLink className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                    </Link>
                )}
            </div>

            <p className="text-sm text-gray-600 mb-4">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                    </Badge>
                ))}
            </div>
        </Card>
    </motion.div>
);

export default function ModernPortfolio() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto px-4">
            <Navbar scrolled={scrolled} />
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Featured Work
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    A collection of projects showcasing full-stack development and design.
                </p>
            </motion.header>

            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </div>
    );
}