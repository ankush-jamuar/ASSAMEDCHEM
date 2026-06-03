"use client";

import ProtectedRoute
from "../components/ProtectedRoute";

export default function AdminWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ProtectedRoute role="admin">
      {children}
    </ProtectedRoute>
  );
}