"use client";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import * as React from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/navbar';

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
                    <h1 className="font-semibold text-3xl">SHED Trivia Showdown</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-yellow-800 bg-yellow-100 rounded-full inline-block px-2 py-0.5 text-sm">In-progress</p>
                        <p className="text-xs">Last revised: <span className="text-gray-400">January 29, 2024</span></p>
                    </div>
                </div>
                <motion.div className="flex flex-col space-y-1 mt-3" initial={{ y: 2, opacity: 0 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1 }}>
                    <a href="https://github.com/devinvasavong/survey-nextjs" aria-label="Link to github (survey nextjs)" className="text-sm text-blue-500 hover:underline">Github Repo (Survey Next.js)</a>
                    <a href="https://github.com/devinvasavong/survey" aria-label="Link to github (survey html)" className="text-sm text-blue-500 hover:underline">Github Repo (Survey HTML)</a>
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
                                    <a href="https://cdn.vasavong.dev/images/IMG_8260.gif" aria-label="View the gif" className="absolute text-sm text-white bg-black bg-opacity-50 px-2 py-0.5 rounded-md">
                                        Open gif
                                    </a>
                                    <Image
                                        src="https://cdn.vasavong.dev/images/IMG_8260.gif"
                                        width={960}
                                        height={540}
                                        alt="Image of the shift dashboard with text that says 'scheduling made easier'"
                                        className="rounded-md border shadow-sm w-full h-full object-cover flex-shrink-0"
                                    />
                                </div>
                                <p>Trivia showdown is an innovative and engaging project that brings excitement of live, real-time trivia to users through a web application using websockets. The project revolves around hosting trivia games that can be played by users in a vicinity of the LED screen located in the Student Hall for Exploration and Development (&quot;SHED&quot;).</p>
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
                                        <p className="text-sm">The trivia game(s) would be displayed automatically on the SHED screen as an &quot;intermission&quot; between the regular content.</p>
                                    </li>
                                    <li>
                                        <h3 className="font-medium">Leaderboard</h3>
                                        <p className="text-sm">Users can see their rank and score in real-time on the SHED screen.</p>
                                    </li>
                                </ol>
                            </div>
                            <p>This refines the traditional trivia game by using the power of real-time interactivity on our most recent LED screen. This project not only brings togetherness, but it turns a simple game of trivia to an adventure for all using technology.</p>
                            <div className="my-4 flex sm:flex-row flex-col gap-4 items-start">
                                <div className="sm:w-1/2 order-0 sm:order-1 flex-shrink-0">
                                    <Image src="https://cdn.vasavong.dev/images/first_it.png" width={1280} height={720} alt="Image of the shift dashboard with text that says 'scheduling made easier'" className="rounded-md border shadow-sm w-full h-full object-cover" />
                                </div>
                                <div className="sm:w/12 sm:order-0 order-1 flex flex-col">
                                    <h3 className="font-medium">First Iteration</h3>
                                    <p className="text-sm">The first iteration of this project was a simple web application that allowed users to join a trivia game and answer questions. However, the questions were displayed on the client side coded fully in HTML, CSS, and Vanilla JS.</p>
                                    <p className="text-sm mt-3">This iteration allowed for me to grasp the concept and see it was achievable.</p>
                                    <code className="text-sm text-pink-600 bg-gray-100 p-2 rounded-sm mt-3" dangerouslySetInnerHTML={{__html: `app.get("/", (req, res) => {
                                                                                                    res.sendFile(__dirname + "/files/index.html")
                                                                                                    })`}} />
                                    <p className="text-sm mt-3">By having a file that served as a Server, running the express server, <code className="text-pink-600 bg-gray-100 rounded-sm">index.js</code>, I was able to send an HTML file to represent the interaction screen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}