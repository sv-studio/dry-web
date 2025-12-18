import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'
import {
  createFormSubmissionEmbed,
  sendDiscordNotification,
} from '@/lib/discord'

export async function POST(request: NextRequest) {
  try {
    // Initialize Airtable inside the function
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_TOKEN!,
    }).base(process.env.AIRTABLE_BASE_ID!)

    const contactsTable = base(process.env.AIRTABLE_CONTACTS_TABLE_ID!)
    const companiesTable = base(process.env.AIRTABLE_COMPANIES_TABLE_ID!)

    const formData = await request.formData()

    // Extract form fields
    const email = formData.get('email') as string
    const name = formData.get('contact_name') as string // form field → Airtable field
    const phone_number = formData.get('phone_number') as string
    const company = formData.get('company') as string
    const inquiry_notes = formData.get('inquiry_notes') as string

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and contact name are required' },
        { status: 400 }
      )
    }

    // Auto-filled hidden fields
    const contact_type = 'potential_client'
    const inquiry_type = 'sales_inquiry'

    // Handle company linking
    let companyRecordId: string | undefined

    if (company && company.trim()) {
      try {
        // Search for existing client
        const existingClients = await companiesTable
          .select({
            filterByFormula: `{name} = "${company.trim()}"`,
            maxRecords: 1,
          })
          .firstPage()

        if (existingClients.length > 0) {
          // Client exists, use its ID
          companyRecordId = existingClients[0].id
        } else {
          // Client doesn't exist, create new one
          const newClient = await companiesTable.create({
            name: company.trim(),
          })
          companyRecordId = newClient.id
        }
      } catch (error) {
        console.error('Error handling company:', error)
        // Continue without company linking if there's an error
      }
    }

    // Create contact record
    const contactRecord: Record<string, string | string[] | undefined> = {
      email,
      name,
      contact_type,
      inquiry_type,
    }

    // Add optional fields if provided
    if (phone_number && phone_number.trim()) {
      contactRecord.phone_number = phone_number.trim()
    }

    if (inquiry_notes && inquiry_notes.trim()) {
      contactRecord.inquiry_notes = inquiry_notes.trim()
    }

    if (companyRecordId) {
      contactRecord.client = [companyRecordId]
    }

    // Save contact to Airtable
    await contactsTable.create(contactRecord)

    // Send Discord notification (non-blocking)
    // If Discord fails, form submission still succeeds
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    const discordEmbed = createFormSubmissionEmbed(
      email,
      name,
      company || undefined,
      phone_number || undefined,
    )

    // Send notification asynchronously (don't wait for it)
    sendDiscordNotification(discordEmbed, clientIp).catch((error) => {
      // Log error but don't fail the request
      console.error('Failed to send Discord notification:', error)
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      {
        error: 'Failed to process contact form',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
