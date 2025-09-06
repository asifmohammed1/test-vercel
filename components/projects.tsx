"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("All")
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

  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description:
        "Built a sophisticated recommendation engine using collaborative filtering and deep learning to increase user engagement by 40%.",
      image: "/images/ai-project.png",
      technologies: ["Python", "TensorFlow", "AWS", "Redis"],
      category: "Machine Learning",
      github: "https://github.com",
      live: "https://demo.example.com",
      featured: true,
    },
    {
      title: "Real-time Fraud Detection",
      description:
        "Developed a machine learning model to detect fraudulent transactions in real-time with 99.2% accuracy.",
      image: "/placeholder-qzh7p.png",
      technologies: ["Python", "Scikit-learn", "Apache Kafka", "Docker"],
      category: "Data Science",
      github: "https://github.com",
      live: "https://demo.example.com",
      featured: true,
    },
    {
      title: "Computer Vision Quality Control",
      description:
        "Implemented an automated quality control system using computer vision to reduce manual inspection time by 80%.",
      image: "/placeholder-tfzi2.png",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "PostgreSQL"],
      category: "Computer Vision",
      github: "https://github.com",
      live: "https://demo.example.com",
      featured: false,
    },
    {
      title: "Natural Language Processing Chatbot",
      description:
        "Created an intelligent chatbot using transformer models to handle customer inquiries with 95% satisfaction rate.",
      image: "/placeholder-etwvy.png",
      technologies: ["Python", "Transformers", "Flask", "MongoDB"],
      category: "NLP",
      github: "https://github.com",
      live: "https://demo.example.com",
      featured: false,
    },
    {
      title: "Predictive Analytics Dashboard",
      description:
        "Built a comprehensive analytics dashboard for sales forecasting using time series analysis and machine learning.",
      image: "/placeholder-dx2pp.png",
      technologies: ["R", "Shiny", "Prophet", "MySQL"],
      category: "Data Science",
      github: "https://github.com",
      live: "https://demo.example.com",
      featured: false,
    },
    {
      title: "Deep Learning Image Classifier",
      description: "Developed a state-of-the-art image classification model achieving 98% accuracy on custom dataset.",
      image: "/placeholder-qnagr.png",
      technologies: ["PyTorch", "CUDA", "Streamlit", "AWS S3"],
      category: "Machine Learning",
      github: "https://github.com",
      live: "https://demo.example.com",
      featured: false,
    },
  ]

  const categories = ["All", "Machine Learning", "Data Science", "Computer Vision", "NLP"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of innovative AI/ML solutions that demonstrate technical expertise and real-world impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="text-sm"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${500 + index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${900 + index * 150}ms` }}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2 pt-1">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
