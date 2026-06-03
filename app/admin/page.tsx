import { prisma } from "../../lib/prisma";
import Navbar from "../components/Navbar";
import AdminNav from "../components/AdminNav";

export default async function AdminPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalOrders = await prisma.order.count();
  const totalProducts = await prisma.product.count();

  return (
    <main className="min-h-screen p-8">
      <Navbar
  role="admin"
  title="Admin Dashboard"
/>
<AdminNav/>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="border rounded-lg p-5 shadow">
          <h2 className="text-lg font-semibold">Total Products</h2>

          <p className="text-3xl font-bold mt-2">{totalProducts}</p>
        </div>

        <div className="border rounded-lg p-5 shadow">
          <h2 className="text-lg font-semibold">Total Orders</h2>

          <p className="text-3xl font-bold mt-2">{totalOrders}</p>
        </div>
      </div>

      {/* Orders */}
      <div className="space-y-6">
        {orders.length === 0 ? (
          <div className="border rounded-lg p-5">No Orders Found</div>
        ) : (
          orders.map((order, index) => (
            <div key={order.id} className="border rounded-lg p-5 shadow">
              <h2 className="text-xl font-bold mb-2">Order #{1001 + index}</h2>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>
                <strong>Customer:</strong> {order.customerName}
              </p>

              <p>
                <strong>Status:</strong> {order.status}
              </p>

              <p>
                <strong>Total Amount:</strong> ₹{order.totalAmount.toString()}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Ordered Products</h3>

                {order.items.map((item) => (
                  <div key={item.id} className="border rounded p-3 mb-3">
                    <p>
                      <strong>Product:</strong> {item.product.name}
                    </p>

                    <p>
                      <strong>Ordered Quantity:</strong>{" "}
                      {item.quantity.toString()} {item.enteredUnit}
                    </p>

                    <p>
                      <strong>Converted Quantity:</strong>{" "}
                      {item.convertedQuantity.toString()}{" "}
                      {item.product.baseUnit}
                    </p>

                    <p>
                      <strong>Unit Price:</strong> ₹{item.unitPrice.toString()}
                    </p>

                    <p>
                      <strong>Total Price:</strong> ₹
                      {item.totalPrice.toString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
