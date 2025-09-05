"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
            <div id="header">
                <h1 className={`name-header ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '50ms' }}>About</h1>
            </div>
            <p className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '100ms' }}>
                I&apos;m a software engineer with a passion for building solutions that help resolve real-world problems. with a strong foundation in full-stack development, I specialize in creating scalable and efficient web applications.
            </p>
            <p className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '150ms' }}>
                When I&apos;m not coding, you can find me exploring the outdoors, hiking, or indulging in delicious food. I believe in continuous learning and am always eager to take on new challenges.
            </p>
            <p className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '200ms' }}>
                I&apos;m a current student at Rochester Institute of Technology studying Software Engineering.
            </p>
            <div className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '250ms' }}>
                <Link href="/connect" className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm">Connect</Link>
            </div>
        </div>
    )
}