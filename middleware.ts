// @ts-nocheck

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getIdFromPath, getPathType } from "helper"

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl
  const id = getIdFromPath(pathname)
  const type = getPathType(pathname)
  console.log("middleware", { pathname, id, type })

  if (id && type === "retreat") {
    return NextResponse.rewrite(
      new URL(`${locale ? "/" + locale : ""}/retreat/${id}`, request.url)
    )
  }

  if (pathname.endsWith(".html")) {
    return NextResponse.rewrite(
      new URL(`${locale ? "/" + locale : ""}/page${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|logo.png|images).*)"]
}
