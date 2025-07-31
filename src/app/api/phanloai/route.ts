// app/api/phanloai/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const phanloai = await prisma.phanloai.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(phanloai);
  } catch (error) {
    console.error("API /api/phanloai error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
