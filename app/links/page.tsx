"use client";
import Link from 'next/link';
import * as React from 'react';

function Card({
    title,
    link,
    caption
}: {
    title: String,
    link: string,
    caption?: string
}) {
    return (
        <a href={link} aria-label={`Link to ${title}`} className="group">
            <div className="text-center bg-gray-50 hover:bg-gray-200 rounded-lg transition-colors duration-300 py-3">
                {title}
            </div>
            {caption && <p className="text-opacity-0 hidden group-hover:block group-hover:text-opacity-100 text-xs text-center pt-3 transition-all duration-300">{caption}</p>}
        </a>
    )
}

export default function Links() {
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
        <div className="mx-auto max-w-5xl px-10">
            <div className="py-10">
                <div className="grid-cols-1 flex flex-col gap-2 transition-all duration-300">
                    <Card title="Main Page" link="https://vasavong.dev/" />
                    <Card title="Read.cv" link="https://read.cv/cdv" />
                    <Card title="LinkedIn" link="https://linkedin.com/in/devinvasavong" caption="Connect with me" />
                    <Card title="Github" link="https://github.com/devinvasavong" />
                    <Card title="Email" link="mailto:devin@vasavong.com" />
                    {/* <Card title="Apply for a QuickSilver Card" link="https://i.capitalone.com/JCDXVGjJ4" /> */}
                </div>
            </div>
        </div>
    )
}