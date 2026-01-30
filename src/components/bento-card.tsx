'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  delay = 0,
}: {
  dark?: boolean
  className?: string
  eyebrow: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic?: React.ReactNode
  fade?: ('top' | 'bottom')[]
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.02 }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-xs ring-1 ring-gray-200',
        'data-dark:bg-gray-800 data-dark:ring-accent-primary/20',
        'transition-shadow duration-300 hover:shadow-lg hover:ring-accent-primary/40',
      )}
    >
      {graphic && (
        <div className="relative h-48 sm:h-64 lg:h-80 shrink-0">
          {graphic}
          {fade.includes('top') && (
            <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
          )}
          {fade.includes('bottom') && (
            <div className="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]" />
          )}
        </div>
      )}
      <div className="relative p-5 sm:p-7 lg:p-10">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-950 group-data-dark:text-white">
          {title}
        </p>
        <p className="mt-1.5 sm:mt-2 max-w-[600px] text-base sm:text-lg text-gray-600 group-data-dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
