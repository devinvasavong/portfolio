"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import ThermoLinkBlurred from "@/public/images/thermolinkblurred.jpg"
import ThermoLinkDiagram from "@/public/images/thermolinkdiagram.png"

export default function ThermoLinkPage() {
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
                <h1 className={`name-header ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '50ms' }}>ThermoLink</h1>
                <p className={`text-gray-500 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '100ms' }}>SaaS</p>
            </div>
            <p id="problem-statement" className={`border-l-4 border-black pl-4 italic mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '100ms' }}>
                Small and medium businesses often lack affordable and reliable temperature monitoring solutions to ensure the safety and quality of their products, leading to potential losses and regulatory compliance issues.
            </p>
            <p className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '150ms' }}>
                A smart temperature monitoring solution for small to medium businesses. It consists of a network of wireless temperature sensors that transmit data to a central hub, which then is uploaded to a cloud-based platform for real-time monitoring alerts.
            </p>
            <Image
                width={1920}
                src={ThermoLinkBlurred}
                alt="ThermoLink Blurred"
                className={`p-4 mt-10 rounded-lg shadow-md ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: '200ms' }}
            />
            <p className={`mt-10 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`} style={{ transitionDelay: '250ms' }}>
                ThermoLink uses a combination of hardware and software to provide a comprehensive temperature monitoring solution, with data transmitted over <strong>MQTT secured with TLS</strong> for efficient and reliable communication.
            </p>
            <Image
                width={1920}
                src={ThermoLinkDiagram}
                alt="ThermoLink Diagram"
                className={`p-4 mt-10 rounded-lg shadow-md ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: '300ms' }}
            />
            <div
                className={`mt-16 ${isVisible
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-3 blur-sm"
                    } transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: "350ms" }}
            >
                <h2 className="font-roca text-lg font-semibold mb-2">My Role</h2>
                <p>
                    I am the <strong>Founder & CTO</strong>, responsible for the full-stack
                    dashboard, integration of hardware and software, and firmware
                    development for Arduino-based sensors.
                </p>
            </div>
            <div
                className={`mt-10 ${isVisible
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 translate-y-3 blur-sm"
                    } transition-all duration-1000 ease-out will-change-transform`}
                style={{ transitionDelay: "400ms" }}
            >
                <h2 className="font-roca text-lg font-semibold mb-2">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Next.js</li>
                    <li>Auth0</li>
                    <li>InfluxDB</li>
                    <li>Arduino (firmware development)</li>
                    <li>MQTT over TLS</li>
                    <li>Cloud infrastructure (e.g. AWS / similar)</li>
                </ul>
            </div>
        </div>
    );
}