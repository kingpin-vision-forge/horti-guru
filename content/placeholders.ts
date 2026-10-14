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
