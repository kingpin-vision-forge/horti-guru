/**
 * Every price on the site comes from here: pages, the acreage calculator,
 * checkout and Offer schema. Change a price once, here.
 */

export type ServiceId =
  | "advisory"
  | "call"
  | "irrigation"
  | "nutrient"
  | "visit"
  | "planning"
  | "handholding"
  | "water-sample"
  | "soil-sample"
  | "leaf-sample"
  | "soil-test"
  | "compost-test"
  | "pathogen-test"
  | "quality-analysis"
  | "kisan-kavach";

export const ADVISORY_FIRST_ACRE = 10000;
export const ADVISORY_EXTRA_ACRE = 5000;

/** null means priced on request. */
export const prices: Record<ServiceId, number | null> = {
  advisory: ADVISORY_FIRST_ACRE,
  call: 250,
  irrigation: 1500,
  nutrient: 2500,
  visit: 5000,
  planning: 10000,
  handholding: null,
  "water-sample": 250,
  "soil-sample": 500,
  "leaf-sample": 500,
  "soil-test": 2000,
  "compost-test": 2000,
  "pathogen-test": 2000,
  "quality-analysis": null,
  "kisan-kavach": 4000,
};

export function advisoryTotal(acres: number) {
  const n = Math.max(1, Math.floor(acres));
  return ADVISORY_FIRST_ACRE + (n - 1) * ADVISORY_EXTRA_ACRE;
}

export function perDay(yearly: number) {
  return Math.round(yearly / 365);
}

export function perMonth(yearly: number) {
  return Math.round(yearly / 12);
}

/** Indian digit grouping: 10000 -> "10,000", 100000 -> "1,00,000". */
export function inr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
