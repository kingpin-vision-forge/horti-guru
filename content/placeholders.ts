/**
 * Every unfilled fact on the site. Replace a value here and it updates
 * everywhere. See content/placeholders.md for what each one needs.
 * While a value still starts with "[", the site treats it as unfilled.
 */
export const P = {
  METRIC_ACRES: "[METRIC_ACRES]",
  METRIC_GROWERS: "[METRIC_GROWERS]",
  METRIC_YEARS: "[METRIC_YEARS]",

  PHONE: "[PHONE]",
  WHATSAPP: "[WHATSAPP]",
  EMAIL: "[EMAIL]",
  UPI_ID: "[UPI_ID]",
  UPI_QR: "[UPI_QR]",

  ADDRESS_STREET: "[ADDRESS_STREET]",
  ADDRESS_CITY: "[ADDRESS_CITY]",
  ADDRESS_PIN: "[ADDRESS_PIN]",
  HOURS: "[HOURS]",
  CONFIRMATION_WINDOW: "[CONFIRMATION_WINDOW]",
  LAB_TURNAROUND: "[LAB_TURNAROUND]",

  TESTIMONIAL_FEATURED_QUOTE: "[TESTIMONIAL_FEATURED_QUOTE]",
  TESTIMONIAL_FEATURED_NAME: "[TESTIMONIAL_FEATURED_NAME]",
  TESTIMONIAL_FEATURED_DISTRICT: "[TESTIMONIAL_FEATURED_DISTRICT]",
  TESTIMONIAL_FEATURED_CROP: "[TESTIMONIAL_FEATURED_CROP]",
  TESTIMONIAL_FEATURED_ACRES: "[TESTIMONIAL_FEATURED_ACRES]",
} as const;

export function isFilled(value: string) {
  return !value.startsWith("[");
}

/** Digits only, for tel: and wa.me links. Empty while unfilled. */
export function digits(value: string) {
  return isFilled(value) ? value.replace(/\D/g, "") : "";
}

/** Numbered testimonial slots, 1 to 12. */
export function testimonial(n: number) {
  return {
    quote: `[TESTIMONIAL_${n}_QUOTE]`,
    name: `[TESTIMONIAL_${n}_NAME]`,
    district: `[TESTIMONIAL_${n}_DISTRICT]`,
    crop: `[TESTIMONIAL_${n}_CROP]`,
    acres: `[TESTIMONIAL_${n}_ACRES]`,
  };
}

/** Team slots, 1 to 3. */
export function expert(n: number) {
  return {
    name: `[EXPERT_${n}_NAME]`,
    qualification: `[EXPERT_${n}_QUALIFICATION]`,
    specialisation: `[EXPERT_${n}_SPECIALISATION]`,
    years: `[EXPERT_${n}_YEARS]`,
  };
}
