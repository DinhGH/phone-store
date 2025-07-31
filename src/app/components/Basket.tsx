"use client";

import { useEffect, useRef, useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export default function Basket({
  setShowBaket,
  setItemCount,
}: {
  setShowBaket: (value: boolean) => void;
  setItemCount: (value: number) => void;
}) {
  const basketRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Lỗi từ server:", data.error);
        return;
      }

      setCartItems(data);
      setItemCount(data.length);
    } catch (error) {
      console.error("Lỗi khi tải giỏ hàng:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        basketRef.current &&
        !basketRef.current.contains(event.target as Node)
      ) {
        setShowBaket(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowBaket]);

  const handleRemove = async (id: number) => {
    setLoading(true);
    try {
      await fetch(`/api/cart/${id}`, {
        method: "DELETE",
      });
      setCartItems((prev) => {
        const newCart = prev.filter((item) => item.id !== id);
        setItemCount(newCart.length);
        return newCart;
      });
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      ref={basketRef}
      className="
        overflow-y-scroll
        max-w-4xl max-h-[540px]
        mx-auto p-6
        bg-white
        rounded-xl
        shadow-xl
      "
    >
      <h1
        className="
          mb-6
          text-2xl font-bold text-black
        "
      >
        🛒 Giỏ hàng của bạn
      </h1>

      {cartItems.length === 0 ? (
        <p
          className="
            text-gray-500
          "
        >
          Giỏ hàng trống.
        </p>
      ) : (
        <div
          className="
            space-y-4
          "
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="
                flex
                p-4
                bg-white
                rounded-xl
                items-center gap-4 shadow
              "
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={1000}
                width={1000}
                className="
                  object-cover
                  w-20 h-20
                  rounded-lg
                "
              />
              <div
                className="
                  flex-1
                "
              >
                <h2
                  className="
                    font-semibold
                  "
                >
                  {item.name}
                </h2>
                <p
                  className="
                    text-sm text-gray-500
                  "
                >
                  Giá: {item.price.toLocaleString()} đ
                </p>
                <p
                  className="
                    text-sm text-gray-500
                  "
                >
                  Số lượng: {item.quantity}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                disabled={loading}
                className="
                  text-red-500
                  hover:text-red-700
                "
              >
                <Trash2
                  className="
                    w-5 h-5
                  "
                />
              </button>
            </div>
          ))}

          <div
            className="
              flex
              mt-6
              justify-between items-center
            "
          >
            <p
              className="
                text-lg font-bold
              "
            >
              Tổng cộng: {getTotal().toLocaleString()} đ
            </p>
            <button
              className="
                px-6 py-2
                text-white
                bg-red-300
                rounded-xl
                hover:bg-red-500 transition
              "
            >
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
