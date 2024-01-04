"use client";
import * as React from 'react';

import { motion } from 'framer-motion'
import Link from 'next/link';
import Navbar from './components/navbar';


export default function Main() {
    return (
        <div className="w-screen sm:max-w-6xl mx-auto">
            <Navbar />
            <motion.div className="py-10 px-10" initial={{ y: 5, opacity: 0, }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1 }} >
                <p>
                    Hi, my name is Devin Vasavong. I&#39;m a second year software engineering student at{' '}
                    <Link aria-label="link to rit website" href="https://rit.edu" target="_blank" className="text-[#F76902] font-semibold hover:underline">Rochester Institute of Technology.</Link>
                    <br/>
                    <br/>
                    I have a strong passion for creating side projects and love to work in a collaborative team. I am currently working on a
                    Teleprompting and HRMS service. Both of which are created using Next.js!
                    <br/>
                    <br/>
                    As of October 11, 2023, I am looking for a summer/fall 2024 co-op in full-stack development. If I seem to fit into this criteria, please contact me using the email listed above.
                    <br/>
                    <br/>
                    If there are any questions regarding my skills, projects, or anything else, please contact me using the email listed above as well.
                </p>
            </motion.div>
            {/* <motion.div className="py-10 px-10" initial={{ y: 5, opacity: 0, }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5 }} >
                <h1 className="font-bold pb-3 text-lg">Experience</h1>
                <div className="space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-medium">Customer Service Representative</p>
                            <p className="text-sm text-gray-400">Wegmans Food Markets</p>
                        </div>
                        <p className="text-gray-400 text-sm">March 2021 - Present</p>
                    </div>
                    <div>
                        <ul className="list-disc list-inside text-sm">
                            <li>Provided 100% customer satisfaction</li>
                            <li>Resolve customer concerns, comments, and suggestions</li>
                            <li>Making phone calls to departments to confirm inventory and item details</li>
                            <li>Creating and updating customer profiles on Customer Loyalty Management (CLM) software</li>
                        </ul>
                    </div>
                </div>
            </motion.div> */}
            <motion.div className="py-10 px-10" initial={{ y: 5, opacity: 0, }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 2 }} >
                <h1 className="font-bold pb-3 text-lg">Projects</h1>
                <div className="space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-medium">Workplace Scheduling (Shift List)</p>
                            <p className="text-sm text-gray-400">Personal Project + Collaborator</p>
                        </div>
                        <Link href="/work/workplace-scheduling" aria-label="link to workplace scheduling project page">
                            <p className="text-sm cursor-pointer bg-gray-200 text-black hover:bg-black hover:text-gray-200 px-2.5 py-0.5 rounded-lg transition-all duration-300">View Project</p>
                        </Link>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-medium">Teleprompting Service</p>
                            <p className="text-sm text-gray-400 text-center">Personal Project + Collaborators</p>
                        </div>
                        <Link href="/" aria-label="link to workplace scheduling project page">
                            <p className="text-red-500 text-sm cursor-not-allowed">Work in progress</p>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}