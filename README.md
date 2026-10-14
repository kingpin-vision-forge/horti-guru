# Horti Guru

V1 website for Horti Guru, a horticulture advisory business in Karnataka.
Next.js (App Router) + Tailwind, three languages under `/en`, `/kn`, `/hi`,
54 statically generated pages.

```bash
npm install
npm run dev     # http://localhost:3000 → redirects to /en
npm run build && npm start
```

## Where things live

- **Prices:** `lib/pricing.ts` is the single source for pages, the calculator, checkout and structured data.
- **Unfilled facts and photos:** see `content/placeholders.md`. Most go in `content/placeholders.ts`.
- **Copy:** UI strings in `content/dictionaries/{en,kn,hi}.ts`; page copy in `content/pages/`; crop pages in `content/crops/`; home long-form in `content/longform/`.
- **Forms and checkout:** no backend. Every form opens WhatsApp with the answers filled in, sent to `[WHATSAPP]`. Checkout takes payment by UPI and hands the order, reference and UTR to WhatsApp.
- **SEO:** `lib/metadata.ts` (titles, canonical, hreflang, share image), `lib/schema.ts` (JSON-LD), `app/sitemap.ts`, `app/robots.ts`.

## Deploy

Built for Vercel. `middleware.ts` redirects `/` to the visitor's last language
(cookie) or English.
