import type { Locale } from "@/lib/i18n";

export type Stage = {
  label: string;
  /** Month the stage starts, 1 to 12. */
  start: number;
  /** Length in months. Segments are drawn proportional to this. */
  months: number;
};

/**
 * The ginger and turmeric calendar most Karnataka growers follow:
 * prepare in March and April, plant in May, establish through the early
 * monsoon, grow until November, harvest December to February.
 */
export const RHIZOME_CALENDAR = [
  { start: 3, months: 2 },
  { start: 5, months: 1 },
  { start: 6, months: 2 },
  { start: 8, months: 4 },
  { start: 12, months: 3 },
] as const;

export function stageForMonth(stages: readonly { start: number; months: number }[], month: number) {
  return stages.findIndex(({ start, months }) => {
    const offset = (month - start + 12) % 12;
    return offset < months;
  });
}

const intlLocale: Record<Locale, string> = { en: "en-IN", kn: "kn-IN", hi: "hi-IN" };

export function monthName(lang: Locale, month: number) {
  return new Intl.DateTimeFormat(intlLocale[lang], { month: "short" }).format(new Date(2026, month - 1, 15));
}
