import type { ButtonHTMLAttributes, ReactNode } from "react";

type Tone = "neutral" | "teal" | "purple" | "warm";

const toneClass: Record<Tone, string> = {
  neutral: "bg-bg-tint text-ink",
  teal: "bg-teal text-white",
  purple: "bg-purple-deep text-white",
  warm: "bg-ink text-white",
};

interface ChipProps {
  tone?: Tone;
  active?: boolean;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
}

export function Chip({
  tone = "neutral",
  active = false,
  interactive = false,
  className = "",
  children,
}: ChipProps) {
  const activeCls = active ? "!bg-ink !text-white" : "";
  const interactiveCls = interactive ? "cursor-pointer hover:border-ink" : "";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-[0.78rem] font-bold border border-transparent transition-colors ${toneClass[tone]} ${activeCls} ${interactiveCls} ${className}`}
    >
      {children}
    </span>
  );
}

interface ChipButtonProps extends ChipProps {
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export function ChipButton({
  tone = "neutral",
  active = false,
  interactive = true,
  className = "",
  children,
  onClick,
  type = "button",
}: ChipButtonProps) {
  const activeCls = active ? "!bg-ink !text-white" : "";
  const interactiveCls = interactive ? "cursor-pointer hover:border-ink" : "";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-pill text-[0.78rem] font-bold border border-transparent transition-colors ${toneClass[tone]} ${activeCls} ${interactiveCls} ${className}`}
    >
      {children}
    </button>
  );
}
