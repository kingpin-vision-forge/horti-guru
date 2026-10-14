import { whatsappHref } from "@/lib/contact";

/** Builds a readable WhatsApp message from labelled lines, skipping empty values. */
export function buildMessage(title: string, lines: [label: string, value: string | number | undefined][]) {
  const body = lines
    .filter(([, v]) => v !== undefined && String(v).trim() !== "")
    .map(([l, v]) => `${l}: ${String(v).trim()}`)
    .join("\n");
  return `${title}\n\n${body}`;
}

export function whatsappMessageHref(title: string, lines: [string, string | number | undefined][]) {
  return whatsappHref(buildMessage(title, lines));
}
