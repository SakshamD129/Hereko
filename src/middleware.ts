import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    const check = request.nextUrl.pathname;
    if (check === "/biralo") {
        return NextResponse.redirect(new URL("/just", request.nextUrl));

    }
}