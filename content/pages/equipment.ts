import type { Locale } from "@/lib/i18n";

type Item = { id: string; name: string; body: string };

export type EquipmentContent = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  sub: string;
  kavach: { name: string; unit: string; gst: string; body: string; points: string[]; buy: string };
  toolsHeading: string;
  toolsIntro: string;
  tools: Item[];
  moreHeading: string;
  more: Item[];
  enquire: string;
  onRequest: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  longform: string[];
  closing: string;
};

const en: EquipmentContent = {
  title: "Kisan Kavach, Soil Meters and Seed Treatment Kits | Horti Guru",
  description:
    "Kisan Kavach anti-pesticide suit at ₹4,000 including GST, plus pH meters, EC meters, soil moisture probes and ginger and turmeric seed treatment kits.",
  crumb: "Equipment",
  h1: "Field equipment and kits for horticulture growers",
  sub: "Tools to measure your soil and protect yourself while spraying.",
  kavach: {
    name: "Kisan Kavach",
    unit: "per unit",
    gst: "GST included",
    body: "A reusable protective suit to wear while mixing and spraying crop protection chemicals. The fabric is treated to deactivate pesticides on contact, so less reaches your skin.",
    points: ["Wear over your clothes while mixing and spraying", "Washable and reusable", "Sizes: [KISAN_KAVACH_SIZES]"],
    buy: "Buy Kisan Kavach",
  },
  toolsHeading: "Decision support tools",
  toolsIntro: "Simple meters that let you check your soil and water yourself between lab tests.",
  tools: [
    { id: "ph-meter", name: "pH meter", body: "Checks soil and water acidity in the field, so you know when liming is needed and whether nutrients are being locked up." },
    { id: "ec-meter", name: "EC meter", body: "Measures salt content in irrigation water, soil and fertigation solution, before it damages roots." },
    { id: "moisture-probe", name: "Soil moisture probe", body: "Shows how wet the root zone is, so you irrigate when the crop needs it, not by the calendar." },
  ],
  moreHeading: "Kits and materials",
  more: [
    { id: "seed-kit", name: "Seed treatment kit for ginger and turmeric", body: "What you need to treat seed rhizomes against rot before planting, matched to the quantity of seed you are planting." },
    { id: "planting-material", name: "Quality planting material", body: "Sourced to your crop and variety requirement. Ask us what is available for the coming season." },
    { id: "quality-analysis", name: "Produce quality analysis", body: "Quality parameters for your harvested crop, for buyers or for your own grading." },
  ],
  enquire: "Enquire",
  onRequest: "Price on request",
  faqHeading: "Questions about equipment",
  faqs: [
    { q: "How do I buy Kisan Kavach?", a: "Choose the quantity at checkout and pay by UPI. We confirm on WhatsApp and arrange delivery." },
    { q: "Why are the meters priced on request?", a: "Models and availability change. Tell us what you want to measure and we will suggest a suitable model with a price." },
    { q: "Do you show me how to use the meters?", a: "Yes. We explain how to take a reading and what the numbers mean for your crop, over WhatsApp." },
  ],
  longform: [
    "## Measuring in the field",
    "A laboratory soil test gives you the full picture once or twice a year. Between tests, simple meters let you check what is changing. A pH meter tells you whether your soil or water is becoming more acidic. An EC meter shows whether salts are building up, which matters on borewell water and under drip fertigation. A soil moisture probe tells you whether the root zone actually needs water, which saves both water and the root diseases that come with over-irrigation.",
    "None of these replace a lab test, but used regularly they help you catch a problem early and give your adviser better information.",
    "## Protecting yourself while spraying",
    "Spraying is part of growing these crops, and the person spraying carries much of the risk. Kisan Kavach is a protective suit designed to be worn over your clothes while mixing and spraying. Wear it with gloves, a mask and eye protection, wash it after use, and keep it away from food and children.",
    "## Seed treatment for ginger and turmeric",
    "Rhizome rot often arrives with the seed. Treating seed rhizomes before planting is one of the cheapest steps a ginger or turmeric grower can take. The kit is matched to the quantity of seed you plant, and we explain the method when you order.",
  ],
  closing: "Not sure what you need? Ask in a single call, ₹250.",
};

const kn: EquipmentContent = {
  title: "ಕಿಸಾನ್ ಕವಚ, ಮಣ್ಣು ಮೀಟರ್ ಮತ್ತು ಬೀಜೋಪಚಾರ ಕಿಟ್ | Horti Guru",
  description:
    "GST ಸೇರಿ ₹4,000 ಕ್ಕೆ ಕಿಸಾನ್ ಕವಚ ಕೀಟನಾಶಕ ರಕ್ಷಣಾ ಉಡುಪು, ಜೊತೆಗೆ pH ಮೀಟರ್, EC ಮೀಟರ್, ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಾಪಕ ಮತ್ತು ಶುಂಠಿ, ಅರಿಶಿನ ಬೀಜೋಪಚಾರ ಕಿಟ್.",
  crumb: "ಉಪಕರಣಗಳು",
  h1: "ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಾರರಿಗೆ ಹೊಲದ ಉಪಕರಣಗಳು ಮತ್ತು ಕಿಟ್‌ಗಳು",
  sub: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಅಳೆಯಲು ಮತ್ತು ಸಿಂಪಡಣೆಯ ವೇಳೆ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಲು ಸಾಧನಗಳು.",
  kavach: {
    name: "ಕಿಸಾನ್ ಕವಚ",
    unit: "ಪ್ರತಿ ಘಟಕಕ್ಕೆ",
    gst: "GST ಸೇರಿದೆ",
    body: "ಬೆಳೆ ರಕ್ಷಣಾ ರಾಸಾಯನಿಕಗಳನ್ನು ಬೆರೆಸುವಾಗ ಮತ್ತು ಸಿಂಪಡಿಸುವಾಗ ಧರಿಸುವ ಮರುಬಳಕೆಯ ರಕ್ಷಣಾ ಉಡುಪು. ಬಟ್ಟೆಯನ್ನು ಸಂಪರ್ಕದಲ್ಲೇ ಕೀಟನಾಶಕವನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುವಂತೆ ಉಪಚರಿಸಲಾಗಿದೆ, ಹೀಗಾಗಿ ಚರ್ಮಕ್ಕೆ ಕಡಿಮೆ ತಲುಪುತ್ತದೆ.",
    points: ["ಬೆರೆಸುವಾಗ ಮತ್ತು ಸಿಂಪಡಿಸುವಾಗ ಬಟ್ಟೆಯ ಮೇಲೆ ಧರಿಸಿ", "ತೊಳೆದು ಮರುಬಳಕೆ ಮಾಡಬಹುದು", "ಅಳತೆಗಳು: [KISAN_KAVACH_SIZES]"],
    buy: "ಕಿಸಾನ್ ಕವಚ ಖರೀದಿಸಿ",
  },
  toolsHeading: "ನಿರ್ಧಾರಕ್ಕೆ ನೆರವಾಗುವ ಸಾಧನಗಳು",
  toolsIntro: "ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆಗಳ ನಡುವೆ ನಿಮ್ಮ ಮಣ್ಣು ಮತ್ತು ನೀರನ್ನು ನೀವೇ ಪರೀಕ್ಷಿಸಲು ಸರಳ ಮೀಟರ್‌ಗಳು.",
  tools: [
    { id: "ph-meter", name: "pH ಮೀಟರ್", body: "ಹೊಲದಲ್ಲೇ ಮಣ್ಣು ಮತ್ತು ನೀರಿನ ಆಮ್ಲೀಯತೆ ಪರೀಕ್ಷಿಸುತ್ತದೆ, ಸುಣ್ಣ ಯಾವಾಗ ಬೇಕು, ಪೋಷಕಾಂಶಗಳು ಬಂಧಿತವಾಗುತ್ತಿವೆಯೇ ಎಂದು ತಿಳಿಯುತ್ತದೆ." },
    { id: "ec-meter", name: "EC ಮೀಟರ್", body: "ನೀರಾವರಿ ನೀರು, ಮಣ್ಣು ಮತ್ತು ರಸಾವರಿ ದ್ರಾವಣದಲ್ಲಿ ಲವಣಾಂಶವನ್ನು, ಬೇರುಗಳಿಗೆ ಹಾನಿಯಾಗುವ ಮುನ್ನ ಅಳೆಯುತ್ತದೆ." },
    { id: "moisture-probe", name: "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಾಪಕ", body: "ಬೇರು ವಲಯ ಎಷ್ಟು ತೇವವಾಗಿದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಕ್ಯಾಲೆಂಡರ್ ನೋಡಿ ಅಲ್ಲ, ಬೆಳೆಗೆ ಬೇಕಾದಾಗ ನೀರು ಕೊಡಬಹುದು." },
  ],
  moreHeading: "ಕಿಟ್‌ಗಳು ಮತ್ತು ವಸ್ತುಗಳು",
  more: [
    { id: "seed-kit", name: "ಶುಂಠಿ ಮತ್ತು ಅರಿಶಿನಕ್ಕೆ ಬೀಜೋಪಚಾರ ಕಿಟ್", body: "ನಾಟಿಗೆ ಮುನ್ನ ಬೀಜದ ಗಡ್ಡೆಗಳನ್ನು ಕೊಳೆಯ ವಿರುದ್ಧ ಉಪಚರಿಸಲು ಬೇಕಾದದ್ದು, ನೀವು ನಾಟಿ ಮಾಡುವ ಬೀಜದ ಪ್ರಮಾಣಕ್ಕೆ ತಕ್ಕಂತೆ." },
    { id: "planting-material", name: "ಗುಣಮಟ್ಟದ ನಾಟಿ ವಸ್ತು", body: "ನಿಮ್ಮ ಬೆಳೆ ಮತ್ತು ತಳಿಯ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ. ಮುಂದಿನ ಹಂಗಾಮಿಗೆ ಏನು ಲಭ್ಯ ಎಂದು ಕೇಳಿ." },
    { id: "quality-analysis", name: "ಉತ್ಪನ್ನದ ಗುಣಮಟ್ಟ ವಿಶ್ಲೇಷಣೆ", body: "ಕೊಯ್ಲು ಮಾಡಿದ ಬೆಳೆಯ ಗುಣಮಟ್ಟದ ಅಂಶಗಳು, ಖರೀದಿದಾರರಿಗೆ ಅಥವಾ ನಿಮ್ಮದೇ ವರ್ಗೀಕರಣಕ್ಕೆ." },
  ],
  enquire: "ವಿಚಾರಿಸಿ",
  onRequest: "ವಿಚಾರಿಸಿದಾಗ ಬೆಲೆ",
  faqHeading: "ಉಪಕರಣಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು",
  faqs: [
    { q: "ಕಿಸಾನ್ ಕವಚ ಹೇಗೆ ಖರೀದಿಸುವುದು?", a: "ಚೆಕ್‌ಔಟ್‌ನಲ್ಲಿ ಪ್ರಮಾಣ ಆಯ್ಕೆಮಾಡಿ UPI ಮೂಲಕ ಪಾವತಿಸಿ. ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಿಸಿ ವಿತರಣೆ ಏರ್ಪಡಿಸುತ್ತೇವೆ." },
    { q: "ಮೀಟರ್‌ಗಳ ಬೆಲೆ ಏಕೆ ವಿಚಾರಿಸಿದಾಗ?", a: "ಮಾದರಿಗಳು ಮತ್ತು ಲಭ್ಯತೆ ಬದಲಾಗುತ್ತವೆ. ನೀವು ಏನನ್ನು ಅಳೆಯಬೇಕು ಎಂದು ತಿಳಿಸಿ, ಸೂಕ್ತ ಮಾದರಿಯನ್ನು ಬೆಲೆಯೊಂದಿಗೆ ಸೂಚಿಸುತ್ತೇವೆ." },
    { q: "ಮೀಟರ್ ಬಳಸುವುದನ್ನು ಕಲಿಸುತ್ತೀರಾ?", a: "ಹೌದು. ಓದುವಿಕೆ ಹೇಗೆ ತೆಗೆಯುವುದು, ಆ ಅಂಕಿಗಳು ನಿಮ್ಮ ಬೆಳೆಗೆ ಏನು ಅರ್ಥ ಎಂದು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿವರಿಸುತ್ತೇವೆ." },
  ],
  longform: [
    "## ಹೊಲದಲ್ಲೇ ಅಳೆಯುವುದು",
    "ಪ್ರಯೋಗಾಲಯದ ಮಣ್ಣು ಪರೀಕ್ಷೆ ವರ್ಷಕ್ಕೆ ಒಂದೆರಡು ಬಾರಿ ಪೂರ್ಣ ಚಿತ್ರಣ ನೀಡುತ್ತದೆ. ಪರೀಕ್ಷೆಗಳ ನಡುವೆ, ಸರಳ ಮೀಟರ್‌ಗಳು ಏನು ಬದಲಾಗುತ್ತಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಲು ನೆರವಾಗುತ್ತವೆ. pH ಮೀಟರ್ ನಿಮ್ಮ ಮಣ್ಣು ಅಥವಾ ನೀರು ಹೆಚ್ಚು ಆಮ್ಲೀಯವಾಗುತ್ತಿದೆಯೇ ಎಂದು ತಿಳಿಸುತ್ತದೆ. EC ಮೀಟರ್ ಲವಣ ಸಂಗ್ರಹವಾಗುತ್ತಿದೆಯೇ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಕೊಳವೆಬಾವಿ ನೀರು ಮತ್ತು ಹನಿ ರಸಾವರಿಯಲ್ಲಿ ಇದು ಮುಖ್ಯ. ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಾಪಕ ಬೇರು ವಲಯಕ್ಕೆ ನಿಜವಾಗಿ ನೀರು ಬೇಕೇ ಎಂದು ತಿಳಿಸುತ್ತದೆ, ಇದರಿಂದ ನೀರೂ ಉಳಿಯುತ್ತದೆ, ಅತಿ ನೀರಾವರಿಯಿಂದ ಬರುವ ಬೇರು ರೋಗಗಳೂ ತಪ್ಪುತ್ತವೆ.",
    "ಇವುಗಳಲ್ಲಿ ಯಾವುದೂ ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆಗೆ ಬದಲಿಯಲ್ಲ, ಆದರೆ ನಿಯಮಿತವಾಗಿ ಬಳಸಿದರೆ ಸಮಸ್ಯೆಯನ್ನು ಬೇಗ ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ನಿಮ್ಮ ಸಲಹೆಗಾರರಿಗೆ ಉತ್ತಮ ಮಾಹಿತಿ ನೀಡಲು ನೆರವಾಗುತ್ತವೆ.",
    "## ಸಿಂಪಡಣೆಯ ವೇಳೆ ನಿಮ್ಮ ರಕ್ಷಣೆ",
    "ಈ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯುವಲ್ಲಿ ಸಿಂಪಡಣೆ ಒಂದು ಭಾಗ, ಮತ್ತು ಸಿಂಪಡಿಸುವವರೇ ಹೆಚ್ಚಿನ ಅಪಾಯ ಹೊರುತ್ತಾರೆ. ಕಿಸಾನ್ ಕವಚ ಬೆರೆಸುವಾಗ ಮತ್ತು ಸಿಂಪಡಿಸುವಾಗ ಬಟ್ಟೆಯ ಮೇಲೆ ಧರಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ರಕ್ಷಣಾ ಉಡುಪು. ಕೈಗವಸು, ಮುಖಗವಸು ಮತ್ತು ಕಣ್ಣಿನ ರಕ್ಷಣೆಯೊಂದಿಗೆ ಧರಿಸಿ, ಬಳಸಿದ ನಂತರ ತೊಳೆಯಿರಿ, ಆಹಾರ ಮತ್ತು ಮಕ್ಕಳಿಂದ ದೂರವಿಡಿ.",
    "## ಶುಂಠಿ ಮತ್ತು ಅರಿಶಿನಕ್ಕೆ ಬೀಜೋಪಚಾರ",
    "ಗಡ್ಡೆ ಕೊಳೆ ಹೆಚ್ಚಾಗಿ ಬೀಜದೊಂದಿಗೇ ಬರುತ್ತದೆ. ನಾಟಿಗೆ ಮುನ್ನ ಬೀಜದ ಗಡ್ಡೆಗಳನ್ನು ಉಪಚರಿಸುವುದು ಶುಂಠಿ ಅಥವಾ ಅರಿಶಿನ ಬೆಳೆಗಾರ ತೆಗೆದುಕೊಳ್ಳಬಹುದಾದ ಅತಿ ಅಗ್ಗದ ಕ್ರಮಗಳಲ್ಲಿ ಒಂದು. ಕಿಟ್ ನೀವು ನಾಟಿ ಮಾಡುವ ಬೀಜದ ಪ್ರಮಾಣಕ್ಕೆ ತಕ್ಕಂತೆ ಇರುತ್ತದೆ, ಆರ್ಡರ್ ಮಾಡಿದಾಗ ವಿಧಾನವನ್ನು ವಿವರಿಸುತ್ತೇವೆ.",
  ],
  closing: "ಏನು ಬೇಕು ಎಂದು ಖಚಿತವಿಲ್ಲವೇ? ₹250 ರ ಒಂದು ಕರೆಯಲ್ಲಿ ಕೇಳಿ.",
};

const hi: EquipmentContent = {
  title: "किसान कवच, मिट्टी मीटर और बीज उपचार किट | Horti Guru",
  description:
    "GST सहित ₹4,000 में किसान कवच कीटनाशक-रोधी सूट, साथ में pH मीटर, EC मीटर, मिट्टी नमी प्रोब और अदरक व हल्दी के बीज उपचार किट।",
  crumb: "उपकरण",
  h1: "बागवानी उत्पादकों के लिए खेत के उपकरण और किट",
  sub: "अपनी मिट्टी मापने और छिड़काव के दौरान अपनी सुरक्षा के लिए साधन।",
  kavach: {
    name: "किसान कवच",
    unit: "प्रति यूनिट",
    gst: "GST सहित",
    body: "फ़सल सुरक्षा रसायन मिलाते और छिड़कते समय पहनने वाला दोबारा इस्तेमाल होने वाला सुरक्षा सूट। इसके कपड़े को इस तरह उपचारित किया गया है कि यह संपर्क में आते ही कीटनाशक को निष्क्रिय करे, ताकि त्वचा तक कम पहुँचे।",
    points: ["मिलाते और छिड़कते समय कपड़ों के ऊपर पहनें", "धोकर दोबारा इस्तेमाल करें", "साइज़: [KISAN_KAVACH_SIZES]"],
    buy: "किसान कवच ख़रीदें",
  },
  toolsHeading: "फ़ैसले में मदद करने वाले साधन",
  toolsIntro: "सरल मीटर जिनसे आप प्रयोगशाला जाँचों के बीच अपनी मिट्टी और पानी ख़ुद जाँच सकते हैं।",
  tools: [
    { id: "ph-meter", name: "pH मीटर", body: "खेत में ही मिट्टी और पानी की अम्लता जाँचता है, ताकि पता चले कि चूना कब चाहिए और पोषक तत्व बँध तो नहीं रहे।" },
    { id: "ec-meter", name: "EC मीटर", body: "सिंचाई के पानी, मिट्टी और फ़र्टिगेशन घोल में लवण मापता है, जड़ों को नुकसान से पहले।" },
    { id: "moisture-probe", name: "मिट्टी नमी प्रोब", body: "दिखाता है कि जड़ क्षेत्र कितना गीला है, ताकि आप कैलेंडर देखकर नहीं, फ़सल की ज़रूरत पर सिंचाई करें।" },
  ],
  moreHeading: "किट और सामग्री",
  more: [
    { id: "seed-kit", name: "अदरक और हल्दी के लिए बीज उपचार किट", body: "रोपाई से पहले बीज प्रकंदों को सड़न से बचाने के लिए ज़रूरी सामान, आपके बीज की मात्रा के हिसाब से।" },
    { id: "planting-material", name: "अच्छी रोपण सामग्री", body: "आपकी फ़सल और किस्म की ज़रूरत के हिसाब से। आने वाले सीज़न के लिए क्या उपलब्ध है, हमसे पूछें।" },
    { id: "quality-analysis", name: "उपज की गुणवत्ता का विश्लेषण", body: "खोदी गई फ़सल के गुणवत्ता मानक, ख़रीदारों के लिए या अपनी ग्रेडिंग के लिए।" },
  ],
  enquire: "पूछताछ करें",
  onRequest: "कीमत पूछने पर",
  faqHeading: "उपकरणों के बारे में सवाल",
  faqs: [
    { q: "किसान कवच कैसे ख़रीदूँ?", a: "चेकआउट पर मात्रा चुनें और UPI से भुगतान करें। हम व्हाट्सऐप पर पुष्टि करके डिलीवरी की व्यवस्था करते हैं।" },
    { q: "मीटरों की कीमत पूछने पर क्यों है?", a: "मॉडल और उपलब्धता बदलती रहती है। बताइए आप क्या मापना चाहते हैं, हम सही मॉडल कीमत के साथ सुझाएँगे।" },
    { q: "क्या आप मीटर इस्तेमाल करना सिखाते हैं?", a: "हाँ। रीडिंग कैसे लें और आपकी फ़सल के लिए उन आँकड़ों का क्या मतलब है, यह हम व्हाट्सऐप पर समझाते हैं।" },
  ],
  longform: [
    "## खेत में ही मापना",
    "प्रयोगशाला की मिट्टी जाँच साल में एक-दो बार पूरी तस्वीर देती है। जाँचों के बीच, सरल मीटर आपको यह देखने देते हैं कि क्या बदल रहा है। pH मीटर बताता है कि आपकी मिट्टी या पानी ज़्यादा अम्लीय तो नहीं हो रहा। EC मीटर दिखाता है कि लवण जमा तो नहीं हो रहे, जो बोरवेल पानी और ड्रिप फ़र्टिगेशन में मायने रखता है। मिट्टी नमी प्रोब बताता है कि जड़ क्षेत्र को सच में पानी चाहिए या नहीं, जिससे पानी भी बचता है और ज़्यादा सिंचाई से होने वाले जड़ रोग भी।",
    "इनमें से कोई भी प्रयोगशाला जाँच की जगह नहीं लेता, लेकिन नियमित इस्तेमाल से समस्या जल्दी पकड़ में आती है और आपके सलाहकार को बेहतर जानकारी मिलती है।",
    "## छिड़काव के दौरान अपनी सुरक्षा",
    "इन फ़सलों को उगाने में छिड़काव एक हिस्सा है, और छिड़काव करने वाला व्यक्ति ज़्यादातर जोखिम उठाता है। किसान कवच मिलाते और छिड़कते समय कपड़ों के ऊपर पहनने के लिए बना सुरक्षा सूट है। इसे दस्ताने, मास्क और आँखों की सुरक्षा के साथ पहनें, इस्तेमाल के बाद धोएँ, और खाने व बच्चों से दूर रखें।",
    "## अदरक और हल्दी का बीज उपचार",
    "प्रकंद सड़न अक्सर बीज के साथ ही आती है। रोपाई से पहले बीज प्रकंदों का उपचार अदरक या हल्दी उत्पादक का सबसे सस्ता कदम है। किट आपकी बीज की मात्रा के हिसाब से होती है, और ऑर्डर करने पर हम तरीका समझाते हैं।",
  ],
  closing: "पक्का नहीं कि क्या चाहिए? ₹250 की एक कॉल में पूछें।",
};

const equipment: Record<Locale, EquipmentContent> = { en, kn, hi };
export default equipment;
