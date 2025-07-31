// app/api/products/[id]/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
     const { id } = await context.params; 

    const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

    const product = await prisma.product.findUnique({
      where: { id: parsedId },
      include: { detail: true },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
