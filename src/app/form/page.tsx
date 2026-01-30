'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'

type FieldStatus = 'untouched' | 'valid' | 'invalid'

interface FieldState {
  value: string
  status: FieldStatus
  error: string
}

interface FormState {
  email: FieldState
  contact_name: FieldState
  phone_number: FieldState
  company: FieldState
  notes: FieldState
}

const initialFieldState: FieldState = { value: '', status: 'untouched', error: '' }

const initialFormState: FormState = {
  email: initialFieldState,
  contact_name: initialFieldState,
  phone_number: initialFieldState,
  company: initialFieldState,
  notes: initialFieldState,
}

// Validation functions
const validators = {
  email: (value: string): { valid: boolean; error: string } => {
    if (!value.trim()) return { valid: false, error: 'El correo es requerido' }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return { valid: false, error: 'Ingresa un correo válido' }
    return { valid: true, error: '' }
  },
  contact_name: (value: string): { valid: boolean; error: string } => {
    if (!value.trim()) return { valid: false, error: 'El nombre es requerido' }
    if (value.trim().length < 2) return { valid: false, error: 'Mínimo 2 caracteres' }
    return { valid: true, error: '' }
  },
  phone_number: (value: string): { valid: boolean; error: string } => {
    // Optional field - always valid if empty
    if (!value.trim()) return { valid: true, error: '' }
    // Basic phone validation (allows +, spaces, dashes, numbers)
    const phoneRegex = /^[\d\s\-+()]{7,20}$/
    if (!phoneRegex.test(value)) return { valid: false, error: 'Formato de teléfono inválido' }
    return { valid: true, error: '' }
  },
  company: (_value: string): { valid: boolean; error: string } => {
    // Optional field - always valid
    return { valid: true, error: '' }
  },
  notes: (_value: string): { valid: boolean; error: string } => {
    // Optional field - always valid
    return { valid: true, error: '' }
  },
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ContactFormSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formState, setFormState] = useState<FormState>(initialFormState)

  const validateField = useCallback((name: keyof FormState, value: string): FieldState => {
    const { valid, error } = validators[name](value)
    return {
      value,
      status: valid ? 'valid' : 'invalid',
      error,
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof FormState

    // Only validate if field has been touched (has value or was previously touched)
    if (value || formState[fieldName].status !== 'untouched') {
      setFormState(prev => ({
        ...prev,
        [fieldName]: validateField(fieldName, value),
      }))
    } else {
      setFormState(prev => ({
        ...prev,
        [fieldName]: { value, status: 'untouched', error: '' },
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof FormState

    // Validate on blur for required fields even if empty
    if (fieldName === 'email' || fieldName === 'contact_name' || value) {
      setFormState(prev => ({
        ...prev,
        [fieldName]: validateField(fieldName, value),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate all required fields
    const emailValidation = validateField('email', formState.email.value)
    const nameValidation = validateField('contact_name', formState.contact_name.value)
    const phoneValidation = validateField('phone_number', formState.phone_number.value)

    const newFormState = {
      ...formState,
      email: emailValidation,
      contact_name: nameValidation,
      phone_number: phoneValidation,
    }
    setFormState(newFormState)

    // Check if form is valid
    if (emailValidation.status === 'invalid' || nameValidation.status === 'invalid' || phoneValidation.status === 'invalid') {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

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

      router.push('/thank-you')
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Ocurrió un error')
      setIsSubmitting(false)
    }
  }

  const getInputClassName = (fieldName: keyof FormState) => {
    const base = "mt-1.5 sm:mt-2 block w-full rounded-lg border bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-950 placeholder-gray-400 focus:outline-none focus:ring-1 disabled:bg-gray-100 disabled:cursor-not-allowed pr-10"
    const status = formState[fieldName].status

    if (status === 'valid') {
      return `${base} border-green-500 focus:border-green-500 focus:ring-green-500`
    }
    if (status === 'invalid') {
      return `${base} border-red-500 focus:border-red-500 focus:ring-red-500`
    }
    return `${base} border-gray-300 focus:border-accent-primary focus:ring-accent-primary`
  }

  const renderStatusIcon = (fieldName: keyof FormState) => {
    const status = formState[fieldName].status
    if (status === 'valid') {
      return <CheckIcon className="size-5 text-green-500" />
    }
    if (status === 'invalid') {
      return <XIcon className="size-5 text-red-500" />
    }
    return null
  }

  const renderError = (fieldName: keyof FormState) => {
    const { status, error } = formState[fieldName]
    if (status === 'invalid' && error) {
      return (
        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
          {error}
        </p>
      )
    }
    return null
  }

  return (
    <Container className="mt-8 sm:mt-12 lg:mt-16">
      <Heading as="h1">Contáctanos</Heading>
      <Lead className="mt-3 sm:mt-4 lg:mt-6 max-w-3xl">
        Conversemos sobre tu proyecto. Te ayudamos a transformar tus ideas
        en soluciones de software listas para producción.
      </Lead>

      {/* Mobile contact info - shown above form on small screens */}
      <div className="mt-6 sm:mt-8 lg:hidden">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base">
          <a
            href="mailto:suarezladriana@gmail.com"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-accent-primary transition-colors"
          >
            <svg className="size-4 sm:size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            suarezladriana@gmail.com
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="tel:+51961986084"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-accent-primary transition-colors"
          >
            <svg className="size-4 sm:size-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +51 961 986 084
          </a>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 gap-6 sm:gap-8 lg:gap-x-12 lg:gap-y-10 lg:grid-cols-2">
        {/* Left column - Form */}
        <div>
          {submitError && (
            <div className="mb-4 sm:mb-6 rounded-lg bg-accent-pink/10 p-3 sm:p-4 text-sm sm:text-base text-accent-pink">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-950">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="tu@email.com"
                  className={getInputClassName('email')}
                  aria-invalid={formState.email.status === 'invalid'}
                  aria-describedby={formState.email.status === 'invalid' ? 'email-error' : undefined}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {renderStatusIcon('email')}
                </div>
              </div>
              <div id="email-error">{renderError('email')}</div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="contact_name" className="block text-sm sm:text-base font-medium text-gray-950">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="contact_name"
                  id="contact_name"
                  value={formState.contact_name.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="Camila Pérez"
                  className={getInputClassName('contact_name')}
                  aria-invalid={formState.contact_name.status === 'invalid'}
                  aria-describedby={formState.contact_name.status === 'invalid' ? 'contact_name-error' : undefined}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {renderStatusIcon('contact_name')}
                </div>
              </div>
              <div id="contact_name-error">{renderError('contact_name')}</div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone_number" className="block text-sm sm:text-base font-medium text-gray-950">
                Número de teléfono
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  value={formState.phone_number.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="+51 999 999 999"
                  className={getInputClassName('phone_number')}
                  aria-invalid={formState.phone_number.status === 'invalid'}
                  aria-describedby={formState.phone_number.status === 'invalid' ? 'phone_number-error' : undefined}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {renderStatusIcon('phone_number')}
                </div>
              </div>
              <div id="phone_number-error">{renderError('phone_number')}</div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm sm:text-base font-medium text-gray-950">
                Nombre de la empresa
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formState.company.value}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="ACME"
                  className={getInputClassName('company')}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {renderStatusIcon('company')}
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="notes" className="block text-sm sm:text-base font-medium text-gray-950">
                Mensaje
              </label>
              <textarea
                name="notes"
                id="notes"
                rows={4}
                value={formState.notes.value}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="mt-1.5 sm:mt-2 block w-full rounded-lg border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-950 placeholder-gray-400 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary disabled:bg-gray-100 disabled:cursor-not-allowed resize-y"
              />
            </div>

            <div className="pt-1 sm:pt-2">
              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </div>
          </form>
        </div>

        {/* Right column - Contact Info */}
        <div className="lg:pl-4 xl:pl-8">
          <div className="rounded-xl sm:rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-5 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-950">Información de contacto</h2>
            <div className="mt-4 sm:mt-5 lg:mt-6 space-y-3 sm:space-y-4">
              <div>
                <p className="text-sm sm:text-base font-medium text-gray-500">Persona de contacto</p>
                <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-gray-950">
                  Adriana Suárez
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-gray-500">Correo</p>
                <a
                  href="mailto:suarezladriana@gmail.com"
                  className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-gray-950 hover:text-accent-primary transition-colors"
                >
                  suarezladriana@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-gray-500">Teléfono</p>
                <a
                  href="tel:+51961986084"
                  className="mt-0.5 sm:mt-1 block text-sm sm:text-base font-medium text-gray-950 hover:text-accent-primary transition-colors"
                >
                  +51 961 986 084
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
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ContactFormSection />
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <Footer minimal />
      </div>
    </main>
  )
}
