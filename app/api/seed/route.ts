import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.createMany({
      data: [
        {
          name: "Acetone",
          description: "Industrial solvent",
          sku: "CHEM-001",
          dimension: "VOLUME",
          baseUnit: "ML",
          inventory: 50000,
          pricePerBaseUnit: 2,
        },
        {
          name: "Sulfur Powder",
          description: "Chemical powder",
          sku: "CHEM-002",
          dimension: "WEIGHT",
          baseUnit: "G",
          inventory: 100000,
          pricePerBaseUnit: 1.5,
        },
        {
          name: "Lab Beaker",
          description: "Glass beaker",
          sku: "LAB-001",
          dimension: "COUNT",
          baseUnit: "ITEM",
          inventory: 500,
          pricePerBaseUnit: 150,
        },
      ],
      skipDuplicates: true,
    });

    return NextResponse.json({
      success: true,
      inserted: products.count,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}