import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { it } from "./it";

export { type Dictionary } from "./en";

export const dictionaries: Record<Locale, Dictionary> = { en, de, fr, it };
