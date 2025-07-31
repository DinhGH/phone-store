"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface ProductFormData {
  name: string;
  original: string;
  discount: string;
  smemberDiscount: string;
  sstudentDiscount: string;
  imageUrl: string;
  inch: string;
  capacity: string;
  rating: string;
  brand: string;
  color: string;
  chip: string;
  camera: string;
  battery: string;
}

export default function AdminAddPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    original: "",
    discount: "",
    smemberDiscount: "",
    sstudentDiscount: "",
    imageUrl: "",
    inch: "",
    capacity: "",
    rating: "",
    brand: "",
    color: "",
    chip: "",
    camera: "",
    battery: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thêm sản phẩm thành công!");
        router.push("/admin/products");
      } else {
        const error = await res.json();
        alert("Có lỗi xảy ra: " + error.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >
      <div
        className="
          bg-white
          shadow
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              flex
              py-6
              items-center
            "
          >
            <Link
              href="/admin/products"
              className="
                mr-4
                text-blue-600
                hover:text-blue-800
              "
            >
              ← Quay lại
            </Link>
            <h1
              className="
                text-3xl font-bold text-gray-900
              "
            >
              Thêm sản phẩm mới
            </h1>
          </div>
        </div>
      </div>

      <div
        className="
          max-w-4xl
          mx-auto py-6
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            bg-white
            shadow
            sm:rounded-lg
          "
        >
          <form
            onSubmit={handleSubmit}
            className="
              p-6
            "
          >
            <div
              className="
                grid grid-cols-1
                gap-6
                md:grid-cols-2
              "
            >
              {/* Basic Info */}
              <div
                className="
                  col-span-2
                "
              >
                <h3
                  className="
                    mb-4
                    text-lg font-medium text-gray-900
                  "
                >
                  Thông tin cơ bản
                </h3>
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Tên sản phẩm *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  URL hình ảnh *
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  required
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Giá gốc *
                </label>
                <input
                  type="number"
                  name="original"
                  required
                  value={formData.original}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Giá khuyến mãi *
                </label>
                <input
                  type="number"
                  name="discount"
                  required
                  value={formData.discount}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Giảm giá S-Member
                </label>
                <input
                  type="number"
                  name="smemberDiscount"
                  value={formData.smemberDiscount}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Giảm giá S-Student
                </label>
                <input
                  type="number"
                  name="sstudentDiscount"
                  value={formData.sstudentDiscount}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Kích thước màn hình
                </label>
                <input
                  type="text"
                  name="inch"
                  value={formData.inch}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Dung lượng
                </label>
                <input
                  type="text"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Đánh giá (1-5)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              {/* Product Details */}
              <div
                className="
                  mt-6
                  col-span-2
                "
              >
                <h3
                  className="
                    mb-4
                    text-lg font-medium text-gray-900
                  "
                >
                  Thông tin chi tiết
                </h3>
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Thương hiệu
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Màu sắc
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Chip
                </label>
                <input
                  type="text"
                  name="chip"
                  value={formData.chip}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Camera
                </label>
                <input
                  type="text"
                  name="camera"
                  value={formData.camera}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>

              <div
                className="
                  col-span-2
                "
              >
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium text-gray-700
                  "
                >
                  Pin
                </label>
                <input
                  type="text"
                  name="battery"
                  value={formData.battery}
                  onChange={handleChange}
                  className="
                    w-full
                    px-3 py-2
                    border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>
            </div>

            <div
              className="
                flex
                mt-6 space-x-3
                justify-end
              "
            >
              <Link
                href="/admin/products"
                className="
                  px-4 py-2
                  text-gray-700
                  bg-gray-300
                  rounded-md
                  hover:bg-gray-400
                "
              >
                Hủy
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="
                  px-4 py-2
                  text-white
                  bg-blue-600
                  rounded-md
                  hover:bg-blue-700 disabled:opacity-50
                "
              >
                {loading ? "Đang lưu..." : "Thêm sản phẩm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
