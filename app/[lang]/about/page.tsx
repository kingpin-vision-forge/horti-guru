import type { Metadata } from "next";
import { images } from "@/content/images";
import company from "@/content/pages/company";
import { P, expert, isFilled } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHeader } from "@/components/ui/PageHeader";
import { Photo } from "@/components/ui/Photo";
import { addressLines } from "@/lib/contact";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };
const PATH = "/about";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = company[lang].about;
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = company[lang].about;
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];
  const address = addressLines.join(", ");

  return (
    <>
      <JsonLd data={graph([...siteNodes(lang), breadcrumbNode(lang, trail)])} />
      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} />

      <section aria-labelledby="why" className="wrap pb-[var(--section-y)]">
        <h2 id="why">{c.whyHeading}</h2>
        <div className="mt-6 max-w-[62ch] space-y-5 text-lg leading-relaxed">
          {c.why.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="team" className="section border-t border-line">
        <div className="wrap">
          <h2 id="team">{c.teamHeading}</h2>
          <p className="mt-3 text-slate">{c.teamIntro}</p>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {[1, 2, 3].map((n) => {
              const e = expert(n);
              return (
                <li key={n} className="border-t border-ink/80 pt-5 [overflow-wrap:anywhere]">
                  <h3>{e.name}</h3>
                  <p className="mt-1 font-semibold">{e.qualification}</p>
                  <p className="mt-2 text-slate">{e.specialisation}</p>
                  <p className="num mt-4">
                    <span className="text-2xl font-bold">{e.years}</span> <span className="text-slate">{c.yearsLabel}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how" className="bg-mist">
        <div className="wrap section">
          <h2 id="how">{c.howHeading}</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {c.how.map((h) => (
              <div key={h.title}>
                <dt className="text-xl font-semibold">{h.title}</dt>
                <dd className="mt-2 text-slate">{h.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="where" className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <h2 id="where">{c.whereHeading}</h2>
            <dl className="mt-8 space-y-6 text-lg">
              <div>
                <dt className="text-sm text-slate">{c.addressLabel}</dt>
                <dd className="mt-1 font-semibold">
                  <address className="not-italic">
                    {addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">{c.hoursLabel}</dt>
                <dd className="mt-1 font-semibold">{P.HOURS}</dd>
              </div>
            </dl>
          </div>
          <Photo photo={images.premises} lang={lang} sizes="(min-width: 1024px) 640px, 100vw" className="aspect-[4/3] rounded-xl" />
        </div>
        <div className="wrap mt-10">
          <MapEmbed query={`Horti Guru, ${address}`} t={company[lang].map} ready={isFilled(P.ADDRESS_STREET)} />
        </div>
      </section>
    </>
  );
}
