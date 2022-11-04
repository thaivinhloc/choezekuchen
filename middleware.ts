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
      new URL(`/retreat/${id}`, request.url)
    )
  }

  return NextResponse.next()
}
