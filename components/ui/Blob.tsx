import type { CSSProperties } from "react";

interface BlobProps {
  style?: CSSProperties;
  color?: string;
}

export function Blob({ style, color = "var(--teal-soft)" }: BlobProps) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: color,
        filter: "blur(80px)",
        opacity: 0.55,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
