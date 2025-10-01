"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    console.log("[v0] Navigation clicked:", href)
    const targetId = href.slice(1)
    const element = document.getElementById(targetId)

    if (element) {
      console.log("[v0] Found element:", element)
      const headerHeight = 80

      let elementTop = 0
      let currentElement = element as HTMLElement | null

      // Calculate absolute position by traversing up the DOM tree
      while (currentElement) {
        elementTop += currentElement.offsetTop
        currentElement = currentElement.offsetParent as HTMLElement | null
      }

      const scrollPosition = Math.max(0, elementTop - headerHeight)

      console.log("[v0] Element offsetTop:", element.offsetTop)
      console.log("[v0] Calculated absolute elementTop:", elementTop)
      console.log("[v0] Final scroll position:", scrollPosition)

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Element not found for ID:", targetId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/5"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`text-xl font-semibold bg-gradient-to-r from-gold via-primary to-gold bg-clip-text text-transparent transition-all duration-700 hover:scale-105 cursor-pointer drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Minyamir Kelemu
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  console.log("[v0] Navigation clicked:", item.name, item.href)
                  scrollToSection(item.href)
                }}
                className={`text-sm transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground"
                } ${mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-primary to-gold transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? "w-full shadow-lg shadow-gold/50" : "group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => {
                console.log("[v0] Contact button clicked")
                scrollToSection("#contact")
              }}
              className={`bg-gradient-to-r from-gold to-primary text-black hover:from-primary hover:to-gold hover:scale-105 hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 relative overflow-hidden group font-semibold ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              Get in touch
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
