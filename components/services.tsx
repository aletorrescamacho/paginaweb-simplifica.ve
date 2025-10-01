import { Check, Globe, Rocket, Sparkles, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Globe,
    title: "Dominio .com.ve incluido",
    description: "Tu dominio venezolano profesional incluido en el precio",
  },
  {
    icon: Rocket,
    title: "Deploy completo",
    description: "Tu sitio publicado y funcionando en internet",
  },
  {
    icon: Zap,
    title: "Entrega en 15 días",
    description: "Recibe tu página web lista y optimizada",
  },
  {
    icon: Sparkles,
    title: "Diseño profesional",
    description: "Plantillas modernas adaptadas a tu negocio",
  },
]

const included = [
  "Página web informativa completa",
  "Dominio .com.ve por 1 año",
  "Hosting y deploy incluido",
  "Diseño responsive (móvil y desktop)",
  "Formulario de contacto",
  "Integración con redes sociales",
  "Optimización SEO básica",
  "Soporte técnico inicial",
]

export function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
            Todo lo que necesitas para estar{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">online</span>
          </h2>
          <p className="text-pretty text-xl text-muted-foreground leading-relaxed">
            Páginas web informativas listas por $100 con dominio .com.ve incluido y deploy completo
          </p>
        </div>

        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mx-auto max-w-4xl border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl mb-3">¿Qué incluye el precio de $100?</CardTitle>
            <CardDescription className="text-lg">Todo lo necesario para tu presencia web profesional</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4 sm:grid-cols-2">
              {included.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
