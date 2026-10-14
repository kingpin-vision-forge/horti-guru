export const locales = ["en", "kn", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LANG_COOKIE = "hg_lang";

export const localeNames: Record<Locale, string> = {
  en: "English",
  kn: "ಕನ್ನಡ",
  hi: "हिंदी",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const SITE_URL = "https://hortiguru.com";

/** Absolute URL for a path within a language, e.g. url("kn", "/advisory"). */
export function url(lang: Locale, path = "/") {
  return `${SITE_URL}/${lang}${path === "/" ? "" : path}`;
}

/** Root-relative href for internal links. */
export function href(lang: Locale, path = "/") {
  return `/${lang}${path === "/" ? "" : path}`;
}
