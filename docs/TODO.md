# TODO

Open items from CONTENT.md section 10, plus assumptions made during the build.

## Draft content (rendered without the marker, awaiting confirmation)

- [ ] Course recommendations sheet: add the link on the what-we-do page (currently plain text)
- [ ] Emotiv model name: confirm ("Emotiv Insight" rendered; Luca wrote "Emotiv Insight V")
- [ ] Current neurotech project: replace "In development for Fall 2026" with details
- [x] Neuroflow term label: "Spring 2026" confirmed by Luca on 2026-09-29 (hero caption now says "in spring 2026")
- [ ] Neurotech application link: wire up the disabled "Applications closed" button when applications open
- [x] Neurotech current members: replace "Roster to be added."
- [ ] Calendar: add times, places, and links (fields already exist in src/data/calendar.json)

## Images

- [ ] daniel-headshot.png and shouka-headshot.png (the founding president and VP) are in
      src/assets/media/ but unplaced: CONTENT.md only puts headshots in the officer list,
      and they are not 2026-27 officers. They could accompany "Since 2025" on the mission
      page if wanted.
- [ ] mbb-logo-black.png is unused: CONTENT.md limits the MBB logo to favicon and share
      image, and the green file is the better source for both.
- [ ] No lab tour, event, or demo photos exist yet, so the what-we-do page has no image
      grid. Add photos to src/assets/media/ and a two-column grid can render them.
- [ ] Only one Neuroflow screenshot exists, so the past-project section shows a single
      figure instead of the planned two-column grid.

## Hero animation

- [ ] The home hero is a hand-authored inline SVG (sketch-on network, watercolor pools).
      It is a stand-in for a real drawn animation if one is commissioned later.
      The synapse reference files stay in docs/refs/ and never ship.
- Note: strand strokes run 1.1 to 2.6 SVG units against the spec's 1.5px; at 1.5 uniform
  the drawing read as a thin geometric diagram, and the varied weight is what makes it
  read as hand-drawn (DESIGN.md asks depth to come from varying line weight).

## Fonts

- Ranade (300/400/500/700 + italics) and Clash Display (700) downloaded from Fontshare
  and self-hosted as woff2 in public/fonts/ with the ITF Free Font License. No CSS-link
  fallback needed.

## Other assumptions

- Canonical domain: https://mindbrainbehavior.org (from CLAUDE.md), set as site in
  astro.config.mjs; og:url and canonical tags derive from it.
- og.png is generated from scripts/og-template.html rendered at 1200x630 (any browser);
  favicons regenerate with node scripts/generate-icons.mjs.
- [ ] Dartmouth logo placement is pending approval from the Office of Communications.
      It appears only in TopBar.astro (one img tag) and is easy to remove.
- [ ] The Dartmouth logo file is a square stacked lockup, so the wordmark stays small
      even at 44px bar height. A horizontal lockup file from Dartmouth would read
      better in the top bar.
