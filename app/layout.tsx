// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minyamir Kelemu - Fullstack Developer',
  themeColor: '#0f172a',
  icons: {
    icon: '/me.png',
    apple: '/me.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
