import { prisma } from "../../lib/prisma";
import ProductCatalog from "../components/ProductCatalog";
import Navbar from "../components/Navbar";
import SellerNav from "../components/SellerNav";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen p-8">
     <Navbar
  role="seller"
  title="Product Catalog"
/>
<SellerNav />

      <ProductCatalog products={JSON.parse(JSON.stringify(products))} />
    </main>
  );
}
