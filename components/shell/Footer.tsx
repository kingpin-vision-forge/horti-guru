import Link from "next/link";
import type { Dict } from "@/content/dictionaries/en";
import { cropIds, cropNames } from "@/content/crops";
import { P } from "@/content/placeholders";
import { addressLines, mailHref, telHref, whatsappHref } from "@/lib/contact";
import { fill } from "@/lib/dictionaries";
import { href, type Locale } from "@/lib/i18n";
import { Wordmark } from "./Wordmark";
import { navPaths, serviceNav } from "./nav";

export function Footer({ lang, t }: { lang: Locale; t: Dict["shell"] }) {
  const f = t.footer;
  const linkClass = "inline-flex min-h-11 items-center text-paper/85 no-underline hover:text-paper hover:underline";

  return (
    <footer className="on-dark bg-indigo text-paper">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8">
        <div>
          <Link href={href(lang)} aria-label={t.home} className="text-paper no-underline">
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-xs text-paper/80">{f.description}</p>
        </div>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="text-base font-semibold tracking-normal">
            {f.services}
          </h2>
          <ul className="mt-2">
            {serviceNav.map((key) => (
              <li key={key}>
                <Link href={href(lang, navPaths[key])} className={linkClass}>
                  {t.nav[key]}
                </Link>
              </li>
            ))}
            <li>
              <Link href={href(lang, navPaths.results)} className={linkClass}>
                {t.nav.results}
              </Link>
            </li>
            <li>
              <Link href={href(lang, navPaths.about)} className={linkClass}>
                {t.nav.about}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-crops">
          <h2 id="footer-crops" className="text-base font-semibold tracking-normal">
            {f.crops}
          </h2>
          <ul className="mt-2">
            {cropIds.map((id) => (
              <li key={id}>
                <Link href={href(lang, `/crops/${id}`)} className={linkClass}>
                  {fill(f.cropAdvisory, { crop: cropNames[id][lang] })}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-semibold tracking-normal">
            <Link href={href(lang, navPaths.contact)} className="text-paper no-underline hover:underline">
              {f.contact}
            </Link>
          </h2>
          <dl className="mt-3 space-y-3 text-paper/85">
            <div>
              <dt className="text-sm text-paper/60">{f.phone}</dt>
              <dd>
                <a href={telHref()} className="num text-paper no-underline hover:underline">
                  {P.PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-paper/60">{f.whatsapp}</dt>
              <dd>
                <a href={whatsappHref()} className="num text-paper no-underline hover:underline">
                  {P.WHATSAPP}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-paper/60">{f.email}</dt>
              <dd>
                <a href={mailHref()} className="break-all text-paper no-underline hover:underline">
                  {P.EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-paper/60">{f.address}</dt>
              <dd>
                <address className="not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Horti Guru. {f.rights}
          </p>
          <ul className="flex flex-wrap gap-x-5">
            <li>
              <Link href={href(lang, "/terms")} className={linkClass}>
                {f.terms}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "/privacy")} className={linkClass}>
                {f.privacy}
              </Link>
            </li>
            <li>
              <Link href={href(lang, "/refunds")} className={linkClass}>
                {f.refunds}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
