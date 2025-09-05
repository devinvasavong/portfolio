"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const PROJECT = [
    {
        href: "/thermolink",
        name: "ThermoLink",
        from: "2025",
        to: "Present",
        type: "SaaS"
    }
]

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div>
            <div id="header">
                <h1 className={`name-header ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`}>Devin Vasavong</h1>
                <p className={`text-sm ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '50ms' }}>Student at <Link href="https://www.rit.edu" className="underline decoration-gray-100 hover:decoration-gray-300 transition-colors duration-300">RIT</Link></p>
            </div>
            <div id="links" className={`mt-12 flex flex-row gap-2 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '100ms' }}>
                <Link href="/about" className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm">About</Link>
                <Link href="/connect" className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm">Connect</Link>
                <Link href="/resume" className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm">Resume</Link>
            </div>
            <div id="projects" className={`mt-12 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '150ms' }}>
                {PROJECT.map((project, index) => (
                    <div key={index} className="hover:bg-gray-100 rounded-lg transition-all duration-300 p-4 -mx-4">
                        <Link href={project.href}>
                            <h3 className="font-roca font-bold">{project.name}</h3>
                            <p className="text-sm text-gray-500">{project.from} - {project.to} • {project.type}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}