"use client";
import * as React from 'react';
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { motion } from "framer-motion";

import RegularUserDashboard from '@/app/images/work/paws/RegularUserDashboard.png'
import NavbarGif from '@/app/images/work/paws/Navbar.gif'
import ReloadGif from '@/app/images/work/paws/Reload.gif'

export default function Page() {
    const router = useRouter();
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <Navbar scrolled={scrolled} />
            <div className="sm:max-w-5xl w-11/12 mx-auto pb-10">
                <div className="pb-3 border-b flex flex-col space-y-1">
                    <div>
                        <button onClick={() => router.back()} className="text-sm text-blue-500 hover:underline">Go Back</button>
                    </div>
                    <h1 className="font-semibold text-3xl">Paws</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-green-800 bg-green-100 rounded-full inline-block px-2 py-0.5 text-sm">Completed</p>
                        <p className="text-xs">Last revised: <span className="text-gray-400">November 7, 2024</span></p>
                    </div>
                </div>
                <motion.div className="flex flex-col space-y-1 mt-3" initial={{ y: 2, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1 }}>
                    <p className="text-gray-400 font-medium text-sm">Contributor</p>
                    <div className="flex flex-row space-x-1">
                        <div className="group/div">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                <Image className="rounded-full" src="https://cdn.vasavong.dev/images/Devin_Portrait-084.jpg" width={100} height={100} alt="Collaborator" />
                            </div>
                            <div className="invisible group-hover/div:visible group-hover/div:opacity-100 opacity-0 mt-1 border px-2 py-0.5 absolute text-xs text-black rounded-full transition-all duration-300">
                                Devin Vasavong
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="py-10 flex-col flex space-y-4" initial={{ y: 5, opacity: 0, }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5 }} >

                    {/* code for paws will not be displayed as it is against academic policy statement */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="w-full order-1 md:order-0 md:1/3">
                            <div className="text-sm bg-gray-100 text-gray-500 px-4 py-2.5 rounded-md border-gray-200 border mb-4">
                                Code for Paws will not be displayed as it is against academic policy statement.
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold">Paws</h1>
                    <h2 className="text-lg font-semibold">What is Paws?</h2>
                    <p className="text-gray-700">Paws is a web application that allows users to search for adoptable pets in their area. Users can filter pets by type, breed, age, and location. This project was apart of the SWEN-261 course at RIT, U-Fund Project.</p>
                    <Image src={RegularUserDashboard} alt="Regular User Dashboard" />
                    <p className="text-gray-700">The project was developed using Angular and Java. The project was developed by a team of 5 students.</p>

                    <h2 className="text-lg font-semibold">Features</h2>
                    <ul className="list-disc list-inside">
                        <li>Secure login and registration</li>
                        <li>Admin dashboard</li>
                        <li>Admin can add, update, and delete pets</li>
                        <li>Search for adoptable pets</li>
                        <li>Filter pets by type, breed, age, and location</li>
                        <li>View pets details</li>
                        <li>Adopt pets</li>
                    </ul>

                    <h2 className="text-lg font-semibold">Technologies</h2>
                    <ul className="list-disc list-inside">
                        <li>Angular</li>
                        <li>Java</li>
                        <li>Spring Boot</li>
                    </ul>

                    <h2 className="text-lg font-semibold">Contributions</h2>
                    <p className="text-gray-700">I focused on front-end development, building the user and admin dashboards, as well as various components and services. Additionally, I revamped the search feature to make it adaptable for future enhancements.</p>

                    <h2 className="text-lg font-semibold">Challenges</h2>
                    <p className="text-gray-700">The biggest challenge was working with a team of 5 students. We had to coordinate our schedules to meet and work on the project. Additionally, we had to ensure that our code was consistent and that we followed the project requirements.
                        I would say that this project was my first experience working on a real team project. I learned a lot about communication, collaboration, and project management.
                        Our team used the Agile methodology to manage our project. We had weekly sprints and stand-up meetings to discuss our progress and any blockers we had. We used Trello to manage our tasks and Slack to communicate.
                        Having to learn and use Angular was also a challenge. I had never used Angular before, so I had to learn it on the fly. I spent a lot of time reading the documentation and watching tutorials to understand how Angular worked.</p>

                    <Image src={NavbarGif} alt="Navbar Gif" />
                    <Image src={ReloadGif} alt="Reload Gif" />

                    {/* code for paws will not be given away */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="w-full order-1 md:order-0 md:1/3">
                            <div className="text-sm bg-gray-100 text-gray-500 px-4 py-2.5 rounded-md border-gray-200 border mb-4">
                                Code for Paws will not be given away. This post is for educational purposes only.
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}