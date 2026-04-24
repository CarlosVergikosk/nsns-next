import Image from "next/image"
import Link from "next/link"
import { Icon, type IconName } from "@/components/ui/Icon"

interface CoreAvatar {
  src: string
  alt: string
  /** percentage position within the square collage wrapper */
  cx: number
  cy: number
  /** diameter as percentage of the wrapper width */
  size: number
}

const coreAvatars: CoreAvatar[] = [
  {
    src: "/assets/coaches/carolina.jpg",
    alt: "Carolina",
    cx: 27.5,
    cy: 35,
    size: 29,
  },
  { src: "/assets/coaches/jens.jpg", alt: "Jens", cx: 55, cy: 25, size: 24 },
  {
    src: "/assets/coaches/chantal.jpg",
    alt: "Chantal",
    cx: 75,
    cy: 45,
    size: 33,
  },
  {
    src: "/assets/coaches/samantha.jpg",
    alt: "Samantha",
    cx: 37.5,
    cy: 60,
    size: 26,
  },
  {
    src: "/assets/coaches/stefanie.jpg",
    alt: "Stefanie",
    cx: 65,
    cy: 72,
    size: 36,
  },
  { src: "/assets/coaches/cm.jpg", alt: "Coach", cx: 20, cy: 80, size: 21 },
]

type ServiceTint = "teal" | "purple" | "peach" | "lemon"

interface MiniService {
  title: string
  body: string
  cta: string
  page: string
  icon: IconName
  tint: ServiceTint
}

const services: MiniService[] = [
  {
    title: "Adult assessments",
    body: "ADHD, autism and combined AuDHD pathways with Swiss-licensed clinicians. Clear costs, clear timelines.",
    cta: "See pathways",
    page: "/assessments",
    icon: "puzzle",
    tint: "purple",
  },
  {
    title: "Community events",
    body: "Sensory-safe gatherings, peer circles and lunchtime clinics across DE · FR · IT Switzerland.",
    cta: "See what's on",
    page: "/blog",
    icon: "calendar",
    tint: "peach",
  },
  {
    title: "Training & advocacy",
    body: "Neuroinclusion workshops for workplaces, schools and healthcare teams who want to do this properly.",
    cta: "Enquire",
    page: "/contact",
    icon: "chat",
    tint: "teal",
  },
  {
    title: "Resources & research",
    body: "Reading lists, lived-experience writing, ongoing research into what actually helps neurodivergent adults here.",
    cta: "Read the blog",
    page: "/blog",
    icon: "book",
    tint: "lemon",
  },
  {
    title: "Family support",
    body: "Dedicated coaches for parents — often parents who are themselves neurodivergent.",
    cta: "Find a family coach",
    page: "/coaches",
    icon: "heart",
    tint: "purple",
  },
]

const tintStyle: Record<
  ServiceTint,
  { chipBg: string; chipInk: string; cta: string }
> = {
  teal: {
    chipBg: "var(--teal-soft)",
    chipInk: "var(--teal-deep)",
    cta: "var(--teal-deep)",
  },
  purple: {
    chipBg: "var(--purple-soft)",
    chipInk: "var(--purple-deep)",
    cta: "var(--purple-deep)",
  },
  peach: {
    chipBg: "var(--peach)",
    chipInk: "var(--purple-ink)",
    cta: "var(--purple-deep)",
  },
  lemon: { chipBg: "var(--lemon)", chipInk: "var(--ink)", cta: "var(--ink)" },
}

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-end mb-10 md:mb-14">
          <div>
            <div className="eyebrow mb-4">What we do</div>
            <h2 className="max-w-[560px]">
              Six ways in.
              <br />
              <span className="text-purple-deep">
                One network holding them together.
              </span>
            </h2>
          </div>
          <p className="text-ink-muted text-[1rem] md:text-[1.08rem] max-w-[460px] leading-[1.65]">
            You don&apos;t have to pick the right door on the first try. Every
            service below connects to every other — move between them as you
            learn what helps.
          </p>
        </div>

        {/* Feature row */}
        <Link
          href="/coaches"
          className="group grid md:grid-cols-[1.1fr_1fr] bg-bg-tint text-ink rounded-[var(--r-xl)] overflow-hidden mb-5 border border-brand-border hover:-translate-y-px transition"
        >
          <div className="p-7 md:p-14 bg-bg-card">
            <div className="inline-flex items-center gap-2 text-[0.85rem] font-bold text-purple-deep mb-4">
              Our core offering
            </div>
            <h3 className="text-purple-ink text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.15] mb-4 max-w-[480px]">
              Coaching &amp; peer mentoring by people who get it.
            </h3>
            <p className="text-ink-soft text-[1.06rem] leading-[1.65] mb-8 max-w-[500px]">
              Twelve accredited practitioners across Switzerland. Many are
              themselves neurodivergent. Work on the practical, human side of
              ADHD, autism, dyslexia and more — in English, German, French or
              Italian.
            </p>
            <div className="items-center gap-4 flex">
              <span className="font-bold text-purple-deep">Browse coaches</span>
              <span className="w-9 h-9 rounded-full bg-purple-deep text-white inline-flex items-center justify-center font-black">
                →
              </span>
            </div>
          </div>
          <div
            className="relative min-h-[260px] md:min-h-[380px] flex items-center justify-center p-4"
            style={{
              background:
                "linear-gradient(135deg, var(--peach) 0%, var(--purple-soft) 55%, var(--purple-softer) 100%)",
            }}
          >
            <div
              className="relative aspect-square w-full max-w-[380px]"
              aria-hidden
            >
              {coreAvatars.map((a) => (
                <div
                  key={a.src}
                  className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-lg"
                  style={{
                    left: `${a.cx}%`,
                    top: `${a.cy}%`,
                    width: `${a.size}%`,
                    aspectRatio: "1 / 1",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Image
                    src={a.src}
                    alt={a.alt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const style = tintStyle[s.tint]
            // Fifth card spans the last full row on large screens so the grid
            // closes cleanly instead of leaving one orphan card.
            const isWide = i === 4
            return (
              <Link
                key={i}
                href={s.page}
                className={`group relative flex flex-col bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-7 md:p-8 transition hover:-translate-y-0.5 hover:border-brand-border-strong ${
                  isWide ? "lg:col-span-2 md:col-span-2" : ""
                }`}
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div
                  className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 md:mb-6 shrink-0"
                  style={{ background: style.chipBg, color: style.chipInk }}
                >
                  <Icon name={s.icon} size={26} />
                </div>
                <h4 className="text-[1.2rem] md:text-[1.3rem] mb-2.5 font-black leading-tight">
                  {s.title}
                </h4>
                <p className="text-[0.98rem] leading-[1.6] mb-6 text-ink-soft flex-1 max-w-[48ch]">
                  {s.body}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 font-bold text-[0.95rem]"
                  style={{ color: style.cta }}
                >
                  {s.cta}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-[3px]"
                  >
                    →
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
