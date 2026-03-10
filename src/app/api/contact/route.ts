import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_BASE_ID = 'appMA9GO8Hq98jSuw'
const AIRTABLE_TABLE_ID = 'tblhZOMG47175Yjyh'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const email = formData.get('email') as string
    const contact_name = formData.get('contact_name') as string
    const phone_number = formData.get('phone_number') as string
    const company = formData.get('company') as string
    const notes = formData.get('notes') as string

    if (!email || !contact_name) {
      return NextResponse.json(
        { error: 'Email and contact name are required' },
        { status: 400 }
      )
    }

    const fields: Record<string, string> = {
      email,
      contact_name,
      contact_type: 'potential_client',
    }

    if (phone_number?.trim()) fields.phone_number = phone_number.trim()
    if (company?.trim()) fields.company = company.trim()
    if (notes?.trim()) fields.notes = notes.trim()

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    )

    if (!response.ok) {
      const error = await response.json()
      console.error('Airtable API error:', error)
      return NextResponse.json(
        { error: 'Failed to save contact' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
