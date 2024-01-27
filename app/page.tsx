"use client";
import * as React from 'react';

import { motion } from 'framer-motion'
import Link from 'next/link';
import Navbar from './components/navbar';
import Image from 'next/image';


export default function Main() {

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
        <div className="w-screen scroll-smooth">
            <div>
                <nav className={`transition-all duration-300 py-5 sm:py-10 sticky top-0 z-50 bg-white ${scrolled ? "border-b sm:py-3" : "sm:py-10"}`}>
                    <div className="px-5 mx-auto max-w-5xl items-center justify-between flex">
                        <p className="text-sm font-medium">Devin Vasavong</p>
                        <ol className="gap-2 flex">
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
                <section className="mx-auto max-w-5xl px-5 my-10 flex flex-row gap-2 items-center justify-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden sm:block hidden">
                        <Image className="rounded-full" src="https://cdn.vasavong.dev/images/Devin_Portrait-084.jpg" width={100} height={100} alt="Collaborator" />
                    </div>
                    <h1 className="font-medium text-3xl text-center">Aspiring Full-Stack Developer</h1>
                </section>
                <section className="mx-auto max-w-5xl px-5 my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-sm">
                        <p className="font-medium text-blue-500">About me</p>
                        <p>I&apos;m a student at Rochester Institute of Technology pursuing a degree in Software Engineering. I&apos;m from Rochester, NY.</p>
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-emerald-500">Contact me</p>
                        <p>You can reach me at <a className="underline text-blue-500" href="mailto:devin@vasavong.com?subject=Hello">devin@vasavong.com</a>.</p>
                    </div>
                </section>
                <section className="my-10 bg-gray-50" id="work">
                    <div className="mx-auto max-w-5xl px-5 py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex-1">
                                <p className="font-medium text-fuchsia-400 text-sm">Personal project</p>
                                <div className="my-2">
                                    <Image className="rounded-sm" src="https://cdn.vasavong.dev/images/scheduling_made_easier.png" width={1280} height={720} alt="Screenshot of scheduling page. Text says scheduling made easier." />
                                </div>
                                <Link href="/work/workplace-scheduling" className="underline decoration-slate-400 font-medium">
                                    ShiftList
                                </Link>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-fuchsia-400 text-sm">Personal project</p>
                                <div className="my-2">
                                    <Image className="rounded-sm" src="https://cdn.vasavong.dev/images/trivia_showdown.jpg" width={1280} height={720} alt="Screenshot of scheduling page. Text says scheduling made easier." />
                                </div>
                                <Link href="/work/trivia-showdown" className="underline decoration-slate-400 font-medium">
                                    SHED Trivia Showdown
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}