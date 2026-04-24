import { ndFacts } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="relative bg-ink text-white py-14 md:py-24 overflow-hidden">
      <svg
        aria-hidden
        className="absolute -top-[120px] -right-[120px] opacity-10 pointer-events-none"
        width={480}
        height={480}
        viewBox="0 0 480 480"
      >
        <circle cx="240" cy="240" r="220" fill="none" stroke="var(--teal-soft)" strokeWidth="1" />
        <circle cx="240" cy="240" r="160" fill="none" stroke="var(--teal-soft)" strokeWidth="1" />
        <circle cx="240" cy="240" r="100" fill="none" stroke="var(--purple-soft)" strokeWidth="1" />
        <circle cx="240" cy="240" r="40" fill="var(--purple)" opacity="0.4" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[820px] text-center mb-12 md:mb-[72px]">
          <div
            className="eyebrow mb-4 md:mb-5 justify-center"
            style={{ color: "var(--teal-soft)" }}
          >
            Why this matters
          </div>
          <h2 className="text-white text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.1] mb-5 md:mb-6">
            The numbers behind{" "}
            <span style={{ color: "var(--teal-soft)" }}>the quiet wait.</span>
          </h2>
          <p className="text-white/75 text-[1rem] md:text-[1.15rem] leading-[1.7] mx-auto max-w-[640px]">
            Neurodivergent adults in Switzerland wait years for answers — and when the answers arrive, the real support often isn&apos;t there. We built NSNS to shrink both gaps at once.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/15">
          {ndFacts.map((f, i) => {
            const isPurple = i % 2 === 1;
            return (
              <div
                key={i}
                className="px-4 md:px-6 py-6 md:py-7 flex flex-col gap-2.5 border-white/15"
                style={{
                  borderRight:
                    i < ndFacts.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                }}
              >
                <div className="flex items-baseline gap-2.5">
                  <span
                    className="text-[0.66rem] font-extrabold tracking-[0.14em]"
                    style={{ color: isPurple ? "var(--purple-soft)" : "var(--teal-soft)" }}
                  >
                    / 0{i + 1}
                  </span>
                  <span
                    className="w-[18px] h-0.5"
                    style={{ background: isPurple ? "var(--purple)" : "var(--teal)" }}
                  />
                </div>
                <div className="text-white font-black leading-none text-[clamp(1.5rem,5vw,2.4rem)]">
                  {f.stat}
                </div>
                <div className="text-white/75 text-[0.9rem] leading-[1.5]">{f.label}</div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 md:mt-10 text-[0.82rem] md:text-[0.84rem] text-white/50 max-w-[720px]">
          Sources: Swiss Federal Statistical Office, European ADHD Guidelines Group, ADHD Europe (2023), and internal NSNS network surveys 2023–2024.
        </p>
      </div>
    </section>
  );
}
