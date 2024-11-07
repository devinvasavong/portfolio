"use client";
import * as React from 'react';
import Navbar from "../components/navbar";
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const InProgress = () => {
    return (
        <Badge className="bg-yellow-200 text-yellow-700 mb-2 mr-2">In progress</Badge>
    )
}

const Completed = () => {
    return (
        <Badge className="bg-green-200 text-green-700 mb-2 mr-2">Completed</Badge>
    )
}

const Discontinued = () => {
    return (
        <Badge className="bg-red-200 text-red-700 mb-2 mr-2">Discontinued</Badge>
    )
}

export default function WorkPage() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <div>
            <Navbar scrolled={scrolled} />
            <div className="container mx-auto px-5 sm:max-w-5xl">
                <header className="mt-20 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800">
                        My Work
                    </h1>
                    <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Here are some of the projects that I&apos;ve worked on.
                    </p>
                </header>

                {/* list of projects */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
                    {/* scrolling vertical list */}
                    <ul className="w-full">
                        <li className="hover:scale-[100.5%] hover:shadow-sm p-4 border border-transparent hover:border-gray-200 duration-300 transition-transform rounded-sm">
                            <Link href="/work/workplace-scheduling">
                                <InProgress />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Workplace Management</h3>
                                <p className="text-gray-700 text-sm">
                                    ShiftList, a workplace management application that allows employees to view their schedules, request time off, and swap shifts with other employees.
                                </p>
                            </Link>
                        </li>
                        <li className="hover:scale-[100.5%] hover:shadow-sm p-4 border border-transparent hover:border-gray-200 duration-300 transition-transform rounded-sm">
                            <Link href="/work/trivia-showdown">
                                <Completed />
                                <Discontinued />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Trivia for SHED LED Screen</h3>
                                <p className="text-gray-700 text-sm">
                                    A live trivia game that displays questions and answers on a large LED screen at the SHED.
                                </p>
                            </Link>
                        </li>
                        <li className="hover:scale-[100.5%] hover:shadow-sm p-4 border border-transparent hover:border-gray-200 duration-300 transition-transform rounded-sm">
                            <Link href="/work/paws">
                                <Completed />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Paws</h3>
                                <p className="text-gray-700 text-sm">
                                    Paws, a non-profit organization that helps animals in need, needed a website to showcase their animals and allow users to donate.
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}