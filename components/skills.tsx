"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "MERN Stack Core",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "REST APIs"],
    icon: "💎",
  },
  {
    title: "Real-Time & AI",
    skills: ["Socket.io", "WebRTC", "Google Gemini AI", "Full-Mesh Network", "Signal Processing"],
    icon: "🚀",
  },
  {
    title: "Frontend Engineering",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Zustand"],
    icon: "🎨",
  },
  {
    title: "Backend & Security",
    skills: ["JWT Auth", "Bcrypt", "Validation (Zod/Joi)", "National ID Integration", "Middleware"],
    icon: "🛡️",
  },
  {
    title: "Database & Cloud",
    skills: ["MySQL", "PostgreSQL", "Cloudinary", "Multer", "Vercel", "Render"],
    icon: "☁️",
  },
  {
    title: "Development Tools",
    skills: ["Git", "Postman", "Docker", "pnpm/npm", "Linux Bash", "Windows 11 Dev"],
    icon: "🛠️",
  },
]

export function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>(new Array(skillCategories.length).fill(false))
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setVisibleCategories((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Specialized in the <strong>MERN stack</strong> for building secure marketplaces, 
              educational platforms, and real-time AI-integrated systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => (categoryRefs.current[index] = el)}
                className={`p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 group ${
                  visibleCategories[index] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Bars */}
          <div className="mt-20 p-8 rounded-3xl bg-card/30 border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-10 text-center">Core Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { skill: "MERN Stack Architecture", level: 95 },
                { skill: "Real-time Systems (WebRTC/Sockets)", level: 88 },
                { skill: "API Security & Auth", level: 92 },
                { skill: "UI/UX & Tailwind CSS", level: 94 },
                { skill: "Database Optimization", level: 85 },
                { skill: "AI Integration (Gemini/GPT)", level: 80 },
              ].map((item, index) => (
                <div key={item.skill} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-semibold text-foreground">{item.skill}</span>
                    <span className="text-sm text-primary font-mono">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-[1500ms] ease-in-out"
                      style={{
                        width: visibleCategories[0] ? `${item.level}%` : "0%",
                        transitionDelay: `${index * 150}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
