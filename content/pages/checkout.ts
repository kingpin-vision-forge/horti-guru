import type { Locale } from "@/lib/i18n";

export type CheckoutText = {
  title: string;
  description: string;
  crumb: string;
  h1: string;
  steps: [string, string, string, string];
  stepOf: string;
  // Step 1
  service: string;
  acres: string;
  quantity: string;
  less: string;
  more: string;
  total: string;
  noAdvance: string;
  travelNote: string;
  next: string;
  back: string;
  // Step 2
  detailsIntro: string;
  village: string;
  required: string;
  phoneInvalid: string;
  // Step 3
  payIntro: string;
  amount: string;
  reference: string;
  scan: string;
  upiId: string;
  copy: string;
  copied: string;
  openApp: string;
  anyApp: string;
  reassurance: string;
  paid: string;
  // Step 4
  confirmIntro: string;
  utr: string;
  utrHint: string;
  utrInvalid: string;
  or: string;
  screenshot: string;
  screenshotHint: string;
  needProof: string;
  confirm: string;
  // Confirmation
  doneHeading: string;
  doneRef: string;
  nextHeading: string;
  nextSteps: string[];
  sendWhatsapp: string;
  attachNote: string;
  messageTitle: string;
  summary: { service: string; qty: string; amount: string; name: string; phone: string; village: string; crop: string; utr: string; ref: string; proofScreenshot: string };
  newOrder: string;
};

const en: CheckoutText = {
  title: "Checkout | Pay by UPI | Horti Guru",
  description: "Order Horti Guru advisory, consultancy or lab tests and pay directly by UPI. Payments are confirmed by our team.",
  crumb: "Checkout",
  h1: "Your order",
  steps: ["Your order", "Your details", "Pay by UPI", "Confirm payment"],
  stepOf: "Step {n} of 4",
  service: "Service",
  acres: "Acres",
  quantity: "Quantity",
  less: "One fewer",
  more: "One more",
  total: "Total",
  noAdvance: "No advance charges. You pay directly by UPI.",
  travelNote: "Travel and accommodation charged separately.",
  next: "Continue",
  back: "Back",
  detailsIntro: "So we can confirm your order and reach you on WhatsApp.",
  village: "Village or town",
  required: "Please fill this in.",
  phoneInvalid: "Please enter a 10-digit phone number.",
  payIntro: "Pay the exact amount below from any UPI app.",
  amount: "Amount to pay",
  reference: "Your order reference",
  scan: "Scan with any UPI app",
  upiId: "UPI ID",
  copy: "Copy",
  copied: "Copied",
  openApp: "Or open your app",
  anyApp: "Other UPI app",
  reassurance: "Payment goes directly to Horti Guru. We confirm within {window}.",
  paid: "I have paid",
  confirmIntro: "This is how we match your payment to your order.",
  utr: "UPI reference number (UTR)",
  utrHint: "A 12-digit number shown in your UPI app under the payment details, sometimes called UPI Ref No. or Transaction ID.",
  utrInvalid: "The UTR is a 12-digit number.",
  or: "or",
  screenshot: "I will send a screenshot of the payment on WhatsApp",
  screenshotHint: "Easier for many people. You will send it in the next step.",
  needProof: "Enter the UTR, or choose to send a screenshot.",
  confirm: "Confirm my order",
  doneHeading: "Order received",
  doneRef: "Your reference number",
  nextHeading: "What happens next",
  nextSteps: [
    "Send your order to us on WhatsApp with the button below. It already contains your reference and payment details.",
    "We check your payment and confirm on WhatsApp within {window}.",
    "Once confirmed, an expert contacts you to get started.",
  ],
  sendWhatsapp: "Send order on WhatsApp",
  attachNote: "If you chose to send a screenshot, attach it in the WhatsApp chat.",
  messageTitle: "New order from hortiguru.com",
  summary: { service: "Service", qty: "Quantity", amount: "Amount", name: "Name", phone: "Phone", village: "Village or town", crop: "Crop", utr: "UTR", ref: "Reference", proofScreenshot: "Screenshot to follow" },
  newOrder: "Place another order",
};

const kn: CheckoutText = {
  title: "ಚೆಕ್‌ಔಟ್ | UPI ಮೂಲಕ ಪಾವತಿ | Horti Guru",
  description: "Horti Guru ಸಲಹೆ, ಸಮಾಲೋಚನೆ ಅಥವಾ ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಆರ್ಡರ್ ಮಾಡಿ, ನೇರವಾಗಿ UPI ಮೂಲಕ ಪಾವತಿಸಿ. ಪಾವತಿಯನ್ನು ನಮ್ಮ ತಂಡ ದೃಢೀಕರಿಸುತ್ತದೆ.",
  crumb: "ಚೆಕ್‌ಔಟ್",
  h1: "ನಿಮ್ಮ ಆರ್ಡರ್",
  steps: ["ನಿಮ್ಮ ಆರ್ಡರ್", "ನಿಮ್ಮ ವಿವರ", "UPI ಪಾವತಿ", "ಪಾವತಿ ದೃಢೀಕರಣ"],
  stepOf: "4 ರಲ್ಲಿ ಹಂತ {n}",
  service: "ಸೇವೆ",
  acres: "ಎಕರೆ",
  quantity: "ಪ್ರಮಾಣ",
  less: "ಒಂದು ಕಡಿಮೆ",
  more: "ಒಂದು ಹೆಚ್ಚು",
  total: "ಒಟ್ಟು",
  noAdvance: "ಮುಂಗಡ ಶುಲ್ಕವಿಲ್ಲ. ನೀವು ನೇರವಾಗಿ UPI ಮೂಲಕ ಪಾವತಿಸುತ್ತೀರಿ.",
  travelNote: "ಪ್ರಯಾಣ ಮತ್ತು ವಸತಿ ವೆಚ್ಚ ಪ್ರತ್ಯೇಕ.",
  next: "ಮುಂದುವರಿಯಿರಿ",
  back: "ಹಿಂದೆ",
  detailsIntro: "ನಿಮ್ಮ ಆರ್ಡರ್ ದೃಢೀಕರಿಸಲು ಮತ್ತು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು.",
  village: "ಗ್ರಾಮ ಅಥವಾ ಊರು",
  required: "ದಯವಿಟ್ಟು ಇದನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
  phoneInvalid: "ದಯವಿಟ್ಟು 10 ಅಂಕಿಯ ದೂರವಾಣಿ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
  payIntro: "ಕೆಳಗಿನ ನಿಖರ ಮೊತ್ತವನ್ನು ಯಾವುದೇ UPI ಆ್ಯಪ್‌ನಿಂದ ಪಾವತಿಸಿ.",
  amount: "ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ",
  reference: "ನಿಮ್ಮ ಆರ್ಡರ್ ಸಂಖ್ಯೆ",
  scan: "ಯಾವುದೇ UPI ಆ್ಯಪ್‌ನಿಂದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
  upiId: "UPI ಐಡಿ",
  copy: "ನಕಲಿಸಿ",
  copied: "ನಕಲಿಸಲಾಗಿದೆ",
  openApp: "ಅಥವಾ ನಿಮ್ಮ ಆ್ಯಪ್ ತೆರೆಯಿರಿ",
  anyApp: "ಇತರ UPI ಆ್ಯಪ್",
  reassurance: "ಪಾವತಿ ನೇರವಾಗಿ Horti Guru ಗೆ ಹೋಗುತ್ತದೆ. {window} ಒಳಗೆ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
  paid: "ನಾನು ಪಾವತಿಸಿದ್ದೇನೆ",
  confirmIntro: "ಈ ಮೂಲಕ ನಿಮ್ಮ ಪಾವತಿಯನ್ನು ನಿಮ್ಮ ಆರ್ಡರ್‌ಗೆ ಹೊಂದಿಸುತ್ತೇವೆ.",
  utr: "UPI ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ (UTR)",
  utrHint: "ನಿಮ್ಮ UPI ಆ್ಯಪ್‌ನಲ್ಲಿ ಪಾವತಿ ವಿವರದಡಿ ಕಾಣುವ 12 ಅಂಕಿಯ ಸಂಖ್ಯೆ, ಕೆಲವೊಮ್ಮೆ UPI Ref No. ಅಥವಾ Transaction ID ಎನ್ನಲಾಗುತ್ತದೆ.",
  utrInvalid: "UTR 12 ಅಂಕಿಯ ಸಂಖ್ಯೆ.",
  or: "ಅಥವಾ",
  screenshot: "ಪಾವತಿಯ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸುತ್ತೇನೆ",
  screenshotHint: "ಹಲವರಿಗೆ ಇದು ಸುಲಭ. ಮುಂದಿನ ಹಂತದಲ್ಲಿ ಕಳುಹಿಸುತ್ತೀರಿ.",
  needProof: "UTR ನಮೂದಿಸಿ, ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸುವುದನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
  confirm: "ನನ್ನ ಆರ್ಡರ್ ದೃಢೀಕರಿಸಿ",
  doneHeading: "ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
  doneRef: "ನಿಮ್ಮ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ",
  nextHeading: "ಮುಂದೇನು",
  nextSteps: [
    "ಕೆಳಗಿನ ಬಟನ್ ಮೂಲಕ ನಿಮ್ಮ ಆರ್ಡರ್ ಅನ್ನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನಮಗೆ ಕಳುಹಿಸಿ. ಅದರಲ್ಲಿ ನಿಮ್ಮ ಉಲ್ಲೇಖ ಮತ್ತು ಪಾವತಿ ವಿವರ ಈಗಾಗಲೇ ಇದೆ.",
    "{window} ಒಳಗೆ ನಿಮ್ಮ ಪಾವತಿ ಪರಿಶೀಲಿಸಿ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
    "ದೃಢೀಕರಣದ ನಂತರ, ಆರಂಭಿಸಲು ತಜ್ಞರು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.",
  ],
  sendWhatsapp: "ಆರ್ಡರ್ ಅನ್ನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಿ",
  attachNote: "ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸುವುದನ್ನು ಆಯ್ಕೆಮಾಡಿದ್ದರೆ, ವಾಟ್ಸಾಪ್ ಚಾಟ್‌ನಲ್ಲಿ ಲಗತ್ತಿಸಿ.",
  messageTitle: "hortiguru.com ನಿಂದ ಹೊಸ ಆರ್ಡರ್",
  summary: { service: "ಸೇವೆ", qty: "ಪ್ರಮಾಣ", amount: "ಮೊತ್ತ", name: "ಹೆಸರು", phone: "ದೂರವಾಣಿ", village: "ಗ್ರಾಮ ಅಥವಾ ಊರು", crop: "ಬೆಳೆ", utr: "UTR", ref: "ಉಲ್ಲೇಖ", proofScreenshot: "ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಲಾಗುವುದು" },
  newOrder: "ಇನ್ನೊಂದು ಆರ್ಡರ್ ಮಾಡಿ",
};

const hi: CheckoutText = {
  title: "चेकआउट | UPI से भुगतान | Horti Guru",
  description: "Horti Guru की सलाह, परामर्श या प्रयोगशाला जाँच ऑर्डर करें और सीधे UPI से भुगतान करें। भुगतान की पुष्टि हमारी टीम करती है।",
  crumb: "चेकआउट",
  h1: "आपका ऑर्डर",
  steps: ["आपका ऑर्डर", "आपका विवरण", "UPI से भुगतान", "भुगतान की पुष्टि"],
  stepOf: "4 में से चरण {n}",
  service: "सेवा",
  acres: "एकड़",
  quantity: "मात्रा",
  less: "एक कम",
  more: "एक ज़्यादा",
  total: "कुल",
  noAdvance: "कोई अग्रिम शुल्क नहीं। आप सीधे UPI से भुगतान करते हैं।",
  travelNote: "यात्रा और ठहरने का ख़र्च अलग से।",
  next: "आगे बढ़ें",
  back: "पीछे",
  detailsIntro: "ताकि हम आपके ऑर्डर की पुष्टि कर सकें और व्हाट्सऐप पर आपसे संपर्क कर सकें।",
  village: "गाँव या कस्बा",
  required: "कृपया इसे भरें।",
  phoneInvalid: "कृपया 10 अंकों का फ़ोन नंबर डालें।",
  payIntro: "नीचे दी गई सही राशि किसी भी UPI ऐप से चुकाएँ।",
  amount: "चुकाने वाली राशि",
  reference: "आपका ऑर्डर नंबर",
  scan: "किसी भी UPI ऐप से स्कैन करें",
  upiId: "UPI आईडी",
  copy: "कॉपी करें",
  copied: "कॉपी हो गया",
  openApp: "या अपना ऐप खोलें",
  anyApp: "दूसरा UPI ऐप",
  reassurance: "भुगतान सीधे Horti Guru को जाता है। हम {window} के भीतर पुष्टि करते हैं।",
  paid: "मैंने भुगतान कर दिया",
  confirmIntro: "इसी से हम आपके भुगतान को आपके ऑर्डर से मिलाते हैं।",
  utr: "UPI संदर्भ संख्या (UTR)",
  utrHint: "आपके UPI ऐप में भुगतान विवरण में दिखने वाला 12 अंकों का नंबर, जिसे कभी-कभी UPI Ref No. या Transaction ID कहा जाता है।",
  utrInvalid: "UTR 12 अंकों का नंबर होता है।",
  or: "या",
  screenshot: "मैं भुगतान का स्क्रीनशॉट व्हाट्सऐप पर भेजूँगा",
  screenshotHint: "कई लोगों के लिए यह आसान है। आप इसे अगले चरण में भेजेंगे।",
  needProof: "UTR डालें, या स्क्रीनशॉट भेजना चुनें।",
  confirm: "मेरे ऑर्डर की पुष्टि करें",
  doneHeading: "ऑर्डर मिल गया",
  doneRef: "आपकी संदर्भ संख्या",
  nextHeading: "आगे क्या होगा",
  nextSteps: [
    "नीचे के बटन से अपना ऑर्डर व्हाट्सऐप पर हमें भेजें। इसमें आपका संदर्भ और भुगतान विवरण पहले से है।",
    "हम {window} के भीतर आपका भुगतान जाँचकर व्हाट्सऐप पर पुष्टि करते हैं।",
    "पुष्टि के बाद, शुरुआत के लिए विशेषज्ञ आपसे संपर्क करते हैं।",
  ],
  sendWhatsapp: "ऑर्डर व्हाट्सऐप पर भेजें",
  attachNote: "अगर आपने स्क्रीनशॉट भेजना चुना है, तो उसे व्हाट्सऐप चैट में जोड़ें।",
  messageTitle: "hortiguru.com से नया ऑर्डर",
  summary: { service: "सेवा", qty: "मात्रा", amount: "राशि", name: "नाम", phone: "फ़ोन", village: "गाँव या कस्बा", crop: "फ़सल", utr: "UTR", ref: "संदर्भ", proofScreenshot: "स्क्रीनशॉट भेजा जाएगा" },
  newOrder: "एक और ऑर्डर करें",
};

const checkout: Record<Locale, CheckoutText> = { en, kn, hi };
export default checkout;
