import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Drively — Driving School Management App',
  description: 'Manage your driving school from your phone',
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    other: {
      'facebook-domain-verification': '6cnm4mzdf2nijpvf0v9h06jcdt241',
    },
  },
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
