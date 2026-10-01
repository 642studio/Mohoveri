import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative bg-olive text-cream pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">Hablemos de tu evento</h1>
          <p className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto text-pretty">
            Estamos listos para crear una experiencia única e inolvidable para tus invitados. Cuéntanos sobre tu evento
            y te ayudaremos a personalizarlo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">Información de contacto</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Estamos aquí para responder todas tus preguntas y ayudarte a planear la experiencia Hat Bar perfecta
                para tu evento.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-warmBrown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:contacto@mohoveri.com"
                    className="text-muted-foreground hover:text-warmBrown transition-colors"
                  >
                    contacto@mohoveri.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-warmBrown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Teléfono</h3>
                  <a href="tel:+526441234567" className="text-muted-foreground hover:text-warmBrown transition-colors">
                    +52 (644) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-warmBrown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Hermosillo, Sonora
                    <br />
                    Servicio disponible en todo el noroeste de México
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-warmBrown" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábado: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-xl text-foreground mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/mohoveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-sand flex items-center justify-center hover:bg-warmBrown hover:text-cream transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/mohoveri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-sand flex items-center justify-center hover:bg-warmBrown hover:text-cream transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-sand rounded-lg">
              <h3 className="font-serif text-xl text-foreground mb-3">¿Necesitas cotización?</h3>
              <p className="text-muted-foreground mb-4">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas con una cotización
                personalizada.
              </p>
              <p className="text-sm text-muted-foreground">
                También puedes escribirnos directamente por WhatsApp para una respuesta más rápida.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
