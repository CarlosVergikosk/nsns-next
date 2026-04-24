"use client"

import { useState } from "react"
import { Blob } from "@/components/ui/Blob"
import { Photo } from "@/components/ui/Photo"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Icon, type IconName } from "@/components/ui/Icon"
import { useI18n } from "@/lib/i18n/I18nProvider"

const amounts = [25, 50, 100, 250]
const storyTones: ("teal" | "purple" | "warm")[] = ["teal", "purple", "warm"]
const storySrcs = [
  "/assets/donate/peer-mentoring.jpg",
  "/assets/donate/support-group.jpg",
  "/assets/donate/community-hands.jpg",
]
const wayIcons: IconName[] = ["heart", "book", "globe"]

export default function DonatePage() {
  const { t } = useI18n()
  const p = t.donatePage
  const [amount, setAmount] = useState(50)
  const [frequency, setFrequency] = useState<"monthly" | "once">("monthly")

  return (
    <>
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-16">
        <Blob style={{ top: -100, left: -120 }} color="var(--purple-soft)" />
        <Blob style={{ bottom: -140, right: -140 }} color="var(--teal-soft)" />
        <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid items-center gap-10 md:gap-[72px] md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="eyebrow mb-5">{p.hero.eyebrow}</div>
            <h1 className="mb-5">
              {p.hero.titleA}{" "}
              <span className="relative whitespace-nowrap text-purple-deep">
                {p.hero.titleEmphasis}
                <span className="absolute inset-x-0 -bottom-0.5 h-2.5 bg-teal-soft rounded -z-10" />
              </span>
              .
            </h1>
            <p className="text-[1rem] md:text-[1.15rem] text-ink-soft mb-6 md:mb-8 max-w-[560px]">
              {p.hero.lead}
            </p>
          </div>
          <div>
            <Photo
              src="/assets/donate/warm-conversation.jpg"
              label={p.hero.imageAlt}
              ratio="4/5"
              tint="purple"
              rounded="var(--r-xl)"
            />
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-10 md:py-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow={p.storiesSection.eyebrow}
            title={p.storiesSection.title}
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-3">
            {p.stories.map((s, i) => {
              const tone = storyTones[i]
              const src = storySrcs[i]
              const numberInk =
                tone === "purple"
                  ? "var(--purple-deep)"
                  : tone === "teal"
                  ? "var(--teal-deep)"
                  : "var(--ink)"
              const rule = tone === "purple" ? "var(--purple)" : "var(--teal)"
              return (
                <article
                  key={i}
                  className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] overflow-hidden"
                >
                  <Photo
                    src={src}
                    label={s.alt}
                    ratio="4/3"
                    tint={tone}
                    rounded="0"
                  />
                  <div className="p-6 md:p-7">
                    <div
                      className="text-[1.5rem] md:text-[1.8rem] font-black mb-1"
                      style={{ color: numberInk }}
                    >
                      {s.give}
                    </div>
                    <div className="text-[0.92rem] text-ink-muted mb-4">
                      {s.impact}
                    </div>
                    <blockquote
                      className="m-0 text-[0.98rem] text-ink-soft pl-4"
                      style={{ borderLeft: `3px solid ${rule}` }}
                    >
                      &ldquo;{s.quote}&rdquo;
                    </blockquote>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section className="mx-3 md:mx-4 py-14 md:py-24 rounded-[28px] md:rounded-[48px] bg-bg-tint">
        <div className="mx-auto w-full max-w-[820px] px-5 sm:px-6 md:px-8">
          <h2 className="mb-6 md:mb-8 text-center">{p.form.title}</h2>

          <div className="flex bg-bg-raised rounded-pill p-1.5 mb-6 max-w-[360px] mx-auto">
            {(["monthly", "once"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFrequency(f)}
                className={`flex-1 py-3 rounded-pill font-bold text-[0.95rem] capitalize transition ${
                  frequency === f
                    ? "bg-purple-deep text-white"
                    : "text-ink-soft"
                }`}
              >
                {f === "monthly" ? p.form.monthly : p.form.once}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a)}
                className={`py-4 md:py-6 px-3 rounded-[var(--r)] text-[1.2rem] md:text-[1.5rem] font-medium transition ${
                  amount === a
                    ? "bg-purple-deep text-white"
                    : "bg-bg-raised text-ink border border-brand-border"
                }`}
              >
                CHF {a}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            min={1}
            className="w-full py-4 px-5 rounded-[var(--r)] border border-brand-border bg-bg-raised text-[1.3rem] mb-6 text-center"
          />

          <div className="bg-bg-raised rounded-[var(--r)] p-5 mb-6 text-center text-ink-soft text-[0.98rem]">
            {frequency === "monthly" ? (
              <>
                {p.form.monthlyDesc.pre}{" "}
                <strong className="text-purple-deep">CHF {amount} </strong>{" "}
                {p.form.monthlyDesc.middle}{" "}
                <strong>{Math.round(amount / 30)}</strong> {p.form.monthlyDesc.suffix}
              </>
            ) : (
              <>
                {p.form.onceDesc.pre}{" "}
                <strong className="text-purple-deep">CHF {amount}</strong>{" "}
                {p.form.onceDesc.middle}{" "}
                <strong>{Math.round(amount / 25)}</strong> {p.form.onceDesc.suffix}
              </>
            )}
          </div>

          <button
            type="button"
            className="group w-full inline-flex justify-center items-center gap-2 py-[18px] rounded-pill bg-purple-deep text-white font-bold text-[1.05rem] shadow-[0_2px_0_var(--purple-ink)] hover:bg-purple hover:-translate-y-px transition"
          >
            {p.form.continue}
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-[3px]"
            >
              →
            </span>
          </button>
          <p className="text-center text-[0.85rem] text-ink-muted mt-4">
            {p.form.taxNote}
          </p>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-10 md:py-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow={p.otherWaysSection.eyebrow}
            title={p.otherWaysSection.title}
            align="center"
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-3">
            {p.ways.map((x, i) => (
              <div
                key={x.t}
                className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] text-center p-6 md:p-8"
              >
                <div className="w-14 h-14 rounded-[16px] bg-teal-soft text-teal-deep inline-flex items-center justify-center mb-[18px]">
                  <Icon name={wayIcons[i]} size={26} />
                </div>
                <h3 className="mb-2.5">{x.t}</h3>
                <p className="text-ink-muted text-[0.96rem]">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
