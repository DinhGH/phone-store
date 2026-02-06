import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const cookie = req.cookies.get("user")?.value;
    if (!cookie) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const username = decodeURIComponent(cookie);
    const { id } = await context.params;
    const orderId = Number(id);

    if (!orderId || Number.isNaN(orderId)) {
      return NextResponse.json({ error: "ID đơn hàng không hợp lệ" }, { status: 400 });
    }

    const order = await prisma.order.findFirst({
      where: { id: orderId, username },
      include: { items: true },
    });

    if (!order) {
      return NextResponse.json({ error: "Không tìm thấy đơn hàng" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Lỗi khi lấy đơn hàng:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
