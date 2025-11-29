import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Conoce cómo DRY recopila, usa y protege tu información personal.',
}

export default function Privacy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Heading as="h1">Política de Privacidad</Heading>
        <Lead className="mt-6">
          Última actualización: 22 de noviembre de 2024
        </Lead>

        <div className="prose prose-gray mt-10 max-w-3xl">
          <Subheading as="h2" className="mt-12">
            1. Introducción
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            DRY (&quot;nosotros,&quot; &quot;nuestro,&quot; o &quot;nos&quot;) está comprometido con proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web dry.pe y usas nuestros servicios.
          </p>

          <Subheading as="h2" className="mt-12">
            2. Información que Recopilamos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Recopilamos información que nos proporcionas directamente, incluyendo:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Información de contacto (nombre, correo electrónico, número de teléfono)</li>
            <li>Nombre de empresa e información de negocio</li>
            <li>Comunicaciones que nos envías</li>
            <li>Cualquier otra información que elijas proporcionar</li>
          </ul>

          <Subheading as="h2" className="mt-12">
            3. Cómo Usamos Tu Información
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Usamos la información que recopilamos para:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Responder a tus consultas y proporcionar soporte al cliente</li>
            <li>Procesar y gestionar tus solicitudes de nuestros servicios</li>
            <li>Enviarte actualizaciones sobre nuestros servicios (con tu consentimiento)</li>
            <li>Mejorar nuestro sitio web y servicios</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <Subheading as="h2" className="mt-12">
            4. Almacenamiento de Datos y Servicios de Terceros
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Usamos Airtable, un servicio de terceros, para almacenar y gestionar las solicitudes del formulario de contacto. Cuando envías un formulario de contacto en nuestro sitio web, tu información se transmite de forma segura y se almacena en Airtable. El uso que Airtable hace de tu información se rige por su política de privacidad.
          </p>

          <Subheading as="h2" className="mt-12">
            5. Compartir y Divulgar Información
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            No vendemos, intercambiamos ni alquilamos tu información personal a terceros. Podemos compartir tu información solo en las siguientes circunstancias:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web y proporcionar nuestros servicios (como Airtable)</li>
            <li>Cuando lo requiera la ley o para responder a procesos legales</li>
            <li>Para proteger nuestros derechos, propiedad o seguridad, o los de nuestros usuarios o el público</li>
            <li>Con tu consentimiento o bajo tu dirección</li>
          </ul>

          <Subheading as="h2" className="mt-12">
            6. Seguridad de Datos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, y no podemos garantizar seguridad absoluta.
          </p>

          <Subheading as="h2" className="mt-12">
            7. Retención de Datos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Retenemos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que la ley requiera o permita un período de retención más largo.
          </p>

          <Subheading as="h2" className="mt-12">
            8. Tus Derechos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Tienes derecho a:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Acceder a la información personal que tenemos sobre ti</li>
            <li>Solicitar la corrección de información inexacta o incompleta</li>
            <li>Solicitar la eliminación de tu información personal</li>
            <li>Oponerte o restringir el procesamiento de tu información</li>
            <li>Retirar el consentimiento en cualquier momento (cuando el procesamiento se base en consentimiento)</li>
          </ul>
          <p className="mt-4 text-sm/6 text-gray-600">
            Para ejercer cualquiera de estos derechos, contáctanos usando la información proporcionada al final de esta política.
          </p>

          <Subheading as="h2" className="mt-12">
            9. Cookies y Tecnologías de Seguimiento
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Nuestro sitio web puede usar cookies y tecnologías de seguimiento similares para mejorar tu experiencia de navegación. Puedes controlar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web.
          </p>

          <Subheading as="h2" className="mt-12">
            10. Privacidad de Menores
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos intencionalmente información personal de menores. Si te das cuenta de que un menor nos ha proporcionado información personal, por favor contáctanos.
          </p>

          <Subheading as="h2" className="mt-12">
            11. Transferencias Internacionales de Datos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Tu información puede ser transferida y procesada en países distintos a tu país de residencia. Estos países pueden tener leyes de protección de datos diferentes a las leyes de tu país. Tomamos las medidas apropiadas para garantizar que tu información personal permanezca protegida.
          </p>

          <Subheading as="h2" className="mt-12">
            12. Cambios a Esta Política de Privacidad
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de &quot;Última actualización&quot;. Tu uso continuado de nuestros servicios después de dichos cambios indica tu aceptación de la política actualizada.
          </p>

          <Subheading as="h2" className="mt-12">
            13. Contáctanos
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Si tienes alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctanos:
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
