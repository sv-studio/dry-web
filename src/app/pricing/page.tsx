import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios',
  description:
    'Capacitación en desarrollo con IA, desarrollo web y soluciones personalizadas. Elige el servicio que se ajuste a tus necesidades.',
}

const tiers = [
  {
    name: 'Capacitación en IA' as const,
    slug: 'claude-training',
    description: 'Que tu equipo entregue diseño o software 10x más rápido a tus clientes',
    priceMonthly: 500,
    href: '/form',
    highlights: [
      { description: 'Workshop 1-2 días (3h/día)' },
      { description: 'Hasta 15 personas por sesión' },
      { description: 'Práctica con proyectos reales' },
      { description: 'Setup e instalación incluidos' },
      { description: 'Mejores prácticas y workflows' },
      { description: 'Plan de adopción personalizado' },
    ],
    features: [
      { section: 'Capacitación', name: 'Duración del workshop', value: '1-2 días' },
      { section: 'Capacitación', name: 'Tamaño del equipo', value: '5-10 personas' },
      { section: 'Capacitación', name: 'Formato', value: 'Remoto/Presencial' },
      { section: 'Capacitación', name: 'Ejercicios prácticos', value: true },
      { section: 'Capacitación', name: 'Casos de uso personalizados', value: true },
      { section: 'Configuración', name: 'Instalación Claude Code', value: true },
      { section: 'Configuración', name: 'Integración de herramientas (Git, CI/CD)', value: true },
      { section: 'Configuración', name: 'Configuraciones personalizadas', value: true },
      { section: 'Configuración', name: 'Guía de mejores prácticas', value: true },
      { section: 'Soporte', name: 'Plan de adopción', value: true },
      { section: 'Soporte', name: 'Materiales de capacitación', value: true },
      { section: 'Soporte', name: 'Q&A post-workshop', value: '1 semana' },
    ],
  },
  {
    name: 'Desarrollo Web' as const,
    slug: 'web-package',
    description: 'Sitio web profesional con diseño responsive, integraciones y hosting incluido',
    priceMonthly: 250,
    href: '/form',
    highlights: [
      { description: 'Diseño responsive mobile-first' },
      { description: 'Formularios de contacto + SEO' },
      { description: 'CMS para editar contenido fácilmente' },
      { description: 'Hosting Vercel y dominio ($8-20/mes)' },
      { description: 'Integración Airtable' },
      { description: 'API personalizada y webhooks' },
    ],
    features: [
      { section: 'Diseño', name: 'Diseño responsive', value: true },
      { section: 'Diseño', name: 'UI/UX personalizado', value: true },
      { section: 'Diseño', name: 'Optimización SEO', value: true },
      { section: 'Diseño', name: 'Formulario de contacto', value: true },
      { section: 'Diseño', name: 'Integración de analytics', value: true },
      { section: 'Desarrollo', name: 'CMS (edición de contenido)', value: true },
      { section: 'Desarrollo', name: 'Optimizado en rendimiento', value: true },
      { section: 'Desarrollo', name: 'Integración Airtable', value: true },
      { section: 'Desarrollo', name: 'Pasarela de pagos', value: true },
      { section: 'Desarrollo', name: 'API personalizada + Webhooks', value: true },
      { section: 'Soporte', name: 'Timeline', value: '2-3 semanas' },
      { section: 'Soporte', name: 'Hosting + Dominio (1 año)', value: true },
    ],
  },
  {
    name: 'Servicios Personalizados' as const,
    slug: 'tailored',
    description: 'Soluciones a medida combinando capacitación y desarrollo',
    priceMonthly: null,
    href: '/form',
    highlights: [
      { description: 'Implementaciones a gran escala' },
      { description: 'Programas de capacitación multi-equipo' },
      { description: 'Account manager dedicado' },
      { description: 'Sesiones de estrategia trimestrales' },
      { description: 'Acuerdos SLA personalizados' },
      { description: 'Soporte prioritario' },
    ],
    features: [
      { section: 'Servicios', name: 'Combo capacitación + desarrollo', value: true },
      { section: 'Servicios', name: 'Implementaciones a gran escala', value: true },
      { section: 'Servicios', name: 'Programas multi-equipo', value: true },
      { section: 'Servicios', name: 'Integraciones personalizadas', value: true },
      { section: 'Servicios', name: 'Arquitectura escalable', value: true },
      { section: 'Gestión', name: 'Account manager dedicado', value: true },
      { section: 'Gestión', name: 'Sesiones de estrategia trimestrales', value: true },
      { section: 'Gestión', name: 'Acuerdos SLA personalizados', value: true },
      { section: 'Gestión', name: 'Soporte prioritario', value: true },
      { section: 'Soporte', name: 'Mantenimiento continuo', value: 'Personalizado' },
      { section: 'Soporte', name: 'Sesiones de capacitación', value: 'Ilimitadas' },
      { section: 'Soporte', name: 'Tiempo de respuesta', value: '< 4 horas' },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Servicios para la era de la IA</Heading>
      <Lead className="mt-6 max-w-3xl">
        Desde capacitación en IA hasta desarrollo web completo, ayudamos a equipos a construir mejor software más rápido.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            {tier.priceMonthly ? (
              <>
                <div className="text-5xl font-medium text-gray-950">
                  ${tier.priceMonthly.toLocaleString()}
                </div>
                <div className="text-sm/5 text-gray-950/75">
                  <p>USD</p>
                  {tier.slug === 'web-package' ? <p>desde</p> : <p>por equipo</p>}
                </div>
              </>
            ) : (
              <div className="text-3xl font-medium text-gray-950">
                Contáctanos
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Comenzar</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Qué incluye:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Comenzar
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Comenzar
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/carely.png"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white lg:text-4xl">
                  &quot;DRY entregó nuestra Airtable a tiempo y dentro del presupuesto. Su modelo de precio fijo nos dio la certeza que necesitábamos.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Carelli Taboada</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    Coordinadora de Ayuda en Acción Perú
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Preguntas frecuentes
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Tus dudas resueltas
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              ¿Qué incluye el precio fijo?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Cada paquete incluye todo lo listado: diseño, desarrollo, pruebas,
              despliegue y las rondas de revisión especificadas. Los únicos costos
              adicionales serían por servicios de terceros que elijas (como hosting
              o APIs premium), los cuales discutiremos desde el inicio.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Cómo funciona el timeline del proyecto?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Los tiempos son estimados basados en proyectos típicos de cada paquete.
              Después de nuestra consulta inicial, proporcionaremos un plan detallado
              con hitos. Trabajamos en sprints iterativos y compartimos actualizaciones
              de progreso semanalmente.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Qué pasa si mi proyecto no encaja en estos paquetes?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Estos paquetes cubren la mayoría de proyectos, pero somos flexibles.
              Si tus necesidades son únicas, contáctanos para una cotización personalizada.
              También podemos comenzar con una sesión de consultoría para definir el
              alcance y enfoque correcto.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Qué tipo de soporte ofrecen después del lanzamiento?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Cada paquete incluye soporte post-lanzamiento (30 días a 6 meses según
              el paquete). Esto cubre corrección de errores, ajustes menores y soporte
              técnico. Después de ese período, podemos acordar mantenimiento continuo
              mediante un retainer mensual o por solicitud.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Trabajan con clientes fuera de Perú?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Por supuesto. Trabajamos con clientes globalmente y tenemos experiencia
              en colaboración remota. Adaptamos nuestro horario de comunicación a tu
              zona horaria y usamos herramientas como Slack, Zoom y plataformas de
              gestión de proyectos para mantener todo transparente y organizado.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
