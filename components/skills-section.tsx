import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "JavaScript"],
    },
    {
      title: "Backend",
      icon: <Code className="h-6 w-6" />,
      skills: ["Node.js", "Express", "Python"],
    },
    {
      title: "Base de Datos",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MySQL","SQL Server", "Oracle", "Azure","Firebase"],
    },
    {
      title: "Móvil & Otros",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Git", "Cisco", "Mikrotik", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
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
