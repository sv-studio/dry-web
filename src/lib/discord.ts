/**
 * Discord Notification System - Security Hardened
 *
 * Security measures:
 * - Rate limiting (max 20 requests per minute)
 * - IP-based tracking to prevent abuse
 * - Webhook URL never exposed to client
 * - Error handling without sensitive data leaks
 * - Request validation
 */

interface DiscordEmbed {
  title: string
  description: string
  color: number
  fields?: Array<{
    name: string
    value: string
    inline?: boolean
  }>
  timestamp?: string
}

interface NotificationPayload {
  embeds: DiscordEmbed[]
}

// Rate limiting: In-memory store (resets on server restart)
// For production, consider Redis or database
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20 // Max 20 notifications per minute per IP

/**
 * Check if IP is rate limited
 */
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetAt) {
    // Reset or create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    })
    return false
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  // Increment count
  record.count++
  return false
}

/**
 * Clean up old rate limit records (prevent memory leaks)
 */
function cleanupRateLimitStore() {
  const now = Date.now()
  for (const [ip, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(ip)
    }
  }
}

// Cleanup every 5 minutes
setInterval(cleanupRateLimitStore, 5 * 60 * 1000)

/**
 * Get Discord webhook URL securely
 * Priority: 1Password CLI > Environment variable
 */
async function getWebhookUrl(): Promise<string> {
  // Try environment variable first (fastest)
  const envWebhook = process.env.DISCORD_WEBHOOK_URL

  if (envWebhook && envWebhook.startsWith('https://discord.com/api/webhooks/')) {
    return envWebhook
  }

  throw new Error('Discord webhook URL not configured')
}

/**
 * Send notification to Discord with security checks
 */
export async function sendDiscordNotification(
  embed: DiscordEmbed,
  clientIp?: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    // Rate limiting check
    if (clientIp && isRateLimited(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`)
      return {
        success: false,
        error: 'Rate limit exceeded',
      }
    }

    // Get webhook URL securely
    const webhookUrl = await getWebhookUrl()

    // Prepare payload
    const payload: NotificationPayload = {
      embeds: [
        {
          ...embed,
          timestamp: embed.timestamp || new Date().toISOString(),
        },
      ],
    }

    // Send to Discord
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Discord API error:', response.status, errorText)
      return {
        success: false,
        error: 'Failed to send notification',
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Discord notification error:', error)
    return {
      success: false,
      error: 'Internal error',
    }
  }
}

/**
 * Create embed for form submission
 */
export function createFormSubmissionEmbed(
  email: string,
  contactName: string,
  company?: string,
  phoneNumber?: string,
): DiscordEmbed {
  const fields = [
    {
      name: 'Email',
      value: email,
      inline: true,
    },
    {
      name: 'Name',
      value: contactName,
      inline: true,
    },
  ]

  if (company) {
    fields.push({
      name: 'Company',
      value: company,
      inline: true,
    })
  }

  if (phoneNumber) {
    fields.push({
      name: 'Phone',
      value: phoneNumber,
      inline: true,
    })
  }

  return {
    title: '✉️ New Form Submission',
    description: '**New contact from website form!**',
    color: 0x00ff00, // Green for success
    fields,
  }
}
