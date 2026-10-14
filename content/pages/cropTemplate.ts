import type { Locale } from "@/lib/i18n";

const cropTemplate: Record<
  Locale,
  {
    crumbCrops: string;
    calendarHeading: string;
    calendarNow: string;
    factsHeading: string;
    planting: string;
    duration: string;
    districts: string;
    spacing: string;
    problemsHeading: string;
    helpsHeading: string;
    /** "{crop}" */
    testsHeading: string;
    labLink: string;
    faqHeading: string;
    /** "Start {crop} advisory" */
    cta: string;
    ctaLine: string;
    otherCrops: string;
    /** "{crop} advisory" */
    cropLink: string;
    advisoryLink: string;
  }
> = {
  en: {
    crumbCrops: "Crops",
    calendarHeading: "Crop calendar",
    calendarNow: "This month",
    factsHeading: "At a glance",
    planting: "Planting season",
    duration: "Crop duration",
    districts: "Main districts in Karnataka",
    spacing: "Typical spacing",
    problemsHeading: "What commonly goes wrong",
    helpsHeading: "How advisory helps",
    testsHeading: "Tests that matter for {crop}",
    labLink: "See all tests and prices",
    faqHeading: "Questions about {crop}",
    cta: "Start {crop} advisory",
    ctaLine: "₹10,000 for the first acre, ₹5,000 for each additional acre.",
    otherCrops: "Other crops",
    cropLink: "{crop} advisory",
    advisoryLink: "How season-long advisory works",
  },
  kn: {
    crumbCrops: "ಬೆಳೆಗಳು",
    calendarHeading: "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್",
    calendarNow: "ಈ ತಿಂಗಳು",
    factsHeading: "ಒಂದು ನೋಟದಲ್ಲಿ",
    planting: "ನಾಟಿಯ ಕಾಲ",
    duration: "ಬೆಳೆಯ ಅವಧಿ",
    districts: "ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಜಿಲ್ಲೆಗಳು",
    spacing: "ಸಾಮಾನ್ಯ ಅಂತರ",
    problemsHeading: "ಸಾಮಾನ್ಯವಾಗಿ ಏನು ತಪ್ಪಾಗುತ್ತದೆ",
    helpsHeading: "ಸಲಹೆ ಹೇಗೆ ನೆರವಾಗುತ್ತದೆ",
    testsHeading: "{crop} ಬೆಳೆಗೆ ಮುಖ್ಯವಾದ ಪರೀಕ್ಷೆಗಳು",
    labLink: "ಎಲ್ಲ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಬೆಲೆಗಳನ್ನು ನೋಡಿ",
    faqHeading: "{crop} ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು",
    cta: "{crop} ಸಲಹೆ ಆರಂಭಿಸಿ",
    ctaLine: "ಮೊದಲ ಎಕರೆಗೆ ₹10,000, ಪ್ರತಿ ಹೆಚ್ಚುವರಿ ಎಕರೆಗೆ ₹5,000.",
    otherCrops: "ಇತರ ಬೆಳೆಗಳು",
    cropLink: "{crop} ಸಲಹೆ",
    advisoryLink: "ಇಡೀ ಹಂಗಾಮಿನ ಸಲಹೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
  },
  hi: {
    crumbCrops: "फ़सलें",
    calendarHeading: "फ़सल कैलेंडर",
    calendarNow: "इस महीने",
    factsHeading: "एक नज़र में",
    planting: "रोपाई का समय",
    duration: "फ़सल की अवधि",
    districts: "कर्नाटक के मुख्य ज़िले",
    spacing: "सामान्य दूरी",
    problemsHeading: "आमतौर पर क्या गड़बड़ होता है",
    helpsHeading: "सलाह कैसे मदद करती है",
    testsHeading: "{crop} के लिए ज़रूरी जाँचें",
    labLink: "सभी जाँचें और कीमतें देखें",
    faqHeading: "{crop} के बारे में सवाल",
    cta: "{crop} सलाह शुरू करें",
    ctaLine: "पहले एकड़ के लिए ₹10,000, हर अतिरिक्त एकड़ के लिए ₹5,000।",
    otherCrops: "दूसरी फ़सलें",
    cropLink: "{crop} सलाह",
    advisoryLink: "पूरे सीज़न की सलाह कैसे काम करती है",
  },
};

export default cropTemplate;
