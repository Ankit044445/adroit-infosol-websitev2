# Adroit Infosol — Website Redesign

A full UI redesign of the Adroit Infosol company website. Content is unchanged from
the original site (adroitinfosol.com) — only the interface, visuals, and interaction
design were rebuilt from scratch, following the `/it-software-design` reference
system and the company's own logo palette (indigo `#2B3D97`, sky blue `#29A9E1`,
green `#699B41`).

## Stack

- **React 19 + TypeScript + Vite**
- **React Router DOM** (client-side routing, 5 pages)
- **SCSS Modules** for component styles + a small shared design-token layer
- **Bootstrap** — grid/container/breakpoint utilities only (no default component
  skins, so the site never looks like a generic Bootstrap template)
- Dark mode via `data-theme` + CSS custom properties, persisted to `localStorage`
- All icons and illustrations are hand-built inline SVG — no icon-font or stock
  image dependency

## Structure

```
src/
  assets/icons/       Icon.tsx (custom icon set), Logo.tsx (brand mark)
  components/layout/   Navbar, Footer, Layout
  components/ui/       Button, Reveal (scroll animation), Seo, GradientBlob
  components/sections/ Reusable page sections (Hero, ServiceCard, TeamCard, ...)
  data/content.ts       All site copy, centralized (unchanged from original site)
  hooks/                useTheme, useReveal
  pages/                Home, About, Services, WorkCulture, Contact, NotFound
  styles/               Design tokens, theme, mixins, base, buttons, animations
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint
```

## Notes

- SEO: per-route `<title>`/meta via `Seo.tsx`, `sitemap.xml`, `robots.txt`,
  semantic landmarks, descriptive alt/aria labels.
- Accessibility: skip-to-content link, visible focus rings, `aria-expanded` on
  the mobile menu, reduced-motion support, sufficient color contrast in both themes.
- Performance: no icon/image libraries, route content is plain SSR-friendly HTML,
  CSS is scoped per component (SCSS Modules) to avoid a global stylesheet bloat.
