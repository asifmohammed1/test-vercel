"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, TrendingUp } from "lucide-react"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep learning, neural networks, and advanced machine learning algorithms",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Statistical analysis, data visualization, and predictive modeling",
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Translating complex data insights into actionable business strategies",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about leveraging artificial intelligence and data science to solve complex problems and drive
            innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-pretty">
                With over 5 years of experience in AI/ML engineering and data science, I specialize in building
                intelligent systems that transform raw data into actionable insights. My expertise spans from developing
                sophisticated machine learning models to implementing scalable data pipelines.
              </p>
              <p className="text-lg leading-relaxed text-pretty">
                I'm passionate about staying at the forefront of AI innovation, constantly exploring new technologies
                and methodologies to deliver cutting-edge solutions that drive business value and create meaningful
                impact.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "SQL", "AWS", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="relative">
              <Image
                src="/placeholder-0fb8b.png"
                alt="AI/ML Engineering Workspace"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${700 + index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-pretty">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
