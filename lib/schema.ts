import { SITE_URL, url, type Locale } from "@/lib/i18n";
import { P, isFilled } from "@/content/placeholders";

type Node = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export function siteNodes(lang: Locale): Node[] {
  const org: Node = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Horti Guru",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Horticulture advisory, laboratory testing and crop consultancy for ginger, turmeric, arecanut, banana and pepper growers.",
    address: {
      "@type": "PostalAddress",
      streetAddress: P.ADDRESS_STREET,
      addressLocality: P.ADDRESS_CITY,
      addressRegion: "Karnataka",
      postalCode: P.ADDRESS_PIN,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: P.PHONE,
      contactType: "customer service",
      availableLanguage: ["en", "kn", "hi"],
    },
  };

  // Do not publish placeholder tokens as structured data.
  if (!isFilled(P.ADDRESS_STREET)) delete org.address;
  if (!isFilled(P.PHONE)) delete org.contactPoint;

  return [
    org,
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: "Horti Guru",
      publisher: { "@id": ORG_ID },
      inLanguage: lang,
    },
  ];
}

export function breadcrumbNode(lang: Locale, trail: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(lang, item.path),
    })),
  };
}

export function graph(nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function serviceNode({
  lang,
  path,
  name,
  serviceType,
  description,
  price,
  unitText,
}: {
  lang: Locale;
  path: string;
  name: string;
  serviceType: string;
  description: string;
  price?: number | null;
  unitText?: string;
}): Node {
  const node: Node = {
    "@type": "Service",
    "@id": `${url(lang, path)}#service`,
    name,
    serviceType,
    description,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "State", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    url: url(lang, path),
  };
  if (price) {
    node.offers = {
      "@type": "Offer",
      price: String(price),
      priceCurrency: "INR",
      url: url(lang, path),
      ...(unitText
        ? { priceSpecification: { "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "INR", unitText } }
        : {}),
    };
  }
  return node;
}

export function faqNode(faqs: { q: string; a: string }[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** One Service with a priced catalogue of sub-services (consultancy, lab tests). */
export function catalogServiceNode({
  lang,
  path,
  name,
  serviceType,
  description,
  items,
}: {
  lang: Locale;
  path: string;
  name: string;
  serviceType: string;
  description: string;
  items: { name: string; price: number | null }[];
}): Node {
  return {
    "@type": "Service",
    "@id": `${url(lang, path)}#service`,
    name,
    serviceType,
    description,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "State", name: "Karnataka" },
      { "@type": "Country", name: "India" },
    ],
    url: url(lang, path),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: items
        .filter((i) => i.price)
        .map((i) => ({
          "@type": "Offer",
          price: String(i.price),
          priceCurrency: "INR",
          itemOffered: { "@type": "Service", name: i.name },
        })),
    },
  };
}
