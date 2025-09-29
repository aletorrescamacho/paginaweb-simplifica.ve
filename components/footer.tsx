import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Simplifica.ve" width={36} height={36} className="h-9 w-9" />
            <span className="text-lg font-bold">Simplifica.ve</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <Link
              href="#servicios"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
            </Link>
            <Link
              href="#ejemplos"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Ejemplos
            </Link>
            <Link href="#faq" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
            <Link
              href="#contacto"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">© 2025 Simplifica.ve. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
