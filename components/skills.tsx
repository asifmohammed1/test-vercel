"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Database, Code, BarChart3, Cloud, GitBranch, Cpu, LineChart } from "lucide-react"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "Neural Networks", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP", level: 85 },
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: [
        { name: "Statistical Analysis", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Predictive Modeling", level: 88 },
        { name: "Feature Engineering", level: 85 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 80 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: [
        { name: "TensorFlow/PyTorch", level: 90 },
        { name: "AWS/GCP", level: 85 },
        { name: "Docker/Kubernetes", level: 80 },
        { name: "Apache Spark", level: 75 },
      ],
    },
  ]

  const technologies = [
    { name: "Python", icon: Code },
    { name: "TensorFlow", icon: Brain },
    { name: "PyTorch", icon: Cpu },
    { name: "Scikit-learn", icon: LineChart },
    { name: "Pandas", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: GitBranch },
    { name: "Jupyter", icon: BarChart3 },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building intelligent systems and extracting insights from complex data.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`transition-all duration-1000 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-4 w-4 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={isVisible ? skill.level : 0} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`flex flex-col items-center p-4 rounded-lg bg-card hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <tech.icon className="h-8 w-8 text-accent mb-2" />
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
