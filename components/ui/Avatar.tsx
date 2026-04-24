interface AvatarProps {
  name: string;
  tint?: "teal" | "purple";
  size?: number;
}

export function Avatar({ name, tint = "teal", size = 96 }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const bg =
    tint === "purple"
      ? "linear-gradient(135deg, var(--purple-soft), color-mix(in oklab, var(--purple-soft) 60%, var(--bg-tint)))"
      : "linear-gradient(135deg, var(--teal-soft), color-mix(in oklab, var(--teal-soft) 60%, var(--bg-tint)))";
  const ink = tint === "purple" ? "var(--purple-deep)" : "var(--teal-deep)";
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        color: ink,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.36,
        fontWeight: 500,
        flexShrink: 0,
      }}
      aria-label={`${name} photo placeholder`}
    >
      {initials}
    </div>
  );
}
