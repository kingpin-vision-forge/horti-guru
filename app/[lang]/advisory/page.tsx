import type { Metadata } from "next";
import Link from "next/link";
import { cropIds, cropNames } from "@/content/crops";
import advisory from "@/content/pages/advisory";
import { P, testimonial } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { AcreageCalculator } from "@/components/ui/AcreageCalculator";
import { Accordion } from "@/components/ui/Accordion";
import { CallBand } from "@/components/ui/CallBand";
import { LongForm } from "@/components/ui/LongForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { SeasonExplorer, Tick } from "@/components/ui/SeasonExplorer";
import { Testimonial } from "@/components/ui/Testimonial";
import { fill, getDictionary } from "@/lib/dictionaries";
import { href, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { ADVISORY_FIRST_ACRE, inr } from "@/lib/pricing";
import { breadcrumbNode, faqNode, graph, serviceNode, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };

const PATH = "/advisory";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = advisory[lang];
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function AdvisoryPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = advisory[lang];
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];
  const faqs = c.faqs.map((f) => ({ q: f.q, a: fill(f.a, { window: P.CONFIRMATION_WINDOW }) }));
  const checkout = `${href(lang, "/checkout")}?service=advisory`;

  return (
    <>
      <JsonLd
        data={graph([
          ...siteNodes(lang),
          breadcrumbNode(lang, trail),
          serviceNode({
            lang,
            path: PATH,
            name: c.h1,
            serviceType: "Horticulture crop advisory",
            description: c.description,
            price: ADVISORY_FIRST_ACRE,
            unitText: "per acre per crop cycle or year",
          }),
          faqNode(faqs),
        ])}
      />

      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub} />

      {/* Anchor, package and calculator */}
      <section aria-labelledby="package" className="wrap pb-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div>
            <p className="mb-5 text-lg text-slate">{c.anchor}</p>
            <PriceBlock>
              <h2 id="package" className="text-[1.5rem]">
                {c.packageName}
              </h2>
              <p className="mt-2 text-slate">
                {c.terms.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <p className="num mt-8 text-[clamp(3rem,10vw,4.5rem)] font-bold leading-none tracking-[-0.035em]">
                {inr(ADVISORY_FIRST_ACRE)}
              </p>
              <p className="mt-2 text-slate">{c.unit}</p>

              <div className="mt-8 border-t border-line pt-8">
                <p className="num text-[clamp(2.25rem,8vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">{c.perDay}</p>
                <p className="mt-3 max-w-[36ch] text-lg text-slate">{c.perDaySub}</p>
              </div>

              <h3 className="mt-10">{c.includesHeading}</h3>
              <ul className="mt-4 space-y-3">
                {c.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Tick />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href={checkout} className="btn btn-primary mt-10 w-full">
                {c.cta}
              </Link>
            </PriceBlock>
          </div>

          <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:mt-[3.25rem]">
            <AcreageCalculator t={c.calculator} checkoutHref={checkout} />
          </div>
        </div>
      </section>

      {/* What a season covers */}
      <section aria-labelledby="season" className="section border-t border-line">
        <div className="wrap">
          <h2 id="season">{c.seasonHeading}</h2>
          <p className="mt-3 max-w-[52ch] text-slate">{c.seasonIntro}</p>
          <div className="mt-10 max-w-4xl">
            <SeasonExplorer stages={c.stages} label={c.seasonLabel} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="voices" className="section border-t border-line">
        <div className="wrap">
          <h2 id="voices">{c.testimonialsHeading}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {[1, 2, 3].map((n) => {
              const r = testimonial(n);
              return (
                <Testimonial
                  key={n}
                  quote={r.quote}
                  name={r.name}
                  meta={`${r.district}. ${r.crop}, ${r.acres} ${t.home.acres}`}
                />
              );
            })}
          </div>
          <p className="mt-10">
            <Link href={href(lang, "/results")} className="link">
              {c.resultsLink}
            </Link>
          </p>
        </div>
      </section>

      {/* Crops */}
      <section aria-labelledby="crop-links" className="border-t border-line bg-mist">
        <div className="wrap py-12">
          <h2 id="crop-links" className="text-[1.375rem]">
            {c.cropsHeading}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-1">
            {cropIds.map((id) => (
              <li key={id}>
                <Link href={href(lang, `/crops/${id}`)} className="link inline-flex min-h-11 items-center text-lg">
                  {fill(c.cropLink, { crop: cropNames[id][lang] })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="section">
        <div className="wrap">
          <h2 id="faq">{c.faqHeading}</h2>
          <div className="mt-8 max-w-[68ch]">
            <Accordion
              items={faqs.map((f, i) => ({
                id: `q${i}`,
                summary: <span className="text-lg font-semibold">{f.q}</span>,
                body: <p className="max-w-[62ch] text-slate">{f.a}</p>,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Long-form */}
      <div className="border-t border-line">
        <div className="wrap section">
          <LongForm lines={c.longform} />
        </div>
      </div>

      <CallBand lang={lang} text={c.closing} cta={t.home.ctaCall} />
    </>
  );
}
