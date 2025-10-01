import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué incluye el precio de $100?",
    answer:
      "El precio incluye tu página web informativa completa, dominio .com.ve por 1 año, hosting y deploy, diseño responsive, formulario de contacto, integración con redes sociales, optimización SEO básica y soporte técnico inicial.",
  },
  {
    question: "¿Cuánto tiempo tarda la entrega?",
    answer:
      "Tu página web estará lista y publicada en 15 días después de recibir toda la información necesaria (textos, imágenes, logo, etc.). Trabajamos con calidad y atención al detalle.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer:
      "Solo necesitas: 1) Información de tu negocio (nombre, descripción, servicios), 2) Logo e imágenes, 3) Datos de contacto (teléfono, email, redes sociales), 4) Preferencias de diseño. Nosotros nos encargamos del resto.",
  },
  {
    question: "¿Puedo hacer cambios después de la entrega?",
    answer:
      "Sí, incluimos una ronda de ajustes menores sin costo adicional. Para cambios mayores o actualizaciones continuas, ofrecemos planes de mantenimiento accesibles.",
  },
  {
    question: "¿El dominio .com.ve es mío?",
    answer:
      "Sí, el dominio se registra a tu nombre y es completamente tuyo. Incluimos el primer año de registro en el precio.",
  },
  {
    question: "¿La página es responsive?",
    answer:
      "Absolutamente. Todas nuestras páginas están optimizadas para verse perfectamente en computadoras, tablets y móviles.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-5xl font-bold md:text-6xl">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
          <p className="text-pretty text-xl text-muted-foreground leading-relaxed">
            Todo lo que necesitas saber sobre nuestro servicio
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/50 px-6 backdrop-blur-sm data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
