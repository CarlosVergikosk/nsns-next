"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { Modal } from "@/components/ui/Modal";
import { LinkButton } from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n/I18nProvider";

type Filter = "all" | "free" | "paid";

const cardTints: ("teal" | "purple")[] = ["teal", "purple", "teal", "purple", "teal", "purple"];

function thumbUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export default function WebinarsPage() {
  const { t } = useI18n();
  const w = t.webinarsPage;
  const webinars = t.data.webinars;

  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "free") return webinars.filter((v) => v.isFree);
    if (filter === "paid") return webinars.filter((v) => !v.isFree);
    return webinars;
  }, [filter, webinars]);

  const active = openIndex !== null ? filtered[openIndex] : null;

  return (
    <>
      <PageHero
        eyebrow={w.hero.eyebrow}
        title={w.hero.title}
        lead={w.hero.lead}
        tint="teal"
      />

      <section className="py-10 md:py-16">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-10">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={w.hero.eyebrow}>
              {(["all", "free", "paid"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => {
                    setFilter(f);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-pill text-[0.9rem] font-bold border transition ${
                    filter === f
                      ? "bg-ink text-white border-ink"
                      : "bg-bg-card text-ink border-brand-border hover:border-brand-border-strong"
                  }`}
                >
                  {w.filters[f]}
                </button>
              ))}
            </div>
            <div className="text-[0.92rem] text-ink-muted">
              {w.showingPrefix} <strong className="text-ink">{filtered.length}</strong> {w.showingMiddle} {webinars.length} {w.showingSuffix}
            </div>
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-10 text-center">
              <h3 className="mb-2 text-[1.2rem]">{w.empty.title}</h3>
              <p className="text-ink-muted">{w.empty.retry}</p>
            </div>
          ) : (
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((video, i) => {
                const tone = cardTints[i % cardTints.length];
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className="group text-left flex flex-col bg-bg-card border border-brand-border rounded-[var(--r-lg)] overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)] hover:border-[color:var(--brand-border-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--purple)] focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <div className="relative aspect-video bg-bg-muted overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumbUrl(video.id)}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center transition duration-200 opacity-90 group-hover:opacity-100"
                        style={{
                          background: video.isFree
                            ? "linear-gradient(180deg, rgba(20,18,26,0.05) 0%, rgba(20,18,26,0.45) 100%)"
                            : "linear-gradient(180deg, rgba(73,41,81,0.35) 0%, rgba(73,41,81,0.7) 100%)",
                        }}
                      >
                        <div
                          className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-white/95 inline-flex items-center justify-center transition duration-200 group-hover:scale-110"
                          style={{ boxShadow: "0 8px 24px rgba(20,18,26,0.25)" }}
                        >
                          {video.isFree ? (
                            <span className="ml-1 text-ink" aria-hidden>
                              <PlayGlyph />
                            </span>
                          ) : (
                            <span className="text-purple-deep" aria-hidden>
                              <Icon name="lock" size={26} />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-pill text-[0.72rem] font-extrabold uppercase tracking-wide"
                          style={{
                            background: video.isFree ? "var(--teal)" : "var(--purple-deep)",
                            color: "#fff",
                          }}
                        >
                          {video.isFree ? w.freeBadge : `${w.paidBadge} · ${video.price}`}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] text-[0.78rem] font-bold text-white"
                          style={{ background: "rgba(20,18,26,0.72)" }}
                        >
                          <Icon name="clock" size={12} />
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-5 md:p-6">
                      <Chip tone={tone} className="self-start !text-[0.7rem] mb-3">
                        {video.category}
                      </Chip>
                      <h3 className="mb-2 text-[1.08rem] md:text-[1.18rem] leading-[1.3]" style={{ textWrap: "balance" }}>
                        {video.title}
                      </h3>
                      <p className="text-ink-muted text-[0.94rem] leading-[1.5] mb-4 line-clamp-3">
                        {video.description}
                      </p>
                      <div className="mt-auto pt-3 border-t border-brand-border flex items-center justify-between">
                        <span className="text-[0.85rem] text-ink-muted">{video.speaker}</span>
                        <span
                          className="inline-flex items-center gap-1.5 text-[0.9rem] font-bold"
                          style={{ color: video.isFree ? (tone === "purple" ? "var(--purple-deep)" : "var(--teal-deep)") : "var(--purple-deep)" }}
                        >
                          {video.isFree ? (
                            <>{w.watchLabel}</>
                          ) : (
                            <>
                              <Icon name="lock" size={14} />
                              {w.unlockLabel}
                            </>
                          )}
                          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16">
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-6 md:px-8">
          <div
            className="rounded-[var(--r-xl)] p-8 md:p-12 text-center"
            style={{ background: "var(--purple-soft)", color: "var(--purple-ink)" }}
          >
            <SectionHeader eyebrow={w.cta.title} title={w.cta.body} align="center" />
            <div className="mt-2 flex justify-center">
              <LinkButton href="/contact" variant="secondary" arrow>
                {w.cta.button}
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={active !== null}
        onClose={() => setOpenIndex(null)}
        labelledBy="webinar-modal-title"
        closeLabel={w.closeLabel}
      >
        {active && active.isFree && (
          <div>
            <div className="relative aspect-video bg-black">
              <iframe
                key={active.id}
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1${active.startAt ? `&start=${active.startAt}` : ""}`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-pill text-[0.72rem] font-extrabold uppercase tracking-wide"
                  style={{ background: "var(--teal)", color: "#fff" }}
                >
                  {w.freeBadge}
                </span>
                <Chip tone="purple" className="!text-[0.7rem]">
                  {active.category}
                </Chip>
              </div>
              <h2 id="webinar-modal-title" className="text-[1.4rem] md:text-[1.7rem] font-black leading-tight mb-3">
                {active.title}
              </h2>
              <p className="text-ink-muted text-[0.98rem] md:text-[1.02rem] leading-[1.55] mb-5">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem] text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="user" size={14} />
                  <strong className="text-ink-soft font-bold">{w.speakerLabel}:</strong> {active.speaker}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="clock" size={14} />
                  <strong className="text-ink-soft font-bold">{w.durationLabel}:</strong> {active.duration}
                </span>
              </div>
            </div>
          </div>
        )}

        {active && !active.isFree && (
          <div>
            <div
              className="relative aspect-video overflow-hidden flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-ink) 100%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbUrl(active.id)}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm scale-110"
              />
              <div className="relative flex flex-col items-center text-white text-center px-6">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-sm inline-flex items-center justify-center mb-4 ring-4 ring-white/10"
                >
                  <Icon name="lock" size={36} />
                </div>
                <div className="text-[0.78rem] uppercase tracking-[0.18em] font-extrabold opacity-85 mb-2">
                  {w.lock.eyebrow}
                </div>
                <div className="text-[1.6rem] md:text-[2.2rem] font-black leading-none">
                  {active.price}
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-pill text-[0.72rem] font-extrabold uppercase tracking-wide"
                  style={{ background: "var(--purple-deep)", color: "#fff" }}
                >
                  {`${w.paidBadge} · ${active.price}`}
                </span>
                <Chip tone="purple" className="!text-[0.7rem]">
                  {active.category}
                </Chip>
              </div>
              <h2
                id="webinar-modal-title"
                className="text-[1.4rem] md:text-[1.7rem] font-black leading-tight mb-3"
              >
                {w.lock.title}
              </h2>
              <p className="text-[1rem] md:text-[1.05rem] font-bold text-ink mb-2">
                {active.title}
              </p>
              <p className="text-ink-muted text-[0.96rem] md:text-[1rem] leading-[1.55] mb-5">
                {w.lock.body.replace("{amount}", active.price)}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem] text-ink-muted mb-6">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="user" size={14} />
                  <strong className="text-ink-soft font-bold">{w.speakerLabel}:</strong>{" "}
                  {active.speaker}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="clock" size={14} />
                  <strong className="text-ink-soft font-bold">{w.durationLabel}:</strong>{" "}
                  {active.duration}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <LinkButton
                  href={`/donate?amount=${encodeURIComponent(active.price)}&webinar=${active.id}`}
                  variant="secondary"
                  arrow
                >
                  <Icon name="lock" size={16} />
                  {w.lock.donateButton.replace("{amount}", active.price)}
                </LinkButton>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="px-5 py-3 rounded-pill text-[0.95rem] font-bold text-ink-soft hover:bg-bg-tint transition"
                >
                  {w.lock.maybeLater}
                </button>
              </div>
              <p className="mt-4 text-[0.85rem] text-ink-faint">{w.lock.note}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

function PlayGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
