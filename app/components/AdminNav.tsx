"use client";

import Link from "next/link";

export default function AdminNav() {
  return (
    <div className="flex gap-4 mb-6">
      <Link href="/admin" className="border px-4 py-2 rounded">
        Orders
      </Link>

      <Link href="/admin/quotations" className="border px-4 py-2 rounded">
        Quotations
      </Link>
      <Link href="/admin/products/new">Add Product</Link>
      <Link href="/admin/inventory" className="border px-4 py-2 rounded">
        Inventory
      </Link>
    </div>
  );
}
