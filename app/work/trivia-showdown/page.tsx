"use client";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import * as React from 'react';
import Link from 'next/link';

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
            <nav className={`transition-all duration-300 sticky top-0 z-50 bg-white ${scrolled ? "border-b py-3" : "py-5"}`}>
                <div className="mx-auto w-11/12 sm:max-w-5xl items-center justify-between flex">
                    <p className="text-sm font-medium">Devin Vasavong</p>
                    <ol className="gap-2 sm:flex hidden">
                        <li className="font-medium px-2 py-1.5 hover:bg-gray-100 rounded-sm text-sm">
                            <Link href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf">Resume</Link>
                        </li>
                        <li className="font-medium px-2 py-1.5 hover:bg-gray-100 rounded-sm text-sm">
                            {/* <Link href="https://cdn.vasavong.dev/files/Chanthanong_Vasavong_Resume.pdf">My work</Link> */}
                            {/* send to work id */}
                            <Link href="#work">My work</Link>
                        </li>
                    </ol>
                </div>
            </nav>
            <div className="sm:max-w-5xl w-11/12 mx-auto pb-10">
                <div className="pb-3 border-b flex flex-col space-y-1">
                    <div>
                        <button onClick={() => router.back()} className="text-sm text-blue-500 hover:underline">Go Back</button>
                    </div>
                    <h1 className="font-semibold text-3xl">SHED Trivia Showdown</h1>
                    <div>
                        <p className="text-yellow-800 bg-yellow-100 rounded-full inline-block px-2 py-0.5 text-sm">In-progress</p>
                    </div>
                </div>
                <motion.div className="flex flex-col space-y-1 mt-3" initial={{ y: 2, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1 }}>
                    <Link href="https://github.com/devinvasavong/portfolio" aria-label="Link to github" className="text-sm text-blue-500 hover:underline">Github Repo</Link>
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
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="w-full order-1 md:order-0 md:1/3">
                            <div className="text-sm bg-red-100 text-red-500 px-4 py-2.5 rounded-md border-red-200 border mb-4">
                                This project is an <i>idea</i> and open source.
                            </div>
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="h-32 mb-4">
                                    <Link href="https://cdn.vasavong.dev/images/IMG_8260.gif" aria-label="View the gif" className="absolute text-sm text-white bg-black bg-opacity-50 px-2 py-0.5 rounded-md">
                                        Open gif
                                    </Link>
                                    <Image
                                        src="https://cdn.vasavong.dev/images/IMG_8260.gif"
                                        width={960}
                                        height={540}
                                        alt="Image of the shift dashboard with text that says 'scheduling made easier'"
                                        className="rounded-md border shadow-sm w-full h-full object-cover"
                                    />
                                </div>
                                <p>Trivia showdown is an innovative and engaging project that brings excitement of live, real-time trivia to users through a web application using websockets. The project revolves around hosting trivia games that can be played by users in a vicinity of the LED screen located in the Student Hall for Exploration and Development ("SHED").</p>
                            </div>
                            <p>This concept centers on community interaction and engagement.</p>
                            <div className="my-4">
                                <h2 className="font-medium mb-4">Key Features</h2>
                                <ol className="list-decimal list-inside pl-4 flex gap-4 flex-col">
                                    <li>
                                        <h3 className="font-medium">Real-time</h3>
                                        <p className="text-sm">Users can participate in trivia game(s) in real-time, creating a dynamic experience. The questions would be presented on the SHED LED screen.</p>
                                    </li>
                                    <li>
                                        <h3 className="font-medium">Dynamic LED Screen</h3>
                                        <p className="text-sm">The trivia game(s) would be displayed automatically on the SHED screen as an "intermission" between the regular content.</p>
                                    </li>
                                    <li>
                                        <h3 className="font-medium">Leaderboard</h3>
                                        <p className="text-sm">Users can see their rank and score in real-time on the SHED screen.</p>
                                    </li>
                                </ol>
                            </div>
                            <p>This refines the traditional trivia game by using the power of real-time interactivity on our most recent LED screen. This project not only brings togetherness, but it turns a simple game of trivia to an adventure for all using technology.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}