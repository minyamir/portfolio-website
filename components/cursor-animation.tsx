"use client"

import { useEffect, useState } from "react"

export function CursorAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 w-4 h-4 bg-primary/60 rounded-full pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      />

      {/* Trailing cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-primary/30 rounded-full pointer-events-none z-40 transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      />

      {/* Animated particles following cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-30 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-ping"
            style={{
              left: `${Math.cos((i * Math.PI) / 3) * 20}px`,
              top: `${Math.sin((i * Math.PI) / 3) * 20}px`,
              animationDelay: `${i * 100}ms`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </>
  )
}
