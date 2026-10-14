import type { MetadataRoute } from "next";
import { locales, url } from "@/lib/i18n";
import { allPaths } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return allPaths.flatMap(({ path, priority }) =>
    locales.map((lang) => ({
      url: url(lang, path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, url(l, path)])),
          "x-default": url("en", path),
        },
      },
    })),
  );
}
