// app/api/publications/[id]/commentaires/route.js
import { NextResponse } from 'next/server'
import { commentaires } from '@/lib/data'

export async function GET(request, { params }) {
  const { id } = await params  // ← await params

  const liste = commentaires.filter(c => String(c.publicationId) === String(id))
  return NextResponse.json({ commentaires: liste })
}

export async function POST(request, { params }) {
  const { id } = await params  // ← await params

  const body = await request.json()
  const nouveauCommentaire = {
    id: String(commentaires.length + 1),
    publicationId: id,
    datePublication: new Date().toISOString().split('T')[0],
    ...body
  }
  commentaires.push(nouveauCommentaire)
  return NextResponse.json(nouveauCommentaire, { status: 201 })
}