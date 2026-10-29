# Amlan Sengupta — Portfolio

A responsive, data-driven portfolio built with React, TypeScript, and Vite. It includes a homepage, dedicated About, Experience, Works, Services, Contact, and Digital Résumé pages, and a typed portfolio data source.

## Development

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production build is written to `dist/`.

## GitHub Pages deployment

This repository is the `amlan18041996.github.io` user site, so Vite's base path is `/`. The `public/404.html` fallback preserves client-side deep-link handling on GitHub Pages.

```sh
npm run deploy
```

The deploy script builds the site and publishes `dist/` to the `gh-pages` branch.

## Pages and content

- `/` — Homepage with experience highlights, five randomly selected interactive project cards, skills, credentials, principles, interests, contact, and desktop section navigation.
- `/about` — Biography, development approach, and the kinds of work Amlan enjoys building.
- `/experience` — Full work history, including responsibilities and contributions for each role, plus education.
- `/works` — All professional and personal projects with full project details.
- `/services` — Service roles, typical use cases, and expected deliverables.
- `/contact` — A contact form that opens the visitor’s email app, direct contact details, and social links.
- `/digital-resume` — Web résumé with career history, skills, education, credentials, and a PDF download.

The theme picker is available in the header across pages. Project cards open an accessible details dialog. The homepage section navigation scrolls smoothly and highlights the section in view, while respecting reduced-motion preferences. Route-level pages are lazy-loaded; the original profile portrait is retained alongside a smaller homepage-optimized derivative. New page routes are handled client-side and the `public/404.html` fallback supports direct GitHub Pages navigation.

## Project structure

- `src/data/portfolio.ts` is the content source of truth. Edit it to update profile, social links, experience, projects, skills, education, credentials, awards, services, principles, languages, and interests.
- `src/types/portfolio.ts` defines the typed content model.
- `src/pages/` contains route-level page compositions.
- `src/features/` contains reusable portfolio sections and feature UI.
- `src/components/` and `src/layouts/` contain shared interface and site-shell components.
- `src/assets/` contains the portraits and credential/award images used by the page.
- `src/styles/` contains the theme tokens, responsive layout, and reduced-motion-aware animations.
- `src/constants/site.ts` defines primary navigation, homepage section navigation, and built-in theme options.

The résumé is served from `public/amlan-sengupta-full-stack.pdf`. Social, verification, and award links are stored alongside their corresponding records in the portfolio data.
