import GlobalHeader from './components/globalheader'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} mx-auto max-w-xl py-16 px-4 md:px-0`}>
        <GlobalHeader />
        {children}
      </body>
    </html>
  )
}
