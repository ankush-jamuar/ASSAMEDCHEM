"use client";

import { useRouter } from "next/navigation";

export default function AdminHeader() {

  const router = useRouter();

  function logout() {
    localStorage.removeItem("role");
    router.push("/login");
  }

  return (
    <div className="flex justify-between mb-8">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

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