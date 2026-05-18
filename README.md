# Abhinav Verma — Portfolio

A personal portfolio for Abhinav Verma (Full-Stack Developer, MAIT B.Tech). Heavy on motion, dark-first, built to feel hand-crafted.

Live: `// TODO: Abhinav — add Vercel URL`

---

## Stack and why

| Layer | Choice | Reason |
| --- | --- | --- |
| Framework | **Next.js 16 (App Router, TS strict)** | App Router for layouts and streaming; Turbopack dev for speed; SSG for project detail pages. |
| Styling | **Tailwind CSS v4** | CSS-first config via `@theme` directive in `globals.css` — no `tailwind.config.ts` needed. Custom design tokens live in `:root` as CSS variables. |
| Component motion | **Motion (formerly Framer Motion)** | `motion/react` import. Page transitions, magnetic buttons, split-text reveals, cursor. |
| Scroll motion | **GSAP + ScrollTrigger** | Heavier scroll-pinned and timeline-based animations. |
| Smooth scroll | **Lenis** | RAF-driven smooth scroll, wired to ScrollTrigger so both stay in sync. Auto-disabled under `prefers-reduced-motion`. |
| State | **Redux Toolkit + Theme Context** | Both intentional — Redux for global UI state (preloader, command palette), Context for theme. Listed on Abhinav's résumé so both are visible in the codebase. |
| Forms | **react-hook-form + zod** | Same Zod schema validates on client and on the API route. |
| Icons | **lucide-react + inline brand SVGs** | Lucide for UI icons; brand marks (GitHub / LinkedIn / X) are hand-rolled SVG to avoid the lucide brand-icon shake-up. |
| Fonts | **Instrument Serif + Geist Sans + Geist Mono** | `next/font/google`. Serif for display, sans for body, mono for accents. `display: swap` everywhere. |

---

## Design tokens

All tokens live as CSS variables in `src/app/globals.css` and are exposed to Tailwind utilities via `@theme inline`:

```
Canvas        #0a0a0a    near-black base
Surface       #131313    raised panels
Ink           #ededed    body text
Muted         #8a8a8a    secondary text
Line          rgba(237,237,237,0.08)
Accent        #d8ff4a    chartreuse
Accent ink    #0a0a0a    text on accent

Easings       expo-out, quint-out, quart-in, quint-in-out
Type scale    display (clamp 4-10rem), h1 (clamp 2.5-4rem), h2 (clamp 2-3rem), h3 2rem
```

Tailwind utilities such as `bg-accent`, `text-ink`, `border-line`, `font-display`, `font-mono` map straight to these tokens.

---

## Run it locally

```bash
cd D:/abhinav-portfolio
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (Next + TS rules)
npx tsc --noEmit # strict type-check
```

---

## Where the content lives

All editable content is in **typed data files** under `src/data/` — no need to touch JSX to update anything.

| What to change | File |
| --- | --- |
| Name, role, bio, stats | `src/data/about.ts` |
| Stack categories and chips | `src/data/stack.ts` |
| Experience + education timeline | `src/data/experience.ts` |
| Projects (cards and detail pages) | `src/data/projects.ts` |
| Social links and nav anchors | `src/data/socials.ts` |
| Résumé file | `public/resume.pdf` (replace the placeholder) |
| Project screenshots | `public/images/projects/` + `screenshots` array in `projects.ts` |

---

## Folder layout

```
src/
  app/
    layout.tsx                 fonts, providers, metadata
    page.tsx                   section composition
    projects/[slug]/page.tsx   project detail (SSG)
    api/contact/route.ts       contact form endpoint
    globals.css                tokens + Tailwind v4 setup
  components/
    sections/   Hero About Stack Experience Projects Contact Footer Marquee Navbar
    ui/         Button MagneticButton Cursor Preloader NoiseOverlay
                SectionHeading ThemeToggle BrandIcons
    animations/ SplitText FadeIn
    providers/  Providers (Redux + Theme + GSAP + Lenis + Cursor + Preloader)
  context/      ThemeContext
  store/        Redux Toolkit store + uiSlice
  data/         typed content (above)
  lib/          gsap.ts  lenis.ts  motion-tokens.ts  utils.ts
public/
  images/projects/   project screenshots
  resume.pdf         résumé
```

---

## Animation map

| Where | What |
| --- | --- |
| Preloader | Counter 0 → 100, then mask slides out. Skipped under reduced motion. |
| Hero | Word-stagger reveal on "Abhinav", char-stagger on "Verma.", radial gradient mesh background. |
| Cursor | Custom mix-blend-difference dot. Auto-disabled on touch / coarse pointer. Scales on interactive elements via `[data-cursor=hover]`. |
| Smooth scroll | Lenis driving the whole page. RAF loop syncs ScrollTrigger. Disabled under reduced motion. |
| Marquee | Infinite x-translate, pause on group hover, edge mask gradient. |
| Stack cards | 3D tilt on pointer move, accent glow on hover. |
| Experience | Vertical timeline, dot ring, fade-up reveals per item. |
| Projects | Hover-syncs the left preview card to the hovered list row. |
| Magnetic buttons | Pointer-distance translate on CTAs. Disabled on touch. |

Everything heavy is gated by `useReducedMotion()` or the global `prefers-reduced-motion` CSS guard in `globals.css`.

---

## Deploy to Vercel

```bash
# from D:/abhinav-portfolio
npx vercel        # one-time link
npx vercel --prod # deploy
```

Or push to GitHub and import the repo in the Vercel dashboard — no extra config needed. Add any environment variables (if you wire the contact form to a real email service) under **Project Settings → Environment Variables**.

---

## TODO — Abhinav owns these

- [ ] Replace `public/resume.pdf` with your real résumé.
- [ ] Drop a real portrait into `public/images/` and replace the `About.tsx` placeholder.
- [ ] Fill in real `liveUrl` / `repoUrl` for every project in `src/data/projects.ts`.
- [ ] Add project screenshots into `public/images/projects/` and reference them in each project's `detail.screenshots` array.
- [ ] Update the three stat numbers in `src/data/about.ts`.
- [ ] Replace placeholder experience entries (`TODO: Abhinav — company name`, etc.) in `src/data/experience.ts`.
- [ ] Real social handles in `src/data/socials.ts`.
- [ ] Wire `/api/contact/route.ts` to a real email service (Resend, SES, SMTP). Today it logs to the console only.
- [ ] Optional: add a testimonials / "currently learning" section if you want one — `src/components/sections/` is the right place.
- [ ] Set the production URL in `src/app/layout.tsx` `metadataBase`.
- [ ] Run Lighthouse on the deployed URL and capture scores in this README.

---

## Notes for future-Abhinav

- Tailwind v4 doesn't use `tailwind.config.ts` — everything is in `globals.css` under `@theme`. Add new color tokens there and they instantly become `bg-X` / `text-X` / `border-X` utilities.
- `motion/react` (not `framer-motion`) is the current import path.
- `lucide-react` removed brand marks; brand SVGs are in `src/components/ui/BrandIcons.tsx`.
- The `react-hooks/set-state-in-effect` lint rule is disabled globally — the patterns in `Preloader`, `Cursor`, and `ThemeContext` are intentional sync-on-mount.
