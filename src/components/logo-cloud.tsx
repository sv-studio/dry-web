'use client'

import { clsx } from 'clsx'

const logos = [
  { name: 'Crehana', src: '/logo-cloud/crehana.png' },
  { name: 'AEA', src: '/logo-cloud/aea.png' },
  { name: 'Interbank', src: '/logo-cloud/interbank.png' },
  { name: 'PUCP', src: '/logo-cloud/pucp.png' },
  { name: 'Rimac', src: '/logo-cloud/rimac.png' },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'py-8 px-4 rounded-2xl bg-white')}>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div
          className="flex gap-16 items-center"
          style={{
            animation: 'marquee 20s linear infinite',
            width: 'max-content',
          }}
        >
          {/* First set of logos */}
          {logos.map((logo) => (
            <img
              key={logo.name}
              alt={logo.name}
              src={logo.src}
              className="h-8 sm:h-7 lg:h-10 max-w-24 lg:max-w-32 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo) => (
            <img
              key={`${logo.name}-2`}
              alt={logo.name}
              src={logo.src}
              className="h-8 sm:h-7 lg:h-10 max-w-24 lg:max-w-32 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
