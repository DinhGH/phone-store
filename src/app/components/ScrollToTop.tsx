"use client";

import { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        z-50
        p-3
        text-white text-xl
        bg-red-500
        rounded-full
        shadow-md transition-opacity
        fixed bottom-6 right-6 hover:bg-red-600 duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <FaCaretUp />
    </button>
  );
}
