import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const cookieStore = cookies();
  const username = (await cookieStore).get("username")?.value;

  if (!username) {
    return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
  }

  const cartItemId = parseInt(params.id);
  if (isNaN(cartItemId)) {
    return NextResponse.json({ error: "ID không hợp lệ" }, { status: 400 });
  }

  try {
    // Kiểm tra item có thuộc về người dùng hay không
    const item = await prisma.cart.findUnique({
      where: { id: cartItemId },
    });

    if (!item) {
      return NextResponse.json({ error: "Không tìm thấy sản phẩm" }, { status: 404 });
    }

    if (item.username !== username) {
      return NextResponse.json({ error: "Không có quyền xóa sản phẩm này" }, { status: 403 });
    }

    await prisma.cart.delete({
      where: { id: cartItemId },
    });

    return NextResponse.json({ message: "Xóa thành công" });
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
