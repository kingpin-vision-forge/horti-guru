import { P, digits } from "@/content/placeholders";

/** wa.me link with an optional prefilled message. "#" while the number is unfilled. */
export function whatsappHref(message?: string) {
  const n = digits(P.WHATSAPP);
  if (!n) return "#";
  return `https://wa.me/${n}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function telHref() {
  const n = digits(P.PHONE);
  return n ? `tel:+${n}` : "#";
}

export function mailHref() {
  return P.EMAIL.startsWith("[") ? "#" : `mailto:${P.EMAIL}`;
}

export const addressLines = [P.ADDRESS_STREET, `${P.ADDRESS_CITY}, Karnataka ${P.ADDRESS_PIN}`];
