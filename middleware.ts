import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Toggle this flag ON/OFF to enable or disable maintenance mode
  const MAINTENANCE_MODE = true;

  // Allow the maintenance page itself and static assets
  if (
    MAINTENANCE_MODE &&
    !req.nextUrl.pathname.startsWith("/maintenance") &&
    !req.nextUrl.pathname.startsWith("/_next") &&
    !req.nextUrl.pathname.startsWith("/api") &&
    !req.nextUrl.pathname.startsWith("/images")
  ) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  // Otherwise, continue normally
  return NextResponse.next();
}
