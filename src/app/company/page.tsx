import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce a DRY: +7 años automatizando procesos y desarrollando software. Adriana Suárez (Contenido) y Jorge Vicuña (Tech) lideran el equipo.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Automatiza lo repetitivo. Escala lo importante.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Somos un estudio de software que ayuda a empresas a eliminar tareas manuales
        y construir sistemas que crecen con su negocio.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Nuestra misión</h2>
          <p className="mt-6 text-base/6 text-gray-600">
            En DRY creemos que tu equipo no debería perder tiempo en tareas que una
            máquina puede hacer mejor. Nuestra misión es liberar a las personas para
            que se enfoquen en lo que realmente importa: crear, decidir y hacer crecer
            su negocio.
          </p>
          <p className="mt-8 text-base/6 text-gray-600">
            Trabajamos con empresas de todos los tamaños en Latinoamérica, desde startups
            hasta corporaciones. Nuestro enfoque es simple: entendemos tu problema,
            diseñamos una solución que escale, y la construimos con tecnología moderna.
            Sin parches, sin deuda técnica innecesaria.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Equipo DRY trabajando"
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Desarrollo de software"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Colaboración en proyectos"
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Resultados para clientes"
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>En números</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-base/6 text-gray-600">Años de experiencia</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                +<AnimatedNumber start={0} end={7} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-base/6 text-gray-600">Proyectos entregados</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                +<AnimatedNumber start={20} end={50} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-base/6 text-gray-600">Horas ahorradas/mes</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                +<AnimatedNumber start={500} end={1000} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-base/6 text-gray-600">Clientes satisfechos</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={20} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
  bio,
}: {
  name: string
  description: string
  img: string
  bio?: string
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <img alt={`Foto de ${name}`} src={img} className="size-16 rounded-full object-cover" />
        <div className="text-base/6">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      {bio && (
        <p className="mt-4 text-base/6 text-gray-600">{bio}</p>
      )}
    </div>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>El equipo</Subheading>
      <Heading as="h3" className="mt-2">
        Dos áreas, un objetivo.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        DRY combina expertise técnico con estrategia de contenido para entregar
        soluciones completas que realmente funcionan.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-base/6 text-gray-600">
            Fundamos DRY con una idea simple: las empresas pierden demasiado tiempo
            en tareas que deberían ser automáticas. Desde entonces, hemos ayudado a
            decenas de organizaciones a recuperar ese tiempo.
          </p>
          <p className="mt-8 text-base/6 text-gray-600">
            Nuestro modelo es diferente: precio fijo por proyecto, sin sorpresas.
            Capacitamos a tu equipo para que no dependan de nosotros. Y construimos
            sistemas que escalan, no parches que se rompen.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="/form">
              Conversemos
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="Equipo DRY en acción"
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        Quiénes somos
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <div className="mx-auto mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Person
          name="Adriana Suárez"
          description="Contenido y Estrategia"
          img="/team/adriana-suarez.jpg"
          bio="Lidera la producción de contenido educativo y la estrategia de comunicación. +5 años en diseño instruccional y producción audiovisual para empresas como Crehana e instituciones educativas."
        />
        <Person
          name="Jorge Vicuña"
          description="Tecnología y Desarrollo"
          img="/team/jorge-vicuna.jpg"
          bio="Arquitectura de software, automatizaciones y desarrollo web. +7 años construyendo sistemas para startups y corporaciones. Ex Interbank, Crehana, PUCP."
        />
      </div>
    </Container>
  )
}

function Clients() {
  return (
    <Container className="mt-32">
      <Subheading>Clientes</Subheading>
      <Heading as="h3" className="mt-2">
        Empresas que confían en nosotros.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Hemos trabajado con startups, ONGs, universidades y corporaciones
        en Perú y Latinoamérica.
      </Lead>
      <div className="mt-12">
        <LogoCloud />
      </div>
    </Container>
  )
}

function Values() {
  return (
    <Container className="my-32">
      <Subheading>Cómo trabajamos</Subheading>
      <Heading as="h3" className="mt-2">
        Principios que guían cada proyecto.
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
          <h4 className="text-lg font-semibold text-gray-950">Precio fijo</h4>
          <p className="mt-4 text-base/6 text-gray-600">
            Cotizamos por proyecto, no por hora. Sabes exactamente cuánto pagarás
            antes de empezar. Sin sorpresas ni costos ocultos.
          </p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
          <h4 className="text-lg font-semibold text-gray-950">Autonomía para tu equipo</h4>
          <p className="mt-4 text-base/6 text-gray-600">
            Capacitamos a tu equipo para que puedan operar sin depender de nosotros.
            Te entregamos las llaves, no te dejamos atado.
          </p>
        </div>
        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
          <h4 className="text-lg font-semibold text-gray-950">Soluciones que escalan</h4>
          <p className="mt-4 text-base/6 text-gray-600">
            Construimos pensando en el futuro. Cuando tu negocio crezca 10×, tu
            sistema debería poder manejarlo sin empezar de cero.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Clients />
      <Values />
      <Footer />
    </main>
  )
}
