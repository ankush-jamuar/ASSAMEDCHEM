"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({
  role,
  title,
}: {
  role: "admin" | "seller";
  title: string;
}) {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("role");
    router.push("/login");
  }

  return (
    <div className="flex justify-between items-center mb-8 border-b pb-4">

      <div>
        <Link
          href={
            role === "admin"
              ? "/admin"
              : "/products"
          }
          className="text-3xl font-bold"
        >
          AasaMedChem
        </Link>

        <p className="text-gray-500">
          {title}
        </p>
      </div>

      <button
        onClick={logout}
        className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded
        "
      >
        Logout
      </button>

    </div>
  );
}