"use client";
import * as React from 'react';
import Link from 'next/link';
import Navbar from './components/navbar';
import Image from 'next/image';

export default function Main() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-screen scroll-smooth">
            <Navbar scrolled={scrolled} />
            <div className="container mx-auto px-5 sm:max-w-5xl">
                <header className="mt-20 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800">
                        Hi, my name is Devin Vasavong & I&apos;m a first-generation student.
                    </h1>
                    <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        I&apos;m a <span className="font-semibold">software engineering student</span> born and raised in Rochester, NY. I&apos;m currently studying at the 
                        <Link className="font-semibold text-[#F76902] hover:underline" href="https://www.rit.edu"> Rochester Institute of Technology</Link>, where I&apos;m pursuing a Bachelor&apos;s degree in Software Engineering. I&apos;m passionate about building software that makes a difference in people&apos;s lives.
                    </p>
                </header>

                {/* Skills Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
                    <p className="mt-5 text-lg text-gray-700 mb-8">
                        I&apos;m primarily interested in full-stack development, but I also have experience with mobile app development and game development. Here are some of the technologies I&apos;ve worked with:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programming Languages</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C++</li>
                            </ul>
                        </div>
                        {/* Frameworks and Libraries */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frameworks & Libraries</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        {/* Tools and Technologies */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Git & GitHub</li>
                                <li>Docker</li>
                                <li>Firebase</li>
                                <li>SQL & NoSQL Databases</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <main className="mt-16">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800">My Work</h2>
                        <p className="mt-5 text-lg text-gray-700">
                            I&apos;ve worked on a variety of projects, ranging from web development to mobile app development. Here are a few of my projects:
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    <Link href="/work/workplace-scheduling">
                                        <div className="hover:text-[#2323FF]">Workplace Management</div>
                                    </Link>
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    ShiftList, a workplace management web-application for small businesses, aims to simplify the process of scheduling shifts and managing employees.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    <Link href="http://roblox.com/groups/4158441/Sweets">
                                        <div className="hover:text-[#2323FF]">Sweets</div>
                                    </Link>
                                </h3>
                                <p className="mt-3 text-gray-600">
                                    Sweets, a group on ROBLOX, is a group with over 30,000 members that focuses on creating games and experiences for the ROBLOX platform.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience Timeline</h2>
                        <div className="relative border-l border-gray-300">
                            {/* RIT Student Life Social Media Coordinator */}
                            <div className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#2323FF] rounded-full -left-1.5"></div>
                                <h3 className="text-2xl font-semibold text-gray-800">RIT Student Life Social Media Coordinator</h3>
                                <p className="text-gray-600">Aug 2024 - Present · 4 mos</p>
                                <p className="mt-2 text-gray-700">
                                    Curate and manage engaging content for Instagram and Facebook, promoting campus events and resources.
                                </p>
                                <p className="mt-1 text-gray-500 italic">Skills: Online Media Management, Social Media Management</p>
                            </div>

                            {/* Brick City Ambassador */}
                            <div className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#2323FF] rounded-full -left-1.5"></div>
                                <h3 className="text-2xl font-semibold text-gray-800">Brick City Ambassador</h3>
                                <p className="text-gray-600">Aug 2023 - Present · 1 yr 4 mos</p>
                                <p className="mt-2 text-gray-700">
                                    Guided groups of families through campus tours and provided knowledgeable information to families.
                                </p>
                            </div>

                            {/* STEP Tutor */}
                            <div className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#2323FF] rounded-full -left-1.5"></div>
                                <h3 className="text-2xl font-semibold text-gray-800">STEP Tutor</h3>
                                <p className="text-gray-600">Feb 2024 - Jun 2024 · 5 mos</p>
                                <p className="mt-2 text-gray-700">
                                    Worked as a positive role model for 6-12th grade students, assisting with Geometry, Algebra I/II, Pre-calculus, and more.
                                </p>
                                <p className="mt-1 text-gray-500 italic">Skills: Mathematics</p>
                            </div>

                            {/* Wegmans Customer Service Representative */}
                            <div className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#2323FF] rounded-full -left-1.5"></div>
                                <h3 className="text-2xl font-semibold text-gray-800">Customer Service Representative</h3>
                                <p className="text-gray-600">Wegmans Food Markets · Mar 2022 - Present · 2 yrs 9 mos</p>
                                <p className="mt-2 text-gray-700">
                                    Provided 100% customer satisfaction by resolving customer concerns, comments, and suggestions.
                                </p>
                            </div>

                            {/* Wegmans Cashier */}
                            <div className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#2323FF] rounded-full -left-1.5"></div>
                                <h3 className="text-2xl font-semibold text-gray-800">Cashier</h3>
                                <p className="text-gray-600">Wegmans Food Markets · Feb 2021 - Mar 2022 · 1 yr 2 mos</p>
                                <p className="mt-2 text-gray-700">
                                    Assisted customers efficiently at checkout, providing excellent service to ensure a smooth shopping experience.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}