import type { Locale } from "@/lib/i18n";

type Product = { name: string; latin?: string; does: string; when: string };
type Category = { id: string; name: string; intro: string; products: Product[] };

export type BioInputsContent = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  sub: string;
  priced: string;
  categories: Category[];
  enquiryHeading: string;
  enquiryIntro: string;
  problemHint: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  longform: string[];
  closing: string;
};

const en: BioInputsContent = {
  title: "Bio Fertilizers and Bio Pesticides, Karnataka | Horti Guru",
  description:
    "Bio fertilizers, bio pesticides, green manure seed and chelated micronutrients for ginger, turmeric, arecanut, banana and pepper, specified to your field.",
  crumb: "Bio inputs",
  h1: "Bio fertilizers, bio pesticides and green manure seed",
  sub: "Each input is recommended and quantified for your crop, soil and acreage, so you buy what the field needs and nothing more.",
  priced: "Priced to your field size and requirement",
  categories: [
    {
      id: "bio-fertilizers",
      name: "Bio fertilizers",
      intro: "Living microbes that fix nitrogen or free up phosphorus, potassium and zinc already in your soil. They work best with good organic matter.",
      products: [
        { name: "Azospirillum", does: "Fixes atmospheric nitrogen around the roots and supplies part of the crop's nitrogen.", when: "At planting, mixed into compost or applied to the root zone." },
        { name: "Azotobacter", does: "Free-living nitrogen fixer that also releases growth-promoting substances.", when: "At planting with well-rotted manure, and again after the first rains." },
        { name: "PSB", latin: "Phosphate solubilising bacteria", does: "Releases phosphorus locked in the soil so roots can take it up.", when: "At planting, with organic manure." },
        { name: "VAM", latin: "Arbuscular mycorrhiza", does: "Extends the root system, improving phosphorus and water uptake.", when: "Close to the roots at planting or in the nursery." },
        { name: "KMB", latin: "Potash mobilising bacteria", does: "Makes soil potassium available to the plant.", when: "With organic manure at planting and during active growth." },
        { name: "AMC", latin: "Microbial consortium", does: "Nitrogen-fixing, phosphorus- and zinc-solubilising microbes combined in one product.", when: "Soil application or drench at planting and during growth." },
      ],
    },
    {
      id: "bio-pesticides",
      name: "Bio pesticides",
      intro: "Beneficial fungi and bacteria that suppress soil-borne disease, nematodes and insect pests. Most effective when applied before the problem peaks.",
      products: [
        { name: "Trichoderma", does: "Suppresses soil-borne rots and wilts, including those that cause rhizome rot and foot rot.", when: "Seed treatment, or multiplied in compost and applied before planting and the monsoon." },
        { name: "Pseudomonas", latin: "Pseudomonas fluorescens", does: "Protects roots and leaves against bacterial and fungal diseases.", when: "Seed treatment, soil drench or foliar spray." },
        { name: "Paecilomyces", latin: "Purpureocillium lilacinum", does: "Attacks root-knot and burrowing nematodes in the soil.", when: "Soil application with organic manure at planting." },
        { name: "Beauveria", latin: "Beauveria bassiana", does: "Infects and kills insect pests such as shoot borers and beetles.", when: "Foliar spray in humid weather, in the evening." },
        { name: "Pochonia", latin: "Pochonia chlamydosporia", does: "Parasitises nematode eggs in the root zone.", when: "Soil application at planting and once during the season." },
        { name: "Bacillus", latin: "Bacillus subtilis and related strains", does: "Suppresses a wide range of fungal and bacterial diseases and supports root growth.", when: "Seed treatment, drench or spray." },
      ],
    },
    {
      id: "green-manure",
      name: "Green manure seed",
      intro: "Fast-growing crops grown and turned into the soil to add organic matter and nitrogen before or between main crops.",
      products: [
        { name: "Mucuna", latin: "Velvet bean", does: "Vigorous legume cover that adds nitrogen and organic matter and smothers weeds.", when: "Sow at the start of the monsoon, often between arecanut rows. Cut back or incorporate at flowering." },
        { name: "Dhaincha", latin: "Sesbania", does: "Quick biomass and nitrogen, and tolerates waterlogged and saline patches.", when: "Sow with the first rains and incorporate after 45 to 60 days." },
        { name: "Sun hemp", latin: "Crotalaria juncea", does: "Fast-growing legume that builds organic matter in a short window.", when: "Sow before the main crop and incorporate after 45 to 60 days." },
        { name: "Mustard", does: "Short-season crop that helps suppress some soil-borne diseases and nematodes when turned in green.", when: "Sow in the cooler months and incorporate at flowering." },
      ],
    },
    {
      id: "micronutrients",
      name: "Chelated micronutrients",
      intro: "Zinc, iron, manganese and copper in chelated forms that stay available in the soil and are taken up readily through the leaf.",
      products: [
        { name: "Chelated micronutrient mixes", does: "Correct shortages that hold back yield even when the major nutrients are right.", when: "Foliar spray or fertigation, at doses set from a soil or leaf test." },
      ],
    },
  ],
  enquiryHeading: "Tell us what you are growing",
  enquiryIntro: "We will recommend the inputs and quantities for your field, with a price, on WhatsApp.",
  problemHint: "For example: rhizome rot last season, yellowing leaves, nematodes, poor soil",
  faqHeading: "Questions about bio inputs",
  faqs: [
    {
      q: "Why are prices not listed?",
      a: "The quantity you need depends on your crop, acreage and soil. We work out the right products and amounts first and then give you a price for exactly that.",
    },
    {
      q: "Can bio inputs replace chemical fertilizer completely?",
      a: "Usually not straight away. They make the nutrients already in your soil more available and reduce how much you need to buy. Most growers reduce chemical inputs step by step, guided by soil tests.",
    },
    {
      q: "Can I mix bio pesticides with chemical fungicides?",
      a: "Not in the same tank. Copper and many fungicides kill beneficial microbes. Keep a gap of at least a week between them, or ask us for a schedule.",
    },
    {
      q: "How should bio inputs be stored?",
      a: "In a cool, shaded place out of direct sun, and used before the expiry date. Living microbes lose strength in heat.",
    },
  ],
  longform: [
    "## Why bio inputs matter in horticulture",
    "Ginger, turmeric, banana, arecanut and pepper are grown intensively, often on the same land year after year. Over time this wears down soil organic matter and the microbial life that makes nutrients available to roots, and soil-borne diseases build up. Bio inputs address both problems: bio fertilizers help the crop use the nutrients already in the soil, and bio pesticides keep disease-causing organisms in check.",
    "## Bio fertilizers",
    "Nitrogen-fixing bacteria such as Azospirillum and Azotobacter supply part of the crop's nitrogen. Phosphate solubilising bacteria and potash mobilising bacteria release phosphorus and potassium that are present in the soil but locked up. Mycorrhizal fungi extend the root system. Used together with compost or well-rotted manure, they can reduce the amount of chemical fertilizer a crop needs, but they are not a substitute for knowing what your soil lacks. A soil test tells you where they will help most.",
    "## Bio pesticides",
    "Most serious diseases of these crops start in the soil. Rhizome rot in ginger and turmeric, foot rot in pepper and wilt in banana are all caused by soil-borne organisms that thrive in wet conditions. Trichoderma and Pseudomonas, applied before planting and before the monsoon, colonise the root zone and crowd these organisms out. Paecilomyces and Pochonia target nematodes, which damage roots and open the way for rots. Beauveria controls insect pests such as shoot borers. Timing matters: bio pesticides prevent and suppress; they work far better before a problem peaks than after.",
    "## Green manure",
    "Growing a green manure crop and turning it into the soil is one of the cheapest ways to raise organic matter. Mucuna is widely grown between arecanut rows; dhaincha and sun hemp produce large amounts of biomass in six to eight weeks before a main crop; mustard, turned in green, can help suppress some soil-borne pests.",
    "## Chelated micronutrients",
    "Shortages of zinc, iron and other micronutrients are common in intensively farmed soils and can limit yield even when nitrogen, phosphorus and potassium are adequate. Chelated forms stay available longer and are well suited to foliar sprays and fertigation. Doses should come from a soil or leaf test rather than guesswork.",
    "## Getting the quantities right",
    "Each recommendation is matched to your crop, acreage and the problem you are solving, which is why prices are given after a short conversation rather than listed. Fill in the form above and we will reply on WhatsApp with what to use, how much, when to apply it and the price.",
  ],
  closing: "Not sure what your field needs? Start with a single call, ₹250.",
};

const kn: BioInputsContent = {
  title: "ಜೈವಿಕ ಗೊಬ್ಬರ ಮತ್ತು ಜೈವಿಕ ಕೀಟನಾಶಕ, ಕರ್ನಾಟಕ | Horti Guru",
  description:
    "ಶುಂಠಿ, ಅರಿಶಿನ, ಅಡಿಕೆ, ಬಾಳೆ ಮತ್ತು ಕಾಳುಮೆಣಸಿಗೆ ಜೈವಿಕ ಗೊಬ್ಬರ, ಜೈವಿಕ ಕೀಟನಾಶಕ, ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೀಜ ಮತ್ತು ಚೀಲೇಟೆಡ್ ಲಘು ಪೋಷಕಾಂಶಗಳು, ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ತಕ್ಕಂತೆ.",
  crumb: "ಜೈವಿಕ ಒಳಸುರಿಗಳು",
  h1: "ಜೈವಿಕ ಗೊಬ್ಬರ, ಜೈವಿಕ ಕೀಟನಾಶಕ ಮತ್ತು ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೀಜ",
  sub: "ಪ್ರತಿ ಒಳಸುರಿಯನ್ನು ನಿಮ್ಮ ಬೆಳೆ, ಮಣ್ಣು ಮತ್ತು ಎಕರೆಗೆ ತಕ್ಕಂತೆ ಶಿಫಾರಸು ಮಾಡಿ ಪ್ರಮಾಣ ನಿಗದಿಪಡಿಸಲಾಗುತ್ತದೆ, ಹೀಗಾಗಿ ಹೊಲಕ್ಕೆ ಬೇಕಾದಷ್ಟೇ ಖರೀದಿಸುತ್ತೀರಿ.",
  priced: "ನಿಮ್ಮ ಹೊಲದ ಗಾತ್ರ ಮತ್ತು ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಬೆಲೆ",
  categories: [
    {
      id: "bio-fertilizers",
      name: "ಜೈವಿಕ ಗೊಬ್ಬರಗಳು",
      intro: "ಸಾರಜನಕ ಸ್ಥಿರೀಕರಿಸುವ ಅಥವಾ ಮಣ್ಣಿನಲ್ಲಿ ಈಗಾಗಲೇ ಇರುವ ರಂಜಕ, ಪೊಟ್ಯಾಷ್ ಮತ್ತು ಸತುವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುವ ಜೀವಂತ ಸೂಕ್ಷ್ಮಜೀವಿಗಳು. ಉತ್ತಮ ಸಾವಯವ ಪದಾರ್ಥದೊಂದಿಗೆ ಇವು ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ.",
      products: [
        { name: "ಅಜೋಸ್ಪಿರಿಲಮ್", latin: "Azospirillum", does: "ಬೇರುಗಳ ಸುತ್ತ ವಾತಾವರಣದ ಸಾರಜನಕ ಸ್ಥಿರೀಕರಿಸಿ ಬೆಳೆಯ ಸಾರಜನಕದ ಒಂದು ಭಾಗ ಒದಗಿಸುತ್ತದೆ.", when: "ನಾಟಿಯ ಸಮಯದಲ್ಲಿ, ಕಾಂಪೋಸ್ಟ್‌ನೊಂದಿಗೆ ಬೆರೆಸಿ ಅಥವಾ ಬೇರು ವಲಯಕ್ಕೆ." },
        { name: "ಅಜಟೋಬ್ಯಾಕ್ಟರ್", latin: "Azotobacter", does: "ಸ್ವತಂತ್ರವಾಗಿ ಸಾರಜನಕ ಸ್ಥಿರೀಕರಿಸಿ, ಬೆಳವಣಿಗೆ ಪ್ರಚೋದಕಗಳನ್ನೂ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ.", when: "ನಾಟಿಯಲ್ಲಿ ಚೆನ್ನಾಗಿ ಕಳಿತ ಗೊಬ್ಬರದೊಂದಿಗೆ, ಮತ್ತೆ ಮೊದಲ ಮಳೆಯ ನಂತರ." },
        { name: "PSB", latin: "ರಂಜಕ ಕರಗಿಸುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ", does: "ಮಣ್ಣಿನಲ್ಲಿ ಬಂಧಿತ ರಂಜಕವನ್ನು ಬೇರುಗಳು ಹೀರುವಂತೆ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ.", when: "ನಾಟಿಯಲ್ಲಿ, ಸಾವಯವ ಗೊಬ್ಬರದೊಂದಿಗೆ." },
        { name: "VAM", latin: "ಮೈಕೋರೈಜಾ", does: "ಬೇರು ವ್ಯವಸ್ಥೆಯನ್ನು ವಿಸ್ತರಿಸಿ ರಂಜಕ ಮತ್ತು ನೀರು ಹೀರುವಿಕೆ ಸುಧಾರಿಸುತ್ತದೆ.", when: "ನಾಟಿಯಲ್ಲಿ ಅಥವಾ ನರ್ಸರಿಯಲ್ಲಿ ಬೇರುಗಳ ಹತ್ತಿರ." },
        { name: "KMB", latin: "ಪೊಟ್ಯಾಷ್ ಚಲನಶೀಲಗೊಳಿಸುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ", does: "ಮಣ್ಣಿನ ಪೊಟ್ಯಾಷ್ ಅನ್ನು ಗಿಡಕ್ಕೆ ಲಭ್ಯವಾಗಿಸುತ್ತದೆ.", when: "ನಾಟಿಯಲ್ಲಿ ಮತ್ತು ಸಕ್ರಿಯ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಸಾವಯವ ಗೊಬ್ಬರದೊಂದಿಗೆ." },
        { name: "AMC", latin: "ಸೂಕ್ಷ್ಮಜೀವಿ ಸಮೂಹ", does: "ಸಾರಜನಕ ಸ್ಥಿರೀಕರಿಸುವ, ರಂಜಕ ಮತ್ತು ಸತು ಕರಗಿಸುವ ಸೂಕ್ಷ್ಮಜೀವಿಗಳು ಒಂದೇ ಉತ್ಪನ್ನದಲ್ಲಿ.", when: "ನಾಟಿಯಲ್ಲಿ ಮತ್ತು ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಮಣ್ಣಿಗೆ ಅಥವಾ ಡ್ರೆಂಚಿಂಗ್." },
      ],
    },
    {
      id: "bio-pesticides",
      name: "ಜೈವಿಕ ಕೀಟನಾಶಕಗಳು",
      intro: "ಮಣ್ಣಿನಿಂದ ಹರಡುವ ರೋಗ, ಜಂತುಹುಳು ಮತ್ತು ಕೀಟಗಳನ್ನು ತಡೆಯುವ ಉಪಯುಕ್ತ ಶಿಲೀಂಧ್ರ ಮತ್ತು ಬ್ಯಾಕ್ಟೀರಿಯಾ. ಸಮಸ್ಯೆ ಉಲ್ಬಣಿಸುವ ಮುನ್ನ ಬಳಸಿದಾಗ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿ.",
      products: [
        { name: "ಟ್ರೈಕೋಡರ್ಮಾ", latin: "Trichoderma", does: "ಗಡ್ಡೆ ಕೊಳೆ ಮತ್ತು ಬುಡ ಕೊಳೆ ಉಂಟುಮಾಡುವ ಮಣ್ಣಿನ ಕೊಳೆ ಮತ್ತು ಸೊರಗು ರೋಗಗಳನ್ನು ತಡೆಯುತ್ತದೆ.", when: "ಬೀಜೋಪಚಾರ, ಅಥವಾ ಕಾಂಪೋಸ್ಟ್‌ನಲ್ಲಿ ವೃದ್ಧಿಸಿ ನಾಟಿ ಮತ್ತು ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನ." },
        { name: "ಸ್ಯೂಡೋಮೊನಾಸ್", latin: "Pseudomonas fluorescens", does: "ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮತ್ತು ಶಿಲೀಂಧ್ರ ರೋಗಗಳಿಂದ ಬೇರು ಮತ್ತು ಎಲೆಗಳನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.", when: "ಬೀಜೋಪಚಾರ, ಮಣ್ಣಿಗೆ ಡ್ರೆಂಚಿಂಗ್ ಅಥವಾ ಎಲೆಗೆ ಸಿಂಪಡಣೆ." },
        { name: "ಪೆಸಿಲೋಮೈಸಿಸ್", latin: "Purpureocillium lilacinum", does: "ಮಣ್ಣಿನಲ್ಲಿರುವ ಬೇರುಗಂಟು ಮತ್ತು ಕೊರೆಯುವ ಜಂತುಹುಳುಗಳ ಮೇಲೆ ದಾಳಿ ಮಾಡುತ್ತದೆ.", when: "ನಾಟಿಯಲ್ಲಿ ಸಾವಯವ ಗೊಬ್ಬರದೊಂದಿಗೆ ಮಣ್ಣಿಗೆ." },
        { name: "ಬೆವೇರಿಯಾ", latin: "Beauveria bassiana", does: "ಕಾಂಡ ಕೊರಕ ಮತ್ತು ದುಂಬಿಗಳಂತಹ ಕೀಟಗಳಿಗೆ ಸೋಂಕು ತಗುಲಿಸಿ ಕೊಲ್ಲುತ್ತದೆ.", when: "ತೇವದ ಹವಾಮಾನದಲ್ಲಿ, ಸಂಜೆ ಎಲೆಗೆ ಸಿಂಪಡಣೆ." },
        { name: "ಪೊಕೋನಿಯಾ", latin: "Pochonia chlamydosporia", does: "ಬೇರು ವಲಯದಲ್ಲಿ ಜಂತುಹುಳುಗಳ ಮೊಟ್ಟೆಗಳನ್ನು ನಾಶಮಾಡುತ್ತದೆ.", when: "ನಾಟಿಯಲ್ಲಿ ಮತ್ತು ಹಂಗಾಮಿನಲ್ಲಿ ಒಮ್ಮೆ ಮಣ್ಣಿಗೆ." },
        { name: "ಬ್ಯಾಸಿಲಸ್", latin: "Bacillus subtilis", does: "ಹಲವು ಶಿಲೀಂಧ್ರ ಮತ್ತು ಬ್ಯಾಕ್ಟೀರಿಯಾ ರೋಗಗಳನ್ನು ತಡೆದು ಬೇರಿನ ಬೆಳವಣಿಗೆಗೆ ನೆರವಾಗುತ್ತದೆ.", when: "ಬೀಜೋಪಚಾರ, ಡ್ರೆಂಚಿಂಗ್ ಅಥವಾ ಸಿಂಪಡಣೆ." },
      ],
    },
    {
      id: "green-manure",
      name: "ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೀಜ",
      intro: "ಮುಖ್ಯ ಬೆಳೆಗೆ ಮುನ್ನ ಅಥವಾ ನಡುವೆ ಬೆಳೆಸಿ ಮಣ್ಣಿಗೆ ಸೇರಿಸಿ ಸಾವಯವ ಪದಾರ್ಥ ಮತ್ತು ಸಾರಜನಕ ಹೆಚ್ಚಿಸುವ ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಬೆಳೆಗಳು.",
      products: [
        { name: "ನಾಯಿಸೊಣಗು (ಮ್ಯೂಕುನಾ)", latin: "Mucuna", does: "ಸಾರಜನಕ ಮತ್ತು ಸಾವಯವ ಪದಾರ್ಥ ಸೇರಿಸಿ ಕಳೆ ಹತ್ತಿಕ್ಕುವ ಹುಲುಸಾದ ದ್ವಿದಳ ಹೊದಿಕೆ ಬೆಳೆ.", when: "ಮಳೆಗಾಲದ ಆರಂಭದಲ್ಲಿ, ಹೆಚ್ಚಾಗಿ ಅಡಿಕೆ ಸಾಲುಗಳ ನಡುವೆ ಬಿತ್ತಿ. ಹೂಬಿಡುವಾಗ ಕತ್ತರಿಸಿ ಅಥವಾ ಸೇರಿಸಿ." },
        { name: "ಡಯಂಚ", latin: "Sesbania", does: "ಬೇಗ ಜೀವರಾಶಿ ಮತ್ತು ಸಾರಜನಕ, ನೀರು ನಿಲ್ಲುವ ಮತ್ತು ಉಪ್ಪಿನ ಜಾಗಗಳನ್ನೂ ಸಹಿಸುತ್ತದೆ.", when: "ಮೊದಲ ಮಳೆಯೊಂದಿಗೆ ಬಿತ್ತಿ 45 ರಿಂದ 60 ದಿನಗಳ ನಂತರ ಸೇರಿಸಿ." },
        { name: "ಸೆಣಬು", latin: "Crotalaria juncea", does: "ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ಸಾವಯವ ಪದಾರ್ಥ ಹೆಚ್ಚಿಸುವ ವೇಗದ ದ್ವಿದಳ ಬೆಳೆ.", when: "ಮುಖ್ಯ ಬೆಳೆಗೆ ಮುನ್ನ ಬಿತ್ತಿ 45 ರಿಂದ 60 ದಿನಗಳ ನಂತರ ಸೇರಿಸಿ." },
        { name: "ಸಾಸಿವೆ", latin: "Mustard", does: "ಹಸಿಯಾಗಿ ಮಣ್ಣಿಗೆ ಸೇರಿಸಿದಾಗ ಕೆಲವು ಮಣ್ಣಿನ ರೋಗ ಮತ್ತು ಜಂತುಹುಳುಗಳನ್ನು ತಡೆಯಲು ನೆರವಾಗುವ ಅಲ್ಪಾವಧಿ ಬೆಳೆ.", when: "ತಂಪಾದ ತಿಂಗಳುಗಳಲ್ಲಿ ಬಿತ್ತಿ ಹೂಬಿಡುವಾಗ ಸೇರಿಸಿ." },
      ],
    },
    {
      id: "micronutrients",
      name: "ಚೀಲೇಟೆಡ್ ಲಘು ಪೋಷಕಾಂಶಗಳು",
      intro: "ಮಣ್ಣಿನಲ್ಲಿ ಲಭ್ಯವಾಗಿ ಉಳಿಯುವ ಮತ್ತು ಎಲೆಯ ಮೂಲಕ ಸುಲಭವಾಗಿ ಹೀರಲ್ಪಡುವ ಚೀಲೇಟೆಡ್ ರೂಪದ ಸತು, ಕಬ್ಬಿಣ, ಮ್ಯಾಂಗನೀಸ್ ಮತ್ತು ತಾಮ್ರ.",
      products: [
        { name: "ಚೀಲೇಟೆಡ್ ಲಘು ಪೋಷಕಾಂಶ ಮಿಶ್ರಣಗಳು", does: "ಪ್ರಮುಖ ಪೋಷಕಾಂಶಗಳು ಸರಿಯಿದ್ದರೂ ಇಳುವರಿ ತಡೆಯುವ ಕೊರತೆಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತವೆ.", when: "ಮಣ್ಣು ಅಥವಾ ಎಲೆ ಪರೀಕ್ಷೆಯಿಂದ ನಿಗದಿಪಡಿಸಿದ ಪ್ರಮಾಣದಲ್ಲಿ ಎಲೆಗೆ ಸಿಂಪಡಣೆ ಅಥವಾ ರಸಾವರಿ." },
      ],
    },
  ],
  enquiryHeading: "ನೀವು ಏನು ಬೆಳೆಯುತ್ತಿದ್ದೀರಿ ಎಂದು ತಿಳಿಸಿ",
  enquiryIntro: "ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಬೇಕಾದ ಒಳಸುರಿ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ಬೆಲೆಯೊಂದಿಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.",
  problemHint: "ಉದಾಹರಣೆಗೆ: ಕಳೆದ ಹಂಗಾಮಿನ ಗಡ್ಡೆ ಕೊಳೆ, ಹಳದಿ ಎಲೆಗಳು, ಜಂತುಹುಳು, ಕಳಪೆ ಮಣ್ಣು",
  faqHeading: "ಜೈವಿಕ ಒಳಸುರಿಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು",
  faqs: [
    {
      q: "ಬೆಲೆಗಳನ್ನು ಏಕೆ ಪಟ್ಟಿ ಮಾಡಿಲ್ಲ?",
      a: "ಬೇಕಾದ ಪ್ರಮಾಣ ನಿಮ್ಮ ಬೆಳೆ, ಎಕರೆ ಮತ್ತು ಮಣ್ಣನ್ನು ಅವಲಂಬಿಸಿದೆ. ಮೊದಲು ಸರಿಯಾದ ಉತ್ಪನ್ನ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ಲೆಕ್ಕ ಹಾಕಿ, ನಂತರ ಅದಕ್ಕೇ ಬೆಲೆ ನೀಡುತ್ತೇವೆ.",
    },
    {
      q: "ಜೈವಿಕ ಒಳಸುರಿಗಳು ರಾಸಾಯನಿಕ ಗೊಬ್ಬರವನ್ನು ಪೂರ್ತಿ ಬದಲಿಸಬಲ್ಲವೇ?",
      a: "ಸಾಮಾನ್ಯವಾಗಿ ಒಮ್ಮೆಗೇ ಅಲ್ಲ. ಮಣ್ಣಿನಲ್ಲಿ ಈಗಾಗಲೇ ಇರುವ ಪೋಷಕಾಂಶಗಳನ್ನು ಹೆಚ್ಚು ಲಭ್ಯವಾಗಿಸಿ ಖರೀದಿಸಬೇಕಾದ ಪ್ರಮಾಣ ಕಡಿಮೆ ಮಾಡುತ್ತವೆ. ಹೆಚ್ಚಿನ ಬೆಳೆಗಾರರು ಮಣ್ಣು ಪರೀಕ್ಷೆಯ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಹಂತ ಹಂತವಾಗಿ ರಾಸಾಯನಿಕ ಕಡಿಮೆ ಮಾಡುತ್ತಾರೆ.",
    },
    {
      q: "ಜೈವಿಕ ಕೀಟನಾಶಕವನ್ನು ರಾಸಾಯನಿಕ ಶಿಲೀಂಧ್ರನಾಶಕದೊಂದಿಗೆ ಬೆರೆಸಬಹುದೇ?",
      a: "ಒಂದೇ ಟ್ಯಾಂಕ್‌ನಲ್ಲಿ ಬೇಡ. ತಾಮ್ರ ಮತ್ತು ಹಲವು ಶಿಲೀಂಧ್ರನಾಶಕಗಳು ಉಪಯುಕ್ತ ಸೂಕ್ಷ್ಮಜೀವಿಗಳನ್ನು ಕೊಲ್ಲುತ್ತವೆ. ಕನಿಷ್ಠ ಒಂದು ವಾರದ ಅಂತರ ಇರಿಸಿ, ಅಥವಾ ವೇಳಾಪಟ್ಟಿಗಾಗಿ ನಮ್ಮನ್ನು ಕೇಳಿ.",
    },
    {
      q: "ಜೈವಿಕ ಒಳಸುರಿಗಳನ್ನು ಹೇಗೆ ಸಂಗ್ರಹಿಸಬೇಕು?",
      a: "ನೇರ ಬಿಸಿಲಿನಿಂದ ದೂರ, ತಂಪಾದ ನೆರಳಿನ ಜಾಗದಲ್ಲಿ, ಮತ್ತು ಅವಧಿ ಮುಗಿಯುವ ಮುನ್ನ ಬಳಸಿ. ಜೀವಂತ ಸೂಕ್ಷ್ಮಜೀವಿಗಳು ಶಾಖದಲ್ಲಿ ಶಕ್ತಿ ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ.",
    },
  ],
  longform: [
    "## ತೋಟಗಾರಿಕೆಯಲ್ಲಿ ಜೈವಿಕ ಒಳಸುರಿಗಳು ಏಕೆ ಮುಖ್ಯ",
    "ಶುಂಠಿ, ಅರಿಶಿನ, ಬಾಳೆ, ಅಡಿಕೆ ಮತ್ತು ಕಾಳುಮೆಣಸನ್ನು ತೀವ್ರವಾಗಿ, ಹೆಚ್ಚಾಗಿ ವರ್ಷದಿಂದ ವರ್ಷಕ್ಕೆ ಅದೇ ಜಮೀನಿನಲ್ಲಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ. ಕಾಲಕ್ರಮೇಣ ಇದು ಮಣ್ಣಿನ ಸಾವಯವ ಪದಾರ್ಥ ಮತ್ತು ಬೇರುಗಳಿಗೆ ಪೋಷಕಾಂಶ ಲಭ್ಯವಾಗಿಸುವ ಸೂಕ್ಷ್ಮಜೀವಿಗಳನ್ನು ಕುಗ್ಗಿಸುತ್ತದೆ, ಮತ್ತು ಮಣ್ಣಿನ ರೋಗಗಳು ಹೆಚ್ಚುತ್ತವೆ. ಜೈವಿಕ ಒಳಸುರಿಗಳು ಎರಡೂ ಸಮಸ್ಯೆಗಳಿಗೆ ಉತ್ತರ: ಜೈವಿಕ ಗೊಬ್ಬರಗಳು ಮಣ್ಣಿನಲ್ಲಿರುವ ಪೋಷಕಾಂಶಗಳನ್ನು ಬಳಸಲು ಬೆಳೆಗೆ ನೆರವಾಗುತ್ತವೆ, ಜೈವಿಕ ಕೀಟನಾಶಕಗಳು ರೋಗಕಾರಕಗಳನ್ನು ನಿಯಂತ್ರಣದಲ್ಲಿಡುತ್ತವೆ.",
    "## ಜೈವಿಕ ಗೊಬ್ಬರಗಳು",
    "ಅಜೋಸ್ಪಿರಿಲಮ್ ಮತ್ತು ಅಜಟೋಬ್ಯಾಕ್ಟರ್‌ನಂತಹ ಸಾರಜನಕ ಸ್ಥಿರೀಕರಿಸುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಬೆಳೆಯ ಸಾರಜನಕದ ಒಂದು ಭಾಗ ಒದಗಿಸುತ್ತವೆ. ರಂಜಕ ಕರಗಿಸುವ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಚಲನಶೀಲಗೊಳಿಸುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮಣ್ಣಿನಲ್ಲಿದ್ದರೂ ಬಂಧಿತವಾಗಿರುವ ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಬಿಡುಗಡೆ ಮಾಡುತ್ತವೆ. ಮೈಕೋರೈಜಾ ಶಿಲೀಂಧ್ರ ಬೇರು ವ್ಯವಸ್ಥೆಯನ್ನು ವಿಸ್ತರಿಸುತ್ತದೆ. ಕಾಂಪೋಸ್ಟ್ ಅಥವಾ ಕಳಿತ ಗೊಬ್ಬರದೊಂದಿಗೆ ಬಳಸಿದಾಗ ಇವು ರಾಸಾಯನಿಕ ಗೊಬ್ಬರದ ಅಗತ್ಯ ಕಡಿಮೆ ಮಾಡಬಲ್ಲವು, ಆದರೆ ನಿಮ್ಮ ಮಣ್ಣಿಗೆ ಏನು ಕೊರತೆ ಎಂದು ತಿಳಿಯುವುದಕ್ಕೆ ಬದಲಿಯಲ್ಲ. ಇವು ಎಲ್ಲಿ ಹೆಚ್ಚು ನೆರವಾಗುತ್ತವೆ ಎಂದು ಮಣ್ಣು ಪರೀಕ್ಷೆ ತಿಳಿಸುತ್ತದೆ.",
    "## ಜೈವಿಕ ಕೀಟನಾಶಕಗಳು",
    "ಈ ಬೆಳೆಗಳ ಹೆಚ್ಚಿನ ಗಂಭೀರ ರೋಗಗಳು ಮಣ್ಣಿನಲ್ಲೇ ಶುರುವಾಗುತ್ತವೆ. ಶುಂಠಿ ಮತ್ತು ಅರಿಶಿನದ ಗಡ್ಡೆ ಕೊಳೆ, ಕಾಳುಮೆಣಸಿನ ಬುಡ ಕೊಳೆ ಮತ್ತು ಬಾಳೆಯ ಸೊರಗು, ಎಲ್ಲವೂ ತೇವದಲ್ಲಿ ಬೆಳೆಯುವ ಮಣ್ಣಿನ ಜೀವಿಗಳಿಂದ. ನಾಟಿಗೆ ಮತ್ತು ಮಳೆಗಾಲಕ್ಕೆ ಮುನ್ನ ಹಾಕಿದ ಟ್ರೈಕೋಡರ್ಮಾ ಮತ್ತು ಸ್ಯೂಡೋಮೊನಾಸ್ ಬೇರು ವಲಯದಲ್ಲಿ ನೆಲೆಸಿ ಈ ಜೀವಿಗಳನ್ನು ಹೊರಹಾಕುತ್ತವೆ. ಪೆಸಿಲೋಮೈಸಿಸ್ ಮತ್ತು ಪೊಕೋನಿಯಾ, ಬೇರುಗಳಿಗೆ ಹಾನಿ ಮಾಡಿ ಕೊಳೆಗೆ ದಾರಿ ಮಾಡುವ ಜಂತುಹುಳುಗಳನ್ನು ಗುರಿಯಾಗಿಸುತ್ತವೆ. ಬೆವೇರಿಯಾ ಕಾಂಡ ಕೊರಕದಂತಹ ಕೀಟಗಳನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ. ಸಮಯ ಮುಖ್ಯ: ಜೈವಿಕ ಕೀಟನಾಶಕಗಳು ತಡೆಯುತ್ತವೆ ಮತ್ತು ಹತ್ತಿಕ್ಕುತ್ತವೆ; ಸಮಸ್ಯೆ ಉಲ್ಬಣಿಸಿದ ನಂತರಕ್ಕಿಂತ ಮುನ್ನವೇ ಹೆಚ್ಚು ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ.",
    "## ಹಸಿರೆಲೆ ಗೊಬ್ಬರ",
    "ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೆಳೆ ಬೆಳೆಸಿ ಮಣ್ಣಿಗೆ ಸೇರಿಸುವುದು ಸಾವಯವ ಪದಾರ್ಥ ಹೆಚ್ಚಿಸುವ ಅತಿ ಅಗ್ಗದ ವಿಧಾನಗಳಲ್ಲಿ ಒಂದು. ಮ್ಯೂಕುನಾವನ್ನು ಅಡಿಕೆ ಸಾಲುಗಳ ನಡುವೆ ವ್ಯಾಪಕವಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ; ಡಯಂಚ ಮತ್ತು ಸೆಣಬು ಮುಖ್ಯ ಬೆಳೆಗೆ ಮುನ್ನ ಆರರಿಂದ ಎಂಟು ವಾರಗಳಲ್ಲಿ ಹೆಚ್ಚು ಜೀವರಾಶಿ ಕೊಡುತ್ತವೆ; ಹಸಿಯಾಗಿ ಸೇರಿಸಿದ ಸಾಸಿವೆ ಕೆಲವು ಮಣ್ಣಿನ ಕೀಟಗಳನ್ನು ತಡೆಯಲು ನೆರವಾಗಬಹುದು.",
    "## ಚೀಲೇಟೆಡ್ ಲಘು ಪೋಷಕಾಂಶಗಳು",
    "ತೀವ್ರ ಕೃಷಿಯ ಮಣ್ಣುಗಳಲ್ಲಿ ಸತು, ಕಬ್ಬಿಣ ಮತ್ತು ಇತರ ಲಘು ಪೋಷಕಾಂಶಗಳ ಕೊರತೆ ಸಾಮಾನ್ಯ, ಸಾರಜನಕ, ರಂಜಕ, ಪೊಟ್ಯಾಷ್ ಸಾಕಷ್ಟಿದ್ದರೂ ಇಳುವರಿ ತಡೆಯಬಹುದು. ಚೀಲೇಟೆಡ್ ರೂಪಗಳು ಹೆಚ್ಚು ಕಾಲ ಲಭ್ಯವಾಗಿ ಉಳಿಯುತ್ತವೆ, ಎಲೆ ಸಿಂಪಡಣೆ ಮತ್ತು ರಸಾವರಿಗೆ ಸೂಕ್ತ. ಪ್ರಮಾಣ ಊಹೆಯಿಂದಲ್ಲ, ಮಣ್ಣು ಅಥವಾ ಎಲೆ ಪರೀಕ್ಷೆಯಿಂದ ಬರಬೇಕು.",
    "## ಸರಿಯಾದ ಪ್ರಮಾಣ",
    "ಪ್ರತಿ ಶಿಫಾರಸನ್ನು ನಿಮ್ಮ ಬೆಳೆ, ಎಕರೆ ಮತ್ತು ನೀವು ಬಗೆಹರಿಸುತ್ತಿರುವ ಸಮಸ್ಯೆಗೆ ಹೊಂದಿಸಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಬೆಲೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುವ ಬದಲು ಸಣ್ಣ ಮಾತುಕತೆಯ ನಂತರ ನೀಡುತ್ತೇವೆ. ಮೇಲಿನ ಫಾರಂ ಭರ್ತಿ ಮಾಡಿ, ಏನು ಬಳಸಬೇಕು, ಎಷ್ಟು, ಯಾವಾಗ ಮತ್ತು ಬೆಲೆಯೊಂದಿಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಉತ್ತರಿಸುತ್ತೇವೆ.",
  ],
  closing: "ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಏನು ಬೇಕು ಎಂದು ಖಚಿತವಿಲ್ಲವೇ? ₹250 ರ ಒಂದು ಕರೆಯಿಂದ ಆರಂಭಿಸಿ.",
};

const hi: BioInputsContent = {
  title: "जैव उर्वरक और जैव कीटनाशक, कर्नाटक | Horti Guru",
  description:
    "अदरक, हल्दी, सुपारी, केला और काली मिर्च के लिए जैव उर्वरक, जैव कीटनाशक, हरी खाद के बीज और चिलेटेड सूक्ष्म पोषक तत्व, आपके खेत के हिसाब से।",
  crumb: "जैविक इनपुट",
  h1: "जैव उर्वरक, जैव कीटनाशक और हरी खाद के बीज",
  sub: "हर इनपुट आपकी फ़सल, मिट्टी और एकड़ के हिसाब से सुझाया और मापा जाता है, ताकि आप उतना ही ख़रीदें जितना खेत को चाहिए।",
  priced: "आपके खेत के आकार और ज़रूरत के हिसाब से कीमत",
  categories: [
    {
      id: "bio-fertilizers",
      name: "जैव उर्वरक",
      intro: "जीवित सूक्ष्मजीव जो नाइट्रोजन स्थिर करते हैं या मिट्टी में पहले से मौजूद फ़ॉस्फ़ोरस, पोटाश और ज़िंक को उपलब्ध बनाते हैं। अच्छे जैविक पदार्थ के साथ ये सबसे अच्छा काम करते हैं।",
      products: [
        { name: "एज़ोस्पिरिलम", latin: "Azospirillum", does: "जड़ों के आसपास हवा की नाइट्रोजन स्थिर करके फ़सल की नाइट्रोजन का एक हिस्सा देता है।", when: "रोपाई के समय, कम्पोस्ट में मिलाकर या जड़ क्षेत्र में।" },
        { name: "एज़ोटोबैक्टर", latin: "Azotobacter", does: "स्वतंत्र रूप से नाइट्रोजन स्थिर करता है और बढ़वार बढ़ाने वाले पदार्थ भी छोड़ता है।", when: "रोपाई पर सड़ी खाद के साथ, और पहली बारिश के बाद फिर।" },
        { name: "PSB", latin: "फ़ॉस्फ़ेट घोलक बैक्टीरिया", does: "मिट्टी में बँधे फ़ॉस्फ़ोरस को छोड़ता है ताकि जड़ें उसे ले सकें।", when: "रोपाई पर, जैविक खाद के साथ।" },
        { name: "VAM", latin: "माइकोराइज़ा", does: "जड़ तंत्र को फैलाकर फ़ॉस्फ़ोरस और पानी का अवशोषण बढ़ाता है।", when: "रोपाई पर या नर्सरी में जड़ों के पास।" },
        { name: "KMB", latin: "पोटाश गतिशील बैक्टीरिया", does: "मिट्टी के पोटाश को पौधे के लिए उपलब्ध बनाता है।", when: "रोपाई पर और सक्रिय बढ़वार में जैविक खाद के साथ।" },
        { name: "AMC", latin: "सूक्ष्मजीव समूह", does: "नाइट्रोजन स्थिर करने वाले, फ़ॉस्फ़ोरस और ज़िंक घोलने वाले सूक्ष्मजीव एक ही उत्पाद में।", when: "रोपाई और बढ़वार में मिट्टी में या ड्रेंचिंग से।" },
      ],
    },
    {
      id: "bio-pesticides",
      name: "जैव कीटनाशक",
      intro: "लाभकारी फफूँद और बैक्टीरिया जो मिट्टी से फैलने वाले रोग, सूत्रकृमि और कीटों को दबाते हैं। समस्या बढ़ने से पहले डालने पर सबसे असरदार।",
      products: [
        { name: "ट्राइकोडर्मा", latin: "Trichoderma", does: "प्रकंद सड़न और तना सड़न करने वाले मिट्टी के सड़न और मुरझान रोगों को दबाता है।", when: "बीज उपचार, या कम्पोस्ट में बढ़ाकर रोपाई और मानसून से पहले।" },
        { name: "स्यूडोमोनास", latin: "Pseudomonas fluorescens", does: "जड़ों और पत्तियों को बैक्टीरिया और फफूँद रोगों से बचाता है।", when: "बीज उपचार, मिट्टी में ड्रेंचिंग या पत्तियों पर छिड़काव।" },
        { name: "पेसिलोमाइसीज़", latin: "Purpureocillium lilacinum", does: "मिट्टी में जड़-गाँठ और छेदक सूत्रकृमियों पर हमला करता है।", when: "रोपाई पर जैविक खाद के साथ मिट्टी में।" },
        { name: "ब्यूवेरिया", latin: "Beauveria bassiana", does: "तना छेदक और भृंग जैसे कीटों को संक्रमित करके मारता है।", when: "नम मौसम में, शाम को पत्तियों पर छिड़काव।" },
        { name: "पोकोनिया", latin: "Pochonia chlamydosporia", does: "जड़ क्षेत्र में सूत्रकृमियों के अंडों को नष्ट करता है।", when: "रोपाई पर और सीज़न में एक बार मिट्टी में।" },
        { name: "बैसिलस", latin: "Bacillus subtilis", does: "कई फफूँद और बैक्टीरिया रोगों को दबाता है और जड़ों की बढ़वार में मदद करता है।", when: "बीज उपचार, ड्रेंचिंग या छिड़काव।" },
      ],
    },
    {
      id: "green-manure",
      name: "हरी खाद के बीज",
      intro: "तेज़ी से बढ़ने वाली फ़सलें जिन्हें मुख्य फ़सल से पहले या बीच में उगाकर मिट्टी में मिलाया जाता है, ताकि जैविक पदार्थ और नाइट्रोजन बढ़े।",
      products: [
        { name: "म्यूकुना (कौंच)", latin: "Mucuna", does: "घनी दलहनी ढकने वाली फ़सल जो नाइट्रोजन और जैविक पदार्थ जोड़ती है और खरपतवार दबाती है।", when: "मानसून की शुरुआत में बोएँ, अक्सर सुपारी की कतारों के बीच। फूल आने पर काटें या मिलाएँ।" },
        { name: "ढैंचा", latin: "Sesbania", does: "जल्दी जैव पदार्थ और नाइट्रोजन, जलभराव और खारी जगहें भी सह लेता है।", when: "पहली बारिश के साथ बोएँ और 45 से 60 दिन बाद मिलाएँ।" },
        { name: "सनई", latin: "Crotalaria juncea", does: "कम समय में जैविक पदार्थ बढ़ाने वाली तेज़ दलहनी फ़सल।", when: "मुख्य फ़सल से पहले बोएँ और 45 से 60 दिन बाद मिलाएँ।" },
        { name: "सरसों", latin: "Mustard", does: "कम अवधि की फ़सल जो हरी अवस्था में मिलाने पर कुछ मिट्टी के रोगों और सूत्रकृमियों को दबाने में मदद करती है।", when: "ठंडे महीनों में बोएँ और फूल आने पर मिलाएँ।" },
      ],
    },
    {
      id: "micronutrients",
      name: "चिलेटेड सूक्ष्म पोषक तत्व",
      intro: "चिलेटेड रूप में ज़िंक, आयरन, मैंगनीज़ और कॉपर, जो मिट्टी में उपलब्ध रहते हैं और पत्तियों से आसानी से अवशोषित होते हैं।",
      products: [
        { name: "चिलेटेड सूक्ष्म पोषक मिश्रण", does: "उन कमियों को दूर करते हैं जो मुख्य पोषक तत्व ठीक होने पर भी उपज रोकती हैं।", when: "मिट्टी या पत्ती जाँच से तय मात्रा में पत्तियों पर छिड़काव या फ़र्टिगेशन।" },
      ],
    },
  ],
  enquiryHeading: "बताइए आप क्या उगा रहे हैं",
  enquiryIntro: "हम व्हाट्सऐप पर आपके खेत के लिए इनपुट और उनकी मात्रा, कीमत के साथ सुझाएँगे।",
  problemHint: "जैसे: पिछले सीज़न प्रकंद सड़न, पीली पत्तियाँ, सूत्रकृमि, कमज़ोर मिट्टी",
  faqHeading: "जैविक इनपुट के बारे में सवाल",
  faqs: [
    {
      q: "कीमतें क्यों नहीं लिखी हैं?",
      a: "ज़रूरी मात्रा आपकी फ़सल, एकड़ और मिट्टी पर निर्भर है। हम पहले सही उत्पाद और मात्रा निकालते हैं, फिर ठीक उसी की कीमत बताते हैं।",
    },
    {
      q: "क्या जैविक इनपुट रासायनिक खाद की पूरी जगह ले सकते हैं?",
      a: "आमतौर पर एकदम से नहीं। वे मिट्टी में पहले से मौजूद पोषक तत्वों को ज़्यादा उपलब्ध बनाते हैं और ख़रीदने की मात्रा घटाते हैं। ज़्यादातर उत्पादक मिट्टी जाँच के मार्गदर्शन में धीरे-धीरे रासायनिक इनपुट कम करते हैं।",
    },
    {
      q: "क्या जैव कीटनाशक को रासायनिक फफूँदनाशक के साथ मिला सकते हैं?",
      a: "एक ही टंकी में नहीं। कॉपर और कई फफूँदनाशक लाभकारी सूक्ष्मजीवों को मार देते हैं। दोनों के बीच कम से कम एक हफ़्ते का अंतर रखें, या हमसे शेड्यूल पूछें।",
    },
    {
      q: "जैविक इनपुट कैसे रखें?",
      a: "सीधी धूप से दूर, ठंडी छायादार जगह में, और समाप्ति तिथि से पहले इस्तेमाल करें। जीवित सूक्ष्मजीव गर्मी में ताक़त खो देते हैं।",
    },
  ],
  longform: [
    "## बागवानी में जैविक इनपुट क्यों ज़रूरी हैं",
    "अदरक, हल्दी, केला, सुपारी और काली मिर्च गहन रूप से, अक्सर साल दर साल उसी ज़मीन पर उगाए जाते हैं। समय के साथ इससे मिट्टी का जैविक पदार्थ और जड़ों तक पोषण पहुँचाने वाला सूक्ष्मजीव जीवन घटता है, और मिट्टी से फैलने वाले रोग बढ़ते हैं। जैविक इनपुट दोनों समस्याओं का हल हैं: जैव उर्वरक मिट्टी में मौजूद पोषक तत्वों का इस्तेमाल करने में फ़सल की मदद करते हैं, और जैव कीटनाशक रोग पैदा करने वाले जीवों को काबू में रखते हैं।",
    "## जैव उर्वरक",
    "एज़ोस्पिरिलम और एज़ोटोबैक्टर जैसे नाइट्रोजन स्थिर करने वाले बैक्टीरिया फ़सल की नाइट्रोजन का एक हिस्सा देते हैं। फ़ॉस्फ़ेट घोलक और पोटाश गतिशील बैक्टीरिया मिट्टी में मौजूद पर बँधे हुए फ़ॉस्फ़ोरस और पोटाश को छोड़ते हैं। माइकोराइज़ा फफूँद जड़ तंत्र को फैलाती है। कम्पोस्ट या सड़ी खाद के साथ इस्तेमाल करने पर ये रासायनिक खाद की ज़रूरत घटा सकते हैं, लेकिन यह जानने की जगह नहीं ले सकते कि आपकी मिट्टी में क्या कमी है। मिट्टी जाँच बताती है कि ये कहाँ सबसे ज़्यादा मदद करेंगे।",
    "## जैव कीटनाशक",
    "इन फ़सलों के ज़्यादातर गंभीर रोग मिट्टी से शुरू होते हैं। अदरक और हल्दी का प्रकंद सड़न, काली मिर्च का तना सड़न और केले का मुरझान, सब नमी में पनपने वाले मिट्टी के जीवों से होते हैं। रोपाई और मानसून से पहले डाले गए ट्राइकोडर्मा और स्यूडोमोनास जड़ क्षेत्र में बसकर इन जीवों को बाहर कर देते हैं। पेसिलोमाइसीज़ और पोकोनिया सूत्रकृमियों को निशाना बनाते हैं, जो जड़ों को नुकसान पहुँचाकर सड़न का रास्ता खोलते हैं। ब्यूवेरिया तना छेदक जैसे कीटों को काबू करता है। समय अहम है: जैव कीटनाशक रोकते और दबाते हैं; समस्या बढ़ने के बाद से कहीं बेहतर, पहले काम करते हैं।",
    "## हरी खाद",
    "हरी खाद की फ़सल उगाकर मिट्टी में मिलाना जैविक पदार्थ बढ़ाने के सबसे सस्ते तरीकों में से एक है। म्यूकुना सुपारी की कतारों के बीच ख़ूब उगाया जाता है; ढैंचा और सनई मुख्य फ़सल से पहले छह से आठ हफ़्तों में बहुत जैव पदार्थ देते हैं; हरी अवस्था में मिलाई गई सरसों मिट्टी के कुछ कीटों को दबाने में मदद कर सकती है।",
    "## चिलेटेड सूक्ष्म पोषक तत्व",
    "गहन खेती वाली मिट्टियों में ज़िंक, आयरन और दूसरे सूक्ष्म पोषक तत्वों की कमी आम है, और नाइट्रोजन, फ़ॉस्फ़ोरस, पोटाश पर्याप्त होने पर भी उपज रोक सकती है। चिलेटेड रूप ज़्यादा समय तक उपलब्ध रहते हैं और पत्तियों पर छिड़काव व फ़र्टिगेशन के लिए अच्छे हैं। मात्रा अंदाज़े से नहीं, मिट्टी या पत्ती जाँच से तय होनी चाहिए।",
    "## सही मात्रा",
    "हर सिफ़ारिश आपकी फ़सल, एकड़ और जिस समस्या को आप हल कर रहे हैं, उसके हिसाब से होती है, इसलिए कीमतें सूची में देने के बजाय छोटी बातचीत के बाद बताई जाती हैं। ऊपर का फ़ॉर्म भरें, और हम व्हाट्सऐप पर बताएँगे कि क्या इस्तेमाल करना है, कितना, कब और किस कीमत पर।",
  ],
  closing: "पक्का नहीं कि आपके खेत को क्या चाहिए? ₹250 की एक कॉल से शुरू करें।",
};

const bioinputs: Record<Locale, BioInputsContent> = { en, kn, hi };
export default bioinputs;
