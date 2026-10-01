# Mohoveri — Hat Bar Premium

Sitio web de [mohoveri.com](https://www.mohoveri.com). Reconstruido a partir del sitio en producción (originalmente generado con v0.app).

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- Tailwind CSS v4 + `tw-animate-css`
- shadcn/ui (Radix: Accordion, Select, Label)
- lucide-react, @vercel/analytics

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Estructura

- `app/page.tsx` — Home (todas las secciones en orden)
- `app/contacto/page.tsx` — Página de contacto
- `app/globals.css` — Tokens de marca (`olive`, `warmBrown`, `cream`, `sand`) y animaciones
- `components/` — Una sección por archivo (`hero`, `experience`, `about-video`, `how-it-works`, `benefits`, `accessories`, `materials-section`, `price-calculator`, `gallery`, `testimonials`, `faq`, `contact-cta`, `footer`, `navbar`, `contact-form`)
- `components/ui/` — Componentes shadcn

Imágenes externas: Cloudinary (`res.cloudinary.com/djmgbkarg`). Video y catálogo PDF: Vercel Blob.
