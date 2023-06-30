import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-inter`}>
      <body className="grid min-h-screen min-w-full grid-cols-1 grid-rows-[minmax(58px,min-content)_auto_100px] bg-blue-300 text-black transition-all">
        <NavBar />
        {children}
        {/* Footer here */}
      </body>
    </html>
  )
}
