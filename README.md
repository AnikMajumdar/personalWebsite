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
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) for animation
- [Lucide](https://lucide.dev) icons · [Geist](https://vercel.com/font) typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # lint
```

## Project Structure

```
src/
  app/            # layout, page, global design system (globals.css)
  components/     # Navigation, Hero, Projects, Experience, Skills, Resume, Footer, …
    ui/           # shared primitives (Reveal, Counter, SectionHeading, icons)
  data/           # structured content — edit these to update the site
    site.ts       # nav, socials, about, resume link
    projects.ts   # project catalogue
    experience.ts # timeline entries
    skills.ts     # skill groups
  lib/            # utilities and hooks
public/
  resume.pdf      # placeholder resume (replace with your own)
```

## Customizing

- Update the content in `src/data/*` — the UI is driven entirely by these files.
- Replace the placeholder `#` links in `src/data/site.ts` (GitHub, LinkedIn) and swap `public/resume.pdf`.
- Accent colors, typography, and motion tokens live at the top of `src/app/globals.css`.

---

Built with modern web technologies.
