import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers"; // 👈 thêm dòng này

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return NextResponse.json({ error: "Sai tài khoản hoặc mật khẩu" }, { status: 401 });
  }

  const isCorrect = await bcrypt.compare(password, user.password);
  if (!isCorrect) {
    return NextResponse.json({ error: "Sai tài khoản hoặc mật khẩu" }, { status: 401 });
  }

if (user.role === "admin") {
  (await cookies()).set("admin", user.username, {
    path: "/admin",          
    maxAge: 60 * 10,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
} else {
  (await cookies()).set("user", user.username, {
    path: "/",               
    maxAge: 60 * 30,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}


 return NextResponse.json({
  message: "Đăng nhập thành công",
  user: {
    id: user.id,
    username: user.username,
    role: user.role,
  },
});

}
