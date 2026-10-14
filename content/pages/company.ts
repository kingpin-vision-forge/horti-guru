import type { CropId } from "@/content/crops";
import type { Locale } from "@/lib/i18n";

/** Which crop each testimonial slot belongs to. Change these when real testimonials arrive. */
export const resultSlots: { n: number; crop: CropId }[] = [
  { n: 1, crop: "ginger" },
  { n: 2, crop: "arecanut" },
  { n: 3, crop: "banana" },
  { n: 4, crop: "turmeric" },
  { n: 5, crop: "pepper" },
  { n: 6, crop: "ginger" },
  { n: 7, crop: "arecanut" },
  { n: 8, crop: "banana" },
  { n: 9, crop: "turmeric" },
  { n: 10, crop: "pepper" },
  { n: 11, crop: "ginger" },
  { n: 12, crop: "arecanut" },
];

type Content = {
  results: { title: string; description: string; crumb: string; h1: string; sub: string; filterLabel: string; all: string; empty: string; closing: string };
  about: {
    title: string;
    description: string;
    crumb: string;
    h1: string;
    whyHeading: string;
    why: string[];
    teamHeading: string;
    teamIntro: string;
    yearsLabel: string;
    howHeading: string;
    how: { title: string; body: string }[];
    whereHeading: string;
    hoursLabel: string;
    addressLabel: string;
    directions: string;
  };
  contact: {
    title: string;
    description: string;
    crumb: string;
    h1: string;
    sub: string;
    call: string;
    whatsapp: string;
    fastest: string;
    email: string;
    visit: string;
    hoursLabel: string;
    formHeading: string;
    mapHeading: string;
  };
  map: { show: string; note: string; title: string };
};

const en: Content = {
  results: {
    title: "Results from Growers | Horti Guru",
    description: "What ginger, turmeric, arecanut, banana and pepper growers in Karnataka say about season-long advisory from Horti Guru.",
    crumb: "Results",
    h1: "Results from the field",
    sub: "Growers across Karnataka, in their own words. Choose your crop to read from growers like you.",
    filterLabel: "Show results for",
    all: "All crops",
    empty: "No results for this crop yet.",
    closing: "Want results like these? Start with a single call, ₹250.",
  },
  about: {
    title: "About Horti Guru | Horticulture Advisory, Karnataka",
    description: "Who we are: horticulture advisers working with ginger, turmeric, arecanut, banana and pepper growers in Karnataka. Our team, how we work and where to find us.",
    crumb: "About",
    h1: "About Horti Guru",
    whyHeading: "Why this exists",
    why: [
      "A great deal is known about how to grow ginger, turmeric, arecanut, banana and pepper well. Very little of it reaches the person deciding what to apply in the field this week. Growers rely on habit, on the input dealer, or on a neighbour, and pay for it in disease found too late and fertilizer bought on guesswork.",
      "Horti Guru closes that gap. We work with five crops only, so the people answering your questions know them well, and we sell our advice openly, at prices listed on this site, rather than recovering it through the inputs we recommend.",
    ],
    teamHeading: "The team",
    teamIntro: "The people who answer your messages and walk your fields.",
    yearsLabel: "years in the field",
    howHeading: "How we work",
    how: [
      { title: "Field first", body: "Advice starts from what is happening in your plot, from photographs, visits and your own test results, not from a general schedule." },
      { title: "Evidence based", body: "Recommendations come from soil, water and plant tests and from established practice for each crop. When we are not sure, we say so and test." },
      { title: "Clear prices", body: "Every price is on this website. Travel for field visits is charged at cost and agreed before the visit." },
      { title: "Accountable", body: "You deal with the same people through the season, and every recommendation is in writing on WhatsApp." },
    ],
    whereHeading: "Where we are",
    hoursLabel: "Opening hours",
    addressLabel: "Address",
    directions: "Get directions",
  },
  contact: {
    title: "Contact Horti Guru | Call, WhatsApp or Visit",
    description: "Contact Horti Guru by phone, WhatsApp or email, or visit our office in Karnataka. WhatsApp is the fastest way to reach an expert.",
    crumb: "Contact",
    h1: "Contact us",
    sub: "Send a photograph of your problem on WhatsApp, call us, or visit the office.",
    call: "Call",
    whatsapp: "WhatsApp",
    fastest: "Fastest reply",
    email: "Email",
    visit: "Visit",
    hoursLabel: "Opening hours",
    formHeading: "Send us a message",
    mapHeading: "Find us",
  },
  map: { show: "Show map", note: "Loads Google Maps", title: "Map to the Horti Guru office" },
};

const kn: Content = {
  results: {
    title: "ಬೆಳೆಗಾರರ ಫಲಿತಾಂಶಗಳು | Horti Guru",
    description: "Horti Guru ನ ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆಯ ಬಗ್ಗೆ ಕರ್ನಾಟಕದ ಶುಂಠಿ, ಅರಿಶಿನ, ಅಡಿಕೆ, ಬಾಳೆ ಮತ್ತು ಕಾಳುಮೆಣಸು ಬೆಳೆಗಾರರು ಏನು ಹೇಳುತ್ತಾರೆ.",
    crumb: "ಫಲಿತಾಂಶಗಳು",
    h1: "ಹೊಲದಿಂದ ಫಲಿತಾಂಶಗಳು",
    sub: "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಬೆಳೆಗಾರರು, ಅವರದೇ ಮಾತುಗಳಲ್ಲಿ. ನಿಮ್ಮಂತಹ ಬೆಳೆಗಾರರ ಮಾತು ಓದಲು ನಿಮ್ಮ ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ.",
    filterLabel: "ಯಾವ ಬೆಳೆಯ ಫಲಿತಾಂಶ",
    all: "ಎಲ್ಲ ಬೆಳೆಗಳು",
    empty: "ಈ ಬೆಳೆಗೆ ಇನ್ನೂ ಫಲಿತಾಂಶಗಳಿಲ್ಲ.",
    closing: "ಇಂತಹ ಫಲಿತಾಂಶ ಬೇಕೇ? ₹250 ರ ಒಂದು ಕರೆಯಿಂದ ಆರಂಭಿಸಿ.",
  },
  about: {
    title: "Horti Guru ಬಗ್ಗೆ | ತೋಟಗಾರಿಕೆ ಸಲಹೆ, ಕರ್ನಾಟಕ",
    description: "ನಾವು ಯಾರು: ಕರ್ನಾಟಕದ ಶುಂಠಿ, ಅರಿಶಿನ, ಅಡಿಕೆ, ಬಾಳೆ ಮತ್ತು ಕಾಳುಮೆಣಸು ಬೆಳೆಗಾರರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ತೋಟಗಾರಿಕೆ ಸಲಹೆಗಾರರು. ನಮ್ಮ ತಂಡ, ಕೆಲಸದ ರೀತಿ ಮತ್ತು ವಿಳಾಸ.",
    crumb: "ನಮ್ಮ ಬಗ್ಗೆ",
    h1: "Horti Guru ಬಗ್ಗೆ",
    whyHeading: "ಇದು ಏಕೆ",
    why: [
      "ಶುಂಠಿ, ಅರಿಶಿನ, ಅಡಿಕೆ, ಬಾಳೆ ಮತ್ತು ಕಾಳುಮೆಣಸನ್ನು ಚೆನ್ನಾಗಿ ಬೆಳೆಯುವುದು ಹೇಗೆ ಎಂಬುದರ ಬಗ್ಗೆ ಸಾಕಷ್ಟು ಜ್ಞಾನವಿದೆ. ಈ ವಾರ ಹೊಲಕ್ಕೆ ಏನು ಹಾಕಬೇಕು ಎಂದು ನಿರ್ಧರಿಸುವ ವ್ಯಕ್ತಿಯನ್ನು ತಲುಪುವುದು ಅದರಲ್ಲಿ ತುಂಬಾ ಕಡಿಮೆ. ಬೆಳೆಗಾರರು ಅಭ್ಯಾಸ, ಅಂಗಡಿಯವರು ಅಥವಾ ನೆರೆಯವರನ್ನು ಅವಲಂಬಿಸುತ್ತಾರೆ, ಮತ್ತು ತಡವಾಗಿ ಪತ್ತೆಯಾದ ರೋಗ ಹಾಗೂ ಊಹೆಯಿಂದ ಖರೀದಿಸಿದ ಗೊಬ್ಬರಕ್ಕೆ ಬೆಲೆ ತೆರುತ್ತಾರೆ.",
      "Horti Guru ಆ ಅಂತರವನ್ನು ಮುಚ್ಚುತ್ತದೆ. ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವವರು ಬೆಳೆಯನ್ನು ಚೆನ್ನಾಗಿ ಬಲ್ಲವರಾಗಲಿ ಎಂದು ನಾವು ಐದು ಬೆಳೆಗಳಲ್ಲಿ ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ, ಮತ್ತು ನಾವು ಶಿಫಾರಸು ಮಾಡುವ ಒಳಸುರಿಗಳ ಮೂಲಕ ವಸೂಲಿ ಮಾಡುವ ಬದಲು, ಈ ಜಾಲತಾಣದಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಿದ ಬೆಲೆಗಳಲ್ಲಿ ನಮ್ಮ ಸಲಹೆಯನ್ನು ಬಹಿರಂಗವಾಗಿ ಮಾರುತ್ತೇವೆ.",
    ],
    teamHeading: "ತಂಡ",
    teamIntro: "ನಿಮ್ಮ ಸಂದೇಶಗಳಿಗೆ ಉತ್ತರಿಸುವ ಮತ್ತು ನಿಮ್ಮ ಹೊಲದಲ್ಲಿ ನಡೆಯುವವರು.",
    yearsLabel: "ವರ್ಷಗಳ ಕ್ಷೇತ್ರ ಅನುಭವ",
    howHeading: "ನಾವು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ",
    how: [
      { title: "ಹೊಲವೇ ಮೊದಲು", body: "ಸಲಹೆ ಸಾಮಾನ್ಯ ವೇಳಾಪಟ್ಟಿಯಿಂದಲ್ಲ, ನಿಮ್ಮ ಜಮೀನಿನಲ್ಲಿ ನಡೆಯುತ್ತಿರುವುದರಿಂದ, ಫೋಟೋ, ಭೇಟಿ ಮತ್ತು ನಿಮ್ಮದೇ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳಿಂದ ಶುರುವಾಗುತ್ತದೆ." },
      { title: "ಪುರಾವೆ ಆಧಾರಿತ", body: "ಶಿಫಾರಸುಗಳು ಮಣ್ಣು, ನೀರು ಮತ್ತು ಗಿಡ ಪರೀಕ್ಷೆಗಳಿಂದ ಮತ್ತು ಪ್ರತಿ ಬೆಳೆಯ ಸ್ಥಾಪಿತ ಪದ್ಧತಿಯಿಂದ ಬರುತ್ತವೆ. ಖಚಿತವಿಲ್ಲದಿದ್ದಾಗ ಹಾಗೆಯೇ ಹೇಳಿ ಪರೀಕ್ಷಿಸುತ್ತೇವೆ." },
      { title: "ಸ್ಪಷ್ಟ ಬೆಲೆ", body: "ಪ್ರತಿ ಬೆಲೆಯೂ ಈ ಜಾಲತಾಣದಲ್ಲಿದೆ. ಹೊಲ ಭೇಟಿಯ ಪ್ರಯಾಣ ವೆಚ್ಚವನ್ನು ನಿಜವಾದ ಖರ್ಚಿನಲ್ಲಿ, ಭೇಟಿಗೆ ಮುನ್ನ ಒಪ್ಪಿಕೊಂಡು ವಿಧಿಸಲಾಗುತ್ತದೆ." },
      { title: "ಹೊಣೆಗಾರಿಕೆ", body: "ಹಂಗಾಮಿನುದ್ದಕ್ಕೂ ನೀವು ಅದೇ ವ್ಯಕ್ತಿಗಳೊಂದಿಗೆ ವ್ಯವಹರಿಸುತ್ತೀರಿ, ಮತ್ತು ಪ್ರತಿ ಶಿಫಾರಸು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಲಿಖಿತವಾಗಿರುತ್ತದೆ." },
    ],
    whereHeading: "ನಾವು ಎಲ್ಲಿದ್ದೇವೆ",
    hoursLabel: "ಕಚೇರಿ ಸಮಯ",
    addressLabel: "ವಿಳಾಸ",
    directions: "ದಾರಿ ತಿಳಿಯಿರಿ",
  },
  contact: {
    title: "Horti Guru ಸಂಪರ್ಕ | ಕರೆ, ವಾಟ್ಸಾಪ್ ಅಥವಾ ಭೇಟಿ",
    description: "Horti Guru ಅನ್ನು ದೂರವಾಣಿ, ವಾಟ್ಸಾಪ್ ಅಥವಾ ಇಮೇಲ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ, ಅಥವಾ ಕರ್ನಾಟಕದಲ್ಲಿರುವ ನಮ್ಮ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ. ತಜ್ಞರನ್ನು ತಲುಪಲು ವಾಟ್ಸಾಪ್ ಅತಿ ವೇಗದ ದಾರಿ.",
    crumb: "ಸಂಪರ್ಕ",
    h1: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    sub: "ನಿಮ್ಮ ಸಮಸ್ಯೆಯ ಫೋಟೋವನ್ನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಿ, ಕರೆ ಮಾಡಿ, ಅಥವಾ ಕಚೇರಿಗೆ ಬನ್ನಿ.",
    call: "ಕರೆ ಮಾಡಿ",
    whatsapp: "ವಾಟ್ಸಾಪ್",
    fastest: "ಅತಿ ವೇಗದ ಉತ್ತರ",
    email: "ಇಮೇಲ್",
    visit: "ಭೇಟಿ ನೀಡಿ",
    hoursLabel: "ಕಚೇರಿ ಸಮಯ",
    formHeading: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    mapHeading: "ನಮ್ಮನ್ನು ಹುಡುಕಿ",
  },
  map: { show: "ನಕ್ಷೆ ತೋರಿಸಿ", note: "Google Maps ತೆರೆಯುತ್ತದೆ", title: "Horti Guru ಕಚೇರಿಯ ನಕ್ಷೆ" },
};

const hi: Content = {
  results: {
    title: "उत्पादकों के परिणाम | Horti Guru",
    description: "Horti Guru की पूरे सीज़न की सलाह के बारे में कर्नाटक के अदरक, हल्दी, सुपारी, केला और काली मिर्च उत्पादक क्या कहते हैं।",
    crumb: "परिणाम",
    h1: "खेतों से परिणाम",
    sub: "पूरे कर्नाटक के उत्पादक, उनके अपने शब्दों में। अपने जैसे उत्पादकों की बात पढ़ने के लिए अपनी फ़सल चुनें।",
    filterLabel: "किस फ़सल के परिणाम",
    all: "सभी फ़सलें",
    empty: "इस फ़सल के लिए अभी कोई परिणाम नहीं।",
    closing: "ऐसे परिणाम चाहिए? ₹250 की एक कॉल से शुरू करें।",
  },
  about: {
    title: "Horti Guru के बारे में | बागवानी सलाह, कर्नाटक",
    description: "हम कौन हैं: कर्नाटक के अदरक, हल्दी, सुपारी, केला और काली मिर्च उत्पादकों के साथ काम करने वाले बागवानी सलाहकार। हमारी टीम, काम का तरीका और पता।",
    crumb: "हमारे बारे में",
    h1: "Horti Guru के बारे में",
    whyHeading: "यह क्यों है",
    why: [
      "अदरक, हल्दी, सुपारी, केला और काली मिर्च को अच्छी तरह उगाने के बारे में बहुत कुछ पता है। उसमें से बहुत कम उस व्यक्ति तक पहुँचता है जो इस हफ़्ते खेत में क्या डालना है, यह तय करता है। उत्पादक आदत, दुकानदार या पड़ोसी पर निर्भर रहते हैं, और देर से पकड़े गए रोग और अंदाज़े से ख़रीदी खाद की कीमत चुकाते हैं।",
      "Horti Guru यह दूरी पाटता है। हम सिर्फ़ पाँच फ़सलों पर काम करते हैं, ताकि आपके सवालों का जवाब देने वाले उन्हें अच्छी तरह जानें, और हम अपनी सलाह खुलकर, इस वेबसाइट पर लिखी कीमतों पर बेचते हैं, न कि सुझाए गए इनपुट के ज़रिए वसूलते हैं।",
    ],
    teamHeading: "टीम",
    teamIntro: "वे लोग जो आपके संदेशों का जवाब देते हैं और आपके खेत में चलते हैं।",
    yearsLabel: "साल खेतों में",
    howHeading: "हम कैसे काम करते हैं",
    how: [
      { title: "खेत पहले", body: "सलाह किसी सामान्य शेड्यूल से नहीं, आपके खेत में जो हो रहा है उससे, फ़ोटो, दौरे और आपकी अपनी जाँच के नतीजों से शुरू होती है।" },
      { title: "प्रमाण पर आधारित", body: "सिफ़ारिशें मिट्टी, पानी और पौधों की जाँच से और हर फ़सल की स्थापित पद्धति से आती हैं। जब पक्का न हो, तो हम साफ़ कहते हैं और जाँच करते हैं।" },
      { title: "साफ़ कीमतें", body: "हर कीमत इस वेबसाइट पर है। खेत के दौरे की यात्रा वास्तविक लागत पर ली जाती है और दौरे से पहले तय होती है।" },
      { title: "जवाबदेही", body: "पूरे सीज़न आप उन्हीं लोगों से बात करते हैं, और हर सिफ़ारिश व्हाट्सऐप पर लिखित रूप में होती है।" },
    ],
    whereHeading: "हम कहाँ हैं",
    hoursLabel: "खुलने का समय",
    addressLabel: "पता",
    directions: "रास्ता देखें",
  },
  contact: {
    title: "Horti Guru से संपर्क | कॉल, व्हाट्सऐप या दौरा",
    description: "Horti Guru से फ़ोन, व्हाट्सऐप या ईमेल पर संपर्क करें, या कर्नाटक में हमारे दफ़्तर आएँ। विशेषज्ञ तक पहुँचने का सबसे तेज़ रास्ता व्हाट्सऐप है।",
    crumb: "संपर्क",
    h1: "हमसे संपर्क करें",
    sub: "अपनी समस्या की फ़ोटो व्हाट्सऐप पर भेजें, कॉल करें, या दफ़्तर आएँ।",
    call: "कॉल करें",
    whatsapp: "व्हाट्सऐप",
    fastest: "सबसे तेज़ जवाब",
    email: "ईमेल",
    visit: "दफ़्तर आएँ",
    hoursLabel: "खुलने का समय",
    formHeading: "हमें संदेश भेजें",
    mapHeading: "हमें खोजें",
  },
  map: { show: "नक्शा दिखाएँ", note: "Google Maps खुलेगा", title: "Horti Guru दफ़्तर का नक्शा" },
};

const company: Record<Locale, Content> = { en, kn, hi };
export default company;
