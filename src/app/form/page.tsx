'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import { VisitorTracker } from '@/components/visitor-tracker'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function ContactFormSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario')
      }

      // Redirect to thank you page
      router.push('/thank-you')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error')
      setIsSubmitting(false)
    }
  }

  return (
    <Container className="mt-16">
      <Heading as="h1">Contáctanos</Heading>
      <Lead className="mt-6 max-w-3xl">
        Conversemos sobre tu proyecto. Te ayudamos a transformar tus ideas
        en soluciones de software listas para producción.
      </Lead>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        {/* Left column - Form */}
        <div>
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-950">
            Correo electrónico *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            disabled={isSubmitting}
            placeholder="tu@email.com"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-500 focus:border-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="contact_name" className="block text-sm font-medium text-gray-950">
            Nombre completo *
          </label>
          <input
            type="text"
            name="contact_name"
            id="contact_name"
            required
            minLength={2}
            disabled={isSubmitting}
            placeholder="Camila Pérez"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-500 focus:border-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-950">
            Número de teléfono
          </label>
          <input
            type="tel"
            name="phone_number"
            id="phone_number"
            disabled={isSubmitting}
            placeholder="+51 999 999 999"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-500 focus:border-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-950">
            Nombre de la empresa
          </label>
          <input
            type="text"
            name="company"
            id="company"
            disabled={isSubmitting}
            placeholder="ACME"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-500 focus:border-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label htmlFor="inquiry_notes" className="block text-sm font-medium text-gray-950">
            Mensaje
          </label>
          <textarea
            name="inquiry_notes"
            id="inquiry_notes"
            rows={4}
            disabled={isSubmitting}
            placeholder="Cuéntanos sobre tu proyecto..."
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-950 placeholder-gray-500 focus:border-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:bg-gray-100 disabled:cursor-not-allowed resize-y"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </div>
      </form>
        </div>

        {/* Right column - Contact Info */}
        <div className="lg:pl-8">
          <div className="rounded-2xl bg-gray-50 p-8">
            <h2 className="text-xl font-semibold text-gray-950">Información de contacto</h2>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Persona de contacto</p>
                <p className="mt-1 text-base font-medium text-gray-950">
                  Adriana Suárez
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Correo</p>
                <a
                  href="mailto:suarezladriana@gmail.com"
                  className="mt-1 block text-base font-medium text-gray-950 hover:text-gray-600 transition-colors"
                >
                  suarezladriana@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Teléfono</p>
                <a
                  href="tel:+51963754908"
                  className="mt-1 block text-base font-medium text-gray-950 hover:text-gray-600 transition-colors"
                >
                  +51 963 754 908
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function ContactForm() {
  return (
    <main className="overflow-hidden">
      <VisitorTracker page="/form" />
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ContactFormSection />
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
