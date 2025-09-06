"use client";
import { useEffect, useState } from "react";

export default function BobaMiPage() {
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
                <h1 className={`name-header ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '50ms' }}>Boba Mi</h1>
                <p className={`text-gray-500 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '100ms' }}>Web App</p>
            </div>

            <p id="problem-statement" className={`border-l-4 border-black pl-4 italic mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '100ms' }}>
                Boba Mi did not have an online presence, making it difficult for customers to discover their menu.
            </p>

            <p id="solution" className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '150ms' }}>
                I create a simple web application that displays their menu, location, and hours of operation. The new website allows for easy updates to the menu and information, ensuring customers always have access to up-to-date information.
            </p>

            <p id="what_is_boba_mi" className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '200ms' }}>
                Boba Mi is a local Vietnamese eatery in Henrietta, NY offering a variety of delicious dishes and refreshing drinks.
            </p>

            <hr className={`mt-12 border-gray-200 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} style={{ transitionDelay: '210ms' }} />

            <div id="role" className={`mt-8 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '220ms' }}>
                <h2 className="font-roca text-lg font-semibold">My Role</h2>
                <p className="text-gray-700 mt-2">Solo designer–developer (requirements, UX, UI, build, deployment).</p>
            </div>

            <div id="process" className={`mt-8 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '240ms' }}>
                <h2 className="font-roca text-lg font-semibold">Process</h2>
                <ol className="list-decimal pl-6 mt-2 space-y-2 text-gray-700">
                    <li><span className="font-medium">Discovery:</span> Identified must-have content (menu, hours, location) and pain points from similar local sites.</li>
                    <li><span className="font-medium">Information Architecture:</span> Single-page layout prioritizing quick scanning on mobile.</li>
                    <li><span className="font-medium">Design:</span> Minimal UI with subtle entrance transitions (the ones you see on this page).</li>
                    <li><span className="font-medium">Build:</span> React + Tailwind; content structured for quick updates.</li>
                    <li><span className="font-medium">Launch:</span> Deployed to a managed host with clean previews for feedback.</li>
                </ol>
            </div>

            <div id="impact" className={`mt-8 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '260ms' }}>
                <h2 className="font-roca text-lg font-semibold">Impact</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                    <li>Established the restaurant’s first online presence.</li>
                    <li>Reduced friction for customers to find menu, hours, and location.</li>
                    <li>Owners can request quick updates without redesigning the page.</li>
                </ul>
            </div>

            <div id="tech" className={`mt-8 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '280ms' }}>
                <h2 className="font-roca text-lg font-semibold">Tech</h2>
                <p className="text-gray-700 mt-2">React, Tailwind CSS, semantic HTML, lightweight animations.</p>
            </div>
        </div>
    )
}