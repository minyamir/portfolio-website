"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)

    console.log("[v0] Theme initialization - saved:", savedTheme, "system:", systemPrefersDark, "final:", shouldBeDark)

    setIsDark(shouldBeDark)
    // Apply theme immediately to prevent flash
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  useEffect(() => {
    if (!mounted) return

    console.log("[v0] Theme changed to:", isDark ? "dark" : "light")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark, mounted])

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
      onClick={() => setIsDark(!isDark)}
      className="relative overflow-hidden group hover:bg-primary/10 transition-all duration-300"
    >
      <Sun className={`h-4 w-4 transition-all duration-500 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
