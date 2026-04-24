# NSNS — Neurodiversity Support Network Switzerland

Next.js 16 + React 19 + Tailwind CSS 4 port of the NSNS design prototype.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Switching the font

All Google Fonts can be swapped in a single file: [`app/fonts.ts`](./app/fonts.ts).

```ts
// app/fonts.ts
import { Inter } from "next/font/google";     // ← change this import
export const appFont = Inter({                 // ← and this call
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});
```

Any font exported by `next/font/google` works — for example `Manrope`, `Plus_Jakarta_Sans`, `Nunito`, `DM_Sans`, `Sora`, `Outfit`. If the new font doesn't ship all six weights (400–900), trim the `weight` array to the ones it supports. Restart `npm run dev` — the entire site picks up the new font via the `--font-sans` CSS variable.

## Switching the colour theme

Five palettes ship out of the box (Soft Sand, Lavender, Seafoam, Cocoa Warm, Nordic Mist). Users can switch live in the Tweaks panel (cog icon, bottom-right). Preferences persist in `localStorage`.

To add a new palette, edit [`app/globals.css`](./app/globals.css) — add a `[data-theme="yourname"]` block with your variable overrides, then add the option to [`components/tweaks/TweaksPanel.tsx`](./components/tweaks/TweaksPanel.tsx).

## Project layout

```
app/
├── layout.tsx              Font + Nav + Footer + TweaksPanel
├── page.tsx                Home
├── fonts.ts                ← SWAP FONT HERE
├── globals.css             CSS variables + theme palettes + Tailwind v4 bridge
├── not-found.tsx
├── coaches/                Directory + [id] detail
├── assessments/
├── blog/
├── about-neurodiversity/
├── donate/
└── contact/
components/
├── layout/                 Nav, Footer, SkipLink
├── ui/                     Icon, Photo, Avatar, Blob, Squiggle, PageHero, Button, Chip
├── home/                   HeroSection, HikingTrail, WhatWeDo, StatsSection…
└── tweaks/                 TweaksPanel (theme/motion/text-size), useTweaks hook
lib/
├── data.ts                 Typed content
└── types.ts
public/
└── assets/
    ├── hero.jpg
    └── logo.png
```

## Accessibility

- Skip-link to `#main` content
- `:focus-visible` rings on every interactive element
- **Reduced motion** mode (Tweaks panel) — kills all transitions/animations
- **Plain-language** mode (Tweaks panel) — hides `.plain-hide` paragraphs
- **Text-size** scale (Tweaks panel) — 90–130 %
- Every form input has a label; labels persist after `sent` state reset
```
