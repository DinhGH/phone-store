"use client";

import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="
        px-6 py-10 mt-10
        text-white
        bg-[#303945]
      "
    >
      <div
        className="
          grid grid-cols-1
          max-w-7xl
          mx-auto
          gap-8
          md:grid-cols-4
        "
      >
        {/* Logo + giới thiệu */}
        <div>
          <h2
            className="
              mb-4
              text-2xl font-bold
            "
          >
            DPHONE📱
          </h2>
          <p
            className="
              text-sm text-gray-300
            "
          >
            Chuyên cung cấp điện thoại chính hãng, giá rẻ, hỗ trợ trả góp và bảo
            hành toàn quốc.
          </p>
        </div>

        {/* Danh mục */}
        <div>
          <h3
            className="
              mb-3
              text-lg font-semibold
            "
          >
            Danh mục
          </h3>
          <ul
            className="
              space-y-2
              text-sm text-gray-300
            "
          >
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Sản phẩm
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Tin tức
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h3
            className="
              mb-3
              text-lg font-semibold
            "
          >
            Hỗ trợ khách hàng
          </h3>
          <ul
            className="
              space-y-2
              text-sm text-gray-300
            "
          >
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Chính sách bảo hành
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Trả góp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="
                  hover:text-white
                "
              >
                Thu cũ đổi mới
              </a>
            </li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3
            className="
              mb-3
              text-lg font-semibold
            "
          >
            Liên hệ
          </h3>
          <ul
            className="
              space-y-2
              text-sm text-gray-300
            "
          >
            <li
              className="
                flex
                items-center gap-2
              "
            >
              <MdPhone /> 0365472162 (miễn phí)
            </li>
            <li
              className="
                flex
                items-center gap-2
              "
            >
              <MdEmail /> huynhtandinh.dev@gmail.com
            </li>
            <li
              className="
                flex
                mt-3
                gap-4
              "
            >
              <a
                href="#"
                className="
                  hover:text-blue-400
                "
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="
                  hover:text-red-500
                "
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="
                  hover:text-pink-400
                "
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div
        className="
          mt-8 pt-4
          text-center text-sm text-gray-400
          border-t border-gray-600
        "
      >
        © 2025 DPHONE. All rights reserved.
      </div>
    </footer>
  );
}
