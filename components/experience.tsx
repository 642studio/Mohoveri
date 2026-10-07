import { Check } from "lucide-react"

const steps = [
  {
    title: "Elegir",
    description: "Tus invitados seleccionan su sombrero favorito entre modelos premium.",
  },
  {
    title: "Personalizar",
    description: "Agregan plumas, toquillas, listones, charms, grabado y horma en vivo.",
  },
  {
    title: "Crear un recuerdo",
    description: "Cada sombrero se convierte en una pieza única, hecha a su estilo.",
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6">
            Una experiencia que transforma tu evento.
          </h2>
          <p className="text-lg text-olive/80 leading-relaxed">
            El Hat Bar de Mohoveri es una experiencia interactiva donde cada invitado elige, diseña y se lleva un sombrero
            único. No es solo un detalle: es un momento especial que se convierte en recuerdo para toda la vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warmBrown/10 mb-6">
                <Check className="w-8 h-8 text-warmBrown" />
              </div>
              <h3 className="font-serif text-2xl text-olive mb-4">{step.title}</h3>
              <p className="text-olive/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
