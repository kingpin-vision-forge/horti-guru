/**
 * Every client-supplied fact on the site. Replace a value here and it updates
 * everywhere. See content/placeholders.md for what each one needs.
 * While a value still starts with "[", the site treats it as unfilled.
 *
 * MOCK VALUES FOR CLIENT REVIEW. The phone, WhatsApp, email, UPI ID, address,
 * testimonials and team below are invented. Replace all of them with real
 * details before launch.
 */
export const P = {
  METRIC_ACRES: "1,200+",
  METRIC_GROWERS: "850+",
  METRIC_YEARS: "12",

  PHONE: "+91 90000 12345",
  WHATSAPP: "+91 90000 12345",
  EMAIL: "hello@hortiguru.in",
  UPI_ID: "mock.hortiguru@ybl",
  UPI_QR: "/img/upi-qr-sample.svg",

  ADDRESS_STREET: "#14, 2nd Cross, Vinoba Nagar",
  ADDRESS_CITY: "Shivamogga",
  ADDRESS_PIN: "577204",
  HOURS: "Mon–Sat, 9:00 am – 6:00 pm",
  CONFIRMATION_WINDOW: "4 working hours",
  LAB_TURNAROUND: "7 working days",

  TESTIMONIAL_FEATURED_QUOTE:
    "Last year rhizome rot took almost half my ginger. This season the team caught it in the first week from a WhatsApp photo, and I harvested the full field.",
  TESTIMONIAL_FEATURED_NAME: "Ramesh Gowda",
  TESTIMONIAL_FEATURED_DISTRICT: "Hassan",
  TESTIMONIAL_FEATURED_CROP: "Ginger",
  TESTIMONIAL_FEATURED_ACRES: "3",

  // Legal pages: substituted into content/pages/legal.ts by LegalPage.
  LEGAL_ENTITY: "Horti Guru Agri Services Pvt. Ltd.",
  JURISDICTION_CITY: "Shivamogga",
  RETENTION_PERIOD: "3 years",
  ADVISORY_REFUND_DAYS: "7",
  RESCHEDULE_NOTICE: "24 hours",
  PRODUCT_RETURN_DAYS: "7",
  REFUND_PROCESSING_DAYS: "5",
} as const;

export function isFilled(value: string) {
  return !value.startsWith("[");
}

/** Digits only, for tel: and wa.me links. Empty while unfilled. */
export function digits(value: string) {
  return isFilled(value) ? value.replace(/\D/g, "") : "";
}

type Testimonial = { quote: string; name: string; district: string; crop: string; acres: string };

/** Results page slots. Each slot's crop is set in content/pages/company.ts (resultSlots). */
const testimonials: Testimonial[] = [
  // 1 ginger
  { quote: "They told me exactly when to stop irrigating before harvest. My rhizomes came out firm and the trader paid the top rate.", name: "Manjunath K.", district: "Hassan", crop: "Ginger", acres: "4" },
  // 2 arecanut
  { quote: "Fruit drop was killing my yield every monsoon. The spray schedule they gave me cut it down to almost nothing.", name: "Shivaprasad Hegde", district: "Shivamogga", crop: "Arecanut", acres: "6" },
  // 3 banana
  { quote: "Good advice, quick replies.", name: "Lakshmi Devi", district: "Mysuru", crop: "Banana", acres: "2" },
  // 4 turmeric
  { quote: "The soil test showed my field was low on zinc. One correction and the curcumin content of my crop went up. I would not have known without the report.", name: "Basavaraj Patil", district: "Belagavi", crop: "Turmeric", acres: "5" },
  // 5 pepper
  { quote: "Quick wilt had finished three of my neighbours' gardens. Horti Guru's expert visited, changed my drainage and drench plan, and my vines are still standing.", name: "Joseph D'Souza", district: "Kodagu", crop: "Black pepper", acres: "3" },
  // 6 ginger
  { quote: "I am a first-time ginger grower. They walked me through every stage on WhatsApp, from seed treatment to harvest.", name: "Pradeep Naik", district: "Chikkamagaluru", crop: "Ginger", acres: "1.5" },
  // 7 arecanut
  { quote: "Yellow leaf was spreading. They were honest that it could not be cured, but the nutrition plan slowed it right down and saved the younger palms.", name: "Ganapathi Bhat", district: "Dakshina Kannada", crop: "Arecanut", acres: "8" },
  // 8 banana
  { quote: "Bunch weight went up by nearly 4 kg on average after following their fertigation plan.", name: "Suresh Reddy", district: "Chamarajanagar", crop: "Banana", acres: "3" },
  // 9 turmeric
  { quote: "Worth every rupee.", name: "Mahadevappa S.", district: "Mandya", crop: "Turmeric", acres: "2.5" },
  // 10 pepper
  { quote: "They helped me pick the right standards and spacing for a new pepper garden. Two years in, the vines are healthier than my old plot ever was.", name: "Anitha Poovaiah", district: "Kodagu", crop: "Black pepper", acres: "2" },
  // 11 ginger
  { quote: "The lab report came on time and the recommendations were simple enough for my workers to follow.", name: "Vinay Kumar", district: "Hassan", crop: "Ginger", acres: "5" },
  // 12 arecanut
  { quote: "I have used other advisers before. These people actually reply on Sundays during spraying season.", name: "Raghavendra Rao", district: "Uttara Kannada", crop: "Arecanut", acres: "4" },
];

/** Numbered testimonial slots, 1 to 12. */
export function testimonial(n: number) {
  return testimonials[n - 1];
}

type Expert = { name: string; qualification: string; specialisation: string; years: string };

const experts: Expert[] = [
  { name: "Dr. Kavitha Shetty", qualification: "Ph.D. (Horticulture), UAHS Shivamogga", specialisation: "Spice crops: ginger, turmeric and black pepper", years: "15" },
  { name: "Prakash Hegde", qualification: "M.Sc. (Plant Pathology), UAS Dharwad", specialisation: "Disease diagnosis and integrated pest management", years: "11" },
  { name: "Sneha Kulkarni", qualification: "M.Sc. (Soil Science), UAS Bengaluru", specialisation: "Soil and leaf testing, nutrient planning", years: "8" },
];

/** Team slots, 1 to 3. */
export function expert(n: number) {
  return experts[n - 1];
}
