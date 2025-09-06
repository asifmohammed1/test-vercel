"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Briefcase,
  FolderOpen,
  Award,
  Mail,
  Code,
  Brain,
  Database,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Send,
} from "lucide-react"

interface ModalSection {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  gradient: string
}

const sections: ModalSection[] = [
  {
    id: "about",
    title: "About Me",
    icon: <User className="h-6 w-6" />,
    description: "Learn about my background and passion for AI/ML",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "experience",
    title: "Work Experience",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Professional journey and achievements",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FolderOpen className="h-6 w-6" />,
    description: "Showcase of AI/ML and Data Science projects",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: <Award className="h-6 w-6" />,
    description: "Professional certifications and achievements",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "skills",
    title: "Skills & Technologies",
    icon: <Code className="h-6 w-6" />,
    description: "Technical expertise and tools",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: "contact",
    title: "Contact Me",
    icon: <Mail className="h-6 w-6" />,
    description: "Get in touch for opportunities",
    gradient: "from-pink-500 to-rose-600",
  },
]

export function PortfolioGrid() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  const renderModalContent = (sectionId: string) => {
    switch (sectionId) {
      case "about":
        return <AboutContent />
      case "experience":
        return <ExperienceContent />
      case "projects":
        return <ProjectsContent />
      case "certifications":
        return <CertificationsContent />
      case "skills":
        return <SkillsContent />
      case "contact":
        return <ContactContent />
      default:
        return null
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Portfolio Sections</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different aspects of my professional journey in AI/ML and Data Science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
              onClick={() => setSelectedSection(section.id)}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-medium">Explore</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedSection} onOpenChange={() => setSelectedSection(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text">
                {sections.find((s) => s.id === selectedSection)?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedSection && renderModalContent(selectedSection)}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

function AboutContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
          A
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3">AI/ML Engineer & Data Scientist</h3>
          <p className="text-muted-foreground mb-4">
            Passionate AI/ML Engineer with 5+ years of experience in developing intelligent systems and extracting
            insights from complex datasets. I specialize in machine learning, deep learning, and data science with a
            focus on real-world applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Location</h4>
              <p className="text-muted-foreground flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Experience</h4>
              <p className="text-muted-foreground">5+ Years</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <Brain className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h4 className="font-medium">AI/ML</h4>
          <p className="text-sm text-muted-foreground">Machine Learning & Deep Learning</p>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h4 className="font-medium">Data Science</h4>
          <p className="text-sm text-muted-foreground">Analytics & Insights</p>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
          <h4 className="font-medium">Engineering</h4>
          <p className="text-sm text-muted-foreground">Scalable Solutions</p>
        </div>
      </div>
    </div>
  )
}

function ExperienceContent() {
  const experiences = [
    {
      title: "Senior AI/ML Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading AI initiatives and developing machine learning models for production systems.",
      achievements: [
        "Improved model accuracy by 25% using advanced deep learning techniques",
        "Led a team of 5 engineers in developing recommendation systems",
        "Deployed ML models serving 1M+ users daily",
      ],
    },
    {
      title: "Data Scientist",
      company: "DataFlow Solutions",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed predictive models and analytics solutions for enterprise clients.",
      achievements: [
        "Built customer churn prediction model with 92% accuracy",
        "Created automated reporting dashboards saving 20 hours/week",
        "Implemented A/B testing framework for product optimization",
      ],
    },
    {
      title: "ML Engineer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Developed and deployed machine learning solutions for fintech applications.",
      achievements: [
        "Built fraud detection system reducing false positives by 40%",
        "Optimized model inference time by 60% using model compression",
        "Established MLOps pipeline for continuous model deployment",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <Badge variant="secondary" className="w-fit">
              <Calendar className="h-3 w-3 mr-1" />
              {exp.period}
            </Badge>
          </div>
          <div className="flex items-center text-muted-foreground mb-2">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="font-medium">{exp.company}</span>
            <span className="mx-2">•</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{exp.location}</span>
          </div>
          <p className="text-muted-foreground mb-3">{exp.description}</p>
          <ul className="space-y-1">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start">
                <ChevronRight className="h-3 w-3 mr-2 mt-0.5 text-primary flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function ProjectsContent() {
  const projects = [
    {
      title: "AI-Powered Recommendation Engine",
      description: "Built a scalable recommendation system using collaborative filtering and deep learning",
      tech: ["Python", "TensorFlow", "Redis", "Docker"],
      link: "https://github.com/asif/recommendation-engine",
      status: "Production",
    },
    {
      title: "Real-time Fraud Detection",
      description: "Developed ML model for detecting fraudulent transactions in real-time",
      tech: ["Python", "Scikit-learn", "Kafka", "AWS"],
      link: "https://github.com/asif/fraud-detection",
      status: "Live",
    },
    {
      title: "Computer Vision Dashboard",
      description: "Created object detection and classification system for manufacturing quality control",
      tech: ["PyTorch", "OpenCV", "FastAPI", "React"],
      link: "https://github.com/asif/cv-dashboard",
      status: "Demo",
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Built sentiment analysis tool for social media monitoring and brand analysis",
      tech: ["BERT", "Transformers", "Flask", "MongoDB"],
      link: "https://github.com/asif/sentiment-analyzer",
      status: "Open Source",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <Badge variant={project.status === "Production" ? "default" : "secondary"}>{project.status}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function CertificationsContent() {
  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-MLS-2023-001",
      link: "https://aws.amazon.com/certification/",
    },
    {
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-MLE-2022-001",
      link: "https://cloud.google.com/certification/",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2022",
      credentialId: "TF-DEV-2022-001",
      link: "https://www.tensorflow.org/certificate",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - Andrew Ng",
      date: "2021",
      credentialId: "DL-SPEC-2021-001",
      link: "https://www.coursera.org/specializations/deep-learning",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <Award className="h-8 w-8 text-primary flex-shrink-0" />
              <Badge variant="secondary">{cert.date}</Badge>
            </div>
            <h3 className="font-semibold mb-2">{cert.title}</h3>
            <p className="text-muted-foreground mb-2">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground mb-4">ID: {cert.credentialId}</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Verify Certificate
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function SkillsContent() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Java", "C++"],
    },
    {
      category: "ML/AI Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
    },
    {
      category: "Data Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"],
    },
    {
      category: "MLOps",
      skills: ["MLflow", "Kubeflow", "Apache Airflow", "Git", "CI/CD"],
    },
  ]

  return (
    <div className="space-y-6">
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Code className="h-5 w-5 mr-2 text-primary" />
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "asif@example.com",
      link: "mailto:asif@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
        <p className="text-muted-foreground mb-6">
          I'm always interested in discussing new opportunities, collaborations, or innovative AI/ML projects.
        </p>

        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                {info.icon}
              </div>
              <div>
                <p className="font-medium">{info.label}</p>
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Send Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <Input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button type="submit" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
