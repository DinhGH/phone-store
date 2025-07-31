"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        my-3
        rounded-md
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          px-5 py-4
          text-left
          bg-[#F7F7F8]
          rounded-md
          justify-between items-center hover:bg-[#EAEAEA] transition
        "
      >
        <span
          className="
            font-medium text-gray-900
          "
        >
          {question}
        </span>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div
        className={`
          overflow-hidden
          transition-all
          duration-500 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            px-5 py-4
            text-gray-700
            bg-[#F7F7F8]
            rounded-md
          "
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
