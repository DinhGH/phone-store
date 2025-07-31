"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Log from "./Log";

type Product = {
  id: number;
  name: string;
  original: number;
  discount: number;
  smemberDiscount: number;
  sstudentDiscount: number;
  imageUrl: string;
  inch: string;
  capacity: string;
  rating: number;
  brand?: string;
  color?: string;
  chip?: string;
  camera?: string;
  battery?: string;
};

type LogType = {
  title: string;
  message: string;
  status: boolean;
};

export default function PhoneDetailModal({
  product,
  open,
  setOpen,
  log,
  setLog,
  setItemCount,
}: {
  product: Product;
  open: boolean;
  setOpen: (open: boolean) => void;
  log: LogType | null;
  setLog: (log: LogType | null) => void;
  setItemCount: (value: number) => void;
}) {
  const [detail, setDetail] = useState<Product>(product);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      fetch(`/api/products/${product.id}`)
        .then((res) => res.json())
        .then((data) => setDetail({ ...product, ...data.detail }))
        .catch((err) => console.error("Failed to load product detail:", err));
    }
  }, [open, product]);

  const discountedPrice = (1 - detail.discount / 100) * detail.original;

  const handleAddToCart = async () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="));

    if (!cookie) {
      setLog({
        title: "Cảnh báo",
        message: "Vui lòng đăng nhập để thêm vào giỏ hàng.",
        status: false,
      });
      setTimeout(() => router.push("/login"), 1500);
      return;
    }

    const username = decodeURIComponent(cookie.split("=")[1]);

    const res = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, product: detail }),
    });

    if (res.ok) {
      const res = await fetch(`/api/cart?username=${username}`);
      const data = await res.json();

      setItemCount(data.length);
      setLog({
        title: "Thành công",
        message: "Sản phẩm đã được thêm vào giỏ hàng!",
        status: true,
      });
    } else {
      setLog({
        title: "Lỗi",
        message: "Không thể thêm sản phẩm vào giỏ hàng.",
        status: false,
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="
        z-50
        relative
      "
    >
      <div
        aria-hidden="true"
        className="
          bg-black/30
          fixed inset-0
        "
      />
      <div
        className="
          flex
          p-4
          fixed inset-0 items-center justify-center
        "
      >
        <Dialog.Panel
          className="
            w-full max-w-3xl
            p-6
            bg-white
            rounded-2xl
            shadow-lg
            relative
          "
        >
          <div
            className="
              flex flex-col
              gap-6
              md:flex-row
            "
          >
            <Image
              src={detail.imageUrl}
              alt={detail.name}
              width={1000}
              height={1000}
              className="
                w-full
                rounded-xl
                md:w-1/2
              "
            />

            {/* Info */}
            <div
              className="
                flex-1
                space-y-3
              "
            >
              <Dialog.Title
                className="
                  text-2xl font-bold
                "
              >
                {detail.name}
              </Dialog.Title>
              <p
                className="
                  text-red-600 text-xl font-semibold
                "
              >
                {discountedPrice.toLocaleString()}₫{" "}
                <span
                  className="
                    text-sm text-gray-500
                    line-through
                  "
                >
                  {detail.original.toLocaleString()}₫
                </span>
              </p>

              <div
                className="
                  flex
                  text-sm
                  gap-2
                "
              >
                <span
                  className="
                    px-2 py-1
                    bg-gray-200
                    rounded
                  "
                >
                  {detail.inch} inch
                </span>
                <span
                  className="
                    px-2 py-1
                    bg-gray-200
                    rounded
                  "
                >
                  {detail.capacity} GB
                </span>
              </div>

              {detail.smemberDiscount > 0 && (
                <p
                  className="
                    px-2 py-1 mt-2
                    text-xs text-blue-700
                    bg-blue-50
                    rounded
                  "
                >
                  Smember giảm đến{" "}
                  {detail.smemberDiscount.toLocaleString("vi-VN")}₫
                </p>
              )}
              {detail.sstudentDiscount > 0 && (
                <p
                  className="
                    px-2 py-1 mt-2
                    text-xs text-red-700
                    bg-blue-50
                    rounded
                  "
                >
                  S-Student giảm đến{" "}
                  {detail.sstudentDiscount.toLocaleString("vi-VN")}₫
                </p>
              )}

              {/* Table specs */}
              <table
                className="
                  overflow-hidden
                  w-full
                  mt-4
                  text-sm
                  border
                  rounded
                "
              >
                <tbody>
                  <tr
                    className="
                      border-b
                    "
                  >
                    <td
                      className="
                        p-2
                        font-medium
                      "
                    >
                      Thương hiệu
                    </td>
                    <td
                      className="
                        p-2
                      "
                    >
                      {detail.brand}
                    </td>
                  </tr>
                  <tr
                    className="
                      border-b
                    "
                  >
                    <td
                      className="
                        p-2
                        font-medium
                      "
                    >
                      Màu sắc
                    </td>
                    <td
                      className="
                        p-2
                      "
                    >
                      {detail.color}
                    </td>
                  </tr>
                  <tr
                    className="
                      border-b
                    "
                  >
                    <td
                      className="
                        p-2
                        font-medium
                      "
                    >
                      Chip
                    </td>
                    <td
                      className="
                        p-2
                      "
                    >
                      {detail.chip}
                    </td>
                  </tr>
                  <tr
                    className="
                      border-b
                    "
                  >
                    <td
                      className="
                        p-2
                        font-medium
                      "
                    >
                      Camera
                    </td>
                    <td
                      className="
                        p-2
                      "
                    >
                      {detail.camera}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="
                        p-2
                        font-medium
                      "
                    >
                      Pin
                    </td>
                    <td
                      className="
                        p-2
                      "
                    >
                      {detail.battery}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Actions */}
              <div
                className="
                  flex
                  mt-4
                  gap-4
                "
              >
                <button
                  onClick={handleAddToCart}
                  className="
                    flex
                    px-4 py-2
                    border border-gray-400
                    items-center gap-2 rounded hover:bg-gray-100 transition
                  "
                >
                  <FaShoppingCart />
                  Thêm vào giỏ
                </button>

                <button
                  onClick={() => {
                    const cookie = document.cookie
                      .split("; ")
                      .find((row) => row.startsWith("user="));

                    if (!cookie) {
                      setLog({
                        title: "Cảnh báo",
                        message: "Vui lòng đăng nhập để mua hàng.",
                        status: false,
                      });
                      setTimeout(() => router.push("/login"), 1500);
                      return;
                    }

                    localStorage.setItem(
                      "checkoutItem",
                      JSON.stringify(detail),
                    );

                    router.push("/checkout");
                  }}
                  className="
                    flex
                    px-4 py-2
                    text-white
                    bg-blue-600
                    items-center gap-2 rounded hover:bg-blue-700 transition
                  "
                >
                  <FaMoneyBillWave />
                  Mua ngay
                </button>
              </div>

              {log && <Log {...log} onClose={() => setLog(null)} />}
            </div>
          </div>

          <div
            className="
              text-2xl
              absolute top-1 right-1 hover:scale-105
            "
          >
            <button onClick={() => setOpen(false)}>
              <IoIosCloseCircleOutline />
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
