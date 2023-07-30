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
						<p className="text-[18px] text-[#949494] font-medium">
							Hello, my name is Devin Vasavong. I am a software engineering student at Rochester Institute of Technology focused on full-stack web development. I am currently looking for a summer 2024 internship. 
						</p>
					</div>
					<div className="flex flex-col w-full gap-5">
						<h1 className="text-[24px] font-semibold">
							Projects
						</h1>
						<div className="w-full flex overflow-x-scroll overflow-y-hidden gap-5">
							<div className="max-w-[250px] md:max-w-[300px] bg-gray-100 p-5 rounded-lg shrink-0">
								<h2 className="text-[18px] font-semibold">
									Teleprompt
								</h2>
								<p className="text-[14px] text-[#949494] font-medium">
									Teleprompt is a desktop app that allows you to read text from a teleprompter. It is built with Next.Js, Firebase, and Electron.
								</p>
							</div>
							<div className="max-w-[250px] md:max-w-[300px] bg-gray-100 p-5 rounded-lg shrink-0">
								<h2 className="text-[18px] text-[#949494] font-medium">
									Custom Ordering App
								</h2>
								<p className="text-[14px] text-[#949494] font-medium">
									Created using Expo for a local business. Connects with API to get data and allows users to order custom products.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}