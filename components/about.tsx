"use client"

import { useEffect, useState } from "react"

export function About() {
  const [mounted, setMounted] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="relative">
              <h2
                className={`text-3xl font-bold transition-all duration-700 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                About
              </h2>
              {!typingComplete && (
                <span className="absolute -right-2 top-0 text-3xl font-bold text-primary animate-blink">|</span>
              )}
            </div>
            <div
              className={`w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-gradient-x transition-all duration-700 delay-200 ${
                mounted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Big Animated Photo */}
            <div
              className={`w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0 transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } motion-safe:animate-bounce`}
            >
              <img
                src="/mini.jpg"
                alt="Mini"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text & Stats */}
            <div className="flex-1 space-y-6">
              {/* Text */}
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p
                  className={`transition-all duration-700 delay-300 ${
                    mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  I'm a passionate frontend developer who specializes in creating beautiful, responsive user interfaces and
                  exceptional user experiences. With a solid foundation in backend technologies, I understand the full
                  development lifecycle and can bridge the gap between frontend and backend systems effectively.
                </p>

                <p
                  className={`transition-all duration-700 delay-500 ${
                    mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  My expertise lies in modern React applications, responsive design, and creating pixel-perfect UIs with
                  Tailwind CSS. I also have experience with backend technologies including Node.js, databases, and APIs,
                  which helps me build more efficient and well-integrated frontend solutions.
                </p>

                <p
                  className={`transition-all duration-700 delay-700 ${
                    mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  When I'm not coding, you'll find me exploring new frontend frameworks, contributing to open-source
                  projects, or sharing knowledge with the developer community. I believe in continuous learning and staying
                  up-to-date with the latest trends in web development and user experience design.
                </p>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 transition-all duration-700 delay-900 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "50+", label: "Projects Completed" },
                  { number: "100k+", label: "Lines of Code" },
                  { number: "24/7", label: "System Uptime" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
