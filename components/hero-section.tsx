import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"  

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/imagenes/yo.jpeg"
              alt="Foto de perfil profesional"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hola, soy <span className="text-primary">Alejandro Jose Mejia Padilla</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ingeniero en sistemas con experiencia en bases de datos con experiencia en machine learning y desarrollo de software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">Ver mis proyectos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/dashboard" target="_blank">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="linkedin.com/in/alejandro-josé-mejía-padilla-098482331" target="_blank">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="alemejia477@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
