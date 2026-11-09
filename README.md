# Mohamed Massous — Infrastructure Control Center Portfolio

Static portfolio built with **Astro + TypeScript + vanilla CSS + Lucide icons**. No backend, no database.

## Before you publish (required)

All personal facts live in `src/data/`. The build prints a warning for anything still missing.

| File | What to fill in |
| --- | --- |
| `src/data/profile.ts` | `email`, `github`, `linkedin`, `siteUrl` |
| `public/cv/Mohamed-Massous-CV.pdf` | Add your CV (the path is set in `profile.ts` → `cvPath`) |
| `src/data/certifications.ts` | `verifyUrl` for each certification (Red Hat verification page / AWS Credly badge) |
| `src/data/projects.ts` | Verify **Doura**'s real status, write its overview, then set `published: true` |
| `astro.config.mjs` and `public/robots.txt` | Final production URL |

Nothing is invented: certification links, project statuses and contact details are only shown once you provide them.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # prints placeholder warnings, then builds to ./dist
npm run preview    # serve the production build locally
```

## Structure

```
src/
  data/        profile, projects, certifications, skills, topology (edit content here)
  components/  Header, Hero, OperationsOverview, SystemTopology,
               ProjectRegistry, TechnicalModules, Certifications, ContactPanel
  layouts/     Base.astro (SEO, JSON-LD, theme, nav behaviour)
  pages/       index.astro, projects/[slug].astro (one case study per published project)
  styles/      global.css (design tokens, dark + light themes)
```

Adding a project = add an object to `projects.ts`; the registry card, tech filter, case-study page and sitemap entry are generated automatically.

## Deploy on Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build command: `npm run build` · Output directory: `dist` · Node version: 22.
4. After the first deploy, set `site` in `astro.config.mjs` (and the Sitemap line in `public/robots.txt`) to the real URL, then push again.

Security headers and asset caching are configured in `public/_headers`.

## Honesty rules built into the design

- The topology is labelled as a conceptual diagram, never as live servers.
- Project statuses are `completed | in-progress | planned | lab`; unverified projects stay hidden.
- No uptime figures or fake metrics anywhere.
