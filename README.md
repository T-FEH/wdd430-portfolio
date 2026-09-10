# WDD 430 Portfolio

A personal portfolio site built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** for WDD 430.

## Live Deployment

> Vercel URL: _pending deployment_

## Repository

https://github.com/T-FEH/wdd430-portfolio

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
wdd430-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css         Global styles / Tailwind imports
│   ├── layout.tsx          Root layout with Header + Footer
│   ├── page.tsx            Home (portfolio) page
│   ├── about/
│   │   └── page.tsx        About page
│   └── api/
│       └── hello/
│           └── route.ts    Simple API route
├── components/
│   ├── Header.tsx          Navigation header
│   ├── ProjectCard.tsx     Reusable project card
│   ├── ProjectList.tsx     Container that maps over projects
│   ├── SkillCard.tsx       Custom component (used on About)
│   └── Footer.tsx          Footer with dynamic year
├── public/
└── package.json
```

## Components

All components are **Server Components** — none use the `'use client'` directive.

| Component | Description |
|---|---|
| `Header.tsx` | Site title and `next/link` navigation to Home and About |
| `ProjectCard.tsx` | Renders one project: `title`, `description`, `technologies`, optional `link` |
| `ProjectList.tsx` | Maps a `projects` array into `ProjectCard`s in a responsive grid |
| `Footer.tsx` | Copyright line with the year computed at render time |
| `SkillCard.tsx` | **Custom component.** Displays a named category of technical skills as a tag list with an optional proficiency badge |

## API Route

`GET /api/hello` returns:

```json
{ "message": "Hello from Next.js API!" }
```

## Accessibility Note

The Next.js starter's `globals.css` included a `prefers-color-scheme: dark`
block that flipped the page background to near-black while every component uses
dark-on-light Tailwind utility classes, producing failing contrast ratios. The
site now commits to a single light theme, and link/heading colors were darkened
(`blue-700` / `blue-800`) to meet WCAG AA contrast.
