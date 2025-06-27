import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const data = await req.json();
  const { title, description, image, link } = data;

  if (!title || !description || !image || !link) {
    return new NextResponse('Missing fields', { status: 400 });
  }

  const project = await prisma.project.create({
    data: { title, description, image, link }
  });

  return NextResponse.json(project);
}
