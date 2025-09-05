"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConnectPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 300); // same delay pattern as home
        return () => clearTimeout(t);
    }, []);

    return (
        <div>
            {/* Header */}
            <div id="header">
                <h1
                    className={`name-header ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"
                        } transition-all duration-1000 ease-out will-change-transform`}
                >
                    Connect
                </h1>
                <p
                    className={`text-sm ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"
                        } transition-all duration-1000 ease-out will-change-transform`}
                    style={{ transitionDelay: "50ms" }}
                >
                    I&apos;d love to hear from you.
                </p>
            </div>

            {/* Chips (same style as homepage links row) */}
            <div
                id="links"
                className={`mt-12 flex flex-row flex-wrap gap-2 ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"
                    } transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: "100ms" }}
            >
                <Link
                    href="/about"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm"
                >
                    About
                </Link>
                <Link
                    href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm"
                >
                    Resume
                </Link>

                <a
                    href="mailto:devin@vasavong.com"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm"
                >
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/devinvasavong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/devinvasavong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 px-2 py-1 rounded-full transition-colors duration-300 text-sm"
                >
                    GitHub
                </a>
            </div>

            {/* Optional: a simple section list like the home "projects" block (keeps rhythm) */}
            <div
                id="contact-actions"
                className={`mt-12 ${isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-sm"
                    } transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: "150ms" }}
            >
                <div className="hover:bg-gray-100 rounded-lg transition-all duration-300 p-4 -mx-4">
                    <a href="mailto:devin@vasavong.com">
                        <h3 className="font-roca font-bold">Email</h3>
                        <p className="text-sm text-gray-500">devin@vasavong.com</p>
                    </a>
                </div>
            </div>
        </div>
    );
}