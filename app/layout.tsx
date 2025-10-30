"use client"

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// ✅ Website metadata including favicon
export const metadata: Metadata = {
  title: "Minyamir Kelemu - Fullstack Developer",
  description:
    "Software Engineer and Fullstack Developer specializing in modern web applications and scalable systems",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/me.png", type: "image/png", sizes: "32x32" },
      { url: "/me.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/me.png",
  },
  themeColor: "#0f172a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
