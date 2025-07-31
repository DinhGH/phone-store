"use client";

import { useEffect, useRef } from "react";

type NotificationProps = {
  title: string;
  message: string;
  status: boolean;
  onClose?: () => void;
};

export default function Log({
  title,
  message,
  status,
  onClose,
}: NotificationProps) {
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (logRef.current && !logRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="
        z-50 flex
        bg-black/30
        fixed inset-0 backdrop-blur-sm items-center justify-center
      "
    >
      <div
        ref={logRef}
        className="
          max-w-md w-full
          px-8 py-6
          text-center
          bg-white
          rounded-xl
          shadow-xl animate-fadeIn
        "
      >
        <h2
          className={`
            mb-4
            text-2xl font-semibold
            ${status ? "text-green-600" : "text-red-600"}
          `}
        >
          {title}
        </h2>
        <p
          className="
            text-gray-700 text-base
          "
        >
          {message}
        </p>
      </div>
    </div>
  );
}
