interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={`mb-8 md:mb-12 ${centered ? "text-center mx-auto max-w-[680px]" : ""}`}
    >
      {eyebrow && <div className="eyebrow mb-3 md:mb-4">{eyebrow}</div>}
      <h2 className="mb-3 md:mb-4">{title}</h2>
      {lead && (
        <p className={`text-ink-muted text-[1rem] md:text-[1.12rem] ${centered ? "mx-auto" : ""} max-w-[620px]`}>
          {lead}
        </p>
      )}
    </div>
  );
}
