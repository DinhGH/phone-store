"use client";
import {
  FaStore,
  FaClipboardList,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import TopNavItem from "./components/TopNavItem";
import { TfiViewGrid } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { TbMapPinHeart } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import Slideshow from "./components/Slideshow";
import LogoList from "./components/LogoList";
import PhoneList from "./components/PhoneList";
import ListCard from "./components/ListCard";
// import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./components/Intro";
import FaqList from "./components/FaqList";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import { useEffect, useState } from "react";

import LoginButton from "./components/LoginButton";

export default function Home() {
  const navItems = [
    { icon: FaStore, label: "Cửa hàng gần bạn", href: "#" },
    { icon: FaClipboardList, label: "Tra cứu đơn hàng", href: "#" },
    { icon: FaPhoneAlt, label: "0365472162", href: "tel:0365472162" },
    { icon: FaMobileAlt, label: "Tải ứng dụng", href: "#" },
  ];

  const [showBaket, setShowBaket] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setItemCount(0);
      }

      setItemCount(data.length);
    } catch (error) {
      console.error("Lỗi khi tải giỏ hàng:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <header
        className="
          h-1/7 w-full
          pt-2 px-10
          text-white
          bg-gradient-to-b from-[#E34A5B] to-[#D70018]
        "
      >
        <div
          className="
            flex
            h-auto w-full
            text-xs
            justify-between
          "
        >
          <div
            className="
              overflow-hidden
              w-7/12
              text-white
              border-x-2 border-gray-300
            "
          >
            <motion.div
              animate={{ x: ["100%", "-150%"] }}
              transition={{ duration: 27, ease: "linear", repeat: Infinity }}
              className="
                whitespace-nowrap
              "
            >
              Giao hàng nhanh trong ngày - Miễn phí vận chuyển đơn từ 300K - Thu
              cũ đổi mới, tiết kiệm chi phí - Sản phẩm chính hãng, bảo hành đầy
              đủ - Hóa đơn VAT hợp lệ cho doanh nghiệp - Ưu đãi hấp dẫn mỗi ngày
              tại cửa hàng gần bạn
            </motion.div>
          </div>

          <div
            className="
              flex
            "
          >
            {navItems.map((item, index) => (
              <TopNavItem
                key={index}
                Icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>
        </div>

        <div
          className="
            flex
            w-full h-auto
            my-4
          "
        >
          <div
            className="
              flex
              w-1/2
            "
          >
            <a
              href="#"
              className="
                text-3xl text-center
                grow
              "
            >
              DPHONE📱
            </a>

            <button
              className="
                flex
                p-1 mx-8
                text-xl
                bg-[#E45464]
                rounded-xl
                grow justify-center items-center hover:bg-[#CF0F24]
              "
            >
              <TfiViewGrid
                className="
                  mx-1
                "
              />
              <p
                className="
                  mx-1
                "
              >
                Danh mục
              </p>
              <IoIosArrowDown
                className="
                  mx-1
                "
              />
            </button>

            <button
              className="
                flex
                p-1 mx-8
                text-xl
                bg-[#E45464]
                rounded-xl
                grow justify-center items-center hover:bg-[#CF0F24]
              "
            >
              <TbMapPinHeart
                className="
                  mx-1
                "
              />
              <p
                className="
                  mx-1
                "
              >
                Địa điểm
              </p>
              <IoIosArrowDown
                className="
                  mx-1
                "
              />
            </button>
          </div>

          <div
            className="
              flex
              py-1 mx-8
              text-xl text-black
              bg-white
              rounded-2xl
              grow-2 justify-center items-center
            "
          >
            <GoSearch
              className="
                m-1
              "
            />
            <input
              placeholder="Tìm kiếm sản phẩm?"
              className="
                ml-1
                outline-0
              "
            />
          </div>

          <div>
            <button
              onClick={() => setShowBaket(!showBaket)}
              className="
                flex
                p-1 mx-8
                text-xl whitespace-nowrap
                bg-[#E45464]
                rounded-xl
                relative grow justify-center items-center hover:bg-[#CF0F24]
              "
            >
              <p
                className="
                  mx-1
                "
              >
                Giỏ hàng
              </p>
              <SlBasket />
              {itemCount > 0 && (
                <span
                  className="
                    flex
                    w-5 h-5
                    text-black text-xs
                    bg-red-400
                    rounded-full
                    absolute -top-1 -right-1 items-center justify-center
                  "
                >
                  {itemCount}
                </span>
              )}
            </button>

            {showBaket && (
              <div
                className="
                  z-50
                  w-[400px]
                  p-4
                  absolute right-0 top-20
                "
              >
                <Basket
                  setShowBaket={setShowBaket}
                  setItemCount={setItemCount}
                />
              </div>
            )}
          </div>

          <div>
            <LoginButton />
          </div>
        </div>
      </header>
      <main
        className="
          h-auto w-full
          py-10 px-27
        "
      >
        <div
          className="
            flex
          "
        >
          <div
            className="
              w-full h-[100px]
              mr-4
            "
          >
            <Slideshow />
          </div>
          <div
            className="
              w-full h-[100px]
              ml-4
            "
          >
            <Slideshow />
          </div>
        </div>

        <div>
          <h1
            className="
              mt-5
              text-2xl font-bold
            "
          >
            Điện thoại
          </h1>
          <LogoList />
        </div>

        <div>
          <h1
            className="
              mt-5
              text-2xl font-bold
            "
          >
            Chọn theo nhu cầu
          </h1>

          <PhoneList />
        </div>

        <div>
          <ListCard setItemCount={setItemCount} />
        </div>

        <div>
          <Intro />
        </div>

        <div>
          <FaqList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </>
  );
}
