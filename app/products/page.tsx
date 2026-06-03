import { prisma } from "../../lib/prisma";
import ProductCatalog from "../components/ProductCatalog";
import Navbar from "../components/Navbar";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen p-8">
     <Navbar
  role="seller"
  title="Product Catalog"
/>

      <ProductCatalog products={JSON.parse(JSON.stringify(products))} />
    </main>
  );
}
