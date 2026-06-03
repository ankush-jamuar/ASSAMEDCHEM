"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductCatalog({
  products,
}: {
  products: any[];
}) {
  const [search, setSearch] = useState("");

  const [filter, setFilter] =
    useState("ALL");

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        filter === "ALL"
          ? true
          : product.dimension ===
            filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (
    <>
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search products..."
          className="
            border
            p-2
            rounded
            flex-1
          "
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          className="
            border
            p-2
            rounded
          "
          value={filter}
          onChange={(e) =>
            setFilter(
              e.target.value
            )
          }
        >
          <option value="ALL">
            All
          </option>

          <option value="WEIGHT">
            Weight
          </option>

          <option value="VOLUME">
            Volume
          </option>

          <option value="COUNT">
            Count
          </option>

        </select>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {filteredProducts.map(
          (product) => (

            <Link
              key={product.id}
              href={`/product/${product.id}`}
            >

              <div className="border rounded-lg p-5 shadow hover:shadow-lg">

                <h2 className="font-bold">
                  {product.name}
                </h2>

                <p>
                  {product.description}
                </p>

                <p>
                  ₹
                  {
                    product.pricePerBaseUnit
                  }
                </p>

                <p>
                  {
                    product.dimension
                  }
                </p>

              </div>

            </Link>

          )
        )}

      </div>
    </>
  );
}