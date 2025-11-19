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
  title: 'Pricing',
  description:
    'AI development training, web development, and custom solutions. Choose the service that fits your needs.',
}

const tiers = [
  {
    name: 'Claude Code Training' as const,
    slug: 'claude-training',
    description: 'Empower your team with AI development skills.',
    priceMonthly: 3000,
    href: '/form',
    highlights: [
      { description: 'Workshop presencial/remoto 1-2 días' },
      { description: 'Hands-on practice with real projects' },
      { description: 'Setup and installation included' },
      { description: 'Best practices and workflows' },
      { description: 'Custom adoption plan for your team' },
      { description: 'Integration with Git, CI/CD tools' },
    ],
    features: [
      { section: 'Training', name: 'Workshop duration', value: '1-2 days' },
      { section: 'Training', name: 'Team size', value: '5-10 people' },
      { section: 'Training', name: 'Format', value: 'Remote/On-site' },
      { section: 'Training', name: 'Hands-on exercises', value: true },
      { section: 'Training', name: 'Custom use cases', value: true },
      { section: 'Setup', name: 'Claude Code installation', value: true },
      { section: 'Setup', name: 'Tool integration (Git, CI/CD)', value: true },
      { section: 'Setup', name: 'Custom configurations', value: true },
      { section: 'Setup', name: 'Best practices guide', value: true },
      { section: 'Support', name: 'Adoption plan', value: true },
      { section: 'Support', name: 'Training materials', value: true },
      { section: 'Support', name: 'Post-workshop Q&A', value: '1 week' },
    ],
  },
  {
    name: 'Essential Web Package' as const,
    slug: 'web-package',
    description: 'Complete web solution with integrations.',
    priceMonthly: 3000,
    href: '/form',
    highlights: [
      { description: 'Responsive design (mobile-first)' },
      { description: 'Contact form + SEO optimization' },
      { description: 'CMS for easy content editing' },
      { description: 'Hosting & domain (first year included)' },
      { description: 'Airtable + payment gateway integration' },
      { description: 'Custom API & webhooks' },
    ],
    features: [
      { section: 'Design', name: 'Responsive design', value: true },
      { section: 'Design', name: 'Custom UI/UX', value: true },
      { section: 'Design', name: 'SEO optimization', value: true },
      { section: 'Design', name: 'Contact form', value: true },
      { section: 'Design', name: 'Analytics integration', value: true },
      { section: 'Development', name: 'CMS (content editing)', value: true },
      { section: 'Development', name: 'Performance optimized', value: true },
      { section: 'Development', name: 'Airtable integration', value: true },
      { section: 'Development', name: 'Payment gateway', value: true },
      { section: 'Development', name: 'Custom API + Webhooks', value: true },
      { section: 'Support', name: 'Timeline', value: '2-3 weeks' },
      { section: 'Support', name: 'Hosting + Domain (1yr)', value: true },
    ],
  },
  {
    name: 'Tailored Services' as const,
    slug: 'tailored',
    description: 'Custom solutions combining training and development.',
    priceMonthly: null,
    href: '/form',
    highlights: [
      { description: 'Large-scale implementations' },
      { description: 'Multi-team training programs' },
      { description: 'Dedicated account manager' },
      { description: 'Quarterly strategy sessions' },
      { description: 'Custom SLA agreements' },
      { description: 'Priority support' },
    ],
    features: [
      { section: 'Services', name: 'Training + Development combo', value: true },
      { section: 'Services', name: 'Large-scale implementations', value: true },
      { section: 'Services', name: 'Multi-team programs', value: true },
      { section: 'Services', name: 'Custom integrations', value: true },
      { section: 'Services', name: 'Scalable architecture', value: true },
      { section: 'Management', name: 'Dedicated account manager', value: true },
      { section: 'Management', name: 'Quarterly strategy sessions', value: true },
      { section: 'Management', name: 'Custom SLA agreements', value: true },
      { section: 'Management', name: 'Priority support', value: true },
      { section: 'Support', name: 'Ongoing maintenance', value: 'Custom' },
      { section: 'Support', name: 'Training sessions', value: 'Unlimited' },
      { section: 'Support', name: 'Response time', value: '< 4 hours' },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Services designed to accelerate your team.</Heading>
      <Lead className="mt-6 max-w-3xl">
        From AI development training to web solutions, we help teams build better
        software faster. Choose the service that fits your needs.
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
                  <p>per project</p>
                </div>
              </>
            ) : (
              <div className="text-3xl font-medium text-gray-950">
                Contact us for pricing
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Get started</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              What&apos;s included:
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
                Get started
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
                  Get started
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
                  &quot;SV delivered our web platform on time and within budget. Their fixed-price model gave us the certainty we needed.&quot;
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
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              What&apos;s included in the fixed price?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Each tier includes everything listed in the package: design, development,
              testing, deployment, and the specified number of revision rounds. The only
              additional costs would be for third-party services you choose (like hosting
              or premium APIs), which we&apos;ll discuss upfront.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How does the project timeline work?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Timelines are estimates based on typical projects in each tier. After our
              initial consultation, we&apos;ll provide a detailed project plan with
              milestones. We work in iterative sprints and share progress updates weekly,
              so you&apos;re always in the loop.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What if my project doesn&apos;t fit into these tiers?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              These tiers cover most projects, but we&apos;re flexible. If your needs are
              unique, contact us for a custom quote. We can also start with a consulting
              session to help define the right scope and approach for your project.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What kind of support do you offer after launch?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Each package includes post-launch support (30 days to 6 months depending on
              the tier). This covers bug fixes, minor adjustments, and technical support.
              After that period, we can arrange ongoing maintenance through a monthly
              retainer or per-request basis.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Do you work with clients outside Peru?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutely. We work with clients globally and are experienced in remote
              collaboration. We adapt our communication schedule to your timezone and use
              tools like Slack, Zoom, and project management platforms to keep everything
              transparent and organized.
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
