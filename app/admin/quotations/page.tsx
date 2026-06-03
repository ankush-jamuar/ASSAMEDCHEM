import { prisma } from "../../../lib/prisma";
import AdminNav from "../../components/AdminNav";

export default async function QuotationsPage() {
  const quotations =
    await prisma.quotation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <main className="min-h-screen p-8">
        <AdminNav />

      <h1 className="text-4xl font-bold mb-8">
        Quotations
      </h1>

      <div className="space-y-4">

        {quotations.map((quotation, index) => (

          <div
            key={quotation.id}
            className="border rounded-lg p-5"
          >

            <h2 className="font-bold">
              Quotation #{1001 + index}
            </h2>

            <p>
              Customer:
              {" "}
              {quotation.customerName}
            </p>

            <p>
              Amount:
              ₹
              {quotation.totalAmount.toString()}
            </p>

            <p>
              Status:
              {" "}
              {quotation.status}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}