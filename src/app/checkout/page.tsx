"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Log from "../components/Log";

type Product = {
  id: number;
  name: string;
  original: number;
  discount: number;
  imageUrl: string;
  price: number;
  quantity: number;
  inch: string;
  capacity: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [log, showLog] = useState(false);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // Lấy dữ liệu từ localStorage
  useEffect(() => {
    const items = localStorage.getItem("checkoutItems");
    if (items) {
      try {
        const parsed = JSON.parse(items);
        if (Array.isArray(parsed)) {
          setProducts(parsed);
        } else {
          // Nếu chỉ có 1 sản phẩm → ép thành mảng
          setProducts([parsed]);
        }
      } catch (err) {
        console.error("Lỗi parse checkoutItems:", err);
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [router]);

  // Auto redirect sau khi log thành công
  useEffect(() => {
    if (log) {
      const timeout = setTimeout(() => {
        showLog(false);
        router.push("/");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [log, router]);

  if (products.length === 0) return null;

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePayment = () => {
    if (!fullName || !address || !phone || !image) {
      alert("Vui lòng điền đầy đủ thông tin và tải ảnh thanh toán.");
      return;
    }
    showLog(true);
  };

  return (
    <div
      className="
        max-w-3xl
        mx-auto p-6
      "
    >
      <h1
        className="
          mb-4
          text-2xl font-bold
        "
      >
        🧾 Thanh toán
      </h1>

      {products.map((item) => (
        <div
          key={item.id}
          className="
            flex
            p-4 mb-4
            bg-white
            rounded-xl
            shadow gap-4 items-center
          "
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={1000}
            height={1000}
            className="
              object-cover
              w-24 h-24
              rounded-xl
            "
          />
          <div
            className="
              flex-1
            "
          >
            <h2
              className="
                text-lg font-semibold
              "
            >
              {item.name}
            </h2>
            <p
              className="
                text-sm text-gray-600
              "
            >
              {item.inch} inch - {item.capacity} GB
            </p>
            <p
              className="
                mt-2
                text-red-600 font-bold
              "
            >
              {(item.price * item.quantity).toLocaleString("vi-VN")}₫
            </p>
            <p
              className="
                text-sm text-gray-500
              "
            >
              Số lượng: {item.quantity}
            </p>
          </div>
        </div>
      ))}

      {/* Tổng tiền */}
      <div
        className="
          mt-4 p-4
          text-right font-bold text-lg
          bg-gray-100
          rounded-lg
        "
      >
        Tổng cộng: {total.toLocaleString("vi-VN")}₫
      </div>

      {/* Form thông tin */}
      <div
        className="
          mt-6 space-y-4
        "
      >
        <input
          type="text"
          placeholder="Họ và tên người nhận"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="
            w-full
            p-3
            border border-gray-300 rounded-md
          "
        />
        <input
          type="text"
          placeholder="Địa chỉ nhà"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="
            w-full
            p-3
            border border-gray-300 rounded-md
          "
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full
            p-3
            border border-gray-300 rounded-md
          "
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="
            w-full
            p-3
            border border-gray-300 rounded-md
          "
        />
        <div
          className="
            mt-4
          "
        >
          <label
            htmlFor="paymentImage"
            className="
              block
              mb-2
              text-sm font-medium text-gray-500
            "
          >
            Ảnh xác nhận thanh toán
          </label>
          <input
            id="paymentImage"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="
              block
              w-full
              text-sm text-gray-500
              cursor-pointer
              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-400 hover:file:bg-blue-100
            "
          />
        </div>
      </div>

      {/* Buttons */}
      <div
        className="
          flex
        "
      >
        <button
          onClick={() => router.push("/")}
          className="
            w-1/2
            mt-6 py-3 mx-4
            text-white
            bg-[#E45464]
            rounded-lg
            hover:bg-[#c93a3a] transition
          "
        >
          Quay về
        </button>
        <button
          onClick={handlePayment}
          className="
            w-1/2
            mt-6 py-3 mx-4
            text-white
            bg-[#5467e4]
            rounded-lg
            hover:bg-[#3c45f5] transition
          "
        >
          Xác nhận thanh toán
        </button>
      </div>

      {log && (
        <Log
          status={true}
          title="Thanh toán thành công"
          message="Cảm ơn bạn đã tin tưởng và lựa chọn DPHONE, việc thanh toán đang được kiểm tra. Sản phẩm sẽ được vận chuyển sớm đến bạn!"
        />
      )}
    </div>
  );
}
