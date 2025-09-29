import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image src="/logo.png" alt="Simplifica.ve" width={44} height={44} className="h-11 w-11" />
          <span className="text-xl font-bold">Simplifica.ve</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#servicios"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Servicios
          </Link>
          <Link
            href="#ejemplos"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ejemplos
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link href="#contacto">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
              Contactar
            </Button>
          </Link>
        </nav>

        <Link href="#contacto" className="md:hidden">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
            Contactar
          </Button>
        </Link>
      </div>
    </header>
  )
}
