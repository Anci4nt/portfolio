import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) return new NextResponse('Invalid ID', { status: 400 });

  try {
    await prisma.project.delete({ where: { id } });
    return new NextResponse(null, { status: 204 }); 
  } catch (error) {
    return new NextResponse('Project not found', { status: 404 });
  }
}
