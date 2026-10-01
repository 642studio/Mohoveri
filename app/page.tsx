import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <nav><Link className="brand" href="/">mohoveri</Link><Link href="/contacto">Contacto</Link></nav>
      <section className="hero">
        <p className="eyebrow">MOHOVERI</p>
        <h1>Una presencia digital, reconstruida para avanzar.</h1>
        <p className="lede">Este sitio conserva la estructura publicada de Mohoveri y queda listo para incorporar sus contenidos y archivos originales.</p>
        <Link className="button" href="/contacto">Ponte en contacto</Link>
      </section>
      <section className="grid" aria-label="Información">
        <article><h2>Proyecto</h2><p>Aplicación Next.js con rutas estáticas y almacenamiento de archivos en Vercel Blob.</p></article>
        <article><h2>Contenido</h2><p>La galería puede volver a conectarse a los activos que se conserven en el almacenamiento del proyecto.</p></article>
        <article><h2>Contacto</h2><p>Consulta la página de contacto para continuar la reconstrucción editorial y visual.</p></article>
      </section>
    </main>
  )
}
