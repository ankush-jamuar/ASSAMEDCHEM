import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-5xl font-bold mb-4">
        AasaMedChem Inventory System
      </h1>

      <p className="text-gray-600 mb-8">
        Inventory, Quotations and Order Management
      </p>

      <Link
        href="/login"
        className="
          bg-black
          text-white
          px-6
          py-3
          rounded
        "
      >
        Get Started
      </Link>

    </main>
  );
}