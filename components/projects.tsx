"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "E-commerce API Platform",
    description:
      "Scalable microservices architecture for e-commerce platform handling 100k+ daily transactions. Built with Node.js, PostgreSQL, and Redis for caching.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat System",
    description:
      "High-performance chat application with WebSocket connections, message queuing, and horizontal scaling. Supports 10k+ concurrent users.",
    technologies: ["Python", "FastAPI", "WebSocket", "RabbitMQ", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard API",
    description:
      "RESTful API for analytics dashboard with complex data aggregation, real-time metrics, and automated reporting features.",
    technologies: ["Express.js", "TimescaleDB", "GraphQL", "Bull Queue"],
    github: "#",
    demo: "#",
  },
  {
    title: "Authentication Service",
    description:
      "Secure authentication microservice with JWT tokens, OAuth integration, rate limiting, and comprehensive audit logging.",
    technologies: ["Go", "PostgreSQL", "JWT", "OAuth2", "Docker"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setVisibleCards((prev) => {
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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-gradient-x"></div>
            <p className="text-muted-foreground max-w-2xl">
              Here are some of the backend systems and APIs I've built. Each project showcases different aspects of
              scalable architecture and system design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs hover:bg-primary/20 transition-all duration-300 ${
                            visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                          }`}
                          style={{ transitionDelay: `${index * 150 + techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
