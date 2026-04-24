"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Testimonials() {
  const { t } = useI18n();
  const tt = t.home.testimonials;
  const testimonials = t.data.testimonials;
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={tt.eyebrow}
          title={tt.title}
          align="center"
        />
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {testimonials.map((entry, i) => {
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
                  {entry.quote}
                </blockquote>
                <figcaption className={`mt-5 text-[0.88rem] ${filled ? "opacity-85" : "opacity-70"}`}>
                  — {entry.name}, {entry.location}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
