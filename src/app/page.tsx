import { BentoCard } from '@/components/bento-card'
// BentoSection removed - using DarkBentoSection only
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DRY - Software Studio',
  description:
    'Don\'t Repeat Yourself. Software que elimina lo repetitivo y escala tu negocio. Lima, Perú.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-950/5 border border-gray-950/10 opacity-0"
            style={{ animation: 'fadeInDown 0.6s ease-out 0.1s forwards' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-base font-medium text-gray-700">Software Studio</span>
          </div>

          <h1
            className="font-display text-6xl/[0.9] font-semibold tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8] opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
          >
            Construimos una vez, funciona siempre
          </h1>
          <p
            className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
          >
            La tecnología hace el trabajo repetitivo. Tú te enfocas en crecer.
          </p>
          <div
            className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}
          >
            <Button href="/form">Comenzar proyecto</Button>
            <Button variant="secondary" href="/pricing">
              Ver precios
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-12 flex items-center gap-8 text-base text-gray-700 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards' }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-950" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sin costos ocultos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-950" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Entrega en 2-4 semanas</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-16">
        <div
          className="opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards' }}
        >
          <Subheading>Caso real</Subheading>
        </div>
        <Heading
          as="h2"
          className="mt-2 max-w-3xl opacity-0"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.2s forwards' }}
        >
          Tecnología integrada a tu negocio
        </Heading>
        <p
          className="mt-4 max-w-2xl text-lg text-gray-600 opacity-0"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.3s forwards' }}
        >
          Mira cómo ayudamos a un cliente real.
        </p>
        <div
          className="opacity-0"
          style={{ animation: 'scaleIn 0.8s ease-out 0.5s forwards' }}
        >
          <Screenshot
            width={1216}
            height={768}
            src="/videos/videohero.mp4"
            className="mt-16 w-full max-w-304"
          />
        </div>
      </Container>
    </div>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <div
          className="opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards' }}
        >
          <Subheading dark>Servicios</Subheading>
        </div>
        <Heading
          as="h3"
          dark
          className="mt-2 max-w-3xl opacity-0"
          style={{ animation: 'fadeInUp 0.7s ease-out 0.2s forwards' }}
        >
          Robots para lo aburrido
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          <BentoCard
            dark
            eyebrow="Web"
            title="Sistemas que crecen contigo"
            description="Sin empezar de cero cuando tu negocio crezca."
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
            delay={0}
          />
          <BentoCard
            dark
            eyebrow="Automatización"
            title="Cero tareas repetitivas"
            description="Conectamos tus herramientas. Lo manual desaparece."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
            delay={0.1}
          />
          <BentoCard
            dark
            eyebrow="Soporte"
            title="Problemas resueltos de raíz"
            description="Soluciones definitivas. Sin parches."
            className="lg:col-span-2 lg:rounded-bl-4xl"
            delay={0.2}
          />
          <BentoCard
            dark
            eyebrow="Capacitación"
            title="Tu equipo autónomo"
            description="Capacitamos a tu equipo. No dependen de nosotros."
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
            delay={0.3}
          />
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-center opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.8s forwards' }}
        >
          <p className="text-lg text-gray-400 mb-6">¿Tienes un proyecto en mente?</p>
          <Button href="/form" className="bg-white text-gray-900 hover:bg-gray-100">
            Conversemos
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="py-32 bg-linear-to-b from-white from-50% to-gray-100">
          <FeatureSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
