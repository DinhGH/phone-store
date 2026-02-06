"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import type { Order } from "../../types";

export default function OrderDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders/${params.id}`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Không thể tải hóa đơn.");
          if (res.status === 401) {
            router.push("/login");
          }
          return;
        }

        const data = await res.json();
        setOrder(data);
      } catch (err) {
        console.error("Lỗi khi tải hóa đơn:", err);
        setError("Không thể tải hóa đơn.");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchOrder();
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">Đang tải...</div>
    );
  }

  if (error || !order) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-red-600">{error || "Không tìm thấy hóa đơn."}</p>
      </div>
    );
  }

  return (
    <div
      className="
        max-w-4xl
        mx-auto p-6
      "
    >
      <div
        className="
          mb-6
          p-4
          bg-white
          rounded-xl
          shadow
        "
      >
        <h1
          className="
            text-2xl font-bold
            mb-2
          "
        >
          🧾 Hóa đơn #{order.id}
        </h1>
        <p className="text-sm text-gray-600">
          Ngày tạo: {new Date(order.createdAt).toLocaleString("vi-VN")}
        </p>
        <p className="text-sm text-gray-600">
          Trạng thái: {order.status}
        </p>
        <div className="mt-4 text-sm">
          <p>Khách hàng: {order.fullName}</p>
          <p>Địa chỉ: {order.address}</p>
          <p>SĐT: {order.phone}</p>
          {order.email && <p>Email: {order.email}</p>}
          {order.paymentImageName && (
            <p>Ảnh thanh toán: {order.paymentImageName}</p>
          )}
        </div>
      </div>

      <div
        className="
          space-y-4
        "
      >
        {order.items.map((item) => (
          <div
            key={item.id}
            className="
              flex
              p-4
              bg-white
              rounded-xl
              shadow
              items-center gap-4
            "
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={1000}
              height={1000}
              className="
                object-cover
                w-20 h-20
                rounded-lg
              "
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">
                Giá: {item.price.toLocaleString("vi-VN")}₫
              </p>
              <p className="text-sm text-gray-500">
                Số lượng: {item.quantity}
              </p>
            </div>
            <p className="text-red-600 font-bold">
              {(item.price * item.quantity).toLocaleString("vi-VN")}₫
            </p>
          </div>
        ))}
      </div>

      <div
        className="
          mt-6
          p-4
          text-right
          bg-gray-100
          rounded-lg
          font-bold text-lg
        "
      >
        Tổng cộng: {order.total.toLocaleString("vi-VN")}₫
      </div>

      <div
        className="
          mt-6
          flex
          gap-3
          justify-end
        "
      >
        <button
          onClick={() => router.push("/orders")}
          className="
            px-5 py-2
            text-white
            bg-blue-600
            rounded-lg
            hover:bg-blue-700 transition
          "
        >
          Xem tất cả hóa đơn
        </button>
        <button
          onClick={() => router.push("/")}
          className="
            px-5 py-2
            text-white
            bg-gray-600
            rounded-lg
            hover:bg-gray-700 transition
          "
        >
          Về trang chủ
        </button>
      </div>
    </div>
  );
}
