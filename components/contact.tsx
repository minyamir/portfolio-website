"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2
              className={`text-3xl font-bold transition-all duration-700 sm:text-4xl ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Let&apos;s Work Together
            </h2>
            <div
              className={`w-16 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full mx-auto transition-all duration-700 delay-200 ${
                mounted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-300 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              I&apos;m focused on building secure, scalable <strong>MERN stack</strong> solutions and 
              real-time AI platforms. Whether you need a backend engineered or a full-stack product developed, 
              reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <Card
              className={`bg-card border-border hover:border-primary/50 transition-all duration-500 group ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
                <CardDescription>Ready for professional inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 transition-all">
                  <a href="mailto:minyamirkelemu12@gmail.com">
                    minyamirkelemu12@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card
              className={`bg-card border-border hover:border-primary/50 transition-all duration-500 group ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </CardTitle>
                <CardDescription>Available for direct calls or Telegram</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                  <a href="tel:+251940896360">
                    +251 940 896 360
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card
              className={`bg-card border-border md:col-span-2 hover:border-primary/50 transition-all duration-500 group ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </CardTitle>
                <CardDescription>Based in Ethiopia, open to remote work worldwide</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Social Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full hover:bg-primary/10 transition-all px-8"
            >
              <a href="https://github.com/minyamir" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full hover:bg-blue-600/10 transition-all px-8"
            >
              <a href="https://www.linkedin.com/in/minyamir-kelemu-a888b4374/" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div
            className={`text-center pt-8 transition-all duration-700 delay-900 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
          </div>
        </div>
      </div>
    </section>
  )
}
