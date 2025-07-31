// app/api/logos/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const logos = await prisma.logo.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(logos);
  } catch (error) {
    console.error("API /api/logos error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
