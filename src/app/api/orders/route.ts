import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type OrderItemInput = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("user")?.value;
    if (!cookie) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const username = decodeURIComponent(cookie);

    const orders = await prisma.order.findMany({
      where: { username },
      include: { items: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách đơn hàng:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const cookie = req.cookies.get("user")?.value;
    if (!cookie) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const username = decodeURIComponent(cookie);
    const body = await req.json();

    const {
      fullName,
      address,
      email,
      phone,
      paymentImageName,
      items,
    } = body as {
      fullName: string;
      address: string;
      email?: string;
      phone: string;
      paymentImageName?: string;
      items: OrderItemInput[];
    };

    if (!fullName || !address || !phone || !Array.isArray(items)) {
      return NextResponse.json({ error: "Thiếu dữ liệu đơn hàng" }, { status: 400 });
    }

    if (items.length === 0) {
      return NextResponse.json({ error: "Giỏ hàng trống" }, { status: 400 });
    }

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const order = await prisma.order.create({
      data: {
        username,
        fullName,
        address,
        email,
        phone,
        total,
        paymentImageName,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            imageUrl: item.imageUrl,
          })),
        },
      },
    });

    await prisma.cart.deleteMany({ where: { username } });

    return NextResponse.json({ message: "Tạo đơn hàng thành công", id: order.id });
  } catch (error) {
    console.error("Lỗi khi tạo đơn hàng:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
