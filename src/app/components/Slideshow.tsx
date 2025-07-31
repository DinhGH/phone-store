"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/qc/qc1.png",
  "/qc/qc2.png",
  "/qc/qc3.png",
  "/qc/qc4.png",
  "/qc/qc5.png",
  "/qc/qc6.png",
  "/qc/qc7.png",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (i: number) => {
    setIndex(i);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 2000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      className="
        overflow-hidden
        w-full max-w-4xl
        mx-auto
        rounded-xl
        relative
      "
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`
            transition-opacity
            duration-700 ease-in-out
            ${i === index ? "opacity-100 block" : "opacity-0 hidden"}
          `}
        >
          <div
            className="
              overflow-hidden
              rounded-xl
              shadow-lg transition-shadow
              brightness-100 group relative hover:brightness-125 duration-500
            "
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              width={1200}
              height={500}
              priority={i === 0}
              className="
                w-full h-auto
                transition-transform
                duration-500 group-hover:scale-105
              "
            />
          </div>
        </div>
      ))}

      <div
        className="
          flex
          absolute bottom-3 left-1/2 transform -translate-x-1/2 gap-2
        "
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`
              w-2 h-2
              rounded-full
              transition-all
              duration-300
              ${i === index ? "bg-[#fcfcfc]" : "bg-gray-600/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
