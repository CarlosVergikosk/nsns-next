"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function NotFound() {
  const { t } = useI18n();
  const nf = t.notFound;
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-[820px] px-5 sm:px-6 md:px-8 text-center">
        <div className="eyebrow justify-center mb-4">{nf.eyebrow}</div>
        <h1 className="mb-4">{nf.title}</h1>
        <p className="text-ink-muted text-[1.1rem] mb-8">
          {nf.lead}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-teal text-white font-bold text-[1rem] shadow-[0_2px_0_var(--teal-ink)] hover:bg-teal-deep transition"
        >
          {t.common.backToHome}
        </Link>
      </div>
    </section>
  );
}
