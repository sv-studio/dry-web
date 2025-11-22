/**
 * Visitor Tracker Component - Security Hardened
 *
 * Security measures:
 * - Client-side throttling (max 1 request per page per session)
 * - localStorage to prevent duplicate notifications
 * - Silent failures (doesn't block page rendering)
 * - No sensitive data exposed
 */

'use client'

import { useEffect, useRef } from 'react'

interface VisitorTrackerProps {
  page: string
}

export function VisitorTracker({ page }: VisitorTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    // Prevent multiple tracking calls in same session
    if (hasTracked.current) {
      return
    }

    // Check if already tracked in this session (prevent duplicates on hot reload)
    const sessionKey = `tracked_${page}`
    if (typeof window !== 'undefined') {
      const alreadyTracked = sessionStorage.getItem(sessionKey)
      if (alreadyTracked) {
        hasTracked.current = true
        return
      }
    }

    // Track the visit
    async function trackVisit() {
      try {
        // Get referrer (where user came from)
        const referrer = document.referrer || undefined

        // Send tracking request
        const response = await fetch('/api/visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page,
            referrer,
          }),
        })

        if (response.ok) {
          // Mark as tracked in session
          sessionStorage.setItem(sessionKey, 'true')
          hasTracked.current = true
        } else {
          // Log error silently (don't expose to user)
          const status = response.status
          if (status === 429) {
            console.debug('Tracking rate limited')
          } else {
            console.debug('Tracking failed:', status)
          }
        }
      } catch (error) {
        // Silent failure - tracking shouldn't break the page
        console.debug('Tracking error:', error)
      }
    }

    // Small delay to avoid blocking initial page render
    const timeout = setTimeout(trackVisit, 500)

    return () => clearTimeout(timeout)
  }, [page])

  // This component doesn't render anything
  return null
}
