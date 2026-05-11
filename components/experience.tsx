"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "2026 — Present",
    title: "Full-Stack Developer",
    company: "Farmer Rent Tool",
    description:
      "Developed a specialized marketplace for agricultural equipment rental. Built a bilingual interface supporting Amharic and English, allowing farmers to list and rent machinery while optimizing local resource sharing.",
    technologies: ["MERN Stack", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    period: "2025 — 2026",
    title: "Lead Developer",
    company: "KidSocialMedia",
    description:
      "Architected a secure, moderated social networking platform designed specifically for children. Implemented strict role-based access controls, content filtering, and an intuitive UI/UX to ensure a safe digital environment.",
    technologies: ["React", "Express.js", "Firebase", "Node.js"],
  },
  {
    period: "2025",
    title: "Backend & Systems Lead",
    company: "OrthodoxAdmin",
    description:
      "Designed and implemented an administrative management system for religious institutional records. Developed features for membership tracking, event scheduling, and secure data storage using a structured database approach.",
    technologies: ["Java", "JDBC", "SQL Server", "Swing/React"],
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
      { threshold: 0.2 },
    )

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-card/30 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2 hidden md:block"></div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-gradient-x"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (experienceRefs.current[index] = el)}
                className={`grid md:grid-cols-4 gap-6 relative transition-all duration-700 ${
                  visibleExperiences[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block animate-pulse border-4 border-background"></div>

                <div className="md:col-span-1">
                  <p className="text-sm text-muted-foreground font-mono bg-card/50 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </p>
                </div>

                <div className="md:col-span-3 space-y-4 group">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-300 ${
                          visibleExperiences[index] ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 200 + techIndex * 100}ms` }}
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
