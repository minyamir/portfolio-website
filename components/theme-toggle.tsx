"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
    setMounted(true)

    console.log("[Theme] Initialized:", shouldBeDark ? "dark" : "light")
  }, [])

  // Apply theme when toggled
  useEffect(() => {
    if (!mounted) return
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    console.log("[Theme] Changed to:", isDark ? "dark" : "light")
  }, [isDark, mounted])

  // Prevent UI flicker before mounting
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative overflow-hidden">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark((prev) => !prev)}
      className="relative overflow-hidden group hover:bg-primary/10 transition-all duration-300"
    >
      {/* Sun icon for light mode */}
      <Sun
        className={`h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      {/* Moon icon for dark mode */}
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
