import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { VisitorTracker } from '@/components/visitor-tracker'
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
    description: 'Haz que tu equipo diseñe y desarrolle 10× más rápido con IA',
    priceMonthly: 500,
    href: '/form',
    highlights: [
      { description: 'Workshop 1-2 días (3h/día)' },
      { description: 'Hasta 15 personas por sesión' },
      { description: 'Práctica con proyectos reales' },
      { description: (<>Setup e instalación de{' '}<a href="https://www.claude.com/product/claude-code" target="_blank" rel="noopener noreferrer" className="inline underline hover:text-gray-950">Claude Code</a></>) },
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
    description: 'De idea a producto en semanas. Diseño, desarrollo, deployment y soporte incluidos.',
    priceMonthly: 250,
    href: '/form',
    highlights: [
      { description: 'Diseño responsive mobile-first' },
      { description: 'Formularios de contacto + SEO' },
      { description: 'CMS para editar contenido fácilmente' },
      { description: (<>Hosting{' '}<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="inline underline hover:text-gray-950">Vercel</a>{' '}y dominio ($8-20/mes)</>) },
      { description: (<>Integración{' '}<a href="https://airtable.com" target="_blank" rel="noopener noreferrer" className="inline underline hover:text-gray-950">Airtable</a></>) },
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
    description: 'Soluciones enterprise que escalan. Capacitación, desarrollo y soporte dedicado.',
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
      <Heading as="h1">Invierte en velocidad</Heading>
      <Lead className="mt-6 max-w-3xl">
        Capacitación en IA, desarrollo web y soluciones a medida. Pricing transparente, sin sorpresas.
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
  description: React.ReactNode
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

        <div className="mx-auto mt-16 mb-32 max-w-5xl">
          {/* Capacitación en IA */}
          <div className="pb-16 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-950 mb-8">Capacitación en IA</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Qué herramientas aprenderemos en la capacitación?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Claude Code es la herramienta principal. Aprenderán a diseñar interfaces, escribir código,
                  integrar APIs y automatizar flujos de trabajo. Todo desde una interfaz conversacional que
                  acelera el desarrollo 10× comparado con métodos tradicionales.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Mi equipo necesita experiencia previa en IA?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  No. La capacitación está diseñada para equipos sin experiencia en IA. Si tu equipo sabe
                  usar computadoras y entiende su negocio, pueden aprender. Cubrimos desde lo básico hasta
                  casos de uso aplicados a su industria específica.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Cuánto tiempo toma ver resultados después del workshop?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Resultados inmediatos. Durante el workshop crearán proyectos reales. Después, esperamos
                  que tu equipo empiece a usar estas herramientas el mismo día. La mayoría de equipos reportan
                  mejoras en productividad en la primera semana.
                </dd>
              </dl>
            </div>
          </div>

          {/* Desarrollo Web */}
          <div className="py-16 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-950 mb-8">Desarrollo Web</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Puedo hacer cambios al contenido yo mismo después?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Sí. Incluimos un sistema de gestión de contenido (CMS) donde puedes editar textos,
                  imágenes y páginas sin tocar código. Te damos una sesión de capacitación para que tu
                  equipo pueda hacer actualizaciones de forma autónoma.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-semibold">
                  ¿El sitio funciona en móviles y tablets?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Sí, diseño mobile-first. Esto significa que diseñamos primero para móviles y luego
                  adaptamos a pantallas más grandes. Tu sitio se verá bien en cualquier dispositivo:
                  celulares, tablets, laptops y monitores de escritorio.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Qué pasa si necesito más páginas después del lanzamiento?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Podemos agregar páginas nuevas en cualquier momento. Si tienes un plan de mantenimiento,
                  páginas simples están incluidas. Para páginas con funcionalidad compleja, cotizamos por
                  separado. El costo depende de la complejidad y features necesarias.
                </dd>
              </dl>
            </div>
          </div>

          {/* Servicios Personalizados */}
          <div className="pt-16">
            <h3 className="text-lg font-semibold text-gray-950 mb-8">Servicios Personalizados</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Cómo funciona el pricing en servicios personalizados?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Precio fijo por proyecto o retainer mensual, según prefieras. Primero hacemos una sesión
                  para entender alcance y complejidad. Luego enviamos una propuesta con precio cerrado y
                  entregables claros. Sin costos ocultos ni sorpresas.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Pueden integrarse con nuestros sistemas existentes?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Sí. Nos conectamos con CRMs, ERPs, bases de datos, APIs de terceros y cualquier sistema
                  que tenga documentación técnica. Si tu sistema tiene una API o permite integraciones,
                  podemos conectarnos. Si no, evaluamos alternativas.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm font-semibold">
                  ¿Ofrecen soporte dedicado a largo plazo?
                </dt>
                <dd className="mt-4 text-sm/6 text-gray-600">
                  Sí, incluye account manager dedicado, sesiones de estrategia trimestrales y respuesta
                  prioritaria. Es ideal para empresas que necesitan evolucionar su producto constantemente
                  o tienen requisitos de uptime y seguridad elevados.
                </dd>
              </dl>
            </div>
          </div>
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
      <VisitorTracker page="/pricing" />
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
