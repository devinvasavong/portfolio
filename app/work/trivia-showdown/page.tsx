'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/app/components/navbar';
import { ArrowLeft, Github, Users, Timer, Trophy } from 'lucide-react';

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

export default function TriviaPage() {
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
                        <Badge variant="outline" className="mb-4">Open Source Project</Badge>
                        <h1 className="font-bold text-4xl mb-4">SHED Trivia Showdown</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            An innovative real-time trivia game platform for the SHED LED display
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link
                                href="https://github.com/devinvasavong/survey-nextjs"
                                className="flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
                            >
                                <Github className="w-4 h-4" />
                                Next.js Version
                            </Link>
                            <Link
                                href="https://github.com/devinvasavong/survey"
                                className="flex items-center gap-2 text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
                            >
                                <Github className="w-4 h-4" />
                                HTML Version
                            </Link>
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
                            src="https://cdn.vasavong.dev/images/IMG_8260.gif"
                            width={1200}
                            height={600}
                            alt="Trivia showdown preview"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    </motion.div>
                </Section>

                <Section>
                    <SectionTitle>Key Features</SectionTitle>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <Feature
                            icon={Timer}
                            title="Real-time Interaction"
                            description="Participate in live trivia games with instant feedback and dynamic question display on the SHED LED screen."
                        />
                        <Feature
                            icon={Users}
                            title="Community Engagement"
                            description="Create an interactive experience that brings together the SHED community through friendly competition."
                        />
                        <Feature
                            icon={Trophy}
                            title="Live Leaderboard"
                            description="Track rankings and scores in real-time, displayed prominently on the SHED screen for all to see."
                        />
                    </div>
                </Section>

                <Section>
                    <div className="bg-gray-50 rounded-xl p-8">
                        <SectionTitle>Development Journey</SectionTitle>
                        <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
                            <div className="md:w-1/2">
                                <Image
                                    src="https://cdn.vasavong.dev/images/first_it.png"
                                    width={600}
                                    height={400}
                                    alt="First iteration preview"
                                    className="rounded-lg shadow-md w-full"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="font-semibold text-xl mb-4">First Iteration</h3>
                                <p className="text-gray-600 mb-4">
                                    The initial version was built using HTML, CSS, and Vanilla JS, focusing on core functionality and user interaction. This prototype helped validate the concept and demonstrate its feasibility.
                                </p>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <code className="text-sm text-pink-600">
                                        {`app.get("/", (req, res) => {
  res.sendFile(__dirname + "/files/index.html")
})`}
                                    </code>
                                </div>
                                <p className="text-sm text-gray-500 mt-4">
                                    The Express server setup allowed for simple HTML file serving, establishing the foundation for future development.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-black text-white rounded-xl p-8 text-center">
                    <h2 className="font-semibold text-2xl mb-4">Want to Contribute?</h2>
                    <p className="text-gray-300 mb-6">
                        This is an open-source project and we welcome contributions from the community.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="https://github.com/devinvasavong/survey-nextjs"
                            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100"
                        >
                            View on GitHub
                        </Link>
                    </div>
                </Section>
            </div>
        </div>
    );
}