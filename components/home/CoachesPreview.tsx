"use client";

import Link from "next/link"
import { Photo } from "@/components/ui/Photo"
import { Chip } from "@/components/ui/Chip"
import { useI18n } from "@/lib/i18n/I18nProvider"

export function CoachesPreview() {
  const { t } = useI18n()
  const c = t.home.coachesPreview
  const preview = t.data.counselors.slice(0, 4)
  return (
    <section className="py-14 md:py-24 bg-bg-tint rounded-[28px] md:rounded-[48px] mx-3 md:mx-4">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-8 md:mb-10">
          <div>
            <div className="eyebrow mb-4">{c.eyebrow}</div>
            <h2 className="max-w-[540px]">
              {c.title}
            </h2>
          </div>
          <Link
            href="/coaches"
            className="group inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-bg-card text-ink border-2 border-ink font-bold text-[1rem] hover:bg-ink hover:text-white transition"
          >
            {c.browseAll}
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-[3px]"
            >
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((coach) => (
            <Link
              key={coach.id}
              href={`/coaches/${coach.id}`}
              className="bg-bg-card border border-transparent rounded-[var(--r-lg)] p-5 transition hover:border-purple-300"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <Photo
                label={coach.name}
                ratio="1/1"
                tint={coach.avatarTint}
                rounded="var(--r)"
                src={coach.photo}
              />
              <div className="mt-4">
                <h4 className="mb-1">{coach.name}</h4>
                <div className="text-[0.88rem] text-ink-muted mb-2.5">
                  {coach.title}
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {coach.specialties.slice(0, 2).map((s) => (
                    <Chip
                      key={s}
                      tone={coach.avatarTint === "purple" ? "purple" : "teal"}
                      className="!text-[0.72rem]"
                    >
                      {s}
                    </Chip>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
