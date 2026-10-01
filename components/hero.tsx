import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        >
          <source
            src="https://awummiof6ucmslqu.public.blob.vercel-storage.com/Mohoveri%20horizontal.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Navbar />

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight text-balance">
              Haz de tu evento una experiencia inolvidable.
            </h1>
            <p className="font-serif text-lg sm:text-xl text-cream/90 italic">Not just a hat, a statement piece.</p>
            <p className="text-base sm:text-lg text-cream/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              El Hat Bar premium inspirado en raíces Yoreme, donde tus invitados crean su propio sombrero
              personalizándolo en vivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-warmBrown hover:bg-warmBrown/90 text-cream font-serif text-base px-8 w-full sm:w-auto"
                >
                  Agendar una llamada
                </Button>
              </Link>
              <a
                href="https://awummiof6ucmslqu.public.blob.vercel-storage.com/mohoveri2.pdf.pdf"
                download="Mohoveri-Catalogo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream text-cream hover:bg-cream/10 font-serif text-base px-8 bg-transparent flex items-center justify-center gap-2 w-full"
                >
                  <Download className="w-5 h-5" />
                  Descargar catálogo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  )
}
