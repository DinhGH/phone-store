import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const cartItemId = parseInt(params.id);

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
