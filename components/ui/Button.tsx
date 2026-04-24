import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2 px-[26px] py-[14px] rounded-pill font-bold text-[1rem] transition duration-200";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-teal text-white shadow-[0_2px_0_var(--teal-ink)] hover:bg-teal-deep hover:-translate-y-px",
  secondary:
    "bg-purple-deep text-white shadow-[0_2px_0_var(--purple-ink)] hover:bg-purple hover:-translate-y-px",
  ghost:
    "bg-bg-card text-ink border-2 border-ink hover:bg-ink hover:text-white",
};

interface BaseProps {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type LinkButtonProps = BaseProps & { href: string };

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform group-hover:translate-x-[3px]"
    >
      →
    </span>
  );
}

export function Button({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`group ${base} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  arrow = false,
  className = "",
  href,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`group ${base} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}
