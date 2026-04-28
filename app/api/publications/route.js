// app/api/publications/[id]/route.js
import { NextResponse } from 'next/server'
import { publications } from '@/lib/data'

export async function GET(request, { params }) {
  const { id } = await params  // ← await params

  const pub = publications.find(p => p.id === id)
  if (!pub) return NextResponse.json({ erreur: "Introuvable" }, { status: 404 })
  return NextResponse.json(pub)
}

export async function PUT(request, { params }) {
  const { id } = await params  // ← await params

  const body = await request.json()
  const index = publications.findIndex(p => p.id === id)
  if (index === -1) return NextResponse.json({ erreur: "Introuvable" }, { status: 404 })
  publications[index] = { ...publications[index], ...body }
  return NextResponse.json(publications[index])
}

export async function DELETE(request, { params }) {
  const { id } = await params  // ← await params

  const index = publications.findIndex(p => p.id === id)
  if (index === -1) return NextResponse.json({ erreur: "Introuvable" }, { status: 404 })
  publications.splice(index, 1)
  return NextResponse.json({ message: "Supprimé" })
}