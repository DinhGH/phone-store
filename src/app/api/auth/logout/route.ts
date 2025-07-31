import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).delete("user");
  (await cookies()).delete("admin");
  return NextResponse.json({ message: "Đã đăng xuất" });
}
