import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";

export type Crumb = { name: string; path: string };

/** Visible trail. The last item is the current page. Pair with breadcrumbNode() for schema. */
export function Breadcrumb({ lang, trail, label }: { lang: Locale; trail: Crumb[]; label: string }) {
  return (
    <nav aria-label={label} className="text-sm text-slate">
      <ol className="flex flex-wrap items-center gap-x-2">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-x-2">
              {last ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <>
                  <Link href={href(lang, c.path)} className="inline-flex min-h-11 items-center text-slate no-underline hover:text-ink hover:underline">
                    {c.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
