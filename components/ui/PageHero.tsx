import type { ReactNode } from "react";
import { Blob } from "./Blob";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  tint?: "teal" | "purple";
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  tint = "teal",
}: PageHeroProps) {
  const first = tint === "purple" ? "var(--purple-soft)" : "var(--teal-soft)";
  const second = tint === "purple" ? "var(--teal-soft)" : "var(--purple-soft)";
  return (
    <section className="relative pt-10 md:pt-[72px] pb-10 md:pb-14 overflow-hidden">
      <Blob style={{ top: -120, left: -120 }} color={first} />
      <Blob style={{ top: 40, right: -180 }} color={second} />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        {eyebrow && <div className="eyebrow mb-4 md:mb-5">{eyebrow}</div>}
        <h1 className="max-w-[900px]">{title}</h1>
        {lead && (
          <p className="text-ink-muted mt-4 md:mt-5 max-w-[640px] text-[1.05rem] md:text-[1.2rem]">{lead}</p>
        )}
        {children && <div className="mt-6 md:mt-8">{children}</div>}
      </div>
    </section>
  );
}
