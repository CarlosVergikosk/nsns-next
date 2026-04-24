import Link from "next/link"
import { counselors } from "@/lib/data"
import { Photo } from "@/components/ui/Photo"
import { Chip } from "@/components/ui/Chip"

export function CoachesPreview() {
  const preview = counselors.slice(0, 4)
  return (
    <section className="py-14 md:py-24 bg-bg-tint rounded-[28px] md:rounded-[48px] mx-3 md:mx-4">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-8 md:mb-10">
          <div>
            <div className="eyebrow mb-4">Meet the coaches</div>
            <h2 className="max-w-[540px]">
              Twelve accredited practitioners. Find the one that fits.
            </h2>
          </div>
          <Link
            href="/coaches"
            className="group inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-bg-card text-ink border-2 border-ink font-bold text-[1rem] hover:bg-ink hover:text-white transition"
          >
            Browse the full directory
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-[3px]"
            >
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((c) => (
            <Link
              key={c.id}
              href={`/coaches/${c.id}`}
              className="bg-bg-card border border-transparent rounded-[var(--r-lg)] p-5 transition hover:border-purple-300"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <Photo
                label={c.name}
                ratio="1/1"
                tint={c.avatarTint}
                rounded="var(--r)"
                src={c.photo}
              />
              <div className="mt-4">
                <h4 className="mb-1">{c.name}</h4>
                <div className="text-[0.88rem] text-ink-muted mb-2.5">
                  {c.title}
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {c.specialties.slice(0, 2).map((s) => (
                    <Chip
                      key={s}
                      tone={c.avatarTint === "purple" ? "purple" : "teal"}
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
