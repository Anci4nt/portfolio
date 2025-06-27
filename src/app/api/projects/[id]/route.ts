import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(req: NextRequest, context: any) {
  const id = parseInt(context.params.id)
  if (isNaN(id)) {
    return new NextResponse('Invalid ID', { status: 400 })
  }

  try {
    await prisma.project.delete({ where: { id } })
    return new NextResponse(null, { status: 204 })
  } catch {
    return new NextResponse('Project not found', { status: 404 })
  }
}
