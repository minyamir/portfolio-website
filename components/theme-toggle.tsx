"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initial Theme Setup
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  // Handle Theme Persistence
  useEffect(() => {
    if (!mounted) return

    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark, mounted])

  // Prevent Hydration Flash: Render a skeleton or empty button until mounted
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      <div className="relative h-4 w-4 flex items-center justify-center">
        <Sun
          className={`h-full w-full absolute transition-all duration-500 ease-in-out ${
            isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          } text-amber-500`}
        />
        <Moon
          className={`h-full w-full absolute transition-all duration-500 ease-in-out ${
            isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          } text-blue-400`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
