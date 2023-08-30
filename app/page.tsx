import Navbar from "./components/navbar"
import { toast, Toaster } from 'sonner'

export default function Page() {
	return (
		<div>
			<Navbar />
			<Toaster />

			<div className="mx-auto max-w-5xl p-10">
				<div className="flex flex-col gap-5">
					<div className="flex flex-col w-full">
						<h1 className="text-[24px] font-semibold">
							About Me
						</h1>
						<p className="text-[18px] text-[#949494]">
							Hello, my name is Devin Vasavong. I am a software engineering student at Rochester Institute of Technology focused on full-stack web development. I am currently looking for a summer 2024 internship. 
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}