'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Navbar from '@/app/components/navbar'
import { Badge } from '@/components/ui/badge'

export default function WorkplaceSchedulingPage() {
    const router = useRouter()
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
        <div className="min-h-screen bg-background">
            <Navbar scrolled={scrolled} />
            <div className="sm:max-w-5xl w-11/12 mx-auto pb-10">
                {/* Hero Section */}
                <section className="text-center py-10">
                    <h1 className="font-bold text-4xl">
                        Simplify Workplace Management
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Affordable, efficient, and tailored for small businesses.
                    </p>
                    <Link href="https://shiftlist.org" passHref className="mt-4 inline-block text-sm bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                        Newsletter via Email
                    </Link>
                </section>

                {/* Benefits Section */}
                <section className="py-10">
                    <h2 className="font-semibold text-2xl text-center">Why Choose Shiftlist?</h2>
                    <p className="text-center text-gray-500 mt-2">We have planned to create a workplace management app that
                        has workplace scheduling, time tracking, and employee management features.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center space-x-4">
                            <Badge color="green">✅</Badge>
                            <p>Easy to use and intuitive interface</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge color="green">✅</Badge>
                            <p>Customizable for your business needs</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge color="green">✅</Badge>
                            <p>Cost-effective and affordable</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge color="green">✅</Badge>
                            <p>Mobile-friendly and accessible anywhere</p>
                        </div>
                    </div>
                </section>

                {/* Demo Section */}
                <section className="py-10 flex flex-col items-center">
                    <h2 className="font-semibold text-2xl text-center">ShiftList Mockup</h2>
                    <Image
                        src="https://cdn.vasavong.dev/images/scheduling_made_easier.png"
                        width={500}
                        height={300}
                        alt="Shiftlist Preview"
                        className="rounded-lg mt-4"
                    />
                </section>

                {/* Subscription Plans Section */}
                <section className="py-10">
                    <h2 className="font-semibold text-2xl text-center">Subscription Plans</h2>
                    <p className="text-center text-gray-500 mt-2">
                        We plan to offer tiers that make it affordable and cost-effective for small businesses.
                    </p>
                </section>

                {/* Call to Action */}
                <section id="contact" className="py-10 bg-black text-white text-center rounded-lg">
                    <h2 className="font-semibold text-lg">Interested in Shiftlist?</h2>
                    <p className="mt-2">
                        Shiftlist is currently in development. Contact us to get early access or learn more.
                    </p>
                    <div className="mt-4">
                        <Link href="mailto:devin@vasavong.dev?subject=Shiftlist Inquiry" passHref className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">
                            Contact me
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

