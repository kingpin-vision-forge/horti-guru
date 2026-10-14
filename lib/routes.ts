import { cropIds } from "@/content/crops";

/** Every page path, without the language prefix. */
export const allPaths: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/advisory", priority: 0.9 },
  ...cropIds.map((id) => ({ path: `/crops/${id}`, priority: 0.8 })),
  { path: "/consultancy", priority: 0.7 },
  { path: "/lab-testing", priority: 0.7 },
  { path: "/bio-inputs", priority: 0.6 },
  { path: "/equipment", priority: 0.6 },
  { path: "/results", priority: 0.5 },
  { path: "/about", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/checkout", priority: 0.3 },
  { path: "/terms", priority: 0.2 },
  { path: "/privacy", priority: 0.2 },
  { path: "/refunds", priority: 0.2 },
];
