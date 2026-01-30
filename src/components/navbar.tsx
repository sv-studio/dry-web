'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [
  { href: '/company', label: 'Nosotros' },
  { href: '/pricing', label: 'Precios' },
  { href: '/form', label: 'Contacto' },
]

function DesktopNav({ dark }: { dark?: boolean }) {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className={`flex items-center px-4 py-3 text-base font-medium bg-blend-multiply ${
              dark
                ? 'text-white/90 data-hover:bg-white/10 data-hover:text-white'
                : 'text-gray-950 data-hover:bg-accent-primary/10 data-hover:text-accent-primary'
            }`}
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton({ dark }: { dark?: boolean }) {
  return (
    <DisclosureButton
      className={`flex size-12 items-center justify-center self-center rounded-lg lg:hidden ${
        dark
          ? 'text-white data-hover:bg-white/10'
          : 'text-gray-950 data-hover:bg-accent-primary/10'
      }`}
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950 hover:text-accent-primary">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-gray-200" />
        <div className="absolute inset-x-0 top-2 border-t border-gray-200" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner, dark }: { banner?: React.ReactNode; dark?: boolean }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between" dark={dark}>
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3" dark={dark}>
              <Link href="/" title="Home">
                <Logo className="h-12" dark={dark} />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav dark={dark} />
          <MobileNavButton dark={dark} />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
