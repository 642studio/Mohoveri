import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Mis invitados hicieron fila toda la noche. Es el mejor detalle que pude agregar a mi boda.",
    name: "Mariela R.",
    role: "Novia",
  },
  {
    quote: "Todos se llevaron un sombrero y hasta mis tíos estaban felices.",
    name: "Sofía C.",
    role: "Quinceañera",
  },
  {
    quote: "Le dio un look increíble a la fiesta. 100% recomendado.",
    name: "Fernando V.",
    role: "Planner",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6">
            Lo que dicen quienes ya eligieron Mohoveri.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-cream rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warmBrown text-warmBrown" />
                ))}
              </div>
              <blockquote className="text-olive/80 leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</blockquote>
              <div>
                <p className="font-serif text-olive font-medium">{testimonial.name}</p>
                <p className="text-sm text-olive/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
