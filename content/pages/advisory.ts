import type { Locale } from "@/lib/i18n";
import type { CalculatorText } from "@/components/ui/AcreageCalculator";

type Faq = { q: string; a: string };

export type AdvisoryContent = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  sub: string;
  anchor: string;
  packageName: string;
  terms: string[];
  unit: string;
  perDay: string;
  perDaySub: string;
  includesHeading: string;
  includes: string[];
  cta: string;
  calculator: CalculatorText;
  seasonHeading: string;
  seasonIntro: string;
  seasonLabel: string;
  stages: { label: string; points: string[] }[];
  testimonialsHeading: string;
  resultsLink: string;
  cropsHeading: string;
  /** "{crop} advisory" */
  cropLink: string;
  faqHeading: string;
  faqs: Faq[];
  longform: string[];
  closing: string;
};

const en: AdvisoryContent = {
  title: "Season-long Crop Advisory, ₹10,000 per Acre | Horti Guru",
  description:
    "WhatsApp crop advisory for one full crop cycle: ₹10,000 for the first acre, ₹5,000 for each extra acre. Ginger, turmeric, arecanut, banana and pepper in Karnataka.",
  crumb: "Advisory",
  h1: "Season-long horticulture advisory",
  sub: "One expert who knows your field, for the full crop cycle.",
  anchor: "A single field visit costs ₹5,000.",
  packageName: "WhatsApp advisory",
  terms: ["One complete crop cycle", "or one year", "per acre"],
  unit: "per acre, per year",
  perDay: "That is ₹27 a day.",
  perDaySub: "About ₹833 a month. Less than one missed outbreak costs you.",
  includesHeading: "What is included",
  includes: [
    "Unlimited WhatsApp messages through the full crop cycle",
    "Photograph a problem, get an answer the same day",
    "Stage-by-stage guidance from land preparation to harvest",
    "Fertilizer and irrigation scheduling as the season moves",
    "Early warning when conditions favour disease",
    "An expert who works with your specific crop",
  ],
  cta: "Start this season",
  calculator: {
    heading: "Work out your price",
    acresLabel: "How many acres?",
    less: "One acre fewer",
    more: "One acre more",
    firstAcre: "First acre",
    extraAcres: "{n} additional acres",
    extraAcre: "1 additional acre",
    total: "Total",
    worksOut: "Works out to",
    perDay: "{amount} a day",
    cta: "Continue with {n} acres",
    ctaOne: "Continue with 1 acre",
  },
  seasonHeading: "What a season covers",
  seasonIntro: "Choose a stage to see what the advisory covers at that point.",
  seasonLabel: "Crop stages",
  stages: [
    {
      label: "Land preparation",
      points: [
        "Reading your soil test and what to correct before planting",
        "Bed layout and drainage suited to your crop and slope",
        "Green manure and organic matter plans",
      ],
    },
    {
      label: "Planting",
      points: [
        "Choosing and treating seed or planting material",
        "Planting time, spacing and depth",
        "Basal fertilizer dose worked out from your soil results",
      ],
    },
    {
      label: "Establishment",
      points: [
        "Watching for early rot, wilt and pest damage",
        "First irrigation and nutrient schedule",
        "Timing for gap filling, mulching and weeding",
      ],
    },
    {
      label: "Growth",
      points: [
        "Fertilizer and irrigation adjusted month by month",
        "Disease alerts ahead of heavy monsoon spells",
        "Same-day photo diagnosis of anything unusual",
      ],
    },
    {
      label: "Harvest",
      points: [
        "Judging maturity and the right harvest window",
        "Handling, curing and storage after harvest",
        "Planning next season from what this one taught",
      ],
    },
  ],
  testimonialsHeading: "What growers say",
  resultsLink: "Read more results from growers",
  cropsHeading: "Advisory for your crop",
  cropLink: "{crop} advisory",
  faqHeading: "Questions about advisory",
  faqs: [
    {
      q: "How do I send my questions?",
      a: "Over WhatsApp, to the number you receive when you enrol. Send photographs, a short video or a voice note. An expert who works with your crop replies the same day.",
    },
    {
      q: "What does one crop cycle or one year mean?",
      a: "For seasonal crops such as ginger and turmeric, advisory runs from land preparation to harvest. For perennial crops such as arecanut, banana and pepper, it runs for twelve months from the day you enrol.",
    },
    {
      q: "How is the price worked out for more than one acre?",
      a: "₹10,000 for the first acre and ₹5,000 for each additional acre. Three acres cost ₹20,000 for the season.",
    },
    {
      q: "Are field visits included?",
      a: "No. Advisory is delivered over WhatsApp. If a problem needs someone in your field, a visit can be booked for ₹5,000, with travel and accommodation charged separately.",
    },
    {
      q: "How do I pay?",
      a: "Directly by UPI from the checkout page. Our team checks the payment and adds you to advisory within {window}.",
    },
  ],
  longform: [
    "## What season-long advisory means in practice",
    "Most growers already know a great deal about their crop. What they rarely have is a second opinion at the moment it matters: when leaves start yellowing in one corner of the plot, when the forecast turns wet two weeks after planting, or when the input dealer recommends a product that costs more than the problem. Season-long advisory puts an expert on the other end of WhatsApp for that whole period, so these decisions are made with someone who has seen the same problem in many fields.",
    "In practice it looks like this. When you enrol, we ask for the basics of your plot: crop, variety, acreage, planting date, irrigation source, and any soil or water test results you already have. From then on you message whenever you need to. Most conversations start with a photograph. The reply tells you what is happening, what to do about it, how much to apply and when. If we need a closer look, we ask for another photograph or suggest a test.",
    "## How it differs from a one-off consultation",
    "A single consultation answers a single question. It is useful when you already know what to ask. Season-long advisory works the other way round. Because we follow your crop from preparation to harvest, we can tell you what to watch for before you see it, adjust fertilizer and irrigation as the crop moves from one stage to the next, and connect a problem in month six to something that happened in month two.",
    "It also changes the cost of asking. When every call is paid for, growers wait until they are sure something is wrong, and by then the window for a cheap fix has often closed. With the season paid for, the sensible thing is to ask early.",
    "## Timing is most of the value",
    "Horticulture crops reward timing more than almost anything else. A preventive drench for soft rot in ginger, a Bordeaux spray on arecanut before the heaviest monsoon weeks, a timely potash dose in banana before bunch emergence, or phytosanitary work in a pepper garden before the rains: each of these costs little when done on time and a great deal when done late. A large part of the advisory is simply knowing what comes next on your crop's calendar and telling you a week before it matters.",
    "## How it works across the five crops",
    "### Ginger and turmeric",
    "Advisory covers one full season, from bed preparation in the dry months to harvest. The focus is on seed rhizome health, drainage, rot prevention through the monsoon, and feeding the crop through its long growth phase.",
    "### Arecanut",
    "For an established garden, advisory runs for twelve months. The year is built around monsoon protection against fruit rot, nutrition after the rains, irrigation through the dry season, and keeping an eye on yellowing and root health.",
    "### Banana",
    "Advisory covers twelve months or one crop cycle. Banana responds strongly to fertigation and irrigation scheduling, so much of the work is planning and adjusting those, alongside sucker management and leaf spot control.",
    "### Pepper",
    "Advisory runs for twelve months. Pepper gardens are slow to build and quick to lose, so the year centres on soil health, shade and standard management, and protection against quick wilt through the monsoon.",
    "## Who it suits",
    "Season-long advisory suits growers who farm one to several acres of these crops and want a consistent point of contact rather than advice from whoever is nearest. It works particularly well alongside a soil test at the start of the season, because the fertilizer schedule can then be built from your own numbers. If you are not sure it is right for you, start with a single ₹250 call and decide afterwards.",
  ],
  closing: "Still deciding? Start with a single call, ₹250.",
};

const kn: AdvisoryContent = {
  title: "ಇಡೀ ಹಂಗಾಮಿನ ಬೆಳೆ ಸಲಹೆ, ಎಕರೆಗೆ ₹10,000 | Horti Guru",
  description:
    "ಒಂದು ಪೂರ್ಣ ಬೆಳೆ ಚಕ್ರಕ್ಕೆ ವಾಟ್ಸಾಪ್ ಬೆಳೆ ಸಲಹೆ: ಮೊದಲ ಎಕರೆಗೆ ₹10,000, ಪ್ರತಿ ಹೆಚ್ಚುವರಿ ಎಕರೆಗೆ ₹5,000. ಕರ್ನಾಟಕದಲ್ಲಿ ಶುಂಠಿ, ಅರಿಶಿನ, ಅಡಿಕೆ, ಬಾಳೆ ಮತ್ತು ಕಾಳುಮೆಣಸು.",
  crumb: "ಸಲಹೆ",
  h1: "ಇಡೀ ಹಂಗಾಮಿನ ತೋಟಗಾರಿಕೆ ಸಲಹೆ",
  sub: "ಇಡೀ ಬೆಳೆ ಚಕ್ರಕ್ಕೆ, ನಿಮ್ಮ ಹೊಲವನ್ನು ಬಲ್ಲ ಒಬ್ಬ ತಜ್ಞರು.",
  anchor: "ಒಂದು ಹೊಲ ಭೇಟಿಗೆ ₹5,000.",
  packageName: "ವಾಟ್ಸಾಪ್ ಸಲಹೆ",
  terms: ["ಒಂದು ಪೂರ್ಣ ಬೆಳೆ ಚಕ್ರ", "ಅಥವಾ ಒಂದು ವರ್ಷ", "ಪ್ರತಿ ಎಕರೆಗೆ"],
  unit: "ಪ್ರತಿ ಎಕರೆಗೆ, ಪ್ರತಿ ವರ್ಷಕ್ಕೆ",
  perDay: "ಅಂದರೆ ದಿನಕ್ಕೆ ₹27.",
  perDaySub: "ತಿಂಗಳಿಗೆ ಸುಮಾರು ₹833. ತಪ್ಪಿಹೋದ ಒಂದು ರೋಗದ ನಷ್ಟಕ್ಕಿಂತ ಕಡಿಮೆ.",
  includesHeading: "ಇದರಲ್ಲಿ ಏನೇನಿದೆ",
  includes: [
    "ಇಡೀ ಬೆಳೆ ಚಕ್ರದುದ್ದಕ್ಕೂ ಮಿತಿಯಿಲ್ಲದ ವಾಟ್ಸಾಪ್ ಸಂದೇಶಗಳು",
    "ಸಮಸ್ಯೆಯ ಫೋಟೋ ಕಳುಹಿಸಿ, ಅದೇ ದಿನ ಉತ್ತರ ಪಡೆಯಿರಿ",
    "ಭೂಮಿ ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ಹಂತ ಹಂತದ ಮಾರ್ಗದರ್ಶನ",
    "ಹಂಗಾಮು ಮುಂದುವರಿದಂತೆ ಗೊಬ್ಬರ ಮತ್ತು ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ",
    "ರೋಗಕ್ಕೆ ಅನುಕೂಲವಾದ ಹವಾಮಾನ ಬಂದಾಗ ಮುಂಚಿತ ಎಚ್ಚರಿಕೆ",
    "ನಿಮ್ಮ ಬೆಳೆಯಲ್ಲೇ ಕೆಲಸ ಮಾಡುವ ತಜ್ಞರು",
  ],
  cta: "ಈ ಹಂಗಾಮು ಆರಂಭಿಸಿ",
  calculator: {
    heading: "ನಿಮ್ಮ ಬೆಲೆಯನ್ನು ಲೆಕ್ಕ ಹಾಕಿ",
    acresLabel: "ಎಷ್ಟು ಎಕರೆ?",
    less: "ಒಂದು ಎಕರೆ ಕಡಿಮೆ",
    more: "ಒಂದು ಎಕರೆ ಹೆಚ್ಚು",
    firstAcre: "ಮೊದಲ ಎಕರೆ",
    extraAcres: "{n} ಹೆಚ್ಚುವರಿ ಎಕರೆ",
    extraAcre: "1 ಹೆಚ್ಚುವರಿ ಎಕರೆ",
    total: "ಒಟ್ಟು",
    worksOut: "ಅಂದರೆ",
    perDay: "ದಿನಕ್ಕೆ {amount}",
    cta: "{n} ಎಕರೆಯೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
    ctaOne: "1 ಎಕರೆಯೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
  },
  seasonHeading: "ಒಂದು ಹಂಗಾಮಿನಲ್ಲಿ ಏನೇನು ಒಳಗೊಂಡಿದೆ",
  seasonIntro: "ಆ ಹಂತದಲ್ಲಿ ಸಲಹೆ ಏನನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ ಎಂದು ನೋಡಲು ಒಂದು ಹಂತವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
  seasonLabel: "ಬೆಳೆಯ ಹಂತಗಳು",
  stages: [
    {
      label: "ಭೂಮಿ ಸಿದ್ಧತೆ",
      points: [
        "ನಿಮ್ಮ ಮಣ್ಣು ಪರೀಕ್ಷೆಯನ್ನು ಓದಿ, ನಾಟಿಗೆ ಮುನ್ನ ಏನು ಸರಿಪಡಿಸಬೇಕು",
        "ನಿಮ್ಮ ಬೆಳೆ ಮತ್ತು ಇಳಿಜಾರಿಗೆ ತಕ್ಕ ಮಡಿ ವಿನ್ಯಾಸ ಮತ್ತು ಬಸಿಗಾಲುವೆ",
        "ಹಸಿರೆಲೆ ಗೊಬ್ಬರ ಮತ್ತು ಸಾವಯವ ಪದಾರ್ಥದ ಯೋಜನೆ",
      ],
    },
    {
      label: "ನಾಟಿ",
      points: [
        "ಬೀಜ ಅಥವಾ ನಾಟಿ ವಸ್ತುವಿನ ಆಯ್ಕೆ ಮತ್ತು ಉಪಚಾರ",
        "ನಾಟಿಯ ಸಮಯ, ಅಂತರ ಮತ್ತು ಆಳ",
        "ಮಣ್ಣು ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ತಳಗೊಬ್ಬರದ ಪ್ರಮಾಣ",
      ],
    },
    {
      label: "ಬೇರೂರುವಿಕೆ",
      points: [
        "ಆರಂಭದ ಕೊಳೆ, ಸೊರಗು ಮತ್ತು ಕೀಟ ಹಾನಿಯ ಮೇಲೆ ಗಮನ",
        "ಮೊದಲ ನೀರಾವರಿ ಮತ್ತು ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿ",
        "ಖಾಲಿ ತುಂಬುವಿಕೆ, ಹೊದಿಕೆ ಮತ್ತು ಕಳೆ ತೆಗೆಯುವ ಸಮಯ",
      ],
    },
    {
      label: "ಬೆಳವಣಿಗೆ",
      points: [
        "ತಿಂಗಳಿಂದ ತಿಂಗಳಿಗೆ ಹೊಂದಿಸಿದ ಗೊಬ್ಬರ ಮತ್ತು ನೀರಾವರಿ",
        "ಭಾರಿ ಮಳೆಯ ಮುನ್ನ ರೋಗದ ಎಚ್ಚರಿಕೆ",
        "ಅಸಾಮಾನ್ಯವಾದ ಯಾವುದಕ್ಕೂ ಅದೇ ದಿನ ಫೋಟೋ ಮೂಲಕ ಪತ್ತೆ",
      ],
    },
    {
      label: "ಕೊಯ್ಲು",
      points: [
        "ಬಲಿತಿರುವಿಕೆ ಮತ್ತು ಸರಿಯಾದ ಕೊಯ್ಲಿನ ಸಮಯ",
        "ಕೊಯ್ಲಿನ ನಂತರ ನಿರ್ವಹಣೆ, ಸಂಸ್ಕರಣೆ ಮತ್ತು ಸಂಗ್ರಹಣೆ",
        "ಈ ಹಂಗಾಮಿನ ಅನುಭವದಿಂದ ಮುಂದಿನ ಹಂಗಾಮಿನ ಯೋಜನೆ",
      ],
    },
  ],
  testimonialsHeading: "ಬೆಳೆಗಾರರು ಏನು ಹೇಳುತ್ತಾರೆ",
  resultsLink: "ಬೆಳೆಗಾರರ ಇನ್ನಷ್ಟು ಫಲಿತಾಂಶಗಳನ್ನು ಓದಿ",
  cropsHeading: "ನಿಮ್ಮ ಬೆಳೆಗೆ ಸಲಹೆ",
  cropLink: "{crop} ಸಲಹೆ",
  faqHeading: "ಸಲಹೆಯ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು",
  faqs: [
    {
      q: "ನನ್ನ ಪ್ರಶ್ನೆಗಳನ್ನು ಹೇಗೆ ಕಳುಹಿಸಬೇಕು?",
      a: "ನೋಂದಾಯಿಸಿದಾಗ ನಿಮಗೆ ಸಿಗುವ ಸಂಖ್ಯೆಗೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ. ಫೋಟೋ, ಚಿಕ್ಕ ವಿಡಿಯೋ ಅಥವಾ ಧ್ವನಿ ಸಂದೇಶ ಕಳುಹಿಸಿ. ನಿಮ್ಮ ಬೆಳೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ತಜ್ಞರು ಅದೇ ದಿನ ಉತ್ತರಿಸುತ್ತಾರೆ.",
    },
    {
      q: "ಒಂದು ಬೆಳೆ ಚಕ್ರ ಅಥವಾ ಒಂದು ವರ್ಷ ಎಂದರೆ ಏನು?",
      a: "ಶುಂಠಿ, ಅರಿಶಿನದಂತಹ ಹಂಗಾಮಿನ ಬೆಳೆಗಳಿಗೆ ಸಲಹೆ ಭೂಮಿ ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ಇರುತ್ತದೆ. ಅಡಿಕೆ, ಬಾಳೆ, ಕಾಳುಮೆಣಸಿನಂತಹ ಬಹುವಾರ್ಷಿಕ ಬೆಳೆಗಳಿಗೆ ನೋಂದಾಯಿಸಿದ ದಿನದಿಂದ ಹನ್ನೆರಡು ತಿಂಗಳು ಇರುತ್ತದೆ.",
    },
    {
      q: "ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಎಕರೆಗೆ ಬೆಲೆ ಹೇಗೆ?",
      a: "ಮೊದಲ ಎಕರೆಗೆ ₹10,000 ಮತ್ತು ಪ್ರತಿ ಹೆಚ್ಚುವರಿ ಎಕರೆಗೆ ₹5,000. ಮೂರು ಎಕರೆಗೆ ಹಂಗಾಮಿಗೆ ₹20,000.",
    },
    {
      q: "ಹೊಲ ಭೇಟಿ ಸೇರಿದೆಯೇ?",
      a: "ಇಲ್ಲ. ಸಲಹೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನಡೆಯುತ್ತದೆ. ಸಮಸ್ಯೆಗೆ ಹೊಲಕ್ಕೇ ಬರಬೇಕಾದರೆ ₹5,000 ಕ್ಕೆ ಭೇಟಿ ಕಾಯ್ದಿರಿಸಬಹುದು; ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿ ವೆಚ್ಚ ಪ್ರತ್ಯೇಕ.",
    },
    {
      q: "ಪಾವತಿ ಹೇಗೆ ಮಾಡಬೇಕು?",
      a: "ಚೆಕ್‌ಔಟ್ ಪುಟದಿಂದ ನೇರವಾಗಿ UPI ಮೂಲಕ. ನಮ್ಮ ತಂಡ ಪಾವತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ {window} ಒಳಗೆ ನಿಮ್ಮನ್ನು ಸಲಹೆಗೆ ಸೇರಿಸುತ್ತದೆ.",
    },
  ],
  longform: [
    "## ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ ನಿಜವಾಗಿ ಹೇಗಿರುತ್ತದೆ",
    "ಹೆಚ್ಚಿನ ಬೆಳೆಗಾರರಿಗೆ ತಮ್ಮ ಬೆಳೆಯ ಬಗ್ಗೆ ಸಾಕಷ್ಟು ಗೊತ್ತಿರುತ್ತದೆ. ಅವರಿಗೆ ಅಪರೂಪವಾಗಿ ಸಿಗುವುದು, ಮುಖ್ಯವಾದ ಕ್ಷಣದಲ್ಲಿ ಎರಡನೇ ಅಭಿಪ್ರಾಯ: ಹೊಲದ ಒಂದು ಮೂಲೆಯಲ್ಲಿ ಎಲೆಗಳು ಹಳದಿಯಾಗಲು ಶುರುವಾದಾಗ, ನಾಟಿಯಾದ ಎರಡು ವಾರಕ್ಕೆ ಮಳೆ ಮುನ್ಸೂಚನೆ ಬಂದಾಗ, ಅಥವಾ ಅಂಗಡಿಯವರು ಸಮಸ್ಯೆಗಿಂತ ದುಬಾರಿ ಉತ್ಪನ್ನವನ್ನು ಸೂಚಿಸಿದಾಗ. ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ, ಆ ಇಡೀ ಅವಧಿಗೆ ವಾಟ್ಸಾಪ್‌ನ ಇನ್ನೊಂದು ತುದಿಯಲ್ಲಿ ಒಬ್ಬ ತಜ್ಞರನ್ನು ಇರಿಸುತ್ತದೆ. ಹೀಗಾಗಿ ಈ ನಿರ್ಧಾರಗಳನ್ನು ಅದೇ ಸಮಸ್ಯೆಯನ್ನು ಹಲವು ಹೊಲಗಳಲ್ಲಿ ನೋಡಿದವರೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳುತ್ತೀರಿ.",
    "ಇದು ಹೀಗೆ ನಡೆಯುತ್ತದೆ. ನೀವು ನೋಂದಾಯಿಸಿದಾಗ, ನಿಮ್ಮ ಜಮೀನಿನ ಮೂಲ ವಿವರಗಳನ್ನು ಕೇಳುತ್ತೇವೆ: ಬೆಳೆ, ತಳಿ, ಎಕರೆ, ನಾಟಿಯ ದಿನಾಂಕ, ನೀರಿನ ಮೂಲ, ಮತ್ತು ನಿಮ್ಮಲ್ಲಿರುವ ಮಣ್ಣು ಅಥವಾ ನೀರು ಪರೀಕ್ಷೆಯ ಫಲಿತಾಂಶಗಳು. ನಂತರ ಬೇಕಾದಾಗಲೆಲ್ಲ ಸಂದೇಶ ಕಳುಹಿಸಿ. ಹೆಚ್ಚಿನ ಮಾತುಕತೆ ಒಂದು ಫೋಟೋದಿಂದ ಶುರುವಾಗುತ್ತದೆ. ಉತ್ತರದಲ್ಲಿ ಏನಾಗುತ್ತಿದೆ, ಏನು ಮಾಡಬೇಕು, ಎಷ್ಟು ಹಾಕಬೇಕು, ಯಾವಾಗ ಎಂದು ತಿಳಿಸುತ್ತೇವೆ. ಹತ್ತಿರದಿಂದ ನೋಡಬೇಕಾದರೆ ಇನ್ನೊಂದು ಫೋಟೋ ಕೇಳುತ್ತೇವೆ ಅಥವಾ ಪರೀಕ್ಷೆ ಸೂಚಿಸುತ್ತೇವೆ.",
    "## ಒಂದು ಬಾರಿಯ ಸಮಾಲೋಚನೆಗಿಂತ ಹೇಗೆ ಭಿನ್ನ",
    "ಒಂದು ಸಮಾಲೋಚನೆ ಒಂದು ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸುತ್ತದೆ. ಏನು ಕೇಳಬೇಕು ಎಂದು ನಿಮಗೆ ಮೊದಲೇ ಗೊತ್ತಿದ್ದಾಗ ಅದು ಉಪಯುಕ್ತ. ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ ಇದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಗಮನಿಸುವುದರಿಂದ, ನೀವು ನೋಡುವ ಮೊದಲೇ ಏನನ್ನು ಗಮನಿಸಬೇಕು ಎಂದು ಹೇಳಬಹುದು, ಬೆಳೆ ಒಂದು ಹಂತದಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಹೋದಂತೆ ಗೊಬ್ಬರ ಮತ್ತು ನೀರಾವರಿ ಹೊಂದಿಸಬಹುದು, ಮತ್ತು ಆರನೇ ತಿಂಗಳ ಸಮಸ್ಯೆಯನ್ನು ಎರಡನೇ ತಿಂಗಳಲ್ಲಿ ನಡೆದುದರೊಂದಿಗೆ ಜೋಡಿಸಬಹುದು.",
    "ಇದು ಕೇಳುವುದರ ಖರ್ಚನ್ನೂ ಬದಲಾಯಿಸುತ್ತದೆ. ಪ್ರತಿ ಕರೆಗೂ ಹಣ ಕೊಡಬೇಕಾದಾಗ, ಏನೋ ತಪ್ಪಾಗಿದೆ ಎಂದು ಖಚಿತವಾಗುವವರೆಗೆ ಬೆಳೆಗಾರರು ಕಾಯುತ್ತಾರೆ, ಅಷ್ಟರಲ್ಲಿ ಅಗ್ಗದ ಪರಿಹಾರದ ಸಮಯ ಮುಗಿದಿರುತ್ತದೆ. ಹಂಗಾಮಿಗೆ ಪಾವತಿಸಿದ ಮೇಲೆ, ಬೇಗ ಕೇಳುವುದೇ ಜಾಣತನ.",
    "## ಸಮಯವೇ ಹೆಚ್ಚಿನ ಮೌಲ್ಯ",
    "ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳಲ್ಲಿ ಸರಿಯಾದ ಸಮಯಕ್ಕೆ ಸಿಗುವ ಫಲ ಬೇರೆ ಯಾವುದಕ್ಕೂ ಸಿಗುವುದಿಲ್ಲ. ಶುಂಠಿಯಲ್ಲಿ ಮೃದು ಕೊಳೆಗೆ ಮುಂಜಾಗ್ರತಾ ಡ್ರೆಂಚಿಂಗ್, ಭಾರಿ ಮಳೆಯ ವಾರಗಳ ಮುನ್ನ ಅಡಿಕೆಗೆ ಬೋರ್ಡೋ ಸಿಂಪಡಣೆ, ಗೊನೆ ಬರುವ ಮುನ್ನ ಬಾಳೆಗೆ ಸಕಾಲಿಕ ಪೊಟ್ಯಾಷ್, ಅಥವಾ ಮಳೆಗೆ ಮುನ್ನ ಕಾಳುಮೆಣಸಿನ ತೋಟದಲ್ಲಿ ಸ್ವಚ್ಛತಾ ಕೆಲಸ: ಸಮಯಕ್ಕೆ ಮಾಡಿದರೆ ಇವೆಲ್ಲ ಅಗ್ಗ, ತಡವಾದರೆ ದುಬಾರಿ. ಸಲಹೆಯ ದೊಡ್ಡ ಭಾಗವೆಂದರೆ, ನಿಮ್ಮ ಬೆಳೆಯ ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ಮುಂದೇನು ಎಂದು ತಿಳಿದು, ಅದು ಮುಖ್ಯವಾಗುವ ಒಂದು ವಾರ ಮುನ್ನ ನಿಮಗೆ ಹೇಳುವುದು.",
    "## ಐದು ಬೆಳೆಗಳಲ್ಲಿ ಇದು ಹೇಗೆ ನಡೆಯುತ್ತದೆ",
    "### ಶುಂಠಿ ಮತ್ತು ಅರಿಶಿನ",
    "ಬೇಸಿಗೆಯ ಮಡಿ ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ಒಂದು ಪೂರ್ಣ ಹಂಗಾಮು. ಬೀಜದ ಗಡ್ಡೆಯ ಆರೋಗ್ಯ, ಬಸಿಗಾಲುವೆ, ಮಳೆಗಾಲದಲ್ಲಿ ಕೊಳೆ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ದೀರ್ಘ ಬೆಳವಣಿಗೆಯ ಹಂತದಲ್ಲಿ ಪೋಷಣೆಯ ಮೇಲೆ ಗಮನ.",
    "### ಅಡಿಕೆ",
    "ಸ್ಥಾಪಿತ ತೋಟಕ್ಕೆ ಹನ್ನೆರಡು ತಿಂಗಳು. ಮಳೆಗಾಲದಲ್ಲಿ ಕೊಳೆ ರೋಗದಿಂದ ರಕ್ಷಣೆ, ಮಳೆಯ ನಂತರ ಪೋಷಣೆ, ಬೇಸಿಗೆಯಲ್ಲಿ ನೀರಾವರಿ, ಮತ್ತು ಹಳದಿಯಾಗುವಿಕೆ ಹಾಗೂ ಬೇರಿನ ಆರೋಗ್ಯದ ಮೇಲೆ ನಿಗಾ.",
    "### ಬಾಳೆ",
    "ಹನ್ನೆರಡು ತಿಂಗಳು ಅಥವಾ ಒಂದು ಬೆಳೆ ಚಕ್ರ. ಬಾಳೆ ರಸಾವರಿ ಮತ್ತು ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿಗೆ ಚೆನ್ನಾಗಿ ಸ್ಪಂದಿಸುತ್ತದೆ. ಹೀಗಾಗಿ ಕಂದು ನಿರ್ವಹಣೆ ಮತ್ತು ಎಲೆಚುಕ್ಕೆ ನಿಯಂತ್ರಣದ ಜೊತೆಗೆ ಅವುಗಳ ಯೋಜನೆಯೇ ಹೆಚ್ಚಿನ ಕೆಲಸ.",
    "### ಕಾಳುಮೆಣಸು",
    "ಹನ್ನೆರಡು ತಿಂಗಳು. ಕಾಳುಮೆಣಸಿನ ತೋಟ ಕಟ್ಟಲು ನಿಧಾನ, ಕಳೆದುಕೊಳ್ಳಲು ಬೇಗ. ಹೀಗಾಗಿ ವರ್ಷ ಮಣ್ಣಿನ ಆರೋಗ್ಯ, ನೆರಳು ಮತ್ತು ಆಧಾರ ಮರಗಳ ನಿರ್ವಹಣೆ, ಹಾಗೂ ಮಳೆಗಾಲದಲ್ಲಿ ಶೀಘ್ರ ಸೊರಗಿನಿಂದ ರಕ್ಷಣೆಯ ಸುತ್ತ ಇರುತ್ತದೆ.",
    "## ಇದು ಯಾರಿಗೆ ಸೂಕ್ತ",
    "ಈ ಬೆಳೆಗಳನ್ನು ಒಂದರಿಂದ ಹಲವು ಎಕರೆಯಲ್ಲಿ ಬೆಳೆಯುವ, ಹತ್ತಿರದಲ್ಲಿ ಸಿಕ್ಕವರ ಸಲಹೆಯ ಬದಲು ಸ್ಥಿರ ಸಂಪರ್ಕ ಬಯಸುವ ಬೆಳೆಗಾರರಿಗೆ ಇದು ಸೂಕ್ತ. ಹಂಗಾಮಿನ ಆರಂಭದಲ್ಲಿ ಮಣ್ಣು ಪರೀಕ್ಷೆಯೊಂದಿಗೆ ಇದು ಇನ್ನೂ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಏಕೆಂದರೆ ಗೊಬ್ಬರ ವೇಳಾಪಟ್ಟಿಯನ್ನು ನಿಮ್ಮದೇ ಅಂಕಿಗಳಿಂದ ರೂಪಿಸಬಹುದು. ನಿಮಗೆ ಸೂಕ್ತವೇ ಎಂದು ಖಚಿತವಿಲ್ಲದಿದ್ದರೆ, ₹250 ರ ಒಂದು ಕರೆಯಿಂದ ಶುರುಮಾಡಿ ನಂತರ ನಿರ್ಧರಿಸಿ.",
  ],
  closing: "ಇನ್ನೂ ಯೋಚಿಸುತ್ತಿದ್ದೀರಾ? ₹250 ರ ಒಂದು ಕರೆಯಿಂದ ಆರಂಭಿಸಿ.",
};

const hi: AdvisoryContent = {
  title: "पूरे सीज़न की फ़सल सलाह, ₹10,000 प्रति एकड़ | Horti Guru",
  description:
    "एक पूरे फ़सल चक्र के लिए व्हाट्सऐप फ़सल सलाह: पहले एकड़ के लिए ₹10,000, हर अतिरिक्त एकड़ के लिए ₹5,000। कर्नाटक में अदरक, हल्दी, सुपारी, केला और काली मिर्च।",
  crumb: "सलाह",
  h1: "पूरे सीज़न की बागवानी सलाह",
  sub: "पूरे फ़सल चक्र के लिए, एक विशेषज्ञ जो आपके खेत को जानता है।",
  anchor: "खेत का एक दौरा ₹5,000 का है।",
  packageName: "व्हाट्सऐप सलाह",
  terms: ["एक पूरा फ़सल चक्र", "या एक साल", "प्रति एकड़"],
  unit: "प्रति एकड़, प्रति वर्ष",
  perDay: "यानी ₹27 रोज़।",
  perDaySub: "लगभग ₹833 महीना। एक छूटी हुई बीमारी के नुकसान से भी कम।",
  includesHeading: "इसमें क्या शामिल है",
  includes: [
    "पूरे फ़सल चक्र में असीमित व्हाट्सऐप संदेश",
    "समस्या की फ़ोटो भेजें, उसी दिन जवाब पाएँ",
    "भूमि की तैयारी से खुदाई तक हर चरण का मार्गदर्शन",
    "सीज़न के साथ बदलता खाद और सिंचाई शेड्यूल",
    "जब मौसम रोग के अनुकूल हो तो पहले से चेतावनी",
    "आपकी फ़सल पर ही काम करने वाले विशेषज्ञ",
  ],
  cta: "इस सीज़न शुरू करें",
  calculator: {
    heading: "अपनी कीमत निकालें",
    acresLabel: "कितने एकड़?",
    less: "एक एकड़ कम",
    more: "एक एकड़ ज़्यादा",
    firstAcre: "पहला एकड़",
    extraAcres: "{n} अतिरिक्त एकड़",
    extraAcre: "1 अतिरिक्त एकड़",
    total: "कुल",
    worksOut: "यानी",
    perDay: "{amount} रोज़",
    cta: "{n} एकड़ के साथ आगे बढ़ें",
    ctaOne: "1 एकड़ के साथ आगे बढ़ें",
  },
  seasonHeading: "एक सीज़न में क्या-क्या शामिल है",
  seasonIntro: "किसी चरण को चुनें और देखें कि उस समय सलाह में क्या शामिल है।",
  seasonLabel: "फ़सल के चरण",
  stages: [
    {
      label: "भूमि की तैयारी",
      points: [
        "मिट्टी जाँच पढ़कर, रोपाई से पहले क्या सुधारना है",
        "आपकी फ़सल और ढलान के हिसाब से क्यारी और जल निकासी",
        "हरी खाद और जैविक पदार्थ की योजना",
      ],
    },
    {
      label: "रोपाई",
      points: [
        "बीज या रोपण सामग्री का चुनाव और उपचार",
        "रोपाई का समय, दूरी और गहराई",
        "मिट्टी जाँच के आधार पर आधार खाद की मात्रा",
      ],
    },
    {
      label: "स्थापना",
      points: [
        "शुरुआती सड़न, मुरझान और कीट नुकसान पर नज़र",
        "पहली सिंचाई और पोषण शेड्यूल",
        "खाली जगह भरने, मल्चिंग और निराई का समय",
      ],
    },
    {
      label: "बढ़वार",
      points: [
        "महीने दर महीने बदलती खाद और सिंचाई",
        "भारी बारिश से पहले रोग की चेतावनी",
        "किसी भी असामान्य बात की उसी दिन फ़ोटो से पहचान",
      ],
    },
    {
      label: "खुदाई",
      points: [
        "फ़सल पकने और सही खुदाई के समय की पहचान",
        "खुदाई के बाद रखरखाव, उपचार और भंडारण",
        "इस सीज़न के अनुभव से अगले सीज़न की योजना",
      ],
    },
  ],
  testimonialsHeading: "उत्पादक क्या कहते हैं",
  resultsLink: "उत्पादकों के और परिणाम पढ़ें",
  cropsHeading: "आपकी फ़सल के लिए सलाह",
  cropLink: "{crop} सलाह",
  faqHeading: "सलाह के बारे में सवाल",
  faqs: [
    {
      q: "मैं अपने सवाल कैसे भेजूँ?",
      a: "पंजीकरण पर मिलने वाले नंबर पर व्हाट्सऐप से। फ़ोटो, छोटा वीडियो या वॉइस नोट भेजें। आपकी फ़सल पर काम करने वाले विशेषज्ञ उसी दिन जवाब देते हैं।",
    },
    {
      q: "एक फ़सल चक्र या एक साल का क्या मतलब है?",
      a: "अदरक और हल्दी जैसी मौसमी फ़सलों के लिए सलाह भूमि की तैयारी से खुदाई तक चलती है। सुपारी, केला और काली मिर्च जैसी बहुवर्षीय फ़सलों के लिए पंजीकरण के दिन से बारह महीने।",
    },
    {
      q: "एक से ज़्यादा एकड़ की कीमत कैसे तय होती है?",
      a: "पहले एकड़ के लिए ₹10,000 और हर अतिरिक्त एकड़ के लिए ₹5,000। तीन एकड़ का पूरा सीज़न ₹20,000 का है।",
    },
    {
      q: "क्या खेत का दौरा शामिल है?",
      a: "नहीं। सलाह व्हाट्सऐप पर दी जाती है। अगर समस्या के लिए किसी को खेत पर आना ज़रूरी हो, तो ₹5,000 में दौरा बुक किया जा सकता है; यात्रा और ठहरने का ख़र्च अलग।",
    },
    {
      q: "भुगतान कैसे करूँ?",
      a: "चेकआउट पेज से सीधे UPI द्वारा। हमारी टीम भुगतान जाँचकर {window} के भीतर आपको सलाह सेवा में जोड़ देती है।",
    },
  ],
  longform: [
    "## पूरे सीज़न की सलाह असल में कैसी होती है",
    "ज़्यादातर उत्पादक अपनी फ़सल के बारे में काफ़ी कुछ जानते हैं। जो उन्हें कम ही मिलता है, वह है ज़रूरी मौके पर दूसरी राय: जब खेत के एक कोने में पत्तियाँ पीली होने लगें, जब रोपाई के दो हफ़्ते बाद बारिश का अनुमान आए, या जब दुकानदार समस्या से महँगा उत्पाद सुझाए। पूरे सीज़न की सलाह उस पूरी अवधि के लिए व्हाट्सऐप के दूसरी ओर एक विशेषज्ञ रखती है, ताकि ये फ़ैसले ऐसे व्यक्ति के साथ हों जिसने वही समस्या कई खेतों में देखी हो।",
    "यह ऐसे चलता है। पंजीकरण पर हम आपके खेत की बुनियादी जानकारी लेते हैं: फ़सल, किस्म, एकड़, रोपाई की तारीख़, पानी का स्रोत, और आपके पास मौजूद मिट्टी या पानी जाँच के नतीजे। उसके बाद जब भी ज़रूरत हो, संदेश भेजें। ज़्यादातर बातचीत एक फ़ोटो से शुरू होती है। जवाब में बताया जाता है कि क्या हो रहा है, क्या करना है, कितना डालना है और कब। अगर और क़रीब से देखना हो, तो हम दूसरी फ़ोटो माँगते हैं या जाँच सुझाते हैं।",
    "## एक बार के परामर्श से यह कैसे अलग है",
    "एक परामर्श एक सवाल का जवाब देता है। यह तब काम का है जब आपको पहले से पता हो कि क्या पूछना है। पूरे सीज़न की सलाह उल्टी तरह काम करती है। क्योंकि हम तैयारी से खुदाई तक आपकी फ़सल के साथ रहते हैं, हम बता सकते हैं कि किस चीज़ पर नज़र रखनी है इससे पहले कि वह दिखे, फ़सल के एक चरण से दूसरे में जाने पर खाद और सिंचाई बदल सकते हैं, और छठे महीने की समस्या को दूसरे महीने की किसी बात से जोड़ सकते हैं।",
    "इससे पूछने की कीमत भी बदल जाती है। जब हर कॉल के पैसे लगते हैं, तो उत्पादक तब तक रुकते हैं जब तक पक्का न हो जाए कि कुछ गड़बड़ है, और तब तक सस्ते इलाज का समय अक्सर निकल चुका होता है। सीज़न का भुगतान हो जाने पर, जल्दी पूछना ही समझदारी है।",
    "## सबसे ज़्यादा कीमत समय की है",
    "बागवानी फ़सलें सही समय का जितना फल देती हैं, उतना किसी और चीज़ का नहीं। अदरक में नरम सड़न के लिए बचाव ड्रेंचिंग, सबसे भारी बारिश के हफ़्तों से पहले सुपारी पर बोर्डो छिड़काव, घौद निकलने से पहले केले को समय पर पोटाश, या बारिश से पहले काली मिर्च के बाग़ में सफ़ाई का काम: समय पर करें तो ये सब सस्ते हैं, देर से करें तो बहुत महँगे। सलाह का बड़ा हिस्सा बस यह जानना है कि आपकी फ़सल के कैलेंडर में आगे क्या है, और उसके ज़रूरी होने से एक हफ़्ता पहले आपको बताना।",
    "## पाँच फ़सलों में यह कैसे काम करती है",
    "### अदरक और हल्दी",
    "गर्मियों में क्यारी की तैयारी से खुदाई तक एक पूरा सीज़न। ध्यान बीज प्रकंद की सेहत, जल निकासी, मानसून में सड़न की रोकथाम, और लंबी बढ़वार के दौरान पोषण पर रहता है।",
    "### सुपारी",
    "स्थापित बाग़ के लिए बारह महीने। साल मानसून में फल सड़न से बचाव, बारिश के बाद पोषण, सूखे मौसम में सिंचाई, और पीलेपन व जड़ की सेहत पर नज़र के इर्द-गिर्द बनता है।",
    "### केला",
    "बारह महीने या एक फ़सल चक्र। केला फ़र्टिगेशन और सिंचाई शेड्यूल पर अच्छी प्रतिक्रिया देता है, इसलिए सकर प्रबंधन और पत्ती धब्बा नियंत्रण के साथ इन्हीं की योजना और बदलाव ज़्यादातर काम है।",
    "### काली मिर्च",
    "बारह महीने। काली मिर्च का बाग़ बनने में धीमा और खोने में तेज़ है, इसलिए साल मिट्टी की सेहत, छाया और सहारा पेड़ों के प्रबंधन, और मानसून में शीघ्र मुरझान से बचाव पर केंद्रित रहता है।",
    "## यह किसके लिए सही है",
    "यह उन उत्पादकों के लिए सही है जो इन फ़सलों को एक से कई एकड़ में उगाते हैं और जो कोई पास में मिल जाए उसकी सलाह के बजाय एक भरोसेमंद संपर्क चाहते हैं। सीज़न की शुरुआत में मिट्टी जाँच के साथ यह और अच्छा काम करती है, क्योंकि तब खाद का शेड्यूल आपके अपने आँकड़ों से बनता है। अगर पक्का नहीं है कि यह आपके लिए सही है, तो ₹250 की एक कॉल से शुरू करें और बाद में तय करें।",
  ],
  closing: "अभी सोच रहे हैं? ₹250 की एक कॉल से शुरू करें।",
};

const advisory: Record<Locale, AdvisoryContent> = { en, kn, hi };
export default advisory;
