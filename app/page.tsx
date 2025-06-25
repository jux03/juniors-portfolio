import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Training } from "@/components/training"
import { Contact } from "@/components/contact"
import { FloatingElements } from "@/components/floating-elements"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <FloatingElements />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Training />
      <Contact />
    </main>
  )
}
