"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentTech, setCurrentTech] = useState(0)
  const fullText = "Frontend Developer with Backend Knowledge"

  const technologies = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "JavaScript", "CSS3", "HTML5"]

  useEffect(() => {
    setMounted(true)

    let index = 0
    const typeTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)

    const techTimer = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length)
    }, 2000)

    return () => {
      clearInterval(typeTimer)
      clearInterval(techTimer)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className={`w-fit transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="animate-pulse mr-2">🟢</span>
                Available for opportunities
              </Badge>

              <h1
                className={`text-5xl lg:text-6xl font-bold text-balance transition-all duration-700 delay-100 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="bg-gradient-to-r from-gold via-primary to-gold bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Minyamir Kelemu
                </span>
              </h1>

              <h2
                className={`text-xl lg:text-2xl text-muted-foreground font-medium transition-all duration-700 delay-200 min-h-[2rem] ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {typedText}
                <span className="animate-blink">|</span>
              </h2>

              <p
                className={`text-lg text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 delay-300 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                I craft beautiful, responsive user interfaces with modern frontend technologies while leveraging my
                backend knowledge to build complete web solutions. Passionate about creating exceptional user
                experiences with clean, maintainable code.
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-gold to-primary text-black hover:from-primary hover:to-gold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 relative overflow-hidden group font-semibold"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <Mail className="w-4 h-4 mr-2" />
                Contact me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent hover:bg-gold/10 border-gold/30 hover:border-gold/50 text-gold hover:text-gold"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent hover:bg-primary/5"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent hover:bg-accent/5"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-black/40 via-primary/20 to-gold/20 rounded-2xl flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500 border border-gold/20 shadow-lg shadow-black/50">
              <div className="absolute top-4 left-4 text-xs font-mono text-gold/80 animate-float hover:text-gold transition-colors duration-300">
                React.useState()
              </div>
              <div className="absolute top-16 right-4 text-xs font-mono text-primary/60 animate-float delay-1000 hover:text-primary transition-colors duration-300">
                useEffect(() =&gt; {})
              </div>
              <div className="absolute bottom-16 left-6 text-xs font-mono text-gold/80 animate-float delay-500 hover:text-gold transition-colors duration-300">
                Tailwind CSS
              </div>
              <div className="absolute bottom-4 right-6 text-xs font-mono text-primary/60 animate-float delay-1500 hover:text-primary transition-colors duration-300">
                Next.js 15
              </div>
              <div className="absolute top-1/2 left-4 text-xs font-mono text-primary/40 animate-float delay-2000">
                TypeScript
              </div>
              <div className="absolute top-1/3 right-8 text-xs font-mono text-primary/40 animate-float delay-2500">
                Node.js
              </div>

              <div className="text-6xl font-mono text-gold/80 animate-pulse group-hover:scale-110 transition-all duration-500 group-hover:text-gold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] flex items-center justify-center relative">
                <span className="text-black drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">{"{"}</span>
                <span className="text-2xl mx-4 text-primary font-bold animate-fade-in-out min-w-[120px] text-center">
                  {technologies[currentTech]}
                </span>
                <span className="text-black drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">{"}"}</span>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/20 via-gold/10 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-gold via-black to-gold bg-clip-border opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
