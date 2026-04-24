import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow="In their own words"
          title="What the work can feel like."
          align="center"
        />
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const filled = i === 1;
            return (
              <figure
                key={i}
                className={`rounded-[var(--r-lg)] p-6 md:p-8 m-0 border ${
                  filled
                    ? "bg-purple-deep text-white border-transparent"
                    : "bg-bg-card border-brand-border text-ink"
                }`}
              >
                <div
                  className={`text-[2.4rem] leading-none mb-3 ${
                    filled ? "text-white/40" : "text-purple"
                  }`}
                >
                  “
                </div>
                <blockquote className="m-0 text-[1.02rem] leading-[1.6]">
                  {t.quote}
                </blockquote>
                <figcaption className={`mt-5 text-[0.88rem] ${filled ? "opacity-85" : "opacity-70"}`}>
                  — {t.name}, {t.location}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
