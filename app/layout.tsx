import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './styles.css'

export const metadata: Metadata = {
  title: 'Mohoveri',
  description: 'Mohoveri',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}<Analytics /></body></html>
}
