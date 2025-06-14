"use client"
import Link from "next/link";
import Logo from '@/app/images/vasavong-logo@2x.png'
import Image from "next/image";
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="bg-white/20 backdrop-blur-lg top-0 left-0 right-0 z-50 shadow-sm sticky relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px
                    after:bg-gradient-to-r after:from-gray-400 after:via-transparent after:to-gray-400">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 justify-between flex items-center">
                <Link href="/" className="flex items-center">
                    <Image src={Logo} alt="Vasavong Logo" width={100} height={25} className="ml-2 inline-block" />
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" prefetch={false} className="text-gray-900 hover:text-gray-700 transition-colors">Home</Link>
                    <Link href="/projects" prefetch={false} className="text-gray-900 hover:text-gray-700 transition-colors">Projects</Link>
                    <Link href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf" prefetch={false} className="text-gray-900 hover:text-gray-700 transition-colors">Resume</Link>
                    <Link href="mailto:devin@vasavong.com?subject=Hello%20Devin" prefetch={false} className="text-gray-900 hover:text-gray-700 transition-colors">Contact</Link>
                </div>
                <div className="md:hidden relative">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 hover:text-gray-700 focus:outline-none">
                        <Menu className="h-6 w-6" />
                    </button>
                    {mobileMenuOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 z-50">
                            <div className="relative bg-white/[0.15] backdrop-blur-lg border border-white/[0.2] rounded-2xl shadow-xl overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                <div className="py-2">
                                    <Link href="/" className="flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-white/[0.1] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="font-medium">Home</span>
                                    </Link>
                                    <Link href="/projects" className="flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-white/[0.1] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="font-medium">Projects</span>
                                    </Link>
                                    <Link href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf" className="flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-white/[0.1] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="font-medium">Resume</span>
                                    </Link>
                                    <Link href="mailto:devin@vasavong.com?subject=Hello%20Devin" className="flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-white/[0.1] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="font-medium">Contact</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="fixed inset-0 -z-10" onClick={() => setMobileMenuOpen(false)} />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}