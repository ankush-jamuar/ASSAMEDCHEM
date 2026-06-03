"use client";

import { useState } from "react";

export default function OrderForm({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  const [unit, setUnit] = useState(product.baseUnit);

  let convertedQuantity = quantity;

  if (unit === "KG") {
    convertedQuantity = quantity * 1000;
  }

  if (unit === "L") {
    convertedQuantity = quantity * 1000;
  }

  const totalPrice = convertedQuantity * Number(product.pricePerBaseUnit);

  async function placeOrder() {
    const response = await fetch("/api/order", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        productId: product.id,

        quantity,

        enteredUnit: unit,

        convertedQuantity,

        totalPrice,
      }),
    });

    const data = await response.json();

    alert(data.success ? "Order Placed" : "Failed");
  }

  return (
    <div className="mt-8 border rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Place Order</h2>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border p-2 rounded w-full mb-4"
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value={product.baseUnit}>{product.baseUnit}</option>

        {product.baseUnit === "G" && <option value="KG">KG</option>}

        {product.baseUnit === "ML" && <option value="L">L</option>}
      </select>

      <div className="mt-4 space-y-2">
        <p>
          Converted Quantity: {convertedQuantity} {product.baseUnit}
        </p>

        <p>Total Price: ₹{totalPrice}</p>
        <button
          onClick={placeOrder}
          className="
    bg-black
    text-white
    px-4
    py-2
    rounded
    mt-4
  "
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
