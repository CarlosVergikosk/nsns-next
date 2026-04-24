"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { useI18n } from "@/lib/i18n/I18nProvider";

const profileColours: ("teal" | "purple")[] = ["teal", "purple", "teal", "purple"];

const postitBg = ["var(--lemon)", "var(--peach)", "var(--purple-soft)"];
const postitInk = ["var(--ink)", "var(--ink)", "var(--purple-ink)"];
const postitRotate = ["-2.2deg", "1.6deg", "-1deg", "2.4deg", "-1.6deg", "1.1deg"];

export default function AboutNdPage() {
  const { t } = useI18n();
  const a = t.aboutNd;
  const adviceNums = ["01", "02", "03", "04", "05"];
  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        lead={a.hero.lead}
        tint="purple"
      />

      {/* Core idea */}
      <section className="pt-4 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_1.4fr] md:items-start">
          <Photo
            label={a.photoLabel}
            ratio="4/5"
            tint="purple"
            rounded="var(--r-lg)"
            src="/assets/wired-differently.jpg"
          />
          <div>
            <div className="text-[clamp(1.3rem,4.5vw,2.2rem)] leading-[1.3] text-ink mb-6 md:mb-8 font-black" style={{ textWrap: "balance" }}>
              {a.heading}
            </div>
            <p className="text-[1rem] md:text-[1.08rem] mb-5">
              {a.para1}
            </p>
            <p className="text-[1rem] md:text-[1.08rem] plain-hide">
              {a.para2}
            </p>
          </div>
        </div>
      </section>

      {/* What it looks like */}
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow={a.formsSection.eyebrow}
            title={a.formsSection.title}
            lead={a.formsSection.lead}
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {a.profiles.map((p, i) => {
              const colour = profileColours[i];
              return (
                <div
                  key={p.name}
                  className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-6 md:p-8"
                >
                  <div className="flex gap-3 items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-[14px] inline-flex items-center justify-center"
                      style={{
                        background: colour === "purple" ? "var(--purple-soft)" : "var(--teal-soft)",
                        color: colour === "purple" ? "var(--purple-deep)" : "var(--teal-deep)",
                      }}
                    >
                      <Icon name="puzzle" size={22} />
                    </div>
                    <h3>{p.name}</h3>
                  </div>
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {p.tags.map((tag) => (
                      <Chip
                        key={tag}
                        tone={colour === "purple" ? "purple" : "teal"}
                        className="!text-[0.72rem]"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <p className="text-ink-muted mb-[18px]">{p.body}</p>
                  <div className="plain-hide">
                    <div className="text-[0.9rem] font-bold text-ink-muted mb-2.5">
                      {a.formsSection.strengthsLabel}
                    </div>
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                      {p.strengths.map((s) => (
                        <li key={s} className="flex gap-2.5 items-center text-[0.94rem]">
                          <span style={{ color: colour === "purple" ? "var(--purple)" : "var(--teal)" }}>
                            <Icon name="star" size={16} />
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Positive messages wall */}
      <section
        className="mx-3 md:mx-4 py-14 md:py-24 rounded-[28px] md:rounded-[48px]"
        style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-tint) 100%)" }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow={a.positiveSection.eyebrow}
            title={a.positiveSection.title}
            lead={a.positiveSection.lead}
            align="center"
          />
          <div
            className="grid gap-6 md:gap-8 py-6 md:py-10"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {t.data.positiveMessages.map((m, i) => (
              <div
                key={i}
                className="relative p-6 md:p-8 text-[1.05rem] md:text-[1.25rem] leading-[1.4] font-medium flex items-center justify-center text-center transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1"
                style={{
                  background: postitBg[i % 3],
                  color: postitInk[i % 3],
                  textWrap: "balance",
                  aspectRatio: "1 / 1",
                  transform: `rotate(${postitRotate[i % postitRotate.length]})`,
                  boxShadow:
                    "0 1px 1px rgba(20, 18, 26, 0.08), 0 8px 18px -6px rgba(20, 18, 26, 0.18), 0 20px 40px -20px rgba(20, 18, 26, 0.22)",
                  borderRadius: "2px",
                }}
              >
                <span
                  aria-hidden
                  className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 rounded-[2px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.55)",
                    border: "1px solid rgba(20, 18, 26, 0.05)",
                    boxShadow: "0 1px 2px rgba(20, 18, 26, 0.08)",
                  }}
                />
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advice strips */}
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader eyebrow={a.adviceSection.eyebrow} title={a.adviceSection.title} />
          <div className="flex flex-col gap-4">
            {a.advice.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 md:gap-8 py-5 md:py-6 border-b border-brand-border"
              >
                <div className="text-[1.6rem] md:text-[2rem] text-purple leading-none font-black">{adviceNums[i]}</div>
                <div>
                  <h3 className="mb-2 text-[1.15rem] md:text-[1.35rem]">{item.t}</h3>
                  <p className="text-ink-muted text-[0.96rem] md:text-[1.02rem] max-w-[760px]">{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
