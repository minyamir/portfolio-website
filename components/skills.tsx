"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
    icon: "🎨",
  },
  {
    title: "UI/UX & Design",
    skills: ["Responsive Design", "Component Libraries", "Figma", "Adobe XD", "Accessibility", "Performance"],
    icon: "✨",
  },
  {
    title: "Backend Knowledge",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication", "Database Design"],
    icon: "⚡",
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    icon: "💻",
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "VS Code", "Webpack", "Vite", "npm/yarn", "Chrome DevTools"],
    icon: "🛠️",
  },
  {
    title: "Cloud & Deployment",
    skills: ["Vercel", "Netlify", "AWS", "Docker", "CI/CD", "GitHub Actions"],
    icon: "☁️",
  },
]

export function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>(new Array(skillCategories.length).fill(false))
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
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
      { threshold: 0.2 },
    )

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-80 w-1 h-1 bg-accent/60 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-40 right-60 w-3 h-3 bg-primary/30 rounded-full animate-wave delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-60 left-40 w-1 h-1 bg-primary/50 rounded-full animate-float delay-1500"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold animate-slide-in-up">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-300%">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-gradient-x mx-auto"></div>
            <p className="text-muted-foreground animate-slide-in-up delay-200">
              Frontend technologies I specialize in, with backend knowledge to build complete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => (categoryRefs.current[index] = el)}
                className={`space-y-4 transition-all duration-700 hover-lift group ${
                  visibleCategories[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <span className="text-2xl animate-wave" style={{ animationDelay: `${index * 0.2}s` }}>
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`bg-background/50 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default relative overflow-hidden group ${
                        visibleCategories[index]
                          ? "translate-y-0 opacity-100 animate-bounce-in"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 200 + skillIndex * 100}ms`,
                        animationDelay: `${skillIndex * 100}ms`,
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-xl bg-card/50 border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Core Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: "Frontend Development", level: 95 },
                { skill: "React & Next.js", level: 92 },
                { skill: "UI/UX Implementation", level: 90 },
                { skill: "Responsive Design", level: 88 },
                { skill: "Backend Integration", level: 85 },
                { skill: "Performance Optimization", level: 87 },
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-shimmer"
                      style={{
                        width: visibleCategories[0] ? `${item.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
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
