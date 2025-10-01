"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { FloatingParticles } from "@/components/floating-particles"
import { ScrollProgress } from "@/components/scroll-progress"
import { LoadingScreen } from "@/components/loading-screen"
import { CursorAnimation } from "@/components/cursor-animation"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorAnimation />
      <main className="min-h-screen bg-background relative">
        <ScrollProgress />
        <FloatingParticles />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
