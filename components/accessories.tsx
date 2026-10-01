const accessories = [
  {
    name: "Horma personalizada",
    description: "Ajuste perfecto y forma única",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965627/CR6_0165_flfs15.jpg",
  },
  {
    name: "Toquillas / bandas",
    description: "Cintas decorativas en tonos tierra",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965419/CR6_0208_cghsvf.jpg",
  },
  {
    name: "Plumas",
    description: "Plumas naturales artesanales",
    image: "/decorative-feather.jpg",
  },
  {
    name: "Listones",
    description: "Listones de seda y terciopelo",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965479/CR6_0047_ubblzu.jpg",
  },
  {
    name: "Charms metálicos",
    description: "Detalles en bronce y plata",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965336/CR6_0211_gounhy.jpg",
  },
  {
    name: "Grabado (pirografía)",
    description: "Personalización con fuego",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965513/CR6_0095_rgxwkr.jpg",
  },
  {
    name: "Sello especial",
    description: "Marca personalizada del evento",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965672/CR6_0261_yxffmy.jpg",
  },
  {
    name: "Caja o cubrepolvo",
    description: "Protección elegante para tu sombrero",
    image: "/hat-box-case.jpg",
  },
]

export function Accessories() {
  return (
    <section className="py-20 sm:py-32 bg-olive text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">Detalles que hacen cada pieza única.</h2>
          <p className="text-lg text-cream/80 leading-relaxed">
            Nuestros accesorios están inspirados en tonos tierra, raíces Yoreme y estética del norte de México.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item) => (
              <div
                key={item.name}
                className="group bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-xl overflow-hidden hover:bg-cream/20 transition-all hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-cream/5">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-cream/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
