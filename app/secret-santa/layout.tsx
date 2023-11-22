
// Image for metadata
import { Head } from "next/document"

export const metadata = {
    title: "Secret Santa List",
    description: "Here's a list of things I want for Secret Santa :)",
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}