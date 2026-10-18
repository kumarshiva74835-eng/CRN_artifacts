const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const languageToggle = document.querySelector("#language-toggle");
const socialLinks = document.querySelectorAll("[data-social-link]");
const cartDialog = document.querySelector("#cart-dialog");
const cartOpen = document.querySelector("#cart-open");
const cartClose = document.querySelector("#cart-close");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const orderForm = document.querySelector("#order-form");
const cartStatus = document.querySelector("#cart-status");

// Add the business WhatsApp number in international format and Instagram handle here.
const WHATSAPP_NUMBER = "918073777020"; // India country code + the provided number.
const INSTAGRAM_HANDLE = ""; // Example: crn_artifacts (without @)

const translations = {
  en: {
    pageTitle: "CRN Artifacts — Wood, shaped with intention",
    metaDescription: "Explore made-to-order CNC woodwork from CRN Artifacts. Request carved signs, decorative wall panels and personalized keepsakes.",
    skipContent: "Skip to content",
    brandHome: "CRN Artifacts home",
    brandBackTop: "CRN Artifacts, back to top",
    mainNavigation: "Main navigation",
    navWork: "What we make",
    navShop: "Shop",
    navAbout: "About us",
    navApproach: "Our approach",
    navProcess: "Process",
    cartButton: "Order",
    cartButtonLabel: "Review order",
    cartItemsLabel: "Items in your order",
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
    storeEyebrow: "MADE TO ORDER",
    storeTitle: "Made for your space.<br /><em>Ready to request.</em>",
    storeIntro: "Choose a starting point for a custom piece. Tell us your size and personal details when you place an order request.",
    productCategorySigns: "CARVED WOOD",
    productCategoryPanels: "WALL ART",
    productCategoryGifts: "PERSONAL DETAILS",
    productSignArt: "YOUR NAME",
    productSignTitle: "Personalized carved sign",
    productSignText: "A name or meaningful word, shaped to your dimensions.",
    productPanelTitle: "Decorative wall panel",
    productPanelText: "A patterned wood accent designed around your wall and finish.",
    productKeepsakeArt: "MADE TO MEAN SOMETHING",
    productKeepsakeTitle: "Personalized keepsake",
    productKeepsakeText: "A monogram or short message turned into a thoughtful gift.",
    priceOnRequest: "Price on request",
    addToOrder: "Add to order",
    storeFootnote: "Each piece is made to order. We’ll confirm the design, final price and delivery with you before you commit.",
    aboutImageAlt: "CNC router carving a wood panel at the CRN Artifacts workshop",
    makerImageLabel: "THE MAKER BEHIND THE WORK",
    aboutEyebrow: "MEET THE MAKER",
    aboutTitle: "Meet Charan.<br /><em>Woodwork with meaning.</em>",
    aboutRole: "Maker at CRN Artifacts · KR Nagar, Mysore district",
    aboutBio: "Charan creates custom CNC-crafted woodwork at CRN Artifacts. He works with you to turn names, patterns and personal ideas into carved signs, decorative panels and keepsakes.",
    aboutApproach: "Each piece is planned around its size, design and finish. CNC routing gives the details clean definition, while the natural grain makes every piece distinct.",
    aboutWorkLabel: "HIS WORK",
    aboutWork: "Carved signs · Decorative wall panels · Personalized keepsakes",
    aboutCta: "Explore made-to-order pieces",
    cartEyebrow: "YOUR SELECTION",
    cartTitle: "Your order",
    closeCart: "Close order",
    cartEmpty: "Your order is empty.",
    continueShopping: "Choose a piece",
    priceConfirmation: "Each piece is made to order. CRN Artifacts will confirm the design, price and delivery with you.",
    customerName: "Your name",
    customerPhone: "Phone / WhatsApp",
    deliveryLocation: "Delivery location",
    orderNotes: "Size and personalization",
    orderNotesPlaceholder: "Add the name, text, dimensions, or finish you have in mind.",
    sendOrder: "Continue on WhatsApp",
    orderHint: "Your details will open in WhatsApp. Review the message and tap Send to submit your request.",
    itemAdded: "Added to your order.",
    itemsSelected: "items selected",
    itemSelected: "item selected",
    increaseQuantity: "Increase quantity of",
    decreaseQuantity: "Decrease quantity of",
    removeItem: "Remove",
    orderMessageGreeting: "Hello CRN Artifacts, I’d like to place an order request.",
    orderMessageItems: "Items:",
    orderMessageName: "Name",
    orderMessagePhone: "Phone",
    orderMessageDelivery: "Delivery location",
    orderMessageNotes: "Size and personalization",
    orderMessageConfirm: "Please confirm the final price, design, delivery time and payment method.",
    orderMessageQuantity: "qty",
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
    metaDescription: "CRN Artifacts‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮೇರೆಗೆ ತಯಾರಾಗುವ CNC ಮರದ ಕೆಲಸ ನೋಡಿ. ಕೆತ್ತನೆಯ ಫಲಕ, ಗೋಡೆ ಅಲಂಕಾರ ಮತ್ತು ವೈಯಕ್ತಿಕ ಸ್ಮರಣಿಕೆಗಳಿಗೆ ವಿನಂತಿಸಿ.",
    skipContent: "ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ",
    brandHome: "CRN Artifacts ಮುಖಪುಟ",
    brandBackTop: "CRN Artifacts, ಪುಟದ ಮೇಲಕ್ಕೆ",
    mainNavigation: "ಮುಖ್ಯ ಮೆನು",
    navWork: "ನಾವು ಮಾಡುವ ಕೆಲಸ",
    navShop: "ಅಂಗಡಿ",
    navAbout: "ನಮ್ಮ ಬಗ್ಗೆ",
    navApproach: "ನಮ್ಮ ವಿಧಾನ",
    navProcess: "ಪ್ರಕ್ರಿಯೆ",
    cartButton: "ಆರ್ಡರ್",
    cartButtonLabel: "ಆರ್ಡರ್ ಪರಿಶೀಲಿಸಿ",
    cartItemsLabel: "ನಿಮ್ಮ ಆರ್ಡರ್‌ನಲ್ಲಿರುವ ವಸ್ತುಗಳು",
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
    storeEyebrow: "ಆರ್ಡರ್ ಮೇರೆಗೆ ತಯಾರಿ",
    storeTitle: "ನಿಮ್ಮ ಜಾಗಕ್ಕಾಗಿ.<br /><em>ಆರ್ಡರ್ ಮಾಡಲು ಸಿದ್ಧ.</em>",
    storeIntro: "ನಿಮ್ಮ ಕಸ್ಟಮ್ ವಸ್ತುವಿಗೆ ಒಂದು ಮಾದರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಆರ್ಡರ್ ವಿನಂತಿಸುವಾಗ ಅಳತೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.",
    productCategorySigns: "ಕೆತ್ತನೆಯ ಮರ",
    productCategoryPanels: "ಗೋಡೆ ಅಲಂಕಾರ",
    productCategoryGifts: "ವೈಯಕ್ತಿಕ ವಿನ್ಯಾಸ",
    productSignArt: "ನಿಮ್ಮ ಹೆಸರು",
    productSignTitle: "ವೈಯಕ್ತಿಕ ಕೆತ್ತನೆಯ ಫಲಕ",
    productSignText: "ನಿಮ್ಮ ಅಳತೆಗೆ ತಕ್ಕಂತೆ ರೂಪಿಸಿದ ಹೆಸರು ಅಥವಾ ಅರ್ಥಪೂರ್ಣ ಪದ.",
    productPanelTitle: "ಅಲಂಕಾರಿಕ ಗೋಡೆ ಫಲಕ",
    productPanelText: "ನಿಮ್ಮ ಗೋಡೆ ಮತ್ತು ಮುಕ್ತಾಯಕ್ಕೆ ಹೊಂದುವ ವಿನ್ಯಾಸದ ಮರದ ಅಲಂಕಾರ.",
    productKeepsakeArt: "ಅರ್ಥಪೂರ್ಣವಾಗಿ ರೂಪಿತ",
    productKeepsakeTitle: "ವೈಯಕ್ತಿಕ ಸ್ಮರಣಿಕೆ",
    productKeepsakeText: "ಮೊನೋಗ್ರಾಮ್ ಅಥವಾ ಚಿಕ್ಕ ಸಂದೇಶವನ್ನು ಉಡುಗೊರೆಯಾಗಿ ರೂಪಿಸೋಣ.",
    priceOnRequest: "ಬೆಲೆ ವಿಚಾರಿಸಿ",
    addToOrder: "ಆರ್ಡರ್‌ಗೆ ಸೇರಿಸಿ",
    storeFootnote: "ಪ್ರತಿಯೊಂದು ವಸ್ತುವನ್ನೂ ಆರ್ಡರ್ ಮೇರೆಗೆ ತಯಾರಿಸುತ್ತೇವೆ. ನೀವು ಖಚಿತಪಡಿಸುವ ಮೊದಲು ವಿನ್ಯಾಸ, ಅಂತಿಮ ಬೆಲೆ ಮತ್ತು ವಿತರಣೆಯನ್ನು ತಿಳಿಸುತ್ತೇವೆ.",
    aboutImageAlt: "CRN Artifacts ಕಾರ್ಯಾಗಾರದಲ್ಲಿ ಮರದ ಫಲಕವನ್ನು ಕೆತ್ತುತ್ತಿರುವ CNC ಯಂತ್ರ",
    makerImageLabel: "ಈ ಕೆಲಸದ ಹಿಂದಿನ ಕಲಾವಿದ",
    aboutEyebrow: "ಕಲಾವಿದರನ್ನು ಭೇಟಿ ಮಾಡಿ",
    aboutTitle: "ಚಾರನ್ ಅವರನ್ನು ಭೇಟಿ ಮಾಡಿ.<br /><em>ಅರ್ಥಪೂರ್ಣ ಮರದ ಕೆಲಸ.</em>",
    aboutRole: "CRN Artifacts‌ನ ಮರಕೆಲಸದ ಕಲಾವಿದ · ಕೆ.ಆರ್. ನಗರ, ಮೈಸೂರು ಜಿಲ್ಲೆ",
    aboutBio: "ಚಾರನ್ CRN Artifacts‌ನಲ್ಲಿ CNC ತಂತ್ರಜ್ಞಾನದಿಂದ ಕಸ್ಟಮ್ ಮರದ ವಸ್ತುಗಳನ್ನು ರೂಪಿಸುತ್ತಾರೆ. ಹೆಸರುಗಳು, ವಿನ್ಯಾಸಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಕಲ್ಪನೆಗಳನ್ನು ಕೆತ್ತನೆಯ ಫಲಕಗಳು, ಅಲಂಕಾರಿಕ ಪ್ಯಾನೆಲ್‌ಗಳು ಮತ್ತು ಸ್ಮರಣಿಕೆಗಳಾಗಿ ರೂಪಿಸಲು ನಿಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತಾರೆ.",
    aboutApproach: "ಪ್ರತಿಯೊಂದು ವಸ್ತುವಿನ ಅಳತೆ, ವಿನ್ಯಾಸ ಮತ್ತು ಮುಕ್ತಾಯವನ್ನು ಅದರ ಬಳಕೆಗೆ ತಕ್ಕಂತೆ ಯೋಜಿಸುತ್ತಾರೆ. CNC ಕೆತ್ತನೆ ವಿವರಗಳಿಗೆ ನಿಖರ ರೂಪ ನೀಡುತ್ತದೆ; ಮರದ ಸಹಜ ನಾರು ಪ್ರತಿಯೊಂದಕ್ಕೂ ವಿಭಿನ್ನತೆ ನೀಡುತ್ತದೆ.",
    aboutWorkLabel: "ಅವರ ಕೆಲಸ",
    aboutWork: "ಕೆತ್ತನೆಯ ಫಲಕಗಳು · ಅಲಂಕಾರಿಕ ಗೋಡೆ ಫಲಕಗಳು · ವೈಯಕ್ತಿಕ ಸ್ಮರಣಿಕೆಗಳು",
    aboutCta: "ಆರ್ಡರ್ ಮೇರೆಗೆ ತಯಾರಾಗುವ ವಸ್ತುಗಳನ್ನು ನೋಡಿ",
    cartEyebrow: "ನಿಮ್ಮ ಆಯ್ಕೆ",
    cartTitle: "ನಿಮ್ಮ ಆರ್ಡರ್",
    closeCart: "ಆರ್ಡರ್ ಮುಚ್ಚಿ",
    cartEmpty: "ನಿಮ್ಮ ಆರ್ಡರ್ ಖಾಲಿಯಿದೆ.",
    continueShopping: "ವಸ್ತುವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    priceConfirmation: "ಪ್ರತಿಯೊಂದು ವಸ್ತುವೂ ಆರ್ಡರ್ ಮೇರೆಗೆ ತಯಾರಾಗುತ್ತದೆ. ವಿನ್ಯಾಸ, ಬೆಲೆ ಮತ್ತು ವಿತರಣೆಯನ್ನು CRN Artifacts ನಿಮ್ಮೊಂದಿಗೆ ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    customerName: "ನಿಮ್ಮ ಹೆಸರು",
    customerPhone: "ಫೋನ್ / WhatsApp",
    deliveryLocation: "ವಿತರಣೆಯ ಸ್ಥಳ",
    orderNotes: "ಅಳತೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ವಿವರ",
    orderNotesPlaceholder: "ನಿಮ್ಮ ಆಯ್ಕೆಯ ಹೆಸರು, ಪಠ್ಯ, ಅಳತೆ ಅಥವಾ ಮುಕ್ತಾಯವನ್ನು ಸೇರಿಸಿ.",
    sendOrder: "WhatsApp‌ನಲ್ಲಿ ಮುಂದುವರಿಸಿ",
    orderHint: "ನಿಮ್ಮ ವಿವರಗಳು WhatsApp‌ನಲ್ಲಿ ತೆರೆಯುತ್ತವೆ. ಸಂದೇಶ ಪರಿಶೀಲಿಸಿ, ವಿನಂತಿ ಸಲ್ಲಿಸಲು ಕಳುಹಿಸಿ ಒತ್ತಿರಿ.",
    itemAdded: "ನಿಮ್ಮ ಆರ್ಡರ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ.",
    itemsSelected: "ವಸ್ತುಗಳನ್ನು ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ",
    itemSelected: "ವಸ್ತುವನ್ನು ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ",
    increaseQuantity: "ಪ್ರಮಾಣ ಹೆಚ್ಚಿಸಿ",
    decreaseQuantity: "ಪ್ರಮಾಣ ಕಡಿಮೆ ಮಾಡಿ",
    removeItem: "ತೆಗೆದುಹಾಕಿ",
    orderMessageGreeting: "ನಮಸ್ಕಾರ CRN Artifacts, ನಾನು ಈ ವಸ್ತುಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.",
    orderMessageItems: "ವಸ್ತುಗಳು:",
    orderMessageName: "ಹೆಸರು",
    orderMessagePhone: "ಫೋನ್",
    orderMessageDelivery: "ವಿತರಣೆಯ ಸ್ಥಳ",
    orderMessageNotes: "ಅಳತೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ವಿವರ",
    orderMessageConfirm: "ದಯವಿಟ್ಟು ಅಂತಿಮ ಬೆಲೆ, ವಿನ್ಯಾಸ, ವಿತರಣಾ ಸಮಯ ಮತ್ತು ಪಾವತಿ ವಿಧಾನವನ್ನು ಖಚಿತಪಡಿಸಿ.",
    orderMessageQuantity: "ಪ್ರಮಾಣ",
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
const orderCart = new Map();
const orderCatalog = {
  "name-sign": { nameKey: "productSignTitle" },
  "wall-panel": { nameKey: "productPanelTitle" },
  keepsake: { nameKey: "productKeepsakeTitle" }
};
const ORDER_CART_KEY = "crn-artifacts-order-cart-v1";

function loadOrderCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(ORDER_CART_KEY) || "{}");
    Object.entries(saved).forEach(([productId, quantity]) => {
      if (orderCatalog[productId] && Number.isInteger(quantity) && quantity > 0 && quantity <= 99) {
        orderCart.set(productId, quantity);
      }
    });
  } catch {
    // The order can still be built for this visit if storage is unavailable.
  }
}

function saveOrderCart() {
  try {
    localStorage.setItem(ORDER_CART_KEY, JSON.stringify(Object.fromEntries(orderCart)));
  } catch {
    // The order can still be sent for this visit if storage is unavailable.
  }
}

function getProductName(productId, copy = translations[currentLanguage]) {
  return copy[orderCatalog[productId]?.nameKey] || productId;
}

function renderOrderCart(copy = translations[currentLanguage]) {
  if (!cartItems || !cartCount || !cartEmpty || !orderForm) return;
  const quantityTotal = [...orderCart.values()].reduce((sum, quantity) => sum + quantity, 0);
  cartCount.textContent = String(quantityTotal);
  cartOpen?.setAttribute("aria-label", `${copy.cartButtonLabel}, ${quantityTotal} ${quantityTotal === 1 ? copy.itemSelected : copy.itemsSelected}`);
  cartEmpty.hidden = quantityTotal > 0;
  cartItems.hidden = quantityTotal === 0;
  orderForm.hidden = quantityTotal === 0;
  document.querySelector(".cart-note")?.toggleAttribute("hidden", quantityTotal === 0);
  cartItems.replaceChildren();

  orderCart.forEach((quantity, productId) => {
    const productName = getProductName(productId, copy);
    const item = document.createElement("li");
    item.className = "cart-item";

    const description = document.createElement("div");
    description.className = "cart-item-description";
    const title = document.createElement("h3");
    title.textContent = productName;
    const price = document.createElement("p");
    price.textContent = copy.priceOnRequest;
    description.append(title, price);

    const controls = document.createElement("div");
    controls.className = "cart-item-controls";
    const decrement = document.createElement("button");
    decrement.type = "button";
    decrement.className = "quantity-button";
    decrement.textContent = "−";
    decrement.setAttribute("aria-label", `${copy.decreaseQuantity} ${productName}`);
    decrement.dataset.cartAction = "decrease";
    decrement.dataset.productId = productId;
    const amount = document.createElement("span");
    amount.className = "quantity-value";
    amount.textContent = String(quantity);
    amount.setAttribute("aria-label", `${quantity} ${quantity === 1 ? copy.itemSelected : copy.itemsSelected}`);
    const increment = document.createElement("button");
    increment.type = "button";
    increment.className = "quantity-button";
    increment.textContent = "+";
    increment.setAttribute("aria-label", `${copy.increaseQuantity} ${productName}`);
    increment.dataset.cartAction = "increase";
    increment.dataset.productId = productId;
    increment.disabled = quantity >= 99;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = copy.removeItem;
    remove.setAttribute("aria-label", `${copy.removeItem} ${productName}`);
    remove.dataset.cartAction = "remove";
    remove.dataset.productId = productId;
    controls.append(decrement, amount, increment, remove);
    item.append(description, controls);
    cartItems.append(item);
  });
  saveOrderCart();
}

function closeOrderDialog() {
  if (!cartDialog || (!cartDialog.open && !cartDialog.hasAttribute("open"))) return;
  if (typeof cartDialog.close === "function" && cartDialog.open) {
    cartDialog.close();
  } else {
    cartDialog.removeAttribute("open");
  }
  cartDialog.removeAttribute("aria-modal");
  document.body.classList.remove("cart-open");
}

function openOrderDialog() {
  if (!cartDialog || cartDialog.open || cartDialog.hasAttribute("open")) return;
  if (typeof cartDialog.showModal === "function") {
    try {
      cartDialog.showModal();
      return;
    } catch {
      // Fall back to a visible dialog when native modal opening is unavailable.
    }
  }
  cartDialog.setAttribute("open", "");
  cartDialog.setAttribute("aria-modal", "true");
  document.body.classList.add("cart-open");
  cartClose?.focus();
}

function buildOrderMessage(formData, copy = translations[currentLanguage]) {
  const lines = [copy.orderMessageGreeting, "", copy.orderMessageItems];
  orderCart.forEach((quantity, productId) => {
    lines.push(`• ${getProductName(productId, copy)} — ${copy.orderMessageQuantity}: ${quantity}`);
  });
  lines.push(
    "",
    `${copy.orderMessageName}: ${formData.get("customerName").trim()}`,
    `${copy.orderMessagePhone}: ${formData.get("customerPhone").trim()}`,
    `${copy.orderMessageDelivery}: ${formData.get("deliveryLocation").trim()}`
  );
  const notes = formData.get("orderNotes").trim();
  if (notes) lines.push(`${copy.orderMessageNotes}: ${notes}`);
  lines.push("", copy.orderMessageConfirm);
  return lines.join("\n");
}

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
  renderOrderCart(copy);
  if (cartStatus) cartStatus.textContent = "";

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

document.querySelectorAll(".add-to-order").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    if (!orderCatalog[productId]) return;
    orderCart.set(productId, Math.min(99, (orderCart.get(productId) || 0) + 1));
    renderOrderCart();
    if (cartStatus) cartStatus.textContent = `${getProductName(productId)} ${translations[currentLanguage].itemAdded}`;
    openOrderDialog();
  });
});

cartOpen?.addEventListener("click", () => {
  openOrderDialog();
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", menuLabel(false));
  siteNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

cartClose?.addEventListener("click", closeOrderDialog);
document.querySelector(".cart-continue")?.addEventListener("click", () => {
  closeOrderDialog();
  document.querySelector("#store")?.scrollIntoView({ behavior: "smooth" });
});

cartDialog?.addEventListener("click", (event) => {
  if (event.target === cartDialog) closeOrderDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("cart-open")) {
    closeOrderDialog();
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target === document.body && document.body.classList.contains("cart-open")) {
    closeOrderDialog();
  }
});

cartItems?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-action]");
  if (!button) return;
  const { cartAction, productId } = button.dataset;
  const quantity = orderCart.get(productId) || 0;
  if (cartAction === "remove" || (cartAction === "decrease" && quantity <= 1)) {
    orderCart.delete(productId);
  } else if (cartAction === "decrease") {
    orderCart.set(productId, quantity - 1);
  } else if (cartAction === "increase") {
    orderCart.set(productId, Math.min(99, quantity + 1));
  }
  renderOrderCart();
});

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!orderCart.size) return;
  const whatsappDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!whatsappDigits) {
    if (cartStatus) cartStatus.textContent = translations[currentLanguage].whatsappUnavailable;
    return;
  }
  const message = buildOrderMessage(new FormData(orderForm));
  const orderUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
  window.open(orderUrl, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();

let savedLanguage = "en";
try {
  savedLanguage = localStorage.getItem("crn-artifacts-language") || "en";
} catch {
  // Default to English if browser storage is unavailable.
}
loadOrderCart();
applyLanguage(savedLanguage);
