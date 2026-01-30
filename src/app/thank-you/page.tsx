import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gracias por contactarnos',
  description: 'Hemos recibido tu mensaje. Nuestro equipo revisará tu solicitud y te responderá en menos de 24 horas. DRY - Servicios de desarrollo de software en Perú.',
}

function NextSteps() {
  const steps = [
    {
      number: '1',
      title: 'Revisamos tu mensaje',
      description: 'Nuestro equipo revisa tu solicitud para entender tus necesidades.',
    },
    {
      number: '2',
      title: 'Te contactamos',
      description: 'En menos de 24 horas te escribimos para agendar una llamada.',
    },
    {
      number: '3',
      title: 'Conversamos',
      description: 'Una llamada de 30 min para entender tu proyecto y proponer soluciones.',
    },
  ]

  return (
    <div className="mt-16 rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
      <h2 className="text-lg font-semibold text-gray-950">Próximos pasos</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-primary text-sm font-semibold text-white">
              {step.number}
            </div>
            <div>
              <h3 className="font-medium text-gray-950">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Resources() {
  const resources = [
    {
      title: 'Ver nuestros servicios',
      description: 'Conoce qué podemos hacer por tu negocio.',
      href: '/pricing',
    },
    {
      title: 'Conoce al equipo',
      description: 'Quiénes somos y cómo trabajamos.',
      href: '/company',
    },
  ]

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold text-gray-950">Mientras tanto</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.href}
            href={resource.href}
            className="group rounded-xl bg-white p-6 ring-1 ring-gray-200 transition-all hover:ring-accent-primary hover:shadow-md"
          >
            <h3 className="font-medium text-gray-950 group-hover:text-accent-primary transition-colors">
              {resource.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function ThankYou() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <div className="mx-auto max-w-2xl">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
              <svg className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Heading as="h1">Mensaje recibido</Heading>
            <Lead className="mt-4">
              Gracias por contactarnos. <strong>Te responderemos en menos de 24 horas</strong> para
              agendar una llamada y conocer más sobre tu proyecto.
            </Lead>
          </div>

          <NextSteps />
          <Resources />

          <div className="mt-12 flex justify-center">
            <Button variant="secondary" href="/">
              Volver al inicio
            </Button>
          </div>
        </div>
      </Container>
      <div className="mt-24">
        <Footer minimal showCTA={false} />
      </div>
    </main>
  )
}
