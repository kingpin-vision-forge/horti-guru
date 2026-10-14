import type { Metadata } from "next";
import legal, { LEGAL_UPDATED } from "@/content/pages/legal";
import { P } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/shell/Breadcrumb";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, siteNodes } from "@/lib/schema";

export type LegalKind = "terms" | "privacy" | "refunds";

/** Swap any filled-in business facts into the legal text. */
function withFacts(text: string) {
  return text.replace(/\[([A-Z_]+)\]/g, (token, key: string) => (key in P ? P[key as keyof typeof P] : token));
}

const intlLocale: Record<Locale, string> = { en: "en-IN", kn: "kn-IN", hi: "hi-IN" };

export function legalMetadata(lang: Locale, kind: LegalKind): Metadata {
  const d = legal[lang][kind];
  return buildMetadata({ lang, path: `/${kind}`, title: d.title, description: d.description });
}

/** One template for terms, privacy and refunds: a readable measure and a sticky contents list. */
export function LegalPage({ lang, kind }: { lang: Locale; kind: LegalKind }) {
  const t = getDictionary(lang);
  const docs = legal[lang];
  const d = docs[kind];
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: d.h1, path: `/${kind}` },
  ];
  const updated = new Intl.DateTimeFormat(intlLocale[lang], { dateStyle: "long" }).format(new Date(LEGAL_UPDATED));

  return (
    <>
      <JsonLd data={graph([...siteNodes(lang), breadcrumbNode(lang, trail)])} />
      <div className="wrap pt-4 pb-[var(--section-y)]">
        <Breadcrumb lang={lang} trail={trail} label={t.shell.breadcrumb} />
        <div className="mt-8 grid gap-12 sm:mt-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label={docs.ui.contents} className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-h)+2rem)]">
              <p className="text-sm font-semibold text-slate">{docs.ui.contents}</p>
              <ul className="mt-3 space-y-1 border-l border-line">
                {d.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.9375rem] text-slate no-underline hover:border-ink hover:text-ink">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="measure">
            <h1>{d.h1}</h1>
            <p className="mt-4 text-slate">
              {docs.ui.updated}: <time dateTime={LEGAL_UPDATED}>{updated}</time>
            </p>
            {d.sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-h`}
                className={`scroll-mt-24 ${s.emphasis ? "mt-12 rounded-xl border-2 border-ink bg-white p-6 sm:p-8" : "mt-10"}`}
              >
                <h2 id={`${s.id}-h`} className="text-[1.5rem]">
                  {s.heading}
                </h2>
                <div className={`mt-4 space-y-4 leading-relaxed [overflow-wrap:anywhere] ${s.emphasis ? "text-[1.0625rem]" : ""}`}>
                  {s.body.map((p) => (
                    <p key={p}>{withFacts(p)}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
