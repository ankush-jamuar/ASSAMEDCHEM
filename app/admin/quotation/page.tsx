import { prisma } from "../../../lib/prisma";

export default async function QuotationsPage() {

  const quotations =
    await prisma.quotation.findMany({

      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Quotations
      </h1>

      <div className="space-y-4">

        {quotations.map(
          (quotation) => (

            <div
              key={quotation.id}
              className="
                border
                rounded
                p-4
              "
            >

              <p>
                Customer:
                {" "}
                {
                  quotation.customerName
                }
              </p>

              <p>
                Amount:
                ₹
                {
                  quotation.totalAmount.toString()
                }
              </p>

              <p>
                Status:
                {" "}
                {
                  quotation.status
                }
              </p>

            </div>
          )
        )}

      </div>

    </main>
  );
}