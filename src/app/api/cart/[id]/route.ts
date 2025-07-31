// app/api/cart/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: { id: string };
};

export async function DELETE(req: NextRequest, { params }: Context) {
  const cartItemId = parseInt(params.id); // ✅ Sử dụng destructured params trực tiếp

  if (isNaN(cartItemId)) {
    return NextResponse.json({ error: "ID không hợp lệ" }, { status: 400 });
  }

  try {
    const deletedItem = await prisma.cart.delete({
      where: { id: cartItemId },
    });

    return NextResponse.json({
      message: "Đã xoá sản phẩm khỏi giỏ hàng",
      deletedItem,
    });
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
