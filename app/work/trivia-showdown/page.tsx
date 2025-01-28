'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/navbar';

const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
};

const ProjectBadge = ({ children }: { children: React.ReactNode }) => (
    <p className="text-yellow-800 bg-yellow-100 rounded-full px-2 py-0.5 text-sm">
        {children}
    </p>
);

const ProjectLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a
        href={href}
        className="text-sm text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

const Feature = ({ title, description }: { title: string, description: string }) => (
    <li>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm">{description}</p>
    </li>
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
        <div>
            <Navbar scrolled={scrolled} />
            <div className="sm:max-w-5xl w-11/12 mx-auto pb-10">
                <motion.div
                    className="pb-3 border-b flex flex-col space-y-1"
                    {...fadeIn}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={() => router.back()}
                        className="text-sm text-blue-500 hover:underline w-fit"
                    >
                        Go Back
                    </button>
                    <h1 className="font-semibold text-3xl">SHED Trivia Showdown</h1>
                    <div className="flex items-center gap-3">
                        <ProjectBadge>In-progress</ProjectBadge>
                        <p className="text-xs">
                            Last revised: <span className="text-gray-400">January 29, 2024</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col space-y-1 mt-3"
                    {...fadeIn}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <ProjectLink href="https://github.com/devinvasavong/survey-nextjs">
                        Github Repo (Survey Next.js)
                    </ProjectLink>
                    <ProjectLink href="https://github.com/devinvasavong/survey">
                        Github Repo (Survey HTML)
                    </ProjectLink>

                    <p className="text-gray-400 font-medium text-sm">Contributor</p>
                    <div className="flex flex-row space-x-1">
                        <div className="group/div relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    className="rounded-full"
                                    src="https://cdn.vasavong.dev/images/Devin_Portrait-084.jpg"
                                    width={100}
                                    height={100}
                                    alt="Collaborator"
                                />
                            </div>
                            <span className="invisible group-hover/div:visible group-hover/div:opacity-100 opacity-0 mt-1 border px-2 py-0.5 absolute text-xs text-black rounded-full transition-all duration-300">
                                Devin Vasavong
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="py-10 flex-col flex space-y-4"
                    {...fadeIn}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="w-full order-1 md:order-0">
                            <div className="text-sm bg-red-100 text-red-500 px-4 py-2.5 rounded-md border-red-200 border mb-4">
                                This project is an <i>idea</i> and open source.
                            </div>

                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="relative h-32 mb-4">
                                    <a
                                        href="https://cdn.vasavong.dev/images/IMG_8260.gif"
                                        className="absolute text-sm text-white bg-black bg-opacity-50 px-2 py-0.5 rounded-md"
                                    >
                                        Open gif
                                    </a>
                                    <Image
                                        src="https://cdn.vasavong.dev/images/IMG_8260.gif"
                                        width={960}
                                        height={540}
                                        alt="Trivia showdown preview"
                                        className="rounded-md border shadow-sm w-full h-full object-cover"
                                    />
                                </div>

                                <p>Trivia showdown is an innovative and engaging project that brings excitement of live, real-time trivia to users through a web application using websockets. The project revolves around hosting trivia games that can be played by users in a vicinity of the LED screen located in the Student Hall for Exploration and Development (&auot;SHED&quot;).</p>
                            </div>

                            <p className="mt-4">This concept centers on community interaction and engagement.</p>

                            <div className="my-4">
                                <h2 className="font-medium mb-4">Key Features</h2>
                                <ol className="list-decimal list-inside pl-4 flex gap-4 flex-col">
                                    <Feature
                                        title="Real-time"
                                        description="Users can participate in trivia game(s) in real-time, creating a dynamic experience. The questions would be presented on the SHED LED screen."
                                    />
                                    <Feature
                                        title="Dynamic LED Screen"
                                        description="The trivia game(s) would be displayed automatically on the SHED screen as an 'intermission' between the regular content."
                                    />
                                    <Feature
                                        title="Leaderboard"
                                        description="Users can see their rank and score in real-time on the SHED screen."
                                    />
                                </ol>
                            </div>

                            <p>This refines the traditional trivia game by using the power of real-time interactivity on our most recent LED screen. This project not only brings togetherness, but it turns a simple game of trivia to an adventure for all using technology.</p>

                            <div className="my-4 flex sm:flex-row flex-col gap-4 items-start">
                                <div className="sm:w-1/2 order-0 sm:order-1 flex-shrink-0">
                                    <Image
                                        src="https://cdn.vasavong.dev/images/first_it.png"
                                        width={1280}
                                        height={720}
                                        alt="First iteration preview"
                                        className="rounded-md border shadow-sm w-full h-full object-cover"
                                    />
                                </div>
                                <div className="sm:w/12 sm:order-0 order-1 flex flex-col">
                                    <h3 className="font-medium">First Iteration</h3>
                                    <p className="text-sm">The first iteration of this project was a simple web application that allowed users to join a trivia game and answer questions. However, the questions were displayed on the client side coded fully in HTML, CSS, and Vanilla JS.</p>
                                    <p className="text-sm mt-3">This iteration allowed for me to grasp the concept and see it was achievable.</p>
                                    <code className="text-sm text-pink-600 bg-gray-100 p-2 rounded-sm mt-3">
                                        {`app.get("/", (req, res) => {
  res.sendFile(__dirname + "/files/index.html")
})`}
                                    </code>
                                    <p className="text-sm mt-3">
                                        By having a file that served as a Server, running the express server, <code className="text-pink-600 bg-gray-100 rounded-sm">index.js</code>, I was able to send an HTML file to represent the interaction screen.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}