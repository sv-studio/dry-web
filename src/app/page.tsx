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
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-accent-primary/20 ring-inset" />

      {/* Floating blob accents - GPU accelerated, respects reduced-motion */}
      <div
        className="absolute top-20 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none will-change-transform"
        style={{ animation: 'blob 12s ease-in-out infinite' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-32 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none will-change-transform"
        style={{ animation: 'blob 15s ease-in-out infinite reverse' }}
        aria-hidden="true"
      />

      <Container className="relative">
        <Navbar dark />
        <div className="pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-40">
          {/* Eyebrow badge with glow effect */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0"
            style={{
              animation: 'fadeInDown 0.6s ease-out 0.1s forwards, pulse-glow 3s ease-in-out infinite',
              animationDelay: '0.1s, 1s'
            }}
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-400"></span>
            </span>
            <span className="text-sm sm:text-base font-medium text-white">Aceptando proyectos</span>
          </div>

          <h1
            className="font-display text-4xl/[0.95] font-semibold tracking-tight text-balance text-white sm:text-6xl/[0.9] lg:text-8xl/[0.85] opacity-0 drop-shadow-2xl"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
          >
            Automatiza lo repetitivo. Escala lo importante.
          </h1>
          <p
            className="mt-6 max-w-lg text-lg/7 font-medium text-white/90 sm:text-xl/7 lg:text-2xl/8 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
          >
            Construimos sistemas que eliminan tareas manuales y liberan a tu equipo.
          </p>

          {/* CTA buttons */}
          <div
            className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}
          >
            <Button href="/form" variant="primary-dark" className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
              Solicitar consulta gratuita
            </Button>
            <Button href="/pricing" variant="secondary-dark" className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
              Ver tarifas
            </Button>
          </div>

          {/* Trust indicators with glassmorphism */}
          <div
            className="mt-8 sm:mt-10 inline-flex flex-wrap items-center gap-3 sm:gap-5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s forwards' }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-white/90">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Precio fijo</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-white/90">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Capacitación</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-white/90">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>+7 años exp.</span>
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
      <Container>
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
          className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-gray-600 opacity-0"
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
            className="mt-8 sm:mt-12 lg:mt-16 w-full"
          />
        </div>
      </Container>
    </div>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 rounded-4xl bg-gray-900 py-16 sm:py-20 lg:py-28">
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
          Robots para lo tedioso. Humanos para lo importante.
        </Heading>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-6">
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
          className="mt-10 sm:mt-14 text-center opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.8s forwards' }}
        >
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-4 sm:mb-6">¿Tienes un proyecto en mente?</p>
          <Button href="/form" variant="primary-dark">
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
        <Container className="mt-6 sm:mt-8">
          <LogoCloud />
        </Container>
        <div className="py-16 sm:py-20 lg:py-28 bg-linear-to-b from-white from-50% to-gray-50">
          <FeatureSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
