"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

export default function LoginButton() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="));
    if (cookie) {
      const value = cookie.split("=")[1];
      setUsername(decodeURIComponent(value));
    }
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    document.cookie = "user=; max-age=0; path=/";

    localStorage.removeItem("user");
    setUsername(null);
    window.location.reload();
  };

  if (username) {
    return (
      <div
        className="
          flex
          text-2xl
          items-center gap-3 relative top-1/2 -translate-y-1/2
        "
      >
        <span
          className="
            text-white
          "
        >
          {"["}
          {username}
          {"]"}
        </span>
        <button
          onClick={handleLogout}
          className="
            px-3 py-1
            bg-[#E45464]
            rounded-xl
            hover:bg-[#CF0F24]
          "
        >
          <IoMdLogOut />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => router.push("/login")}
      className="
        flex
        p-1 mx-8
        text-xl whitespace-nowrap
        bg-[#E45464]
        rounded-xl
        grow justify-center items-center hover:bg-[#CF0F24]
      "
    >
      <p
        className="
          mx-1
        "
      >
        Đăng nhập
      </p>
      <IoMdLogIn />
    </button>
  );
}
