import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-glow" />
        <div
          className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Tu presencia web en 15 días</span>
          </div>

          <h1 className="mb-8 text-balance text-6xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Tu página web{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                profesional
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary to-primary/60 opacity-50" />
            </span>{" "}
            por <span className="text-primary">$100</span>
          </h1>

          <p className="mb-12 text-pretty text-xl text-muted-foreground md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Páginas web informativas listas para publicar con dominio .com.ve incluido. Deploy completo, diseño
            profesional y entrega rápida para tu negocio.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contacto">
              <Button
                size="lg"
                className="group h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#ejemplos">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-2 hover:bg-accent/50 backdrop-blur-sm bg-transparent"
              >
                Ver ejemplos
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Dominio .com.ve incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span>Deploy completo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
