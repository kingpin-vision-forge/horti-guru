import type { Locale } from "@/lib/i18n";

/**
 * Photographs. `src` is an Unsplash URL (generic stock, replace with the
 * business's own photos when available) or a WebP path under /public.
 * `ar` crops to the frame's aspect ratio on Unsplash's CDN. A null `src`
 * renders a mist block of the same size, so nothing shifts.
 */
export type Photo = {
  token: string;
  src: string | null;
  /** Unsplash page, for credit and for swapping the photo later. */
  source?: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

const unsplash = (id: string, ar: string) => `https://images.unsplash.com/${id}?ar=${ar}`;

export const images = {
  hero: {
    token: "IMG_HERO",
    src: unsplash("photo-1707721690746-cdbdabadebc2", "2:3"),
    source: "https://unsplash.com/photos/5mFozuUv3A0",
    width: 800,
    height: 1200,
    alt: {
      en: "A grower standing in her crop field in India",
      kn: "ಭಾರತದಲ್ಲಿ ತನ್ನ ಬೆಳೆ ಹೊಲದಲ್ಲಿ ನಿಂತಿರುವ ಬೆಳೆಗಾರ್ತಿ",
      hi: "भारत में अपने फ़सल के खेत में खड़ी एक उत्पादक",
    },
  },
  ginger: {
    token: "IMG_CROP_GINGER",
    src: unsplash("photo-1769795082196-aa8c3e7c63eb", "3:4"),
    source: "https://unsplash.com/photos/U7z6nBT_1YU",
    width: 600,
    height: 800,
    alt: {
      en: "Ginger plant in flower among green leaves",
      kn: "ಹಸಿರು ಎಲೆಗಳ ನಡುವೆ ಹೂಬಿಟ್ಟ ಶುಂಠಿ ಗಿಡ",
      hi: "हरी पत्तियों के बीच फूल वाला अदरक का पौधा",
    },
  },
  turmeric: {
    token: "IMG_CROP_TURMERIC",
    src: unsplash("photo-1768729341217-0e11cb959252", "3:4"),
    source: "https://unsplash.com/photos/BZvzze4XOwo",
    width: 600,
    height: 800,
    alt: {
      en: "Freshly harvested turmeric rhizomes with green stalks",
      kn: "ಹಸಿರು ದಂಟುಗಳಿರುವ ಹೊಸದಾಗಿ ಕೊಯ್ಲು ಮಾಡಿದ ಅರಿಶಿನದ ಗಡ್ಡೆಗಳು",
      hi: "हरे डंठलों के साथ ताज़ी खोदी गई हल्दी की गाँठें",
    },
  },
  arecanut: {
    token: "IMG_CROP_ARECANUT",
    src: unsplash("photo-1767632018975-217659cb271a", "3:4"),
    source: "https://unsplash.com/photos/gz5Wpy6QL6o",
    width: 600,
    height: 800,
    alt: {
      en: "A bunch of nuts ripening on a palm",
      kn: "ಮರದಲ್ಲಿ ಹಣ್ಣಾಗುತ್ತಿರುವ ಅಡಿಕೆ ಗೊನೆ",
      hi: "पेड़ पर पकता हुआ सुपारी का गुच्छा",
    },
  },
  banana: {
    token: "IMG_CROP_BANANA",
    src: unsplash("photo-1678998645884-2cbaa501be04", "3:4"),
    source: "https://unsplash.com/photos/xxwXxSLU5jY",
    width: 600,
    height: 800,
    alt: {
      en: "A banana bunch developing on the plant",
      kn: "ಗಿಡದಲ್ಲಿ ಬೆಳೆಯುತ್ತಿರುವ ಬಾಳೆಗೊನೆ",
      hi: "पौधे पर बढ़ता हुआ केले का घौद",
    },
  },
  pepper: {
    token: "IMG_CROP_PEPPER",
    src: unsplash("photo-1706707250965-1a0455b67fec", "3:4"),
    source: "https://unsplash.com/photos/07mSvSqbij4",
    width: 600,
    height: 800,
    alt: {
      en: "Green pepper spikes on the vine",
      kn: "ಬಳ್ಳಿಯಲ್ಲಿ ಹಸಿರು ಕಾಳುಮೆಣಸಿನ ಗೊಂಚಲುಗಳು",
      hi: "बेल पर काली मिर्च के हरे गुच्छे",
    },
  },
} satisfies Record<string, Photo>;
