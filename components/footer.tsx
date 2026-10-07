import Image from "next/image"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { site, whatsappUrl } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-[#343b10] text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/images/design-mode/Mohoveri%20Blanco.png"
              alt={site.name}
              width={140}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-cream/70">Hat Bar para bodas y eventos en Sonora y México.</p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Navegación</h3>
            <nav className="space-y-2">
              <a href="/#experiencia" className="block text-sm text-cream/70 hover:text-cream transition-colors">
                Experiencia
              </a>
              <a href="/#materiales" className="block text-sm text-cream/70 hover:text-cream transition-colors">
                Paquetes
              </a>
              <a href="/#galeria" className="block text-sm text-cream/70 hover:text-cream transition-colors">
                Galería
              </a>
              <a href="/#faq" className="block text-sm text-cream/70 hover:text-cream transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Contacto</h3>
            <div className="flex gap-4 mb-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors block">
              Aviso de privacidad
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8">
          <p className="text-center text-sm text-cream/60">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados. PWD by 642Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
