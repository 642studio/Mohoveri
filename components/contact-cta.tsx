import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section id="contacto" className="py-20 sm:py-32 bg-olive text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">Hagamos de tu evento algo inolvidable.</h2>
        <p className="text-lg text-cream/80 leading-relaxed mb-8">
          Agenda una llamada y prepara tu fecha con nuestro equipo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto">
            <Button size="lg" className="bg-warmBrown hover:bg-warmBrown/90 text-cream font-serif text-base px-8">
              Agendar llamada
            </Button>
          </Link>
          <Link href="/contacto">
            <Button
              size="lg"
              variant="outline"
              className="bg-warmBrown hover:bg-warmBrown/90 text-cream font-serif text-base px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp directo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
