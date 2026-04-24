import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-[820px] px-5 sm:px-6 md:px-8 text-center">
        <div className="eyebrow justify-center mb-4">404</div>
        <h1 className="mb-4">This page isn&apos;t here.</h1>
        <p className="text-ink-muted text-[1.1rem] mb-8">
          It might have moved, or the link might be old. Head back home and try again.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-teal text-white font-bold text-[1rem] shadow-[0_2px_0_var(--teal-ink)] hover:bg-teal-deep transition"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
