import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })

export const metadata: Metadata = {
  title: "MOHOVERI Hat Atelier - Hat Bar Premium para Eventos",
  description:
    "El Hat Bar premium inspirado en raíces Yoreme, donde tus invitados crean su propio sombrero personalizándolo en vivo. Perfecto para bodas, XV años y eventos especiales.",
  openGraph: {
    title: "MOHOVERI Hat Atelier - Hat Bar Premium para Eventos",
    description:
      "El Hat Bar premium inspirado en raíces Yoreme, donde tus invitados crean su propio sombrero personalizándolo en vivo.",
    siteName: "MOHOVERI Hat Atelier",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://mohovery.vercel.app/images/mohoveri-20blanco.png",
        width: 1200,
        height: 630,
        alt: "MOHOVERI Hat Atelier - Sombreros Premium para Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOHOVERI Hat Atelier - Hat Bar Premium para Eventos",
    description:
      "El Hat Bar premium inspirado en raíces Yoreme, donde tus invitados crean su propio sombrero personalizándolo en vivo.",
    images: ["https://mohovery.vercel.app/images/mohoveri-20blanco.png"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
