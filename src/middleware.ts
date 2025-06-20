import { NextRequest, NextResponse } from "next/server";
// import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { auth } from "../auth";

const publicPages = [
  "/",
  "/sign-in",
  // (/secret requires auth)
];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = async (req: NextRequest) => {
  const session = await auth();

  if (session) {
    return intlMiddleware(req);
  }
  const signInUrl = new URL("/sign-in", req.url);
  return NextResponse.redirect(signInUrl);
};

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return authMiddleware(req);
  }
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
