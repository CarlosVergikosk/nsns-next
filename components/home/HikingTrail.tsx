"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Checkpoint {
  t: number
  num: string
  title: string
  body: string
  cta: string
  page: string
  tint: "teal" | "purple"
}

const checkpoints: Checkpoint[] = [
  {
    t: 0.1,
    num: "01",
    title: "Suspecting you might be neurodivergent",
    body: "You've been reading, wondering, recognising yourself in other people's stories. That quiet hunch is a legitimate starting point — nothing more is required to reach out.",
    cta: "New to neurodiversity?",
    page: "/about-neurodiversity",
    tint: "teal",
  },
  {
    t: 0.48,
    num: "02",
    title: "Considering getting assessed",
    body: "Exploring whether a formal adult ADHD or autism assessment is right for you. We'll walk you through Swiss pathways, costs, and what the process actually looks like.",
    cta: "Assessment options",
    page: "/assessments",
    tint: "purple",
  },
  {
    t: 0.86,
    num: "03",
    title: "Understanding your needs, starting coaching",
    body: "Whether you have a diagnosis or not, a coach or peer mentor can help you translate self-knowledge into day-to-day life that actually works for your brain.",
    cta: "Find a coach",
    page: "/coaches",
    tint: "teal",
  },
]

const pathD =
  "M 140 90 " +
  "C 260 120, 360 260, 300 380 " +
  "S 140 560, 260 640 " +
  "C 420 720, 720 640, 820 760 " +
  "S 940 1020, 780 1100 " +
  "C 640 1170, 460 1150, 360 1240 " +
  "S 340 1340, 480 1360"

const treePositions: [number, number][] = [
  [80, 720],
  [520, 540],
  [780, 560],
  [1000, 720],
  [160, 880],
  [420, 860],
  [640, 940],
  [940, 960],
  [200, 1100],
  [540, 1140],
  [820, 1220],
]

export function HikingTrail() {
  const wrapRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [progress, setProgress] = useState(0)
  const [pathLen, setPathLen] = useState(0)
  const [cpPositions, setCpPositions] = useState<{ x: number; y: number }[]>([])
  const [hiker, setHiker] = useState<{ x: number; y: number } | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const update = () => setIsDesktop(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (pathRef.current) {
      setPathLen(pathRef.current.getTotalLength())
    }
  }, [])

  useEffect(() => {
    const path = pathRef.current
    if (!path || pathLen === 0) return
    const total = path.getTotalLength()
    setCpPositions(
      checkpoints.map((cp) => {
        const pt = path.getPointAtLength(total * cp.t)
        return { x: pt.x, y: pt.y }
      })
    )
  }, [pathLen])

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 800
      const start = vh * 0.85
      const end = -rect.height + vh * 0.55
      const p = (rect.top - start) / (end - start)
      setProgress(Math.max(0, Math.min(1, p)))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    const path = pathRef.current
    if (!path || pathLen === 0) return
    if (progress > 0.01 && progress < 0.99) {
      const pt = path.getPointAtLength(pathLen * progress)
      setHiker({ x: pt.x, y: pt.y })
    } else {
      setHiker(null)
    }
  }, [progress, pathLen])

  const dashOffset = pathLen * (1 - progress)

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden py-16 md:py-[140px]"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--teal-softer) 40%, var(--purple-softer) 100%)",
      }}
      aria-label="Your journey"
    >
      <div className="relative z-[3] mb-10 md:mb-[60px] mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="eyebrow mb-4">Your journey</div>
        <h2 className="max-w-[720px]">
          Wherever you are on the trail,{" "}
          <span className="text-purple-deep">we&apos;ll meet you there.</span>
        </h2>
        <p className="text-ink-muted max-w-[560px] mt-4 text-[1rem] md:text-[1.08rem]">
          Most people don&apos;t arrive with a clear question. Here are three
          common places to start — pick the one that fits today; you can always
          change route.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 md:min-h-[1400px]">
        <svg
          viewBox="0 0 1200 1400"
          preserveAspectRatio="xMidYMid meet"
          className="hidden md:block absolute inset-0 w-full h-full z-[1] pointer-events-none"
          aria-hidden
        >
          <defs>
            <linearGradient id="trail-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--teal)" />
              <stop offset="50%" stopColor="var(--purple)" />
              <stop offset="100%" stopColor="var(--purple-deep)" />
            </linearGradient>
            <filter
              id="trail-soft"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          {/* Three-layer mountain silhouette — varied peak heights on the
              back range, softer rolling curves closer in, for a sense of
              depth rather than a uniform cartoon zigzag. */}
          <g aria-hidden>
            {/* Distant range — tallest, most jagged, palest */}
            <path
              d="M 0 320
                 L 90 220 L 160 280
                 L 250 160 L 330 240
                 L 420 180 L 510 130
                 L 600 90  L 690 200
                 L 780 150 L 870 230
                 L 970 170 L 1070 240
                 L 1160 190 L 1200 220
                 L 1200 440 L 0 440 Z"
              fill="var(--purple-ink)"
              opacity="0.09"
            />
            {/* Mid range — smoother Q-curves between medium peaks */}
            <path
              d="M 0 400
                 Q 90 340 180 380
                 Q 260 420 340 360
                 Q 430 300 520 350
                 Q 620 410 720 360
                 Q 820 310 900 360
                 Q 1000 410 1100 370
                 Q 1170 350 1200 370
                 L 1200 490 L 0 490 Z"
              fill="var(--teal-deep)"
              opacity="0.13"
            />
            {/* Foreground rolling hills — gentlest curves, warmest tone */}
            <path
              d="M 0 470
                 Q 150 440 300 465
                 Q 450 490 600 460
                 Q 750 430 900 465
                 Q 1050 495 1200 465
                 L 1200 540 L 0 540 Z"
              fill="var(--purple-deep)"
              opacity="0.12"
            />
          </g>

          <g opacity="0.55" aria-hidden>
            {treePositions.map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y})`}>
                <path
                  d="M 0 -18 L 10 6 L -10 6 Z"
                  fill="var(--teal-deep)"
                  opacity="0.35"
                />
                <path
                  d="M 0 -10 L 8 10 L -8 10 Z"
                  fill="var(--purple-deep)"
                  opacity="0.4"
                />
                <rect
                  x="-1.5"
                  y="10"
                  width="3"
                  height="6"
                  fill="var(--ink-muted)"
                  opacity="0.4"
                />
              </g>
            ))}
          </g>

          <path
            d={pathD}
            fill="none"
            stroke="var(--brand-border-strong)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 12"
            opacity="0.7"
          />

          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#trail-grad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLen || undefined}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset 0.15s linear" }}
            filter="url(#trail-soft)"
          />

          {cpPositions.map((pos, i) => {
            const cp = checkpoints[i]
            const active = progress >= cp.t - 0.02
            const color =
              cp.tint === "purple" ? "var(--purple-deep)" : "var(--teal)"
            return (
              <g key={i} transform={`translate(${pos.x} ${pos.y})`}>
                {active && (
                  <circle r="28" fill={color} opacity="0.18">
                    <animate
                      attributeName="r"
                      values="22;38;22"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.25;0;0.25"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  r="22"
                  fill="#fff"
                  stroke={active ? color : "var(--brand-border-strong)"}
                  strokeWidth="3"
                />
                <circle
                  r="10"
                  fill={active ? color : "var(--brand-border-strong)"}
                  style={{ transition: "fill 0.4s" }}
                />
                <text
                  y="5"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="800"
                  fill="#fff"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {i + 1}
                </text>
              </g>
            )
          })}

          {hiker && (
            <g
              transform={`translate(${hiker.x} ${hiker.y})`}
              style={{ transition: "transform 0.15s linear" }}
            >
              <circle r="14" fill="var(--purple-deep)" opacity="0.2">
                <animate
                  attributeName="r"
                  values="14;22;14"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                r="9"
                fill="#fff"
                stroke="var(--purple-deep)"
                strokeWidth="3"
              />
              <circle r="3.5" fill="var(--purple-deep)" />
            </g>
          )}
        </svg>

        <div className="relative z-[2] flex flex-col gap-6 md:grid md:gap-0 md:grid-cols-2">
          {checkpoints.map((cp, i) => {
            const active = progress >= cp.t - 0.02
            const side: "left" | "right" = i % 2 === 0 ? "left" : "right"
            const accent =
              cp.tint === "purple" ? "var(--purple-deep)" : "var(--teal)"
            const topOffsets = [40, 520, 1020]
            const prevOffsets = [0, 40, 520]
            const topOffset = topOffsets[i]
            const paddingTop = i > 0 ? topOffset - prevOffsets[i] - 300 : 0
            return (
              <div
                key={i}
                className="md:flex"
                style={{
                  gridColumn: side === "left" ? "1 / 2" : "2 / 3",
                  gridRow: i + 1,
                  justifyContent: side === "left" ? "flex-start" : "flex-end",
                  ...(isDesktop
                    ? { marginTop: i === 0 ? topOffset : 0, paddingTop }
                    : {}),
                }}
              >
                <div
                  className="relative w-full md:max-w-[420px] md:transition-all md:duration-700"
                  style={{
                    ...(isDesktop
                      ? {
                          transform: active
                            ? "translateY(0) scale(1)"
                            : "translateY(24px) scale(0.96)",
                          opacity: active ? 1 : 0.9,
                          transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)",
                        }
                      : {}),
                  }}
                >
                  <div
                    className="relative bg-bg-card rounded-[24px] md:rounded-[36px] px-6 md:px-[34px] py-6 md:py-8"
                    style={{
                      border: `2px solid ${accent}`,
                      boxShadow: active
                        ? `0 18px 40px -20px ${accent}, 0 4px 12px rgba(20,18,26,0.06)`
                        : "var(--shadow-sm)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[0.95rem]"
                        style={{ background: accent }}
                      >
                        {cp.num}
                      </div>
                      <div className="eyebrow m-0" style={{ color: accent }}>
                        Checkpoint {i + 1} of 3
                      </div>
                    </div>
                    <h3 className="mb-3 text-[1.42rem] leading-tight font-black">
                      {cp.title}
                    </h3>
                    <p className="text-ink-muted mb-[22px] text-[0.98rem] leading-[1.6]">
                      {cp.body}
                    </p>
                    <Link
                      href={cp.page}
                      className="group inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill font-bold text-[1rem] text-white transition"
                      style={{
                        background: accent,
                        boxShadow: `0 4px 14px -6px ${accent}`,
                      }}
                    >
                      {cp.cta}
                      <span
                        aria-hidden
                        className="inline-block transition-transform group-hover:translate-x-[3px]"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
