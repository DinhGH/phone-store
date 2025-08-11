import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// GET - Lấy giỏ hàng theo username trong cookie
export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("user")?.value;
    if (!cookie) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const username = decodeURIComponent(cookie);

    const cartItems = await prisma.cart.findMany({
        where: { username },
        select: {
            id: true,
            name: true,
            price: true,
            quantity: true,
            imageUrl: true,
            productId: true,
        },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error("Lỗi khi lấy giỏ hàng:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE - Xoá sản phẩm trong giỏ hàng theo ID
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Thiếu ID sản phẩm" }, { status: 400 });
    }

    await prisma.cart.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Xoá thành công" });
  } catch (error) {
    console.error("Lỗi khi xoá sản phẩm:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Thêm sản phẩm vào giỏ
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, product } = body;

    if (!username || !product) {
      return NextResponse.json(
        { error: "Thiếu dữ liệu username hoặc product" },
        { status: 400 }
      );
    }

    console.log("Product nhận từ client:", product);

    // Kiểm tra user tồn tại chưa
    const userExists = await prisma.user.findUnique({
      where: { username },
    });

    if (!userExists) {
      return NextResponse.json(
        { error: "Người dùng không tồn tại" },
        { status: 404 }
      );
    }

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItem = await prisma.cart.findFirst({
      where: {
        username,
        productId: product.id,
      },
    });

    if (existingItem) {
      // Nếu có thì tăng số lượng
      await prisma.cart.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + 1 },
      });
    } else {
      // Nếu chưa có thì thêm mới với connect user
      await prisma.cart.create({
        data: {
          productId: product.id,
          name: product.name,
          price: Math.round(
                (1 - product.discount / 100) * product.original,
              ),
          quantity: 1,
          imageUrl: product.imageUrl,
          user: {
            connect: { username }, // kết nối với user qua username
          },
        },
      });
    }

    return NextResponse.json({ message: "Thêm vào giỏ thành công" });
  } catch (error) {
    console.error("Lỗi khi thêm vào giỏ:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
