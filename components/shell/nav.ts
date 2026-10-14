import type { Dict } from "@/content/dictionaries/en";

type NavKey = keyof Dict["shell"]["nav"];

export const navPaths: Record<NavKey, string> = {
  advisory: "/advisory",
  consultancy: "/consultancy",
  lab: "/lab-testing",
  bioInputs: "/bio-inputs",
  equipment: "/equipment",
  results: "/results",
  about: "/about",
  contact: "/contact",
};

export const primaryNav: NavKey[] = ["advisory", "consultancy", "lab", "bioInputs", "contact"];
export const allNav = Object.keys(navPaths) as NavKey[];
export const serviceNav: NavKey[] = ["advisory", "consultancy", "lab", "bioInputs", "equipment"];
