import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE, defaultLocale, isLocale } from "@/lib/i18n";

const YEAR = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (isLocale(first)) {
    // Remember the language the visitor is reading in.
    const response = NextResponse.next();
    if (request.cookies.get(LANG_COOKIE)?.value !== first) {
      response.cookies.set(LANG_COOKIE, first, { maxAge: YEAR, path: "/", sameSite: "lax" });
    }
    return response;
  }

  const saved = request.cookies.get(LANG_COOKIE)?.value;
  const lang = saved && isLocale(saved) ? saved : defaultLocale;
  const target = request.nextUrl.clone();
  target.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  target.search = search;
  return NextResponse.redirect(target, 307);
}

export const config = {
  matcher: ["/((?!_next|api|img|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|.*\\..*).*)"],
};
