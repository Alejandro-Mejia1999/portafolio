import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/imagenes/yo1.jpeg"
                alt="Espacio de trabajo"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Soy un desarrollador apasionado con más de 3 años de experiencia creando aplicaciones web y móviles. Me
                especializo en tecnologías modernas como React, Next.js, Node.js y bases de datos.
              </p>

              <p className="text-lg text-muted-foreground">
                Mi enfoque se centra en escribir código limpio, crear interfaces intuitivas y resolver problemas
                complejos de manera eficiente. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.
              </p>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Datos rápidos</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Ubicación:</span>
                      <p className="font-medium">La Paz, Honduras</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Experiencia:</span>
                      <p className="font-medium">1+ años</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Proyectos:</span>
                      <p className="font-medium">5+ completados</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Disponibilidad:</span>
                      <p className="font-medium text-green-600">Disponible</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
