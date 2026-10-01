const images = [
  {
    src: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965018/_A739733-2_hg5ris.jpg",
    alt: "Personalización de sombrero en evento",
  },
  {
    src: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965064/_A739849_gflzfn.jpg",
    alt: "Hat Bar Mohoveri en acción",
  },
  {
    src: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965108/_A739620_cssrnl.jpg",
    alt: "Invitado con sombrero personalizado",
  },
  {
    src: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965148/_A739807_tvwj0y.jpg",
    alt: "Grabado artesanal en vivo",
  },
  {
    src: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965215/_A739723_o8hh5c.jpg",
    alt: "Colección de sombreros personalizados",
  },
  {
    src: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764965177/_A739611_xhzrx5.jpg",
    alt: "Selección de sombreros",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-20 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6">Inspírate con Mohoveri en acción.</h2>
          <p className="text-lg text-olive/80 leading-relaxed">
            Aquí puedes ver momentos reales de nuestros Hat Bars, personalizaciones y detalles que hacen especial cada
            evento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.src}
              className="aspect-[4/3] rounded-lg overflow-hidden bg-sand hover:opacity-90 transition-opacity"
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
