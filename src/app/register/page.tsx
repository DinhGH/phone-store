"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const data = await res.json();
      setError(data.error || "Đăng ký thất bại");
    }
  };

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
          Đăng ký
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
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={handleRegister}
          className="
            w-full
            py-3 mt-2
            text-[#E45464] font-semibold
            bg-white
            rounded-lg
            hover:bg-gray-100 transition
          "
        >
          Đăng ký
        </button>

        <p
          className="
            text-center text-sm
          "
        >
          Đã có tài khoản?{" "}
          <button
            onClick={() => router.push("/login")}
            className="
              underline hover:text-gray-300
            "
          >
            Đăng nhập
          </button>
        </p>
      </div>
    </div>
  );
}
