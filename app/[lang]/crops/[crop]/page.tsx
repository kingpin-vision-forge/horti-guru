import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cropIds, cropNames, isCrop, type CropId } from "@/content/crops";
import { cropData } from "@/content/crops/index";
import { images } from "@/content/images";
import cropTemplate from "@/content/pages/cropTemplate";
import lab from "@/content/pages/lab";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CallBand } from "@/components/ui/CallBand";
import { LongForm } from "@/components/ui/LongForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Photo } from "@/components/ui/Photo";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { SeasonBar } from "@/components/ui/SeasonBar";
import { Tick } from "@/components/ui/SeasonExplorer";
import { fill, getDictionary } from "@/lib/dictionaries";
import { href, locales, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { ADVISORY_FIRST_ACRE, inr, prices, type ServiceId } from "@/lib/pricing";
import { breadcrumbNode, faqNode, graph, serviceNode, siteNodes } from "@/lib/schema";
import { stageForMonth } from "@/lib/season";

// The calendar marks the current stage, so refresh daily.
export const revalidate = 86400;

type Props = { params: Promise<{ lang: Locale; crop: string }> };

export function generateStaticParams() {
  return locales.flatMap((lang) => cropIds.map((crop) => ({ lang, crop })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, crop } = await params;
  if (!isCrop(crop)) return {};
  const c = cropData[crop].copy[lang];
  return buildMetadata({ lang, path: `/crops/${crop}`, title: c.title, description: c.description });
}

function currentMonthIST() {
  return Number(new Intl.DateTimeFormat("en-IN", { month: "numeric", timeZone: "Asia/Kolkata" }).format(new Date()));
}

export default async function CropPage({ params }: Props) {
  const { lang, crop } = await params;
  if (!isCrop(crop)) notFound();
  const id: CropId = crop;
  const data = cropData[id];
  const c = data.copy[lang];
  const t = getDictionary(lang);
  const tpl = cropTemplate[lang];
  const name = cropNames[id][lang];
  const path = `/crops/${id}`;
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: fill(tpl.cropLink, { crop: name }), path },
  ];

  const stages = data.calendar.map((s, i) => ({ ...s, label: c.stages[i] }));
  // Banana's calendar is one example planting, so no "this month" marker there.
  const active = id === "banana" ? undefined : stageForMonth(stages, currentMonthIST());
  const labRows = lab[lang].rows;
  const tests = Object.entries(c.tests) as [ServiceId, string][];

  return (
    <>
      <JsonLd
        data={graph([
          ...siteNodes(lang),
          breadcrumbNode(lang, trail),
          serviceNode({
            lang,
            path,
            name: c.h1,
            serviceType: `${cropNames[id].en} crop advisory`,
            description: c.description,
            price: ADVISORY_FIRST_ACRE,
            unitText: "per acre per crop cycle or year",
          }),
          faqNode(c.faqs),
        ])}
      />

      {/* Hero */}
      <div className="border-b border-line">
        <div className="wrap grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
          <div className="!px-0 [&>header]:!px-0">
            <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.tagline}>
              <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-lg font-semibold" aria-label={name}>
                {locales.map((l) => (
                  <span key={l} lang={l} className={l === lang ? "text-ink" : "text-slate"}>
                    {cropNames[id][l]}
                  </span>
                ))}
              </p>
            </PageHeader>
          </div>
          <Photo
            photo={images[id]}
            lang={lang}
            priority
            sizes="(min-width: 1024px) 420px, 100vw"
            className="mb-10 aspect-[4/3] rounded-md lg:mb-0 lg:aspect-auto lg:h-full lg:rounded-none"
          />
        </div>
      </div>

      {/* Calendar */}
      <section aria-labelledby="calendar" className="section">
        <div className="wrap">
          <h2 id="calendar">{tpl.calendarHeading}</h2>
          <SeasonBar
            lang={lang}
            stages={stages}
            active={active}
            activeLabel={active === undefined ? undefined : tpl.calendarNow}
            caption={c.seasonCaption}
            draw="view"
            className="mt-10 max-w-4xl"
          />
        </div>
      </section>

      {/* Facts */}
      <section aria-labelledby="facts" className="bg-mist">
        <div className="wrap py-12 sm:py-14">
          <h2 id="facts" className="text-[1.375rem]">
            {tpl.factsHeading}
          </h2>
          <dl className="mt-6 grid border-t border-ink/80 md:grid-cols-4">
            {(
              [
                [tpl.planting, c.facts.planting],
                [tpl.duration, c.facts.duration],
                [tpl.districts, c.facts.districts],
                [tpl.spacing, c.facts.spacing],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="border-b border-line py-4 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                <dt className="text-sm text-slate">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Problems */}
      <section aria-labelledby="problems" className="section">
        <div className="wrap">
          <h2 id="problems">{tpl.problemsHeading}</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {c.problems.map((p) => (
              <article key={p.name} className="border-t border-ink/80 pt-5">
                <h3>{p.name}</h3>
                <p className="mt-2 text-slate">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How advisory helps, with the package */}
      <section aria-labelledby="helps" className="section border-t border-line">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 id="helps">{tpl.helpsHeading}</h2>
            <ul className="mt-8 space-y-4">
              {c.helps.map((h) => (
                <li key={h} className="flex gap-3 text-lg">
                  <Tick />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href={href(lang, "/advisory")} className="link">
                {tpl.advisoryLink}
              </Link>
            </p>
          </div>
          <PriceBlock>
            <p className="text-xl font-semibold">{fill(tpl.cropLink, { crop: name })}</p>
            <p className="num mt-4 text-[2.75rem] font-bold leading-none tracking-[-0.03em]">{inr(ADVISORY_FIRST_ACRE)}</p>
            <p className="mt-3 text-slate">{tpl.ctaLine}</p>
            <Link href={`${href(lang, "/checkout")}?service=advisory&crop=${id}`} className="btn btn-primary mt-8 w-full">
              {fill(tpl.cta, { crop: name })}
            </Link>
          </PriceBlock>
        </div>
      </section>

      {/* Related tests */}
      <section aria-labelledby="tests" className="bg-mist">
        <div className="wrap section">
          <h2 id="tests">{fill(tpl.testsHeading, { crop: name })}</h2>
          <ul className="mt-8 border-t border-ink/80">
            {tests.map(([sid, why]) => {
              const row = labRows.find((r) => r.id === sid);
              const price = prices[sid];
              return (
                <li key={sid} className="grid gap-2 border-b border-line py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto] md:gap-8">
                  <Link href={`${href(lang, "/lab-testing")}#${sid}`} className="link font-semibold">
                    {row?.name}
                  </Link>
                  <p className="text-slate">{why}</p>
                  <p className="num font-bold md:text-right">{price ? inr(price) : ""}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-6">
            <Link href={href(lang, "/lab-testing")} className="link">
              {tpl.labLink}
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="section">
        <div className="wrap split">
          <h2 id="faq">{fill(tpl.faqHeading, { crop: name })}</h2>
          <div className="mt-8 max-w-[68ch] lg:mt-0">
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

      {/* Long-form */}
      <div className="border-t border-line">
        <div className="wrap section">
          <LongForm lines={c.longform} />
        </div>
      </div>

      {/* Sibling crops */}
      <nav aria-labelledby="other-crops" className="border-t border-line">
        <div className="wrap grid gap-6 py-12 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
          <h2 id="other-crops" className="text-[1.375rem]">
            {tpl.otherCrops}
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {data.siblings.map((s) => (
              <li key={s}>
                <Link href={href(lang, `/crops/${s}`)} className="link inline-flex min-h-11 items-center text-lg">
                  {fill(tpl.cropLink, { crop: cropNames[s as CropId][lang] })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CallBand lang={lang} text={t.home.secondEntry} cta={t.home.ctaCall} />
    </>
  );
}
