import type { Locale } from "@/lib/i18n";

/**
 * Legal pages. Drafted as plain-language starting points; they must be reviewed
 * by a lawyer before launch. Business decisions are left as [TOKENS].
 */
export type LegalDoc = {
  title: string;
  description: string;
  h1: string;
  sections: { id: string; heading: string; body: string[]; emphasis?: boolean }[];
};

export const LEGAL_UPDATED = "2026-10-14";

type Docs = { terms: LegalDoc; privacy: LegalDoc; refunds: LegalDoc; ui: { updated: string; contents: string } };

const en: Docs = {
  ui: { updated: "Last updated", contents: "On this page" },
  terms: {
    title: "Terms of Service | Horti Guru",
    description: "Terms for using Horti Guru advisory, consultancy, laboratory testing and products, including the advisory disclaimer.",
    h1: "Terms of service",
    sections: [
      { id: "about", heading: "Who we are", body: ["These terms apply to services and products provided by [LEGAL_ENTITY] (\"Horti Guru\", \"we\"), [ADDRESS_STREET], [ADDRESS_CITY], Karnataka [ADDRESS_PIN]. By ordering from this website, you agree to them."] },
      { id: "services", heading: "Our services", body: ["We provide horticulture advisory over WhatsApp, consultancy including field visits and reports, laboratory testing, and agricultural inputs and equipment, as described on this website at the prices listed.", "Season-long advisory covers one crop cycle, or twelve months for perennial crops, for the acreage you have paid for. It covers the crop and plot you enrol."] },
      { id: "disclaimer", heading: "Advisory disclaimer", emphasis: true, body: ["Our advice is based on the information, photographs and samples you provide, our experience, and established practice for each crop. Crop outcomes also depend on weather, pests, disease pressure, input quality, timing and how advice is carried out, none of which we control.", "We therefore do not guarantee any yield, income or result. You remain responsible for decisions taken on your farm. Always read and follow the label on any pesticide or fertilizer, use protective equipment, and observe waiting periods before harvest.", "Our liability for any claim relating to a service is limited to the amount you paid for that service."] },
      { id: "orders", heading: "Orders and payment", body: ["Prices are in Indian rupees and include applicable taxes unless stated otherwise. Travel and accommodation for field visits and soil sampling are charged separately at actual cost and agreed with you before the visit.", "Payment is made directly by UPI. An order is confirmed only when we have verified your payment and told you so on WhatsApp."] },
      { id: "samples", heading: "Samples and testing", body: ["Test results apply only to the sample received. A sample that is not collected as described on our lab testing page may give results that do not represent your field."] },
      { id: "conduct", heading: "Using WhatsApp advisory", body: ["Advisory is for your own farm. Please do not share access with others or use it for plots you have not enrolled. We reply during our working hours, [HOURS]."] },
      { id: "law", heading: "Governing law", body: ["These terms are governed by the laws of India. Disputes are subject to the courts at [JURISDICTION_CITY], Karnataka."] },
      { id: "contact", heading: "Contact", body: ["Questions about these terms: [EMAIL] or [PHONE]."] },
    ],
  },
  privacy: {
    title: "Privacy Policy | Horti Guru",
    description: "How Horti Guru collects, uses and protects your information when you contact us, order a service or use WhatsApp advisory.",
    h1: "Privacy policy",
    sections: [
      { id: "what", heading: "What we collect", body: ["When you contact us or place an order: your name, phone number, village or town, crop and acreage, and payment reference. During advisory: the messages, photographs and test results you share with us. This website does not use advertising trackers."] },
      { id: "why", heading: "Why we use it", body: ["To confirm your order and payment, to give you advice and test results, and to contact you about the service you bought. We do not sell your information."] },
      { id: "whatsapp", heading: "WhatsApp", body: ["Forms on this site open WhatsApp with your answers filled in. Nothing is sent until you press send. Messages you send on WhatsApp are also handled under WhatsApp's own terms and privacy policy."] },
      { id: "sharing", heading: "Who we share it with", body: ["Only people who need it to deliver your service, such as the expert advising you or the laboratory testing your sample, and authorities where the law requires it."] },
      { id: "keeping", heading: "How long we keep it", body: ["For as long as you are a customer and for [RETENTION_PERIOD] after, so we can refer to your field's history if you return. You can ask us to delete it sooner."] },
      { id: "rights", heading: "Your choices", body: ["You can ask to see, correct or delete the information we hold about you by writing to [EMAIL]."] },
      { id: "cookies", heading: "Cookies", body: ["We store one small cookie to remember the language you choose. Checkout keeps your order in your browser until you finish, so it is not lost if the page reloads."] },
    ],
  },
  refunds: {
    title: "Refunds and Cancellation | Horti Guru",
    description: "Horti Guru refund and cancellation policy for advisory, consultancy, laboratory tests and products paid by UPI.",
    h1: "Refunds and cancellation",
    sections: [
      { id: "advisory", heading: "Season-long advisory", body: ["You can cancel within [ADVISORY_REFUND_DAYS] days of confirmation for a full refund if advisory has not started. After that, advisory is not refundable, because the expert's time is reserved for your crop for the season."] },
      { id: "consultancy", heading: "Calls and field visits", body: ["Calls and field visits can be rescheduled free of charge with at least [RESCHEDULE_NOTICE] notice. A field visit cancelled with that notice is refunded in full, minus any travel already booked. Completed calls and visits are not refundable."] },
      { id: "reports", heading: "Reports and schedules", body: ["Crop planning reports, nutrient schedules and irrigation schedules can be cancelled for a full refund before work starts. Once work has started, they are not refundable."] },
      { id: "lab", heading: "Laboratory tests", body: ["Tests can be cancelled for a full refund before the sample reaches us. If a sample cannot be tested because of how it was collected or packed, we will ask for a new sample at no extra charge."] },
      { id: "products", heading: "Products", body: ["Unused products in their original packaging can be returned within [PRODUCT_RETURN_DAYS] days of delivery. Bio inputs cannot be returned once opened, because they are living products. Damaged or wrong items are replaced free of charge."] },
      { id: "how", heading: "How refunds are paid", body: ["Refunds go back to the UPI account you paid from, within [REFUND_PROCESSING_DAYS] working days of approval. To ask for a refund, message us on WhatsApp with your order reference."] },
    ],
  },
};

const kn: Docs = {
  ui: { updated: "ಕೊನೆಯ ಪರಿಷ್ಕರಣೆ", contents: "ಈ ಪುಟದಲ್ಲಿ" },
  terms: {
    title: "ಸೇವಾ ನಿಯಮಗಳು | Horti Guru",
    description: "Horti Guru ಸಲಹೆ, ಸಮಾಲೋಚನೆ, ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಉತ್ಪನ್ನಗಳನ್ನು ಬಳಸುವ ನಿಯಮಗಳು, ಸಲಹೆಯ ಹೊಣೆ ನಿರಾಕರಣೆ ಸೇರಿ.",
    h1: "ಸೇವಾ ನಿಯಮಗಳು",
    sections: [
      { id: "about", heading: "ನಾವು ಯಾರು", body: ["ಈ ನಿಯಮಗಳು [LEGAL_ENTITY] (\"Horti Guru\", \"ನಾವು\"), [ADDRESS_STREET], [ADDRESS_CITY], ಕರ್ನಾಟಕ [ADDRESS_PIN] ಒದಗಿಸುವ ಸೇವೆ ಮತ್ತು ಉತ್ಪನ್ನಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತವೆ. ಈ ಜಾಲತಾಣದಿಂದ ಆರ್ಡರ್ ಮಾಡುವ ಮೂಲಕ ನೀವು ಇವುಗಳಿಗೆ ಒಪ್ಪುತ್ತೀರಿ."] },
      { id: "services", heading: "ನಮ್ಮ ಸೇವೆಗಳು", body: ["ನಾವು ವಾಟ್ಸಾಪ್ ಮೂಲಕ ತೋಟಗಾರಿಕೆ ಸಲಹೆ, ಹೊಲ ಭೇಟಿ ಮತ್ತು ವರದಿ ಸೇರಿದ ಸಮಾಲೋಚನೆ, ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ, ಮತ್ತು ಕೃಷಿ ಒಳಸುರಿ ಹಾಗೂ ಉಪಕರಣಗಳನ್ನು ಈ ಜಾಲತಾಣದಲ್ಲಿ ವಿವರಿಸಿದಂತೆ, ಪಟ್ಟಿ ಮಾಡಿದ ಬೆಲೆಗಳಲ್ಲಿ ಒದಗಿಸುತ್ತೇವೆ.", "ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ, ನೀವು ಪಾವತಿಸಿದ ಎಕರೆಗೆ ಒಂದು ಬೆಳೆ ಚಕ್ರ, ಅಥವಾ ಬಹುವಾರ್ಷಿಕ ಬೆಳೆಗಳಿಗೆ ಹನ್ನೆರಡು ತಿಂಗಳು ಒಳಗೊಳ್ಳುತ್ತದೆ. ನೀವು ನೋಂದಾಯಿಸಿದ ಬೆಳೆ ಮತ್ತು ಜಮೀನಿಗೆ ಅನ್ವಯ."] },
      { id: "disclaimer", heading: "ಸಲಹೆಯ ಹೊಣೆ ನಿರಾಕರಣೆ", emphasis: true, body: ["ನಮ್ಮ ಸಲಹೆ ನೀವು ನೀಡುವ ಮಾಹಿತಿ, ಫೋಟೋ ಮತ್ತು ಮಾದರಿಗಳು, ನಮ್ಮ ಅನುಭವ ಮತ್ತು ಪ್ರತಿ ಬೆಳೆಯ ಸ್ಥಾಪಿತ ಪದ್ಧತಿಯನ್ನು ಆಧರಿಸಿದೆ. ಬೆಳೆಯ ಫಲಿತಾಂಶ ಹವಾಮಾನ, ಕೀಟ, ರೋಗದ ಒತ್ತಡ, ಒಳಸುರಿಯ ಗುಣಮಟ್ಟ, ಸಮಯ ಮತ್ತು ಸಲಹೆಯನ್ನು ಹೇಗೆ ಪಾಲಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನೂ ಅವಲಂಬಿಸಿದೆ, ಇವುಗಳಲ್ಲಿ ಯಾವುದೂ ನಮ್ಮ ನಿಯಂತ್ರಣದಲ್ಲಿಲ್ಲ.", "ಆದ್ದರಿಂದ ನಾವು ಯಾವುದೇ ಇಳುವರಿ, ಆದಾಯ ಅಥವಾ ಫಲಿತಾಂಶವನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ. ನಿಮ್ಮ ಜಮೀನಿನಲ್ಲಿ ತೆಗೆದುಕೊಳ್ಳುವ ನಿರ್ಧಾರಗಳಿಗೆ ನೀವೇ ಹೊಣೆ. ಯಾವುದೇ ಕೀಟನಾಶಕ ಅಥವಾ ಗೊಬ್ಬರದ ಲೇಬಲ್ ಓದಿ ಪಾಲಿಸಿ, ರಕ್ಷಣಾ ಸಾಧನ ಬಳಸಿ, ಮತ್ತು ಕೊಯ್ಲಿಗೆ ಮುನ್ನದ ಕಾಯುವ ಅವಧಿ ಪಾಲಿಸಿ.", "ಯಾವುದೇ ಸೇವೆಗೆ ಸಂಬಂಧಿಸಿದ ಕ್ಲೇಮಿಗೆ ನಮ್ಮ ಹೊಣೆ, ಆ ಸೇವೆಗೆ ನೀವು ಪಾವತಿಸಿದ ಮೊತ್ತಕ್ಕೆ ಸೀಮಿತ."] },
      { id: "orders", heading: "ಆರ್ಡರ್ ಮತ್ತು ಪಾವತಿ", body: ["ಬೆಲೆಗಳು ಭಾರತೀಯ ರೂಪಾಯಿಗಳಲ್ಲಿದ್ದು, ಬೇರೆ ರೀತಿ ಹೇಳದ ಹೊರತು ಅನ್ವಯವಾಗುವ ತೆರಿಗೆ ಸೇರಿವೆ. ಹೊಲ ಭೇಟಿ ಮತ್ತು ಮಣ್ಣಿನ ಮಾದರಿ ಸಂಗ್ರಹದ ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿ ವೆಚ್ಚವನ್ನು ನಿಜವಾದ ಖರ್ಚಿನಲ್ಲಿ ಪ್ರತ್ಯೇಕವಾಗಿ, ಭೇಟಿಗೆ ಮುನ್ನ ನಿಮ್ಮೊಂದಿಗೆ ಒಪ್ಪಿಕೊಂಡು ವಿಧಿಸಲಾಗುತ್ತದೆ.", "ಪಾವತಿ ನೇರವಾಗಿ UPI ಮೂಲಕ. ನಿಮ್ಮ ಪಾವತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ತಿಳಿಸಿದಾಗ ಮಾತ್ರ ಆರ್ಡರ್ ದೃಢವಾಗುತ್ತದೆ."] },
      { id: "samples", heading: "ಮಾದರಿ ಮತ್ತು ಪರೀಕ್ಷೆ", body: ["ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು ಸ್ವೀಕರಿಸಿದ ಮಾದರಿಗೆ ಮಾತ್ರ ಅನ್ವಯ. ನಮ್ಮ ಪ್ರಯೋಗಾಲಯ ಪುಟದಲ್ಲಿ ವಿವರಿಸಿದಂತೆ ಸಂಗ್ರಹಿಸದ ಮಾದರಿ ನಿಮ್ಮ ಹೊಲವನ್ನು ಪ್ರತಿನಿಧಿಸದ ಫಲಿತಾಂಶ ನೀಡಬಹುದು."] },
      { id: "conduct", heading: "ವಾಟ್ಸಾಪ್ ಸಲಹೆಯ ಬಳಕೆ", body: ["ಸಲಹೆ ನಿಮ್ಮದೇ ಜಮೀನಿಗೆ. ದಯವಿಟ್ಟು ಇತರರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ ಅಥವಾ ನೋಂದಾಯಿಸದ ಜಮೀನಿಗೆ ಬಳಸಬೇಡಿ. ನಮ್ಮ ಕೆಲಸದ ಸಮಯ [HOURS] ದಲ್ಲಿ ಉತ್ತರಿಸುತ್ತೇವೆ."] },
      { id: "law", heading: "ಅನ್ವಯವಾಗುವ ಕಾನೂನು", body: ["ಈ ನಿಯಮಗಳಿಗೆ ಭಾರತದ ಕಾನೂನು ಅನ್ವಯ. ವಿವಾದಗಳು [JURISDICTION_CITY], ಕರ್ನಾಟಕದ ನ್ಯಾಯಾಲಯಗಳ ವ್ಯಾಪ್ತಿಗೆ ಒಳಪಡುತ್ತವೆ."] },
      { id: "contact", heading: "ಸಂಪರ್ಕ", body: ["ಈ ನಿಯಮಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿಗೆ: [EMAIL] ಅಥವಾ [PHONE]."] },
    ],
  },
  privacy: {
    title: "ಗೌಪ್ಯತಾ ನೀತಿ | Horti Guru",
    description: "ನೀವು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿದಾಗ, ಸೇವೆ ಆರ್ಡರ್ ಮಾಡಿದಾಗ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಲಹೆ ಬಳಸಿದಾಗ Horti Guru ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಹೇಗೆ ಸಂಗ್ರಹಿಸಿ, ಬಳಸಿ, ರಕ್ಷಿಸುತ್ತದೆ.",
    h1: "ಗೌಪ್ಯತಾ ನೀತಿ",
    sections: [
      { id: "what", heading: "ನಾವು ಏನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ", body: ["ನೀವು ಸಂಪರ್ಕಿಸಿದಾಗ ಅಥವಾ ಆರ್ಡರ್ ಮಾಡಿದಾಗ: ನಿಮ್ಮ ಹೆಸರು, ದೂರವಾಣಿ, ಗ್ರಾಮ ಅಥವಾ ಊರು, ಬೆಳೆ ಮತ್ತು ಎಕರೆ, ಮತ್ತು ಪಾವತಿ ಉಲ್ಲೇಖ. ಸಲಹೆಯ ಅವಧಿಯಲ್ಲಿ: ನೀವು ಹಂಚಿಕೊಳ್ಳುವ ಸಂದೇಶ, ಫೋಟೋ ಮತ್ತು ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳು. ಈ ಜಾಲತಾಣ ಜಾಹೀರಾತು ಟ್ರ್ಯಾಕರ್‌ಗಳನ್ನು ಬಳಸುವುದಿಲ್ಲ."] },
      { id: "why", heading: "ಏಕೆ ಬಳಸುತ್ತೇವೆ", body: ["ನಿಮ್ಮ ಆರ್ಡರ್ ಮತ್ತು ಪಾವತಿ ದೃಢೀಕರಿಸಲು, ಸಲಹೆ ಮತ್ತು ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶ ನೀಡಲು, ಮತ್ತು ನೀವು ಖರೀದಿಸಿದ ಸೇವೆಯ ಬಗ್ಗೆ ಸಂಪರ್ಕಿಸಲು. ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ನಾವು ಮಾರುವುದಿಲ್ಲ."] },
      { id: "whatsapp", heading: "ವಾಟ್ಸಾಪ್", body: ["ಈ ಜಾಲತಾಣದ ಫಾರಂಗಳು ನಿಮ್ಮ ಉತ್ತರಗಳೊಂದಿಗೆ ವಾಟ್ಸಾಪ್ ತೆರೆಯುತ್ತವೆ. ನೀವು ಕಳುಹಿಸು ಒತ್ತುವವರೆಗೆ ಏನೂ ಹೋಗುವುದಿಲ್ಲ. ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸುವ ಸಂದೇಶಗಳು ವಾಟ್ಸಾಪ್‌ನ ಸ್ವಂತ ನಿಯಮ ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಗೂ ಒಳಪಡುತ್ತವೆ."] },
      { id: "sharing", heading: "ಯಾರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುತ್ತೇವೆ", body: ["ನಿಮ್ಮ ಸೇವೆ ಒದಗಿಸಲು ಅಗತ್ಯವಿರುವವರೊಂದಿಗೆ ಮಾತ್ರ, ಉದಾಹರಣೆಗೆ ನಿಮಗೆ ಸಲಹೆ ನೀಡುವ ತಜ್ಞರು ಅಥವಾ ನಿಮ್ಮ ಮಾದರಿ ಪರೀಕ್ಷಿಸುವ ಪ್ರಯೋಗಾಲಯ, ಮತ್ತು ಕಾನೂನು ಕೇಳಿದಲ್ಲಿ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ."] },
      { id: "keeping", heading: "ಎಷ್ಟು ಕಾಲ ಇಟ್ಟುಕೊಳ್ಳುತ್ತೇವೆ", body: ["ನೀವು ಗ್ರಾಹಕರಾಗಿರುವವರೆಗೆ ಮತ್ತು ನಂತರ [RETENTION_PERIOD], ನೀವು ಮರಳಿ ಬಂದರೆ ನಿಮ್ಮ ಹೊಲದ ಇತಿಹಾಸ ನೋಡಲು. ಬೇಗ ಅಳಿಸಲು ನೀವು ಕೇಳಬಹುದು."] },
      { id: "rights", heading: "ನಿಮ್ಮ ಆಯ್ಕೆಗಳು", body: ["ನಿಮ್ಮ ಬಗ್ಗೆ ನಮ್ಮಲ್ಲಿರುವ ಮಾಹಿತಿಯನ್ನು ನೋಡಲು, ಸರಿಪಡಿಸಲು ಅಥವಾ ಅಳಿಸಲು [EMAIL] ಗೆ ಬರೆಯಿರಿ."] },
      { id: "cookies", heading: "ಕುಕೀಗಳು", body: ["ನೀವು ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆ ನೆನಪಿಡಲು ಒಂದು ಸಣ್ಣ ಕುಕೀ ಇಡುತ್ತೇವೆ. ಪುಟ ಮರುಲೋಡ್ ಆದರೂ ಕಳೆಯದಂತೆ, ಚೆಕ್‌ಔಟ್ ನೀವು ಮುಗಿಸುವವರೆಗೆ ನಿಮ್ಮ ಆರ್ಡರ್ ಅನ್ನು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಇಡುತ್ತದೆ."] },
    ],
  },
  refunds: {
    title: "ಮರುಪಾವತಿ ಮತ್ತು ರದ್ದತಿ | Horti Guru",
    description: "UPI ಮೂಲಕ ಪಾವತಿಸಿದ ಸಲಹೆ, ಸಮಾಲೋಚನೆ, ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಉತ್ಪನ್ನಗಳಿಗೆ Horti Guru ಮರುಪಾವತಿ ಮತ್ತು ರದ್ದತಿ ನೀತಿ.",
    h1: "ಮರುಪಾವತಿ ಮತ್ತು ರದ್ದತಿ",
    sections: [
      { id: "advisory", heading: "ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ", body: ["ಸಲಹೆ ಆರಂಭವಾಗದಿದ್ದರೆ, ದೃಢೀಕರಣದ [ADVISORY_REFUND_DAYS] ದಿನಗಳೊಳಗೆ ರದ್ದುಪಡಿಸಿ ಪೂರ್ಣ ಮರುಪಾವತಿ ಪಡೆಯಬಹುದು. ನಂತರ, ತಜ್ಞರ ಸಮಯ ಹಂಗಾಮಿಗೆ ನಿಮ್ಮ ಬೆಳೆಗೆ ಮೀಸಲಾಗಿರುವುದರಿಂದ ಮರುಪಾವತಿ ಇಲ್ಲ."] },
      { id: "consultancy", heading: "ಕರೆ ಮತ್ತು ಹೊಲ ಭೇಟಿ", body: ["ಕನಿಷ್ಠ [RESCHEDULE_NOTICE] ಮುಂಚಿತ ಸೂಚನೆಯೊಂದಿಗೆ ಕರೆ ಮತ್ತು ಹೊಲ ಭೇಟಿಯನ್ನು ಉಚಿತವಾಗಿ ಮರುನಿಗದಿಪಡಿಸಬಹುದು. ಆ ಸೂಚನೆಯೊಂದಿಗೆ ರದ್ದಾದ ಹೊಲ ಭೇಟಿಗೆ, ಈಗಾಗಲೇ ಕಾಯ್ದಿರಿಸಿದ ಪ್ರಯಾಣ ಹೊರತುಪಡಿಸಿ ಪೂರ್ಣ ಮರುಪಾವತಿ. ಮುಗಿದ ಕರೆ ಮತ್ತು ಭೇಟಿಗಳಿಗೆ ಮರುಪಾವತಿ ಇಲ್ಲ."] },
      { id: "reports", heading: "ವರದಿ ಮತ್ತು ವೇಳಾಪಟ್ಟಿಗಳು", body: ["ಕೆಲಸ ಆರಂಭವಾಗುವ ಮುನ್ನ ಬೆಳೆ ಯೋಜನಾ ವರದಿ, ಪೋಷಕಾಂಶ ಮತ್ತು ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ರದ್ದುಪಡಿಸಿ ಪೂರ್ಣ ಮರುಪಾವತಿ ಪಡೆಯಬಹುದು. ಕೆಲಸ ಆರಂಭವಾದ ನಂತರ ಮರುಪಾವತಿ ಇಲ್ಲ."] },
      { id: "lab", heading: "ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ", body: ["ಮಾದರಿ ನಮಗೆ ತಲುಪುವ ಮುನ್ನ ಪರೀಕ್ಷೆ ರದ್ದುಪಡಿಸಿ ಪೂರ್ಣ ಮರುಪಾವತಿ ಪಡೆಯಬಹುದು. ಸಂಗ್ರಹ ಅಥವಾ ಪ್ಯಾಕಿಂಗ್‌ನಿಂದ ಮಾದರಿ ಪರೀಕ್ಷಿಸಲಾಗದಿದ್ದರೆ, ಹೆಚ್ಚುವರಿ ಶುಲ್ಕವಿಲ್ಲದೆ ಹೊಸ ಮಾದರಿ ಕೇಳುತ್ತೇವೆ."] },
      { id: "products", heading: "ಉತ್ಪನ್ನಗಳು", body: ["ಬಳಸದ, ಮೂಲ ಪ್ಯಾಕಿಂಗ್‌ನಲ್ಲಿರುವ ಉತ್ಪನ್ನಗಳನ್ನು ವಿತರಣೆಯ [PRODUCT_RETURN_DAYS] ದಿನಗಳೊಳಗೆ ಹಿಂದಿರುಗಿಸಬಹುದು. ಜೈವಿಕ ಒಳಸುರಿಗಳು ಜೀವಂತ ಉತ್ಪನ್ನಗಳಾದ್ದರಿಂದ ತೆರೆದ ಮೇಲೆ ಹಿಂದಿರುಗಿಸಲಾಗದು. ಹಾನಿಯಾದ ಅಥವಾ ತಪ್ಪು ವಸ್ತುಗಳನ್ನು ಉಚಿತವಾಗಿ ಬದಲಿಸಲಾಗುತ್ತದೆ."] },
      { id: "how", heading: "ಮರುಪಾವತಿ ಹೇಗೆ", body: ["ಅನುಮೋದನೆಯ [REFUND_PROCESSING_DAYS] ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ನೀವು ಪಾವತಿಸಿದ UPI ಖಾತೆಗೇ ಮರುಪಾವತಿ. ಮರುಪಾವತಿ ಕೇಳಲು, ನಿಮ್ಮ ಆರ್ಡರ್ ಉಲ್ಲೇಖದೊಂದಿಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ."] },
    ],
  },
};

const hi: Docs = {
  ui: { updated: "अंतिम अपडेट", contents: "इस पेज पर" },
  terms: {
    title: "सेवा की शर्तें | Horti Guru",
    description: "Horti Guru की सलाह, परामर्श, प्रयोगशाला जाँच और उत्पादों के इस्तेमाल की शर्तें, सलाह अस्वीकरण सहित।",
    h1: "सेवा की शर्तें",
    sections: [
      { id: "about", heading: "हम कौन हैं", body: ["ये शर्तें [LEGAL_ENTITY] (\"Horti Guru\", \"हम\"), [ADDRESS_STREET], [ADDRESS_CITY], कर्नाटक [ADDRESS_PIN] द्वारा दी जाने वाली सेवाओं और उत्पादों पर लागू होती हैं। इस वेबसाइट से ऑर्डर करके आप इनसे सहमत होते हैं।"] },
      { id: "services", heading: "हमारी सेवाएँ", body: ["हम व्हाट्सऐप पर बागवानी सलाह, खेत के दौरे और रिपोर्ट सहित परामर्श, प्रयोगशाला जाँच, और कृषि इनपुट व उपकरण, इस वेबसाइट पर बताए अनुसार और लिखी कीमतों पर देते हैं।", "पूरे सीज़न की सलाह आपके भुगतान किए गए एकड़ के लिए एक फ़सल चक्र, या बहुवर्षीय फ़सलों के लिए बारह महीने कवर करती है। यह आपकी पंजीकृत फ़सल और खेत पर लागू है।"] },
      { id: "disclaimer", heading: "सलाह अस्वीकरण", emphasis: true, body: ["हमारी सलाह आपकी दी गई जानकारी, फ़ोटो और नमूनों, हमारे अनुभव, और हर फ़सल की स्थापित पद्धति पर आधारित है। फ़सल के नतीजे मौसम, कीट, रोग के दबाव, इनपुट की गुणवत्ता, समय और सलाह पर अमल के तरीके पर भी निर्भर हैं, जिनमें से कोई भी हमारे नियंत्रण में नहीं।", "इसलिए हम किसी उपज, आय या नतीजे की गारंटी नहीं देते। अपने खेत पर लिए गए फ़ैसलों की ज़िम्मेदारी आपकी है। किसी भी कीटनाशक या खाद का लेबल हमेशा पढ़ें और मानें, सुरक्षा उपकरण इस्तेमाल करें, और कटाई से पहले की प्रतीक्षा अवधि का पालन करें।", "किसी सेवा से जुड़े किसी दावे के लिए हमारी ज़िम्मेदारी उस सेवा के लिए आपके भुगतान की राशि तक सीमित है।"] },
      { id: "orders", heading: "ऑर्डर और भुगतान", body: ["कीमतें भारतीय रुपये में हैं और अलग से न लिखा हो तो लागू कर शामिल हैं। खेत के दौरे और मिट्टी का नमूना लेने की यात्रा और ठहरने का ख़र्च वास्तविक लागत पर अलग से लिया जाता है और दौरे से पहले आपसे तय किया जाता है।", "भुगतान सीधे UPI से होता है। ऑर्डर तभी पक्का होता है जब हम आपका भुगतान जाँचकर व्हाट्सऐप पर बता देते हैं।"] },
      { id: "samples", heading: "नमूने और जाँच", body: ["जाँच के नतीजे सिर्फ़ प्राप्त नमूने पर लागू होते हैं। हमारे प्रयोगशाला पेज पर बताए तरीके से न लिया गया नमूना ऐसे नतीजे दे सकता है जो आपके खेत को नहीं दर्शाते।"] },
      { id: "conduct", heading: "व्हाट्सऐप सलाह का इस्तेमाल", body: ["सलाह आपके अपने खेत के लिए है। कृपया इसे दूसरों से साझा न करें या बिना पंजीकृत खेतों के लिए इस्तेमाल न करें। हम अपने काम के समय [HOURS] में जवाब देते हैं।"] },
      { id: "law", heading: "लागू क़ानून", body: ["ये शर्तें भारत के क़ानूनों के अधीन हैं। विवाद [JURISDICTION_CITY], कर्नाटक के न्यायालयों के अधिकार क्षेत्र में होंगे।"] },
      { id: "contact", heading: "संपर्क", body: ["इन शर्तों के बारे में सवाल: [EMAIL] या [PHONE]।"] },
    ],
  },
  privacy: {
    title: "गोपनीयता नीति | Horti Guru",
    description: "जब आप हमसे संपर्क करते हैं, सेवा ऑर्डर करते हैं या व्हाट्सऐप सलाह लेते हैं, तब Horti Guru आपकी जानकारी कैसे लेता, इस्तेमाल करता और सुरक्षित रखता है।",
    h1: "गोपनीयता नीति",
    sections: [
      { id: "what", heading: "हम क्या लेते हैं", body: ["जब आप संपर्क या ऑर्डर करते हैं: आपका नाम, फ़ोन नंबर, गाँव या कस्बा, फ़सल और एकड़, और भुगतान संदर्भ। सलाह के दौरान: आपके भेजे संदेश, फ़ोटो और जाँच के नतीजे। यह वेबसाइट विज्ञापन ट्रैकर इस्तेमाल नहीं करती।"] },
      { id: "why", heading: "हम इसे क्यों इस्तेमाल करते हैं", body: ["आपके ऑर्डर और भुगतान की पुष्टि, सलाह और जाँच के नतीजे देने, और आपकी ख़रीदी सेवा के बारे में संपर्क के लिए। हम आपकी जानकारी नहीं बेचते।"] },
      { id: "whatsapp", heading: "व्हाट्सऐप", body: ["इस साइट के फ़ॉर्म आपके जवाबों के साथ व्हाट्सऐप खोलते हैं। भेजें दबाने तक कुछ नहीं जाता। व्हाट्सऐप पर भेजे संदेश व्हाट्सऐप की अपनी शर्तों और गोपनीयता नीति के अधीन भी होते हैं।"] },
      { id: "sharing", heading: "हम किससे साझा करते हैं", body: ["सिर्फ़ उन लोगों से जिन्हें आपकी सेवा देने के लिए इसकी ज़रूरत है, जैसे आपको सलाह देने वाले विशेषज्ञ या आपका नमूना जाँचने वाली प्रयोगशाला, और क़ानून की माँग पर अधिकारियों से।"] },
      { id: "keeping", heading: "हम कब तक रखते हैं", body: ["जब तक आप ग्राहक हैं और उसके बाद [RETENTION_PERIOD], ताकि आप लौटें तो आपके खेत का इतिहास देख सकें। आप पहले हटाने के लिए कह सकते हैं।"] },
      { id: "rights", heading: "आपके विकल्प", body: ["आपके बारे में हमारी जानकारी देखने, सुधारने या हटाने के लिए [EMAIL] पर लिखें।"] },
      { id: "cookies", heading: "कुकीज़", body: ["आपकी चुनी भाषा याद रखने के लिए हम एक छोटी कुकी रखते हैं। पेज रीलोड होने पर भी खोए नहीं, इसलिए चेकआउट आपके पूरा करने तक आपका ऑर्डर आपके ब्राउज़र में रखता है।"] },
    ],
  },
  refunds: {
    title: "धनवापसी और रद्दीकरण | Horti Guru",
    description: "UPI से भुगतान की गई सलाह, परामर्श, प्रयोगशाला जाँच और उत्पादों के लिए Horti Guru की धनवापसी और रद्दीकरण नीति।",
    h1: "धनवापसी और रद्दीकरण",
    sections: [
      { id: "advisory", heading: "पूरे सीज़न की सलाह", body: ["अगर सलाह शुरू नहीं हुई है, तो पुष्टि के [ADVISORY_REFUND_DAYS] दिनों के भीतर रद्द करके पूरी धनवापसी ले सकते हैं। उसके बाद धनवापसी नहीं होती, क्योंकि सीज़न भर विशेषज्ञ का समय आपकी फ़सल के लिए आरक्षित होता है।"] },
      { id: "consultancy", heading: "कॉल और खेत के दौरे", body: ["कम से कम [RESCHEDULE_NOTICE] पहले सूचना देकर कॉल और खेत के दौरे मुफ़्त में दोबारा तय किए जा सकते हैं। उस सूचना के साथ रद्द दौरे की पूरी धनवापसी होती है, पहले से बुक यात्रा घटाकर। पूरी हो चुकी कॉल और दौरों की धनवापसी नहीं।"] },
      { id: "reports", heading: "रिपोर्ट और शेड्यूल", body: ["काम शुरू होने से पहले फ़सल योजना रिपोर्ट, पोषण और सिंचाई शेड्यूल रद्द करके पूरी धनवापसी ले सकते हैं। काम शुरू होने के बाद धनवापसी नहीं।"] },
      { id: "lab", heading: "प्रयोगशाला जाँच", body: ["नमूना हम तक पहुँचने से पहले जाँच रद्द करके पूरी धनवापसी ले सकते हैं। अगर नमूना लेने या पैकिंग की वजह से जाँच न हो सके, तो हम बिना अतिरिक्त शुल्क नया नमूना माँगेंगे।"] },
      { id: "products", heading: "उत्पाद", body: ["बिना इस्तेमाल, मूल पैकिंग वाले उत्पाद डिलीवरी के [PRODUCT_RETURN_DAYS] दिनों के भीतर लौटाए जा सकते हैं। जैविक इनपुट जीवित उत्पाद हैं, इसलिए खुलने के बाद नहीं लौटाए जा सकते। ख़राब या ग़लत सामान मुफ़्त बदला जाता है।"] },
      { id: "how", heading: "धनवापसी कैसे होती है", body: ["मंज़ूरी के [REFUND_PROCESSING_DAYS] कार्य दिवसों के भीतर उसी UPI खाते में धनवापसी होती है जिससे आपने भुगतान किया। धनवापसी माँगने के लिए अपने ऑर्डर संदर्भ के साथ व्हाट्सऐप पर संदेश भेजें।"] },
    ],
  },
};

const legal: Record<Locale, Docs> = { en, kn, hi };
export default legal;
