import type { Locale } from "@/lib/i18n";
import type { ServiceId } from "@/lib/pricing";

export type LabContent = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  sub: string;
  tableHeading: string;
  head: [string, string, string];
  onRequest: string;
  rows: { id: ServiceId; name: string; tells: string; unit: string; note?: string }[];
  bookSoil: string;
  askOther: string;
  nutrientLink: string;
  nutrientLead: string;
  stepsHeading: string;
  steps: { title: string; body: string }[];
  sampleHeading: string;
  sampleSteps: string[];
  turnaroundHeading: string;
  /** "{turnaround}" */
  turnaround: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  longform: string[];
  closing: string;
};

const en: LabContent = {
  title: "Soil Testing in Karnataka, Prices from ₹250 | Horti Guru",
  description:
    "Soil, water, leaf, compost and planting material pathogen tests for horticulture crops in Karnataka. Full soil test ₹2,000. Clear prices, results explained.",
  crumb: "Lab testing",
  h1: "Soil, water and plant testing for horticulture crops",
  sub: "Know what your field needs before you spend on inputs.",
  tableHeading: "Tests and prices",
  head: ["Test", "What it tells you", "Price"],
  onRequest: "On request",
  rows: [
    { id: "water-sample", name: "Water sampling", tells: "Irrigation water quality and suitability", unit: "per sample" },
    {
      id: "soil-sample",
      name: "Soil sampling",
      tells: "Collection and preparation, per acre",
      unit: "per sample",
      note: "Travel and accommodation charged separately.",
    },
    { id: "leaf-sample", name: "Leaf sampling", tells: "Plant tissue nutrient status", unit: "" },
    { id: "irrigation", name: "Irrigation scheduling", tells: "A watering plan from your water data", unit: "" },
    { id: "soil-test", name: "Soil test, all parameters", tells: "Full nutrient profile, pH and organic carbon", unit: "" },
    { id: "compost-test", name: "Compost and manure test", tells: "Nutrient content of your organic inputs", unit: "per sample" },
    {
      id: "pathogen-test",
      name: "Planting material pathogen test",
      tells: "Whether your seed material carries disease",
      unit: "per sample",
    },
    { id: "nutrient", name: "Nutrient scheduling report", tells: "A season-long feeding plan", unit: "per crop" },
    { id: "quality-analysis", name: "Produce quality analysis", tells: "Quality parameters for your harvested crop", unit: "" },
  ],
  bookSoil: "Book a soil test, ₹2,000",
  askOther: "Ask about another test",
  nutrientLead: "Turn your soil test into a plan:",
  nutrientLink: "nutrient scheduling, ₹2,500 per crop",
  stepsHeading: "How testing works",
  steps: [
    { title: "Book the test", body: "Choose the tests you need and pay by UPI. We confirm on WhatsApp the same day." },
    { title: "Take the sample", body: "Follow the steps below, or book soil sampling and we collect it from your field." },
    { title: "Send it to us", body: "Pack and label the sample with your name, phone and plot, and send it by courier or drop it at our office." },
    { title: "Get your report", body: "Results come on WhatsApp with a plain explanation of what they mean for your crop." },
  ],
  sampleHeading: "Taking a soil sample correctly",
  sampleSteps: [
    "Sample before you apply fertilizer, or at least a month after the last dose.",
    "Walk the plot in a zigzag and take 10 to 15 small samples. For ginger, turmeric and other seasonal crops, sample the top 15 cm. For arecanut, banana and pepper, sample the root zone at 15 to 30 cm, about a metre from the plant.",
    "At each spot, scrape away surface litter, dig a V-shaped pit with a spade and cut a thin slice from one side.",
    "Avoid bunds, channels, manure heaps, compost pits and spots where fertilizer was just applied.",
    "Mix all the slices in a clean bucket, spread them out, and divide into quarters until about half a kilogram is left.",
    "Dry it in the shade, pack it in a clean cloth or plastic bag, and label it with your name, phone number and plot.",
  ],
  turnaroundHeading: "Turnaround",
  turnaround: "Reports are ready within {turnaround} of the sample reaching us. If anything delays a result, we tell you on WhatsApp the same day.",
  faqHeading: "Questions about testing",
  faqs: [
    {
      q: "How often should I test my soil?",
      a: "For seasonal crops such as ginger and turmeric, before every planting, especially on new land. For perennial crops such as arecanut, banana and pepper, once a year, ideally before the main fertilizer application.",
    },
    {
      q: "What does the full soil test cover?",
      a: "Soil pH, electrical conductivity, organic carbon, the major nutrients nitrogen, phosphorus and potassium, secondary nutrients and micronutrients. The report explains each result in plain language.",
    },
    {
      q: "Why test planting material for pathogens?",
      a: "Rhizome rots in ginger and turmeric often arrive with the seed. Testing before planting tells you whether your seed material carries disease, when it is still cheap to change it.",
    },
    {
      q: "Can I collect the sample myself?",
      a: "Yes. Follow the sampling steps on this page. A badly taken sample gives a misleading result, so if you are unsure, book soil sampling and we will collect it.",
    },
  ],
  longform: [
    "## Why soil testing matters in horticulture",
    "Horticulture crops are heavy feeders and expensive to grow. Ginger and banana in particular take up large amounts of potassium and nitrogen, and arecanut and pepper gardens are fertilized year after year on the same soil. Without a test, fertilizer decisions come from habit, from the input dealer or from a neighbour's field, and the result is usually too much of some nutrients and too little of others.",
    "A soil test replaces that guesswork with numbers from your own plot. It tells you the soil's pH, how much organic carbon it holds, and how much nitrogen, phosphorus, potassium and micronutrients are available to the crop. With those numbers, a fertilizer plan can add what is missing and skip what is already there. Many growers find they have been paying for phosphorus their soil did not need.",
    "## Reading a soil report",
    "### pH",
    "pH decides how available every other nutrient is. Much of Karnataka's Malnad and coastal soil is acidic, and on strongly acidic soil nutrients become locked up and roots struggle. The report tells you whether liming is needed and how much.",
    "### Electrical conductivity",
    "EC measures soluble salts. High EC, often from saline irrigation water or heavy fertilizer use, makes it harder for roots to take up water. Banana and ginger are both sensitive to it.",
    "### Organic carbon",
    "Organic carbon is the best single indicator of soil health. Low values mean poor structure, poor water holding and weak microbial life, and point towards more compost, green manure and bio inputs.",
    "### Major and micronutrients",
    "Nitrogen, phosphorus and potassium are reported as low, medium or high. Micronutrients such as zinc, boron and iron are needed in small amounts, but a shortage of any one of them limits yield regardless of everything else. Boron and zinc shortages are common in many horticulture soils.",
    "## Water, leaf and compost tests",
    "Soil is only part of the picture. Irrigation water can add salts or change soil pH over several seasons, so a water test is worth doing for any borewell source. A leaf test shows what the plant has actually absorbed, which is useful when symptoms appear despite good fertilization. Compost and manure tests show the real nutrient value of organic inputs, which varies widely between sources.",
    "## Testing planting material",
    "For ginger and turmeric, much disease enters the field with the seed rhizome. Testing planting material for pathogens before planting is the cheapest protection available against a failed season.",
    "## How often to test",
    "Test before every planting of seasonal crops, and once a year for perennial crops. Test water once a year, or whenever you change source. Results are most useful when they feed directly into a nutrient schedule, so the next step after a soil test is usually a feeding plan for your crop.",
  ],
  closing: "Not sure which test you need? Ask in a single call, ₹250.",
};

const kn: LabContent = {
  title: "ಕರ್ನಾಟಕದಲ್ಲಿ ಮಣ್ಣು ಪರೀಕ್ಷೆ, ₹250 ರಿಂದ | Horti Guru",
  description:
    "ಕರ್ನಾಟಕದ ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳಿಗೆ ಮಣ್ಣು, ನೀರು, ಎಲೆ, ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ನಾಟಿ ವಸ್ತುವಿನ ರೋಗಾಣು ಪರೀಕ್ಷೆ. ಪೂರ್ಣ ಮಣ್ಣು ಪರೀಕ್ಷೆ ₹2,000. ಸ್ಪಷ್ಟ ಬೆಲೆ, ವಿವರಿಸಿದ ಫಲಿತಾಂಶ.",
  crumb: "ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ",
  h1: "ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳಿಗೆ ಮಣ್ಣು, ನೀರು ಮತ್ತು ಗಿಡ ಪರೀಕ್ಷೆ",
  sub: "ಒಳಸುರಿಗಳಿಗೆ ಖರ್ಚು ಮಾಡುವ ಮುನ್ನ ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಏನು ಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ.",
  tableHeading: "ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಬೆಲೆಗಳು",
  head: ["ಪರೀಕ್ಷೆ", "ಇದು ಏನು ತಿಳಿಸುತ್ತದೆ", "ಬೆಲೆ"],
  onRequest: "ವಿಚಾರಿಸಿದಾಗ",
  rows: [
    { id: "water-sample", name: "ನೀರಿನ ಮಾದರಿ", tells: "ನೀರಾವರಿ ನೀರಿನ ಗುಣಮಟ್ಟ ಮತ್ತು ಸೂಕ್ತತೆ", unit: "ಪ್ರತಿ ಮಾದರಿಗೆ" },
    {
      id: "soil-sample",
      name: "ಮಣ್ಣಿನ ಮಾದರಿ ಸಂಗ್ರಹ",
      tells: "ಸಂಗ್ರಹ ಮತ್ತು ಸಿದ್ಧತೆ, ಪ್ರತಿ ಎಕರೆಗೆ",
      unit: "ಪ್ರತಿ ಮಾದರಿಗೆ",
      note: "ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿ ವೆಚ್ಚ ಪ್ರತ್ಯೇಕ.",
    },
    { id: "leaf-sample", name: "ಎಲೆ ಮಾದರಿ", tells: "ಗಿಡದ ಅಂಗಾಂಶದ ಪೋಷಕಾಂಶ ಸ್ಥಿತಿ", unit: "" },
    { id: "irrigation", name: "ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ", tells: "ನಿಮ್ಮ ನೀರಿನ ಮಾಹಿತಿಯಿಂದ ನೀರಾವರಿ ಯೋಜನೆ", unit: "" },
    { id: "soil-test", name: "ಮಣ್ಣು ಪರೀಕ್ಷೆ, ಎಲ್ಲ ಅಂಶಗಳು", tells: "ಪೂರ್ಣ ಪೋಷಕಾಂಶ ವಿವರ, pH ಮತ್ತು ಸಾವಯವ ಇಂಗಾಲ", unit: "" },
    { id: "compost-test", name: "ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ಗೊಬ್ಬರ ಪರೀಕ್ಷೆ", tells: "ನಿಮ್ಮ ಸಾವಯವ ಒಳಸುರಿಗಳ ಪೋಷಕಾಂಶ", unit: "ಪ್ರತಿ ಮಾದರಿಗೆ" },
    {
      id: "pathogen-test",
      name: "ನಾಟಿ ವಸ್ತುವಿನ ರೋಗಾಣು ಪರೀಕ್ಷೆ",
      tells: "ನಿಮ್ಮ ಬೀಜ ವಸ್ತುವಿನಲ್ಲಿ ರೋಗವಿದೆಯೇ",
      unit: "ಪ್ರತಿ ಮಾದರಿಗೆ",
    },
    { id: "nutrient", name: "ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿ ವರದಿ", tells: "ಇಡೀ ಹಂಗಾಮಿನ ಪೋಷಣಾ ಯೋಜನೆ", unit: "ಪ್ರತಿ ಬೆಳೆಗೆ" },
    { id: "quality-analysis", name: "ಉತ್ಪನ್ನದ ಗುಣಮಟ್ಟ ವಿಶ್ಲೇಷಣೆ", tells: "ಕೊಯ್ಲು ಮಾಡಿದ ಬೆಳೆಯ ಗುಣಮಟ್ಟದ ಅಂಶಗಳು", unit: "" },
  ],
  bookSoil: "ಮಣ್ಣು ಪರೀಕ್ಷೆ ಕಾಯ್ದಿರಿಸಿ, ₹2,000",
  askOther: "ಬೇರೆ ಪರೀಕ್ಷೆಯ ಬಗ್ಗೆ ಕೇಳಿ",
  nutrientLead: "ನಿಮ್ಮ ಮಣ್ಣು ಪರೀಕ್ಷೆಯನ್ನು ಯೋಜನೆಯಾಗಿಸಿ:",
  nutrientLink: "ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿ, ಪ್ರತಿ ಬೆಳೆಗೆ ₹2,500",
  stepsHeading: "ಪರೀಕ್ಷೆ ಹೇಗೆ ನಡೆಯುತ್ತದೆ",
  steps: [
    { title: "ಪರೀಕ್ಷೆ ಕಾಯ್ದಿರಿಸಿ", body: "ಬೇಕಾದ ಪರೀಕ್ಷೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ UPI ಮೂಲಕ ಪಾವತಿಸಿ. ಅದೇ ದಿನ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಿಸುತ್ತೇವೆ." },
    { title: "ಮಾದರಿ ತೆಗೆಯಿರಿ", body: "ಕೆಳಗಿನ ಹಂತಗಳನ್ನು ಪಾಲಿಸಿ, ಅಥವಾ ಮಣ್ಣಿನ ಮಾದರಿ ಸಂಗ್ರಹ ಕಾಯ್ದಿರಿಸಿ, ನಾವು ನಿಮ್ಮ ಹೊಲದಿಂದ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ." },
    { title: "ನಮಗೆ ಕಳುಹಿಸಿ", body: "ಮಾದರಿಯನ್ನು ಪ್ಯಾಕ್ ಮಾಡಿ ನಿಮ್ಮ ಹೆಸರು, ದೂರವಾಣಿ ಮತ್ತು ಜಮೀನಿನ ವಿವರ ಬರೆದು, ಕೊರಿಯರ್ ಮೂಲಕ ಕಳುಹಿಸಿ ಅಥವಾ ನಮ್ಮ ಕಚೇರಿಗೆ ತಲುಪಿಸಿ." },
    { title: "ವರದಿ ಪಡೆಯಿರಿ", body: "ಫಲಿತಾಂಶಗಳು ನಿಮ್ಮ ಬೆಳೆಗೆ ಅವುಗಳ ಅರ್ಥದ ಸರಳ ವಿವರಣೆಯೊಂದಿಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬರುತ್ತವೆ." },
  ],
  sampleHeading: "ಮಣ್ಣಿನ ಮಾದರಿಯನ್ನು ಸರಿಯಾಗಿ ತೆಗೆಯುವುದು",
  sampleSteps: [
    "ಗೊಬ್ಬರ ಹಾಕುವ ಮುನ್ನ, ಅಥವಾ ಕೊನೆಯ ಗೊಬ್ಬರದ ಕನಿಷ್ಠ ಒಂದು ತಿಂಗಳ ನಂತರ ಮಾದರಿ ತೆಗೆಯಿರಿ.",
    "ಜಮೀನಿನಲ್ಲಿ ಅಂಕುಡೊಂಕಾಗಿ ನಡೆದು 10 ರಿಂದ 15 ಸಣ್ಣ ಮಾದರಿಗಳನ್ನು ತೆಗೆಯಿರಿ. ಶುಂಠಿ, ಅರಿಶಿನದಂತಹ ಹಂಗಾಮಿನ ಬೆಳೆಗಳಿಗೆ ಮೇಲಿನ 15 ಸೆಂ.ಮೀ. ಅಡಿಕೆ, ಬಾಳೆ ಮತ್ತು ಕಾಳುಮೆಣಸಿಗೆ, ಗಿಡದಿಂದ ಸುಮಾರು ಒಂದು ಮೀಟರ್ ದೂರದಲ್ಲಿ 15 ರಿಂದ 30 ಸೆಂ.ಮೀ ಬೇರು ವಲಯದಿಂದ.",
    "ಪ್ರತಿ ಜಾಗದಲ್ಲಿ ಮೇಲಿನ ಕಸ ತೆಗೆದು, ಗುದ್ದಲಿಯಿಂದ V ಆಕಾರದ ಗುಂಡಿ ತೋಡಿ, ಒಂದು ಬದಿಯಿಂದ ತೆಳುವಾದ ಪದರ ಕತ್ತರಿಸಿ.",
    "ಬದುಗಳು, ಕಾಲುವೆಗಳು, ಗೊಬ್ಬರದ ರಾಶಿ, ಕಾಂಪೋಸ್ಟ್ ಗುಂಡಿ ಮತ್ತು ಈಗ ತಾನೇ ಗೊಬ್ಬರ ಹಾಕಿದ ಜಾಗಗಳನ್ನು ಬಿಡಿ.",
    "ಎಲ್ಲ ಪದರಗಳನ್ನು ಸ್ವಚ್ಛ ಬಕೆಟ್‌ನಲ್ಲಿ ಬೆರೆಸಿ, ಹರಡಿ, ಸುಮಾರು ಅರ್ಧ ಕಿಲೋ ಉಳಿಯುವವರೆಗೆ ನಾಲ್ಕು ಭಾಗ ಮಾಡಿ ಕಡಿಮೆ ಮಾಡಿ.",
    "ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ, ಸ್ವಚ್ಛ ಬಟ್ಟೆ ಅಥವಾ ಪ್ಲಾಸ್ಟಿಕ್ ಚೀಲದಲ್ಲಿ ಪ್ಯಾಕ್ ಮಾಡಿ, ನಿಮ್ಮ ಹೆಸರು, ದೂರವಾಣಿ ಮತ್ತು ಜಮೀನಿನ ವಿವರ ಬರೆಯಿರಿ.",
  ],
  turnaroundHeading: "ವರದಿಗೆ ಬೇಕಾದ ಸಮಯ",
  turnaround: "ಮಾದರಿ ನಮಗೆ ತಲುಪಿದ {turnaround} ಒಳಗೆ ವರದಿ ಸಿದ್ಧವಾಗುತ್ತದೆ. ಯಾವುದೇ ಕಾರಣದಿಂದ ತಡವಾದರೆ, ಅದೇ ದಿನ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ತಿಳಿಸುತ್ತೇವೆ.",
  faqHeading: "ಪರೀಕ್ಷೆಯ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು",
  faqs: [
    {
      q: "ಮಣ್ಣನ್ನು ಎಷ್ಟು ಬಾರಿ ಪರೀಕ್ಷಿಸಬೇಕು?",
      a: "ಶುಂಠಿ, ಅರಿಶಿನದಂತಹ ಹಂಗಾಮಿನ ಬೆಳೆಗಳಿಗೆ ಪ್ರತಿ ನಾಟಿಗೆ ಮುನ್ನ, ವಿಶೇಷವಾಗಿ ಹೊಸ ಜಮೀನಿನಲ್ಲಿ. ಅಡಿಕೆ, ಬಾಳೆ, ಕಾಳುಮೆಣಸಿನಂತಹ ಬಹುವಾರ್ಷಿಕ ಬೆಳೆಗಳಿಗೆ ವರ್ಷಕ್ಕೊಮ್ಮೆ, ಮುಖ್ಯ ಗೊಬ್ಬರ ಹಾಕುವ ಮುನ್ನ.",
    },
    {
      q: "ಪೂರ್ಣ ಮಣ್ಣು ಪರೀಕ್ಷೆಯಲ್ಲಿ ಏನಿದೆ?",
      a: "ಮಣ್ಣಿನ pH, ವಿದ್ಯುತ್ ವಾಹಕತೆ, ಸಾವಯವ ಇಂಗಾಲ, ಸಾರಜನಕ, ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಎಂಬ ಪ್ರಮುಖ ಪೋಷಕಾಂಶಗಳು, ದ್ವಿತೀಯ ಮತ್ತು ಲಘು ಪೋಷಕಾಂಶಗಳು. ವರದಿ ಪ್ರತಿ ಫಲಿತಾಂಶವನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸುತ್ತದೆ.",
    },
    {
      q: "ನಾಟಿ ವಸ್ತುವನ್ನು ರೋಗಾಣುಗಳಿಗೆ ಏಕೆ ಪರೀಕ್ಷಿಸಬೇಕು?",
      a: "ಶುಂಠಿ ಮತ್ತು ಅರಿಶಿನದ ಗಡ್ಡೆ ಕೊಳೆ ಹೆಚ್ಚಾಗಿ ಬೀಜದೊಂದಿಗೇ ಬರುತ್ತದೆ. ನಾಟಿಗೆ ಮುನ್ನ ಪರೀಕ್ಷಿಸಿದರೆ, ಬೀಜ ಬದಲಿಸುವುದು ಇನ್ನೂ ಅಗ್ಗವಾಗಿರುವಾಗಲೇ ರೋಗವಿದೆಯೇ ಎಂದು ತಿಳಿಯುತ್ತದೆ.",
    },
    {
      q: "ಮಾದರಿಯನ್ನು ನಾನೇ ಸಂಗ್ರಹಿಸಬಹುದೇ?",
      a: "ಹೌದು. ಈ ಪುಟದ ಮಾದರಿ ಹಂತಗಳನ್ನು ಪಾಲಿಸಿ. ಸರಿಯಾಗಿ ತೆಗೆಯದ ಮಾದರಿ ತಪ್ಪು ಫಲಿತಾಂಶ ನೀಡುತ್ತದೆ, ಖಚಿತವಿಲ್ಲದಿದ್ದರೆ ಮಣ್ಣಿನ ಮಾದರಿ ಸಂಗ್ರಹ ಕಾಯ್ದಿರಿಸಿ, ನಾವೇ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ.",
    },
  ],
  longform: [
    "## ತೋಟಗಾರಿಕೆಯಲ್ಲಿ ಮಣ್ಣು ಪರೀಕ್ಷೆ ಏಕೆ ಮುಖ್ಯ",
    "ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳು ಹೆಚ್ಚು ಪೋಷಕಾಂಶ ಬೇಡುತ್ತವೆ ಮತ್ತು ಬೆಳೆಯಲು ದುಬಾರಿ. ವಿಶೇಷವಾಗಿ ಶುಂಠಿ ಮತ್ತು ಬಾಳೆ ಹೆಚ್ಚು ಪೊಟ್ಯಾಷ್ ಮತ್ತು ಸಾರಜನಕ ಹೀರುತ್ತವೆ, ಅಡಿಕೆ ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ತೋಟಗಳಿಗೆ ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ಅದೇ ಮಣ್ಣಿಗೆ ಗೊಬ್ಬರ ಹಾಕಲಾಗುತ್ತದೆ. ಪರೀಕ್ಷೆ ಇಲ್ಲದಿದ್ದರೆ ಗೊಬ್ಬರದ ನಿರ್ಧಾರಗಳು ಅಭ್ಯಾಸ, ಅಂಗಡಿಯವರು ಅಥವಾ ನೆರೆಯವರ ಹೊಲದಿಂದ ಬರುತ್ತವೆ, ಫಲಿತಾಂಶ ಸಾಮಾನ್ಯವಾಗಿ ಕೆಲವು ಪೋಷಕಾಂಶ ಹೆಚ್ಚು, ಕೆಲವು ಕಡಿಮೆ.",
    "ಮಣ್ಣು ಪರೀಕ್ಷೆ ಆ ಊಹೆಯ ಬದಲು ನಿಮ್ಮದೇ ಜಮೀನಿನ ಅಂಕಿಗಳನ್ನು ನೀಡುತ್ತದೆ. ಮಣ್ಣಿನ pH, ಎಷ್ಟು ಸಾವಯವ ಇಂಗಾಲವಿದೆ, ಮತ್ತು ಬೆಳೆಗೆ ಎಷ್ಟು ಸಾರಜನಕ, ರಂಜಕ, ಪೊಟ್ಯಾಷ್ ಮತ್ತು ಲಘು ಪೋಷಕಾಂಶಗಳು ಲಭ್ಯವಿವೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ. ಆ ಅಂಕಿಗಳಿಂದ, ಗೊಬ್ಬರ ಯೋಜನೆ ಕೊರತೆಯಿರುವುದನ್ನು ಸೇರಿಸಿ, ಈಗಾಗಲೇ ಇರುವುದನ್ನು ಬಿಡಬಹುದು. ತಮ್ಮ ಮಣ್ಣಿಗೆ ಬೇಡವಾದ ರಂಜಕಕ್ಕೆ ಹಣ ಕೊಡುತ್ತಿದ್ದೆವು ಎಂದು ಹಲವು ಬೆಳೆಗಾರರಿಗೆ ಗೊತ್ತಾಗುತ್ತದೆ.",
    "## ಮಣ್ಣು ವರದಿಯನ್ನು ಓದುವುದು",
    "### pH",
    "ಉಳಿದ ಪ್ರತಿ ಪೋಷಕಾಂಶ ಎಷ್ಟು ಲಭ್ಯ ಎಂದು pH ನಿರ್ಧರಿಸುತ್ತದೆ. ಕರ್ನಾಟಕದ ಮಲೆನಾಡು ಮತ್ತು ಕರಾವಳಿಯ ಹೆಚ್ಚಿನ ಮಣ್ಣು ಆಮ್ಲೀಯ, ಮತ್ತು ತೀವ್ರ ಆಮ್ಲೀಯ ಮಣ್ಣಿನಲ್ಲಿ ಪೋಷಕಾಂಶಗಳು ಬಂಧಿತವಾಗಿ ಬೇರುಗಳು ಕಷ್ಟಪಡುತ್ತವೆ. ಸುಣ್ಣ ಬೇಕೇ, ಎಷ್ಟು ಎಂದು ವರದಿ ತಿಳಿಸುತ್ತದೆ.",
    "### ವಿದ್ಯುತ್ ವಾಹಕತೆ",
    "EC ಕರಗುವ ಲವಣಗಳನ್ನು ಅಳೆಯುತ್ತದೆ. ಹೆಚ್ಚಿನ EC, ಸಾಮಾನ್ಯವಾಗಿ ಉಪ್ಪು ನೀರಿನ ನೀರಾವರಿ ಅಥವಾ ಅತಿ ಗೊಬ್ಬರದಿಂದ, ಬೇರುಗಳು ನೀರು ಹೀರುವುದನ್ನು ಕಷ್ಟಗೊಳಿಸುತ್ತದೆ. ಬಾಳೆ ಮತ್ತು ಶುಂಠಿ ಎರಡೂ ಇದಕ್ಕೆ ಸೂಕ್ಷ್ಮ.",
    "### ಸಾವಯವ ಇಂಗಾಲ",
    "ಸಾವಯವ ಇಂಗಾಲ ಮಣ್ಣಿನ ಆರೋಗ್ಯದ ಅತ್ಯುತ್ತಮ ಸೂಚಕ. ಕಡಿಮೆ ಮೌಲ್ಯ ಎಂದರೆ ಕಳಪೆ ರಚನೆ, ಕಡಿಮೆ ನೀರು ಹಿಡಿದಿಡುವಿಕೆ ಮತ್ತು ದುರ್ಬಲ ಸೂಕ್ಷ್ಮಜೀವಿ ಚಟುವಟಿಕೆ, ಮತ್ತು ಹೆಚ್ಚು ಕಾಂಪೋಸ್ಟ್, ಹಸಿರೆಲೆ ಗೊಬ್ಬರ ಮತ್ತು ಜೈವಿಕ ಒಳಸುರಿಗಳ ಅಗತ್ಯವನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    "### ಪ್ರಮುಖ ಮತ್ತು ಲಘು ಪೋಷಕಾಂಶಗಳು",
    "ಸಾರಜನಕ, ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಅನ್ನು ಕಡಿಮೆ, ಮಧ್ಯಮ ಅಥವಾ ಹೆಚ್ಚು ಎಂದು ವರದಿ ಮಾಡಲಾಗುತ್ತದೆ. ಸತು, ಬೋರಾನ್, ಕಬ್ಬಿಣದಂತಹ ಲಘು ಪೋಷಕಾಂಶಗಳು ಸ್ವಲ್ಪ ಪ್ರಮಾಣದಲ್ಲಿ ಬೇಕು, ಆದರೆ ಯಾವುದೇ ಒಂದರ ಕೊರತೆ ಉಳಿದೆಲ್ಲ ಸರಿಯಿದ್ದರೂ ಇಳುವರಿ ಕುಗ್ಗಿಸುತ್ತದೆ. ಹಲವು ತೋಟಗಾರಿಕೆ ಮಣ್ಣುಗಳಲ್ಲಿ ಬೋರಾನ್ ಮತ್ತು ಸತುವಿನ ಕೊರತೆ ಸಾಮಾನ್ಯ.",
    "## ನೀರು, ಎಲೆ ಮತ್ತು ಕಾಂಪೋಸ್ಟ್ ಪರೀಕ್ಷೆ",
    "ಮಣ್ಣು ಚಿತ್ರದ ಒಂದು ಭಾಗ ಮಾತ್ರ. ನೀರಾವರಿ ನೀರು ಹಲವು ಹಂಗಾಮುಗಳಲ್ಲಿ ಲವಣ ಸೇರಿಸಬಹುದು ಅಥವಾ ಮಣ್ಣಿನ pH ಬದಲಿಸಬಹುದು, ಹೀಗಾಗಿ ಯಾವುದೇ ಕೊಳವೆಬಾವಿ ನೀರಿಗೆ ಪರೀಕ್ಷೆ ಯೋಗ್ಯ. ಎಲೆ ಪರೀಕ್ಷೆ ಗಿಡ ನಿಜವಾಗಿ ಏನನ್ನು ಹೀರಿದೆ ಎಂದು ತೋರಿಸುತ್ತದೆ, ಉತ್ತಮ ಗೊಬ್ಬರದ ನಡುವೆಯೂ ಲಕ್ಷಣ ಕಂಡಾಗ ಉಪಯುಕ್ತ. ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ಗೊಬ್ಬರ ಪರೀಕ್ಷೆ ಸಾವಯವ ಒಳಸುರಿಗಳ ನಿಜವಾದ ಪೋಷಕಾಂಶ ಮೌಲ್ಯ ತೋರಿಸುತ್ತದೆ, ಇದು ಮೂಲದಿಂದ ಮೂಲಕ್ಕೆ ತುಂಬಾ ಬದಲಾಗುತ್ತದೆ.",
    "## ನಾಟಿ ವಸ್ತುವಿನ ಪರೀಕ್ಷೆ",
    "ಶುಂಠಿ ಮತ್ತು ಅರಿಶಿನದಲ್ಲಿ ಹೆಚ್ಚಿನ ರೋಗ ಬೀಜದ ಗಡ್ಡೆಯೊಂದಿಗೇ ಹೊಲಕ್ಕೆ ಬರುತ್ತದೆ. ನಾಟಿಗೆ ಮುನ್ನ ನಾಟಿ ವಸ್ತುವನ್ನು ರೋಗಾಣುಗಳಿಗೆ ಪರೀಕ್ಷಿಸುವುದು ವಿಫಲ ಹಂಗಾಮಿನ ವಿರುದ್ಧ ಅತಿ ಅಗ್ಗದ ರಕ್ಷಣೆ.",
    "## ಎಷ್ಟು ಬಾರಿ ಪರೀಕ್ಷಿಸಬೇಕು",
    "ಹಂಗಾಮಿನ ಬೆಳೆಗಳಿಗೆ ಪ್ರತಿ ನಾಟಿಗೆ ಮುನ್ನ, ಬಹುವಾರ್ಷಿಕ ಬೆಳೆಗಳಿಗೆ ವರ್ಷಕ್ಕೊಮ್ಮೆ. ನೀರನ್ನು ವರ್ಷಕ್ಕೊಮ್ಮೆ, ಅಥವಾ ಮೂಲ ಬದಲಿಸಿದಾಗಲೆಲ್ಲ. ಫಲಿತಾಂಶಗಳು ನೇರವಾಗಿ ಪೋಷಕಾಂಶ ವೇಳಾಪಟ್ಟಿಗೆ ಬಳಕೆಯಾದಾಗ ಹೆಚ್ಚು ಉಪಯುಕ್ತ, ಹೀಗಾಗಿ ಮಣ್ಣು ಪರೀಕ್ಷೆಯ ನಂತರದ ಹೆಜ್ಜೆ ಸಾಮಾನ್ಯವಾಗಿ ನಿಮ್ಮ ಬೆಳೆಗೆ ಪೋಷಣಾ ಯೋಜನೆ.",
  ],
  closing: "ಯಾವ ಪರೀಕ್ಷೆ ಬೇಕು ಎಂದು ಖಚಿತವಿಲ್ಲವೇ? ₹250 ರ ಒಂದು ಕರೆಯಲ್ಲಿ ಕೇಳಿ.",
};

const hi: LabContent = {
  title: "कर्नाटक में मिट्टी जाँच, कीमत ₹250 से | Horti Guru",
  description:
    "कर्नाटक में बागवानी फ़सलों के लिए मिट्टी, पानी, पत्ती, कम्पोस्ट और रोपण सामग्री की रोगाणु जाँच। पूरी मिट्टी जाँच ₹2,000। साफ़ कीमतें, समझाए गए नतीजे।",
  crumb: "प्रयोगशाला जाँच",
  h1: "बागवानी फ़सलों के लिए मिट्टी, पानी और पौधों की जाँच",
  sub: "इनपुट पर ख़र्च करने से पहले जानें कि आपके खेत को क्या चाहिए।",
  tableHeading: "जाँच और कीमतें",
  head: ["जाँच", "यह क्या बताती है", "कीमत"],
  onRequest: "पूछने पर",
  rows: [
    { id: "water-sample", name: "पानी का नमूना", tells: "सिंचाई के पानी की गुणवत्ता और उपयुक्तता", unit: "प्रति नमूना" },
    {
      id: "soil-sample",
      name: "मिट्टी का नमूना लेना",
      tells: "नमूना लेना और तैयार करना, प्रति एकड़",
      unit: "प्रति नमूना",
      note: "यात्रा और ठहरने का ख़र्च अलग से।",
    },
    { id: "leaf-sample", name: "पत्ती का नमूना", tells: "पौधे के ऊतकों में पोषक तत्वों की स्थिति", unit: "" },
    { id: "irrigation", name: "सिंचाई शेड्यूल", tells: "आपके पानी के आँकड़ों से सिंचाई योजना", unit: "" },
    { id: "soil-test", name: "मिट्टी जाँच, सभी मानक", tells: "पूरा पोषक तत्व विवरण, pH और जैविक कार्बन", unit: "" },
    { id: "compost-test", name: "कम्पोस्ट और खाद जाँच", tells: "आपके जैविक इनपुट में पोषक तत्व", unit: "प्रति नमूना" },
    {
      id: "pathogen-test",
      name: "रोपण सामग्री की रोगाणु जाँच",
      tells: "आपकी बीज सामग्री में रोग है या नहीं",
      unit: "प्रति नमूना",
    },
    { id: "nutrient", name: "पोषण शेड्यूल रिपोर्ट", tells: "पूरे सीज़न की खाद योजना", unit: "प्रति फ़सल" },
    { id: "quality-analysis", name: "उपज की गुणवत्ता का विश्लेषण", tells: "खोदी गई फ़सल के गुणवत्ता मानक", unit: "" },
  ],
  bookSoil: "मिट्टी जाँच बुक करें, ₹2,000",
  askOther: "किसी और जाँच के बारे में पूछें",
  nutrientLead: "अपनी मिट्टी जाँच को योजना में बदलें:",
  nutrientLink: "पोषण शेड्यूल, ₹2,500 प्रति फ़सल",
  stepsHeading: "जाँच कैसे होती है",
  steps: [
    { title: "जाँच बुक करें", body: "ज़रूरी जाँचें चुनें और UPI से भुगतान करें। हम उसी दिन व्हाट्सऐप पर पुष्टि करते हैं।" },
    { title: "नमूना लें", body: "नीचे दिए कदम अपनाएँ, या मिट्टी का नमूना लेना बुक करें और हम आपके खेत से ले लेंगे।" },
    { title: "हमें भेजें", body: "नमूने को पैक करके उस पर अपना नाम, फ़ोन और खेत का ब्योरा लिखें, और कूरियर से भेजें या हमारे दफ़्तर पर दें।" },
    { title: "रिपोर्ट पाएँ", body: "नतीजे व्हाट्सऐप पर आते हैं, साथ में सरल भाषा में बताया जाता है कि आपकी फ़सल के लिए उनका क्या मतलब है।" },
  ],
  sampleHeading: "मिट्टी का नमूना सही तरीके से लेना",
  sampleSteps: [
    "खाद डालने से पहले, या आख़िरी खुराक के कम से कम एक महीने बाद नमूना लें।",
    "खेत में टेढ़े-मेढ़े चलते हुए 10 से 15 छोटे नमूने लें। अदरक, हल्दी जैसी मौसमी फ़सलों के लिए ऊपरी 15 सेमी। सुपारी, केला और काली मिर्च के लिए पौधे से लगभग एक मीटर दूर, 15 से 30 सेमी गहराई के जड़ क्षेत्र से।",
    "हर जगह ऊपर का कचरा हटाएँ, फावड़े से V आकार का गड्ढा खोदें और एक तरफ़ से पतली परत काटें।",
    "मेड़, नालियाँ, खाद के ढेर, कम्पोस्ट गड्ढे और हाल में खाद डाली गई जगहें छोड़ दें।",
    "सारी परतें एक साफ़ बाल्टी में मिलाएँ, फैलाएँ, और चार हिस्से करते हुए तब तक घटाएँ जब तक लगभग आधा किलो न बचे।",
    "छाया में सुखाएँ, साफ़ कपड़े या प्लास्टिक थैली में पैक करें, और उस पर अपना नाम, फ़ोन नंबर और खेत का ब्योरा लिखें।",
  ],
  turnaroundHeading: "रिपोर्ट में लगने वाला समय",
  turnaround: "नमूना हम तक पहुँचने के {turnaround} के भीतर रिपोर्ट तैयार हो जाती है। अगर किसी वजह से देर हो, तो हम उसी दिन व्हाट्सऐप पर बताते हैं।",
  faqHeading: "जाँच के बारे में सवाल",
  faqs: [
    {
      q: "मिट्टी की जाँच कितनी बार करवानी चाहिए?",
      a: "अदरक और हल्दी जैसी मौसमी फ़सलों के लिए हर रोपाई से पहले, ख़ासकर नई ज़मीन पर। सुपारी, केला और काली मिर्च जैसी बहुवर्षीय फ़सलों के लिए साल में एक बार, मुख्य खाद डालने से पहले।",
    },
    {
      q: "पूरी मिट्टी जाँच में क्या-क्या आता है?",
      a: "मिट्टी का pH, विद्युत चालकता, जैविक कार्बन, मुख्य पोषक तत्व नाइट्रोजन, फ़ॉस्फ़ोरस और पोटाश, द्वितीयक और सूक्ष्म पोषक तत्व। रिपोर्ट हर नतीजे को सरल भाषा में समझाती है।",
    },
    {
      q: "रोपण सामग्री की रोगाणु जाँच क्यों करवाएँ?",
      a: "अदरक और हल्दी में प्रकंद सड़न अक्सर बीज के साथ ही आती है। रोपाई से पहले जाँच से पता चलता है कि बीज सामग्री में रोग है या नहीं, जब उसे बदलना अभी सस्ता है।",
    },
    {
      q: "क्या मैं नमूना ख़ुद ले सकता हूँ?",
      a: "हाँ। इस पेज पर दिए नमूना लेने के कदम अपनाएँ। ग़लत तरीके से लिया नमूना ग़लत नतीजा देता है, इसलिए पक्का न हो तो मिट्टी का नमूना लेना बुक करें, हम ले लेंगे।",
    },
  ],
  longform: [
    "## बागवानी में मिट्टी जाँच क्यों ज़रूरी है",
    "बागवानी फ़सलें ज़्यादा पोषण माँगती हैं और उगाने में महँगी होती हैं। ख़ासकर अदरक और केला बहुत पोटाश और नाइट्रोजन लेते हैं, और सुपारी व काली मिर्च के बाग़ों में साल दर साल उसी मिट्टी में खाद डाली जाती है। जाँच के बिना खाद के फ़ैसले आदत, दुकानदार या पड़ोसी के खेत से आते हैं, और नतीजा आमतौर पर कुछ पोषक तत्व ज़्यादा और कुछ कम होता है।",
    "मिट्टी जाँच उस अंदाज़े की जगह आपके अपने खेत के आँकड़े देती है। यह मिट्टी का pH, जैविक कार्बन की मात्रा, और फ़सल के लिए उपलब्ध नाइट्रोजन, फ़ॉस्फ़ोरस, पोटाश और सूक्ष्म पोषक तत्व बताती है। इन आँकड़ों से खाद योजना वह जोड़ सकती है जो कम है और वह छोड़ सकती है जो पहले से है। कई उत्पादकों को पता चलता है कि वे ऐसे फ़ॉस्फ़ोरस के पैसे दे रहे थे जिसकी उनकी मिट्टी को ज़रूरत नहीं थी।",
    "## मिट्टी की रिपोर्ट कैसे पढ़ें",
    "### pH",
    "pH तय करता है कि बाक़ी हर पोषक तत्व कितना उपलब्ध है। कर्नाटक के मलनाड और तटीय इलाक़ों की ज़्यादातर मिट्टी अम्लीय है, और बहुत अम्लीय मिट्टी में पोषक तत्व बँध जाते हैं और जड़ें संघर्ष करती हैं। रिपोर्ट बताती है कि चूना चाहिए या नहीं, और कितना।",
    "### विद्युत चालकता",
    "EC घुलनशील लवणों को मापती है। ज़्यादा EC, अक्सर खारे सिंचाई पानी या ज़्यादा खाद से, जड़ों के लिए पानी लेना मुश्किल बनाती है। केला और अदरक दोनों इसके प्रति संवेदनशील हैं।",
    "### जैविक कार्बन",
    "जैविक कार्बन मिट्टी की सेहत का सबसे अच्छा अकेला संकेतक है। कम मान का मतलब ख़राब बनावट, कम पानी रोकना और कमज़ोर सूक्ष्मजीव जीवन है, और यह ज़्यादा कम्पोस्ट, हरी खाद और जैविक इनपुट की ओर इशारा करता है।",
    "### मुख्य और सूक्ष्म पोषक तत्व",
    "नाइट्रोजन, फ़ॉस्फ़ोरस और पोटाश कम, मध्यम या ज़्यादा के रूप में बताए जाते हैं। ज़िंक, बोरॉन और आयरन जैसे सूक्ष्म पोषक तत्व थोड़ी मात्रा में चाहिए, लेकिन इनमें से किसी एक की भी कमी बाक़ी सब ठीक होने पर भी उपज घटा देती है। कई बागवानी मिट्टियों में बोरॉन और ज़िंक की कमी आम है।",
    "## पानी, पत्ती और कम्पोस्ट जाँच",
    "मिट्टी तस्वीर का सिर्फ़ एक हिस्सा है। सिंचाई का पानी कई सीज़न में लवण जोड़ सकता है या मिट्टी का pH बदल सकता है, इसलिए हर बोरवेल स्रोत की जाँच फ़ायदेमंद है। पत्ती जाँच बताती है कि पौधे ने असल में क्या लिया है, जो अच्छी खाद के बावजूद लक्षण दिखने पर काम आती है। कम्पोस्ट और खाद जाँच जैविक इनपुट का असली पोषण मूल्य बताती है, जो स्रोत के हिसाब से बहुत बदलता है।",
    "## रोपण सामग्री की जाँच",
    "अदरक और हल्दी में ज़्यादातर रोग बीज प्रकंद के साथ ही खेत में आता है। रोपाई से पहले रोपण सामग्री की रोगाणु जाँच, नाकाम सीज़न से बचने का सबसे सस्ता उपाय है।",
    "## कितनी बार जाँच करें",
    "मौसमी फ़सलों के लिए हर रोपाई से पहले, और बहुवर्षीय फ़सलों के लिए साल में एक बार। पानी की जाँच साल में एक बार, या जब भी स्रोत बदलें। नतीजे तब सबसे काम के होते हैं जब वे सीधे पोषण शेड्यूल में इस्तेमाल हों, इसलिए मिट्टी जाँच के बाद अगला कदम आमतौर पर आपकी फ़सल के लिए खाद योजना है।",
  ],
  closing: "पक्का नहीं कि कौन-सी जाँच चाहिए? ₹250 की एक कॉल में पूछें।",
};

const lab: Record<Locale, LabContent> = { en, kn, hi };
export default lab;
