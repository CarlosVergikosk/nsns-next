"use client";

import Image from "next/image"
import Link from "next/link"
import { Blob } from "@/components/ui/Blob"
import { useI18n } from "@/lib/i18n/I18nProvider"

export function HeroSection() {
  const { t } = useI18n()
  const h = t.home.hero
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
      <Blob style={{ top: -120, left: -100 }} color="var(--teal-soft)" />
      <Blob style={{ top: 120, right: -160 }} color="var(--purple-soft)" />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid items-center gap-10 md:gap-16 md:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="eyebrow mb-5 md:mb-8">
            {h.eyebrow}
          </div>
          <h1 className="mb-5 md:mb-6">
            {h.titleA}{" "}
            <span className="relative whitespace-nowrap text-purple-deep">
              {h.titleEmphasis}
              <span className="absolute inset-x-0 -bottom-0.5 h-2.5 bg-teal-soft rounded -z-10" />
            </span>{" "}
            {h.titleB}
          </h1>
          <p className="plain-short text-ink-muted text-[1.05rem] md:text-[1.2rem] max-w-[520px] mb-7 md:mb-9">
            {h.lead}
          </p>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-5">
            <Link
              href="/coaches"
              className="group inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-teal text-white font-bold text-[1rem] shadow-[0_2px_0_var(--teal-ink)] hover:bg-teal-deep hover:-translate-y-px transition"
            >
              {h.ctaFindCoach}
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-[3px]"
              >
                →
              </span>
            </Link>
            <Link
              href="/about-neurodiversity"
              className="inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-bg-card text-ink border-2 border-ink font-bold text-[1rem] hover:bg-ink hover:text-white transition"
            >
              {h.ctaLearnMore}
            </Link>
          </div>
          <div className="flex flex-wrap gap-7 mt-10 text-ink-muted text-[0.92rem]">
            <span>{h.inPersonOnline}</span>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-xl"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <Image
              src="/assets/hero.jpg"
              alt={h.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute -bottom-6 -left-4 md:-left-8 bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-4 md:p-5 max-w-[240px] md:max-w-[290px]"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal" />
              <span className="text-[0.88rem] font-bold text-ink-muted">
                {h.currentlyAccepting}
              </span>
            </div>
            <div className="text-[1.4rem] leading-tight">{h.coachRatio}</div>
            <div className="text-[0.88rem] text-ink-muted mt-1">
              {h.takingNew}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
