"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PhoneDetailModal from "./PhoneDetailModal";

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
};

type LogType = {
  title: string;
  message: string;
  status: boolean;
};

export default function ProductCard({
  product,
  setItemCount,
}: {
  product: Product;
  setItemCount: (value: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [log, setLog] = useState<LogType | null>(null);
  return (
    <>
      <div
        className="
          flex flex-col
          w-full max-w-[250px]
          p-4 mx-5
          bg-white
          rounded-xl
          shadow-md
          relative hover:shadow-[3px_4px_5px_#817f7d] hover:scale-102 transition duration-300
        "
      >
        <div
          className="
            grow
          "
        >
          <span
            className="
              px-2 py-1
              text-white text-xs font-semibold
              bg-red-600
              absolute top-2 left-2 rounded
            "
          >
            Giảm {product.discount}%
          </span>
          <span
            className="
              px-2 py-1
              text-blue-700 text-xs font-medium
              bg-blue-100
              absolute top-2 right-2 rounded
            "
          >
            Trả góp 0%
          </span>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
            className="
              object-contain
              py-4 mx-auto
            "
          />
          <h2
            className="
              mt-2
              text-sm font-semibold
            "
          >
            {product.name}
          </h2>
          <div
            className="
              mt-1
            "
          >
            <span
              className="
                text-red-600 text-lg font-bold
              "
            >
              {Math.round(
                (1 - product.discount / 100) * product.original,
              ).toLocaleString("vi-VN")}
              ₫
            </span>
            <span
              className="
                ml-2
                text-gray-400 text-sm
                line-through
              "
            >
              {product.original.toLocaleString("vi-VN")}₫
            </span>
          </div>
          <div
            className="
              flex
              mt-2
              text-xs
              gap-2
            "
          >
            <span
              className="
                px-2 py-1
                bg-gray-100
                border
                rounded
              "
            >
              {product.inch} inches
            </span>
            <span
              className="
                px-2 py-1
                bg-gray-100
                border
                rounded
              "
            >
              {product.capacity} GB
            </span>
          </div>
          {product.smemberDiscount > 0 && (
            <p
              className="
                px-2 py-1 mt-2
                text-xs text-blue-700
                bg-blue-50
                rounded
              "
            >
              Smember giảm đến {product.smemberDiscount.toLocaleString("vi-VN")}
              ₫
            </p>
          )}
          {product.sstudentDiscount > 0 && (
            <p
              className="
                px-2 py-1 mt-2
                text-xs text-red-700
                bg-blue-50
                rounded
              "
            >
              S-Student giảm đến{" "}
              {product.sstudentDiscount.toLocaleString("vi-VN")}₫
            </p>
          )}
          <p
            className="
              mt-1
              text-xs text-gray-700
              line-clamp-2
            "
          >
            Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3–6...
          </p>
        </div>
        <div
          className="
            flex
            mt-3
            text-sm text-blue-600
            items-center justify-between
          "
        >
          <span
            className="
              flex
              text-yellow-500
              items-center gap-1
            "
          >
            <FaStar size={14} />
            {product.rating.toFixed(1)}
          </span>
          <button
            onClick={() => setIsOpen(true)}
            className="
              px-4 py-1
              text-white
              bg-blue-300
              rounded-md
              shadow-lg cursor-pointer
              hover:bg-blue-400 active:scale-105
            "
          >
            Xem chi tiết
          </button>
        </div>
      </div>

      <PhoneDetailModal
        product={product}
        open={isOpen}
        setOpen={setIsOpen}
        log={log}
        setLog={setLog}
        setItemCount={setItemCount}
      />
    </>
  );
}
