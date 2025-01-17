import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation'
import Head from 'next/head'  // Import the Head component

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tharushi-Tech Enthusiast',
  description: 'Portfolio of Tharushi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* If you have other sizes, you can add them as well */}
        <link rel="icon" href="/webcopy.jpg" sizes="32x32" />
        {/* <link rel="icon" href="/favicon-16x16.png" sizes="16x16" /> */}
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  )
}
