"use client"
import * as React from 'react'

import Tiger from '@/app/images/Roaring Tiger_rgb.png'
import Image from "next/image"

import { motion } from 'framer-motion'

export default function Page() {
	return (
		<div>
			<div className="w-full h-full">
				<motion.div transition={{ duration: 1}} initial={{ opacity: 0}} animate={{ opacity: 100 }} className="top-0 z-100 px-10 w-full h-auto py-5 flex flex-row justify-end gap-10 bg-white/50 sm:bg-transparent border-black/5 border-b sm:border-none backdrop-blur-lg sm:backdrop-blur-none">
					<div className="flex flex-col">
						<h1 className="text-xs sm:text-sm">Devin Vasavong</h1>
						<p className="text-xs sm:text-sm text-gray-500">Student</p>
					</div>
					<div className="flex flex-col">
						<h1 className="text-xs sm:text-sm">Rochester</h1>
						<p className="text-xs sm:text-sm text-gray-500">New York</p>
					</div>
					<div className="flex flex-col">
						<h1 className="text-xs sm:text-sm">devin@vasavong.com</h1>
						<p className="text-xs sm:text-sm text-gray-500">585-831-3592</p>
					</div>
				</motion.div>
				<section className="flex flex-col gap-3 px-10">
					<motion.div transition={{ duration: 1 }} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 100 }} className="font-semibold sm:text-lg max-w-2xl flex flex-row items-center gap-3 text-gray-500">
						<Image src={Tiger} height={25} width={25} alt="Tiger mascot of Rochester Institute of Technology" />
						Software Engineering student at Rochester Institute of Technology
					</motion.div>
					<motion.div transition={{ duration: 1.5 }} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 100 }} className="font-bold text-3xl max-w-2xl flex flex-row items-center gap-3">
						Passionate in creating B2B software applications
					</motion.div>
				</section>
				<section className="flex flex-col gap-3 px-10 mt-10 items-end">
					<motion.div transition={{ duration: 1.5 }} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 100 }} className="underline font-semibold sm:text-lg max-w-2xl flex flex-row items-center gap-3 text-gray-500 text-end">
						My Projects
					</motion.div>
					<motion.div transition={{ duration: 2 }} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 100 }} className="font-bold text-3xl max-w-2xl flex flex-row items-center gap-3 text-end">
						Here are some previous and current projects
					</motion.div>
					<motion.div transition={{ duration: 2 }} initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 100 }} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
						<div className="bg-gray-200 rounded-lg p-5">
							<h1 className="font-bold">Teleprompter Service</h1>
							<p className="font-semibold text-gray-500">An electron app</p>
						</div>
						<div className="bg-gray-200 rounded-lg p-5">
							<h1 className="font-bold">Teleprompter Service</h1>
							<p className="font-semibold text-gray-500">An electron app</p>
						</div>
						<div className="bg-gray-200 rounded-lg p-5">
							<h1 className="font-bold">Teleprompter Service</h1>
							<p className="font-semibold text-gray-500">An electron app</p>
						</div>
						<div className="bg-gray-200 rounded-lg p-5">
							<h1 className="font-bold">Teleprompter Service</h1>
							<p className="font-semibold text-gray-500">An electron app</p>
						</div>
					</motion.div>
				</section>
			</div>
		</div>
	)
}