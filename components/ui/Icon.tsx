import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Filter,
  Globe,
  Heart,
  Leaf,
  Mail,
  Map as MapIcon,
  MapPin,
  MessageCircle,
  Phone,
  Puzzle,
  Search,
  Shield,
  Sparkles,
  Star,
  User,
  Waves,
  X,
  type LucideIcon,
} from "lucide-react";
import type { ComponentProps, ReactElement } from "react";

export type IconName =
  | "arrow" | "heart" | "leaf" | "map" | "globe" | "chat" | "book" | "check"
  | "calendar" | "search" | "filter" | "star" | "sparkle" | "x" | "mail"
  | "phone" | "pin" | "insta" | "linkedin" | "clock" | "user" | "wave"
  | "shield" | "puzzle";

const lucideMap: Partial<Record<IconName, LucideIcon>> = {
  arrow: ArrowRight,
  heart: Heart,
  leaf: Leaf,
  map: MapIcon,
  globe: Globe,
  chat: MessageCircle,
  book: BookOpen,
  check: Check,
  calendar: Calendar,
  search: Search,
  filter: Filter,
  star: Star,
  sparkle: Sparkles,
  x: X,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
  clock: Clock,
  user: User,
  wave: Waves,
  shield: Shield,
  puzzle: Puzzle,
};

// Lucide no longer ships brand marks (Instagram / LinkedIn were removed for
// trademark reasons). Keep minimal inline glyphs for those two so the rest
// of the codebase can still ask for `name="insta"` / `name="linkedin"`.
const brandGlyphs: Partial<Record<IconName, ReactElement>> = {
  insta: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
};

interface IconProps extends Omit<ComponentProps<LucideIcon>, "size"> {
  name: IconName;
  size?: number;
}

/** Thin wrapper around lucide-react so the rest of the codebase can keep
 *  using `<Icon name="heart" size={16} />` without knowing which icon set
 *  is backing it. Brand marks (Instagram/LinkedIn) are drawn inline
 *  because lucide dropped them. */
export function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  ...rest
}: IconProps) {
  const Lucide = lucideMap[name];
  if (Lucide) {
    return (
      <Lucide
        size={size}
        strokeWidth={strokeWidth}
        aria-hidden
        style={{ display: "inline-block", verticalAlign: "middle" }}
        {...rest}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
      aria-hidden
      {...rest}
    >
      {brandGlyphs[name]}
    </svg>
  );
}
