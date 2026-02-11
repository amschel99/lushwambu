import React from "react"
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'

import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E07A5F',
}

export const metadata: Metadata = {
  title: 'Lush by Wambo | Premium Beauty House Calls in Nairobi',
  description: 'Luxury beauty services delivered to your door in Nairobi. Bridal makeup, lash extensions, wig installation, nails, and makeup academy.',
  keywords: ['beauty', 'makeup', 'nairobi', 'bridal', 'luxury', 'house calls', 'lashes', 'wigs', 'nails'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#FDF8F7] text-foreground">
        {children}
      </body>
    </html>
  )
}
