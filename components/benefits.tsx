import { Camera, Gift, Palette, Sparkles, Star, TrendingUp, Users } from "lucide-react"

const benefits = [
  { icon: Gift, text: "Regalo elegante, útil y memorable para cada invitado." },
  { icon: Star, text: "Activación visual que se vuelve parte de la fiesta." },
  { icon: Camera, text: "Genera fotos increíbles para redes sociales." },
  { icon: Users, text: "Entretenimiento interactivo sin complicaciones." },
  { icon: Palette, text: "Personalización artesanal en vivo." },
  { icon: TrendingUp, text: "Eleva la estética y el estilo de tu evento." },
  { icon: Sparkles, text: "Una experiencia distinta a cualquier otro servicio tradicional." },
]

export function Benefits() {
  return (
    <section className="py-20 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6">
            ¿Por qué tu evento necesita un Hat Bar?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 p-6 rounded-lg bg-sand/50 hover:bg-sand transition-colors"
            >
              <Icon className="w-6 h-6 text-warmBrown flex-shrink-0 mt-1" />
              <p className="text-olive/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
