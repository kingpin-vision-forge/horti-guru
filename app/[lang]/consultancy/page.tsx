import type { Metadata } from "next";
import Link from "next/link";
import consultancy from "@/content/pages/consultancy";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CallBand } from "@/components/ui/CallBand";
import { LongForm } from "@/components/ui/LongForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { whatsappHref } from "@/lib/contact";
import { getDictionary } from "@/lib/dictionaries";
import { href, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { inr, prices } from "@/lib/pricing";
import { breadcrumbNode, catalogServiceNode, faqNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };

const PATH = "/consultancy";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = consultancy[lang];
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function ConsultancyPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = consultancy[lang];
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];

  return (
    <>
      <JsonLd
        data={graph([
          ...siteNodes(lang),
          breadcrumbNode(lang, trail),
          catalogServiceNode({
            lang,
            path: PATH,
            name: c.h1,
            serviceType: "Agricultural consultancy",
            description: c.description,
            items: c.services.map((s) => ({ name: s.name, price: prices[s.id] })),
          }),
          faqNode(c.faqs),
        ])}
      />

      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub} />

      <section aria-labelledby="services" className="wrap pb-[var(--section-y)]">
        <h2 id="services" className="sr-only">
          {c.listHeading}
        </h2>
        <div className="max-w-4xl">
          <Accordion
            items={c.services.map((s) => {
              const price = prices[s.id];
              const bookable = price !== null;
              return {
                id: s.id,
                summary: (
                  <span className="grid gap-x-6 gap-y-1 sm:grid-cols-[1fr_auto]">
                    <span className="text-lg font-semibold">{s.name}</span>
                    <span className="num text-lg font-bold sm:row-span-2 sm:text-right">
                      {price === null ? c.onRequest : inr(price)}
                      {price !== null && s.unit && <span className="block text-sm font-normal text-slate">{s.unit}</span>}
                    </span>
                    <span className="text-slate">{s.line}</span>
                    {s.note && <span className="font-semibold text-ink sm:col-span-2">{s.note}</span>}
                  </span>
                ),
                body: (
                  <div className="max-w-[62ch]">
                    {s.detail.map((d) => (
                      <p key={d} className="mt-3 first:mt-0">
                        {d}
                      </p>
                    ))}
                    {bookable ? (
                      <Link href={`${href(lang, "/checkout")}?service=${s.id}`} className="btn btn-primary mt-6">
                        {c.book}: {s.name}
                      </Link>
                    ) : (
                      <a href={whatsappHref(`${t.forms.enquiryTitle}: ${s.name}`)} className="btn btn-outline mt-6">
                        {c.enquire}
                      </a>
                    )}
                  </div>
                ),
              };
            })}
          />
        </div>
      </section>

      <section aria-labelledby="season" className="on-dark bg-indigo text-paper">
        <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="season">{c.advisoryHeading}</h2>
            <p className="mt-3 max-w-[52ch] text-lg text-paper/80">{c.advisoryBody}</p>
          </div>
          <Link href={href(lang, "/advisory")} className="btn btn-outline shrink-0">
            {c.advisoryLink}
          </Link>
        </div>
      </section>

      <section aria-labelledby="faq" className="section">
        <div className="wrap">
          <h2 id="faq">{c.faqHeading}</h2>
          <div className="mt-8 max-w-[68ch]">
            <Accordion
              items={c.faqs.map((f, i) => ({
                id: `faq-${i}`,
                summary: <span className="text-lg font-semibold">{f.q}</span>,
                body: <p className="max-w-[62ch] text-slate">{f.a}</p>,
              }))}
            />
          </div>
        </div>
      </section>

      <div className="border-t border-line">
        <div className="wrap section">
          <LongForm lines={c.longform} />
        </div>
      </div>

      <CallBand lang={lang} text={c.closing} cta={t.home.ctaCall} />
    </>
  );
}
