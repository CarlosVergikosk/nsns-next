// NSNS brand fonts:
//   Headings — Zen Maru Gothic (Google Fonts; brand fallback for Proxima Soft,
//              whose closest freely-licensed substitute is a rounded sans).
//   Body     — Inclusive Sans (Google Fonts; dyslexia-friendly).
// Exposed to CSS as --font-sans (body) and --font-display (headings).

import { Inclusive_Sans, Zen_Maru_Gothic } from "next/font/google";

export const bodyFont = Inclusive_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
  display: "swap",
});

export const displayFont = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

// Back-compat alias — existing imports use `appFont`.
export const appFont = bodyFont;
