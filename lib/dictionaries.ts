import "server-only";
import en from "@/content/dictionaries/en";
import kn from "@/content/dictionaries/kn";
import hi from "@/content/dictionaries/hi";
import type { Locale } from "@/lib/i18n";

const dictionaries = { en, kn, hi };

export function getDictionary(lang: Locale) {
  return dictionaries[lang];
}

/** Fill "{name}" slots in a dictionary string. */
export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);
}
