"use client";
import * as React from 'react';

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
                <Navbar scrolled={scrolled} />
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
                    <div className="text-sm">
                       <p className="font-medium text-fuchsia-500">Skills</p> 
                       <ol className="list-none text-xs flex flex-wrap gap-2">
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">Javascript</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">Typescript</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">MongoDB</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">Firebase</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">Next.js</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">TailwindCSS</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">CSS</li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">HTML</li>
                       </ol>
                    </div>
                    <div className="text-sm">
                       <p className="font-medium text-orange-500">Links</p> 
                       <ol className="list-none text-xs flex flex-wrap gap-2">
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"><a href="https://linkedin.com/in/devinvasavong" className="w-full h-full">LinkedIn</a></li>
                            <li className="px-2 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"><a href="https://github.com/devinvasavong" className="w-full h-full">Github</a></li>
                       </ol>
                    </div>
                </section>
                <section className="my-10 bg-gray-50" id="work">
                    <div className="mx-auto max-w-5xl px-5 py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex-1">
                                <p className="font-medium text-fuchsia-400 text-sm">Personal project</p>
                                <a href="/work/workplace-scheduling" className="group">
                                    <div className="my-2">
                                        <Image className="rounded-sm" src="https://cdn.vasavong.dev/images/scheduling_made_easier.png" width={1280} height={720} alt="Screenshot of scheduling page. Text says scheduling made easier." />
                                    </div>
                                    <p className="group-hover:underline decoration-slate-400 underline-offset-4 font-medium">
                                        ShiftList
                                    </p>
                                </a>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-fuchsia-400 text-sm">Personal project</p>
                                <a href="/work/trivia-showdown" className="group">
                                    <div className="my-2">
                                        <Image className="rounded-sm" src="https://cdn.vasavong.dev/images/trivia_showdown.jpg" width={1280} height={720} alt="Screenshot of scheduling page. Text says scheduling made easier." />
                                    </div>
                                    <p className="group-hover:underline decoration-slate-400 underline-offset-4 font-medium">
                                        SHED Trivia Showdown
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}