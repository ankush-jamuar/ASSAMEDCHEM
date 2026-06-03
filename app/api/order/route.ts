import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.json();

    const {
      productId,
      quantity,
      enteredUnit,
      convertedQuantity,
      totalPrice
    } = body;

    const order =
      await prisma.order.create({

        data: {

          customerName:
            "Demo Customer",

          totalAmount:
            totalPrice,

          items: {

            create: {

              productId,

              quantity,

              enteredUnit,

              convertedQuantity,

              unitPrice:
                totalPrice /
                convertedQuantity,

              totalPrice
            }
          }
        }
      });

    return NextResponse.json({
      success: true,
      order
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false
    });
  }
}