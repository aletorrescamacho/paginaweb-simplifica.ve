import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, GraduationCap, ShoppingBag, Stethoscope } from "lucide-react"

const examples = [
  {
    icon: Coffee,
    title: "Cafetería",
    description: "Menú informativo, horarios, ubicación y galería de fotos",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Stethoscope,
    title: "Consultorio Médico",
    description: "Información de servicios, especialidades y datos de contacto",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: ShoppingBag,
    title: "Tienda",
    description: "Catálogo informativo de productos, precios y datos de contacto",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: GraduationCap,
    title: "Academia",
    description: "Información de cursos, horarios y datos de contacto",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

export function Examples() {
  return (
    <section id="ejemplos" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
            Plantillas para{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">cada tipo</span>{" "}
            de negocio
          </h2>
          <p className="text-pretty text-xl text-muted-foreground leading-relaxed">
            Diseños profesionales adaptados a diferentes rubros y necesidades
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {examples.map((example, index) => (
            <Card
              key={example.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <CardHeader className="relative">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <example.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{example.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed">{example.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 backdrop-blur-sm">
            <span className="text-base text-foreground">
              ¿No ves tu rubro? No hay problema. Adaptamos nuestras plantillas a cualquier tipo de negocio.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
