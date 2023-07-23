import Navbar from "./components/navbar"
import Card from "./components/card"
import Link from "next/link"
import Image from "next/image"

import Logo from '@/public/teleprompt.png'

export default function Page() {
	return (
		<div>
			<Navbar />

			<div className="mx-auto max-w-5xl p-10">
				<div>

					<Image alt="Screenshot of the project I'm working on" src={Logo} />
					<p className="text-xs font-normal italic">
						Something I&aposve been working on that uses an access key given to corporate clients
					</p>

				</div>
			</div>
		</div>
	)
}