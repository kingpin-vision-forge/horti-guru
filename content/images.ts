import type { Locale } from "@/lib/i18n";

/**
 * Photographs. `src` is a path under /public (WebP), or null until the photo
 * is supplied. Unfilled images render as a mist block of the same size, so the
 * layout never shifts when the real photo arrives.
 */
export type Photo = {
  token: string;
  src: string | null;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

const photo = (token: string, width: number, height: number, alt: Record<Locale, string>): Photo => ({
  token,
  src: null,
  width,
  height,
  alt,
});

export const images = {
  hero: photo("IMG_HERO", 800, 1200, {
    en: "Ginger plants in raised beds on a Karnataka farm",
    kn: "ಕರ್ನಾಟಕದ ಹೊಲವೊಂದರಲ್ಲಿ ಎತ್ತರಿಸಿದ ಮಡಿಗಳಲ್ಲಿ ಶುಂಠಿ ಗಿಡಗಳು",
    hi: "कर्नाटक के एक खेत में ऊँची क्यारियों में अदरक के पौधे",
  }),
  ginger: photo("IMG_CROP_GINGER", 600, 800, {
    en: "Ginger crop in the field",
    kn: "ಹೊಲದಲ್ಲಿ ಶುಂಠಿ ಬೆಳೆ",
    hi: "खेत में अदरक की फ़सल",
  }),
  turmeric: photo("IMG_CROP_TURMERIC", 600, 800, {
    en: "Turmeric plants with broad leaves",
    kn: "ಅಗಲ ಎಲೆಗಳ ಅರಿಶಿನ ಗಿಡಗಳು",
    hi: "चौड़ी पत्तियों वाले हल्दी के पौधे",
  }),
  arecanut: photo("IMG_CROP_ARECANUT", 600, 800, {
    en: "Arecanut palms in a plantation",
    kn: "ತೋಟದಲ್ಲಿ ಅಡಿಕೆ ಮರಗಳು",
    hi: "बाग़ में सुपारी के पेड़",
  }),
  banana: photo("IMG_CROP_BANANA", 600, 800, {
    en: "Banana plants with a developing bunch",
    kn: "ಗೊನೆ ಬಿಡುತ್ತಿರುವ ಬಾಳೆ ಗಿಡಗಳು",
    hi: "घौद बनते हुए केले के पौधे",
  }),
  pepper: photo("IMG_CROP_PEPPER", 600, 800, {
    en: "Pepper vine with green berry spikes",
    kn: "ಹಸಿರು ಕಾಳುಗಳ ಗೊಂಚಲಿರುವ ಕಾಳುಮೆಣಸಿನ ಬಳ್ಳಿ",
    hi: "हरे दानों के गुच्छों वाली काली मिर्च की बेल",
  }),
} satisfies Record<string, Photo>;
