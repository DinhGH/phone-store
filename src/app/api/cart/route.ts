// /app/api/cart/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const username = (await cookieStore).get("username")?.value;

  if (!username) {
    return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
  }

  try {
    const cartItems = await prisma.cart.findMany({
      where: { username },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error("Lỗi khi lấy giỏ hàng:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const username = (await cookieStore).get("username")?.value;

  if (!username) {
    return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { productId, name, price, quantity, imageUrl } = body;

    if (!productId || !name || !price || !quantity || !imageUrl) {
      return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
    }

    const newItem = await prisma.cart.create({
      data: { username, productId, name, price, quantity, imageUrl },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Lỗi khi thêm vào giỏ hàng:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
