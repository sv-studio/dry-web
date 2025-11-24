'use client'

import { Analytics } from '@vercel/analytics/next'

export function AnalyticsWrapper() {
  return (
    <Analytics
      beforeSend={(event) => {
        // Check if user has dev mode enabled in localStorage
        if (typeof window !== 'undefined') {
          const isDevUser = localStorage.getItem('sv-dev-user') === 'true'

          // Don't track if dev user flag is set
          if (isDevUser) {
            console.log('🚫 Analytics blocked (dev user mode)')
            return null
          }
        }

        // Track normally for real users
        return event
      }}
    />
  )
}
