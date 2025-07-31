"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Stats } from "../../types/index";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    products: 0,
    users: 0,
    carts: 0,
    logos: 0,
    categories: 0,
  });
  const router = useRouter();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async (): Promise<void> => {
    try {
      const res = await fetch("/api/admin/stats");
      const data: Stats = await res.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
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
              justify-between items-center
            "
          >
            <h1
              className="
                text-3xl font-bold text-gray-900
              "
            >
              Admin Dashboard
            </h1>
            <button
              onClick={() => router.push("/login")}
              className="
                px-4 py-2
                text-white
                bg-red-600
                rounded-md
                hover:bg-red-700
              "
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>

      <div
        className="
          max-w-7xl
          mx-auto py-6
          sm:px-6
          lg:px-8
        "
      >
        {/* Stats Cards */}
        <div
          className="
            grid grid-cols-1
            mb-8
            gap-6
            md:grid-cols-5
          "
        >
          <div
            className="
              overflow-hidden
              bg-white
              rounded-lg
              shadow
            "
          >
            <div
              className="
                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex-shrink-0
                  "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      bg-blue-500
                      rounded-md
                      items-center justify-center
                    "
                  >
                    <span
                      className="
                        text-white font-semibold
                      "
                    >
                      P
                    </span>
                  </div>
                </div>
                <div
                  className="
                    flex-1
                    w-0
                    ml-5
                  "
                >
                  <dl>
                    <dt
                      className="
                        text-sm font-medium text-gray-500
                        truncate
                      "
                    >
                      Sản phẩm
                    </dt>
                    <dd
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      {stats.products}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              overflow-hidden
              bg-white
              rounded-lg
              shadow
            "
          >
            <div
              className="
                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex-shrink-0
                  "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      bg-green-500
                      rounded-md
                      items-center justify-center
                    "
                  >
                    <span
                      className="
                        text-white font-semibold
                      "
                    >
                      U
                    </span>
                  </div>
                </div>
                <div
                  className="
                    flex-1
                    w-0
                    ml-5
                  "
                >
                  <dl>
                    <dt
                      className="
                        text-sm font-medium text-gray-500
                        truncate
                      "
                    >
                      Người dùng
                    </dt>
                    <dd
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      {stats.users}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              overflow-hidden
              bg-white
              rounded-lg
              shadow
            "
          >
            <div
              className="
                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex-shrink-0
                  "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      bg-yellow-500
                      rounded-md
                      items-center justify-center
                    "
                  >
                    <span
                      className="
                        text-white font-semibold
                      "
                    >
                      C
                    </span>
                  </div>
                </div>
                <div
                  className="
                    flex-1
                    w-0
                    ml-5
                  "
                >
                  <dl>
                    <dt
                      className="
                        text-sm font-medium text-gray-500
                        truncate
                      "
                    >
                      Giỏ hàng
                    </dt>
                    <dd
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      {stats.carts}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              overflow-hidden
              bg-white
              rounded-lg
              shadow
            "
          >
            <div
              className="
                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex-shrink-0
                  "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      bg-purple-500
                      rounded-md
                      items-center justify-center
                    "
                  >
                    <span
                      className="
                        text-white font-semibold
                      "
                    >
                      L
                    </span>
                  </div>
                </div>
                <div
                  className="
                    flex-1
                    w-0
                    ml-5
                  "
                >
                  <dl>
                    <dt
                      className="
                        text-sm font-medium text-gray-500
                        truncate
                      "
                    >
                      Logo
                    </dt>
                    <dd
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      {stats.logos}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              overflow-hidden
              bg-white
              rounded-lg
              shadow
            "
          >
            <div
              className="
                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex-shrink-0
                  "
                >
                  <div
                    className="
                      flex
                      w-8 h-8
                      bg-pink-500
                      rounded-md
                      items-center justify-center
                    "
                  >
                    <span
                      className="
                        text-white font-semibold
                      "
                    >
                      PL
                    </span>
                  </div>
                </div>
                <div
                  className="
                    flex-1
                    w-0
                    ml-5
                  "
                >
                  <dl>
                    <dt
                      className="
                        text-sm font-medium text-gray-500
                        truncate
                      "
                    >
                      Phân loại
                    </dt>
                    <dd
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      {stats.categories}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Management Links */}
        <div
          className="
            grid grid-cols-1
            gap-6
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          <Link
            href="/admin/products"
            className="
              block
            "
          >
            <div
              className="
                overflow-hidden
                bg-white
                rounded-lg
                transition-shadow
                shadow hover:shadow-md
              "
            >
              <div
                className="
                  p-6
                "
              >
                <div
                  className="
                    flex
                    items-center justify-center
                  "
                >
                  <div
                    className="
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        w-16 h-16
                        mx-auto mb-4
                        bg-blue-100
                        rounded-full
                        items-center justify-center
                      "
                    >
                      <span
                        className="
                          text-2xl text-blue-600
                        "
                      >
                        📱
                      </span>
                    </div>
                    <h3
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      Quản lý Sản phẩm
                    </h3>
                    <p
                      className="
                        text-sm text-gray-500
                      "
                    >
                      Thêm, sửa, xóa sản phẩm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/users"
            className="
              block
            "
          >
            <div
              className="
                overflow-hidden
                bg-white
                rounded-lg
                transition-shadow
                shadow hover:shadow-md
              "
            >
              <div
                className="
                  p-6
                "
              >
                <div
                  className="
                    flex
                    items-center justify-center
                  "
                >
                  <div
                    className="
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        w-16 h-16
                        mx-auto mb-4
                        bg-green-100
                        rounded-full
                        items-center justify-center
                      "
                    >
                      <span
                        className="
                          text-2xl text-green-600
                        "
                      >
                        👥
                      </span>
                    </div>
                    <h3
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      Quản lý Người dùng
                    </h3>
                    <p
                      className="
                        text-sm text-gray-500
                      "
                    >
                      Quản lý tài khoản người dùng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/carts"
            className="
              block
            "
          >
            <div
              className="
                overflow-hidden
                bg-white
                rounded-lg
                transition-shadow
                shadow hover:shadow-md
              "
            >
              <div
                className="
                  p-6
                "
              >
                <div
                  className="
                    flex
                    items-center justify-center
                  "
                >
                  <div
                    className="
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        w-16 h-16
                        mx-auto mb-4
                        bg-yellow-100
                        rounded-full
                        items-center justify-center
                      "
                    >
                      <span
                        className="
                          text-2xl text-yellow-600
                        "
                      >
                        🛒
                      </span>
                    </div>
                    <h3
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      Quản lý Giỏ hàng
                    </h3>
                    <p
                      className="
                        text-sm text-gray-500
                      "
                    >
                      Xem giỏ hàng người dùng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/logos"
            className="
              block
            "
          >
            <div
              className="
                overflow-hidden
                bg-white
                rounded-lg
                transition-shadow
                shadow hover:shadow-md
              "
            >
              <div
                className="
                  p-6
                "
              >
                <div
                  className="
                    flex
                    items-center justify-center
                  "
                >
                  <div
                    className="
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        w-16 h-16
                        mx-auto mb-4
                        bg-purple-100
                        rounded-full
                        items-center justify-center
                      "
                    >
                      <span
                        className="
                          text-2xl text-purple-600
                        "
                      >
                        🎨
                      </span>
                    </div>
                    <h3
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      Quản lý Logo
                    </h3>
                    <p
                      className="
                        text-sm text-gray-500
                      "
                    >
                      Quản lý logo thương hiệu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/admin/categories"
            className="
              block
            "
          >
            <div
              className="
                overflow-hidden
                bg-white
                rounded-lg
                transition-shadow
                shadow hover:shadow-md
              "
            >
              <div
                className="
                  p-6
                "
              >
                <div
                  className="
                    flex
                    items-center justify-center
                  "
                >
                  <div
                    className="
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        w-16 h-16
                        mx-auto mb-4
                        bg-pink-100
                        rounded-full
                        items-center justify-center
                      "
                    >
                      <span
                        className="
                          text-2xl text-pink-600
                        "
                      >
                        📂
                      </span>
                    </div>
                    <h3
                      className="
                        text-lg font-medium text-gray-900
                      "
                    >
                      Quản lý Phân loại
                    </h3>
                    <p
                      className="
                        text-sm text-gray-500
                      "
                    >
                      Quản lý danh mục sản phẩm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
