const steps = [
  {
    number: "01",
    title: "Montaje del Hat Bar",
    description: "Montamos una barra elegante con sombreros, accesorios y herramientas.",
  },
  {
    number: "02",
    title: "Selección del sombrero",
    description: "Invitados eligen su estilo favorito.",
  },
  {
    number: "03",
    title: "Opciones de accesorios",
    description: "Plumas, listones, botones, charms, cuero y más.",
  },
  {
    number: "04",
    title: "Grabado y personalización en vivo",
    description: "Fuego, horma y detalles artesanales hechos frente a tus invitados.",
  },
  {
    number: "05",
    title: "Entrega premium",
    description: "El invitado se lo lleva puesto y personalizado a su estilo.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6">Así funciona durante tu evento.</h2>
          <p className="text-lg text-olive/80 leading-relaxed">
            Nuestro proceso está diseñado para que tú disfrutes mientras nosotros nos encargamos del show.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <span className="font-serif text-5xl text-warmBrown/30 leading-none">{step.number}</span>
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-xl text-olive mb-2">{step.title}</h3>
                  <p className="text-olive/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
