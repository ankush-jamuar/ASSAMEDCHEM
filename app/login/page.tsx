"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  function handleLogin() {

    if (
      email === "admin@aasamedchem.com" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "role",
        "admin"
      );

      router.push("/admin");

      return;
    }

    if (
      email === "seller@aasamedchem.com" &&
      password === "seller123"
    ) {

      localStorage.setItem(
        "role",
        "seller"
      );

      router.push("/products");

      return;
    }

    alert("Invalid Credentials");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="border p-8 rounded-lg w-96">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded w-full mb-4"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={handleLogin}
          className="
            bg-black
            text-white
            px-4
            py-2
            rounded
            w-full
          "
        >
          Login
        </button>

      </div>

    </main>
  );
}