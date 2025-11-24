import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { AnalyticsWrapper } from '@/components/analytics-wrapper'
import { DevModeToggle } from '@/components/dev-mode-toggle'

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
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">
        {children}
        <AnalyticsWrapper />
        <DevModeToggle />
      </body>
    </html>
  )
}
