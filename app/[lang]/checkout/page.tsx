import type { Metadata } from "next";
import { Suspense } from "react";
import { cropIds, cropNames } from "@/content/crops";
import advisory from "@/content/pages/advisory";
import checkout from "@/content/pages/checkout";
import consultancy from "@/content/pages/consultancy";
import equipment from "@/content/pages/equipment";
import lab from "@/content/pages/lab";
import { P, isFilled } from "@/content/placeholders";
import { Checkout, type CheckoutService } from "@/components/checkout/Checkout";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/shell/Breadcrumb";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { prices } from "@/lib/pricing";
import { breadcrumbNode, graph, siteNodes } from "@/lib/schema";

type Props = { params: Promise<{ lang: Locale }> };
const PATH = "/checkout";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = checkout[lang];
  return buildMetadata({ lang, path: PATH, title: c.title, description: c.description });
}

/** Everything that can be bought outright, named in the visitor's language. */
function orderableServices(lang: Locale): CheckoutService[] {
  const list: CheckoutService[] = [{ id: "advisory", name: advisory[lang].h1, price: prices.advisory!, perAcre: true }];
  for (const s of consultancy[lang].services) {
    const price = prices[s.id];
    if (price) list.push({ id: s.id, name: s.name, price, travel: Boolean(s.note) });
  }
  for (const r of lab[lang].rows) {
    const price = prices[r.id];
    if (price && !list.some((x) => x.id === r.id)) list.push({ id: r.id, name: r.name, price, travel: Boolean(r.note) });
  }
  list.push({ id: "kisan-kavach", name: equipment[lang].kavach.name, price: prices["kisan-kavach"]! });
  return list;
}

export default async function CheckoutPage({ params }: Props) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = checkout[lang];
  const trail = [
    { name: t.shell.homeCrumb, path: "/" },
    { name: c.crumb, path: PATH },
  ];

  return (
    <>
      <JsonLd data={graph([...siteNodes(lang), breadcrumbNode(lang, trail)])} />
      <div className="wrap pt-4 pb-[var(--section-y)]">
        <Breadcrumb lang={lang} trail={trail} label={t.shell.breadcrumb} />
        <h1 className="sr-only">{c.h1}</h1>
        <div className="mt-8 sm:mt-12">
          <Suspense>
            <Checkout
              t={c}
              services={orderableServices(lang)}
              crops={[...cropIds.map((id) => cropNames[id][lang]), t.forms.otherCrop]}
              upiId={P.UPI_ID}
              upiReady={isFilled(P.UPI_ID)}
              qrSrc={isFilled(P.UPI_QR) ? P.UPI_QR : null}
              whatsappReady={isFilled(P.WHATSAPP)}
              confirmationWindow={P.CONFIRMATION_WINDOW}
              notConfigured={t.forms.notConfigured}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}
