"use client"

import { useEffect, useState } from "react"

export function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Image: Bounces once on load then stays still */}
          <div
            className={`w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0 transition-all duration-1000 ease-out ${
              mounted 
                ? "translate-y-0 opacity-100 scale-100" 
                : "translate-y-20 opacity-0 scale-90"
            }`}
          >
            <img
              src="/mine.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content: Focused on MERN Stack */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p className={`transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
                I am a <strong>MERN Stack Developer</strong> focused on building scalable web applications. 
                I specialize in creating full-stack solutions using MongoDB, Express.js, React, and Node.js.
              </p>

              <p className={`transition-all duration-700 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
                Currently, I am developing impactful tools like <strong>Secure C2C SecondHandmarketplace </strong>, 
                <strong>KidSocialMedia</strong>, and <strong>Farmer Rent tool</strong>,<strong>Backend of Ethio Kids </strong>. I enjoy turning 
                complex requirements into simple, functional, and user-friendly applications.
              </p>
            </div>

            {/* Stats Section */}
            <div className={`grid grid-cols-2 gap-4 pt-6 transition-all duration-700 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
              <div className="p-4 rounded-xl bg-card/50 border border-border">
                <div className="text-2xl font-bold text-primary">MERN</div>
                <div className="text-sm text-muted-foreground">Main Stack</div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-border">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
