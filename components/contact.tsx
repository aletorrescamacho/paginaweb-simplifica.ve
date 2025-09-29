import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">comenzar</span>?
          </h2>
          <p className="text-pretty text-xl text-muted-foreground leading-relaxed">
            Contáctanos hoy y ten tu página web profesional en 20 días
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <Card className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl">WhatsApp</CardTitle>
              <CardDescription className="text-base">Respuesta inmediata</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://wa.me/584127507522" target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                  +58 412 7507522
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl">Email</CardTitle>
              <CardDescription className="text-base">Escríbenos</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="mailto:simplifica.ve@gmail.com">
                <Button variant="outline" className="w-full h-12 text-base border-2 hover:bg-accent/50 bg-transparent">
                  contacto@simplifica.com.ve
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <Instagram className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl">Instagram</CardTitle>
              <CardDescription className="text-base">Síguenos</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://instagram.com/simplifica.ve" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full h-12 text-base border-2 hover:bg-accent/50 bg-transparent">
                  @simplifica.ve
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
