# Mohoveri

Reconstrucción inicial del deployment de producción de Mohoveri.

## Evidencia recuperada

- Next.js 16.0.10, React 19.2.0, Node.js 24.
- Rutas originales: `/`, `/contacto` y `/api/blob/list`.
- Vercel Blob y Vercel Web Analytics estaban incluidos en el build original.

El código fuente, los textos, el diseño exacto y los activos compilados no se pueden recuperar de forma fiable desde un deployment. Esta base reproduce la arquitectura verificada y deja la ruta Blob preparada. Para listar activos en producción, conecta el almacenamiento Blob original a este proyecto mediante la configuración de Vercel.
