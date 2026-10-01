"use client"

import { useRef, useState } from "react"
import { Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Artesanía en vivo",
    description:
      "Observa cómo nuestros artesanos especializados transforman cada sombrero en una pieza única durante tu evento.",
  },
  {
    title: "Materiales premium",
    description:
      "Trabajamos con fieltros y telas de la más alta calidad, inspirados en la estética del norte de México.",
  },
  {
    title: "Experiencia memorable",
    description: "Cada invitado se lleva a casa no solo un sombrero, sino un recuerdo tangible de tu evento especial.",
  },
]

export function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-olive to-olive/95 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-warmBrown via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-cream via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <span className="text-warmBrown font-serif italic text-lg inline-flex items-center gap-2 bg-warmBrown/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Descubre nuestra esencia
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-cream mt-6 mb-6 leading-tight">
                Conoce más de Mohoveri
              </h2>
            </div>

            <p className="text-cream/90 text-lg leading-relaxed">
              Mohoveri es más que un servicio de personalización de sombreros. Es una experiencia que fusiona la
              tradición artesanal Yoreme con la elegancia contemporánea.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-warmBrown to-warmBrown/70 mt-2 flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform" />
                  <div>
                    <h3 className="font-serif text-xl text-cream mb-2">{feature.title}</h3>
                    <p className="text-cream/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-warmBrown/20">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal z-10">
                  <div className="text-cream">Cargando video...</div>
                </div>
              )}

              <video
                ref={videoRef}
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                className="w-full aspect-video object-cover"
                onClick={togglePlay}
                onLoadedData={() => setIsLoading(false)}
              >
                <source
                  src="https://awummiof6ucmslqu.public.blob.vercel-storage.com/Mohoveri%20horizontal.mp4"
                  type="video/mp4"
                />
              </video>

              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
                onClick={togglePlay}
              >
                <button
                  className="w-20 h-20 rounded-full bg-warmBrown/90 hover:bg-warmBrown flex items-center justify-center transition-transform hover:scale-110"
                  aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-cream" />
                  ) : (
                    <Play className="w-8 h-8 text-cream ml-1" />
                  )}
                </button>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="bg-black/50 hover:bg-black/70 text-cream rounded-full"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            <p className="text-cream/70 text-sm text-center italic">
              Haz clic para reproducir y descubrir la experiencia Mohoveri
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
