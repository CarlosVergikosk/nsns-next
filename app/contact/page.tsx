"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { ChipButton } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { useI18n } from "@/lib/i18n/I18nProvider";

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useI18n();
  const p = t.contactPage;
  const topics = p.form.topics;
  const empty: FormState = { name: "", email: "", topic: topics[0], message: "" };

  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        lead={p.hero.lead}
      />

      <section className="pt-4 pb-10 md:pb-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8 grid items-start gap-8 md:gap-16 md:grid-cols-[1.2fr_1fr]">
          <div className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-6 md:p-10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-[72px] h-[72px] rounded-full bg-teal-soft text-teal-deep inline-flex items-center justify-center mb-5">
                  <Icon name="check" size={32} />
                </div>
                <h3 className="mb-2.5">{p.received.title}</h3>
                <p className="text-ink-muted max-w-[360px] mx-auto">
                  {p.received.body}
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-bg-card text-ink border-2 border-ink font-bold text-[1rem] hover:bg-ink hover:text-white transition"
                  onClick={() => {
                    setSent(false);
                    setForm(empty);
                  }}
                >
                  {p.received.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3 className="mb-1.5">{p.form.title}</h3>
                <p className="text-ink-muted mb-7 text-[0.95rem]">
                  {p.form.subtitle}
                </p>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-4">
                  <Field
                    label={p.form.name}
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label={p.form.email}
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>

                <div className="mb-4">
                  <span className="block text-[0.92rem] font-bold text-ink-muted mb-2">
                    {p.form.topicLabel}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {topics.map((topic) => (
                      <ChipButton
                        key={topic}
                        active={form.topic === topic}
                        onClick={() => setForm({ ...form, topic })}
                      >
                        {topic}
                      </ChipButton>
                    ))}
                  </div>
                </div>

                <label className="block mb-6">
                  <span className="block text-[0.92rem] font-bold text-ink-muted mb-2">
                    {p.form.message}
                  </span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    placeholder={p.form.messagePlaceholder}
                    className="w-full py-3.5 px-4 rounded-[var(--r)] border border-brand-border-strong bg-bg-raised text-[1rem] leading-[1.5] resize-y"
                  />
                </label>

                <button
                  type="submit"
                  className="group w-full inline-flex justify-center items-center gap-2 py-[14px] rounded-pill bg-teal text-white font-bold text-[1rem] shadow-[0_2px_0_var(--teal-ink)] hover:bg-teal-deep hover:-translate-y-px transition"
                >
                  {p.form.send}
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-[3px]">→</span>
                </button>
                <p className="text-[0.82rem] text-ink-muted mt-4 text-center">
                  {p.form.privacy}{" "}
                  <a className="underline cursor-pointer">{p.form.privacyLink}</a>.
                </p>
              </form>
            )}
          </div>

          <div>
            <div className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-6 md:p-8 mb-4">
              <h4 className="mb-5">{p.byEmail.title}</h4>
              <a
                href="mailto:contact@nsns.ch"
                className="inline-flex items-center gap-2.5 text-teal-deep font-semibold"
              >
                <Icon name="mail" /> contact@nsns.ch
              </a>
              <p className="text-ink-muted mt-3.5 text-[0.92rem]">
                {p.byEmail.body}
              </p>
            </div>

            <div className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-6 md:p-8 mb-4">
              <h4 className="mb-5">{p.inPerson.title}</h4>
              <div className="flex gap-2.5 text-ink-soft mb-1.5">
                <span className="text-purple"><Icon name="pin" /></span>
                <div>
                  Place Bel-Air 2<br />
                  1260 Nyon<br />
                  {t.footer.country}
                </div>
              </div>
              <p className="text-ink-muted mt-3.5 text-[0.92rem]">
                {p.inPerson.body}
              </p>
            </div>

            <div className="bg-bg-card border border-brand-border rounded-[var(--r-lg)] p-6 md:p-8">
              <h4 className="mb-5">{p.elsewhere}</h4>
              <div className="flex gap-2.5">
                <a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-bg-tint text-ink font-bold text-[0.78rem] cursor-pointer hover:border-ink border border-transparent">
                  <Icon name="insta" size={16} /> {p.instagram}
                </a>
                <a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-bg-tint text-ink font-bold text-[0.78rem] cursor-pointer hover:border-ink border border-transparent">
                  <Icon name="linkedin" size={16} /> {p.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[0.92rem] font-bold text-ink-muted mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full py-3 px-4 rounded-[var(--r)] border border-brand-border-strong bg-bg-raised text-[1rem]"
      />
    </label>
  );
}
