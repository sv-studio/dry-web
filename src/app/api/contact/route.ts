import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_TOKEN!,
}).base(process.env.AIRTABLE_BASE_ID!)

const contactsTable = base(process.env.AIRTABLE_CONTACTS_TABLE_ID!)
const companiesTable = base(process.env.AIRTABLE_COMPANIES_TABLE_ID!)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const email = formData.get('email') as string
    const contact_name = formData.get('contact_name') as string
    const phone_number = formData.get('phone_number') as string
    const company = formData.get('company') as string
    const inquiry_notes = formData.get('inquiry_notes') as string

    // Validate required fields
    if (!email || !contact_name) {
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
        // Search for existing company
        const existingCompanies = await companiesTable
          .select({
            filterByFormula: `{company_name} = "${company.trim()}"`,
            maxRecords: 1,
          })
          .firstPage()

        if (existingCompanies.length > 0) {
          // Company exists, use its ID
          companyRecordId = existingCompanies[0].id
        } else {
          // Company doesn't exist, create new one
          const newCompany = await companiesTable.create({
            company_name: company.trim(),
          })
          companyRecordId = newCompany.id
        }
      } catch (error) {
        console.error('Error handling company:', error)
        // Continue without company linking if there's an error
      }
    }

    // Create contact record
    const contactRecord: Record<string, string | string[] | undefined> = {
      email,
      contact_name,
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
      contactRecord.company = [companyRecordId]
    }

    // Save contact to Airtable
    await contactsTable.create(contactRecord)

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
