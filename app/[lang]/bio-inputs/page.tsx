import type { Metadata } from "next";
import bioinputs from "@/content/pages/bioinputs";
import { P, isFilled } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CallBand } from "@/components/ui/CallBand";
import { LongForm } from "@/components/ui/LongForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhatsAppForm } from "@/components/ui/WhatsAppForm";
import { getDictionary } from "@/lib/dictionaries";
import { cropField, formText } from "@/lib/forms";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbNode, faqNode, graph, serviceNode, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };

const PATH = "/bio-inputs";
const whenLabel: Record<Locale, string> = { en: "When to apply", kn: "ಯಾವಾಗ ಹಾಕಬೇಕು", hi: "कब डालें" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = bioinputs[lang];
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

export default async function BioInputsPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const f = t.forms;
  const c = bioinputs[lang];
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
          serviceNode({ lang, path: PATH, name: c.h1, serviceType: "Bio inputs supply", description: c.description }),
          faqNode(c.faqs),
        ])}
      />

      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub}>
        <nav aria-label={c.crumb} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {c.categories.map((cat) => (
              <li key={cat.id}>
                <a href={`#${cat.id}`} className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-ink no-underline hover:bg-mist">
                  {cat.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#enquire" className="btn btn-primary min-h-11 rounded-full py-2">
                {c.enquiryHeading}
              </a>
            </li>
          </ul>
        </nav>
      </PageHeader>

      {c.categories.map((cat, i) => (
        <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-h`} className={`scroll-mt-20 border-t border-line ${i % 2 ? "bg-mist/50" : ""}`}>
          <div className="wrap section grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-16">
            <div>
              <h2 id={`${cat.id}-h`}>{cat.name}</h2>
              <p className="mt-4 text-slate">{cat.intro}</p>
            </div>
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {cat.products.map((p) => (
                <li key={p.name}>
                  <h3>{p.name}</h3>
                  {p.latin && <p className="text-sm text-slate italic">{p.latin}</p>}
                  <p className="mt-3">{p.does}</p>
                  <p className="mt-2 text-[0.9375rem] text-slate">
                    <span className="font-semibold text-ink">{whenLabel[lang]}: </span>
                    {p.when}
                  </p>
                  <p className="mt-3 text-sm text-slate">{c.priced}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section id="enquire" aria-labelledby="enquire-h" className="scroll-mt-20 bg-indigo">
        <div className="wrap section grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="text-paper">
            <h2 id="enquire-h">{c.enquiryHeading}</h2>
            <p className="mt-4 max-w-[40ch] text-lg text-paper/80">{c.enquiryIntro}</p>
          </div>
          <div className="rounded-xl bg-white p-6 sm:p-10">
            <WhatsAppForm
              whatsappReady={isFilled(P.WHATSAPP)}
              t={formText(f, `${f.enquiryTitle}: ${c.crumb}`)}
              fields={[
                cropField(lang, f, true),
                { name: "acres", label: f.acres, type: "number" },
                { name: "problem", label: f.problem, type: "textarea", required: true, hint: c.problemHint },
                { name: "name", label: f.name, type: "text", required: true },
                { name: "phone", label: f.phone, type: "tel", required: true, hint: f.phoneHint },
              ]}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="faq" className="section">
        <div className="wrap split">
          <h2 id="faq">{c.faqHeading}</h2>
          <div className="mt-8 max-w-[68ch] lg:mt-0">
            <Accordion
              items={c.faqs.map((q, i) => ({
                id: `faq-${i}`,
                summary: <span className="text-lg font-semibold">{q.q}</span>,
                body: <p className="max-w-[62ch] text-slate">{q.a}</p>,
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
