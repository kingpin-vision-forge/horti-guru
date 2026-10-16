# Placeholders checklist

> **Every token below now holds MOCK data for client review.** Nothing in it is
> real. The phone, WhatsApp, email, UPI ID, address, testimonials and team are
> invented, and must be replaced with the client's real details before launch.

The mechanism: a value that starts with `[` is treated as unfilled. It is left
out of structured data, and phone, WhatsApp, email, UPI and map links stay inert.
Because every value is now filled with mock data, all of those are **switched
on**: the map shows the mock address, the Organization schema lists the mock
phone, and forms and checkout open WhatsApp to the mock number. To switch a fact
off again, put its `[TOKEN]` back.

## 1. Business facts: `content/placeholders.ts`

| Token | Mock value | What it needs |
|---|---|---|
| `PHONE` | `+91 90000 12345` | Main phone number with country code. |
| `WHATSAPP` | `+91 90000 12345` | WhatsApp business number with country code. **Every form and the checkout hand off here; nothing is sent anywhere else.** |
| `EMAIL` | `hello@hortiguru.in` | Public email address. |
| `UPI_ID` | `mock.hortiguru@ybl` | UPI ID payments go to. Enables the Google Pay, PhonePe and UPI buttons in checkout. |
| `UPI_QR` | `/img/upi-qr-sample.svg` | Path to the real UPI QR image in `public/img/`. The sample is decorative and **cannot be scanned**. |
| `ADDRESS_STREET` `ADDRESS_CITY` `ADDRESS_PIN` | #14, 2nd Cross, Vinoba Nagar, Shivamogga 577204 | Full office address. Filling the street also turns on the map. |
| `HOURS` | Mon–Sat, 9:00 am – 6:00 pm | Opening hours, stated honestly. |
| `CONFIRMATION_WINDOW` | 4 working hours | How quickly a UPI payment is confirmed. |
| `LAB_TURNAROUND` | 7 working days | Days from sample receipt to report. |
| `METRIC_ACRES` `METRIC_GROWERS` `METRIC_YEARS` | 1,200+ / 850+ / 12 | Digits, e.g. `1200` or `1,200+`. They count up on scroll. |

## 2. Testimonials: `content/placeholders.ts`

| Slot | Mock value | What it needs |
|---|---|---|
| `TESTIMONIAL_FEATURED_*` | Ramesh Gowda, Hassan, ginger, 3 acres | One real grower quote for the home page, with permission. |
| `testimonials` array (slots 1 to 12) | 12 invented growers across Karnataka | Results page slots. Each slot's crop is set in `content/pages/company.ts` (`resultSlots`); keep the `crop` name in the array matching it. Slots 1 to 3 also appear on the advisory page. Vary the lengths; real quotes are never uniform. |

Once real testimonials are in, add `Review` structured data to the results page.
It is deliberately left out while these are mock.

## 3. Team: `content/placeholders.ts` (`experts` array)

Mock: Dr. Kavitha Shetty (spice crops), Prakash Hegde (plant pathology),
Sneha Kulkarni (soil science). Replace with real names and real qualifications only.

## 4. Products: `content/pages/equipment.ts`

| Item | Mock value | What it needs |
|---|---|---|
| Kisan Kavach sizes | M, L, XL, XXL | Sizes available. Also confirm the product description with the supplier. |

## 5. Legal: `content/placeholders.ts` (review with a lawyer before launch)

These tokens stay as `[TOKENS]` in `content/pages/legal.ts`; `LegalPage` fills
them from `P`.

| Token | Mock value | What it needs |
|---|---|---|
| `LEGAL_ENTITY` | Horti Guru Agri Services Pvt. Ltd. | Registered business name. |
| `JURISDICTION_CITY` | Shivamogga | City whose courts handle disputes. |
| `RETENTION_PERIOD` | 3 years | How long customer records are kept after the last order. |
| `ADVISORY_REFUND_DAYS` | 7 | Days after confirmation within which advisory can be cancelled. |
| `RESCHEDULE_NOTICE` | 24 hours | Notice needed to reschedule a call or visit. |
| `PRODUCT_RETURN_DAYS` | 7 | Return window for unused products. |
| `REFUND_PROCESSING_DAYS` | 5 | Working days to process an approved refund. |

## 6. Photos: `content/images.ts`

Every photo is a **generic Unsplash image**, hotlinked through Unsplash's CDN.
Each entry records its Unsplash page in `source`. Replace them with the
business's own photos when possible: put WebP files in `public/img/` and set
`src` to e.g. `/img/hero.webp`.

| Token | Shot | Current |
|---|---|---|
| `IMG_HERO` | Tall (2:3) photo for the home hero | Unsplash |
| `IMG_CROP_GINGER` … `IMG_CROP_PEPPER` | One 3:4 photo per crop | Unsplash |
| `IMG_SPRAYING` | Equipment page, Kisan Kavach | Unsplash |
| `IMG_PREMISES` | The actual office or lab, for the About page | Unsplash stand-in (soil in hand). Update the alt text when it is replaced. |

## 7. Translations

Kannada and Hindi were drafted alongside the English and need review by a native
speaker before launch: `content/dictionaries/`, `content/pages/`, `content/crops/`
and `content/longform/`. The mock values in `content/placeholders.ts` are English
only and show in English on the Kannada and Hindi pages too.

## 8. Agronomy

Crop calendars, districts, spacing and disease notes in `content/crops/` reflect
common Karnataka practice. Have the team's agronomist check each crop page once.
