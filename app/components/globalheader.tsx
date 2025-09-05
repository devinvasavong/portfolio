"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import DevinImage from "@/public/images/Devin_Portrait-084.jpg"
import Link from "next/link";

export default function GlobalHeader() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div id="header" className={`mb-8 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-3 blur-sm'} transition-all duration-1000 ease-out will-change-transform`}>
            <Link href="/">
                <Avatar>
                    {/* image offset */}
                    <AvatarImage src={DevinImage.src} alt="Devin Vasavong" className="object-cover object-top" />
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    )
}