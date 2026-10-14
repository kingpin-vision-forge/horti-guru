import type { Locale } from "@/lib/i18n";
import type { ServiceId } from "@/lib/pricing";

export type CropCopy = {
  title: string;
  description: string;
  h1: string;
  tagline: string;
  /** Stage labels, same order as `calendar`. */
  stages: string[];
  seasonCaption: string;
  facts: { planting: string; duration: string; districts: string; spacing: string };
  problems: { name: string; body: string }[];
  helps: string[];
  /** Why each related test matters for this crop, keyed by service. */
  tests: Partial<Record<ServiceId, string>>;
  faqs: { q: string; a: string }[];
  longform: string[];
};

export type CropData = {
  /** Start month (1–12) and length in months for each stage. Lengths add to 12. */
  calendar: { start: number; months: number }[];
  /** Perennial crops mark the stage for the current month. */
  perennial: boolean;
  /** Two sibling crops to link to. */
  siblings: [string, string];
  copy: Record<Locale, CropCopy>;
};
