import Image from "next/image"
import Navbar from "../components/navbar"
import Link from "next/link"

function Card({
    title,
    link,
    caption
} : {
    title: String,
    link: string,
    caption?: string
}) {
    return (
        <a href={link} aria-label={`Link to ${title}`} className="group">
            <div className="text-center bg-gray-50 hover:bg-gray-200 rounded-lg transition-colors duration-300 py-3">
                {title}
            </div>
            { caption && <p className="text-opacity-0 hidden group-hover:block group-hover:text-opacity-100 text-xs text-center pt-3 transition-all duration-300">{caption}</p>}
        </a>
    )
}

export default function Links() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-5xl p-10">
                <div className="grid-cols-1 flex flex-col gap-2 transition-all duration-300">
                    <Card title="Read.cv" link="https://read.cv/cdv" />
                    <Card title="Twitter" link="https://twitter.com/devinvasavong" />
                    <Card title="LinkedIn" link="https://linkedin.com/in/devinvasavong" caption="Connect with me" />
                    <Card title="Instagram" link="https://instagram.com/cdvasavong" />
                </div>
            </div>
        </div>
    )
}