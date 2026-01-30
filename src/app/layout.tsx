import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { PresenceTracker } from '@/components/presence-tracker'

export const metadata: Metadata = {
  title: {
    template: '%s - DRY',
    default: 'DRY - Servicios de Software',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f[]=satoshi@400,500,600,700&f[]=clash-display@500,600,700&display=swap"
        />
      </head>
      <body className="bg-white text-gray-950 antialiased">
        {children}
        <Analytics />
        <PresenceTracker />
      </body>
    </html>
  )
}
