import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl("Hola, me gustaría recibir información de Mohoveri.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-warmBrown text-cream flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
