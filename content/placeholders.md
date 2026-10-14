# Placeholders checklist

Every unfilled fact on the site is a bracketed token. Fill values in
`content/placeholders.ts` (text) and `content/images.ts` (photos). A value that
still starts with `[` is treated as unfilled: it is left out of structured data,
and tel/WhatsApp/mail links stay inert.

## Business facts — `content/placeholders.ts`

| Token | What it needs |
|---|---|
| `[METRIC_ACRES]` | Total acres currently under advisory. Digits only, e.g. `1200` or `1,200+`; numbers count up on scroll. |
| `[METRIC_GROWERS]` | Number of growers served to date. |
| `[METRIC_YEARS]` | Years of field experience of the team. |
| `[PHONE]` | Main phone number with country code, e.g. `+91 98xxxxxxxx`. |
| `[WHATSAPP]` | WhatsApp business number with country code. All forms hand off here. |
| `[EMAIL]` | Public email address. |
| `[UPI_ID]` | UPI ID payments go to. |
| `[UPI_QR]` | Path to the UPI QR image (PNG/WebP in `/public/img`). |
| `[ADDRESS_STREET]` `[ADDRESS_CITY]` `[ADDRESS_PIN]` | Full office address. |
| `[HOURS]` | Operating hours, stated honestly. |
| `[CONFIRMATION_WINDOW]` | How quickly a UPI payment is confirmed, e.g. "4 working hours". |
| `[LAB_TURNAROUND]` | Days from sample receipt to report. |

## Testimonials

| Token | What it needs |
|---|---|
| `[TESTIMONIAL_FEATURED_QUOTE]` | One real grower quote for the home page, in their words. |
| `[TESTIMONIAL_FEATURED_NAME]` `_DISTRICT` `_CROP` `_ACRES` | Attribution, with the grower's permission. |

## Photos — `content/images.ts`

Put WebP files in `public/img/` and set `src`. Real working conditions, natural
light, slightly desaturated. No posed stock photos.

| Token | Shot |
|---|---|
| `[IMG_HERO]` | Tall (2:3) crop photo for the home hero, tightly cropped. |
| `[IMG_CROP_GINGER]` … `[IMG_CROP_PEPPER]` | One 3:4 photo per crop. |

## Translations

Kannada and Hindi copy was drafted alongside the English and needs review by a
native speaker before launch: `content/dictionaries/kn.ts`, `hi.ts` and the
`kn`/`hi` blocks in `content/longform/`.
