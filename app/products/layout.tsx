"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  useEffect(() => {
    const role =
      localStorage.getItem("role");

    if (role !== "seller") {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}