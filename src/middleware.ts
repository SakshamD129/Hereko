import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));
    /*const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }
    return response;||*/
    if (request.nextUrl.pathname === "/biralo") {
        console.log(request.nextUrl);
        return NextResponse.redirect(new URL("/just", request.nextUrl));

    }
}
// export const config = {
// matcher: "/profile",
// };