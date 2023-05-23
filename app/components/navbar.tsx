import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="max-w-5xl mx-auto px-10 border-b-[rgba(171,171,171,.1)] border-b-[1px] py-5">
                <div className="flex flex-row justify-between">
                    <div className="text-sm">vasavong.dev</div>
                    <ul>
                        {/* <li className="text-sm text-slate-500">Blog</li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}