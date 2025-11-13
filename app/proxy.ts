import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const isMaintenance = true; // test mode (we'll make env later)

  if (
    isMaintenance &&
    !req.nextUrl.pathname.startsWith("/maintenance") &&
    !req.nextUrl.pathname.startsWith("/_next") &&
    !req.nextUrl.pathname.startsWith("/api") &&
    !req.nextUrl.pathname.startsWith("/images")
  ) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
}
