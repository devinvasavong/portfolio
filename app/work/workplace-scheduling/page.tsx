"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import Image from "next/image";

import main_image from '@/app/images/enter-phone-number.png';
import main_page from '@/app/images/main_page.png'

export default function Page() {
    return (
        <div>
            <div className="sm:max-w-5xl w-11/12 mx-auto py-10">
                <div className="pb-3 border-b flex flex-col space-y-1">
                    <h1 className="font-semibold text-3xl">Workplace Scheduling (Shift List)</h1>
                    <div>
                        <p className="text-yellow-800 bg-yellow-100 rounded-full inline-block px-2 py-0.5 text-sm">In-progress</p>
                    </div>
                </div>
                <motion.div className="flex flex-col space-y-1 mt-3" initial={{ y: 2, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1 }}>
                    <p className="text-gray-400 font-medium text-sm">Contributors</p>
                    <div className="flex flex-row space-x-1">
                        <div className="group/div">
                            <Avatar>
                                <AvatarImage width={32} height={32} src="https://media.licdn.com/dms/image/D5603AQHyZFlBQNUheQ/profile-displayphoto-shrink_100_100/0/1695432106813?e=1704326400&v=beta&t=ONvKP4pzMEPiGxBRjj4uuje0WuK1yTNJRNVs72xG6Fs" alt="Collaborator"/>
                                <AvatarFallback>DV</AvatarFallback>
                            </Avatar>
                            <div className="invisible group-hover/div:visible group-hover/div:opacity-100 opacity-0 mt-1 border px-2 py-0.5 absolute text-xs text-black rounded-full transition-all duration-300">
                                Devin Vasavong
                            </div>
                        </div>
                        <div className="group/div">
                            <Avatar>
                                <AvatarImage width={32} height={32} src="https://media.licdn.com/dms/image/D4D03AQEdRrV7BDJZnw/profile-displayphoto-shrink_100_100/0/1692653800547?e=1704326400&v=beta&t=nc943vp7qqTh4V1uCAMMqGRFQWwUXJ1lznDM7Flx8ms" alt="Collaborator"/>
                                <AvatarFallback>AR</AvatarFallback>
                            </Avatar>
                            <div className="invisible group-hover/div:visible group-hover/div:opacity-100 opacity-0 mt-1 border px-2 py-0.5 absolute text-xs text-black rounded-full transition-all duration-300">
                                Aidan Ryther
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="py-10 flex-col" initial={{ y: 5, opacity: 0, }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5 }} >
                    <div className="flex flex-col md:flex-row space-x-3 items-start justify-center">
                        <p className="md:w-1/2">
                            I wanted to create something that would benefit small businesses and their employees. I decided to create a scheduling system that is affordable and effective.
                            <br/>
                            <br/>
                            Workplace scheduling software is usually expensive and hard to use. Shiftlist elimates both of those problems by providing a simple and easy to use interface.
                        </p>
                        <div className="text-xs italic text-gray-400 py-3 md:w-1/2">
                            <Image src={main_image} alt="Image of the login page" />
                            Displayed is an image of the login page
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-3 items-start justify-center">
                        <p className="md:w-1/2">
                            Shiftlist is a web application that allows employees to view their schedule and request time off. Managers can create schedules, view employee requests, and approve/deny them.
                            <br/>
                            <br/>
                            We are currently working on redesigning some of the pages and adding new features. We are also working on a mobile application that will allow employees to view their schedule and request time off.
                        </p>
                        <div className="text-xs italic text-gray-400 py-3 md:w-1/2">
                            <Image src={main_page} alt="Image of the shifts page" />
                            Displayed is an image of the shifts page
                        </div>
                    </div>
                    <section id="register" className="flex flex-col md:flex-row space-x-3 items-start justify-center bg-gray-100 py-10 rounded-lg mt-3">
                        <p>
                            Interested in trying out Shiftlist? <a href="mailto:devin@vasavong.com?subject=Register for Shiftlist" className="text-blue-500 hover:text-blue-600">Register here</a>
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}