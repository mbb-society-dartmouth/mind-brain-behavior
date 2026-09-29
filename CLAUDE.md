# Mind, Brain, Behavior Society website

Astro 7 static site for the Dartmouth Undergraduate Mind, Brain, Behavior Society.
Deployed on Vercel from `main`; live at https://mindbrainbehavior.org. No backend.

## Read these before doing anything

@docs/DESIGN-STANDARDS.md
@docs/DESIGN.md
@docs/CONTENT.md

Precedence when they conflict:
1. `docs/CONTENT.md` and `docs/DESIGN.md` (Luca's specific direction for this site)
2. `docs/DESIGN-STANDARDS.md` (general standards; its hard bans always apply)
3. Your own judgment

## Stack and conventions

- Astro 7, static output (`output: 'static'`). Set `site: 'https://mindbrainbehavior.org'` in `astro.config.mjs`.
- No React, no Tailwind, no UI kits. Vanilla TypeScript in `<script>` tags for the nav and the scroll behavior.
- Plain CSS. All colors, type, and spacing come from custom properties in `src/styles/tokens.css`. Global styles in `src/styles/global.css`.
- Structure:
  - `src/layouts/Base.astro` (head, meta, fonts, TopBar, Footer)
  - `src/components/` (TopBar, MenuBlocks, BlockButton, Figure, Footer, CalendarTable, OfficerList)
  - `src/pages/` (index, mission, what-we-do, neurotech, calendar, contact)
  - `src/data/` (officers.json, calendar.json, projects.json, equipment.json) so future officers can edit content without touching components
  - `public/media/` for site images and video; `public/fonts/` for self-hosted fonts; `docs/refs/` for reference screenshots (never shipped)
- Page copy comes from `docs/CONTENT.md`. Use it as written. Do not paraphrase it into marketing language.
- Commit after each page with a plain message. Do not push.

## Writing rules

Apply `docs/CONTENT.md` section 0 to every string on the site: headings, buttons, alt text, captions, meta descriptions, and the 404 page.
Short version: plain, specific, understated. No em dashes. No "not just X, but Y". No rhetorical triplets. No buzzwords. Don't start consecutive sentences with "We". Don't invent facts.

## Never

- Never render a `[DRAFT]` marker on the site. Render the draft text that follows it, and log the item in `docs/TODO.md`.
- Never invent events, dates, members, numbers, project details, or links. Missing information becomes a TODO entry, not a guess.
- Never alter, recolor, crop, or combine the Dartmouth logo with anything else. It appears alone, unmodified, with clear space.
- Never use purple, gradients, glass cards, emoji in headings, stat rows, or Corporate Memphis illustration.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
Full Astro documentation: https://docs.astro.build
