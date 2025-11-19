'use client'

import { clsx } from 'clsx'
import { useRef } from 'react'

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
  const videoRef = useRef<HTMLVideoElement>(null)

  // Generate poster image path from video src
  const posterSrc = src.replace('.mp4', '-poster.jpg')

  const handleMouseEnter = async () => {
    try {
      await videoRef.current?.play()
    } catch (error) {
      // Autoplay was prevented by browser - this is expected behavior
      // User will need to click play button manually
      console.log('Autoplay prevented by browser')
    }
  }

  const handleMouseLeave = () => {
    videoRef.current?.pause()
  }

  return (
    <div
      style={{ '--width': width, '--height': height } as React.CSSProperties}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)] overflow-hidden rounded-(--radius)',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={posterSrc}
        className="h-full w-full rounded-(--radius) shadow-2xl ring-1 ring-black/10 object-cover"
        muted={true}
        loop={true}
        playsInline={true}
        controls
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
