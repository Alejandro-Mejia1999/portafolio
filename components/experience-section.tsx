import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Ciudad, País",
      period: "2022 - Presente",
      description:
        "Lidero el desarrollo de aplicaciones web escalables utilizando React, Next.js y Node.js. Colaboro con equipos multidisciplinarios para entregar soluciones de alta calidad.",
      technologies: ["React", "Next.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    /*{
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Ciudad, País",
      period: "2021 - 2022",
      description:
        "Desarrollé interfaces de usuario responsivas y optimizadas para múltiples clientes. Implementé mejores prácticas de UX/UI y optimización de rendimiento.",
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Git"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Innovadora",
      location: "Ciudad, País",
      period: "2020 - 2021",
      description:
        "Comencé mi carrera profesional desarrollando funcionalidades para aplicaciones web. Aprendí tecnologías modernas y metodologías ágiles de desarrollo.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },*/
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Experiencia Profesional</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
