import type { Metadata } from "next";
import Link from "next/link";
import { cropIds, cropNames } from "@/content/crops";
import { images } from "@/content/images";
import longform from "@/content/longform/home";
import { P } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { LongForm } from "@/components/ui/LongForm";
import { Photo } from "@/components/ui/Photo";
import { ScaleStrip } from "@/components/ui/ScaleStrip";
import { SeasonBar } from "@/components/ui/SeasonBar";
import { fill, getDictionary } from "@/lib/dictionaries";
import { href, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, siteNodes } from "@/lib/schema";
import { RHIZOME_CALENDAR, stageForMonth } from "@/lib/season";

// The hero bar marks where most fields are this month, so refresh daily.
export const revalidate = 86400;

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return buildMetadata({ lang, path: "/", title: t.meta.homeTitle, description: t.meta.homeDescription });
}

function currentMonthIST() {
  return Number(new Intl.DateTimeFormat("en-IN", { month: "numeric", timeZone: "Asia/Kolkata" }).format(new Date()));
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const h = t.home;
  const stages = RHIZOME_CALENDAR.map((s, i) => ({ ...s, label: t.season.stages[i] }));
  const active = stageForMonth(stages, currentMonthIST());
  const callHref = `${href(lang, "/checkout")}?service=call`;

  return (
    <>
      <JsonLd data={graph([...siteNodes(lang), breadcrumbNode(lang, [{ name: "Horti Guru", path: "/" }])])} />

      {/* 1. Hero */}
      <section className="border-b border-line">
        <div className="wrap grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          <div className="pt-10 pb-12 sm:pt-16 lg:py-20">
            <h1 className="max-w-[20ch] lg:max-w-[22ch]">{h.h1}</h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-slate sm:text-xl">{h.sub}</p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Link href={callHref} className="btn btn-primary">
                {h.ctaCall}
              </Link>
              <Link href={href(lang, "/advisory")} className="btn btn-outline">
                {h.ctaPackages}
              </Link>
            </div>
            <SeasonBar
              lang={lang}
              stages={stages}
              active={active}
              activeLabel={t.season.nowLabel}
              caption={t.season.caption}
              draw="load"
              className="mt-12 max-w-2xl sm:mt-14"
            />
          </div>
          <Photo
            photo={images.hero}
            lang={lang}
            priority
            sizes="(min-width: 1024px) 400px, 100vw"
            className="mb-10 aspect-[16/9] rounded-md lg:mb-0 lg:aspect-auto lg:h-full lg:rounded-none"
          />
        </div>
      </section>

      {/* 2. Scale */}
      <ScaleStrip
        heading={h.scaleHeading}
        items={[
          { value: P.METRIC_ACRES, label: h.scale.acres },
          { value: P.METRIC_GROWERS, label: h.scale.growers },
          { value: P.METRIC_YEARS, label: h.scale.years },
          { value: "5", label: h.scale.crops },
        ]}
      />

      {/* 3. The problem */}
      <section aria-labelledby="problem" className="section">
        <div className="wrap">
          <h2 id="problem" className="sr-only">
            {h.problemHeading}
          </h2>
          <div className="max-w-[30ch] space-y-5 text-[clamp(1.375rem,3.6vw,2.125rem)] leading-[1.3] tracking-[-0.015em] text-ink/80 sm:space-y-6">
            {h.problems.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-3 font-semibold text-ink">{h.problemAnswer}</p>
          </div>
        </div>
      </section>

      {/* 4. Crops */}
      <section aria-labelledby="crops" className="pb-[var(--section-y)]">
        <div className="wrap">
          <h2 id="crops">{h.cropsHeading}</h2>
        </div>
        <ul className="crop-rail wrap mt-8 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible">
          {cropIds.map((id) => (
            <li key={id} className="w-[62%] shrink-0 xs:w-[44%] sm:w-[34%] lg:w-auto">
              <Link href={href(lang, `/crops/${id}`)} className="group relative block text-ink no-underline">
                <Photo photo={images[id]} lang={lang} sizes="(min-width: 1024px) 230px, 60vw" className="aspect-[3/4] rounded-md" />
                <span className="mt-3 block text-lg font-semibold leading-tight group-hover:underline">
                  {cropNames[id][lang]}
                </span>
                {lang !== "en" && <span className="block text-sm text-slate">{cropNames[id].en}</span>}
                <span className="sr-only">{fill(h.cropLink, { crop: "" })}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. How it works */}
      <section aria-labelledby="how" className="section border-t border-line">
        <div className="wrap">
          <h2 id="how">{h.howHeading}</h2>
          <ol className="mt-10 grid md:grid-cols-3 md:gap-8">
            {h.steps.map((step, i) => {
              const last = i === h.steps.length - 1;
              return (
                <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-x-4 md:block">
                  {/* Connecting rule: vertical on phones, horizontal on desktop. */}
                  <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4" aria-hidden="true">
                    <span className="num text-[2.75rem] font-bold leading-none tracking-[-0.03em]">{i + 1}</span>
                    {!last && <span className="ml-[0.9rem] mt-3 w-px flex-1 bg-line md:ml-0 md:mt-0 md:h-px md:w-auto" />}
                  </div>
                  <div className={last ? "" : "pb-10 md:pb-0"}>
                    <h3 className="mt-2 md:mt-5">
                      <span className="sr-only">{i + 1}. </span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-slate">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 6. Testimonial */}
      <section aria-labelledby="voice" className="on-dark bg-indigo text-paper">
        <div className="wrap section">
          <h2 id="voice" className="sr-only">
            {h.testimonialHeading}
          </h2>
          <figure className="max-w-4xl">
            <blockquote className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium [overflow-wrap:anywhere] leading-[1.25] tracking-[-0.015em]">
              <p>{P.TESTIMONIAL_FEATURED_QUOTE}</p>
            </blockquote>
            <figcaption className="mt-8 text-paper/70">
              <span className="block font-semibold text-paper">
                {P.TESTIMONIAL_FEATURED_NAME}, {P.TESTIMONIAL_FEATURED_DISTRICT}
              </span>
              <span className="block">
                {P.TESTIMONIAL_FEATURED_CROP}, {P.TESTIMONIAL_FEATURED_ACRES} {h.acres}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 7. What we do */}
      <section aria-labelledby="services" className="section">
        <div className="wrap">
          <h2 id="services">{h.servicesHeading}</h2>
          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {(
              [
                ["advisory", "/advisory"],
                ["consultancy", "/consultancy"],
                ["lab", "/lab-testing"],
                ["inputs", "/bio-inputs"],
              ] as const
            ).map(([key, path]) => {
              const s = h.services[key];
              return (
                <article key={key} className="flex flex-col border-t border-line py-7">
                  <h3 className="text-[1.375rem]">
                    <Link href={href(lang, path)} className="link decoration-line hover:decoration-ink">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-slate">{s.line}</p>
                  <p className="num mt-4 text-lg font-bold">{s.price}</p>
                  {key === "inputs" && (
                    <p className="mt-3 flex gap-5">
                      <Link href={href(lang, "/bio-inputs")} className="link">
                        {h.bioInputsLink}
                      </Link>
                      <Link href={href(lang, "/equipment")} className="link">
                        {h.equipmentLink}
                      </Link>
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Long-form */}
      <div className="border-t border-line">
        <div className="wrap section">
          <LongForm lines={longform[lang]} />
        </div>
      </div>

      {/* 9. Second entry point */}
      <section className="bg-mist">
        <div className="wrap flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[28ch] text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-tight tracking-[-0.015em]">
            {h.secondEntry}
          </p>
          <Link href={callHref} className="btn btn-primary shrink-0">
            {h.ctaCall}
          </Link>
        </div>
      </section>
    </>
  );
}

