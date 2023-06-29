import Link from "next/link"
import Navbar from "./components/navbar"
import { Analytics } from '@vercel/analytics/react'

export default function Page() {
	return (
		<div>
			<Analytics />
			<Navbar />
			<div className="max-w-5xl mx-auto px-10 py-12">
				<div className="flex flex-col gap-2.5">
					<h1 className="font-semibold text-3xl">Devin Vasavong</h1>
					<div className="text-slate-500">
						<p>Software Engineering Student at <Link href="https://rit.edu" className="underline">Rochester Institute of Technology</Link></p>
					</div>
				</div>
				<div className="flex flex-row gap-2.5 mt-[1rem]">
					<Link href="mailto:devin@vasavong.com?subject=Portfolio Inquiry">
						<div className="px-3 py-0.5 bg-gray-200 rounded-full">
							Email
						</div>
					</Link>
					{/* <Link href="https://drive.google.com/file/d/1f2OiCsq-c4d1L_O2T7Pj78mX9BMhi3Dr/view?usp=sharing">
						<div className="px-3 py-0.5 bg-gray-200 rounded-full">
							Resume
						</div>
					</Link> */}
					<Link href="https://linkedin.com/in/devinvasavong">
						<div className="px-3 py-0.5 bg-gray-200 rounded-full">
							LinkedIn
						</div>
					</Link>
				</div>
				<div className="mt-[2rem] sm:mt-[5rem]">
					<h2 className="font-semibold uppercase text-sm text-slate-500">About me</h2>
					<p>Hi, my name is Devin Vasavong and I&apos;m Laotion-American. I&apos;m currently a 2nd year (as of Fall 2023) Software Engineering student at RIT. A fun fact about me is that I am an early graduate who graduated at the age of 16. I&apos;m a very passionate coder!</p>
				</div>
				<div className="mt-[2rem] sm:mt-[5rem]">
					<h2 className="font-semibold uppercase text-sm text-slate-500">Projects</h2>
					<p>
						Nothing to see here yet! Check back later.
					</p>
				</div>
				<div className="mt-[2rem] sm:mt-[5rem]">
					<h2 className="font-semibold uppercase text-sm text-slate-500">Contact me</h2>
					<p>
						I am open to opportunities! Feel free to contact me <Link href="mailto:devin@vasavong.com?subject=Contact Inquiry" className="underline">here</Link>!
					</p>
				</div>
			</div>
		</div>
	)
}