"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        router.push("/");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router]);

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      document.cookie = `user=${encodeURIComponent(data.user.username)}; path=/; max-age=600`;
      const role = data.user.role;

      if (role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Đăng nhập thất bại");
    }
  };

  return (
    <div
      className="
        flex
        min-h-screen
        px-4
        bg-white
        items-center justify-center
      "
    >
      <div
        ref={formRef}
        className="
          w-full max-w-sm
          p-8 space-y-6
          text-white
          bg-[#E45464]
          rounded-2xl
          shadow-lg
        "
      >
        <h1
          className="
            text-3xl font-bold text-center
          "
        >
          Đăng nhập
        </h1>

        {error && (
          <p
            className="
              text-sm text-white text-center
            "
          >
            {error}
          </p>
        )}

        <div
          className="
            space-y-4
          "
        >
          <input
            type="text"
            placeholder="Tài khoản"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
              w-full
              p-3
              text-black
              rounded-lg
              outline-amber-50 outline-2 hover:outline-amber-100
            "
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              p-3
              text-black
              rounded-lg
              outline-amber-50 outline-2 hover:outline-amber-100
            "
          />
        </div>

        <button
          onClick={handleLogin}
          className="
            w-full
            py-3 mt-2
            text-[#E45464] font-semibold
            bg-white
            rounded-lg
            hover:bg-gray-100 transition
          "
        >
          Đăng nhập
        </button>

        <p
          className="
            text-center text-sm
          "
        >
          Chưa có tài khoản?{" "}
          <button
            onClick={() => router.push("/register")}
            className="
              underline hover:text-gray-300
            "
          >
            Đăng ký ngay
          </button>
        </p>
      </div>
    </div>
  );
}
