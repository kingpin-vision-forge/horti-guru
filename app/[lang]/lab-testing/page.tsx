import type { Metadata } from "next";
import Link from "next/link";
import lab from "@/content/pages/lab";
import { P } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CallBand } from "@/components/ui/CallBand";
import { LongForm } from "@/components/ui/LongForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { RateTable } from "@/components/ui/RateTable";
import { Steps } from "@/components/ui/Steps";
import { whatsappHref } from "@/lib/contact";
import { fill, getDictionary } from "@/lib/dictionaries";
import { href, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { inr, prices } from "@/lib/pricing";
import { breadcrumbNode, catalogServiceNode, faqNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };

const PATH = "/lab-testing";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = lab[lang];
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function LabPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = lab[lang];
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
            serviceType: "Soil and plant testing",
            description: c.description,
            items: c.rows.map((r) => ({ name: r.name, price: prices[r.id] })),
          }),
          faqNode(c.faqs),
        ])}
      />

      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub} />

      <section aria-labelledby="rates" className="wrap pb-[var(--section-y)]">
        <h2 id="rates" className="sr-only">
          {c.tableHeading}
        </h2>
        <RateTable
          head={c.head}
          rows={c.rows.map((r) => {
            const price = prices[r.id];
            return {
              id: r.id,
              name:
                r.id === "nutrient" ? (
                  <Link href={`${href(lang, "/consultancy")}#nutrient`} className="link">
                    {r.name}
                  </Link>
                ) : (
                  r.name
                ),
              tells: r.tells,
              note: r.note,
              price: price === null ? c.onRequest : inr(price),
              unit: price === null ? undefined : r.unit,
            };
          })}
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={`${href(lang, "/checkout")}?service=soil-test`} className="btn btn-primary">
            {c.bookSoil}
          </Link>
          <a href={whatsappHref(`${t.forms.enquiryTitle}: ${c.crumb}`)} className="btn btn-outline">
            {c.askOther}
          </a>
        </div>
        <p className="mt-6 text-slate">
          {c.nutrientLead}{" "}
          <Link href={`${href(lang, "/consultancy")}#nutrient`} className="link text-ink">
            {c.nutrientLink}
          </Link>
        </p>
      </section>

      <section aria-labelledby="how" className="section border-t border-line">
        <div className="wrap">
          <h2 id="how">{c.stepsHeading}</h2>
          <div className="mt-10">
            <Steps steps={c.steps} cols={4} />
          </div>
        </div>
      </section>

      <section aria-labelledby="sampling" className="bg-mist">
        <div className="wrap section grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 id="sampling">{c.sampleHeading}</h2>
            <ol className="mt-8 space-y-5">
              {c.sampleSteps.map((s, i) => (
                <li key={s} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="num font-bold">{i + 1}.</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:pt-2">
            <h2 className="text-[1.375rem]">{c.turnaroundHeading}</h2>
            <p className="mt-4 text-lg">{fill(c.turnaround, { turnaround: P.LAB_TURNAROUND })}</p>
          </div>
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
