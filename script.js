const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const languageToggle = document.querySelector("#language-toggle");
const workCards = document.querySelectorAll(".work-card");

if (workCards.length) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    workCards.forEach((card) => card.classList.add("is-visible"));
  } else {
    document.documentElement.classList.add("motion-ready");
    const workRevealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -35px 0px" });

    workCards.forEach((card) => workRevealObserver.observe(card));
  }
}
const translations = {
  en: {
    pageTitle: "CRN Artifacts — Wood, shaped with intention",
    metaDescription: "Explore custom CNC-crafted woodwork, carved signs, decorative panels, and personalized keepsakes from CRN Artifacts.",
    skipContent: "Skip to content",
    brandHome: "CRN Artifacts home",
    brandBackTop: "CRN Artifacts, back to top",
    mainNavigation: "Main navigation",
    navWork: "Work",
    navWhatWeMake: "What We Make",
    navAbout: "About us",
    navApproach: "Our approach",
    navProcess: "Our Process",
    heroEyebrow: "CUSTOM CNC WOODCRAFT",
    heroTitle: "Wood, shaped with<br /><em>intention.</em>",
    heroIntro: "Precise CNC carving brings your personal ideas into wood, with attention to form and detail.",
    exploreWork: "Explore what we make",
    heroNote: "Designed around your idea. Cut with precision.",
    heroImageAlt: "CNC router carving a geometric pattern into a wooden panel",
    tickerLabel: "Crafted with care, made to be yours",
    tickerOne: "GOOD IDEAS, MADE IN WOOD",
    tickerTwo: "PRECISION IN EVERY DETAIL",
    tickerThree: "MADE TO BE YOURS",
    workEyebrow: "A STUDY IN WOOD",
    workTitle: "Made to feel personal.",
    workIntro: "A few directions your idea might take. The abstract studies below illustrate forms, not finished projects.",
    artYourName: "YOUR NAME",
    artSign: "A PERSONAL SIGN",
    cardSigns: "Carved signs",
    cardSignsText: "Names, words and marks with a little more presence.",
    artPanel: "GEOMETRIC RELIEF",
    cardPanels: "Wall panels",
    cardPanelsText: "Layer, texture and pattern for walls and interiors.",
    artKeepsake: "MADE TO MEAN SOMETHING",
    cardPersonal: "Custom details",
    cardPersonalText: "Monograms, keepsakes and one-of-a-kind accents.",
    workFootnote: "These are starting points. Each piece can be shaped around your own design and dimensions.",
    aboutImageAlt: "CNC router carving a wood panel at the CRN Artifacts workshop",
    makerImageLabel: "THE MAKER BEHIND THE WORK",
    aboutRole: "Maker at CRN Artifacts · KR Nagar, Mysore district",
    aboutApproach: "Each piece is planned around its size, design and finish. CNC routing gives the details clean definition, while the natural grain makes every piece distinct.",
    aboutWorkLabel: "HIS WORK",
    aboutWork: "Carved signs · Decorative wall panels · Personalized keepsakes",
    aboutCta: "Explore what we make",
    approachImageAlt: "Close view of a routed pattern and natural wood grain",
    makeEyebrow: "WHAT WE MAKE",
    makeTitle: "Your idea,<br /><em>given shape.</em>",
    makeText: "From lettering to dimensional patterns and small considered details, each piece begins with an idea that matters to you.",
    approachEyebrow: "THE CRN APPROACH",
    approachTitle: "Digital precision.<br /><em>Natural character.</em>",
    approachText: "Good woodwork brings together careful planning and the small details that make a piece feel personal. CNC routing lets us create clean lines, repeatable patterns and considered shapes, while the grain keeps every piece its own.",
    approachCta: "Explore what we make",
    approachNote: "Thoughtful design, shaped one piece at a time.",
    processEyebrow: "OUR PROCESS",
    processTitle: "From thought<br /><em>to form.</em>",
    processIntro: "A little conversation turns a rough thought into a clear direction. Here’s how a custom piece takes shape.",
    stepOneTitle: "Share your idea",
    stepOneText: "Tell us what you have in mind and what makes it yours.",
    stepTwoTitle: "Shape the design",
    stepTwoText: "Consider the lines, proportions, and details of the piece.",
    stepThreeTitle: "Crafted in wood",
    stepThreeText: "The design takes physical form through precise CNC carving.",
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
    navWork: "ಕೆಲಸ",
    navWhatWeMake: "ನಾವು ರೂಪಿಸುವುದು",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navApproach: "ನಮ್ಮ ವಿಧಾನ",
    navProcess: "ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ",
    heroEyebrow: "ಕಸ್ಟಮ್ CNC ಮರಕೆತ್ತನೆ",
    heroTitle: "ಮರಕ್ಕೆ ರೂಪ,<br /><em>ಉದ್ದೇಶಪೂರ್ಣ ಸ್ಪರ್ಶ.</em>",
    heroIntro: "ನಿಖರವಾದ CNC ಕೆತ್ತನೆಯಿಂದ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಕಲ್ಪನೆಗಳಿಗೆ ಮರದಲ್ಲಿ ರೂಪ ನೀಡುತ್ತೇವೆ; ಆಕಾರ ಮತ್ತು ವಿವರಗಳಿಗೆ ವಿಶೇಷ ಗಮನ ಕೊಡುತ್ತೇವೆ.",
    exploreWork: "ನಮ್ಮ ಕೆಲಸ ನೋಡಿ",
    heroNote: "ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ ತಕ್ಕ ವಿನ್ಯಾಸ. ನಿಖರವಾದ ಕೆತ್ತನೆ.",
    heroImageAlt: "ಮರದ ಫಲಕದಲ್ಲಿ ಜ್ಯಾಮಿತೀಯ ವಿನ್ಯಾಸ ಕೆತ್ತುತ್ತಿರುವ CNC ಯಂತ್ರ",
    tickerLabel: "ಕಾಳಜಿಯಿಂದ ರೂಪಿಸಿದ, ನಿಮ್ಮದೇ ಆದ ಕಲಾಕೃತಿ",
    tickerOne: "ಒಳ್ಳೆಯ ಕಲ್ಪನೆ, ಮರದಲ್ಲಿ ರೂಪಿತ",
    tickerTwo: "ಪ್ರತಿ ವಿವರದಲ್ಲೂ ನಿಖರತೆ",
    tickerThree: "ನಿಮ್ಮದೇ ಆದ ವಿನ್ಯಾಸ",
    workEyebrow: "ಮರದ ವಿನ್ಯಾಸಗಳ ಅಧ್ಯಯನ",
    workTitle: "ವೈಯಕ್ತಿಕ ಸ್ಪರ್ಶದ ವಿನ್ಯಾಸ.",
    workIntro: "ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ ಹಲವು ರೂಪಗಳು ಸಾಧ್ಯ. ಕೆಳಗಿನ ಅಮೂರ್ತ ವಿನ್ಯಾಸಗಳು ಆಕಾರಗಳ ಉದಾಹರಣೆಗಳು; ಪೂರ್ಣಗೊಂಡ ಕೆಲಸಗಳಲ್ಲ.",
    artYourName: "ನಿಮ್ಮ ಹೆಸರು",
    artSign: "ವೈಯಕ್ತಿಕ ಫಲಕ",
    cardSigns: "ಕೆತ್ತನೆಯ ಫಲಕಗಳು",
    cardSignsText: "ಹೆಸರು, ಪದ ಮತ್ತು ಗುರುತುಗಳಿಗೆ ವಿಶೇಷ ರೂಪ.",
    artPanel: "ಜ್ಯಾಮಿತೀಯ ಕೆತ್ತನೆ",
    cardPanels: "ಗೋಡೆ ಫಲಕಗಳು",
    cardPanelsText: "ಗೋಡೆಗಳಿಗೆ ಆಳ, ಸ್ಪರ್ಶ ಮತ್ತು ಜ್ಯಾಮಿತೀಯ ಅಲಂಕಾರ.",
    artKeepsake: "ಅರ್ಥಪೂರ್ಣವಾಗಿ ರೂಪಿತ",
    cardPersonal: "ಕಸ್ಟಮ್ ವಿವರಗಳು",
    cardPersonalText: "ಮೊನೋಗ್ರಾಮ್‌ಗಳು, ಸ್ಮರಣಿಕೆಗಳು ಮತ್ತು ವಿಶಿಷ್ಟ ಅಲಂಕಾರಗಳು.",
    workFootnote: "ಇವು ಆರಂಭಿಕ ಕಲ್ಪನೆಗಳು. ನಿಮ್ಮ ವಿನ್ಯಾಸ ಮತ್ತು ಅಳತೆಗೆ ತಕ್ಕಂತೆ ಪ್ರತಿಯೊಂದು ವಸ್ತುವನ್ನೂ ರೂಪಿಸಬಹುದು.",
    aboutImageAlt: "CRN Artifacts ಕಾರ್ಯಾಗಾರದಲ್ಲಿ ಮರದ ಫಲಕವನ್ನು ಕೆತ್ತುತ್ತಿರುವ CNC ಯಂತ್ರ",
    makerImageLabel: "ಈ ಕೆಲಸದ ಹಿಂದಿನ ಕಲಾವಿದ",
    aboutRole: "CRN Artifacts‌ನ ಮರಕೆಲಸದ ಕಲಾವಿದ · ಕೆ.ಆರ್. ನಗರ, ಮೈಸೂರು ಜಿಲ್ಲೆ",
    aboutApproach: "ಪ್ರತಿಯೊಂದು ವಸ್ತುವಿನ ಅಳತೆ, ವಿನ್ಯಾಸ ಮತ್ತು ಮುಕ್ತಾಯವನ್ನು ಅದರ ಬಳಕೆಗೆ ತಕ್ಕಂತೆ ಯೋಜಿಸುತ್ತಾರೆ. CNC ಕೆತ್ತನೆ ವಿವರಗಳಿಗೆ ನಿಖರ ರೂಪ ನೀಡುತ್ತದೆ; ಮರದ ಸಹಜ ನಾರು ಪ್ರತಿಯೊಂದಕ್ಕೂ ವಿಭಿನ್ನತೆ ನೀಡುತ್ತದೆ.",
    aboutWorkLabel: "ಅವರ ಕೆಲಸ",
    aboutWork: "ಕೆತ್ತನೆಯ ಫಲಕಗಳು · ಅಲಂಕಾರಿಕ ಗೋಡೆ ಫಲಕಗಳು · ವೈಯಕ್ತಿಕ ಸ್ಮರಣಿಕೆಗಳು",
    aboutCta: "ನಾವು ಮಾಡುವ ಕೆಲಸ ನೋಡಿ",
    approachImageAlt: "ಕೆತ್ತನೆಯ ವಿನ್ಯಾಸ ಮತ್ತು ಮರದ ನೈಸರ್ಗಿಕ ನಾರಿನ ಹತ್ತಿರದ ನೋಟ",
    makeEyebrow: "ನಾವು ರೂಪಿಸುವುದು",
    makeTitle: "ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ<br /><em>ಒಂದು ರೂಪ.</em>",
    makeText: "ಅಕ್ಷರಗಳಿಂದ ಆಯಾಮದ ವಿನ್ಯಾಸಗಳವರೆಗೆ, ಸೂಕ್ಷ್ಮ ವಿವರಗಳ ಪ್ರತಿಯೊಂದು ಕೆಲಸವೂ ನಿಮಗೆ ಮುಖ್ಯವಾದ ಕಲ್ಪನೆಯಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.",
    approachEyebrow: "CRN ವಿನ್ಯಾಸ ವಿಧಾನ",
    approachTitle: "ಡಿಜಿಟಲ್ ನಿಖರತೆ.<br /><em>ಮರದ ಸಹಜ ಸೊಬಗು.</em>",
    approachText: "ಉತ್ತಮ ಮರದ ಕೆಲಸಕ್ಕೆ ಎಚ್ಚರಿಕೆಯ ಯೋಜನೆಯೂ, ವಸ್ತುವಿಗೆ ವೈಯಕ್ತಿಕ ಸ್ಪರ್ಶ ನೀಡುವ ಸೂಕ್ಷ್ಮ ವಿವರಗಳೂ ಬೇಕು. CNC ಕೆತ್ತನೆಯಿಂದ ಸ್ಪಷ್ಟ ರೇಖೆಗಳು, ಮರುಕಳಿಸುವ ವಿನ್ಯಾಸಗಳು ಮತ್ತು ನಿಖರ ಆಕಾರಗಳನ್ನು ರೂಪಿಸಬಹುದು; ಮರದ ನೈಸರ್ಗಿಕ ನಾರು ಪ್ರತಿಯೊಂದು ತುಂಡಿಗೂ ತನ್ನದೇ ಆದ ರೂಪ ನೀಡುತ್ತದೆ.",
    approachCta: "ನಮ್ಮ ಕೆಲಸ ನೋಡಿ",
    approachNote: "ಚಿಂತನೆಯಿಂದ ರೂಪಿಸಿದ ವಿನ್ಯಾಸ. ಪ್ರತಿಯೊಂದು ತುಂಡಿಗೂ ತನ್ನದೇ ಆದ ಸೊಬಗು.",
    processEyebrow: "ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ",
    processTitle: "ಕಲ್ಪನೆಯಿಂದ<br /><em>ರೂಪದವರೆಗೆ.</em>",
    processIntro: "ಒಂದು ಚಿಕ್ಕ ಮಾತುಕತೆ ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ ಸ್ಪಷ್ಟ ದಿಕ್ಕು ನೀಡುತ್ತದೆ. ಕಸ್ಟಮ್ ವಸ್ತು ರೂಪುಗೊಳ್ಳುವ ಹಂತಗಳು ಇಲ್ಲಿವೆ.",
    stepOneTitle: "ನಿಮ್ಮ ಕಲ್ಪನೆ ಹಂಚಿಕೊಳ್ಳಿ",
    stepOneText: "ನಿಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿರುವುದನ್ನು ಮತ್ತು ಅದನ್ನು ನಿಮಗೆ ವಿಶೇಷವಾಗಿಸುವುದನ್ನು ತಿಳಿಸಿ.",
    stepTwoTitle: "ವಿನ್ಯಾಸ ರೂಪಿಸೋಣ",
    stepTwoText: "ವಿನ್ಯಾಸದ ರೇಖೆಗಳು, ಅನುಪಾತಗಳು ಮತ್ತು ವಿವರಗಳನ್ನು ಪರಿಗಣಿಸೋಣ.",
    stepThreeTitle: "ಮರದಲ್ಲಿ ರೂಪಿತ",
    stepThreeText: "ನಿಖರವಾದ CNC ಕೆತ್ತನೆಯಿಂದ ವಿನ್ಯಾಸಕ್ಕೆ ಭೌತಿಕ ರೂಪ ಸಿಗುತ್ತದೆ.",
    footerTagline: "ಉದ್ದೇಶಪೂರ್ಣವಾಗಿ ರೂಪಿಸಿದ.<br /><span>ಮರದ ಸಹಜ ಸೊಬಗಿನಲ್ಲಿ.</span>",
    backToTop: "ಮೇಲಕ್ಕೆ ಹೋಗಿ"
  }
};

let currentLanguage = "en";
function menuLabel(isOpen, language = currentLanguage) {
  if (language === "kn") return isOpen ? "ಮೆನು ಮುಚ್ಚಿರಿ" : "ಮೆನು ತೆರೆಯಿರಿ";
  return isOpen ? "Close menu" : "Open menu";
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
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.setAttribute("alt", value);
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


document.querySelector("#year").textContent = new Date().getFullYear();

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("crn-artifacts-language") || "en";
} catch {
  // Default to English if browser storage is unavailable.
}
applyLanguage(savedLanguage);
