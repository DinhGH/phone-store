"use client";
import Image from "next/image";

interface IntroImageProps {
  src: string;
}

export default function IntroImage({ src }: IntroImageProps) {
  return (
    <Image
      src={src}
      alt={"Image"}
      width={1000}
      height={500}
      className="
        w-full h-auto
        my-5
        rounded-xl
      "
    />
  );
}
