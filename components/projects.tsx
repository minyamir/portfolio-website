"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [

 {
    title: "KidSocialMedia",
    description:
      "A secure, moderated social networking environment designed for children. Implements strict authentication protocols, age-appropriate UI/UX, and real-time interaction features with a focus on safety.",
    technologies: ["React", "Node.js", "Firebase", "Express.js", "Socket.io"],
    github: "https://github.com/minyamir/Kids_Scoial_Media-Frontend",
    demo: "https://kids-scoial-media.vercel.app/",
  },
  
  {
    title: "Farmer Rent Tool",
    description:
      "A specialized marketplace platform allowing farmers to rent and lease agricultural machinery. Features include a bilingual interface (Amharic/English), equipment listing management, and a localized booking system.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/minyamir/Farmer_tools_rent", 
    demo: "https://farmer-tools-rent-frem.vercel.app/",
  },
 
{

  title: "Secure C2C SecondHand Marketplace Backend",

  description:

    "A verified Customer-to-Customer (C2C) marketplace engine featuring National ID verification for enhanced user trust. This backend powers real-time second-hand product listings, category-based filtering, and a secure negotiation system, ensuring a safe trading environment for pre-owned materials.",

  technologies: ["MongoDB", "Express.js", "Node.js", "Cloudinary", "JWT"],

  github: "https://github.com/minyamir/Hahu_SecondHand_Marketplace_Backend",

  demo: "https://hahusecondhandmarket-backend.onrender.com",

},{
  title: "ETHIO-Kids: AI-Powered Educational Backend",
  description:
    "An advanced C2C educational ecosystem featuring an 'AI Gatekeeper' for automated content moderation and 'The Live Stadium' for real-time collaboration. Engineered to filter 'low-value' content and promote Educational Patriotism through secure, real-time media processing.",
  technologies: [
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "Google Gemini AI", 
    "WebRTC", 
    "Socket.io", 
    "Cloudinary"],
    github: "https://github.com/minyamir/Kids_Social_Media-Backend", 
    demo: "https://kids-social-media-backend.onrender.com", // Ensure this points to your deployed backend/docs
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
              I specialize in building full-stack applications with the MERN stack. Here are some of the systems I've developed.
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
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10 mt-auto">
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

                    <div className="flex gap-3 pt-2">
                      {/* GitHub Link */}
                      <a
                        href={project.github !== "#" && project.github !== "" ? project.github : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={project.github === "#" || project.github === "" ? "cursor-not-allowed" : ""}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={project.github === "#" || project.github === ""}
                          className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 bg-transparent"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>

                      {/* Demo Link */}
                      <a
                        href={project.demo !== "#" && project.demo !== "" ? project.demo : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={project.demo === "#" || project.demo === "" ? "cursor-not-allowed" : ""}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={project.demo === "#" || project.demo === ""}
                          className="hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 bg-transparent"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
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
