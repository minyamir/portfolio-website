"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function InteractiveCard({ children, className = "", glowColor = "primary" }: InteractiveCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-radial from-${glowColor}/20 to-transparent`}
        style={{
          background: isHovered
            ? `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--${glowColor}), 0.08), transparent)`
            : undefined,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Card>
  )
}
