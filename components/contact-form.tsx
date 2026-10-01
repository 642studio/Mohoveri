"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    evento: "",
    fecha: "",
    invitados: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2 className="font-serif text-3xl text-foreground mb-6">Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="bg-sand border-warmBrown/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-sand border-warmBrown/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="bg-sand border-warmBrown/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="evento">Tipo de evento *</Label>
          <select
            id="evento"
            name="evento"
            value={formData.evento}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-sand border border-warmBrown/20 rounded-md text-foreground"
          >
            <option value="">Selecciona una opción</option>
            <option value="boda">Boda</option>
            <option value="quinceanera">Quinceañera</option>
            <option value="corporativo">Evento corporativo</option>
            <option value="cumpleanos">Cumpleaños</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fecha">Fecha del evento</Label>
            <Input
              id="fecha"
              name="fecha"
              type="date"
              value={formData.fecha}
              onChange={handleChange}
              className="bg-sand border-warmBrown/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="invitados">Número de invitados</Label>
            <Input
              id="invitados"
              name="invitados"
              type="number"
              value={formData.invitados}
              onChange={handleChange}
              placeholder="Aprox."
              className="bg-sand border-warmBrown/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje">Cuéntanos sobre tu evento</Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={5}
            placeholder="Describe tu visión, necesidades especiales, o cualquier pregunta que tengas..."
            className="bg-sand border-warmBrown/20 resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-warmBrown hover:bg-warmBrown/90 text-cream font-serif text-lg py-6"
        >
          Enviar mensaje
        </Button>
      </form>
    </div>
  )
}
