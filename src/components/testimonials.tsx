'use client'

import { Container } from './container'
import { Heading, Subheading } from './text'

const team = [
  {
    img: '/testimonials/adriana.jpg',
    name: 'Adriana Suárez',
    title: 'Co-fundadora & Contenido',
    linkedin: 'https://www.linkedin.com/in/suarezladriana/',
    bio: '7 años creando contenido educativo para Crehana, Interbank, PUCP y el BCRP. Más de 200 productos y docentes capacitados en LATAM y España.',
  },
  {
    img: '/testimonials/jorge.jpg',
    name: 'Jorge Vicuña',
    title: 'Co-fundador & Tech',
    linkedin: 'https://www.linkedin.com/in/jorgevicuna/',
    bio: 'Construí productos digitales en Yape, Interbank y el Ministerio de Trabajo. Hoy enseño tecnología en la PUCP.',
  },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function TeamMember({
  img,
  name,
  title,
  linkedin,
  bio,
}: {
  img: string
  name: string
  title: string
  linkedin: string
  bio: string
}) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 aspect-[4/5] sm:aspect-[3/4]">
        <img
          src={img}
          alt={`Foto de ${name}`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{name}</h3>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${name}`}
              className="text-white/70 hover:text-accent-primary transition-colors"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
          <p className="mt-1 text-sm sm:text-base font-medium">
            <span className="bg-gradient-to-r from-[#c084fc] via-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent">
              {title}
            </span>
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <div className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div
            className="opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards' }}
          >
            <Subheading>Equipo</Subheading>
          </div>
          <Heading
            as="h3"
            className="mt-2 opacity-0"
            style={{ animation: 'fadeInUp 0.7s ease-out 0.2s forwards' }}
          >
            Quiénes somos
          </Heading>
          <p
            className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 opacity-0"
            style={{ animation: 'fadeInUp 0.7s ease-out 0.3s forwards' }}
          >
            Equipo pequeño, resultados grandes.
          </p>
        </div>

        <div
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto opacity-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
        >
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </Container>
    </div>
  )
}
