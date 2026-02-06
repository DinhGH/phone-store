"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Order } from "../types";

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Không thể tải đơn hàng.");
          if (res.status === 401) {
            router.push("/login");
          }
          return;
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Lỗi khi tải đơn hàng:", err);
        setError("Không thể tải đơn hàng.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  return (
    <div
      className="
        max-w-4xl
        mx-auto p-6
      "
    >
      <h1
        className="
          text-2xl font-bold
          mb-4
        "
      >
        📦 Đơn hàng của bạn
      </h1>

      {loading && <p>Đang tải...</p>}
      {error && !loading && (
        <p
          className="
            text-red-600
          "
        >
          {error}
        </p>
      )}

      {!loading && !error && orders.length === 0 && (
        <p
          className="
            text-gray-600
          "
        >
          Bạn chưa có đơn hàng nào.
        </p>
      )}

      <div
        className="
          space-y-4
        "
      >
        {orders.map((order) => (
          <div
            key={order.id}
            className="
              p-4
              bg-white
              rounded-xl
              shadow
              flex items-center justify-between
            "
          >
            <div>
              <p
                className="
                  font-semibold
                "
              >
                Mã đơn: #{order.id}
              </p>
              <p
                className="
                  text-sm text-gray-600
                "
              >
                Ngày tạo: {new Date(order.createdAt).toLocaleString("vi-VN")}
              </p>
              <p
                className="
                  text-sm text-gray-600
                "
              >
                Sản phẩm: {order.items.length}
              </p>
            </div>
            <div
              className="
                text-right
              "
            >
              <p
                className="
                  font-bold text-red-600
                "
              >
                {order.total.toLocaleString("vi-VN")}₫
              </p>
              <p
                className="
                  text-sm text-gray-500
                "
              >
                Trạng thái: {order.status}
              </p>
              <button
                onClick={() => router.push(`/orders/${order.id}`)}
                className="
                  mt-2
                  px-4 py-2
                  text-white
                  bg-blue-600
                  rounded-lg
                  hover:bg-blue-700 transition
                "
              >
                Xem hóa đơn
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
