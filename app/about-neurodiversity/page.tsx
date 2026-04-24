import { positiveMessages } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

interface NdProfile {
  name: string;
  colour: "teal" | "purple";
  tags: string[];
  body: string;
  strengths: string[];
}

const profiles: NdProfile[] = [
  { name: "ADHD", colour: "teal", tags: ["Attention", "Executive Function", "Hyperfocus"], body: "A difference in how attention, motivation, and executive function work — often involving time blindness, a hunger for novelty, and the capacity for deep hyperfocus on the right thing.", strengths: ["Creative leaps", "Crisis response", "High-interest deep work"] },
  { name: "Autism", colour: "purple", tags: ["Sensory", "Pattern", "Directness"], body: "A difference in how sensory input is processed and how social communication works. Often associated with pattern recognition, deep expertise, and a strong sense of fairness.", strengths: ["Pattern recognition", "Subject-matter depth", "Honesty & integrity"] },
  { name: "Dyslexia", colour: "teal", tags: ["Reading", "Visual-Spatial"], body: "A difference in how written language is processed. Often comes with strong visual-spatial thinking and narrative reasoning.", strengths: ["Big-picture thinking", "Storytelling", "3D reasoning"] },
  { name: "AuDHD & co-occurrence", colour: "purple", tags: ["Combined", "Common"], body: "Many neurodivergent people are more than one thing. The combination often looks different from either part alone — and benefits from being looked at as a whole.", strengths: ["Unique perspective", "Cross-domain creativity"] },
];

const advice = [
  { n: "01", t: "Go slowly after a diagnosis.", b: "There is no rush to 'apply' your diagnosis to your life. The first weeks and months are for absorption, not action." },
  { n: "02", t: "Trust your sensory system.", b: "If a noise, light, or fabric is distressing, it is distressing. Your nervous system is not exaggerating — it is telling you something accurate about what it needs." },
  { n: "03", t: "Find one other person who gets it.", b: "The single biggest predictor of coping well with a new diagnosis is having one person in your life who does not need an explanation. Online counts." },
  { n: "04", t: "Build scaffolding, not willpower.", b: "The systems and environments around you do most of the work. Lean into alarms, lists, body-doubling, sensory tools. None of it is cheating." },
  { n: "05", t: "Rest is not a reward.", b: "Rest is the work. Schedule it. Protect it. Refuse to feel guilty about it." },
];

// Post-it palette drawn from brand accents: Lifey Lemon, Just Peachy, Loveable Lilac.
const postitBg = ["var(--lemon)", "var(--peach)", "var(--purple-soft)"];
const postitInk = ["var(--ink)", "var(--ink)", "var(--purple-ink)"];
// Subtle varied rotation per card, evoking notes hand-stuck on a wall.
const postitRotate = ["-2.2deg", "1.6deg", "-1deg", "2.4deg", "-1.6deg", "1.1deg"];

export default function AboutNdPage() {
  return (
    <>
      <PageHero
        eyebrow="For anyone newly curious"
        title="Neurodiversity, in plain words."
        lead="Neurodiversity is the idea that human brains vary — and that variation is part of how we thrive as a species, not a flaw to be corrected."
        tint="purple"
      />

      {/* Core idea */}
      <section className="pt-4 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_1.4fr] md:items-start">
          <Photo
            label="Colourful wooden counters clustered on a purple background"
            ratio="4/5"
            tint="purple"
            rounded="var(--r-lg)"
            src="/assets/wired-differently.jpg"
          />
          <div>
            <div className="text-[clamp(1.3rem,4.5vw,2.2rem)] leading-[1.3] text-ink mb-6 md:mb-8 font-black" style={{ textWrap: "balance" }}>
              We are all wired differently. Some of us are wired differently enough that the world doesn&apos;t quite fit — and when that happens, we deserve support, not correction.
            </div>
            <p className="text-[1rem] md:text-[1.08rem] mb-5">
              The word &ldquo;neurodivergent&rdquo; is used for people whose brains work in ways that differ from the neurotypical majority. This includes, among others, people who are autistic, have ADHD, are dyslexic, dyspraxic, dyscalculic, or have Tourette&apos;s.
            </p>
            <p className="text-[1rem] md:text-[1.08rem] plain-hide">
              These are not deficits in search of a cure. They are ways of processing the world — ways that come with real strengths, real challenges, and a real right to accommodation. The &ldquo;problems&rdquo; neurodivergent people face are most often a mismatch between how we work and how the world is currently built. Change the world a little, and a lot of the problems get smaller.
            </p>
          </div>
        </div>
      </section>

      {/* What it looks like */}
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <SectionHeader
            eyebrow="Forms it takes"
            title="Some common patterns."
            lead="Every neurodivergent person is unique. But here's a rough sketch of some of the most common experiences we work with."
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {profiles.map((p) => (
              <div
                key={p.name}
                className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-6 md:p-8"
              >
                <div className="flex gap-3 items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-[14px] inline-flex items-center justify-center"
                    style={{
                      background: p.colour === "purple" ? "var(--purple-soft)" : "var(--teal-soft)",
                      color: p.colour === "purple" ? "var(--purple-deep)" : "var(--teal-deep)",
                    }}
                  >
                    <Icon name="puzzle" size={22} />
                  </div>
                  <h3>{p.name}</h3>
                </div>
                <div className="flex gap-1.5 flex-wrap mb-4">
                  {p.tags.map((t) => (
                    <Chip
                      key={t}
                      tone={p.colour === "purple" ? "purple" : "teal"}
                      className="!text-[0.72rem]"
                    >
                      {t}
                    </Chip>
                  ))}
                </div>
                <p className="text-ink-muted mb-[18px]">{p.body}</p>
                <div className="plain-hide">
                  <div className="text-[0.9rem] font-bold text-ink-muted mb-2.5">
                    Associated strengths
                  </div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2">
                    {p.strengths.map((s) => (
                      <li key={s} className="flex gap-2.5 items-center text-[0.94rem]">
                        <span style={{ color: p.colour === "purple" ? "var(--purple)" : "var(--teal)" }}>
                          <Icon name="star" size={16} />
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            eyebrow="Things worth hearing often"
            title="Notes for the hard days."
            lead="Save these. Come back to them."
            align="center"
          />
          <div
            className="grid gap-6 md:gap-8 py-6 md:py-10"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {positiveMessages.map((m, i) => (
              <div
                key={i}
                className="relative p-6 md:p-8 text-[1.05rem] md:text-[1.25rem] leading-[1.4] font-medium flex items-center justify-center text-center transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1"
                style={{
                  background: postitBg[i % 3],
                  color: postitInk[i % 3],
                  textWrap: "balance",
                  aspectRatio: "1 / 1",
                  transform: `rotate(${postitRotate[i % postitRotate.length]})`,
                  // Layered shadow: a close paper-edge shadow plus a soft
                  // drop-shadow to suggest the note is stuck, not embedded.
                  boxShadow:
                    "0 1px 1px rgba(20, 18, 26, 0.08), 0 8px 18px -6px rgba(20, 18, 26, 0.18), 0 20px 40px -20px rgba(20, 18, 26, 0.22)",
                  borderRadius: "2px",
                }}
              >
                {/* Tape strip at the top centre */}
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
          <SectionHeader eyebrow="Advice we keep giving" title="Five things that tend to help." />
          <div className="flex flex-col gap-4">
            {advice.map((a) => (
              <div
                key={a.n}
                className="grid grid-cols-[auto_1fr] gap-4 md:gap-8 py-5 md:py-6 border-b border-brand-border"
              >
                <div className="text-[1.6rem] md:text-[2rem] text-purple leading-none font-black">{a.n}</div>
                <div>
                  <h3 className="mb-2 text-[1.15rem] md:text-[1.35rem]">{a.t}</h3>
                  <p className="text-ink-muted text-[0.96rem] md:text-[1.02rem] max-w-[760px]">{a.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
