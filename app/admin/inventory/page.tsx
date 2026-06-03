import { prisma } from "../../../lib/prisma";

export default async function InventoryPage() {

  const products =
    await prisma.product.findMany();

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Inventory
      </h1>

      <table className="w-full border">

        <thead>

          <tr className="border">

            <th>Name</th>

            <th>SKU</th>

            <th>Inventory</th>

            <th>Unit</th>

          </tr>

        </thead>

        <tbody>

          {products.map(
            (product) => (

              <tr
                key={product.id}
                className="border"
              >

                <td>
                  {product.name}
                </td>

                <td>
                  {product.sku}
                </td>

                <td>
                  {
                    product.inventory.toString()
                  }
                </td>

                <td>
                  {
                    product.baseUnit
                  }
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </main>
  );
}