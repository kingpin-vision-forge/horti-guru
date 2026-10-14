import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Noto_Sans_Devanagari, Noto_Sans_Kannada } from "next/font/google";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Header } from "@/components/shell/Header";
import { Footer } from "@/components/shell/Footer";
import "../globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
// Indic faces load only on their own routes; system fonts cover the language switcher elsewhere.
const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600", "700"],
  variable: "--font-indic",
  display: "swap",
  preload: false,
});
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-indic",
  display: "swap",
  preload: false,
});

const indicFont: Record<Locale, string> = { en: "", kn: kannada.variable, hi: devanagari.variable };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1C3557",
  width: "device-width",
  initialScale: 1,
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={`${archivo.variable} ${indicFont[lang]}`}>
      <body className="min-h-dvh flex flex-col">
        <a href="#main" className="sr-only-focusable fixed left-4 top-2 z-50 rounded bg-turmeric px-4 py-2 font-semibold">
          {t.shell.skip}
        </a>
        <Header lang={lang} t={t.shell} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer lang={lang} t={t.shell} />
      </body>
    </html>
  );
}
