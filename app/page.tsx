"use client";
import * as React from 'react';

import { motion } from 'framer-motion'
import Link from 'next/link';
import Navbar from './components/navbar';


export default function Main() {
    return (
        <div className="px-10 w-screen sm:max-w-6xl mx-auto">
            <Navbar />
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