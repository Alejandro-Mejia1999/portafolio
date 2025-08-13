import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Data warehouse System",
      description:
        "sistema de centralizacion de datos haciendo",
      image: "/imagenes/data.png",
      technologies: ["Integration Services", "Analisis Services", "Reporting Services", "Power BI", "SQL Server","Oracle","Azure"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sistema de Gestion ",
      description: "Se realizo un sistema de Gestion y facturacion para Optiservicios Velazquez.",
      image: "/imagenes/odoo.png",
      technologies: ["Odoo"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "TLS-UNAH",
      description: "Sistema para la traduccion de lenguaje de señas como proyecto final de la Clase de Inteligencia Artificial.",
      image: "/imagenes/tls.png",
      technologies: ["Python"],
      liveUrl: "https://despliegue-mtb6awhcdswflzkyxqjuzj.streamlit.app/",
      githubUrl: "https://github.com/Alejandro-Mejia1999/Despliegue.git",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Link>
                    </Button>
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
