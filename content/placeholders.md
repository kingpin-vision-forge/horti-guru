# Placeholders checklist

Every unfilled fact on the site is a bracketed token. A value that still starts
with `[` is treated as unfilled: it is left out of structured data, and phone,
WhatsApp, email, UPI and map links stay inert until it is filled.

## 1. Business facts: `content/placeholders.ts`

| Token | What it needs |
|---|---|
| `[PHONE]` | Main phone number with country code, e.g. `+91 98xxxxxxxx`. |
| `[WHATSAPP]` | WhatsApp business number with country code. **Every form and the checkout hand off here; nothing is sent anywhere else.** |
| `[EMAIL]` | Public email address. |
| `[UPI_ID]` | UPI ID payments go to. Enables the Google Pay, PhonePe and UPI buttons in checkout. |
| `[UPI_QR]` | Path to the UPI QR image, e.g. `/img/upi-qr.png` in `public/img/`. |
| `[ADDRESS_STREET]` `[ADDRESS_CITY]` `[ADDRESS_PIN]` | Full office address. Filling the street also turns on the map. |
| `[HOURS]` | Opening hours, stated honestly. |
| `[CONFIRMATION_WINDOW]` | How quickly a UPI payment is confirmed, e.g. "4 working hours". |
| `[LAB_TURNAROUND]` | Days from sample receipt to report, e.g. "7 working days". |
| `[METRIC_ACRES]` `[METRIC_GROWERS]` `[METRIC_YEARS]` | Digits only, e.g. `1200` or `1,200+`. They count up on scroll. |

## 2. Testimonials: `content/placeholders.ts`

| Token | What it needs |
|---|---|
| `[TESTIMONIAL_FEATURED_QUOTE]` `_NAME` `_DISTRICT` `_CROP` `_ACRES` | One real grower quote for the home page, with permission. |
| `[TESTIMONIAL_N_QUOTE]` `_NAME` `_DISTRICT` `_ACRES` (N = 1 to 12) | Results page slots. Set each slot's crop in `content/pages/company.ts` (`resultSlots`). Slots 1 to 3 also appear on the advisory page. Vary the lengths; real quotes are never uniform. |

Once real testimonials are in, add `Review` structured data to the results page.
It is deliberately left out while these are placeholders.

## 3. Team: `content/placeholders.ts` (`expert()`)

`[EXPERT_N_NAME]` `[EXPERT_N_QUALIFICATION]` `[EXPERT_N_SPECIALISATION]` `[EXPERT_N_YEARS]` for N = 1 to 3.
Use real names and real qualifications only.

## 4. Products: `content/pages/equipment.ts`

| Token | What it needs |
|---|---|
| `[KISAN_KAVACH_SIZES]` | Sizes available. Also confirm the product description with the supplier. |

## 5. Legal: `content/pages/legal.ts` (review with a lawyer before launch)

| Token | What it needs |
|---|---|
| `[LEGAL_ENTITY]` | Registered business name. |
| `[JURISDICTION_CITY]` | City whose courts handle disputes. |
| `[RETENTION_PERIOD]` | How long customer records are kept after the last order. |
| `[ADVISORY_REFUND_DAYS]` | Days after confirmation within which advisory can be cancelled. |
| `[RESCHEDULE_NOTICE]` | Notice needed to reschedule a call or visit, e.g. "24 hours". |
| `[PRODUCT_RETURN_DAYS]` | Return window for unused products. |
| `[REFUND_PROCESSING_DAYS]` | Working days to process an approved refund. |

## 6. Photos: `content/images.ts`

The hero, five crop photos and the spraying photo are **generic Unsplash
images**, hotlinked through Unsplash's CDN. Each entry records its Unsplash page
in `source`. Replace them with the business's own photos when possible: put WebP
files in `public/img/` and set `src` to e.g. `/img/hero.webp`.

| Token | Shot | Current |
|---|---|---|
| `IMG_HERO` | Tall (2:3) photo for the home hero | Unsplash |
| `IMG_CROP_GINGER` … `IMG_CROP_PEPPER` | One 3:4 photo per crop | Unsplash |
| `IMG_SPRAYING` | Equipment page, Kisan Kavach | Unsplash |
| `IMG_PREMISES` | The actual office or lab, for the About page | **Missing** |

## 7. Translations

Kannada and Hindi were drafted alongside the English and need review by a native
speaker before launch: `content/dictionaries/`, `content/pages/`, `content/crops/`
and `content/longform/`.

## 8. Agronomy

Crop calendars, districts, spacing and disease notes in `content/crops/` reflect
common Karnataka practice. Have the team's agronomist check each crop page once.
