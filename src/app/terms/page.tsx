import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description: 'Términos y condiciones para usar los servicios de desarrollo de software de DRY.',
}

export default function Terms() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Heading as="h1">Términos de Servicio</Heading>
        <Lead className="mt-6">
          Última actualización: 22 de noviembre de 2024
        </Lead>

        <div className="prose prose-gray mt-10 max-w-3xl">
          <Subheading as="h2" className="mt-12">
            1. Aceptación de Términos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Al acceder y usar el sitio web de DRY (dry.pe) y sus servicios, aceptas y te comprometes a cumplir con los términos y condiciones de este acuerdo. Si no estás de acuerdo con estos términos, por favor no uses nuestros servicios.
          </p>

          <Subheading as="h2" className="mt-12">
            2. Servicios
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            DRY ofrece tres servicios principales:
          </p>
          <ul className="mt-4 space-y-2 text-sm/6 text-gray-600">
            <li><strong>Capacitación en IA</strong> - Workshops de entrenamiento para que equipos diseñen y desarrollen 10× más rápido usando herramientas de IA como Claude Code. Incluye talleres de 1-2 días, práctica hands-on y plan de adopción.</li>
            <li><strong>Desarrollo Web</strong> - Desarrollo web profesional desde diseño hasta deployment. Incluye diseño responsive, integración de CMS, conectividad con Airtable y hosting en Vercel con soporte continuo.</li>
            <li><strong>Servicios Personalizados</strong> - Soluciones enterprise personalizadas que combinan capacitación, desarrollo y soporte dedicado. Adaptadas a requerimientos complejos con gestión de cuenta dedicada.</li>
          </ul>
          <p className="mt-4 text-sm/6 text-gray-600">
            El alcance específico de los servicios se definirá en acuerdos de proyecto individuales.
          </p>

          <Subheading as="h2" className="mt-12">
            3. Uso del Sitio Web
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Aceptas usar este sitio web solo para propósitos legales y de una manera que no infrinja los derechos de otros usuarios ni restrinja o inhiba el uso y disfrute del sitio web por parte de otras personas. El comportamiento prohibido incluye acosar o causar angustia o inconvenientes a otros usuarios, transmitir contenido obsceno u ofensivo, o interrumpir el flujo normal de diálogo dentro de nuestro sitio web.
          </p>

          <Subheading as="h2" className="mt-12">
            4. Propiedad Intelectual
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            A menos que se especifique lo contrario en un acuerdo de proyecto, todos los derechos de propiedad intelectual sobre cualquier software, documentación o materiales desarrollados por DRY permanecen como propiedad de DRY hasta que se reciba el pago completo. Una vez recibido el pago completo, los derechos de propiedad se transferirán al cliente según lo especificado en el acuerdo de proyecto.
          </p>

          <Subheading as="h2" className="mt-12">
            5. Privacidad y Protección de Datos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Estamos comprometidos con proteger tu privacidad. Cualquier información personal recopilada a través de nuestros formularios de contacto o servicios se utilizará únicamente para proporcionar nuestros servicios y no se compartirá con terceros sin tu consentimiento, excepto cuando lo requiera la ley.
          </p>

          <Subheading as="h2" className="mt-12">
            6. Acuerdos de Proyecto y Plazos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Los proyectos individuales se regirán por acuerdos de proyecto separados que detallan los entregables específicos, plazos, términos de pago y otras condiciones específicas del proyecto.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            <strong>Plazos Típicos:</strong>
          </p>
          <ul className="mt-4 space-y-2 text-sm/6 text-gray-600">
            <li><strong>Capacitación en IA:</strong> Entrega del workshop en 1-2 días, con soporte de seguimiento por 1 semana</li>
            <li><strong>Desarrollo Web:</strong> 2-3 semanas desde el inicio hasta el lanzamiento en producción, con actualizaciones de progreso semanales</li>
            <li><strong>Servicios Personalizados:</strong> Timeline definido durante la sesión de scoping según la complejidad del proyecto</li>
          </ul>
          <p className="mt-4 text-sm/6 text-gray-600">
            Todos los acuerdos de proyecto complementan y están sujetos a estos Términos de Servicio generales. Los clientes recibirán URLs de prueba para feedback continuo durante todo el proceso de desarrollo.
          </p>

          <Subheading as="h2" className="mt-12">
            7. Términos de Pago
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            DRY ofrece paquetes de precio fijo con pricing transparente:
          </p>
          <ul className="mt-4 space-y-2 text-sm/6 text-gray-600">
            <li><strong>Capacitación en IA:</strong> $500 USD por equipo (hasta 15 personas)</li>
            <li><strong>Desarrollo Web:</strong> Desde $250 USD, con costos adicionales de hosting ($20/mes) y dominio (~$15/año)</li>
            <li><strong>Servicios Personalizados:</strong> Pricing personalizado según alcance y complejidad</li>
          </ul>
          <p className="mt-4 text-sm/6 text-gray-600">
            Generalmente, los proyectos requieren un depósito inicial (50%) y pago final al momento de la entrega. Los términos de pago se especificarán en los acuerdos de proyecto individuales. Los pagos atrasados pueden resultar en la suspensión del proyecto y pueden incurrir en cargos adicionales del 2% mensual.
          </p>

          <Subheading as="h2" className="mt-12">
            8. Garantías y Exenciones
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Si bien nos esforzamos por entregar soluciones de software de alta calidad, DRY no ofrece garantías expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, entre otras, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual.
          </p>

          <Subheading as="h2" className="mt-12">
            9. Limitación de Responsabilidad
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            En ningún caso DRY será responsable por daños (incluidos, entre otros, daños por pérdida de datos o ganancias, o debido a interrupción de negocios) que surjan del uso o la imposibilidad de usar nuestros servicios, incluso si DRY o un representante autorizado ha sido notificado oralmente o por escrito de la posibilidad de dicho daño.
          </p>

          <Subheading as="h2" className="mt-12">
            10. Modificaciones a los Términos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            DRY se reserva el derecho de modificar estos términos en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio importante publicando los nuevos términos en esta página con una fecha de revisión actualizada. Tu uso continuado de nuestros servicios después de dichos cambios constituye tu aceptación de los nuevos términos.
          </p>

          <Subheading as="h2" className="mt-12">
            11. Ley Aplicable
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Estos términos se regirán e interpretarán de acuerdo con las leyes de Perú, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja de estos términos o nuestros servicios estará sujeta a la jurisdicción exclusiva de los tribunales de Lima, Perú.
          </p>

          <Subheading as="h2" className="mt-12">
            12. Información de Contacto
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Si tienes alguna pregunta sobre estos Términos de Servicio, contáctanos a través de nuestro formulario de contacto o en:
          </p>
          <p className="mt-2 text-sm/6 text-gray-600">
            <strong>Nombre comercial:</strong> DRY<br />
            <strong>Razón social:</strong> SV Tecnología y Contenido<br />
            Lima, Perú<br />
            Email: vicuna@hey.com<br />
            Teléfono: +51 943 891 428
          </p>
          <p className="mt-4 text-sm/6 text-gray-600 text-xs">
            * Para efectos de facturación y trámites ante la SUNAT, la empresa está registrada como &quot;SV Tecnología y Contenido&quot;. El nombre comercial &quot;DRY&quot; se utiliza para fines de marketing y comunicación.
          </p>
        </div>
      </Container>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
