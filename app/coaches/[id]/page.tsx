import Link from "next/link";
import { notFound } from "next/navigation";
import { counselors } from "@/lib/data";
import { Photo } from "@/components/ui/Photo";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return counselors.map((c) => ({ id: c.id }));
}

export default async function CoachDetailPage({ params }: PageProps) {
  const { id } = await params;
  const coach = counselors.find((c) => c.id === id);
  if (!coach) notFound();

  const accent = coach.avatarTint === "purple" ? "var(--purple)" : "var(--teal)";

  return (
    <>
      <section className="pt-6 md:pt-8 pb-4">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
          <Link
            href="/coaches"
            className="inline-flex items-center gap-1.5 text-[0.95rem] text-ink-muted hover:text-ink"
          >
            <span className="inline-block rotate-180">→</span> Back to directory
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid gap-8 md:gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Photo label={coach.name} ratio="4/5" tint={coach.avatarTint} rounded="var(--r-xl)" src={coach.photo} />
            <div className="mt-6 p-6 bg-bg-card border border-brand-border rounded-[var(--r-lg)]">
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[0.9rem] font-bold text-ink-muted">
                  Availability
                </span>
                <Chip
                  tone={coach.accepting ? "teal" : "neutral"}
                  className="!text-[0.74rem]"
                >
                  {coach.accepting ? "● Accepting" : "Waitlist"}
                </Chip>
              </div>
              <div className="grid grid-cols-2 gap-3.5 text-[0.88rem]">
                <div>
                  <div className="text-ink-muted text-[0.76rem] mb-0.5">Rate</div>
                  <strong>{coach.rate}</strong>
                </div>
                <div>
                  <div className="text-ink-muted text-[0.76rem] mb-0.5">Experience</div>
                  <strong>{coach.years} years</strong>
                </div>
                <div>
                  <div className="text-ink-muted text-[0.76rem] mb-0.5">Canton</div>
                  <strong>{coach.canton}</strong>
                </div>
                <div>
                  <div className="text-ink-muted text-[0.76rem] mb-0.5">Format</div>
                  <strong>{coach.modes.join(", ")}</strong>
                </div>
              </div>
              <LinkButton
                href="/contact"
                arrow
                className="!w-full !justify-center mt-5"
              >
                Request an intake
              </LinkButton>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4">{coach.specialties.join(" · ")}</div>
            <h1 className="mb-2">{coach.name}</h1>
            <p className="text-[1.2rem] text-ink-soft mb-8">{coach.title}</p>

            <div
              className="accent-bar"
              style={{
                background: `linear-gradient(90deg, ${accent} 0%, ${accent} 50%, var(--purple-deep) 50%, var(--purple-deep) 100%)`,
              }}
            />
            <h3 className="mb-3 text-[1.1rem]">About</h3>
            <p className="text-[1.05rem] mb-8 text-ink-soft">{coach.bio}</p>

            <h3 className="mb-3 text-[1.1rem]">Approach</h3>
            <blockquote
              className="m-0 mb-8 py-5 px-6 bg-bg-tint rounded-[var(--r)] text-[1.05rem] text-ink-soft"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              &ldquo;{coach.approach}&rdquo;
            </blockquote>

            <h3 className="mb-4 text-[1.1rem]">Languages</h3>
            <div className="flex gap-2 flex-wrap mb-8">
              {coach.languages.map((l) => (
                <Chip key={l}>{l}</Chip>
              ))}
            </div>

            <h3 className="mb-4 text-[1.1rem]">Credentials</h3>
            <ul className="list-none pl-0 m-0 flex flex-col gap-2.5">
              {coach.credentials.map((cr) => (
                <li key={cr} className="flex gap-2.5 items-start">
                  <span className="text-teal mt-0.5">
                    <Icon name="check" size={18} />
                  </span>
                  <span>{cr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
