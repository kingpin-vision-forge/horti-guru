import Link from "next/link";
import type { Dict } from "@/content/dictionaries/en";
import { href, type Locale } from "@/lib/i18n";
import { HeaderScroll } from "./HeaderScroll";
import { LangSwitcher } from "./LangSwitcher";
import { MobileNav } from "./MobileNav";
import { Wordmark } from "./Wordmark";
import { allNav, navPaths, primaryNav } from "./nav";

export function Header({ lang, t }: { lang: Locale; t: Dict["shell"] }) {
  const mobileLinks = allNav.map((key) => ({ href: href(lang, navPaths[key]), label: t.nav[key] }));

  return (
    <HeaderScroll>
      <div className="wrap flex h-[var(--header-h)] items-center gap-4">
        <Link href={href(lang)} aria-label={t.home} className="-ml-1 flex min-h-11 items-center px-1 text-ink no-underline">
          <Wordmark />
        </Link>

        <nav aria-label={t.menu} className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((key) => (
              <li key={key}>
                <Link
                  href={href(lang, navPaths[key])}
                  className="flex min-h-11 items-center rounded px-3 text-[0.9375rem] text-ink no-underline hover:bg-mist"
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LangSwitcher lang={lang} label={t.language} />
          <Link href={`${href(lang, "/checkout")}?service=call`} className="btn btn-primary hidden min-h-11 py-2 xl:inline-flex">
            {t.headerCta}
          </Link>
          <MobileNav links={mobileLinks} menuLabel={t.menu} closeLabel={t.close} />
        </div>
      </div>
    </HeaderScroll>
  );
}
