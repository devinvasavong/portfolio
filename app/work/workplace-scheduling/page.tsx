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
                <motion.div className="py-10 flex-col flex space-y-4" initial={{ y: 5, opacity: 0, }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5 }} >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <p className="w-full order-1 md:order-0 md:1/3">
                            I wanted to create something that would benefit small businesses and their employees. I decided to create a scheduling system that is affordable and effective.
                            <br/>
                            <br/>
                            Workplace scheduling software is usually expensive and hard to use. Shiftlist elimates both of those problems by providing a simple and easy to use interface.
                        </p>
                        <div className="w-full order-0 md:order-1 md:2/3">
                            <Image src="https://cdn.vasavong.dev/images/scheduling_made_easier.png" width={1920} height={1080} alt="Image of the shift dashboard with text that says 'scheduling made easier'" className="rounded-md border shadow-sm" />
                        </div>
                    </div>
                    <section className="flex flex-col space-y-1 bg-black rounded-md p-4 text-white">
                        <h2 className="font-semibold">Interested in Shiftlist?</h2>
                        <p className="text-sm">Shiftlist is currently in development. If you are interested in using Shiftlist, please contact me at <a href="mailto:devin@vasavong?subject=Re: Shiftlist" className="text-blue-500 hover:underline">here</a>.</p>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}