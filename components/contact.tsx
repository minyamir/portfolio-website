"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2
              className={`text-3xl font-bold transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Let's Work Together
            </h2>
            <div
              className={`w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-gradient-x transition-all duration-700 delay-200 ${
                mounted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              I'm always interested in new opportunities and exciting projects. Whether you're looking for a backend
              developer or want to discuss a potential collaboration, I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className={`bg-card border-border hover:border-primary/50 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  Email
                </CardTitle>
                <CardDescription>Drop me a line and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                  minyamir.kelemu@email.com
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`bg-card border-border hover:border-accent/50 hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                  Location
                </CardTitle>
                <CardDescription>Available for remote work worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Open to opportunities globally
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            className={`flex justify-center gap-4 transition-all duration-700 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group bg-transparent"
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-accent/10 hover:border-accent/50 hover:scale-110 transition-all duration-300 group bg-transparent"
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              LinkedIn
            </Button>
          </div>

          <div
            className={`text-center pt-8 transition-all duration-700 delay-900 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground">Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
