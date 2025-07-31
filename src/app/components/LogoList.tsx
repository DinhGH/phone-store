"use client";

import { useEffect, useState } from "react";
// import { Prisma } from "@prisma/client";
import Image from "next/image";

type Logo = {
  id: number;
  name: string;
  url: string;
};

export default function LogoList() {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      const res = await fetch("/api/logos");
      const data = await res.json();
      setLogos(data);
    };
    fetchLogos();
  }, []);

  return (
    <div
      className="
        flex flex-wrap
        my-5
        gap-5
      "
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="
            text-center
            bg-white
            rounded-sm
            shadow-lg
            hover:shadow-[0_3px_7px_#C0C0C0] hover:scale-105
          "
        >
          <Image
            src={logo.url}
            alt={logo.name}
            width={100}
            height={100}
            className="
              h-[40px]
              px-4 py-2 mx-6
            "
          />
        </div>
      ))}
    </div>
  );
}
