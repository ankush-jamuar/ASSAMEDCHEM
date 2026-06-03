import { prisma } from "../../lib/prisma";
import Navbar from "../components/SellerNav";

export default async function MyQuotations() {

  const quotations =
    await prisma.quotation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <main className="p-8">

      <Navbar
        role="seller"
        title="My Quotations"
      />

      <div className="space-y-4">

        {quotations.map(
          (quotation, index) => (

            <div
              key={quotation.id}
              className="border rounded-lg p-4"
            >

              <h2 className="font-bold">
                Quotation #{1001 + index}
              </h2>

              <p>
                Customer:
                {quotation.customerName}
              </p>

              <p>
                Amount: ₹
                {quotation.totalAmount.toString()}
              </p>

              <p>
                Status:
                {quotation.status}
              </p>

            </div>
          )
        )}

      </div>

    </main>
  );
}