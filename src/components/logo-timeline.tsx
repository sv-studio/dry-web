import { clsx } from 'clsx'
import { Mark } from './logo'

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r from-white/15 from-[2px] to-[2px] bg-size-[12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-white/5 from-[2px] to-[2px] bg-size-[12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Logo({
  label,
  src,
  className,
}: {
  label: string
  src: string
  className: string
}) {
  return (
    <div
      className={clsx(
        className,
        'absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap',
        'rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]',
      )}
    >
      <img alt="" src={src} className="size-4" />
      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  )
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="@container absolute inset-0 grid grid-cols-1 pt-8">
        <Row>
          <Logo
            label="Vercel"
            src="/logo-timeline/vercel.svg"
            className="[animation-delay:-26s] [animation-duration:30s]"
          />
          <Logo
            label="Anthropic"
            src="/logo-timeline/claude.svg"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          <Logo
            label="Airtable"
            src="/logo-timeline/airtable.svg"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          <Logo
            label="ChatGPT"
            src="/logo-timeline/chatgpt.svg"
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="Astro"
            src="/logo-timeline/astro.svg"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          <Logo
            label="React"
            src="/logo-timeline/react.svg"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Logo
            label="Playwright"
            src="/logo-timeline/playwright.svg"
            className="[animation-delay:-45s] [animation-duration:45s]"
          />
          <Logo
            label="Github"
            src="/logo-timeline/github.svg"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
        <Row>
          <Logo
            label="Slack"
            src="/logo-timeline/slack.svg"
            className="[animation-delay:-55s] [animation-duration:60s]"
          />
          <Logo
            label="Discord"
            src="/logo-timeline/discord.svg"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
        </Row>
        <Row>
          <Logo
            label="Next.js"
            src="/logo-timeline/nextjs.svg"
            className="[animation-delay:-9s] [animation-duration:40s]"
          />
          <Logo
            label="Tailwind"
            src="/logo-timeline/tailwind.svg"
            className="[animation-delay:-28s] [animation-duration:40s]"
          />
        </Row>
      </div>
    </div>
  )
}
