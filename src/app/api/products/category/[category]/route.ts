import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ category: string }>;
  }
) {
  const { category } = await params;

  try {
    const response = await fetch(
      `${process.env.DUMMY_BASE_URL}/products/category/${encodeURIComponent(category)}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch products for category: ${category}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
