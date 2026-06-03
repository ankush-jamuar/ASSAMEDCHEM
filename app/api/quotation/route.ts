import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.json();

    const {
      customerName,
      totalPrice,
    } = body;

    const quotation =
      await prisma.quotation.create({

        data: {

          customerName,

          totalAmount:
            totalPrice,

          status:
            "PENDING",
        },
      });

    return NextResponse.json({
      success: true,
      quotation,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
    });
  }
}