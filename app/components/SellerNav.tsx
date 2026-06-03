"use client";

import Link from "next/link";

export default function SellerNav() {
  return (
    <div className="flex gap-4 mb-8">

      <Link
        href="/products"
        className="border px-4 py-2 rounded"
      >
        Products
      </Link>

      <Link
        href="/my-quotations"
        className="border px-4 py-2 rounded"
      >
        My Quotations
      </Link>

    </div>
  );
}