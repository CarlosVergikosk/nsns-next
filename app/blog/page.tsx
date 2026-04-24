"use client";

import { useMemo, useState } from "react";
import { events, blog } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Chip, ChipButton } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.getDate(),
    month: d.toLocaleString("en", { month: "short" }),
    weekday: d.toLocaleString("en", { weekday: "long" }),
  };
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const tags = useMemo(() => ["All", ...new Set(blog.map((b) => b.tag))], []);
  const filtered = activeTag === "All" ? blog : blog.filter((b) => b.tag === activeTag);

  return (
    <>
      <PageHero
        eyebrow="Events & writing"
        title="Come along, or settle in and read."
        lead="A living record of what we're doing, what we're learning, and when we're gathering in person."
      />

      {/* Events timeline */}
      <section className="pt-4 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <div className="eyebrow mb-3">
                <Icon name="calendar" size={14} /> Upcoming events
              </div>
              <h2>What&apos;s on, spring 2026.</h2>
            </div>
            <Chip>{events.length} upcoming</Chip>
          </div>

          <div className="flex flex-col gap-4">
            {events.map((e, i) => {
              const d = formatDate(e.date);
              const dateBg = i % 2 ? "var(--teal-soft)" : "var(--purple-soft)";
              const dateInk = i % 2 ? "var(--teal-deep)" : "var(--purple-deep)";
              return (
                <article
                  key={i}
                  className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] overflow-hidden grid items-stretch grid-cols-1 md:grid-cols-[auto_1fr_auto]"
                >
                  <div
                    className="flex md:flex-col items-center justify-center md:justify-center gap-3 md:gap-0 py-4 md:py-6 px-6 md:px-8 md:min-w-[120px]"
                    style={{ background: dateBg, color: dateInk }}
                  >
                    <div className="text-[0.9rem] font-extrabold">{d.month}</div>
                    <div className="text-[2rem] md:text-[3rem] leading-none font-black">{d.day}</div>
                    <div className="text-[0.78rem] opacity-70 md:mt-1">{d.weekday}</div>
                  </div>

                  <div className="py-6 md:py-7 px-6 md:px-8">
                    <div className="flex gap-2 mb-2.5 flex-wrap">
                      <Chip tone="warm" className="!text-[0.72rem]">{e.tag}</Chip>
                      <Chip className="!text-[0.72rem]">{e.format}</Chip>
                    </div>
                    <h3 className="mb-2">{e.title}</h3>
                    <p className="text-ink-muted plain-hide text-[0.94rem] md:text-[0.98rem] mb-3.5">{e.description}</p>
                    <div className="flex gap-4 text-[0.84rem] md:text-[0.86rem] text-ink-muted flex-wrap">
                      <span className="inline-flex gap-1.5 items-center"><Icon name="clock" size={14} /> {e.time}</span>
                      <span className="inline-flex gap-1.5 items-center"><Icon name="pin" size={14} /> {e.location}</span>
                      <span className="inline-flex gap-1.5 items-center"><Icon name="user" size={14} /> {e.capacity}</span>
                    </div>
                  </div>

                  <div className="py-5 md:py-7 px-6 md:px-8 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-3 md:gap-2.5 border-t md:border-t-0 md:border-l border-brand-border bg-bg-raised">
                    <div className="text-[1.1rem] md:text-[1.15rem] font-black">{e.price}</div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-pill bg-teal text-white font-bold text-[0.92rem] hover:bg-teal-deep transition"
                    >
                      Reserve
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="mx-3 md:mx-4 py-14 md:py-24 rounded-[28px] md:rounded-[48px] bg-bg-tint">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <div className="eyebrow mb-3">From the blog</div>
              <h2>Reading from the network.</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tags.map((t) => (
                <ChipButton
                  key={t}
                  active={activeTag === t}
                  onClick={() => setActiveTag(t)}
                >
                  {t}
                </ChipButton>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.slug}
                className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:border-purple-deep transition"
              >
                <Photo
                  label={`Editorial photo — ${p.tag.toLowerCase()}`}
                  ratio="16/10"
                  tint={p.imageTone}
                  rounded="0"
                  src={p.image}
                />
                <div className="p-6 md:p-7">
                  <div className="flex gap-3 items-center mb-3.5 text-[0.82rem] text-ink-muted">
                    <Chip
                      tone={
                        p.imageTone === "purple"
                          ? "purple"
                          : p.imageTone === "teal"
                          ? "teal"
                          : "warm"
                      }
                      className="!text-[0.7rem]"
                    >
                      {p.tag}
                    </Chip>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-[1.3rem]">{p.title}</h3>
                  <p className="text-ink-muted plain-hide text-[0.96rem] mb-5">{p.excerpt}</p>
                  <div className="flex justify-between items-center text-[0.85rem]">
                    <span className="text-ink-soft font-semibold">{p.author}</span>
                    <span className="text-ink-muted">
                      {new Date(p.date).toLocaleDateString("en", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
