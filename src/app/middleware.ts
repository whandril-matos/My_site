import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { pathname } = nextUrl;

  // Se a URL já tem um idioma (ex: /en, /pt), não faz nada
  const hasLocale = /^\/(en|pt|es)(\/|$)/.test(pathname);
  if (hasLocale) {
    return NextResponse.next();
  }

  // Detecta o idioma salvo no cookie
  const savedLocale = cookies.get("lang")?.value;

  // Detecta o idioma do navegador (caso não tenha cookie)
  const browserLocale = req.headers.get("accept-language")?.split(",")[0]?.split("-")[0] || "en";

  // Define o idioma final
  const locale = savedLocale || browserLocale || "en";

  // Redireciona para a versão correta
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

// Aplica o Middleware para todas as páginas
export const config = {
  matcher: "/((?!_next|api|static|public|favicon.ico).*)",
};
