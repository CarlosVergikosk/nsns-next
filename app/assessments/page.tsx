"use client"

import Link from "next/link"
import { useState } from "react"
import { assessments, assessmentFaqs } from "@/lib/data"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Icon } from "@/components/ui/Icon"

const tintBg: Record<string, string> = {
  teal: "var(--teal-soft)",
  purple: "var(--purple-soft)",
  warm: "color-mix(in oklab, var(--accent-warm) 40%, var(--bg-raised))",
}
const tintInk: Record<string, string> = {
  teal: "var(--teal-deep)",
  purple: "var(--purple-deep)",
  warm: "var(--ink)",
}

export default function AssessmentsPage() {
  const [openFaq, setOpenFaq] = useState<number>(0)

  return (
    <>
      <PageHero
        eyebrow="Assessments"
        title="A thorough, adult-centred path to knowing yourself."
        lead="Diagnosis in adulthood is a door, not a verdict. Our assessments are designed to be careful, paced, and respectful — by clinicians who understand late diagnosis from the inside."
        tint="purple"
      />

      {/* What to expect */}
      <section className="pt-4 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <div
            className="rounded-[var(--r-xl)] p-6 md:p-12"
            style={{
              background: "rgba(127, 0, 127, 0.1)",
            }}
          >
            <div className="eyebrow mb-4 md:mb-5">How it works</div>
            <h2 className="mb-7 md:mb-10 max-w-[640px]">
              Four steps. No rush.
            </h2>
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Free 20-minute call",
                  d: "We start by understanding why you're considering assessment, and whether it's the right moment. No obligation.",
                },
                {
                  n: "02",
                  t: "Intake & inventories",
                  d: "A 90-minute interview plus self-report inventories you complete at home, at your own pace.",
                },
                {
                  n: "03",
                  t: "Structured assessment",
                  d: "DIVA-5, ADOS-2, ADI-R or the relevant combination — delivered across 2–4 sessions, with breaks you control.",
                },
                {
                  n: "04",
                  t: "Feedback & report",
                  d: "A written report and at least one hour of conversation about what it means. A second feedback session if you need it.",
                },
              ].map((s) => (
                <div key={s.n}>
                  <div className="text-3xl text-purple leading-none mb-2.5 font-black">
                    {s.n}
                  </div>
                  <h4 className="mb-2">{s.t}</h4>
                  <p className="text-ink-muted text-[0.95rem]">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Pathways"
            title="Three assessment options."
            lead="All pathways include a feedback session and written report. Sliding-scale places are available on every pathway — please ask."
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-3 items-stretch">
            {assessments.map((a) => (
              <article
                key={a.id}
                className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] overflow-hidden flex flex-col"
              >
                <div
                  className="px-6 md:px-8 py-6 md:py-7"
                  style={{
                    background: tintBg[a.colour],
                    color: tintInk[a.colour],
                  }}
                >
                  <h3 className="mb-2" style={{ color: tintInk[a.colour] }}>
                    {a.name}
                  </h3>
                  <div className="text-SM font-medium">
                    {a.duration} · {a.price}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="mb-5 text-ink-soft text-[0.98rem]">
                    {a.overview}
                  </p>
                  <div className="text-[0.9rem] font-bold text-ink-muted mb-3">
                    Includes
                  </div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
                    {a.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 items-start text-[0.94rem]"
                      >
                        <span className="text-teal mt-0.5 shrink-0">
                          <Icon name="check" size={16} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center gap-2 px-[26px] py-[14px] rounded-pill bg-bg-card text-ink border-2 border-ink font-bold text-[1rem] hover:bg-ink hover:text-white transition"
                  >
                    Enquire about {a.name.split(" ")[0]}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section className="mx-3 md:mx-4 py-10 md:py-16 bg-bg-tint">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid items-center gap-8 md:gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow mb-4">On pricing</div>
            <h2 className="mb-4">Why private assessments cost what they do.</h2>
            <p className="text-ink-muted text-[1rem] md:text-[1.05rem]">
              A thorough adult assessment is 12 to 20 hours of clinical time
              plus report writing. We are transparent about that — and we make
              room for sliding-scale places on every pathway.
            </p>
          </div>
          <div className="grid gap-3 md:gap-4 grid-cols-2">
            {[
              { n: "12–20h", l: "Clinical time per assessment" },
              { n: "2–4", l: "Sessions across several weeks" },
              { n: "Sliding", l: "Scale places on every pathway" },
              { n: "Insurance", l: "Partial coverage often possible" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-4 md:p-6 bg-bg-raised rounded-[var(--r)]"
              >
                <div className="text-[1.4rem] md:text-[1.8rem] text-purple-deep mb-1 font-black">
                  {s.n}
                </div>
                <div className="text-[0.88rem] md:text-[0.92rem] text-ink-muted">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-[820px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Common questions"
            title="What people ask us most."
            align="center"
          />
          <div className="flex flex-col gap-2">
            {assessmentFaqs.map((f, i) => (
              <div
                key={i}
                className="bg-bg-card border border-brand-border rounded-[var(--r)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full py-4 md:py-5 px-5 md:px-6 flex justify-between items-center gap-4 text-left"
                >
                  <span className="text-[1rem] md:text-[1.15rem] font-medium">
                    {f.q}
                  </span>
                  <span
                    className="text-[1.4rem] text-ink-muted transition-transform shrink-0"
                    style={{
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-ink-soft text-[0.95rem] md:text-[1rem] leading-[1.65]">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
