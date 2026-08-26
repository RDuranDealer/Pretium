import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, isValidSessionValue } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const session = req.cookies.get(SESSION_COOKIE)?.value;
  const valid = await isValidSessionValue(session);

  if (!valid) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
