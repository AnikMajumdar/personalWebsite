# Portfolio

A premium, futuristic personal portfolio for a software engineer — dark, minimal, and highly interactive. Built to feel like a next-generation product rather than a template.

> Privacy by design: the UI intentionally contains **no personally identifying information**. Names, contact details, and social handles are represented with placeholders you can fill in.

## Highlights

- **Interactive hero** with a lightweight, reduced-motion-aware canvas constellation.
- **Filterable project showcase** — bento layouts, expandable cards, and an Apple-style featured deep-dive with animated counters.
- **Scroll-driven experience timeline**, interactive skills bento, and a polished resume preview.
- **Floating navigation** with blur-on-scroll, an animated active indicator, scroll progress, and a compact mobile menu.
- **Accessible & fast** — semantic HTML, keyboard support, `prefers-reduced-motion` respected, static-rendered.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) · React · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) · [Motion](https://motion.dev) · [Lucide](https://lucide.dev) · [Geist](https://vercel.com/font)
- [Clerk](https://clerk.com) — authentication (resume access only)
- [Neon](https://neon.tech) — serverless Postgres (access audit / future data)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) via [OpenNext](https://opennext.js.org/cloudflare) — deployment

## Architecture

```
              ┌──────────────────────┐
              │      Cloudflare      │
              │ Frontend + Functions │
              └──────────┬───────────┘
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
   ┌──────────────┐              ┌──────────────┐
   │    Clerk     │              │     Neon     │
   │     Auth     │              │  PostgreSQL  │
   └──────────────┘              └──────────────┘
```

The **public portfolio is fully public** — no login required to browse. Clerk
only guards the resume: the `/api/resume` route verifies the Clerk session
**server-side** and streams the file, so knowing the URL is not enough to
retrieve it. The resume is never exposed as a static asset. Every authenticated
access is recorded in Neon on a best-effort basis (a DB outage never blocks the
download).

The app degrades gracefully: with no credentials configured it still builds and
runs, showing a clearly-marked placeholder for resume access.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in values (optional for the public site)
npm run dev                  # http://localhost:3000
```

```bash
npm run build   # production build
npm run lint    # lint
```

## Configuration

### 1. Clerk (authentication)

1. Create an application at the [Clerk dashboard](https://dashboard.clerk.com).
2. Copy the API keys into `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
   CLERK_SECRET_KEY=sk_...
   ```
3. The sign-in modal is pre-themed to match the site (`src/lib/clerk-appearance.ts`).

### 2. Neon (database)

1. Create a project at [neon.tech](https://neon.tech) and copy the **pooled**
   connection string into `.env.local`:
   ```
   DATABASE_URL=postgresql://user:password@ep-xxx-pooler.region.aws.neon.tech/db?sslmode=require
   ```
2. The `resume_access` table is created automatically on first write. No manual
   migration is required.

### 3. Resume storage

- **Default:** a bundled, non-public placeholder (`src/lib/resume-asset.ts`) is
  streamed through the protected route. Replace it with your own file to update
  the resume.
- **Cloudflare R2 (recommended for production):**
  ```bash
  npx wrangler r2 bucket create portfolio-resume
  npx wrangler r2 object put portfolio-resume/resume.pdf --file ./your-resume.pdf
  ```
  Uncomment the `RESUME_BUCKET` binding in `wrangler.jsonc`. The app detects it
  automatically and prefers R2 over the bundled asset.

### 4. Cloudflare (deployment)

Deployment uses the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare)
(`open-next.config.ts`, `wrangler.jsonc`) — **not** Vercel.

- Generate binding types: `npm run cf-typegen`
- Preview the Workers build locally: `npm run preview`
- Set production secrets (do **not** commit them):
  ```bash
  npx wrangler secret put CLERK_SECRET_KEY
  npx wrangler secret put DATABASE_URL
  ```
  `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` can live in `wrangler.jsonc` `vars` or the
  Cloudflare dashboard.

## Deploy

```bash
npm run deploy   # builds with OpenNext and deploys to Cloudflare Workers
```

Connect the repository in the Cloudflare dashboard for automatic deployments, or
run the command from CI.

## Environment Variables

| Variable | Scope | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | client | Clerk publishable key |
| `CLERK_SECRET_KEY` | server | Clerk secret key |
| `DATABASE_URL` | server | Neon pooled connection string |
| `RESUME_OBJECT_KEY` | server | R2 object key (optional; default `resume.pdf`) |

`next dev` / `next build` read from `.env.local`; Cloudflare preview/deploy read
from `.dev.vars` (local) and Wrangler secrets (production). See `.env.example`.

## Security

- Auth is verified **server-side**; client checks are only for UX.
- The resume is not a static file and requires a valid session to retrieve.
- Neon and Clerk secrets are server-only and never shipped to the browser.
- No personally identifying information is stored or displayed.

## Project Structure

```
src/
  app/
    layout.tsx        # root layout + conditional ClerkProvider
    page.tsx          # single-page composition
    api/resume/       # protected resume endpoint (server-side auth)
  components/          # Navigation, Hero, Projects, …, ResumeAccess
    ui/               # shared primitives (Reveal, Counter, icons, …)
  data/               # structured content — edit these to update the site
    site.ts projects.ts experience.ts skills.ts
  lib/
    auth.ts           # Clerk helpers (isolated)
    db.ts             # Neon access layer
    resume.ts         # resume retrieval (R2 → bundled fallback)
    resume-asset.ts   # server-only bundled placeholder
  proxy.ts            # Clerk proxy (does not protect the public site)
open-next.config.ts   # OpenNext Cloudflare adapter
wrangler.jsonc        # Cloudflare Workers config
```

## Customizing

- Update the content in `src/data/*` — the UI is driven entirely by these files.
- Replace the placeholder `#` links in `src/data/site.ts` (GitHub, LinkedIn) and
  swap the resume (bundled asset or R2).
- Accent colors, typography, and motion tokens live at the top of
  `src/app/globals.css`.

---

Built with modern web technologies.
