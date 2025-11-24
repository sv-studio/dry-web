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
          <Heading as="h1">Thank you for reaching out!</Heading>
          <Lead className="mt-6">
            We&apos;ve received your message and will get back to you shortly.
            We typically respond within 24 hours.
          </Lead>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/">Back to home</Button>
            <Button variant="secondary" href="/pricing">
              View pricing
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
