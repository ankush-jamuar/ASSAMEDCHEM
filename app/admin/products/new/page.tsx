"use client";

import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import AdminNav from "@/app/components/AdminNav";

export default function NewProductPage() {
  const [name, setName] = useState("");

  const [sku, setSku] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [dimension, setDimension] = useState("COUNT");

  const [baseUnit, setBaseUnit] = useState("ITEM");

  const [inventory, setInventory] = useState("");

  async function createProduct() {
    const response = await fetch("/api/product", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        sku,
        description,
        price,
        dimension,
        baseUnit,
        inventory,
      }),
    });

    const data = await response.json();

    alert(data.success ? "Product Created" : "Failed");
  }

  return (
    <main className="p-8">
        <Navbar
  role="admin"
  title="Add Product"
/>
<AdminNav />

      <div className="space-y-4">
        <input
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="SKU"
          className="border p-2 w-full"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />

        <input
          placeholder="Description"
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Price"
          className="border p-2 w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
          className="
border
p-2
rounded
bg-background
text-foreground
"
        >
          <option value="WEIGHT"  className="
    bg-black
    text-white
  ">Weight</option>

          <option value="VOLUME"  className="
    bg-black
    text-white
  ">Volume</option>

          <option value="COUNT"  className="
    bg-black
    text-white
  ">Count</option>
        </select>
        <select
          value={baseUnit}
          onChange={(e) => setBaseUnit(e.target.value)}
          className="
border
p-2
rounded
bg-background
text-foreground
"
        >
          <option value="G"  className="
    bg-black
    text-white
  ">Gram</option>

          <option value="ML"  className="
    bg-black
    text-white
  ">Milliliter</option>

          <option value="ITEM"  className="
    bg-black
    text-white
  ">Item</option>
        </select>
        <input
          placeholder="Inventory"
          className="
border
p-2
rounded
bg-background
text-foreground
"
          value={inventory}
          onChange={(e) => setInventory(e.target.value)}
        />

        <button
          onClick={createProduct}
          className="
            bg-black
            text-white
            px-4
            py-2
            rounded
          "
        >
          Create Product
        </button>
      </div>
    </main>
  );
}
