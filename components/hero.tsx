"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/ai-engineer-headshot.png"
                alt="Asif - AI/ML Engineer"
                fill
                className="rounded-full object-cover border-4 border-accent/20"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Hi, I'm <span className="gradient-text">Asif</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance">
              AI/ML Engineer & Data Scientist
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Transforming complex data into intelligent solutions. Passionate about building AI systems that make a
              real-world impact through innovative machine learning and data science.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
