"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Section from "./components/Section";
import Navbar from "./components/navbar";

const titles = [
    "Software Engineer",
    "Student",
    "Hard Worker",
    "Problem Solver",
    "First-Generation College Student",
    "Laotion-American"
]

export default function Page() {

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (!isStarted) {
            const startTimeout = setTimeout(() => {
                setIsStarted(true);
            }, 500);
            return () => clearTimeout(startTimeout);
        }
        const currentTitle = titles[currentTitleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === currentTitle) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            } else if (isDeleting) {
                setCurrentText(currentTitle.substring(0, currentText.length - 1));
            } else {
                setCurrentText(currentTitle.substring(0, currentText.length + 1));
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentTitleIndex, titles, isStarted]);


    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="w-screen h-screen">
            <Navbar />
            <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center lg:items-start w-full">
                <div>
                    <h2 className="uppercase font-bold text-xs text-gray-700 tracking-tighter w-full text-center lg:text-start">Hi there, my name is</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter">
                        Devin Vasavong
                    </h1>
                </div>
                <div>
                    I&apos;m a {' '}
                    <span className="uppercase font-bold text-gray-900 tracking-tighter">
                        {currentText}
                        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                            |
                        </span>
                    </span>
                    .
                </div>
            </section>

            <Section title="About Me" id="about-me" circlePosition="top-left" circleSize="w-48 h-48" circleOpacity="opacity-30">
                <div className="text-gray-700">
                    <p className="mb-4">
                        {/* get years and months from september 26, 2005 */}
                        I am a Laotion-American software engineer with a passion for building innovative solutions. I am current {new Date().getFullYear() - 2005} years old and have been coding since I was 12.
                    </p>
                    <p className="mb-4">
                        As a first-generation college student, I understand the challenges of navigating the tech industry. I am committed to continuous learning and growth, and I strive to leverage my skills to contribute to meaningful projects.
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    <Link href="/projects" className="relative inline-block group" prefetch={false}>
                        <span className="relative px-6 py-3 rounded-lg bg-white/20 backdrop-blur-lg text-gray-900 font-medium hover:bg-white/30 transition-colors inline-block">
                            {/* Base gradient */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-transparent to-gray-200 p-px -z-10">
                                <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                            </div>
                            {/* Hover gradient that fades in */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-300 via-transparent to-gray-300 p-px -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-full rounded-lg bg-white/20 backdrop-blur-lg"></div>
                            </div>
                            View Projects
                        </span>
                    </Link>
                    <Link href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf" className="relative inline-block group" prefetch={false}>
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
            </Section>
            <Section title="Contact Me" id="contact-me" position="right" circlePosition="bottom-right" circleSize="w-48 h-48" circleOpacity="opacity-30">
                <div className="text-gray-700">
                    <p className="mb-4">
                        I am always open to new opportunities and collaborations. If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.
                    </p>

                    <div>
                        <h2>
                            Recruiter?
                        </h2>
                        <p className="mb-4">
                            I am currently looking for internship opportunities for Fall 2025. If you are a recruiter or hiring manager, I would love to connect and discuss potential roles.
                        </p>
                        <p className="mb-4">
                            You can reach me at <a href="mailto:devin@vasavong.com" className="text-blue-500 hover:underline">
                                devin@vasavong.com
                            </a> or connect with me on <Link prefetch={false} href="https://www.linkedin.com/in/devin-vasavong/" className="text-blue-500 hover:underline">
                                LinkedIn
                            </Link>.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    )
}