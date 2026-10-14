# Horti Guru

V1 website for Horti Guru, a horticulture advisory business in Karnataka.
Next.js (App Router) + Tailwind, three languages under `/en`, `/kn`, `/hi`.

```bash
npm install
npm run dev     # http://localhost:3000 → redirects to /en
npm run build && npm start
```

- Prices: `lib/pricing.ts` (single source)
- Unfilled facts and photos: `content/placeholders.md`
- UI copy: `content/dictionaries/{en,kn,hi}.ts`; long-form SEO prose: `content/longform/`
- Deploy target: Vercel (middleware handles `/` → language redirect)
