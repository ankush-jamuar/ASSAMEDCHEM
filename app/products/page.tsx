"use client";

import { useRouter } from "next/navigation";
import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany();

  const router = useRouter();

  function logout() {
    localStorage.removeItem("role");
    router.push("/login");
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Product Catalog</h1>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-bold">Product Catalog</h1>

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

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="border rounded-lg p-5 shadow hover:shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{product.name}</h2>

              <p className="text-gray-500">{product.description}</p>

              <p className="mt-3">SKU: {product.sku}</p>

              <p>
                Inventory: {product.inventory.toString()} {product.baseUnit}
              </p>

              <p className="font-bold mt-2">
                ₹{product.pricePerBaseUnit.toString()}
                {" / "}
                {product.baseUnit}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
