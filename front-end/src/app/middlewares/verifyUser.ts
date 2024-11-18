import { NextRequest, NextResponse } from "next/server";

export function verifyUser(req: NextRequest) {
  const token = req.cookies.get("acessToken")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", req.url));
  return NextResponse.next();
}

export const config = {
  // matcher: [
  //   "/newCall",
  //   "/myCalls",
  //   "/dashboardCalls/:path*",
  //   "/resolvedCalls",
  //   "/callCreated",
  // ],
};
