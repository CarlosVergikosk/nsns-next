"use client";

import { useState } from "react";
import { useTweaks, type Tweaks } from "./useTweaks";

const themeOptions: { value: Tweaks["theme"]; label: string }[] = [
  { value: "sand", label: "Soft Sand (default)" },
  { value: "lavender", label: "Lavender" },
  { value: "seafoam", label: "Seafoam" },
  { value: "cocoa", label: "Cocoa Warm" },
  { value: "mist", label: "Nordic Mist" },
];

export function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [tweaks, setTweak] = useTweaks();

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open accessibility tweaks"
        className="fixed right-4 bottom-4 z-[2147483646] w-12 h-12 rounded-full bg-ink text-white shadow-lg font-semibold text-[0.85rem]  flex items-center justify-center hover:bg-purple-deep transition"
      >
        ⚙
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Accessibility tweaks"
      className="fixed right-3 bottom-3 sm:right-4 sm:bottom-4 z-[2147483646] w-[calc(100vw-24px)] max-w-[300px] max-h-[calc(100vh-24px)] flex flex-col rounded-[14px] border border-white/60 shadow-2xl overflow-hidden"
      style={{
        background: "rgba(250,249,247,.92)",
        color: "#29261b",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        font: "12px/1.4 ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="flex items-center justify-between py-2.5 pr-2 pl-3.5 select-none">
        <b className="text-[13px] font-semibold ">Tweaks & accessibility</b>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close tweaks"
          className="w-6 h-6 rounded-md text-[13px] text-black/50 hover:bg-black/5 hover:text-black/80"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-2.5 px-3.5 pb-3.5 overflow-y-auto">
        <div className="text-[11px] font-semibold text-black/50 pt-2">Colour theme</div>
        <label className="flex flex-col gap-1.5">
          <span className="text-black/70 font-medium">Palette</span>
          <select
            className="h-[26px] px-2 bg-white/70 border border-black/10 rounded-[7px] text-inherit"
            value={tweaks.theme}
            onChange={(e) => setTweak("theme", e.target.value as Tweaks["theme"])}
          >
            {themeOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>

        <div className="text-[11px] font-semibold text-black/50 pt-2">Accessibility</div>

        <div className="flex items-center justify-between gap-2.5">
          <span className="text-black/70 font-medium">Reduced motion</span>
          <Toggle on={tweaks.reducedMotion} onChange={(v) => setTweak("reducedMotion", v)} />
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <span className="text-black/70 font-medium">Plain-language mode</span>
          <Toggle on={tweaks.plainLanguage} onChange={(v) => setTweak("plainLanguage", v)} />
        </div>

        <label className="flex flex-col gap-1.5">
          <span className="flex justify-between text-black/70 font-medium">
            <span>Text size</span>
            <span className="text-black/50 tabular-nums">{tweaks.fontScale}%</span>
          </span>
          <input
            type="range"
            min={90}
            max={130}
            step={5}
            value={tweaks.fontScale}
            onChange={(e) => setTweak("fontScale", Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className={`relative w-8 h-[18px] rounded-full transition-colors ${on ? "bg-[#34c759]" : "bg-black/20"}`}
    >
      <i
        className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-[14px]" : ""}`}
      />
    </button>
  );
}
