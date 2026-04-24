"use client";

import { useCallback, useEffect, useState } from "react";

export interface Tweaks {
  theme: "sand" | "lavender" | "seafoam" | "cocoa" | "mist";
  reducedMotion: boolean;
  plainLanguage: boolean;
  fontScale: number;
}

export const DEFAULTS: Tweaks = {
  theme: "sand",
  reducedMotion: false,
  plainLanguage: false,
  fontScale: 100,
};

const STORAGE_KEY = "nsns-tweaks";

export function useTweaks(): [Tweaks, <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => void] {
  const [values, setValues] = useState<Tweaks>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setValues({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {
      /* ignore malformed JSON */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = values.theme === "sand" ? "" : values.theme;
    root.dataset.motion = values.reducedMotion ? "reduced" : "";
    root.dataset.plain = values.plainLanguage ? "1" : "";
    root.style.fontSize = `${(values.fontScale / 100) * 17}px`;
  }, [values]);

  const setTweak = useCallback(
    <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
      setValues((prev) => {
        const next = { ...prev, [key]: value };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore quota errors */
        }
        return next;
      });
    },
    [],
  );

  return [values, setTweak];
}
