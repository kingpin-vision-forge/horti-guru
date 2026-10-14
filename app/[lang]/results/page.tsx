import type { Metadata } from "next";
import { cropIds, cropNames } from "@/content/crops";
import company, { resultSlots } from "@/content/pages/company";
import { testimonial } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { CallBand } from "@/components/ui/CallBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { ResultsGrid } from "@/components/ui/ResultsGrid";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };
const PATH = "/results";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = company[lang].results;
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function ResultsPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = company[lang].results;
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];

  // Review schema is deliberately not emitted until these are real testimonials.
  const items = resultSlots.map(({ n, crop }) => {
    const r = testimonial(n);
    const cropName = cropNames[crop][lang];
    return { n, crop, cropName, quote: r.quote, name: r.name, meta: `${r.district}. ${cropName}, ${r.acres} ${t.home.acres}` };
  });

  return (
    <>
      <JsonLd data={graph([...siteNodes(lang), breadcrumbNode(lang, trail)])} />
      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub} />
      <ResultsGrid
        items={items}
        crops={cropIds.map((id) => ({ id, name: cropNames[id][lang] }))}
        t={{ filterLabel: c.filterLabel, all: c.all, empty: c.empty }}
      />
      <CallBand lang={lang} text={c.closing} cta={t.home.ctaCall} />
    </>
  );
}
