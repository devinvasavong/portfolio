"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import * as React from 'react'

export default function Navbar({ scrolled }: { scrolled: boolean}) {
    return (
        <nav className={`transition-all duration-300 sticky top-0 z-50 bg-white ${scrolled ? "border-b py-3" : "py-5"}`}>
            <div className="mx-auto w-11/12 sm:max-w-5xl items-center justify-between flex">
                <Link prefetch={false} href="/">
                    <p className="text-sm font-medium hover:underline underline-offset-4 decoration-gray-200">Devin Vasavong</p>
                </Link>
                <ol className="gap-2 flex">
                    <li className="font-medium px-2 py-1.5 hover:bg-gray-100 rounded-sm text-sm">
                        <Link className="hidden sm:block" prefetch={false} href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf">Resume</Link>
                        <Link className="sm:hidden block" prefetch={false} href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf">CV</Link>
                    </li>
                    <li className="font-medium px-2 py-1.5 hover:bg-gray-100 rounded-sm text-sm">
                        {/* <Link href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf">My work</Link> */}
                        {/* send to work id */}
                        <Link className="hidden sm:block" prefetch={false} href="#work">My work</Link>
                        <Link className="sm:hidden block" prefetch={false} href="#work">Work</Link>
                    </li>
                </ol>
            </div>
        </nav>
    )
}