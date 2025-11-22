import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'SV transforma tus ideas en soluciones de software listas para producción. Servicios expertos de desarrollo de software en Lima, Perú.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            La forma más rápida de pasar de idea a producto
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Lanza tu MVP en semanas, no meses. IA que acelera desarrollo, stack moderno que escala, y soporte continuo para crecer.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/form">Comenzar</Button>
            <Button variant="secondary" href="/pricing">
              Ver precios
            </Button>
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
        <Heading as="h2" className="max-w-3xl">
          Soluciones completas para tu negocio digital
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/videos/videohero.mp4"
          className="mt-16 w-full max-w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Desarrollo</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Tecnología moderna para impulsar tu negocio.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Soluciones"
          title="Desarrollo web completo"
          description="Creamos sitios web modernos y responsivos con Next.js, Tailwind CSS y las mejores prácticas de la industria."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Integración"
          title="APIs y bases de datos"
          description="Conectamos tu aplicación con Airtable, PostgreSQL y servicios externos mediante APIs robustas y seguras."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Velocidad"
          title="Entrega rápida"
          description="Proyectos completos en 2-3 semanas con entregas iterativas para que veas el progreso constantemente."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Stack"
          title="Tecnologías modernas"
          description="Trabajamos con React, Next.js, TypeScript, Tailwind CSS y las herramientas más actuales del mercado."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Alcance"
          title="Presencia global"
          description="Desde Lima, Perú, servimos a clientes en toda Latinoamérica y el mundo con soluciones personalizadas."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Capacitación</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Automatizamos y digitalizamos los procesos más críticos de tu empresa
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          <BentoCard
            dark
            eyebrow="Desarrollo Web"
            title="Aplicaciones web modernas"
            description="Desde landing pages hasta sistemas complejos con integración a bases de datos. Construimos con Next.js, Astro, React y Tailwind CSS."
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integraciones"
            title="Conecta tus herramientas"
            description="Integramos inteligencia artificial para automatizar tus flujos de trabajo. También conectamos tu producto con Slack, Discord, Airtable y APIs externas para mantener todo sincronizado."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Soporte"
            title="Acompañamiento cercano"
            description="Trabajamos de la mano, uno a uno. Mejoramos tu proyecto continuamente, corregimos errores, optimizamos rendimiento y gestionamos tus pagos de forma segura."
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Capacitaciones"
            title="Potencia a tu equipo con IA"
            description="Capacitamos a tu equipo en Claude Code para diseñar y desarrollar productos web y app 10 veces más rápido, además de optimizar las operaciones de tu empresa con IA."
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
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
