'use client'

import { useEffect, useRef } from 'react'
import { clsx } from 'clsx'

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Resize canvas to match container size
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // PALETA DE COLORES VERDES (from original effect)
    const colors = [
      { r: 16, g: 185, b: 129 }, // Verde esmeralda (#10b981)
      { r: 34, g: 197, b: 94 }, // Verde brillante (#22c55e)
      { r: 20, g: 83, b: 45 }, // Verde oscuro (#14532d)
      { r: 74, g: 222, b: 128 }, // Verde claro (#4ade80)
      { r: 5, g: 150, b: 105 }, // Verde medio (#059669)
    ]

    // Gradient point class (exact from original)
    class GradientPoint {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: { r: number; g: number; b: number }
      phase: number
      currentRadius: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.radius = Math.random() * 300 + 200
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.phase = Math.random() * Math.PI * 2
        this.currentRadius = this.radius
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Rebotar en los bordes
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1

        // Mantener dentro de los límites
        this.x = Math.max(0, Math.min(canvas!.width, this.x))
        this.y = Math.max(0, Math.min(canvas!.height, this.y))

        // Variar el radio sutilmente
        this.phase += 0.01
        this.currentRadius = this.radius + Math.sin(this.phase) * 50
      }
    }

    // Create gradient points (6 like original)
    const numPoints = 6
    const points: GradientPoint[] = []
    for (let i = 0; i < numPoints; i++) {
      points.push(new GradientPoint())
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      if (!canvas || !ctx) return

      // Limpiar canvas con fondo semi-transparente para efecto de trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar cada punto
      points.forEach((point) => {
        point.update()

        // Crear gradiente radial para cada punto
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.currentRadius
        )

        // Color del centro (más opaco)
        gradient.addColorStop(
          0,
          `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0.8)`
        )

        // Color intermedio
        gradient.addColorStop(
          0.5,
          `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0.3)`
        )

        // Transparente en los bordes
        gradient.addColorStop(
          1,
          `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0)`
        )

        // Dibujar el gradiente con blending mode para mezclar colores
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      // Restaurar modo de composición normal
      ctx.globalCompositeOperation = 'source-over'

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={clsx('pointer-events-none', className)}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}
