// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';

import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const existing = await prisma.user.findUnique({
    where: { username },
  });

  if (existing) {
    return NextResponse.json({ error: 'Tài khoản đã tồn tại' }, { status: 400 });
  }

  // 👉 Hash password trước khi lưu
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { username, password: hashedPassword, role: "user"},
  });

  return NextResponse.json({ message: 'Đăng ký thành công', user: { id: newUser.id, username: newUser.username } });
}
