import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Conversemos sobre tu proyecto de software. Completa el formulario y te responderemos en menos de 24 horas. Servicios de desarrollo de software en Lima, Perú.',
}

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
