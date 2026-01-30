import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios',
  description:
    'Capacitación en IA, desarrollo web, producción de contenido educativo y soluciones personalizadas. Elige el servicio que se ajuste a tus necesidades.',
}

const tiers = [
  {
    name: 'Capacitación en IA' as const,
    slug: 'claude-training',
    description: 'Haz que tu equipo diseñe y desarrolle 10× más rápido con IA',
    priceMonthly: 500,
    href: '/form',
    cta: 'Agendar workshop',
    popular: true,
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
    cta: 'Cotizar proyecto',
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
    name: 'Contenido Educativo' as const,
    slug: 'educational-content',
    description: 'Producción de contenido educativo con IA. Imágenes, video, locución y postproducción profesional.',
    priceMonthly: null,
    href: '/form',
    cta: 'Solicitar cotización',
    highlights: [
      { description: 'Generación de imágenes con IA' },
      { description: 'Video con herramientas IA' },
      { description: 'Locución profesional asistida por IA' },
      { description: 'Desarrollo de guión pedagógico' },
      { description: 'Postproducción profesional' },
      { description: 'Precio según volumen de contenido' },
    ],
    features: [
      { section: 'Producción', name: 'Desarrollo de guión', value: true },
      { section: 'Producción', name: 'Generación de imágenes IA', value: true },
      { section: 'Producción', name: 'Producción de video IA', value: true },
      { section: 'Producción', name: 'Locución con IA', value: true },
      { section: 'Producción', name: 'Postproducción profesional', value: true },
      { section: 'Entregables', name: 'Videos educativos', value: true },
      { section: 'Entregables', name: 'Material gráfico', value: true },
      { section: 'Entregables', name: 'Recursos descargables', value: true },
      { section: 'Soporte', name: 'Revisiones incluidas', value: '2 rondas' },
      { section: 'Soporte', name: 'Formatos de entrega', value: 'MP4, PDF, PNG' },
      { section: 'Soporte', name: 'Timeline', value: 'Según proyecto' },
    ],
  },
  {
    name: 'Servicios Personalizados' as const,
    slug: 'tailored',
    description: 'Soluciones enterprise que escalan. Capacitación, desarrollo y soporte dedicado.',
    priceMonthly: null,
    href: '/form',
    cta: 'Hablar con ventas',
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
    <Container className="mt-8 sm:mt-12 lg:mt-16">
      <Heading as="h1">Invierte en velocidad</Heading>
      <Lead className="mt-4 sm:mt-6 max-w-3xl">
        Capacitación en IA, desarrollo web, contenido educativo y soluciones a medida. Pricing transparente, sin sorpresas.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20">
      <Gradient className="absolute inset-x-2 top-32 sm:top-40 lg:top-48 bottom-0 rounded-4xl ring-1 ring-accent-primary/20 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] & { popular?: boolean } }) {
  return (
    <div className={`-m-1.5 sm:-m-2 grid grid-cols-1 rounded-3xl sm:rounded-4xl shadow-[inset_0_0_2px_1px_#c084fc4d] ring-1 max-lg:mx-auto max-lg:w-full max-lg:max-w-md ${tier.popular ? 'ring-accent-primary ring-2' : 'ring-accent-primary/20'}`}>
      <div className="grid grid-cols-1 rounded-3xl sm:rounded-4xl p-1.5 sm:p-2 shadow-md shadow-black/5">
        <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 lg:p-10 pb-5 sm:pb-7 lg:pb-9 shadow-2xl ring-1 ring-gray-200 relative">
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-primary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                Más popular
              </span>
            </div>
          )}
          <Subheading>{tier.name}</Subheading>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base/6 text-gray-600">{tier.description}</p>
          <div className="mt-5 sm:mt-6 lg:mt-8 flex items-center gap-3 sm:gap-4">
            {tier.priceMonthly ? (
              <>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-950">
                  ${tier.priceMonthly.toLocaleString()}
                </div>
                <div className="text-sm sm:text-base/5 text-gray-600">
                  <p>USD</p>
                  {tier.slug === 'web-package' ? <p>desde</p> : <p>por equipo</p>}
                </div>
              </>
            ) : (
              <div className="text-2xl sm:text-3xl font-medium text-gray-950">
                Contáctanos
              </div>
            )}
          </div>
          <div className="mt-5 sm:mt-6 lg:mt-8">
            <Button href={tier.href}>{tier.cta}</Button>
          </div>
          <div className="mt-5 sm:mt-6 lg:mt-8">
            <h3 className="text-sm sm:text-base/6 font-medium text-gray-950">
              Qué incluye:
            </h3>
            <ul className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
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
      className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base/6 text-gray-600 data-disabled:text-gray-400"
    >
      <span className="inline-flex h-5 sm:h-6 items-center">
        <PlusIcon className="size-3 sm:size-3.5 shrink-0 fill-accent-primary" />
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
    <div className="mx-2 my-12 sm:my-16 lg:my-20 rounded-3xl sm:rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-56 sm:pt-64 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_1fr] xl:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-72 sm:-mt-80 lg:-mt-52">
            <div className="-m-1.5 sm:-m-2 rounded-3xl sm:rounded-4xl bg-accent-primary/15 shadow-[inset_0_0_2px_1px_#c084fc4d] ring-1 ring-accent-primary/20 max-lg:mx-auto max-lg:max-w-[240px] sm:max-lg:max-w-xs">
              <div className="rounded-3xl sm:rounded-4xl p-1.5 sm:p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt="Carelli Taboada"
                    src="/testimonials/carely.png"
                    loading="lazy"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-8 sm:max-lg:mt-12 lg:col-span-2 lg:px-8 xl:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-8 sm:gap-12 lg:gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-white">
                  &quot;DRY entregó nuestra Airtable a tiempo y dentro del presupuesto. Su modelo de precio fijo nos dio la certeza que necesitábamos.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm sm:text-base/6 font-medium text-white">Carelli Taboada</p>
                <p className="text-sm sm:text-base/6 font-medium">
                  <span className="bg-linear-to-r from-[#c084fc] from-28% via-[#a78bfa] via-70% to-[#818cf8] bg-clip-text text-transparent">
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

        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 mb-16 sm:mb-20 lg:mb-24 max-w-5xl">
          {/* Capacitación en IA */}
          <div className="pb-8 sm:pb-12 lg:pb-16 border-b border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-4 sm:mb-6 lg:mb-8">Capacitación en IA</h3>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Qué herramientas aprenderemos en la capacitación?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Claude Code es la herramienta principal. Aprenderán a diseñar interfaces, escribir código,
                  integrar APIs y automatizar flujos de trabajo. Todo desde una interfaz conversacional que
                  acelera el desarrollo 10× comparado con métodos tradicionales.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Mi equipo necesita experiencia previa en IA?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  No. La capacitación está diseñada para equipos sin experiencia en IA. Si tu equipo sabe
                  usar computadoras y entiende su negocio, pueden aprender. Cubrimos desde lo básico hasta
                  casos de uso aplicados a su industria específica.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Cuánto tiempo toma ver resultados después del workshop?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Resultados inmediatos. Durante el workshop crearán proyectos reales. Después, esperamos
                  que tu equipo empiece a usar estas herramientas el mismo día. La mayoría de equipos reportan
                  mejoras en productividad en la primera semana.
                </dd>
              </dl>
            </div>
          </div>

          {/* Desarrollo Web */}
          <div className="py-8 sm:py-12 lg:py-16 border-b border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-4 sm:mb-6 lg:mb-8">Desarrollo Web</h3>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Puedo hacer cambios al contenido yo mismo después?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Sí. Incluimos un sistema de gestión de contenido (CMS) donde puedes editar textos,
                  imágenes y páginas sin tocar código. Te damos una sesión de capacitación para que tu
                  equipo pueda hacer actualizaciones de forma autónoma.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿El sitio funciona en móviles y tablets?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Sí, diseño mobile-first. Esto significa que diseñamos primero para móviles y luego
                  adaptamos a pantallas más grandes. Tu sitio se verá bien en cualquier dispositivo:
                  celulares, tablets, laptops y monitores de escritorio.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Qué pasa si necesito más páginas después del lanzamiento?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Podemos agregar páginas nuevas en cualquier momento. Si tienes un plan de mantenimiento,
                  páginas simples están incluidas. Para páginas con funcionalidad compleja, cotizamos por
                  separado. El costo depende de la complejidad y features necesarias.
                </dd>
              </dl>
            </div>
          </div>

          {/* Contenido Educativo */}
          <div className="py-8 sm:py-12 lg:py-16 border-b border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-4 sm:mb-6 lg:mb-8">Contenido Educativo</h3>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Qué herramientas de IA usan para la producción?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Usamos las mejores herramientas disponibles para cada tarea: generación de imágenes,
                  síntesis de voz, edición de video y más. La IA acelera la producción, pero siempre
                  hay revisión y postproducción humana para garantizar calidad profesional.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Cómo se calcula el precio del contenido educativo?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  El precio depende del volumen y complejidad: cantidad de videos, duración, si incluye
                  locución, animaciones o interactividad. Después de una llamada inicial, enviamos una
                  cotización detallada con precio cerrado por proyecto.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Puedo usar el contenido en cualquier plataforma?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Sí. Entregamos los archivos finales en formatos estándar (MP4, PNG, PDF) que puedes
                  subir a tu LMS, YouTube, redes sociales o cualquier plataforma. Los derechos del
                  contenido producido son 100% tuyos.
                </dd>
              </dl>
            </div>
          </div>

          {/* Servicios Personalizados */}
          <div className="pt-8 sm:pt-12 lg:pt-16">
            <h3 className="text-base sm:text-lg font-semibold text-gray-950 mb-4 sm:mb-6 lg:mb-8">Servicios Personalizados</h3>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Cómo funciona el pricing en servicios personalizados?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Precio fijo por proyecto o retainer mensual, según prefieras. Primero hacemos una sesión
                  para entender alcance y complejidad. Luego enviamos una propuesta con precio cerrado y
                  entregables claros. Sin costos ocultos ni sorpresas.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Pueden integrarse con nuestros sistemas existentes?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
                  Sí. Nos conectamos con CRMs, ERPs, bases de datos, APIs de terceros y cualquier sistema
                  que tenga documentación técnica. Si tu sistema tiene una API o permite integraciones,
                  podemos conectarnos. Si no, evaluamos alternativas.
                </dd>
              </dl>
              <dl>
                <dt className="text-sm sm:text-base font-semibold text-gray-950">
                  ¿Ofrecen soporte dedicado a largo plazo?
                </dt>
                <dd className="mt-2 sm:mt-3 text-sm sm:text-base/6 text-gray-600">
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

export default function Pricing() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Testimonial />
      <Container className="py-8 sm:py-10 lg:py-12">
        <LogoCloud />
      </Container>
      <FrequentlyAskedQuestions />
      <Footer minimal />
    </main>
  )
}
