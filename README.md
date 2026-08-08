# Joshua Martinez — Personal Website

Personal portfolio built with Next.js (App Router), TypeScript, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The page hot-reloads as you edit.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Root layout + metadata
  page.tsx          Composes the page sections
  globals.css       Theme variables and all styling
components/
  AnimatedBackground.tsx   Drifting grey gradient blobs
  TopBar.tsx               Fixed nav — sections left, wordmark centred,
                           LinkedIn / GitHub / Email right
  Hero.tsx                 Landing section (photo backdrop, name, bio, chat)
  ChatWidget.tsx           "Ask a question" UI wired to the Gemini route
  FeaturedProjectSection.tsx  Project N.O.A.H spotlight with looping demo clip
  Projects.tsx             Project showcase grid
  SkillsSection.tsx        Grouped skill tags
  EducationSection.tsx     Degree, GPA, involvement
  Footer.tsx               Colophon + copyright
  SocialIcon.tsx           Glyphs for the top bar's external links
  Reveal.tsx               Scroll-into-view fade-up wrapper
content/
  site.ts           All site content (bio, links, projects) — edit here
```

## Editing content

All text, links, and project entries live in `content/site.ts`. Components
only render that data, so most updates never touch JSX.

**Changing the headshot:** overwrite `public/headshot.jpg` with a new image
(portrait ~4:5 ratio, ideally under ~200 KB) — no code changes needed. If the
new file has a different name or pixel dimensions, update `site.headshot`
in `content/site.ts`.

## TODO

- [ ] Wire the chat UI to an AI backend (Next.js API route)
