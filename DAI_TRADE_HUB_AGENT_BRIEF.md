# DAI Trade Hub — Safe Git Sync and Complete Website Upgrade

## Project and source
- Repository: https://github.com/alexsagar/dai-trade-hub
- Existing hosting: Vercel
- Existing local workspace: the `dai-trade-hub` folder open in VS Code via WSL Ubuntu
- Content authority: `DAI_TRADE_HUB_CONTENT_SOURCE.md` (the accompanying transcription of the supplied 15-page company document)
- Keep the existing application and deployment working while upgrading it.
- Do not assume the local workspace equals the public GitHub repository.

## Instructions for the coding agent

You are working **inside the user's actual local repository**. The user wants to (1) synchronize and preserve all legitimate missing local changes on GitHub; (2) professionally rebuild or polish the existing website's copy, photography, visual design, and SEO according to the content source; and (3) verify the entire result before any production release.

**Do not rush or make destructive changes.** First inspect. Then work on a branch. Do not force-push, reset away work, delete unknown files, reveal secrets, change Vercel settings, or deploy to production without explicit approval. Git pushes to a non-production branch are allowed after inspection and verification, but first verify whether Vercel deploys that branch automatically.

### A. Baseline and Git synchronization — perform FIRST

1. Read `AGENTS.md`, `CLAUDE.md`, `README.md`, `package.json`, `.gitignore`, and the project structure; obey applicable repo instructions.
2. Run a read-only state audit:
   ```
   pwd
   git status --short --branch
   git remote -v
   git branch -vv
   git fetch origin --prune
   git log --oneline --decorate --all -12
   git rev-list --left-right --count origin/main...HEAD
   git diff --stat
   git ls-files
   ```
   Do not assume that `main` is the local active branch or that all untracked files belong in Git.
3. Compare the working tree, all relevant local commits/branches, and remote tracking branches. Find missing source and assets without copying generated caches. Preserve all real local work, including uncommitted work.
4. Verify `.next/`, `node_modules/`, `.env*`, credentials, private keys, generated artifacts, and backup data will not be committed. Check `git status --ignored` and tracked files carefully; do not print secret values.
5. If the remote branch diverges, reconcile conservatively after creating a recoverable backup commit/branch or safe stash; never use destructive `reset --hard` or forced push.
6. Make a branch such as `chore/dai-trade-hub-sync`, commit the validated local baseline with a clear message, and push the branch if authenticated and safe. Do **not** push to `main` as a shortcut. Verify the pushed SHA and show exactly what is different from `origin/main`.
7. Run baseline `npm ci`, available lint, typecheck, tests, and `npm run build`. If tests/scripts do not exist, record that fact rather than claiming they passed. Fix existing build errors without broad unrequested refactoring. Record baseline issues.
8. Report the sync result: active branch, local and remote SHAs, files changed, tests, and any unresolved issues. Only after this synchronization should you start the website-content work.

### B. Information architecture and verified content

Use the accompanying content source as the primary approved business content. Preserve the company's real scope and intent; polish grammar and capitalization, but do not invent suppliers, partnerships, certificates, stock, statistics, countries served, offices, customer testimonials, awards, project results, or pricing.

Provide these 8 meaningful, navigable pages (reuse existing routes or map old routes to clean new URLs with redirects):
- `/` — Home: professional hero, company intro, six core business solutions, products, two-way global trade, private label, six-step process, value proposition, partnerships, final inquiry CTA.
- `/about` — About Us: identity, vision, mission, philosophy, values, commitments.
- `/products` — Product & Sourcing Opportunities: product families from the source, accurate sourcing-status language, practical inquiry CTA. Do not create fictional specific product details.
- `/global-trade` — Two-way trading models, sourcing, import/export and coordination role.
- `/retail-branding` — Branding and private-label services, packaging/OEM/ODM coordination, explicitly illustrative Nepal tea project example.
- `/services` — Complete eight service areas and clear wording on activities fulfilled via external providers.
- `/partnerships` — Partnership models, target audiences, inquiry CTA.
- `/contact` — Contact details, usable inquiry form, clear consent and delivery feedback.

Use source-provided contact data:
- DAI Trade Hub Pvt. Ltd.
- Panchakanya Marga, Kathmandu 44600, Nepal
- Phone: 01-5107439 (Nepal)
- info@dainepal.com
- trade@dainepal.com

Product status rules from source:
- Distinguish available, sourcing-on-request, and under development.
- Show MOQ, packaging, certifications, supply capacity, and export readiness **only when confirmed**.
- A category card is not proof of ready stock.
- If no product-level verified data exists, make category-led pages with inquiry actions instead of inventing a detailed product catalog.

### C. Photography and creative direction

Use a restrained, premium international trading-company visual style: professional, clean, trustworthy, editorial rather than template-like. Keep a cohesive hierarchy, aligned grid, careful spacing, responsive layouts, subtle accessible motion, strong headings and intentional CTAs.

Select authentic, legally usable, high-quality photography: an international business meeting/product review for the hero; Nepal-origin tea/coffee, herbs and spices, handicrafts, textiles, sourcing/packaging/logistics imagery for the relevant sections. Avoid generic cargo containers everywhere and avoid imagery that falsely suggests a specific certified facility or confirmed partner. Do not use existing images without checking quality, accuracy, and rights.

Save source/rights notes in an `ASSET_CREDITS.md` file. Store and optimize site assets locally under `public/` where reasonable. Use responsive Next.js image handling, intrinsic dimensions, correct `sizes`, descriptive alt text, sensible formats, and avoid oversized, unoptimized hero images. Keep the interface cohesive on desktop, tablet and small mobile screens.

### D. Functional details

- Mobile menu with correct keyboard and focus behavior.
- Real internal navigation, no dead CTA/buttons, no `#` placeholders.
- Working contact/inquiry form; clear validation, privacy consent, input sanitization, rate limiting/spam controls and safe server-side submission.
- Verify existing mail delivery setup instead of inventing a new external service. If credentials/backend are unavailable, implement honestly and report the blocker; **never** display 'received' when an inquiry has not been delivered/stored.
- Meaningful empty, loading, success, and error states.
- Privacy Policy and Terms pages/links only with legally reviewed content; if source policy text is not supplied, surface an explicit review-needed draft rather than fabricated policy.

### E. SEO, accessibility, reliability, and performance

- One meaningful H1 per page; clean semantic headings and internal linking.
- Unique accurate page titles/descriptions; canonical URLs based on the *verified* production domain; Open Graph/Twitter metadata and share imagery.
- Accurate `robots.txt`, XML sitemap, noindex for preview/development, avoid indexing duplicates.
- Applicable structured data (`Organization`, `WebSite`, `BreadcrumbList`, `ContactPage`) only for verifiable facts. No fake ratings, reviews, or SEO claims.
- `404` page, safe redirects for legacy paths if needed, proper status codes and no broken links.
- Page-by-page metadata and clean slug structure. Preserve the actual public domain and not confuse the parent company with DAI Trade Hub.
- WCAG-oriented color contrast, labels, form errors, keyboard navigation, focus states, skip link, reduced-motion support, and useful image alt text.
- Optimize Core Web Vitals, responsive media, preloading only when it helps, font loading, caching, client-side JS, and rendering.
- Avoid unnecessary dependencies or a full-stack/database redesign for a simple corporate website.

### F. Test and release gates

1. Run all existing tests, lint, typecheck and production build. Add basic automated tests where appropriate.
2. Check all 8 pages at mobile (320, 390px), tablet (768px), laptop (1280px) and desktop (1440px).
3. Check real navigation and contact-flow behavior, console/network errors, accessibility, image loads, metadata, sitemap, robots, structured data, and route status.
4. Run Lighthouse or equivalent tools when available; report actual results, never invented scores.
5. Compare each implemented page against the approved source and identify missing or unverified material.
6. Commit content/design/SEO changes in logical commits on a new feature branch (or the already-created safe branch), push a preview branch and provide a PR/preview URL if available.
7. **Do not merge to production `main` or promote a Vercel deployment without the owner's approval.** State the exact changes, verification output, outstanding dependencies and proposed release steps.

## What success looks like

A synchronized, recoverable Git history; an attractive and accurate eight-page professional trading website; optimized and appropriately sourced imagery; working or transparently blocked inquiries; complete SEO fundamentals; excellent mobile UX; validated build/tests; and a safe preview deployment ready for review without affecting the live site.
