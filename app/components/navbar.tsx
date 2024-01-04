"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import * as React from 'react'

export default function Navbar() {

    const [open, setOpen] = React.useState(false)

    return (
        <nav className="w-full px-6">
            <motion.div transition={{ duration: 1}} initial={{ opacity: 0}} animate={{ opacity: 100 }} className="top-0 z-100 w-auto h-auto flex flex-row justify-start gap-10 bg-white/50 sm:bg-transparent border-black/5 border-b sm:border-none backdrop-blur-lg sm:backdrop-blur-none overflow-y-hidden items-center mt-4">
                <Link href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf" target="_blank" aria-label="link to my resume">
                    <div>
                        <div className="group flex flex-col hover:bg-black hover:text-white duration-300 transition-all rounded-lg px-4 py-2">
                            <h1 className="text-xs sm:text-sm">Resume</h1>
                            <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400">Click to view</p>
                        </div>
                    </div>
                </Link>
                <div className="flex flex-col">
                    <h1 className="text-xs sm:text-sm">Devin Vasavong</h1>
                    <p className="text-xs sm:text-sm text-gray-500">Student</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xs sm:text-sm">Rochester</h1>
                    <p className="text-xs sm:text-sm text-gray-500">New York</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xs sm:text-sm">devin@vasavong.com</h1>
                    <p className="text-xs sm:text-sm text-gray-500">585-831-3592</p>
                </div>
            </motion.div>
        </nav>
    )
}