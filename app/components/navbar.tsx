"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import * as React from 'react'

export default function Navbar({ scrolled }: { scrolled: boolean}) {
    return (
        <nav className={`transition-all duration-300 sticky top-0 z-50 bg-white ${scrolled ? "border-b py-3" : "py-5"}`}>
            <div className="mx-auto w-11/12 sm:max-w-5xl items-center justify-between flex">
                <a href="/">
                    <p className="text-sm font-medium hover:underline underline-offset-4 decoration-gray-200">Devin Vasavong</p>
                </a>
                <ol className="gap-2 flex">
                    <li className="font-medium px-2 py-1.5 hover:bg-gray-100 rounded-sm text-sm">
                        <a className="hidden sm:block" href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf">Resume</a>
                        <a className="sm:hidden block" href="https://cdn.vasavong.dev/files/Chanthanong_Devin_Vasavong_Resume.pdf">CV</a>
                    </li>
                    <li className="font-medium px-2 py-1.5 hover:bg-gray-100 rounded-sm text-sm">
                        {/* <Link href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf">My work</Link> */}
                        {/* send to work id */}
                        <a className="hidden sm:block" href="/work">My work</a>
                        <a className="sm:hidden block" href="/work">Work</a>
                    </li>
                </ol>
            </div>
        </nav>
    )
}