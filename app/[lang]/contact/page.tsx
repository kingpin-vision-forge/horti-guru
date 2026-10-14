import type { Metadata } from "next";
import company from "@/content/pages/company";
import { P, isFilled } from "@/content/placeholders";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhatsAppForm } from "@/components/ui/WhatsAppForm";
import { addressLines, mailHref, telHref, whatsappHref } from "@/lib/contact";
import { getDictionary } from "@/lib/dictionaries";
import { cropField, formText } from "@/lib/forms";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };
const PATH = "/contact";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = company[lang].contact;
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

function Icon({ d }: { d: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const f = t.forms;
  const c = company[lang].contact;
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];
  const address = addressLines.join(", ");
  const target = "flex min-h-[4.5rem] items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 text-ink no-underline hover:bg-mist";

  return (
    <>
      <JsonLd data={graph([...siteNodes(lang), breadcrumbNode(lang, trail)])} />
      <PageHeader lang={lang} trail={trail} breadcrumbLabel={t.shell.breadcrumb} h1={c.h1} sub={c.sub} />

      <div className="wrap grid gap-12 pb-[var(--section-y)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <section aria-label={c.h1}>
          <ul className="grid gap-3">
            <li>
              <a href={whatsappHref()} className={`${target} relative overflow-hidden`}>
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-turmeric" />
                <Icon d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z" />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{c.whatsapp}</span>
                  <span className="num block text-slate">{P.WHATSAPP}</span>
                </span>
                <span className="rounded-full bg-turmeric px-3 py-1 text-sm font-semibold">{c.fastest}</span>
              </a>
            </li>
            <li>
              <a href={telHref()} className={target}>
                <Icon d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                <span>
                  <span className="block font-semibold">{c.call}</span>
                  <span className="num block text-slate">{P.PHONE}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={mailHref()} className={target}>
                <Icon d="M3 6h18v12H3zM3 7l9 6 9-6" />
                <span className="min-w-0">
                  <span className="block font-semibold">{c.email}</span>
                  <span className="block break-all text-slate">{P.EMAIL}</span>
                </span>
              </a>
            </li>
            <li className={`${target} hover:bg-white`}>
              <Icon d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <span>
                <span className="block font-semibold">{c.visit}</span>
                <address className="not-italic text-slate">
                  {addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </span>
            </li>
          </ul>
          <p className="mt-6">
            <span className="text-slate">{c.hoursLabel}: </span>
            <span className="font-semibold">{P.HOURS}</span>
          </p>
        </section>

        <section aria-labelledby="form-h" className="rounded-xl bg-mist p-6 sm:p-10">
          <h2 id="form-h" className="text-[1.5rem]">
            {c.formHeading}
          </h2>
          <div className="mt-6">
            <WhatsAppForm
              whatsappReady={isFilled(P.WHATSAPP)}
              t={formText(f, f.enquiryTitle)}
              fields={[
                { name: "name", label: f.name, type: "text", required: true },
                { name: "phone", label: f.phone, type: "tel", required: true, hint: f.phoneHint },
                cropField(lang, f),
                { name: "message", label: f.message, type: "textarea", required: true },
              ]}
            />
          </div>
        </section>
      </div>

      <section aria-labelledby="map-h" className="wrap pb-[var(--section-y)]">
        <h2 id="map-h" className="mb-6 text-[1.5rem]">
          {c.mapHeading}
        </h2>
        <MapEmbed query={`Horti Guru, ${address}`} t={company[lang].map} ready={isFilled(P.ADDRESS_STREET)} />
      </section>
    </>
  );
}
