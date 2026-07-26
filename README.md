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
  AnimatedBackground.tsx   Drifting blue/green gradient blobs
  TopBar.tsx               Fixed nav — name left, section links right
  Hero.tsx                 Landing section (photo backdrop, name, bio, chat)
  ChatPlaceholder.tsx      "Ask a question" UI (AI chatbot coming later)
  FeaturedProjectSection.tsx  N.O.A.H Ark spotlight with YouTube demo
  Projects.tsx             Project showcase grid
  ProjectCard.tsx          Single project card
  SkillsSection.tsx        Grouped skill tags
  EducationSection.tsx     Degree, GPA, involvement
  Footer.tsx               LinkedIn / GitHub / Resume / Email icons + copyright
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

- [ ] Add description/tech for VR Punch Golf in `content/site.ts`
- [ ] Drop `resume.pdf` into `public/`
- [ ] Wire the chat UI to an AI backend (Next.js API route)
