import Image from "next/image"
import Link from "next/link"

export function HomeCta() {
  return (
    <section className="pt-10 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div
          className="relative overflow-hidden rounded-[var(--r-xl)] p-7 md:p-14 text-white grid items-center gap-8 md:gap-12 md:grid-cols-[1.4fr_1fr]"
          style={{
            background: "linear-gradient(135deg, var(--teal), var(--purple))",
          }}
        >
          <div>
            <h2 className="text-white mb-4 max-w-[500px]">
              Not sure where to start?
            </h2>
            <p className="opacity-95 text-white text-[1rem] md:text-[1.08rem] max-w-[460px] mb-6 md:mb-8">
              Send us a line and we&apos;ll help you work out whether coaching,
              assessment, community or simply a resource list is what you need
              right now. There&apos;s no wrong answer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-white text-purple-deep font-bold text-[1rem] hover:-translate-y-px transition"
              >
                Get in touch
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill bg-transparent border-2 border-white text-white font-bold text-[1rem] hover:bg-white hover:text-purple-deep transition"
              >
                Or support our work
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-end">
            <Image
              src="/assets/logo-inverse.png"
              alt=""
              width={720}
              height={250}
              priority={false}
              className="w-full max-w-[520px] h-auto select-none"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
