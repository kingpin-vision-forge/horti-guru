import type { Metadata } from "next";
import Link from "next/link";
import { images } from "@/content/images";
import equipment from "@/content/pages/equipment";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CallBand } from "@/components/ui/CallBand";
import { LongForm } from "@/components/ui/LongForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Photo } from "@/components/ui/Photo";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { Tick } from "@/components/ui/SeasonExplorer";
import { whatsappHref } from "@/lib/contact";
import { getDictionary } from "@/lib/dictionaries";
import { href, url, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { inr, prices } from "@/lib/pricing";
import { breadcrumbNode, faqNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };

const PATH = "/equipment";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = equipment[lang];
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function EquipmentPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = equipment[lang];
  const k = c.kavach;
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];
  const enquire = (name: string) => whatsappHref(`${t.forms.enquiryTitle}: ${name}`);

  return (
    <>
      <JsonLd
        data={graph([
          ...siteNodes(lang),
          breadcrumbNode(lang, trail),
          {
            "@type": "Product",
            name: "Kisan Kavach",
            description: k.body,
            brand: { "@type": "Brand", name: "Kisan Kavach" },
            offers: {
              "@type": "Offer",
              price: String(prices["kisan-kavach"]),
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: url(lang, PATH),
              seller: { "@id": "https://hortiguru.com/#organization" },
            },
          },
          faqNode(c.faqs),
        ])}
      />

      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub} />

      {/* Kisan Kavach: the one firm price gets the most room */}
      <section aria-labelledby="kavach" className="wrap pb-[var(--section-y)]">
        <PriceBlock className="!p-0">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Photo photo={images.spraying} lang={lang} sizes="(min-width: 768px) 560px, 100vw" className="aspect-[4/3] md:aspect-auto md:h-full" />
            <div className="p-6 sm:p-10">
              <h2 id="kavach" className="text-[1.75rem]">
                {k.name}
              </h2>
              <p className="num mt-5 text-[clamp(2.5rem,8vw,3.5rem)] font-bold leading-none tracking-[-0.03em]">
                {inr(prices["kisan-kavach"]!)}
              </p>
              <p className="mt-2 text-slate">
                {k.unit}. <span className="font-semibold text-ink">{k.gst}</span>
              </p>
              <p className="mt-6 max-w-[52ch]">{k.body}</p>
              <ul className="mt-6 space-y-3">
                {k.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Tick />
                    <span className="[overflow-wrap:anywhere]">{p}</span>
                  </li>
                ))}
              </ul>
              <Link href={`${href(lang, "/checkout")}?service=kisan-kavach`} className="btn btn-primary mt-8 w-full sm:w-auto">
                {k.buy}
              </Link>
            </div>
          </div>
        </PriceBlock>
      </section>

      {/* Meters: three in a row */}
      <section aria-labelledby="tools" className="section border-t border-line">
        <div className="wrap">
          <h2 id="tools">{c.toolsHeading}</h2>
          <p className="mt-3 max-w-[52ch] text-slate">{c.toolsIntro}</p>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {c.tools.map((item) => (
              <li key={item.id} id={item.id} className="flex flex-col border-t border-ink/80 pt-5">
                <h3>{item.name}</h3>
                <p className="mt-2 flex-1 text-slate">{item.body}</p>
                <p className="mt-4 text-sm text-slate">{c.onRequest}</p>
                <a href={enquire(item.name)} className="btn btn-outline mt-4 self-start">
                  {c.enquire}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kits and materials */}
      <section aria-labelledby="more" className="bg-mist">
        <div className="wrap section">
          <h2 id="more">{c.moreHeading}</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {c.more.map((item) => (
              <li key={item.id} id={item.id} className="grid gap-4 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_auto] md:items-center md:gap-8">
                <h3>{item.name}</h3>
                <p className="text-slate">{item.body}</p>
                <a href={enquire(item.name)} className="btn btn-outline justify-self-start bg-paper">
                  {c.enquire}
                </a>
              </li>
            ))}
          </ul>
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
