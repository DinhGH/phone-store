// api/cart/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, product } = body;

  if (!username || !product) {
    return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
  }

  try {
    const existingItem = await prisma.cart.findFirst({
      where: { username, productId: product.id },
    });

    if (existingItem) {
      await prisma.cart.update({
        where: { id: existingItem.id },
        data: {
          quantity: { increment: 1 },
        },
      });
    } else {
      await prisma.cart.create({
        data: {
          username,
          productId: product.id,
          name: product.name,
          price: product.original,
          quantity: 1,
          imageUrl: product.imageUrl,
        },
      });
    }

    return NextResponse.json({ message: "Đã thêm vào giỏ" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// api/cart/Router.ts 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const username = cookieStore.get("user")?.value;

  if (!username) {
    return NextResponse.json({ error: "Thiếu username" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        cart: true, 
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Không tìm thấy user" }, { status: 404 });
    }

    return NextResponse.json(user.cart);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
