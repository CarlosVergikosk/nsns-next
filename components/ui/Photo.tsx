import Image from "next/image"
import type { CSSProperties, ReactNode } from "react"
import { Icon } from "./Icon"
import type { Tint } from "@/lib/types"

interface PhotoProps {
  label?: string
  ratio?: string
  tint?: Tint | "mix"
  rounded?: string
  height?: string | number
  /** Optional image src. When provided, renders a real <Image> instead
   *  of the tinted placeholder. `label` becomes the alt text. */
  src?: string
  children?: ReactNode
}

export function Photo({
  label = "Photo",
  ratio = "4/3",
  tint = "mix",
  rounded,
  height,
  src,
  children,
}: PhotoProps) {
  const style: CSSProperties = {
    aspectRatio: ratio || undefined,
    borderRadius: rounded,
    height,
  }

  if (src) {
    return (
      <div
        className="relative overflow-hidden bg-bg-muted w-full"
        style={style}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover"
        />
        {children}
      </div>
    )
  }

  const tintClass =
    tint === "teal"
      ? "tint-teal"
      : tint === "purple"
      ? "tint-purple"
      : tint === "warm"
      ? "tint-warm"
      : ""

  return (
    <div
      className={`ph ${tintClass}`}
      style={style}
      aria-label={`Placeholder image: ${label}`}
    >
      <div className="flex flex-col items-center gap-1.5">
        <span className="ph-icon">
          <Icon name="sparkle" size={20} />
        </span>
        <span>{label}</span>
      </div>
      {children}
    </div>
  )
}
