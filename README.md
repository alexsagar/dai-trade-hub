# DAI Trade Hub website

Corporate site for DAI Trade Hub Pvt. Ltd. — Next.js 16 (App Router), Tailwind CSS 4, deployed on Vercel.
Approved copy comes from `DAI_TRADE_HUB_CONTENT_SOURCE.md`; page text lives in `lib/content.ts`.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm test           # node:test unit tests (inquiry validation)
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain. Defaults to `https://dai-trade-hub.vercel.app`. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | Mail server for the inquiry form. Required; without them the form reports that the inquiry was **not** sent. |
| `SMTP_FROM_EMAIL` | Sender address (defaults to `SMTP_USER`). |
| `CONTACT_TO_EMAIL` / `TRADE_TO_EMAIL` | Recipients. Default `info@dainepal.com` / `trade@dainepal.com` (import, export, sourcing and distribution inquiries go to trade). Set on the server only: the emails shown in Sanity are display text and never decide where inquiries are delivered. |

Content added to the CMS after the first seed can be filled into an existing dataset without touching edited content:
`node --env-file=.env.local scripts/seed-sanity.ts --fill-missing` (sets only the fields listed in `ADDED_FIELDS` in `lib/cms/seed.ts`, only where empty).

Indexing is enabled only when `VERCEL_ENV=production`; previews and local builds send `noindex` and a disallow-all `robots.txt`.

## Contact form protection

Server-side validation and length limits, HTML escaping, newline stripping in single-line fields, a honeypot field,
a minimum fill time, and a per-instance rate limit (5 per 10 minutes per IP). For stronger protection, add a Vercel
Firewall rate-limit rule on `/api/contact`.
