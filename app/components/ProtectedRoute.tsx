"use client";

import {
  useEffect,
  useState
} from "react";

import {
  useRouter
} from "next/navigation";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) {

  const router =
    useRouter();

  const [allowed, setAllowed] =
    useState(false);

  useEffect(() => {

    const userRole =
      localStorage.getItem(
        "role"
      );

    if (userRole === role) {
      setAllowed(true);
    } else {
      router.push("/login");
    }

  }, [role, router]);

  if (!allowed)
    return <p>Loading...</p>;

  return <>{children}</>;
}