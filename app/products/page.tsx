import { prisma } from "../../lib/prisma";
import Link from "next/link";
import ProductHeader from "../components/ProductHeader";
import ProductCatalog from "../components/ProductCatalog";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen p-8">
      <ProductHeader />

      <ProductCatalog products={JSON.parse(JSON.stringify(products))} />
    </main>
  );
}
