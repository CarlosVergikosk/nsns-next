"use client";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-3 top-3 bg-purple-deep text-white px-4 py-2 rounded-[16px] font-bold z-[200] -translate-y-[120%] focus:translate-y-0 transition-transform duration-200"
    >
      Skip to content
    </a>
  );
}
