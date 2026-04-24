import type { Metadata } from "next";
import { bodyFont, displayFont } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { TweaksPanel } from "@/components/tweaks/TweaksPanel";

export const metadata: Metadata = {
  title: "NSNS — Neurodiversity Support Network Switzerland",
  description:
    "We support and empower Neurodivergent people in Switzerland — through coaching, peer mentoring, assessment and community.",
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <SkipLink />
        <Nav />
        <main id="main" className="page-enter">
          {children}
        </main>
        <Footer />
        <TweaksPanel />
      </body>
    </html>
  );
}
