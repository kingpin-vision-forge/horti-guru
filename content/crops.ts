import type { Locale } from "@/lib/i18n";

export const cropIds = ["ginger", "turmeric", "arecanut", "banana", "pepper"] as const;
export type CropId = (typeof cropIds)[number];

export const cropNames: Record<CropId, Record<Locale, string>> = {
  ginger: { en: "Ginger", kn: "ಶುಂಠಿ", hi: "अदरक" },
  turmeric: { en: "Turmeric", kn: "ಅರಿಶಿನ", hi: "हल्दी" },
  arecanut: { en: "Arecanut", kn: "ಅಡಿಕೆ", hi: "सुपारी" },
  banana: { en: "Banana", kn: "ಬಾಳೆ", hi: "केला" },
  pepper: { en: "Pepper", kn: "ಕಾಳುಮೆಣಸು", hi: "काली मिर्च" },
};

export function isCrop(value: string): value is CropId {
  return (cropIds as readonly string[]).includes(value);
}
