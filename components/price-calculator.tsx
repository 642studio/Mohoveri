"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calculator, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type MaterialPrice = {
  material: string
  price30to50: number | null
  price51to99: number | null
  price100plus: number | null
}

const pricingData: MaterialPrice[] = [
  { material: "Lona", price30to50: null, price51to99: 290, price100plus: 250 },
  { material: "Gamuza", price30to50: 390, price51to99: 350, price100plus: 330 },
  { material: "Palma Fina", price30to50: 450, price51to99: 410, price100plus: 380 },
  { material: "Paja", price30to50: 475, price51to99: 430, price100plus: 390 },
  { material: "Vini-piel", price30to50: 500, price51to99: 475, price100plus: 450 },
  { material: "Lana", price30to50: 1100, price51to99: 1000, price100plus: 950 },
]

export function PriceCalculator() {
  const [material, setMaterial] = useState("")
  const [quantity, setQuantity] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)
  const [unitPrice, setUnitPrice] = useState(0)
  const [deposit, setDeposit] = useState(0)

  useEffect(() => {
    if (material && quantity) {
      const selectedMaterial = pricingData.find((m) => m.material === material)
      const qty = Number.parseInt(quantity)

      if (selectedMaterial) {
        let price = 0

        if (qty >= 30 && qty <= 50 && selectedMaterial.price30to50) {
          price = selectedMaterial.price30to50
        } else if (qty >= 51 && qty <= 99) {
          price = selectedMaterial.price51to99 ?? 0
        } else if (qty >= 100) {
          price = selectedMaterial.price100plus ?? 0
        }

        if (price > 0) {
          const total = price * qty
          setUnitPrice(price)
          setTotalPrice(total)
          setDeposit(total * 0.3)
        } else {
          setUnitPrice(0)
          setTotalPrice(0)
          setDeposit(0)
        }
      }
    }
  }, [material, quantity])

  const availableMaterials = quantity
    ? pricingData.filter((m) => {
        const qty = Number.parseInt(quantity)
        if (qty >= 30 && qty <= 50) return m.price30to50 !== null
        if (qty >= 51 && qty <= 99) return m.price51to99 !== null
        return qty >= 100 && m.price100plus !== null
      })
    : pricingData

  return (
    <section
      id="calculadora"
      className="relative py-20 sm:py-32 bg-gradient-to-br from-sand via-cream to-sand overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-warmBrown rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-olive rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-warmBrown/10 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-warmBrown" />
            <span className="text-warmBrown font-serif text-sm">Calcula tu inversión</span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Calculadora de precios
          </h2>
          <p className="text-lg text-olive/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Selecciona el material y la cantidad de sombreros para obtener una cotización instantánea.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-warmBrown/10 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3 group">
                <Label htmlFor="quantity" className="text-olive font-serif text-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-warmBrown" />
                  Cantidad de sombreros
                </Label>
                <Select value={quantity} onValueChange={setQuantity}>
                  <SelectTrigger
                    id="quantity"
                    className="h-14 border-2 border-olive/20 hover:border-warmBrown/40 transition-all rounded-xl bg-white shadow-sm"
                  >
                    <SelectValue placeholder="Selecciona cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30-50 piezas</SelectItem>
                    <SelectItem value="51">51-99 piezas</SelectItem>
                    <SelectItem value="100">100+ piezas</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-olive/60">Cantidad mínima: 30 sombreros</p>
              </div>

              <div className="space-y-3 group">
                <Label htmlFor="material" className="text-olive font-serif text-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-warmBrown" />
                  Tipo de material
                </Label>
                <Select value={material} onValueChange={setMaterial} disabled={!quantity}>
                  <SelectTrigger
                    id="material"
                    className="h-14 border-2 border-olive/20 hover:border-warmBrown/40 transition-all rounded-xl bg-white shadow-sm disabled:opacity-50"
                  >
                    <SelectValue placeholder="Selecciona material" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableMaterials.map((m) => (
                      <SelectItem key={m.material} value={m.material}>
                        {m.material}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {!quantity && <p className="text-xs text-olive/60">Primero selecciona la cantidad</p>}
              </div>
            </div>

            {totalPrice > 0 && (
              <div className="space-y-6 pt-8 border-t-2 border-warmBrown/10 animate-fade-in">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-olive/5 to-olive/10 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg">
                    <p className="text-sm text-olive/60 font-serif mb-2">Precio unitario</p>
                    <p className="text-4xl font-serif text-olive font-bold">${unitPrice}</p>
                  </div>
                  <div className="bg-gradient-to-br from-olive/5 to-olive/10 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg">
                    <p className="text-sm text-olive/60 font-serif mb-2">Total</p>
                    <p className="text-4xl font-serif text-olive font-bold">${totalPrice.toLocaleString()}</p>
                  </div>
                  <div className="bg-gradient-to-br from-warmBrown/10 to-warmBrown/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform shadow-lg border-2 border-warmBrown/20">
                    <p className="text-sm text-warmBrown/80 font-serif mb-2">Anticipo 30%</p>
                    <p className="text-4xl font-serif text-warmBrown font-bold">${deposit.toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-olive/5 via-warmBrown/5 to-olive/5 rounded-2xl p-6 border border-olive/10">
                  <p className="text-sm text-olive/80 leading-relaxed">
                    <strong className="font-serif text-base text-olive">Incluye:</strong> Barra completa montada,
                    personalización en vivo, 2 artesanos especializados, grabado básico. Se requiere el 30% de anticipo
                    para reservar tu fecha.
                  </p>
                </div>

                <div className="text-center">
                  <Link href="/contacto">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-warmBrown to-warmBrown/90 hover:from-warmBrown/90 hover:to-warmBrown text-cream font-serif text-base px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                    >
                      Solicitar cotización formal
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {!totalPrice && (
              <div className="text-center py-12 animate-pulse">
                <Calculator className="w-16 h-16 text-olive/20 mx-auto mb-4" />
                <p className="text-olive/60 font-serif text-lg">
                  Selecciona la cantidad y el material para calcular el precio
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-olive/60">
              Los precios no incluyen viáticos. Contáctanos para una cotización personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
