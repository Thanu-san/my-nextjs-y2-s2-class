import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const cookie = req.cookies.get("thanu-secert");

  const person = {
    name: "Thanu",
    age: 19,
    dob: "15-09-2007",
  };

  return NextResponse.json(person);
}
