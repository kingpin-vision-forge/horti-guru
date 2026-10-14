import type { Metadata } from "next";
import { SITE_URL, locales, url, type Locale } from "@/lib/i18n";

const ogLocale: Record<Locale, string> = { en: "en_IN", kn: "kn_IN", hi: "hi_IN" };

export function buildMetadata({
  lang,
  path,
  title,
  description,
}: {
  lang: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, url(l, path)]));
  languages["x-default"] = url("en", path);

  const image = { url: `${SITE_URL}/${lang}/opengraph-image`, width: 1200, height: 630, alt: "Horti Guru" };

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: { canonical: url(lang, path), languages },
    openGraph: {
      type: "website",
      siteName: "Horti Guru",
      title,
      description,
      url: url(lang, path),
      locale: ogLocale[lang],
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
