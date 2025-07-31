/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

// ❌ Sai: export async function GET(req, { params }: { params: { id: string } }) { ... }

export async function GET(req: NextRequest, context: any) {
  const id = context.params?.id;

  if (!id) {
    return NextResponse.json({ error: "Thiếu ID" }, { status: 400 });
  }

  try {
    // Code xử lý logic lấy sản phẩm ở đây
    return NextResponse.json({ message: "Lấy sản phẩm thành công", id });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
