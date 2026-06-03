import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,

        sku: body.sku,

        description: body.description,

        dimension: body.dimension,

        baseUnit: body.baseUnit,

        inventory: Number(body.inventory),

        pricePerBaseUnit: Number(body.price),
      },
    });

    return NextResponse.json({
      success: true,
      product,
    });
  } catch {
    return NextResponse.json({
      success: false,
    });
  }
}
