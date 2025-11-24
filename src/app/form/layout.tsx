import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Conversemos sobre tu proyecto. Te ayudamos a transformar tus ideas en soluciones de software listas para producción.',
}

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
