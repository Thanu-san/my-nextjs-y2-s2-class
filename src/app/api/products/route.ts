import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.DUMMY_BASE_URL}/products`);
  const data = await response.json();
  return NextResponse.json(data);
}
