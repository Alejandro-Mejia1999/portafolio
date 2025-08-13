import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center">
              
            </p>
            <p className="text-sm text-muted-foreground">© 2024 Todos los derechos reservados.</p>
          </div>

          <div className="flex space-x-4">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
