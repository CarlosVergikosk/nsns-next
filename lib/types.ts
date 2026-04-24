export type Tint = "teal" | "purple" | "warm";

export interface Counselor {
  id: string;
  name: string;
  title: string;
  canton: string;
  languages: string[];
  specialties: string[];
  modes: string[];
  rate: string;
  accepting: boolean;
  years: number;
  bio: string;
  approach: string;
  credentials: string[];
  avatarTint: "teal" | "purple";
  /** Optional path to a real headshot under /public. Falls back to the
   *  tinted Photo placeholder when absent. */
  photo?: string;
}

export interface EventItem {
  date: string;
  time: string;
  title: string;
  location: string;
  format: string;
  price: string;
  capacity: string;
  description: string;
  tag: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tag: string;
  excerpt: string;
  imageTone: Tint;
  /** Optional cover image under /public. Falls back to the tinted
   *  Photo placeholder when absent. */
  image?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface Assessment {
  id: string;
  name: string;
  duration: string;
  price: string;
  overview: string;
  includes: string[];
  colour: Tint;
}

export interface Faq {
  q: string;
  a: string;
}

export interface NdFact {
  stat: string;
  label: string;
}
