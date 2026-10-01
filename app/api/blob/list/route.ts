import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result = await list()
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Blob no está configurado para este entorno.' }, { status: 503 })
  }
}
