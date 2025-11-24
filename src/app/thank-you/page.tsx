import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gracias',
  description: 'Gracias por contactar a DRY. Nos pondremos en contacto contigo pronto.',
}

export default function ThankYou() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h1">¡Gracias por contactarnos!</Heading>
          <Lead className="mt-6">
            Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
            Normalmente respondemos en 24 horas.
          </Lead>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/">Volver al inicio</Button>
            <Button variant="secondary" href="/pricing">
              Ver precios
            </Button>
          </div>
        </div>
      </Container>
      <div className="mt-24">
        <Footer showCTA={false} />
      </div>
    </main>
  )
}
