import { clsx } from 'clsx'

export function Screenshot({
  width,
  height,
  src,
  className,
}: {
  width: number
  height: number
  src: string
  className?: string
}) {
  return (
    <div
      style={{ '--width': width, '--height': height } as React.CSSProperties}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]',
      )}
    >
      <iframe
        src="https://player.vimeo.com/video/1138121667?badge=0&autopause=0&title=0&byline=0&portrait=0"
        className="h-full w-full rounded-(--radius) shadow-2xl ring-1 ring-black/10"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="SV Demo Video"
      />
    </div>
  )
}
