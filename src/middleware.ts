import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = false;
  if(!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if(request.nextUrl.pathname.startsWith("/about")) {
    // return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config={
  // matcher: "/dashboard/:path*", // semua url yang didalam route dashboard, tidak akan dieksekusi ketika menggunakan :path*
  matcher: ["/dashboard/:path*", "/about:path*"], // jika tidak menggunakan :path:* maka apapun url di belakangnya masih bisa di akses
}