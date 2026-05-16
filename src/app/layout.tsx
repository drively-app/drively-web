import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Drively — Driving School Management App',
  description: 'Manage your driving school from your phone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}