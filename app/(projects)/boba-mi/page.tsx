"use client";
import { useEffect, useRef, useState } from "react";
import FirstPrototype from "@/public/images/boba-mi/boba-mi-first-prototype.png";
import MenuPrototype from "@/public/images/boba-mi/boba-mi-menu-prototype.png"
import BobaMiNewLanding from "@/public/images/boba-mi/boba-mi-new-landing-page.png"
import BobaMiNewMenu from "@/public/images/boba-mi/boba-mi-new-menu.png"
import Image from "next/image";

type Shot = { src: any; alt: string; caption?: string };
const shots: Shot[] = [
    { src: FirstPrototype, alt: "First Prototype", caption: "First menu prototype displayed all items." },
    { src: MenuPrototype, alt: "Menu Prototype", caption: "Later simplified with categories for easier scanning." },
    { src: BobaMiNewLanding, alt: "Boba Mi New Landing Page", caption: "Final landing with simplified categories + essentials." },
    { src: BobaMiNewMenu, alt: "Boba Mi New Menu Page", caption: "Final menu with clear categories and readable layout." },
];

function MobileShots({ shots }: { shots: { src: any; alt: string; caption?: string }[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const first = el.querySelector<HTMLElement>('[data-nudge="1"]');
        if (!first) return;

        // stop the hint on any interaction
        const stop = () => first.classList.remove("nudge-pulse");
        el.addEventListener("scroll", stop, { passive: true });
        el.addEventListener("pointerdown", stop, { passive: true });
        el.addEventListener("touchstart", stop, { passive: true });
        el.addEventListener("wheel", stop, { passive: true });

        return () => {
            el.removeEventListener("scroll", stop);
            el.removeEventListener("pointerdown", stop);
            el.removeEventListener("touchstart", stop);
            el.removeEventListener("wheel", stop);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative md:hidden mt-4 overflow-x-auto pb-2 scroll-smooth overscroll-x-contain"
        >
            <div className="flex gap-4 snap-x snap-mandatory px-1">
                {shots.map((s, i) => (
                    <figure
                        key={i}
                        data-nudge={i === 0 ? "1" : "0"}
                        className={`snap-center shrink-0 w-[85vw] ${i === 0 ? "nudge-pulse" : ""}`}
                    >
                        <Image src={s.src} alt={s.alt} className="rounded-lg shadow-md w-full h-auto" />
                        {s.caption && <figcaption className="text-gray-500 text-sm mt-2">{s.caption}</figcaption>}
                    </figure>
                ))}
            </div>

            {/* optional: tiny "Swipe →" hint that fades out */}
            <p className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 text-[11px] text-gray-400 animate-fadeout">
                Swipe to see more →
            </p>

            <style jsx global>{`
        @keyframes nudgeX {
          0% { transform: translateX(0); }
          50% { transform: translateX(-12px); }
          100% { transform: translateX(0); }
        }
        .nudge-pulse {
          animation: nudgeX 1.4s ease-in-out 0.6s infinite;
        }
        @keyframes fadeoutOnce {
          0% { opacity: 0; }
          15% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fadeout {
          animation: fadeoutOnce 2.2s ease 0.6s 1 forwards;
        }
      `}</style>
        </div>
    );
}

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

            <div
                id="design"
                className={`mt-8 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: '260ms' }}
            >
                <h2 className="font-roca text-lg font-semibold">Design</h2>
                <p className="text-gray-700 mt-2">Created high-fidelity mockups and prototypes to visualize the design.</p>

                {/* Mobile: horizontal scroll with snap */}
                <MobileShots shots={shots} />

                {/* Desktop+: 2-col grid that exceeds container width */}
                <div className="hidden md:block mt-6">
                    {/* Bleed beyond container (120%) */}
                    <div className="w-[120%] -ml-[10%]">
                        <div className="grid grid-cols-2 gap-6">
                            {shots.map((s, i) => (
                                <figure key={i}>
                                    <Image
                                        src={s.src}
                                        alt={s.alt}
                                        className="rounded-lg shadow-md w-full h-auto"
                                        priority={i === 0}
                                    />
                                    {s.caption && <figcaption className="text-gray-500 text-sm mt-2">{s.caption}</figcaption>}
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
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