import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using SV software development services.',
}

export default function Terms() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Heading as="h1">Terms of Service</Heading>
        <Lead className="mt-6">
          Last updated: November 18, 2024
        </Lead>

        <div className="prose prose-gray mt-10 max-w-3xl">
          <Subheading as="h2" className="mt-12">
            1. Acceptance of Terms
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            By accessing and using the SV website (dry.pe) and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
          </p>

          <Subheading as="h2" className="mt-12">
            2. Services
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            SV provides software development services including but not limited to web application development, mobile application development, system integration, and technical consulting. The specific scope of services will be defined in individual project agreements.
          </p>

          <Subheading as="h2" className="mt-12">
            3. Use of Website
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
          </p>

          <Subheading as="h2" className="mt-12">
            4. Intellectual Property
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Unless otherwise specified in a project agreement, all intellectual property rights in any software, documentation, or materials developed by SV remain the property of SV until full payment is received. Upon full payment, ownership rights will be transferred to the client as specified in the project agreement.
          </p>

          <Subheading as="h2" className="mt-12">
            5. Privacy and Data Protection
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We are committed to protecting your privacy. Any personal information collected through our contact forms or services will be used solely for the purpose of providing our services and will not be shared with third parties without your consent, except as required by law.
          </p>

          <Subheading as="h2" className="mt-12">
            6. Project Agreements
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Individual projects will be governed by separate project agreements that outline specific deliverables, timelines, payment terms, and other project-specific conditions. These project agreements supplement and are subject to these general Terms of Service.
          </p>

          <Subheading as="h2" className="mt-12">
            7. Payment Terms
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Payment terms will be specified in individual project agreements. Generally, projects require an initial deposit and milestone-based payments. Late payments may result in project suspension and may incur additional fees.
          </p>

          <Subheading as="h2" className="mt-12">
            8. Warranties and Disclaimers
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            While we strive to deliver high-quality software solutions, SV makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>

          <Subheading as="h2" className="mt-12">
            9. Limitation of Liability
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            In no event shall SV be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if SV or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <Subheading as="h2" className="mt-12">
            10. Modifications to Terms
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            SV reserves the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page with an updated revision date. Your continued use of our services after any such changes constitutes your acceptance of the new terms.
          </p>

          <Subheading as="h2" className="mt-12">
            11. Governing Law
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            These terms shall be governed and construed in accordance with the laws of Peru, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Lima, Peru.
          </p>

          <Subheading as="h2" className="mt-12">
            12. Contact Information
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            If you have any questions about these Terms of Service, please contact us through our contact form or at:
          </p>
          <p className="mt-2 text-sm/6 text-gray-600">
            SV<br />
            Lima, Peru<br />
            Email: vicuna@hey.com<br />
            Phone: +51 943 891 428
          </p>
        </div>
      </Container>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
