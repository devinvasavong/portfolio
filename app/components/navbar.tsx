import Link from "next/link";

// make parameter optional by adding ? after the name



export default function Navbar({
    title
}: {
    title?: string
}) {
    return (
        <nav className="w-full">
            <div className="max-w-5xl mx-auto px-10 border-b-[rgba(171,171,171,.1)] border-b-[1px] py-5">
                <div className="flex flex-row justify-between">
                    <div className="text-sm">vasavong.dev</div>
                    { title && <div className="text-sm">{title}</div> }
                </div>
            </div>
        </nav>
    )
}