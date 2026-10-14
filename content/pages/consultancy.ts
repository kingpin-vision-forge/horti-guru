import type { Locale } from "@/lib/i18n";
import type { ServiceId } from "@/lib/pricing";

export type ConsultancyService = {
  id: ServiceId;
  name: string;
  /** Unit after the price, e.g. "per call". Empty for a flat price. */
  unit: string;
  line: string;
  detail: string[];
  /** Shown in the collapsed row at body size, e.g. the travel note. */
  note?: string;
};

export type ConsultancyContent = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  sub: string;
  listHeading: string;
  book: string;
  enquire: string;
  onRequest: string;
  services: ConsultancyService[];
  advisoryHeading: string;
  advisoryBody: string;
  advisoryLink: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  longform: string[];
  closing: string;
};

const travelEn = "Travel and accommodation charged separately.";

const en: ConsultancyContent = {
  title: "Agriculture Consultant, Karnataka | Horti Guru",
  description:
    "Horticulture consultancy in Karnataka: ₹250 calls, irrigation and nutrient scheduling, ₹5,000 field visits by an agronomist and ₹10,000 crop planning reports.",
  crumb: "Consultancy",
  h1: "Horticulture consultancy and field visits",
  sub: "Pay for exactly what you need, from a five-minute call to a full crop plan.",
  listHeading: "Services and prices",
  book: "Book",
  enquire: "Ask about this",
  onRequest: "On request",
  services: [
    {
      id: "call",
      name: "Online consultation",
      unit: "per call",
      line: "Five minutes with an expert. One question, one clear answer.",
      detail: [
        "A phone or WhatsApp call of up to five minutes with an expert who works with your crop.",
        "Best for one specific question: a symptom you have photographed, a product you have been offered, or a dose you are unsure of. Send photographs before the call so the time is spent on the answer.",
      ],
    },
    {
      id: "irrigation",
      name: "Irrigation scheduling",
      unit: "",
      line: "A watering plan matched to your soil, crop and water availability.",
      detail: [
        "How much to water, how often and by which method, stage by stage through the season.",
        "Built from your crop, soil type, irrigation source and system. If you have a water test, the plan accounts for its salt content.",
      ],
    },
    {
      id: "nutrient",
      name: "Nutrient scheduling",
      unit: "per crop",
      line: "A season-long feeding plan built from your soil test results.",
      detail: [
        "Which fertilizers, how much and when, from basal dose to the last top dressing, worked out from your soil test.",
        "Includes organic inputs and fertigation where you use drip. If you do not have a soil test yet, we will ask for one first.",
      ],
    },
    {
      id: "visit",
      name: "Field visit",
      unit: "per visit",
      line: "An expert walks your field with you.",
      note: travelEn,
      detail: [
        "An expert visits your farm, walks the crop with you, looks at the soil, drainage and plant health, and explains what they see.",
        "You receive written recommendations after the visit. Travel and accommodation are charged at actual cost and agreed before the visit is confirmed.",
      ],
    },
    {
      id: "planning",
      name: "Crop planning report",
      unit: "",
      line: "Feasibility and full cost budgeting before you commit to a season.",
      detail: [
        "For a new crop, a new plot or a large expansion. The report covers whether the crop suits your land, water and market, and a full cost budget from land preparation to harvest.",
        "Useful when you are borrowing for the season or deciding between crops.",
      ],
    },
    {
      id: "handholding",
      name: "Entrepreneurial handholding",
      unit: "",
      line: "Support for growers moving into processing or trade.",
      detail: [
        "For growers and groups taking the next step: drying and processing, grading, packing or selling direct.",
        "Scope and fees are agreed after a first conversation about what you want to build.",
      ],
    },
  ],
  advisoryHeading: "Need help through the whole season?",
  advisoryBody: "Season-long advisory gives you WhatsApp access to an expert from land preparation to harvest, for ₹10,000 per acre.",
  advisoryLink: "See season-long advisory",
  faqHeading: "Questions about consultancy",
  faqs: [
    {
      q: "What happens after I book a call?",
      a: "We confirm a time on WhatsApp. Send photographs of the problem before the call so the five minutes are spent on the answer.",
    },
    {
      q: "Why is travel charged separately for field visits?",
      a: "Farms are spread across the state and travel costs vary a great deal. We agree the travel and accommodation cost with you before the visit is confirmed, so the final bill holds no surprises.",
    },
    {
      q: "Do I need a soil test for nutrient scheduling?",
      a: "Yes. The schedule is worked out from your own soil results. If you do not have a recent test, book one on the lab testing page first.",
    },
    {
      q: "Can I move from a consultation to season-long advisory?",
      a: "Yes. Many growers start with a single call. You can enrol in season-long advisory at any point in the season.",
    },
  ],
  longform: [
    "## When a consultation is the right choice",
    "Not every problem needs a season of support. Sometimes you have one question, a single decision to make, or a plot that needs to be seen in person. Consultancy is priced per service so you pay only for what you need, and every price is listed on this page.",
    "A five-minute online consultation is the quickest route to an answer. It works best when you can describe the problem precisely and send a clear photograph: a leaf with an unfamiliar spot, a bed where plants are wilting, a product label you have been handed. The expert will tell you what it is likely to be, what to do now, and whether anything else needs checking.",
    "## Scheduling: water and nutrients",
    "Irrigation and fertilizer are where most money is spent and where habit most often replaces planning. An irrigation schedule sets how much water the crop needs at each stage, matched to your soil's ability to hold it and to the water you actually have. On sandy or sloping land this can mean shorter, more frequent irrigations; on heavy soil the opposite.",
    "A nutrient schedule does the same for fertilizer. Starting from a soil test, it sets the basal dose and each top dressing through the season, including organic manures, bio fertilizers and micronutrients where they are needed. Growers are often surprised by what they can stop applying. The schedule is specific to one crop on one plot, which is why it is priced per crop.",
    "## Field visits",
    "Some problems cannot be solved from a photograph. Patchy growth across a field, drainage that fails in heavy rain, a disease that keeps returning in the same corner: these need someone to walk the plot. During a field visit the expert looks at the crop, the soil profile, drainage and the history of the field with you, and you receive written recommendations afterwards.",
    "The visit fee is ₹5,000. Travel and accommodation are charged separately at actual cost, because farms are spread across Karnataka and the cost of reaching them varies widely. We agree that cost with you before confirming the visit.",
    "## Planning before you commit",
    "A crop planning report is for decisions that tie up capital: planting ginger on newly leased land, converting a plot to banana under drip, or establishing a new arecanut and pepper garden. The report looks at whether the crop suits your land, water and market, and builds a full cost budget from land preparation to harvest. It gives you a clear picture before you borrow or commit.",
    "## Beyond the farm gate",
    "Entrepreneurial handholding is for growers and groups who want to process, grade, pack or sell their own produce. Because every venture is different, we agree its scope and fee after a first conversation.",
    "If you find yourself needing advice repeatedly through the season, season-long advisory is usually better value than individual consultations.",
  ],
  closing: "Not sure which you need? Start with a single call, ₹250.",
};

const travelKn = "ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿ ವೆಚ್ಚ ಪ್ರತ್ಯೇಕ.";

const kn: ConsultancyContent = {
  title: "ಕರ್ನಾಟಕದಲ್ಲಿ ಕೃಷಿ ಸಲಹೆಗಾರರು, ₹250 ರಿಂದ | Horti Guru",
  description:
    "ಕರ್ನಾಟಕದಲ್ಲಿ ತೋಟಗಾರಿಕೆ ಸಮಾಲೋಚನೆ: ₹250 ಕರೆಗಳು, ನೀರಾವರಿ ಮತ್ತು ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿ, ₹5,000 ಹೊಲ ಭೇಟಿ ಮತ್ತು ₹10,000 ಬೆಳೆ ಯೋಜನಾ ವರದಿ.",
  crumb: "ಸಮಾಲೋಚನೆ",
  h1: "ತೋಟಗಾರಿಕೆ ಸಮಾಲೋಚನೆ ಮತ್ತು ಹೊಲ ಭೇಟಿ",
  sub: "ಐದು ನಿಮಿಷದ ಕರೆಯಿಂದ ಪೂರ್ಣ ಬೆಳೆ ಯೋಜನೆಯವರೆಗೆ, ನಿಮಗೆ ಬೇಕಾದುದಕ್ಕೆ ಮಾತ್ರ ಪಾವತಿಸಿ.",
  listHeading: "ಸೇವೆಗಳು ಮತ್ತು ಬೆಲೆಗಳು",
  book: "ಕಾಯ್ದಿರಿಸಿ",
  enquire: "ಇದರ ಬಗ್ಗೆ ಕೇಳಿ",
  onRequest: "ವಿಚಾರಿಸಿದಾಗ",
  services: [
    {
      id: "call",
      name: "ಆನ್‌ಲೈನ್ ಸಮಾಲೋಚನೆ",
      unit: "ಪ್ರತಿ ಕರೆಗೆ",
      line: "ತಜ್ಞರೊಂದಿಗೆ ಐದು ನಿಮಿಷ. ಒಂದು ಪ್ರಶ್ನೆ, ಒಂದು ಸ್ಪಷ್ಟ ಉತ್ತರ.",
      detail: [
        "ನಿಮ್ಮ ಬೆಳೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುವ ತಜ್ಞರೊಂದಿಗೆ ಐದು ನಿಮಿಷದವರೆಗಿನ ಫೋನ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಕರೆ.",
        "ಒಂದು ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಗೆ ಸೂಕ್ತ: ನೀವು ಫೋಟೋ ತೆಗೆದ ಲಕ್ಷಣ, ನಿಮಗೆ ಸೂಚಿಸಿದ ಉತ್ಪನ್ನ, ಅಥವಾ ಖಚಿತವಿಲ್ಲದ ಪ್ರಮಾಣ. ಸಮಯ ಉತ್ತರಕ್ಕೇ ಬಳಕೆಯಾಗಲಿ ಎಂದು ಕರೆಗೆ ಮುನ್ನ ಫೋಟೋ ಕಳುಹಿಸಿ.",
      ],
    },
    {
      id: "irrigation",
      name: "ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ",
      unit: "",
      line: "ನಿಮ್ಮ ಮಣ್ಣು, ಬೆಳೆ ಮತ್ತು ನೀರಿನ ಲಭ್ಯತೆಗೆ ತಕ್ಕ ನೀರಾವರಿ ಯೋಜನೆ.",
      detail: [
        "ಹಂಗಾಮಿನುದ್ದಕ್ಕೂ ಹಂತ ಹಂತವಾಗಿ ಎಷ್ಟು ನೀರು, ಎಷ್ಟು ಬಾರಿ ಮತ್ತು ಯಾವ ವಿಧಾನದಲ್ಲಿ.",
        "ನಿಮ್ಮ ಬೆಳೆ, ಮಣ್ಣಿನ ಪ್ರಕಾರ, ನೀರಿನ ಮೂಲ ಮತ್ತು ವ್ಯವಸ್ಥೆಯ ಆಧಾರದ ಮೇಲೆ. ನೀರಿನ ಪರೀಕ್ಷೆ ಇದ್ದರೆ, ಅದರ ಲವಣಾಂಶವನ್ನೂ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.",
      ],
    },
    {
      id: "nutrient",
      name: "ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿ",
      unit: "ಪ್ರತಿ ಬೆಳೆಗೆ",
      line: "ನಿಮ್ಮ ಮಣ್ಣು ಪರೀಕ್ಷೆಯ ಆಧಾರದ ಮೇಲೆ ಇಡೀ ಹಂಗಾಮಿನ ಪೋಷಣಾ ಯೋಜನೆ.",
      detail: [
        "ತಳಗೊಬ್ಬರದಿಂದ ಕೊನೆಯ ಮೇಲುಗೊಬ್ಬರದವರೆಗೆ ಯಾವ ಗೊಬ್ಬರ, ಎಷ್ಟು, ಯಾವಾಗ, ನಿಮ್ಮ ಮಣ್ಣು ಪರೀಕ್ಷೆಯಿಂದ ಲೆಕ್ಕ ಹಾಕಿದ್ದು.",
        "ಸಾವಯವ ಒಳಸುರಿಗಳು ಮತ್ತು ಹನಿ ನೀರಾವರಿ ಇದ್ದರೆ ರಸಾವರಿ ಸೇರಿದೆ. ಮಣ್ಣು ಪರೀಕ್ಷೆ ಇಲ್ಲದಿದ್ದರೆ, ಮೊದಲು ಅದನ್ನು ಕೇಳುತ್ತೇವೆ.",
      ],
    },
    {
      id: "visit",
      name: "ಹೊಲ ಭೇಟಿ",
      unit: "ಪ್ರತಿ ಭೇಟಿಗೆ",
      line: "ತಜ್ಞರು ನಿಮ್ಮೊಂದಿಗೆ ನಿಮ್ಮ ಹೊಲದಲ್ಲಿ ನಡೆಯುತ್ತಾರೆ.",
      note: travelKn,
      detail: [
        "ತಜ್ಞರು ನಿಮ್ಮ ಜಮೀನಿಗೆ ಬಂದು, ನಿಮ್ಮೊಂದಿಗೆ ಬೆಳೆಯನ್ನು ನೋಡುತ್ತಾರೆ, ಮಣ್ಣು, ಬಸಿಗಾಲುವೆ ಮತ್ತು ಗಿಡದ ಆರೋಗ್ಯವನ್ನು ಪರಿಶೀಲಿಸಿ, ಕಂಡದ್ದನ್ನು ವಿವರಿಸುತ್ತಾರೆ.",
        "ಭೇಟಿಯ ನಂತರ ಲಿಖಿತ ಶಿಫಾರಸುಗಳು ಸಿಗುತ್ತವೆ. ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿಯನ್ನು ನಿಜವಾದ ವೆಚ್ಚದಲ್ಲಿ ವಿಧಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಭೇಟಿ ದೃಢೀಕರಿಸುವ ಮುನ್ನ ಒಪ್ಪಿಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
      ],
    },
    {
      id: "planning",
      name: "ಬೆಳೆ ಯೋಜನಾ ವರದಿ",
      unit: "",
      line: "ಹಂಗಾಮಿಗೆ ಬದ್ಧರಾಗುವ ಮುನ್ನ ಕಾರ್ಯಸಾಧ್ಯತೆ ಮತ್ತು ಪೂರ್ಣ ವೆಚ್ಚದ ಅಂದಾಜು.",
      detail: [
        "ಹೊಸ ಬೆಳೆ, ಹೊಸ ಜಮೀನು ಅಥವಾ ದೊಡ್ಡ ವಿಸ್ತರಣೆಗೆ. ಬೆಳೆ ನಿಮ್ಮ ಭೂಮಿ, ನೀರು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ಹೊಂದುತ್ತದೆಯೇ, ಮತ್ತು ಭೂಮಿ ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ಪೂರ್ಣ ವೆಚ್ಚದ ಅಂದಾಜು.",
        "ಹಂಗಾಮಿಗೆ ಸಾಲ ಮಾಡುವಾಗ ಅಥವಾ ಬೆಳೆಗಳ ನಡುವೆ ಆಯ್ಕೆ ಮಾಡುವಾಗ ಉಪಯುಕ್ತ.",
      ],
    },
    {
      id: "handholding",
      name: "ಉದ್ಯಮಶೀಲತಾ ಮಾರ್ಗದರ್ಶನ",
      unit: "",
      line: "ಸಂಸ್ಕರಣೆ ಅಥವಾ ವ್ಯಾಪಾರಕ್ಕೆ ಕಾಲಿಡುವ ಬೆಳೆಗಾರರಿಗೆ ನೆರವು.",
      detail: [
        "ಮುಂದಿನ ಹೆಜ್ಜೆ ಇಡುವ ಬೆಳೆಗಾರರು ಮತ್ತು ಗುಂಪುಗಳಿಗೆ: ಒಣಗಿಸುವಿಕೆ ಮತ್ತು ಸಂಸ್ಕರಣೆ, ವರ್ಗೀಕರಣ, ಪ್ಯಾಕಿಂಗ್ ಅಥವಾ ನೇರ ಮಾರಾಟ.",
        "ನೀವು ಏನು ಕಟ್ಟಬೇಕೆಂದಿದ್ದೀರಿ ಎಂಬ ಮೊದಲ ಮಾತುಕತೆಯ ನಂತರ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಶುಲ್ಕವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಲಾಗುತ್ತದೆ.",
      ],
    },
  ],
  advisoryHeading: "ಇಡೀ ಹಂಗಾಮಿಗೆ ನೆರವು ಬೇಕೇ?",
  advisoryBody: "ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ, ಭೂಮಿ ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ತಜ್ಞರ ಸಂಪರ್ಕ ನೀಡುತ್ತದೆ, ಎಕರೆಗೆ ₹10,000.",
  advisoryLink: "ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ ನೋಡಿ",
  faqHeading: "ಸಮಾಲೋಚನೆಯ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು",
  faqs: [
    {
      q: "ಕರೆ ಕಾಯ್ದಿರಿಸಿದ ನಂತರ ಏನಾಗುತ್ತದೆ?",
      a: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಮಯವನ್ನು ದೃಢೀಕರಿಸುತ್ತೇವೆ. ಐದು ನಿಮಿಷ ಉತ್ತರಕ್ಕೇ ಬಳಕೆಯಾಗಲಿ ಎಂದು ಕರೆಗೆ ಮುನ್ನ ಸಮಸ್ಯೆಯ ಫೋಟೋ ಕಳುಹಿಸಿ.",
    },
    {
      q: "ಹೊಲ ಭೇಟಿಗೆ ಪ್ರಯಾಣ ವೆಚ್ಚ ಏಕೆ ಪ್ರತ್ಯೇಕ?",
      a: "ಜಮೀನುಗಳು ರಾಜ್ಯದಾದ್ಯಂತ ಹರಡಿವೆ ಮತ್ತು ಪ್ರಯಾಣ ವೆಚ್ಚ ತುಂಬಾ ಬದಲಾಗುತ್ತದೆ. ಭೇಟಿ ದೃಢೀಕರಿಸುವ ಮುನ್ನ ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿ ವೆಚ್ಚವನ್ನು ನಿಮ್ಮೊಂದಿಗೆ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇವೆ, ಹೀಗಾಗಿ ಅಂತಿಮ ಬಿಲ್‌ನಲ್ಲಿ ಅಚ್ಚರಿ ಇರುವುದಿಲ್ಲ.",
    },
    {
      q: "ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿಗೆ ಮಣ್ಣು ಪರೀಕ್ಷೆ ಬೇಕೇ?",
      a: "ಹೌದು. ವೇಳಾಪಟ್ಟಿಯನ್ನು ನಿಮ್ಮದೇ ಮಣ್ಣಿನ ಫಲಿತಾಂಶಗಳಿಂದ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ. ಇತ್ತೀಚಿನ ಪರೀಕ್ಷೆ ಇಲ್ಲದಿದ್ದರೆ, ಮೊದಲು ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಪುಟದಲ್ಲಿ ಕಾಯ್ದಿರಿಸಿ.",
    },
    {
      q: "ಸಮಾಲೋಚನೆಯಿಂದ ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆಗೆ ಬದಲಾಗಬಹುದೇ?",
      a: "ಹೌದು. ಹಲವು ಬೆಳೆಗಾರರು ಒಂದು ಕರೆಯಿಂದ ಶುರುಮಾಡುತ್ತಾರೆ. ಹಂಗಾಮಿನ ಯಾವುದೇ ಹಂತದಲ್ಲಿ ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆಗೆ ನೋಂದಾಯಿಸಬಹುದು.",
    },
  ],
  longform: [
    "## ಸಮಾಲೋಚನೆ ಯಾವಾಗ ಸರಿಯಾದ ಆಯ್ಕೆ",
    "ಪ್ರತಿ ಸಮಸ್ಯೆಗೂ ಇಡೀ ಹಂಗಾಮಿನ ನೆರವು ಬೇಕಿಲ್ಲ. ಕೆಲವೊಮ್ಮೆ ನಿಮ್ಮಲ್ಲಿ ಒಂದೇ ಪ್ರಶ್ನೆ, ಒಂದೇ ನಿರ್ಧಾರ, ಅಥವಾ ನೇರವಾಗಿ ನೋಡಬೇಕಾದ ಒಂದು ಜಮೀನು ಇರುತ್ತದೆ. ಸಮಾಲೋಚನೆಗೆ ಸೇವೆಯಾವಾರು ಬೆಲೆ ಇದೆ, ಹೀಗಾಗಿ ಬೇಕಾದುದಕ್ಕೆ ಮಾತ್ರ ಪಾವತಿಸುತ್ತೀರಿ, ಮತ್ತು ಎಲ್ಲ ಬೆಲೆಗಳು ಈ ಪುಟದಲ್ಲೇ ಇವೆ.",
    "ಐದು ನಿಮಿಷದ ಆನ್‌ಲೈನ್ ಸಮಾಲೋಚನೆ ಉತ್ತರಕ್ಕೆ ಅತಿ ವೇಗದ ದಾರಿ. ಸಮಸ್ಯೆಯನ್ನು ನಿಖರವಾಗಿ ವಿವರಿಸಿ ಸ್ಪಷ್ಟ ಫೋಟೋ ಕಳುಹಿಸಿದಾಗ ಇದು ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ: ಪರಿಚಯವಿಲ್ಲದ ಚುಕ್ಕೆಯಿರುವ ಎಲೆ, ಗಿಡಗಳು ಬಾಡುತ್ತಿರುವ ಮಡಿ, ನಿಮಗೆ ಕೊಟ್ಟ ಉತ್ಪನ್ನದ ಲೇಬಲ್. ಅದು ಏನಿರಬಹುದು, ಈಗ ಏನು ಮಾಡಬೇಕು, ಮತ್ತು ಬೇರೆ ಏನಾದರೂ ಪರಿಶೀಲಿಸಬೇಕೇ ಎಂದು ತಜ್ಞರು ತಿಳಿಸುತ್ತಾರೆ.",
    "## ವೇಳಾಪಟ್ಟಿ: ನೀರು ಮತ್ತು ಪೋಷಕಾಂಶ",
    "ಹೆಚ್ಚಿನ ಹಣ ಖರ್ಚಾಗುವುದು ನೀರಾವರಿ ಮತ್ತು ಗೊಬ್ಬರದಲ್ಲಿ, ಮತ್ತು ಅಲ್ಲೇ ಹೆಚ್ಚಾಗಿ ಯೋಜನೆಯ ಬದಲು ಅಭ್ಯಾಸ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಬೆಳೆಗೆ ಎಷ್ಟು ನೀರು ಬೇಕು ಎಂದು ನಿಗದಿಪಡಿಸುತ್ತದೆ, ನಿಮ್ಮ ಮಣ್ಣು ಎಷ್ಟು ನೀರು ಹಿಡಿದಿಡುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮಲ್ಲಿ ನಿಜವಾಗಿ ಎಷ್ಟು ನೀರಿದೆ ಎಂಬುದಕ್ಕೆ ತಕ್ಕಂತೆ. ಮರಳು ಅಥವಾ ಇಳಿಜಾರು ಭೂಮಿಯಲ್ಲಿ ಇದು ಕಡಿಮೆ ಪ್ರಮಾಣದ, ಹೆಚ್ಚು ಬಾರಿಯ ನೀರಾವರಿ ಎಂದಾಗಬಹುದು; ಭಾರಿ ಮಣ್ಣಿನಲ್ಲಿ ಇದಕ್ಕೆ ವಿರುದ್ಧ.",
    "ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿ ಗೊಬ್ಬರಕ್ಕೆ ಇದನ್ನೇ ಮಾಡುತ್ತದೆ. ಮಣ್ಣು ಪರೀಕ್ಷೆಯಿಂದ ಆರಂಭಿಸಿ, ತಳಗೊಬ್ಬರ ಮತ್ತು ಹಂಗಾಮಿನ ಪ್ರತಿ ಮೇಲುಗೊಬ್ಬರವನ್ನು ನಿಗದಿಪಡಿಸುತ್ತದೆ, ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ಸಾವಯವ ಗೊಬ್ಬರ, ಜೈವಿಕ ಗೊಬ್ಬರ ಮತ್ತು ಲಘು ಪೋಷಕಾಂಶಗಳೂ ಸೇರಿ. ಏನನ್ನು ಹಾಕುವುದನ್ನು ನಿಲ್ಲಿಸಬಹುದು ಎಂದು ತಿಳಿದು ಬೆಳೆಗಾರರು ಅಚ್ಚರಿಪಡುವುದು ಸಾಮಾನ್ಯ. ವೇಳಾಪಟ್ಟಿ ಒಂದು ಜಮೀನಿನ ಒಂದು ಬೆಳೆಗೆ ನಿರ್ದಿಷ್ಟ, ಆದ್ದರಿಂದ ಬೆಲೆ ಪ್ರತಿ ಬೆಳೆಗೆ.",
    "## ಹೊಲ ಭೇಟಿ",
    "ಕೆಲವು ಸಮಸ್ಯೆಗಳನ್ನು ಫೋಟೋದಿಂದ ಬಗೆಹರಿಸಲಾಗುವುದಿಲ್ಲ. ಹೊಲದುದ್ದಕ್ಕೂ ಅಸಮ ಬೆಳವಣಿಗೆ, ಭಾರಿ ಮಳೆಯಲ್ಲಿ ವಿಫಲವಾಗುವ ಬಸಿಗಾಲುವೆ, ಅದೇ ಮೂಲೆಯಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಬರುವ ರೋಗ: ಇವುಗಳಿಗೆ ಯಾರಾದರೂ ಹೊಲದಲ್ಲಿ ನಡೆಯಬೇಕು. ಹೊಲ ಭೇಟಿಯಲ್ಲಿ ತಜ್ಞರು ನಿಮ್ಮೊಂದಿಗೆ ಬೆಳೆ, ಮಣ್ಣಿನ ಪದರ, ಬಸಿಗಾಲುವೆ ಮತ್ತು ಹೊಲದ ಇತಿಹಾಸವನ್ನು ನೋಡುತ್ತಾರೆ, ಮತ್ತು ನಂತರ ಲಿಖಿತ ಶಿಫಾರಸುಗಳು ಸಿಗುತ್ತವೆ.",
    "ಭೇಟಿ ಶುಲ್ಕ ₹5,000. ಜಮೀನುಗಳು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಹರಡಿರುವುದರಿಂದ ಮತ್ತು ತಲುಪುವ ವೆಚ್ಚ ತುಂಬಾ ಬದಲಾಗುವುದರಿಂದ, ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿಯನ್ನು ನಿಜವಾದ ವೆಚ್ಚದಲ್ಲಿ ಪ್ರತ್ಯೇಕವಾಗಿ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಭೇಟಿ ದೃಢೀಕರಿಸುವ ಮುನ್ನ ಆ ವೆಚ್ಚವನ್ನು ನಿಮ್ಮೊಂದಿಗೆ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇವೆ.",
    "## ಬದ್ಧರಾಗುವ ಮುನ್ನ ಯೋಜನೆ",
    "ಬೆಳೆ ಯೋಜನಾ ವರದಿ ಬಂಡವಾಳ ತೊಡಗಿಸುವ ನಿರ್ಧಾರಗಳಿಗೆ: ಹೊಸದಾಗಿ ಗುತ್ತಿಗೆ ಪಡೆದ ಜಮೀನಿನಲ್ಲಿ ಶುಂಠಿ, ಜಮೀನನ್ನು ಹನಿ ನೀರಾವರಿಯ ಬಾಳೆಗೆ ಬದಲಿಸುವುದು, ಅಥವಾ ಹೊಸ ಅಡಿಕೆ ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ತೋಟ. ಬೆಳೆ ನಿಮ್ಮ ಭೂಮಿ, ನೀರು ಮತ್ತು ಮಾರುಕಟ್ಟೆಗೆ ಹೊಂದುತ್ತದೆಯೇ ಎಂದು ನೋಡಿ, ಭೂಮಿ ಸಿದ್ಧತೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ ಪೂರ್ಣ ವೆಚ್ಚದ ಅಂದಾಜು ರೂಪಿಸುತ್ತದೆ. ಸಾಲ ಮಾಡುವ ಅಥವಾ ಬದ್ಧರಾಗುವ ಮುನ್ನ ಸ್ಪಷ್ಟ ಚಿತ್ರಣ ನೀಡುತ್ತದೆ.",
    "## ಹೊಲದ ಗೇಟಿನಾಚೆ",
    "ಉದ್ಯಮಶೀಲತಾ ಮಾರ್ಗದರ್ಶನ, ತಮ್ಮ ಉತ್ಪನ್ನವನ್ನು ಸಂಸ್ಕರಿಸಲು, ವರ್ಗೀಕರಿಸಲು, ಪ್ಯಾಕ್ ಮಾಡಲು ಅಥವಾ ಮಾರಲು ಬಯಸುವ ಬೆಳೆಗಾರರು ಮತ್ತು ಗುಂಪುಗಳಿಗೆ. ಪ್ರತಿ ಉದ್ಯಮವೂ ಭಿನ್ನವಾದ್ದರಿಂದ, ಮೊದಲ ಮಾತುಕತೆಯ ನಂತರ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಶುಲ್ಕವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇವೆ.",
    "ಹಂಗಾಮಿನುದ್ದಕ್ಕೂ ಮತ್ತೆ ಮತ್ತೆ ಸಲಹೆ ಬೇಕಾಗುತ್ತಿದ್ದರೆ, ಪ್ರತ್ಯೇಕ ಸಮಾಲೋಚನೆಗಳಿಗಿಂತ ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಚ್ಚು ಲಾಭದಾಯಕ.",
  ],
  closing: "ಯಾವುದು ಬೇಕು ಎಂದು ಖಚಿತವಿಲ್ಲವೇ? ₹250 ರ ಒಂದು ಕರೆಯಿಂದ ಆರಂಭಿಸಿ.",
};

const travelHi = "यात्रा और ठहरने का ख़र्च अलग से।";

const hi: ConsultancyContent = {
  title: "कर्नाटक में कृषि सलाहकार, ₹250 से | Horti Guru",
  description:
    "कर्नाटक में बागवानी परामर्श: ₹250 की कॉल, सिंचाई और पोषण शेड्यूल, कृषि विशेषज्ञ का ₹5,000 का खेत दौरा और ₹10,000 की फ़सल योजना रिपोर्ट।",
  crumb: "परामर्श",
  h1: "बागवानी परामर्श और खेत का दौरा",
  sub: "पाँच मिनट की कॉल से पूरी फ़सल योजना तक, सिर्फ़ उतना भुगतान करें जितना चाहिए।",
  listHeading: "सेवाएँ और कीमतें",
  book: "बुक करें",
  enquire: "इसके बारे में पूछें",
  onRequest: "पूछने पर",
  services: [
    {
      id: "call",
      name: "ऑनलाइन परामर्श",
      unit: "प्रति कॉल",
      line: "विशेषज्ञ के साथ पाँच मिनट। एक सवाल, एक साफ़ जवाब।",
      detail: [
        "आपकी फ़सल पर काम करने वाले विशेषज्ञ के साथ पाँच मिनट तक की फ़ोन या व्हाट्सऐप कॉल।",
        "किसी एक ख़ास सवाल के लिए सबसे अच्छी: कोई लक्षण जिसकी आपने फ़ोटो ली है, कोई उत्पाद जो आपको सुझाया गया है, या कोई मात्रा जिसमें आपको शक है। कॉल से पहले फ़ोटो भेजें ताकि समय जवाब पर लगे।",
      ],
    },
    {
      id: "irrigation",
      name: "सिंचाई शेड्यूल",
      unit: "",
      line: "आपकी मिट्टी, फ़सल और पानी की उपलब्धता के हिसाब से सिंचाई योजना।",
      detail: [
        "पूरे सीज़न में चरण दर चरण कितना पानी, कितनी बार और किस तरीके से।",
        "आपकी फ़सल, मिट्टी के प्रकार, पानी के स्रोत और सिंचाई व्यवस्था के आधार पर। पानी की जाँच हो तो उसके लवण भी ध्यान में रखे जाते हैं।",
      ],
    },
    {
      id: "nutrient",
      name: "पोषण शेड्यूल",
      unit: "प्रति फ़सल",
      line: "आपकी मिट्टी जाँच के नतीजों से बनी पूरे सीज़न की खाद योजना।",
      detail: [
        "आधार खाद से आख़िरी टॉप ड्रेसिंग तक कौन-सी खाद, कितनी और कब, आपकी मिट्टी जाँच से निकाली गई।",
        "जैविक इनपुट और ड्रिप हो तो फ़र्टिगेशन शामिल। मिट्टी जाँच न हो तो पहले वह करवाने को कहेंगे।",
      ],
    },
    {
      id: "visit",
      name: "खेत का दौरा",
      unit: "प्रति दौरा",
      line: "विशेषज्ञ आपके साथ आपका खेत देखते हैं।",
      note: travelHi,
      detail: [
        "विशेषज्ञ आपके खेत पर आकर आपके साथ फ़सल देखते हैं, मिट्टी, जल निकासी और पौधों की सेहत जाँचते हैं, और जो दिखा वह समझाते हैं।",
        "दौरे के बाद लिखित सिफ़ारिशें मिलती हैं। यात्रा और ठहरने का ख़र्च वास्तविक लागत पर लिया जाता है और दौरा पक्का करने से पहले तय किया जाता है।",
      ],
    },
    {
      id: "planning",
      name: "फ़सल योजना रिपोर्ट",
      unit: "",
      line: "सीज़न में पैसा लगाने से पहले व्यवहार्यता और पूरे ख़र्च का बजट।",
      detail: [
        "नई फ़सल, नई ज़मीन या बड़े विस्तार के लिए। रिपोर्ट बताती है कि फ़सल आपकी ज़मीन, पानी और बाज़ार के लिए ठीक है या नहीं, और भूमि की तैयारी से खुदाई तक पूरे ख़र्च का बजट देती है।",
        "सीज़न के लिए कर्ज़ लेते समय या फ़सलों में से चुनते समय काम की।",
      ],
    },
    {
      id: "handholding",
      name: "उद्यमिता मार्गदर्शन",
      unit: "",
      line: "प्रसंस्करण या व्यापार में कदम रखने वाले उत्पादकों के लिए सहायता।",
      detail: [
        "अगला कदम उठाने वाले उत्पादकों और समूहों के लिए: सुखाना और प्रसंस्करण, ग्रेडिंग, पैकिंग या सीधी बिक्री।",
        "आप क्या बनाना चाहते हैं, इस पर पहली बातचीत के बाद दायरा और फ़ीस तय होती है।",
      ],
    },
  ],
  advisoryHeading: "पूरे सीज़न के लिए मदद चाहिए?",
  advisoryBody: "पूरे सीज़न की सलाह भूमि की तैयारी से खुदाई तक व्हाट्सऐप पर विशेषज्ञ से संपर्क देती है, ₹10,000 प्रति एकड़।",
  advisoryLink: "पूरे सीज़न की सलाह देखें",
  faqHeading: "परामर्श के बारे में सवाल",
  faqs: [
    {
      q: "कॉल बुक करने के बाद क्या होता है?",
      a: "हम व्हाट्सऐप पर समय पक्का करते हैं। कॉल से पहले समस्या की फ़ोटो भेजें ताकि पाँच मिनट जवाब पर लगें।",
    },
    {
      q: "खेत के दौरे में यात्रा का ख़र्च अलग क्यों है?",
      a: "खेत पूरे राज्य में फैले हैं और यात्रा का ख़र्च बहुत अलग-अलग होता है। दौरा पक्का करने से पहले हम यात्रा और ठहरने का ख़र्च आपसे तय कर लेते हैं, ताकि आख़िरी बिल में कोई हैरानी न हो।",
    },
    {
      q: "क्या पोषण शेड्यूल के लिए मिट्टी जाँच ज़रूरी है?",
      a: "हाँ। शेड्यूल आपकी अपनी मिट्टी के नतीजों से बनता है। हाल की जाँच न हो तो पहले प्रयोगशाला जाँच पेज पर बुक करें।",
    },
    {
      q: "क्या मैं परामर्श से पूरे सीज़न की सलाह पर जा सकता हूँ?",
      a: "हाँ। कई उत्पादक एक कॉल से शुरू करते हैं। सीज़न में कभी भी पूरे सीज़न की सलाह में पंजीकरण कर सकते हैं।",
    },
  ],
  longform: [
    "## परामर्श कब सही विकल्प है",
    "हर समस्या के लिए पूरे सीज़न की मदद ज़रूरी नहीं। कभी आपके पास एक ही सवाल होता है, एक ही फ़ैसला, या एक खेत जिसे सामने से देखना ज़रूरी है। परामर्श की कीमत सेवा के हिसाब से है, ताकि आप सिर्फ़ ज़रूरत का भुगतान करें, और हर कीमत इसी पेज पर लिखी है।",
    "पाँच मिनट का ऑनलाइन परामर्श जवाब पाने का सबसे तेज़ रास्ता है। यह तब सबसे अच्छा काम करता है जब आप समस्या ठीक से बता सकें और साफ़ फ़ोटो भेज सकें: अनजान धब्बे वाली पत्ती, मुरझाते पौधों वाली क्यारी, किसी उत्पाद का लेबल जो आपको थमाया गया। विशेषज्ञ बताएँगे कि यह क्या हो सकता है, अभी क्या करना है, और क्या कुछ और जाँचना है।",
    "## शेड्यूल: पानी और पोषण",
    "सबसे ज़्यादा पैसा सिंचाई और खाद पर ख़र्च होता है, और वहीं अक्सर योजना की जगह आदत काम करती है। सिंचाई शेड्यूल तय करता है कि हर चरण पर फ़सल को कितना पानी चाहिए, आपकी मिट्टी की पानी रोकने की क्षमता और आपके पास असल में मौजूद पानी के हिसाब से। रेतीली या ढलान वाली ज़मीन पर इसका मतलब कम मात्रा में ज़्यादा बार सिंचाई हो सकता है; भारी मिट्टी में इसका उल्टा।",
    "पोषण शेड्यूल यही काम खाद के लिए करता है। मिट्टी जाँच से शुरू करके यह आधार खाद और सीज़न की हर टॉप ड्रेसिंग तय करता है, ज़रूरत हो तो जैविक खाद, जैव उर्वरक और सूक्ष्म पोषक तत्व भी। उत्पादक अक्सर यह जानकर हैरान होते हैं कि वे क्या डालना बंद कर सकते हैं। शेड्यूल एक खेत की एक फ़सल के लिए होता है, इसीलिए कीमत प्रति फ़सल है।",
    "## खेत का दौरा",
    "कुछ समस्याएँ फ़ोटो से हल नहीं होतीं। पूरे खेत में असमान बढ़वार, भारी बारिश में फ़ेल होती जल निकासी, एक ही कोने में बार-बार लौटता रोग: इनके लिए किसी को खेत में चलना पड़ता है। दौरे में विशेषज्ञ आपके साथ फ़सल, मिट्टी की परतें, जल निकासी और खेत का इतिहास देखते हैं, और बाद में लिखित सिफ़ारिशें मिलती हैं।",
    "दौरे की फ़ीस ₹5,000 है। यात्रा और ठहरने का ख़र्च वास्तविक लागत पर अलग से लिया जाता है, क्योंकि खेत पूरे कर्नाटक में फैले हैं और वहाँ पहुँचने का ख़र्च बहुत अलग होता है। दौरा पक्का करने से पहले हम यह ख़र्च आपसे तय करते हैं।",
    "## पैसा लगाने से पहले योजना",
    "फ़सल योजना रिपोर्ट उन फ़ैसलों के लिए है जिनमें पूँजी फँसती है: नई पट्टे की ज़मीन पर अदरक, किसी खेत को ड्रिप वाले केले में बदलना, या नया सुपारी और काली मिर्च का बाग़। रिपोर्ट देखती है कि फ़सल आपकी ज़मीन, पानी और बाज़ार के लिए ठीक है या नहीं, और भूमि की तैयारी से खुदाई तक पूरे ख़र्च का बजट बनाती है। कर्ज़ लेने या पैसा लगाने से पहले आपको साफ़ तस्वीर मिलती है।",
    "## खेत के आगे",
    "उद्यमिता मार्गदर्शन उन उत्पादकों और समूहों के लिए है जो अपनी उपज का प्रसंस्करण, ग्रेडिंग, पैकिंग या बिक्री ख़ुद करना चाहते हैं। हर काम अलग होता है, इसलिए पहली बातचीत के बाद दायरा और फ़ीस तय करते हैं।",
    "अगर सीज़न में बार-बार सलाह की ज़रूरत पड़ती है, तो अलग-अलग परामर्श से पूरे सीज़न की सलाह आमतौर पर ज़्यादा फ़ायदेमंद है।",
  ],
  closing: "पक्का नहीं कि क्या चाहिए? ₹250 की एक कॉल से शुरू करें।",
};

const consultancy: Record<Locale, ConsultancyContent> = { en, kn, hi };
export default consultancy;
