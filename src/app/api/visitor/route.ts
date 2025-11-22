/**
 * Visitor Tracking API Route - Security Hardened
 *
 * Security measures:
 * - Origin validation (only same domain)
 * - IP-based rate limiting
 * - Input validation
 * - No sensitive data in responses
 * - Server-side only execution
 */

import { NextRequest, NextResponse } from 'next/server'
import { createVisitEmbed, sendDiscordNotification } from '@/lib/discord'

// Allowed pages to track (whitelist)
const ALLOWED_PAGES = ['/pricing', '/form']

/**
 * Get client IP from request
 */
function getClientIp(request: NextRequest): string {
  // Check Vercel-specific headers first
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp
  }

  // Fallback (shouldn't happen in production)
  return 'unknown'
}

/**
 * Validate request origin
 */
function isValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')

  // Allow requests from same domain or localhost (development)
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    'http://localhost:3000',
    'http://localhost:3001',
    'http://192.168.68.106:3000',
    'http://192.168.68.106:3001',
  ].filter(Boolean)

  if (origin) {
    return allowedOrigins.some((allowed) => origin.startsWith(allowed || ''))
  }

  if (referer) {
    return allowedOrigins.some((allowed) => referer.startsWith(allowed || ''))
  }

  // If no origin/referer, reject (potential CSRF)
  return false
}

/**
 * POST /api/visitor
 * Track page visits and send Discord notifications
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Validate origin
    if (!isValidOrigin(request)) {
      return NextResponse.json(
        { error: 'Invalid origin' },
        { status: 403 },
      )
    }

    // 2. Get client IP for rate limiting
    const clientIp = getClientIp(request)

    // 3. Parse request body
    const body = await request.json()
    const { page, referrer } = body

    // 4. Validate page is in whitelist
    if (!page || typeof page !== 'string' || !ALLOWED_PAGES.includes(page)) {
      return NextResponse.json(
        { error: 'Invalid page' },
        { status: 400 },
      )
    }

    // 5. Get user agent
    const userAgent = request.headers.get('user-agent') || undefined

    // 6. Create embed
    const embed = createVisitEmbed(page, referrer, userAgent)

    // 7. Send notification (with rate limiting)
    const result = await sendDiscordNotification(embed, clientIp)

    if (!result.success) {
      // Don't expose internal errors to client
      console.error('Failed to send Discord notification:', result.error)

      // If rate limited, return 429
      if (result.error === 'Rate limit exceeded') {
        return NextResponse.json(
          { error: 'Too many requests' },
          { status: 429 },
        )
      }

      // For other errors, return generic error
      return NextResponse.json(
        { error: 'Failed to track visit' },
        { status: 500 },
      )
    }

    // Success - return minimal response
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Visitor tracking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}

// Disable other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
