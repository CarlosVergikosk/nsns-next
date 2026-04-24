interface SquiggleProps {
  color1?: string;
  color2?: string;
  size?: number;
  opacity?: number;
}

export function Squiggle({
  color1 = "var(--teal)",
  color2 = "var(--purple)",
  size = 120,
  opacity = 1,
}: SquiggleProps) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 240 132"
      style={{ opacity }}
      aria-hidden
    >
      <path d="M20 66 Q50 16 90 66 T160 66" fill="none" stroke={color1} strokeWidth="14" strokeLinecap="round" />
      <path d="M80 66 Q110 116 150 66 T220 66" fill="none" stroke={color2} strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}
