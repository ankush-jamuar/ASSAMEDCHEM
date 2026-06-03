"use client";

import { useState } from "react";

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
      <h1 className="text-4xl font-bold mb-6">Add Product</h1>

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
          className="border p-2 w-full"
        >
          <option value="WEIGHT">Weight</option>

          <option value="VOLUME">Volume</option>

          <option value="COUNT">Count</option>
        </select>
        <select
          value={baseUnit}
          onChange={(e) => setBaseUnit(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="G">Gram</option>

          <option value="ML">Milliliter</option>

          <option value="ITEM">Item</option>
        </select>
        <input
          placeholder="Inventory"
          className="border p-2 w-full"
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
