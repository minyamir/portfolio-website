"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "2026 — Present",
    title: "Backend of SecondhandTools Marketplace",
    company: "Hahu Marketplace",
    description:
      "Independently conceptualized and engineered a secure C2C equipment marketplace. Integrated Ethiopian National ID verification and built a multilingual AI assistant using Gemini API to provide real-time agricultural support in Amharic and Afan Oromo.",
    technologies: ["MERN Stack", "Google Gemini AI", "Socket.io", "National ID Auth", "Zod"],
  },
  {
    period: "2025 — 2026",
    title: "Full-stack Social media",
    company: "ETHIO-Kids Ecosystem",
    description:
      "Built an automated educational ecosystem featuring an 'AI Gatekeeper' for safe content moderation. Designed 'The Live Stadium' using WebRTC to enable real-time collaboration and secure media processing for students.",
    technologies: ["Node.js", "Express.js", "WebRTC", "Socket.io", "Cloudinary"],
  },
  {
    period: "2025",
    title: "Full-Stack Developer & Creator",
    company: "Farmer Rent Tool",
    description:
      "Designed and launched a specialized rental platform to empower local farming communities. Implemented a bilingual Amharic/English interface and a localized booking system to facilitate peer-to-peer resource sharing.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "i18next"],
  },
]

export function Experience() {
  const [visibleExperiences, setVisibleExperiences] = useState<boolean[]>(new Array(experiences.length).fill(false))
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = experienceRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setVisibleExperiences((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }
          }
        })
      },
      { threshold: 0.15 },
    )

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Central Timeline Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent transform md:-translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight">Independent Ventures</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-blue-600 rounded-full mx-auto md:mx-0"></div>
            <p className="text-muted-foreground max-w-xl">
              A timeline of platforms and AI-driven solutions I have conceptualized, designed, and deployed independently.
            </p>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (experienceRefs.current[index] = el)}
                className={`grid md:grid-cols-2 gap-8 relative transition-all duration-1000 ease-out ${
                  visibleExperiences[index] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[-1.9rem] md:left-1/2 top-1 w-5 h-5 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background z-20 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25"></div>
                </div>

                {/* Date/Period - Left Side */}
                <div className={`md:text-right flex flex-col justify-start pt-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                   <span className="text-lg font-mono font-bold text-primary tracking-tighter">
                    {exp.period}
                   </span>
                </div>

                {/* Content Card - Right Side */}
                <div className={`space-y-4 p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-blue-500 font-semibold flex items-center gap-2 text-sm uppercase tracking-wider">
                       <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                       {exp.company}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/40 border border-border/50 text-[10px] md:text-xs font-medium py-1 px-2.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
