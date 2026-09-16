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
- [Render](https://render.com) — deployment (Node web service)

## Architecture

```
              ┌──────────────────────┐
              │        Render        │
              │  Next.js web service │
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
npm run start   # run the production server locally
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

### 3. Resume file

The resume is bundled as a **server-only** asset (`src/lib/resume-asset.ts`) and
is only served through the authenticated `/api/resume` route — never as a static
file. To use your own resume, replace that module (a base64-encoded PDF);
`scripts/generate_resume.py` can regenerate it.

## Deploy to Render

This repo includes a [`render.yaml`](render.yaml) Blueprint, so deployment is
declarative — **not** tied to Vercel or Cloudflare.

1. Push the repo to GitHub.
2. In the [Render dashboard](https://dashboard.render.com), choose **New + →
   Blueprint** and select the repository. Render reads `render.yaml` and
   provisions a Node web service:
   - Build: `npm ci --include=dev && npm run build`
   - Start: `npm run start`
   - Node version: pinned by `.node-version`
3. When prompted, set the environment variables (used at build **and** runtime,
   so the Clerk publishable key is correctly inlined):
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY
   DATABASE_URL
   ```
4. Deploy. Render builds, starts the server, and gives you a `*.onrender.com`
   URL. Pushes to `main` auto-deploy.

> Prefer the dashboard over the Blueprint? Create a **Web Service**, connect the
> repo, and use the same build/start commands above.

## Environment Variables

| Variable | Scope | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | client | Clerk publishable key (inlined at build) |
| `CLERK_SECRET_KEY` | server | Clerk secret key |
| `DATABASE_URL` | server | Neon pooled connection string |

Locally these come from `.env.local`; on Render, set them under **Environment**.
See `.env.example`. Never commit real secrets.

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
    resume.ts         # serves the bundled resume asset
    resume-asset.ts   # server-only bundled PDF (base64)
  proxy.ts            # Clerk proxy (does not protect the public site)
render.yaml           # Render Blueprint (Node web service)
.node-version         # pinned Node version for Render
```

## Customizing

- Update the content in `src/data/*` — the UI is driven entirely by these files.
- Replace the placeholder `#` links in `src/data/site.ts` (GitHub, LinkedIn) and
  swap the bundled resume asset.
- Accent colors, typography, and motion tokens live at the top of
  `src/app/globals.css`.

---

Built with modern web technologies.
