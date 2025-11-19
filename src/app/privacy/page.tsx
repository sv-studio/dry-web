import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how SV collects, uses, and protects your personal information.',
}

export default function Privacy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Heading as="h1">Privacy Policy</Heading>
        <Lead className="mt-6">
          Last updated: November 18, 2024
        </Lead>

        <div className="prose prose-gray mt-10 max-w-3xl">
          <Subheading as="h2" className="mt-12">
            1. Introduction
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            SV (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dry.pe and use our services.
          </p>

          <Subheading as="h2" className="mt-12">
            2. Information We Collect
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Contact information (name, email address, phone number)</li>
            <li>Company name and business information</li>
            <li>Communications you send to us</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <Subheading as="h2" className="mt-12">
            3. How We Use Your Information
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process and manage your requests for our services</li>
            <li>Send you updates about our services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <Subheading as="h2" className="mt-12">
            4. Data Storage and Third-Party Services
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We use Airtable, a third-party service, to store and manage contact form submissions. When you submit a contact form on our website, your information is securely transmitted to and stored in Airtable. Airtable&apos;s use of your information is governed by their privacy policy.
          </p>

          <Subheading as="h2" className="mt-12">
            5. Information Sharing and Disclosure
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>With service providers who assist us in operating our website and providing our services (such as Airtable)</li>
            <li>When required by law or to respond to legal process</li>
            <li>To protect our rights, property, or safety, or that of our users or the public</li>
            <li>With your consent or at your direction</li>
          </ul>

          <Subheading as="h2" className="mt-12">
            6. Data Security
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <Subheading as="h2" className="mt-12">
            7. Data Retention
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>

          <Subheading as="h2" className="mt-12">
            8. Your Rights
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            You have the right to:
          </p>
          <ul className="mt-4 list-disc pl-6 text-sm/6 text-gray-600">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict the processing of your information</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
          </ul>
          <p className="mt-4 text-sm/6 text-gray-600">
            To exercise any of these rights, please contact us using the information provided at the end of this policy.
          </p>

          <Subheading as="h2" className="mt-12">
            9. Cookies and Tracking Technologies
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.
          </p>

          <Subheading as="h2" className="mt-12">
            10. Children&apos;s Privacy
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>

          <Subheading as="h2" className="mt-12">
            11. International Data Transfers
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure that your personal information remains protected.
          </p>

          <Subheading as="h2" className="mt-12">
            12. Changes to This Privacy Policy
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
          </p>

          <Subheading as="h2" className="mt-12">
            13. Contact Us
          </Subheading>
          <p className="mt-4 text-sm/6 text-gray-600">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
