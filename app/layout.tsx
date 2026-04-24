import type { Metadata } from "next";
import { bodyFont, displayFont } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { TweaksPanel } from "@/components/tweaks/TweaksPanel";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { dictionaries } from "@/lib/i18n/translations";
import { defaultLocale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: dictionaries[defaultLocale].meta.title,
  description: dictionaries[defaultLocale].meta.description,
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <I18nProvider>
          <SkipLink />
          <Nav />
          <main id="main" className="page-enter">
            {children}
          </main>
          <Footer />
          <TweaksPanel />
        </I18nProvider>
      </body>
    </html>
  );
}
