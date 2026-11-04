import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ proId: string }>;
  }
) {
  const { proId } = await params;

  const response = await fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const product = await response.json();

  return NextResponse.json(product);
}
