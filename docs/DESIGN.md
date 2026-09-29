# DESIGN.md: Mind, Brain, Behavior Society

This is the specific visual direction for this site. `DESIGN-STANDARDS.md` sets the floor; this file makes the choices.

## 0. Direction in one paragraph

A mostly white site with a lot of open space, set in Ranade, with one memorable thing: chunky, rectangular, pseudo-3D controls that depress like a 1980s spacebar. The feel is a well-designed print program crossed with a classic Nintendo menu screen: solid colors, hard edges, no rounded corners, no gradients, no glow, no cards. Images are large and calm, with text sometimes set over them. Beige, woody orange, and Dartmouth green are accents, not backgrounds for everything.

## 1. References (in `docs/refs/`)

**`site-design-inspo-1.png`** (a French guesthouse site, "Les Grands Chênes")
Take from it:
- Paper-colored header band with the title set huge and centered, a small two-line descriptor top-left, and a single round button top-right. This is the one centered element on our site.
- Full-bleed photograph directly under the header, edge to edge, with a large italic sentence overlaid at the bottom-left.
- Tiny uppercase labels with wide tracking for navigation and metadata only.
- A hairline rule under the nav.
Do not take: the serif italic (use Ranade italic instead), the hand-painted title texture, the round button shape (ours are rectangles).

**`site-inspo-2.png`** (a designer's portfolio, Emi Takahashi)
Take from it:
- Extreme restraint: thin rules, generous margins, small captions under images, nothing decorative.
- Two-column image grid with captions in a narrow column beside the images.
- A right-hand column left empty on purpose.
Do not take: the Times-style serif, the ornamental glyphs.

Combined: reference 1's header and hero composition, reference 2's inner-page sparseness, our own controls and palette.

## 2. Tokens

Define these in `src/styles/tokens.css`. Use only these.

### Color

| Token | Hex | Role |
|---|---|---|
| `--white` | `#FFFFFF` | Default page background. Dominant surface, 60% or more of every page. |
| `--paper` | `#F1ECE1` | The entire home hero field (title band plus animation ground), the menu page, footer, calendar table stripes. Never the background of an inner page. |
| `--ink` | `#161616` | Body and heading text on light surfaces. |
| `--black` | `#000000` | Menu blocks, pseudo-3D offset, text on paper when extra weight is needed. |
| `--grey` | `#3C3C3C` | Idle menu block fill, secondary rules. |
| `--grey-mid` | `#8A8A8A` | Captions, metadata, disabled controls. |
| `--wood` | `#B5602A` | Hover and active state of blocks, current-page marker, one accent surface per page at most. |
| `--wood-deep` | `#8F4A1F` | Orange used as text on white (meets WCAG AA). Never use `--wood` for body-size text on white. |
| `--green` | `#00693E` | Dartmouth Green. Link underlines, the current-week marker on the calendar, focus rings. Small doses only. |

Priority, in Luca's words: white most, then black and grey, then beige, orange, and green as accents. Clean but not dry.

### Type

Two families only.

- **Ranade** (Fontshare, free license): everything except the home page title. Weights 300, 400, 500, 700, with italics. Vary weight and italics deliberately: headings 500 or 700 with tight leading (1.05 to 1.15) and slight negative tracking; body 400 at 1.6 line-height; the home hook and image overlays in 400 italic; metadata in 400 at 13px with 0.06em tracking, uppercase only in the nav and calendar.
- **Clash Display** (Fontshare, free license), weight 700: the home page title "Mind Brain Behavior Society" only. Nowhere else.

Loading: download both families from fontshare.com and self-host as woff2 in `public/fonts/` with `@font-face`, `font-display: swap`, and fallback stacks (`Ranade, "Helvetica Neue", Arial, sans-serif`; `"Clash Display", Ranade, Arial Black, sans-serif`). If downloading fails, use Fontshare's CSS link tag as a fallback and note it in TODO.md.

Scale (desktop / mobile):
- Home title: clamp(56px, 11vw, 168px) / clamp(44px, 14vw, 72px), line-height 0.95, tracking -0.02em
- Page title (inner pages): 48px / 34px, weight 700
- Section heading: 26px / 22px, weight 500
- Body: 17px / 16px, weight 400, max line length 68ch
- Caption and metadata: 13px, weight 400

### Layout

- Content max-width 1200px, page gutters 24px mobile / 48px desktop.
- Spacing scale: 8, 16, 24, 40, 64, 96, 160. Use the big end. Sections breathe.
- `border-radius: 0` everywhere. No exceptions.
- Shadows: only the hard offset on pseudo-3D controls (below). No soft shadows anywhere.
- Rules: 1px `--ink` on white, 1px `--black` on paper. Use them to separate, not decorate.
- Left-aligned text everywhere except the home page title block.
- Never split the screen down the middle into two equal halves.

## 3. Components

### Pseudo-3D block (the signature)

A rectangle with a hard offset that reads as a physical key.

```
Idle:    background var(--white) (or --grey on dark rows); border 1.5px solid var(--black);
         box-shadow 5px 5px 0 var(--black); transform none
Hover:   transform translate(2px, 2px); box-shadow 3px 3px 0 var(--black); background var(--wood); color white
Active:  transform translate(5px, 5px); box-shadow none            (the key bottoms out)
Focus:   outline 2px solid var(--green); outline-offset 3px
Disabled:background var(--paper); color var(--grey-mid); border-color var(--grey-mid); box-shadow 5px 5px 0 var(--grey-mid); no hover or active movement
```

Transition 90ms ease-out on transform and box-shadow; nothing longer. Use blocks for: the menu, the home menu page tiles, and at most one call to action per inner page. Never for decoration and never as content cards.

### Top bar

Height 56px, white, hairline rule below. Left: the Dartmouth logo from `public/media/` at 26px height, unmodified, with clear space of at least its own height on all sides, linking to https://home.dartmouth.edu. Right: the five section labels in 13px uppercase Ranade with 0.08em tracking (desktop), or the word "Menu" (mobile). Current page label in `--wood-deep`.

### Expanding menu (desktop, hover)

When the pointer enters the label group, the bar grows from 56px to 104px over 160ms and the labels become five equal-width blocks that fill the full width with no gaps between them: background `--grey`, white text, 1px `--black` separators, hard bottom offset 5px `--black`. The hovered block gets `--wood` background, brightens (text stays white), and grows to flex 1.5; the other four darken to `#2A2A2A` and shrink to flex 0.875. On mouse-down the hovered block depresses (translate 3px down, offset to 2px). Pointer leaves: collapse back over 160ms. Keyboard: Tab through the blocks with the same visual states on focus.

### Menu (mobile, tap)

Tapping "Menu" opens a full-screen paper panel with the five blocks stacked full-width, 72px tall each, no gaps, same idle/pressed states (pressed on touch). Close via a "Close" block at the bottom or the Escape key. Body scroll locks while open. The menu must actually work on a real phone.

### Figure

Image plus a 13px caption below in `--grey-mid`, left-aligned, max-width matching the image. Optional overlay variant: an italic sentence set bottom-left over the image on a solid `--black` label strip (no blur, no gradient). Images are `<img>` with width and height attributes, `loading="lazy"` below the fold, and `max-width: 100%`. Prefer Astro's `<Image>` for optimization where the source is in `src/`.

### Footer

Paper background, top rule. Four short lines, left-aligned:
full name, the affiliation line, contact and Instagram, and "Last published: {date}" computed at build time with `new Date()` formatted as "September 29, 2026". Text only, no logo.

## 4. Home page

Three states, in one scroll, total length about 3 viewport heights. No long scroll.

### State 1: hero (100vh)

```
+----------------------------------------------------------------------------------+
| [Dartmouth logo]                                   MISSION  WHAT WE DO  ...  CONTACT |
|----------------------------------------------------------------------------------|
| paper band                                                                       |
|   student organization          MIND BRAIN                                        |
|   at Dartmouth                  BEHAVIOR SOCIETY                       [ Contact ] |
|                                 at Dartmouth College                              |
|----------------------------------------------------------------------------------|
|                                                                                  |
|                         hero animation, edge to edge, white ground               |
|                                                                                  |
|                                                                                  |
|  For Dartmouth undergraduates who want to get closer to brain science ... (italic)|
+----------------------------------------------------------------------------------+
```

- Paper band holds the title (Clash Display, centered, two lines), "at Dartmouth College" directly under it in Ranade 400, a two-line descriptor top-left ("An undergraduate student organization at Dartmouth"), and one block button top-right ("Contact").
- The whole state-1 hero is one continuous `--paper` field: the title band and the animation below it share the same beige ground, with no seam or rule between them. The animation fills the remaining viewport. The hook sentence sits bottom-left in Ranade italic, 22px desktop / 18px mobile, directly on the beige (no strip needed unless it overlaps a stroke, in which case use a thin `--black` strip).

### Hero animation

The centerpiece. Two separate things: a **composition** and an **aesthetic**. Get both right; don't let one override the other.

**Composition:** a loose network of interconnected neurons spread across the beige field, not one cell zoomed in. Roughly five to nine small cell bodies distributed with air between them, linked by branching axons and dendrites that cross the frame. Depth comes from varying line weight and a few strands running off the edges, not from stacking things densely. Keep it minimal and calm; leave real negative space; it should read at a glance, not reward inspection.

**Aesthetic:** hand-drawn, like a time-lapse sketch in colored pencil and watercolor. Organic single-weight strokes; soft translucent watercolor pools around the cell bodies. Warm and quiet. Not photoreal, not glowing, not clinical, not machine-like, not gross.

**Reference files, `docs/refs/` only, never shipped:** `synapse-inspo.gif` and `synapse-inspo-2.webp`. Take from them the one thing they get right: the spread, interconnected network and its sense of depth. Ignore everything else about them; they are dark, blue, glowing, and 3D-photoreal, which is the exact opposite of the aesthetic above. Do not sample their color, background, or glow, and do not use either file on the site. Neither matches the brief, so treat the SVG below as the real build, not a fallback.

**Build it as inline SVG on a `--paper` ground:**
- Draw the network with `stroke-dashoffset` so the strokes sketch themselves on over about 7 seconds, in a slightly irregular order so it feels drawn by hand rather than machine-swept.
- Then, on two or three of the connections, small dots (neurotransmitters) drift across the synaptic gap in slow motion over about 3 seconds, and a soft highlight travels the length of a couple of strands (an action potential) moving gently downward.
- Loop about every 16 seconds with a long calm hold before it redraws. Nothing pulses, blinks, or flashes.
- Strokes in `--ink` and `--wood-deep` at 1.5px; watercolor pools in `--green` and `--wood` at 10 to 15% opacity. No blue, no gradient, no glow, no drop shadow. It sits directly on the beige, so the whole state-1 hero is one paper field.
- Log in TODO.md that this is a stand-in for a real drawn animation if Luca commissions one later.

`prefers-reduced-motion`: render the fully drawn network as a single static frame, no draw-on, no drifting dots.

### State 2: scroll zoom (about 100vh of runway)

The hero is `position: sticky; top: 0`. As the user scrolls the next viewport height, the animation scales from 1 to 1.6 around its center and the title band fades to 0. Implement with CSS scroll-driven animations (`animation-timeline: scroll()`) and a small JS fallback using a scroll listener with `requestAnimationFrame` for browsers without support. Cap the scale at 1.2 on screens under 768px. Under `prefers-reduced-motion`, no zoom: the page scrolls normally.

### State 3: menu page (100vh, paper)

The zoom lands on a full-viewport paper section occupied entirely by five blocks, edge to edge with no gaps, on desktop as a 3 + 2 grid and on mobile as a stack. Each block: the section name in Ranade 500 at 28px and one line of description from CONTENT.md at 15px, both left-aligned inside the block with 32px padding. Idle `--white` blocks with `--black` borders and offsets; hover `--wood`. Below the blocks, nothing. The footer follows.

## 5. Inner pages

One template: top bar, then a page title left-aligned with 96px top margin, then content in a single left column at max 68ch, with images either full-bleed (breaking the column) or in reference 2's two-column grid with captions. Sections separated by 64px to 96px of space and, where it helps, a 1px rule. No cards, no boxes around text, no icons.

- **Mission:** page title; the official statement as a large block of Ranade 500 at 22px (set apart with a rule above and below, not a box); the plainer explanation; a short history; the officers as a plain list (name, class year, role, major) with 1px rules between rows, photos beside names if headshots exist.
- **What we do:** page title; one intro line; four short groups (Events, Research, Building, Mentoring) as heading plus bullet fragments. Photos from lab tours or events as a two-column grid with captions under the groups.
- **Neurotech team:** a full-bleed hero image (a Neuroflow screenshot or a team photo); intro; the two statements set as a paired block in Ranade italic; how the team works; equipment as a two-column figure pair with credited captions; current project; past project (problem, approach, result) with screenshots in the two-column grid; applications block button (disabled state, "Applications closed"); current members heading with the empty-state line.
- **Term calendar:** page title; term label; a table (Week, Dates, Event, Details) in Ranade with paper stripes on alternate rows and 1px rules, the current week marked with a 4px `--green` left border computed client-side from today's date, week 1 starting Monday, September 14, 2026. Rendered from `src/data/calendar.json`. Design for a term switcher (one term for now).
- **Contact:** page title; two officer contact lines; Instagram link; the new-member line; a "For professors and researchers" section; a "Get involved" section linking to the calendar and neurotech pages. One block button: "Email the president" (mailto).

## 6. Motion

- The nav expansion, the block depress, and the home scroll zoom are the only motion on the site. No fade-in-on-scroll sections, no hover transitions on images, no parallax.
- Everything respects `prefers-reduced-motion: reduce`.

## 7. Responsive

Mobile-first. Test 375, 768, 1024, 1440. No horizontal scroll at any width. Tap targets at least 44px. The home title wraps to three lines on phones if needed; the menu page stacks; tables scroll inside their own container if they must.

## 8. Favicon, share preview, and head

- Favicon set from the MBB logo file in `public/media/`: `favicon.svg` (if the logo is vector) or `favicon.ico` plus `favicon-32.png`, and `apple-touch-icon.png` at 180px. Generate with sharp in a small script under `scripts/`.
- Open Graph image `public/og.png` at 1200 by 630: paper background, MBB logo centered, "Mind, Brain, Behavior Society" beneath it in Ranade. This is the preview that shows when the link is texted.
- Per-page `<title>`, `meta description`, `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card` = `summary_large_image`, canonical URL, `theme-color` = `#FFFFFF`.

## 9. Do not (Luca's list)

- Glowy or purple-blue graphics; any gradient background
- Bubble cards, boxes around everything
- Corporate Memphis or childish illustration
- Animation that competes with text
- The screen split down the middle
- Clutter; text with no room
- Overdramatic section headers
- Long single-page scrolling
