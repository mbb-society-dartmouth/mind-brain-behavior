# CONTENT.md: Mind, Brain, Behavior Society

Final copy for every page. Use it as written. Text after a `[DRAFT]` marker is a placeholder Luca has not confirmed: render the text, never the marker, and list the item in `docs/TODO.md`.

## 0. Writing rules (apply to every string, including alt text, captions, buttons, and meta descriptions)

- Plain, confident, specific. Say what the society does, who it's for, and why it matters, without making it sound profound.
- Concise but not dumbed down. Short paragraphs. Every sentence earns its place.
- Only state things supported by this file. Don't embellish the mission, impact, or ambitions. If information is missing, don't make it up.
- No em dashes. Use periods, commas, colons, or parentheses. Semicolons are fine occasionally, not often.
- No "not just X, but Y". No rule-of-three phrasing used for effect. No "whether you're...", "from X to Y", "there's something for everyone".
- No buzzwords: ecosystem, unlock, empower, catalyze, transformative, cutting-edge, revolutionize, next generation, world-class, at the intersection of (except inside the official mission statement, which is quoted verbatim).
- No academic filler ("interdisciplinary inquiry", "intellectual exchange"). No "changing the world" language.
- Don't start consecutive sentences with "We". Vary structure.
- Prefer specific nouns and verbs over adjectives. Don't describe members as "curious, passionate, driven".
- Headings short and descriptive, never clever.
- Don't repeat information across pages to fill space.
- Target: written by a competent student who cares about the organization, not by a marketing department.

## 1. Sitemap and navigation

| Label (nav) | Path | Title tag |
|---|---|---|
| Our mission | `/mission` | Our mission \| Mind, Brain, Behavior Society |
| What we do | `/what-we-do` | What we do \| Mind, Brain, Behavior Society |
| Neurotech team | `/neurotech` | Neurotech team \| Mind, Brain, Behavior Society |
| Term calendar | `/calendar` | Term calendar \| Mind, Brain, Behavior Society |
| Contact | `/contact` | Contact \| Mind, Brain, Behavior Society |

Home (`/`) title tag: Mind, Brain, Behavior Society at Dartmouth

Site-wide meta description: Dartmouth's undergraduate society for brain science: lab tours, guest lectures, help finding research positions, and a student EEG team.

## 2. Global strings

**Top bar descriptor (home):** An undergraduate student organization at Dartmouth

**Footer, four lines:**
1. Dartmouth Undergraduate Mind, Brain, Behavior Society
2. An undergraduate student organization at Dartmouth
3. luca.d.gandrud.27@dartmouth.edu, crystal.ye.27@dartmouth.edu, and Instagram @dartmouth.mbb (link: https://www.instagram.com/dartmouth.mbb)
4. Last published: {build date}

**404 page:** "That page doesn't exist." with one block button, "Go home".

## 3. Home

**Title (Clash Display):** Mind Brain Behavior Society
**Subheader:** at Dartmouth College
**Block button (top-right):** Contact → `/contact`
**Hook (italic, bottom-left):** For Dartmouth undergraduates who want to get closer to brain science than a lecture hall allows.

**Menu page tiles (label, one line):**
- Our mission: Why the society exists and who runs it.
- What we do: Lab tours, guest lectures, research placement, workshops.
- Neurotech team: Building with consumer EEG headsets, one project a term.
- Term calendar: Fall 2026 events, week by week.
- Contact: Join, ask a question, or offer a lab tour.

## 4. Our mission (`/mission`)

**Page title:** Our mission

**Official mission statement** (set apart, verbatim):
Foster interdisciplinary exploration and collaboration at the intersection of neuroscience, psychology, and related fields that fall between departments at Dartmouth. We aim to advance the understanding of the brain and mind, and inspire innovation in these fields by connecting undergraduate students through speaker events, research opportunities, and entrepreneurial initiatives.

**Heading:** In plainer terms

Finance, consulting, and engineering students at Dartmouth have pipelines: clubs, recruiting, and ways to work in their field before graduating. Brain science students didn't. The society exists to close that gap.

Members are a mix of pre-meds, computer science majors, biomedical engineers, and neuroscience, biology, and psychology majors, headed toward medicine, academic research, software engineering, and healthcare or biotech consulting. Most people can't tell whether a field is for them until they've done some of the work or met the people doing it. The events and programs here exist to make that happen.

**Heading:** Since 2025

Founded in spring 2025; the first events ran in fall 2025. Daniel Jeon (biomedical engineering) and Shouka Tavakolian (neuroscience) served as the first president and vice president and graduated in spring 2026. Today the society has about 90 members, six officers, roughly five events a term, and a neurotech team.

**Heading:** Officers, 2026 to 2027

Render from `src/data/officers.json`:

| Name | Class | Role | Major |
|---|---|---|---|
| Luca Gandrud | '27 | President | Neuroscience |
| Crystal Ye | '27 | Vice President | Biology and Music |
| Colson Duncan | '27 | Treasurer | Biology and Neuroscience |
| Arden Rogers | '28 | Neurotech Chair | Psychology |
| Will Harris | '29 | Operations Chair | Biomedical Engineering |
| Helena Kaaua | '29 | Public Outreach Chair | Neuroscience |

Headshots: use any officer photos found in the folder (match by name in the filename). If none exist, list without photos.

## 5. What we do (`/what-we-do`)

**Page title:** What we do

**Intro line:** About five events a term, plus ongoing help with research and careers.

**Events**
- Lab tours and demos at brain science labs on campus
- Guest lectures
- Career workshops for positions in academia and industry
- Socials with other brain science students and professors

**Research**
- Help getting placed in neuroscience and psychology labs
- A live sheet of course recommendations and reviews for brain science courses ([DRAFT] link to be added; render as plain text until then)

**Building**
- The neurotech team: hands-on work with EEG headsets, one project a term (link to `/neurotech`)

**Mentoring**
- Advice for pre-med, neurotech, brain science research, and healthcare and biotech consulting paths

Photos: any lab tour, event, or demo images from the folder, in the two-column grid, with plain captions stating what and where (only what the filename supports; no invented dates).

## 6. Neurotech team (`/neurotech`)

**Page title:** Neurotech team

**Intro:** A group of six to ten society members who learn about the brain by building projects with noninvasive brain-sensing hardware, currently consumer-grade EEG. Each term the team picks a real problem, builds toward a product, and presents its progress at Dartmouth Technigala.

**Paired statements (italic block, in the team's words):**
We're not building a company. We're excited to learn more about the mind by using technology and AI.
The goal is hands-on experience with an EEG, and the skills that come from building a product as a team.

**Heading:** How the team works
- Two sides: developers (technical research, product development, hardware) and product managers (logistics, stakeholder engagement, presentations).
- Software engineering experience isn't required. Members pick up new skills quickly.
- Led by Arden Rogers '28, Neurotech Chair. Previously led by Luca Gandrud '27.

**Heading:** Equipment
Render from `src/data/equipment.json`, as a two-column figure pair:
- Emotiv Insight headset. Caption credit: "Photo: Emotiv" linking to https://www.emotiv.com ([DRAFT] confirm the exact model name; Luca wrote "Emotiv Insight V")
- OpenBCI Ganglion board. Caption credit: "Photo: OpenBCI" linking to https://openbci.com

**Heading:** Current project
[DRAFT] In development for Fall 2026. Details will be posted here.

**Heading:** Past project: Neuroflow ([DRAFT] term label: Spring 2026)
Render from `src/data/projects.json`.

*The problem.* Meditation is subjective. It's hard to know how or when you're improving, and for people who find objective feedback motivating, that's a barrier to sticking with it long enough to see the benefits.

*The approach.* Partnered with the Student Wellness Center, which offers meditation sessions; obtained a product grant; built and tested a web app that connects to the OpenBCI Ganglion headset and shows real-time readings of focus, stress, and relaxation during a session.

*The result.* Neuroflow, a live meditation web app, presented at Technigala. Screenshots from the folder go here, two-column grid, captions describing what each screen shows (only what is visible in the image).

**Heading:** Applications
Applications are closed for now. The team opens them periodically; check back here or email the officers on the contact page.
Block button, disabled state: Applications closed ([DRAFT] link for when applications open)

**Heading:** Current members
Roster to be added.

## 7. Term calendar (`/calendar`)

**Page title:** Term calendar
**Term label:** Fall 2026
**Note under the term label:** Week 1 began Monday, September 14. Dates below are the Monday of each week; times, places, and links will be added as they're set.

Render from `src/data/calendar.json` (one term object with an array of weeks):

| Week | Week of | Event | Details |
|---|---|---|---|
| 1 | Sept 14 | Intro meeting | Held |
| 4 | Oct 5 | Lab tour | Date, time, and place TBD |
| 5 | Oct 12 | VR workshop | TBD |
| 6 | Oct 19 | Career workshop | TBD |
| 8 | Nov 2 | Social event | TBD |
| 9 | Nov 9 | Guest lecture | TBD |

Show only weeks with events. Mark the current week from the visitor's date. Include fields in the JSON for time, place, and link, left empty for now.

## 8. Contact (`/contact`)

**Page title:** Contact

Questions, new-member inquiries, and anything else:

- Luca Gandrud, President: luca.d.gandrud.27@dartmouth.edu
- Crystal Ye, Vice President: crystal.ye.27@dartmouth.edu
- Instagram: @dartmouth.mbb (link)

New members are always welcome, and we're happy to walk you through how to get involved.

**Block button:** Email the president (mailto: luca.d.gandrud.27@dartmouth.edu)

**Heading:** For professors and researchers
If you'd like to host a lab tour, give a guest lecture, or take on undergraduate researchers, email either officer above.

**Heading:** Get involved
Come to an event (see the term calendar), or email us. Applications for the neurotech team open periodically (see the neurotech page).

## 9. Images

All image, GIF, and video files were dropped at the repo root with descriptive filenames. Move them to `public/media/` (or `src/assets/` if using Astro's image optimization), keep the names, and place them by filename:

- Dartmouth logo → top bar, unmodified
- MBB logo → favicon set, share image, and nowhere else unless a filename suggests otherwise
- Neuroflow screenshots → neurotech page, past project
- Emotiv Insight and OpenBCI Ganglion product photos → neurotech page, equipment, with the credits above
- Synapse or neuron animation (if present) → home hero
- Lab tour, event, demo, or team photos → what-we-do page grid, or neurotech page if the filename says neurotech
- Officer headshots → mission page officer list
- `site-design-inspo-1.png` and `site-inspo-2.png` → `docs/refs/`, never the site

Alt text describes what's in the image in one plain sentence. Anything you can't place goes in TODO.md, not on the site.

## 10. Open items (write all of these to `docs/TODO.md`, plus anything else you had to assume)

- Course recommendations sheet link
- Emotiv model name confirmation
- Current neurotech project details
- Neuroflow term label
- Neurotech application link
- Current members roster
- Calendar times, places, and links
- Real hand-drawn hero animation, if the SVG fallback was used
- Dartmouth logo placement is pending approval from the Office of Communications; keep it easy to remove
