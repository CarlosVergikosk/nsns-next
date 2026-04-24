"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { counselors } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5 min-w-[140px] flex-1 sm:flex-none">
      <span className="text-[0.88rem] font-bold text-ink-muted">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none py-2.5 pl-3.5 pr-8 rounded-pill border border-brand-border-strong bg-bg-card text-[0.92rem] text-ink cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(42,37,51,.5)' d='M0 0h10L5 6z'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
        }}
      >
        <option value="all">Any</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

export default function CoachesPage() {
  const [search, setSearch] = useState("");
  const [canton, setCanton] = useState("all");
  const [specialty, setSpecialty] = useState("all");
  const [language, setLanguage] = useState("all");
  const [mode, setMode] = useState("all");
  const [acceptingOnly, setAcceptingOnly] = useState(false);

  const allSpecialties = useMemo(
    () => [...new Set(counselors.flatMap((c) => c.specialties))].sort(),
    [],
  );
  const allLanguages = useMemo(
    () => [...new Set(counselors.flatMap((c) => c.languages))].sort(),
    [],
  );
  const allCantons = useMemo(
    () => [...new Set(counselors.map((c) => c.canton))].sort(),
    [],
  );

  const filtered = counselors.filter((c) => {
    if (
      search &&
      !(c.name.toLowerCase() + c.title.toLowerCase() + c.bio.toLowerCase()).includes(
        search.toLowerCase(),
      )
    )
      return false;
    if (canton !== "all" && c.canton !== canton) return false;
    if (specialty !== "all" && !c.specialties.includes(specialty)) return false;
    if (language !== "all" && !c.languages.includes(language)) return false;
    if (mode !== "all" && !c.modes.includes(mode as never)) return false;
    if (acceptingOnly && !c.accepting) return false;
    return true;
  });

  return (
    <>
      <PageHero
        eyebrow="Coach directory"
        title="Find a coach who understands how you work."
        lead="All of our coaches are accredited through NSNS. Many are neurodivergent themselves. Filter by location, language, specialty and availability to find the right fit."
      />

      <section className="pt-0 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <div className="bg-bg-raised border border-brand-border rounded-[var(--r-lg)] p-5 md:p-6 mb-6 md:mb-8">
            <div className="flex flex-wrap items-end gap-3 md:gap-4">
              <label className="flex w-full md:flex-1 md:min-w-[260px] flex-col gap-1.5">
                <span className="text-[0.88rem] font-bold text-ink-muted">Search</span>
                <div className="relative">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Name, specialty, keyword…"
                    className="w-full py-2.5 pl-10 pr-3.5 rounded-pill border border-brand-border-strong bg-bg-card text-[0.92rem]"
                  />
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted">
                    <Icon name="search" size={16} />
                  </span>
                </div>
              </label>
              <SelectField label="Canton" value={canton} onChange={setCanton} options={allCantons} />
              <SelectField label="Specialty" value={specialty} onChange={setSpecialty} options={allSpecialties} />
              <SelectField label="Language" value={language} onChange={setLanguage} options={allLanguages} />
              <SelectField label="Format" value={mode} onChange={setMode} options={["In-person", "Online", "Hybrid"]} />
              <label className="flex items-center gap-2 pb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptingOnly}
                  onChange={(e) => setAcceptingOnly(e.target.checked)}
                  className="w-[18px] h-[18px] accent-[var(--teal)]"
                />
                <span className="text-[0.92rem] font-semibold">Accepting only</span>
              </label>
            </div>
          </div>

          <div className="mb-6 text-ink-muted text-[0.95rem]">
            Showing <strong className="text-ink">{filtered.length}</strong> of {counselors.length} coaches
          </div>

          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <Link
                key={c.id}
                href={`/coaches/${c.id}`}
                className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] overflow-hidden hover:-translate-y-0.5 hover:border-purple-deep transition"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <Photo label={c.name} ratio="5/4" tint={c.avatarTint} rounded="0" src={c.photo} />
                <div className="p-6">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h3 className="text-[1.25rem]">{c.name}</h3>
                    <Chip
                      tone={c.accepting ? "teal" : "neutral"}
                      className="!text-[0.72rem] shrink-0"
                    >
                      {c.accepting ? "● Accepting" : "Waitlist"}
                    </Chip>
                  </div>
                  <div className="text-[0.92rem] text-ink-muted mb-3.5">{c.title}</div>
                  <div className="flex gap-1.5 flex-wrap mb-3.5">
                    {c.specialties.map((s) => (
                      <Chip
                        key={s}
                        tone={c.avatarTint === "purple" ? "purple" : "teal"}
                        className="!text-[0.72rem]"
                      >
                        {s}
                      </Chip>
                    ))}
                  </div>
                  <div className="flex gap-3.5 text-[0.84rem] text-ink-muted flex-wrap">
                    <span className="inline-flex items-center gap-1"><Icon name="pin" size={14} /> {c.canton}</span>
                    <span className="inline-flex items-center gap-1"><Icon name="globe" size={14} /> {c.languages.join(", ")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 px-6 text-ink-muted">
              <div className="text-[1.2rem] mb-2">No coaches match those filters.</div>
              <div>
                Try relaxing one of them, or{" "}
                <Link href="/contact" className="text-teal underline">
                  contact us
                </Link>{" "}
                and we&apos;ll find something.
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
