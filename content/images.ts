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
    src: "/img/ginger-field.webp",
    width: 900,
    height: 1200,
    alt: {
      en: "Healthy ginger rows growing under sprinkler irrigation",
      kn: "ತುಂತುರು ನೀರಾವರಿಯಲ್ಲಿ ಬೆಳೆಯುತ್ತಿರುವ ಆರೋಗ್ಯಕರ ಶುಂಠಿ ಸಾಲುಗಳು",
      hi: "स्प्रिंकलर सिंचाई में उगती स्वस्थ अदरक की कतारें",
    },
  },
  ginger: {
    token: "IMG_CROP_GINGER",
    src: "/img/ginger-1.webp",
    width: 960,
    height: 1280,
    alt: {
      en: "A grower holding an uprooted plant in the field",
      kn: "ಹೊಲದಲ್ಲಿ ಬೇರುಸಹಿತ ಗಿಡವನ್ನು ಹಿಡಿದ ಬೆಳೆಗಾರ",
      hi: "खेत में जड़ सहित पौधा पकड़े एक किसान",
    },
  },
  turmeric: {
    token: "IMG_CROP_TURMERIC",
    src: "/img/turmeric-1.webp",
    width: 1040,
    height: 468,
    alt: {
      en: "Rows of turmeric plants in a field",
      kn: "ಹೊಲದಲ್ಲಿ ಅರಿಶಿನ ಗಿಡಗಳ ಸಾಲುಗಳು",
      hi: "खेत में हल्दी के पौधों की कतारें",
    },
  },
  arecanut: {
    token: "IMG_CROP_ARECANUT",
    src: "/img/arecanut-1.webp",
    width: 720,
    height: 1600,
    alt: {
      en: "Green arecanut bunches on a palm",
      kn: "ಅಡಿಕೆ ಮರದಲ್ಲಿ ಹಸಿರು ಅಡಿಕೆ ಗೊಂಚಲುಗಳು",
      hi: "पेड़ पर हरी सुपारी के गुच्छे",
    },
  },
  banana: {
    token: "IMG_CROP_BANANA",
    src: "/img/banana-1.webp",
    width: 468,
    height: 1040,
    alt: {
      en: "Green bananas growing above a purple blossom",
      kn: "ನೇರಳೆ ಹೂವಿನ ಮೇಲೆ ಬೆಳೆಯುತ್ತಿರುವ ಹಸಿರು ಬಾಳೆಗೊನೆ",
      hi: "बैंगनी फूल के ऊपर उगता हरे केलों का गुच्छा",
    },
  },
  arecanutSecond: {
    token: "IMG_CROP_ARECANUT_2",
    src: "/img/arecanut-2.webp",
    width: 468,
    height: 1040,
    alt: {
      en: "Fruit-bearing arecanut palms in a grove",
      kn: "ತೋಟದಲ್ಲಿ ಕಾಯಿ ಬಿಟ್ಟ ಅಡಿಕೆ ಮರಗಳು",
      hi: "बाग में फल लगे सुपारी के पेड़",
    },
  },
  bananaSecond: {
    token: "IMG_CROP_BANANA_2",
    src: "/img/banana-2.webp",
    width: 468,
    height: 1040,
    alt: {
      en: "A second banana bunch with its purple blossom",
      kn: "ನೇರಳೆ ಹೂವಿನೊಂದಿಗೆ ಮತ್ತೊಂದು ಬಾಳೆಗೊನೆ",
      hi: "बैंगनी फूल के साथ केले का दूसरा गुच्छा",
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
  spraying: {
    token: "IMG_SPRAYING",
    src: unsplash("photo-1709532388333-acf472eae61a", "4:3"),
    source: "https://unsplash.com/photos/gVU-wYT8no8",
    width: 800,
    height: 600,
    alt: {
      en: "A grower spraying a crop in the field",
      kn: "ಹೊಲದಲ್ಲಿ ಬೆಳೆಗೆ ಸಿಂಪಡಣೆ ಮಾಡುತ್ತಿರುವ ಬೆಳೆಗಾರ್ತಿ",
      hi: "खेत में फ़सल पर छिड़काव करती एक उत्पादक",
    },
  },
  premises: {
    token: "IMG_PREMISES",
    // Stand-in until the business sends a photo of its own office or lab.
    src: unsplash("photo-1642952273588-ed6fa28870ac", "4:3"),
    source: "https://unsplash.com/photos/bQ9y93kdk4c",
    width: 800,
    height: 600,
    alt: {
      en: "A handful of field soil, ready for testing",
      kn: "ಪರೀಕ್ಷೆಗೆ ಸಿದ್ಧವಾದ ಹೊಲದ ಒಂದು ಹಿಡಿ ಮಣ್ಣು",
      hi: "जाँच के लिए तैयार खेत की मुट्ठी भर मिट्टी",
    },
  },
} satisfies Record<string, Photo>;
