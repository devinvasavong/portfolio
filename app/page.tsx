"use client";
import * as React from 'react';

import { motion } from 'framer-motion'
import Link from 'next/link';


export default function Main() {
    return (
        <div className="px-10 sm:max-w-6xl mx-auto">
            <motion.div transition={{ duration: 1}} initial={{ opacity: 0}} animate={{ opacity: 100 }} className="top-0 z-100 px-10 w-full h-auto py-5 flex flex-row justify-end gap-10 bg-white/50 sm:bg-transparent border-black/5 border-b sm:border-none backdrop-blur-lg sm:backdrop-blur-none">
                <Link href="https://drive.google.com/file/d/1HGNj6WSvbUXVfA8lX-ULNBuWBJOPA3HC/view?usp=share_link" target="_blank" aria-label="link to my resume">
                    <div className="flex flex-col">
                        <h1 className="text-xs sm:text-sm">Resume</h1>
                        <p className="text-xs sm:text-sm text-gray-500">Click to view</p>
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
            <motion.div className="py-10">
                <p>
                    hi, my name is devin vasavong. i&#39;m a second year software engineering student at{' '}
                    <Link aria-label="link to rit website" href="https://rit.edu" target="_blank" className="text-[#F76902] font-semibold hover:underline">Rochester Institute of Technology.</Link>
                    <br/>
                    <br/>
                    i have a strong passion for creating side projects and love to work in a collaborative team. i am currently working on a
                    teleprompting and hrms service. both of which are created using next.js
                    <br/>
                    <br/>
                    as of october 11, 2023, i am looking for a summer/fall 2024 co-op in full-stack development. if i seem to fit into this criteria, please contact me using the email listed above.
                    <br/>
                    <br/>
                    if there are any questions regarding my skills, projects, or anything else, please contact me using the email listed above as well.
                </p>
            </motion.div>
        </div>
    )
}