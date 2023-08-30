"use client"
import Link from "next/link";
import * as React from 'react'

export default function Navbar() {

    const [open, setOpen] = React.useState(false)

    return (
        <nav className="w-screen">
            <div className="max-w-5xl mx-auto px-10 border-b-[rgba(171,171,171,.1)] border-b-[1px] py-5">
                <div className="flex flex-row justify-between w-full">
                    <div className="text-sm">vasavong.dev</div>
                    {/* <div className="hidden sm:flex">
                        <div className="w-full flex flex-row gap-1">
                            <Link href="https://linkedin.com/in/devinvasavong" className="text-sm text-[#949494] underline">
                                LinkedIn
                            </Link>
                            <Link href="https://github.com/devinvasavong" className="text-sm text-[#949494] underline">
                                Github
                            </Link>
                            <Link href="https://drive.google.com/file/d/1f2OiCsq-c4d1L_O2T7Pj78mX9BMhi3Dr/view?usp=sharing" className="text-sm text-[#949494] underline">
                                Resume
                            </Link>
                        </div>
                    </div>
                    <button className="sm:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        <svg width={20} height={20} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#000000" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    {
                        open && (
                            <div className="flex flex-col gap-1 sm:hidden absolute w-full h-full z-10 bg-white">
                                <button onClick={() => {
                                    setOpen(false)
                                }}>
                                    <svg width={24} height={24} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#000000" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                                <Link href="https://linkedin.com/in/devinvasavong" className="text-[24px] font-medium text-[#949494] underline">
                                    LinkedIn
                                </Link>
                                <Link href="https://github.com/devinvasavong " className="text-[24px] font-medium text-[#949494] underline">
                                    Github
                                </Link>
                                <Link href="https://drive.google.com/file/d/1f2OiCsq-c4d1L_O2T7Pj78mX9BMhi3Dr/view?usp=sharing" className="text-[24px] font-medium text-[#949494] underline">
                                    Resume
                                </Link>
                            </div>
                        )
                    } */}
                </div>
            </div>
        </nav>
    )
}