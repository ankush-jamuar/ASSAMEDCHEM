import { prisma } from "../../../lib/prisma";
import OrderForm from "./OrderForm";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product =
    await prisma.product.findUnique({
      where: { id },
    });

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold">
        {product.name}
      </h1>

      <p className="mt-4">
        {product.description}
      </p>

      <p className="mt-4">
        Price:
        ₹
        {product.pricePerBaseUnit.toString()}
      </p>
      <OrderForm product={product} />

    </div>
  );
}