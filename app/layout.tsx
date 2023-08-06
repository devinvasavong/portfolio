import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
// const interSoft = localFont({
//   src: [
//     {
//       path: "../public/fonts/InterSoft-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/InterSoft-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/InterSoft-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/InterSoft-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ]
// })

export const metadata = {
  title: 'Devin Vasavong',
  description: 'Portfolio of Devin Vasavong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
