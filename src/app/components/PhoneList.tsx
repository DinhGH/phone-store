"use client";

import { useEffect, useState } from "react";
// import { Prisma } from "@prisma/client";
import Image from "next/image";

type Phanloai = {
  id: number;
  name: string;
  url: string;
};

export default function PhoneList() {
  const [phones, setPhones] = useState<Phanloai[]>([]);

  useEffect(() => {
    const fetchPhone = async () => {
      const res = await fetch("/api/phanloai");
      const data = await res.json();
      setPhones(data);
    };
    fetchPhone();
  }, []);

  return (
    <div
      className="
        flex flex-wrap
        my-5
        gap-5
      "
    >
      {phones.map((i) => (
        <div
          key={i.id}
          className="
            p-2
            text-center
            rounded-md
            shadow-lg
            fill-white drop-shadow-xl/50
          "
        >
          <Image
            src={i.url}
            alt={i.name}
            width={100}
            height={100}
            className="
              h-[90px]
              px-3 py-2 mx-6 my-2
              hover:scale-105
            "
          />
          <p>{i.name}</p>
        </div>
      ))}
    </div>
  );
}
