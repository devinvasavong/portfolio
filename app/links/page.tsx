import Image from "next/image"
import Navbar from "../components/navbar"
import Link from "next/link"

function Card({
    title,
    link
} : {
    title: String,
    link: string
}) {
    return (
        <a href={link} aria-label={`Link to ${title}`}>
            <div className="text-center bg-gray-50 hover:bg-gray-200 rounded-lg transition-colors duration-300 py-3">
                {title}
            </div>
        </a>
    )
}

export default function Links() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-5xl p-10">
                <div className="grid-cols-1 flex flex-col gap-2">
                    <Card title="Read.cv" link="https://read.cv/cdv" />
                    <Card title="Twitter" link="https://twitter.com/devinvasavong" />
                    <Card title="LinkedIn" link="https://linkedin.com/in/devinvasavong" />
                    <Card title="Instagram" link="https://instagram.com/cdvasavong" />
                </div>
            </div>
        </div>
    )
}