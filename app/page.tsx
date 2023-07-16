import Navbar from "./components/navbar"
import Card from "./components/card"
import Link from "next/link"

export default function Page() {
	return (
		<div>
			<Navbar />

			<div className="mx-auto max-w-5xl p-10">
				<div>
					Please pardon our dust, this site is still under construction.

					<div className="mt-10">
						<Link href="https://linkedin.com/in/devinvasavong" className="text-blue-500 underline">
							LinkedIn
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}