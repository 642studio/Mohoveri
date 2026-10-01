"use client"

import { useState } from "react"
import "./materials-section.css"

type MenuItem = {
  text: string
  image: string
  description: string
}

function FlowingMenu({ items }: { items: MenuItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, index) => (
          <div
            key={index}
            className={`menu__item ${expandedIndex === index ? "expanded" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="menu__item-link"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <span>{item.text}</span>
            </div>

            <div className={`marquee ${hoveredIndex === index ? "active" : ""}`}>
              <div className="marquee__inner-wrap">
                <div className="marquee__inner" aria-hidden="true">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <MarqueeChunk key={i} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className={`expanded-content ${expandedIndex === index ? "show" : ""}`}>
              <div className="expanded-inner">
                <button
                  className="expanded-close"
                  onClick={(e) => {
                    e.stopPropagation()
                    setExpandedIndex(null)
                  }}
                >
                  ✕
                </button>
                <div className="expanded-grid">
                  <img src={item.image || "/placeholder.svg"} alt={item.text} className="expanded-img" />
                  <div className="expanded-text">
                    <h3>{item.text}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}

function MarqueeChunk({ item }: { item: MenuItem }) {
  return (
    <>
      <span>{item.description}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${item.image})` }} />
    </>
  )
}

const materials: MenuItem[] = [
  {
    text: "Dubetina",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764962940/CR6_0118_2_s82aj3.jpg",
    description: "Material ligero y versátil, perfecto para eventos casuales - Disponible desde 51 piezas",
  },
  {
    text: "Lona",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764963014/CR6_0107_1_wucmcu.jpg",
    description: "Resistente y duradero, ideal para exteriores - Disponible desde 51 piezas",
  },
  {
    text: "Gamuza",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764963160/CR6_0251_1_qhbttx.jpg",
    description: "Suave y elegante, perfecto para eventos formales - Desde 30 piezas",
  },
  {
    text: "Palma Fina",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764963202/CR6_0101_fqb5qr.jpg",
    description: "Tejido artesanal de palma premium, textura refinada - Desde 30 piezas",
  },
  {
    text: "Paja",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764963611/CR6_0090_1_qxncsw.jpg",
    description: "Tradicional y transpirable, estilo ranchero auténtico - Desde 30 piezas",
  },
  {
    text: "Vini-piel",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764963344/CR6_0156_m3xn6a.jpg",
    description: "Acabado premium tipo piel, resistente al agua - Desde 30 piezas",
  },
  {
    text: "Lana",
    image: "https://res.cloudinary.com/djmgbkarg/image/upload/v1764963554/CR6_0277_1_b9r0ss.jpg",
    description: "Lana de alta calidad, lujo y calidez inigualables - Desde 30 piezas",
  },
]

export function MaterialsSection() {
  return (
    <section className="relative" style={{ height: "600px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10" />
      <FlowingMenu items={materials} />
    </section>
  )
}
