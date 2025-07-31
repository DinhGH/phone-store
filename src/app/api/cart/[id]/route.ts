import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const cartItemId = parseInt(context.params.id);

  if (isNaN(cartItemId)) {
    return NextResponse.json(
      { error: "Invalid ID" },
      { status: 400 }
    );
  }

  try {
    await prisma.cart.delete({
      where: { id: cartItemId },
    });

    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return NextResponse.json(
      { error: "Failed to delete cart item" },
      { status: 500 }
    );
  }
}
