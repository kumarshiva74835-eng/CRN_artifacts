const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const languageToggle = document.querySelector("#language-toggle");
const socialLinks = document.querySelectorAll("[data-social-link]");
// Add the business WhatsApp number in international format and Instagram handle here.
const WHATSAPP_NUMBER = "918073777020"; // India country code + the provided number.
const INSTAGRAM_HANDLE = ""; // Example: crn_artifacts (without @)

const translations = {
  en: {
    pageTitle: "CRN Artifacts — Wood, shaped with intention",
    metaDescription: "Explore custom CNC-crafted woodwork, carved signs, decorative panels, and personalized keepsakes from CRN Artifacts.",
    skipContent: "Skip to content",
    brandHome: "CRN Artifacts home",
    brandBackTop: "CRN Artifacts, back to top",
    mainNavigation: "Main navigation",
    navWork: "What we make",
    navAbout: "About us",
    navApproach: "Our approach",
    navProcess: "Process",
    socialLinksLabel: "Social links",
    whatsappLabel: "Chat with CRN Artifacts on WhatsApp",
    instagramLabel: "View CRN Artifacts on Instagram",
    whatsappUnavailable: "Add the WhatsApp number in script.js to enable this link.",
    instagramUnavailable: "Add the Instagram handle in script.js to enable this link.",
    footerContactTitle: "CONTACT",
    footerPhoneLabel: "Call CRN Artifacts at 8073777020",
    footerLocationLabel: "Open the CRN Artifacts location in maps",
    footerLocation: "KR Nagar, Mysore district · 571602",
    heroEyebrow: "CUSTOM CNC WOODWORK",
    heroTitle: "Wood, shaped<br /><em>with intention.</em>",
    heroIntro: "A good idea deserves a material with character. We shape wood into thoughtful details, made to fit your space and your story.",
    exploreWork: "Explore what we make",
    heroNote: "Designed around your idea. Cut with precision.",
    heroImageAlt: "CNC router carving a detailed pattern into warm walnut wood",
    tickerLabel: "Crafted with care, made to be yours",
    tickerOne: "GOOD IDEAS, MADE IN WOOD",
    tickerTwo: "PRECISION IN EVERY DETAIL",
    tickerThree: "MADE TO BE YOURS",
    workEyebrow: "MADE FOR YOUR SPACE",
    workTitle: "Your idea.<br /><em>In its element.</em>",
    workIntro: "From a small personal detail to a statement piece, CNC carving brings clarity and character to a wide range of woodwork.",
    artYourName: "YOUR NAME",
    artSign: "A PERSONAL SIGN",
    cardSigns: "Carved signs",
    cardSignsText: "Names, words and marks with a little more presence.",
    artPanel: "GEOMETRIC RELIEF",
    cardPanels: "Decorative panels",
    cardPanelsText: "Layer, texture and pattern for walls and interiors.",
    artKeepsake: "MADE TO MEAN SOMETHING",
    cardPersonal: "Personal details",
    cardPersonalText: "Monograms, keepsakes and one-of-a-kind accents.",
    workFootnote: "These are starting points. Each piece can be shaped around your own design and dimensions.",
    aboutImageAlt: "CNC router carving a wood panel at the CRN Artifacts workshop",
    makerImageLabel: "THE MAKER BEHIND THE WORK",
    aboutEyebrow: "MEET THE MAKER",
    aboutTitle: "Meet Charan.<br /><em>Woodwork with meaning.</em>",
    aboutRole: "Maker at CRN Artifacts · KR Nagar, Mysore district",
    aboutBio: "Charan creates custom CNC-crafted woodwork at CRN Artifacts. He works with you to turn names, patterns and personal ideas into carved signs, decorative panels and keepsakes.",
    aboutApproach: "Each piece is planned around its size, design and finish. CNC routing gives the details clean definition, while the natural grain makes every piece distinct.",
    aboutWorkLabel: "HIS WORK",
    aboutWork: "Carved signs · Decorative wall panels · Personalized keepsakes",
    aboutCta: "Explore what we make",
    approachImageAlt: "Close view of a routed pattern and natural wood grain",
    approachEyebrow: "THE CRN APPROACH",
    approachTitle: "Digital precision.<br /><em>Natural character.</em>",
    approachText: "Good woodwork brings together careful planning and the small details that make a piece feel personal. CNC routing lets us create clean lines, repeatable patterns and considered shapes, while the grain keeps every piece its own.",
    approachCta: "Explore what we make",
    approachNote: "Thoughtful design, shaped one piece at a time.",
    processEyebrow: "FROM IDEA TO ARTIFACT",
    processTitle: "A simple way<br /><em>to get started.</em>",
    processIntro: "A little conversation turns a rough thought into a clear direction. Here’s how a custom piece takes shape.",
    stepOneTitle: "Share the idea",
    stepOneText: "Tell us what you are imagining, where it will go and any details that matter.",
    stepTwoTitle: "Shape the design",
    stepTwoText: "We work through size, layout and finish so the piece feels right for its purpose.",
    stepThreeTitle: "Make it in wood",
    stepThreeText: "The approved design is cut with care and prepared as a finished custom piece.",
    footerTagline: "Made with intention.<br /><span>Rooted in wood.</span>",
    backToTop: "Back to top"
  },
  kn: {
    pageTitle: "CRN Artifacts — ಮರಕ್ಕೆ ರೂಪ, ಅರ್ಥಪೂರ್ಣ ಸ್ಪರ್ಶ",
    metaDescription: "CRN Artifacts‌ನ ಕಸ್ಟಮ್ CNC ಮರದ ಕೆತ್ತನೆ, ಅಲಂಕಾರಿಕ ಫಲಕಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸ್ಮರಣಿಕೆಗಳನ್ನು ನೋಡಿ.",
    skipContent: "ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ",
    brandHome: "CRN Artifacts ಮುಖಪುಟ",
    brandBackTop: "CRN Artifacts, ಪುಟದ ಮೇಲಕ್ಕೆ",
    mainNavigation: "ಮುಖ್ಯ ಮೆನು",
    navWork: "ನಾವು ಮಾಡುವ ಕೆಲಸ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navApproach: "ನಮ್ಮ ವಿಧಾನ",
    navProcess: "ಪ್ರಕ್ರಿಯೆ",
    socialLinksLabel: "ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳು",
    whatsappLabel: "WhatsApp‌ನಲ್ಲಿ CRN Artifacts ಜೊತೆ ಮಾತನಾಡಿ",
    instagramLabel: "Instagram‌ನಲ್ಲಿ CRN Artifacts ನೋಡಿ",
    whatsappUnavailable: "ಈ ಲಿಂಕ್ ಸಕ್ರಿಯಗೊಳಿಸಲು script.js‌ನಲ್ಲಿ WhatsApp ಸಂಖ್ಯೆಯನ್ನು ಸೇರಿಸಿ.",
    instagramUnavailable: "ಈ ಲಿಂಕ್ ಸಕ್ರಿಯಗೊಳಿಸಲು script.js‌ನಲ್ಲಿ Instagram ಹೆಸರನ್ನು ಸೇರಿಸಿ.",
    footerContactTitle: "ಸಂಪರ್ಕ",
    footerPhoneLabel: "CRN Artifacts‌ಗೆ 8073777020 ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ",
    footerLocationLabel: "CRN Artifacts ಸ್ಥಳವನ್ನು ನಕ್ಷೆಯಲ್ಲಿ ತೆರೆಯಿರಿ",
    footerLocation: "ಕೆ.ಆರ್. ನಗರ, ಮೈಸೂರು ಜಿಲ್ಲೆ · 571602",
    heroEyebrow: "ಕಸ್ಟಮ್ CNC ಮರಕೆಲಸ",
    heroTitle: "ಮರಕ್ಕೆ ರೂಪ,<br /><em>ಅರ್ಥಪೂರ್ಣ ಸ್ಪರ್ಶ.</em>",
    heroIntro: "ಒಳ್ಳೆಯ ಕಲ್ಪನೆಗೆ ತನ್ನದೇ ಆದ ಸೊಬಗಿರುವ ವಸ್ತುವಿನ ಸ್ಪರ್ಶ ಬೇಕು. ನಿಮ್ಮ ಜಾಗಕ್ಕೂ ನಿಮ್ಮ ಕಥೆಗೂ ಹೊಂದುವ ಮರದ ವಿನ್ಯಾಸಗಳನ್ನು ನಾವು ರೂಪಿಸುತ್ತೇವೆ.",
    exploreWork: "ನಮ್ಮ ಕೆಲಸ ನೋಡಿ",
    heroNote: "ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ ತಕ್ಕ ವಿನ್ಯಾಸ. ನಿಖರವಾದ ಕೆತ್ತನೆ.",
    heroImageAlt: "ವಾಲ್ನಟ್ ಮರದಲ್ಲಿ ಸೂಕ್ಷ್ಮ ವಿನ್ಯಾಸ ಕೆತ್ತುತ್ತಿರುವ CNC ಯಂತ್ರ",
    tickerLabel: "ಕಾಳಜಿಯಿಂದ ರೂಪಿಸಿದ, ನಿಮ್ಮದೇ ಆದ ಕಲಾಕೃತಿ",
    tickerOne: "ಒಳ್ಳೆಯ ಕಲ್ಪನೆ, ಮರದಲ್ಲಿ ರೂಪಿತ",
    tickerTwo: "ಪ್ರತಿ ವಿವರದಲ್ಲೂ ನಿಖರತೆ",
    tickerThree: "ನಿಮ್ಮದೇ ಆದ ವಿನ್ಯಾಸ",
    workEyebrow: "ನಿಮ್ಮ ಜಾಗಕ್ಕಾಗಿ",
    workTitle: "ನಿಮ್ಮ ಕಲ್ಪನೆ.<br /><em>ಮರದಲ್ಲಿ ಜೀವಂತ.</em>",
    workIntro: "ಸಣ್ಣ ವೈಯಕ್ತಿಕ ಗುರುತಿನಿಂದ ಗಮನ ಸೆಳೆಯುವ ಕಲಾಕೃತಿವರೆಗೆ, CNC ಕೆತ್ತನೆ ಮರದ ಕೆಲಸಕ್ಕೆ ಸೂಕ್ಷ್ಮತೆ ಮತ್ತು ವೈಶಿಷ್ಟ್ಯ ತರುತ್ತದೆ.",
    artYourName: "ನಿಮ್ಮ ಹೆಸರು",
    artSign: "ವೈಯಕ್ತಿಕ ಫಲಕ",
    cardSigns: "ಕೆತ್ತನೆಯ ಫಲಕಗಳು",
    cardSignsText: "ಹೆಸರು, ಪದ ಮತ್ತು ಗುರುತುಗಳಿಗೆ ವಿಶೇಷ ರೂಪ.",
    artPanel: "ಜ್ಯಾಮಿತೀಯ ಕೆತ್ತನೆ",
    cardPanels: "ಅಲಂಕಾರಿಕ ಫಲಕಗಳು",
    cardPanelsText: "ಗೋಡೆಗಳಿಗೆ ಆಳ, ಸ್ಪರ್ಶ ಮತ್ತು ಜ್ಯಾಮಿತೀಯ ಅಲಂಕಾರ.",
    artKeepsake: "ಅರ್ಥಪೂರ್ಣವಾಗಿ ರೂಪಿತ",
    cardPersonal: "ವೈಯಕ್ತಿಕ ನೆನಪಿನ ವಸ್ತುಗಳು",
    cardPersonalText: "ಮೊನೋಗ್ರಾಮ್‌ಗಳು, ಸ್ಮರಣಿಕೆಗಳು ಮತ್ತು ವಿಶಿಷ್ಟ ಅಲಂಕಾರಗಳು.",
    workFootnote: "ಇವು ಆರಂಭಿಕ ಕಲ್ಪನೆಗಳು. ನಿಮ್ಮ ವಿನ್ಯಾಸ ಮತ್ತು ಅಳತೆಗೆ ತಕ್ಕಂತೆ ಪ್ರತಿಯೊಂದು ವಸ್ತುವನ್ನೂ ರೂಪಿಸಬಹುದು.",
    aboutImageAlt: "CRN Artifacts ಕಾರ್ಯಾಗಾರದಲ್ಲಿ ಮರದ ಫಲಕವನ್ನು ಕೆತ್ತುತ್ತಿರುವ CNC ಯಂತ್ರ",
    makerImageLabel: "ಈ ಕೆಲಸದ ಹಿಂದಿನ ಕಲಾವಿದ",
    aboutEyebrow: "ಕಲಾವಿದರನ್ನು ಭೇಟಿ ಮಾಡಿ",
    aboutTitle: "ಚಾರನ್ ಅವರನ್ನು ಭೇಟಿ ಮಾಡಿ.<br /><em>ಅರ್ಥಪೂರ್ಣ ಮರದ ಕೆಲಸ.</em>",
    aboutRole: "CRN Artifacts‌ನ ಮರಕೆಲಸದ ಕಲಾವಿದ · ಕೆ.ಆರ್. ನಗರ, ಮೈಸೂರು ಜಿಲ್ಲೆ",
    aboutBio: "ಚಾರನ್ CRN Artifacts‌ನಲ್ಲಿ CNC ತಂತ್ರಜ್ಞಾನದಿಂದ ಕಸ್ಟಮ್ ಮರದ ವಸ್ತುಗಳನ್ನು ರೂಪಿಸುತ್ತಾರೆ. ಹೆಸರುಗಳು, ವಿನ್ಯಾಸಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಕಲ್ಪನೆಗಳನ್ನು ಕೆತ್ತನೆಯ ಫಲಕಗಳು, ಅಲಂಕಾರಿಕ ಪ್ಯಾನೆಲ್‌ಗಳು ಮತ್ತು ಸ್ಮರಣಿಕೆಗಳಾಗಿ ರೂಪಿಸಲು ನಿಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ.",
    aboutApproach: "ಪ್ರತಿಯೊಂದು ವಸ್ತುವಿನ ಅಳತೆ, ವಿನ್ಯಾಸ ಮತ್ತು ಮುಕ್ತಾಯವನ್ನು ಅದರ ಬಳಕೆಗೆ ತಕ್ಕಂತೆ ಯೋಜಿಸುತ್ತಾರೆ. CNC ಕೆತ್ತನೆ ವಿವರಗಳಿಗೆ ನಿಖರ ರೂಪ ನೀಡುತ್ತದೆ; ಮರದ ಸಹಜ ನಾರು ಪ್ರತಿಯೊಂದಕ್ಕೂ ವಿಭಿನ್ನತೆ ನೀಡುತ್ತದೆ.",
    aboutWorkLabel: "ಅವರ ಕೆಲಸ",
    aboutWork: "ಕೆತ್ತನೆಯ ಫಲಕಗಳು · ಅಲಂಕಾರಿಕ ಗೋಡೆ ಫಲಕಗಳು · ವೈಯಕ್ತಿಕ ಸ್ಮರಣಿಕೆಗಳು",
    aboutCta: "ನಾವು ಮಾಡುವ ಕೆಲಸ ನೋಡಿ",
    approachImageAlt: "ಕೆತ್ತನೆಯ ವಿನ್ಯಾಸ ಮತ್ತು ಮರದ ನೈಸರ್ಗಿಕ ನಾರಿನ ಹತ್ತಿರದ ನೋಟ",
    approachEyebrow: "CRN ವಿನ್ಯಾಸ ವಿಧಾನ",
    approachTitle: "ಡಿಜಿಟಲ್ ನಿಖರತೆ.<br /><em>ಮರದ ಸಹಜ ಸೊಬಗು.</em>",
    approachText: "ಉತ್ತಮ ಮರದ ಕೆಲಸಕ್ಕೆ ಎಚ್ಚರಿಕೆಯ ಯೋಜನೆಯೂ, ವಸ್ತುವಿಗೆ ವೈಯಕ್ತಿಕ ಸ್ಪರ್ಶ ನೀಡುವ ಸೂಕ್ಷ್ಮ ವಿವರಗಳೂ ಬೇಕು. CNC ಕೆತ್ತನೆಯಿಂದ ಸ್ಪಷ್ಟ ರೇಖೆಗಳು, ಮರುಕಳಿಸುವ ವಿನ್ಯಾಸಗಳು ಮತ್ತು ನಿಖರ ಆಕಾರಗಳನ್ನು ರೂಪಿಸಬಹುದು; ಮರದ ನೈಸರ್ಗಿಕ ನಾರು ಪ್ರತಿಯೊಂದು ತುಂಡಿಗೂ ತನ್ನದೇ ಆದ ರೂಪ ನೀಡುತ್ತದೆ.",
    approachCta: "ನಮ್ಮ ಕೆಲಸ ನೋಡಿ",
    approachNote: "ಚಿಂತನೆಯಿಂದ ರೂಪಿಸಿದ ವಿನ್ಯಾಸ. ಪ್ರತಿಯೊಂದು ತುಂಡಿಗೂ ತನ್ನದೇ ಆದ ಸೊಬಗು.",
    processEyebrow: "ಕಲ್ಪನೆಯಿಂದ ಕಲಾಕೃತಿವರೆಗೆ",
    processTitle: "ಆರಂಭಿಸಲು<br /><em>ಸರಳ ವಿಧಾನ.</em>",
    processIntro: "ಒಂದು ಚಿಕ್ಕ ಮಾತುಕತೆ ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ ಸ್ಪಷ್ಟ ದಿಕ್ಕು ನೀಡುತ್ತದೆ. ಕಸ್ಟಮ್ ವಸ್ತು ರೂಪುಗೊಳ್ಳುವ ಹಂತಗಳು ಇಲ್ಲಿವೆ.",
    stepOneTitle: "ಕಲ್ಪನೆ ಹಂಚಿಕೊಳ್ಳಿ",
    stepOneText: "ನಿಮ್ಮ ಕಲ್ಪನೆ, ಅದು ಯಾವ ಜಾಗಕ್ಕೆ ಎಂಬುದು ಮತ್ತು ಮುಖ್ಯವಾದ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.",
    stepTwoTitle: "ವಿನ್ಯಾಸ ರೂಪಿಸೋಣ",
    stepTwoText: "ಅಳತೆ, ವಿನ್ಯಾಸ ಮತ್ತು ಮುಕ್ತಾಯದ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ, ಅದರ ಉದ್ದೇಶಕ್ಕೆ ಹೊಂದುವಂತೆ ರೂಪಿಸೋಣ.",
    stepThreeTitle: "ಮರದಲ್ಲಿ ರೂಪಿಸೋಣ",
    stepThreeText: "ಅಂತಿಮ ವಿನ್ಯಾಸಕ್ಕೆ ಒಪ್ಪಿಗೆ ಸಿಕ್ಕ ಬಳಿಕ, ಎಚ್ಚರಿಕೆಯಿಂದ ಕೆತ್ತಿ ಕಸ್ಟಮ್ ವಸ್ತುವನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತೇವೆ.",
    footerTagline: "ಉದ್ದೇಶಪೂರ್ಣವಾಗಿ ರೂಪಿಸಿದ.<br /><span>ಮರದ ಸಹಜ ಸೊಬಗಿನಲ್ಲಿ.</span>",
    backToTop: "ಮೇಲಕ್ಕೆ ಹೋಗಿ"
  }
};

let currentLanguage = "en";
function menuLabel(isOpen, language = currentLanguage) {
  if (language === "kn") return isOpen ? "ಮೆನು ಮುಚ್ಚಿರಿ" : "ಮೆನು ತೆರೆಯಿರಿ";
  return isOpen ? "Close menu" : "Open menu";
}

function configureSocialLinks(copy) {
  const whatsappDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  const instagramHandle = INSTAGRAM_HANDLE.trim().replace(/^@/, "");
  const whatsappUrl = whatsappDigits ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent("Hello, I'm interested in custom woodwork from CRN Artifacts.")}` : "";
  const instagramUrl = instagramHandle ? `https://www.instagram.com/${encodeURIComponent(instagramHandle)}/` : "";

  socialLinks.forEach((button) => {
    const isWhatsApp = button.dataset.socialLink === "whatsapp";
    const url = isWhatsApp ? whatsappUrl : instagramUrl;
    const unavailableMessage = isWhatsApp ? copy.whatsappUnavailable : copy.instagramUnavailable;
    button.disabled = !url;
    button.title = url ? button.getAttribute("aria-label") : unavailableMessage;
    button.dataset.url = url;
  });
}

function applyLanguage(language) {
  currentLanguage = language === "kn" ? "kn" : "en";
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = copy.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = copy[element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = copy[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.setAttribute("placeholder", value);
  });

  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute("content", copy.metaDescription);
  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "en" ? "ಕನ್ನಡ" : "English";
    languageToggle.setAttribute("aria-label", currentLanguage === "en" ? "ಕನ್ನಡ ಭಾಷೆಗೆ ಬದಲಾಯಿಸಿ" : "Switch language to English");
  }
  if (menuToggle) {
    menuToggle.setAttribute("aria-label", menuLabel(menuToggle.getAttribute("aria-expanded") === "true"));
  }
  configureSocialLinks(copy);

  try {
    localStorage.setItem("crn-artifacts-language", currentLanguage);
  } catch {
    // Language switching still works for this visit if storage is unavailable.
  }
}

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", menuLabel(!isExpanded));
  siteNav?.classList.toggle("is-open", !isExpanded);
  document.body.classList.toggle("menu-open", !isExpanded);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", menuLabel(false));
    siteNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "kn" : "en");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", menuLabel(false));
  siteNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

socialLinks.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.url) window.open(button.dataset.url, "_blank", "noopener,noreferrer");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("crn-artifacts-language") || "en";
} catch {
  // Default to English if browser storage is unavailable.
}
applyLanguage(savedLanguage);

