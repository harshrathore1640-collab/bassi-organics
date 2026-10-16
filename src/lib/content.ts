import heroImg from "../assets/hero.jpg";
import productOilImg from "../assets/product-oil.jpg";
import productShampooImg from "../assets/product-shampoo.jpg";
import founderImg from "../assets/founder.jpg";
import coconutImg from "../assets/coconut.jpg";
import logoImg from "../assets/logo.png";
import oilNatureImg from "../assets/coconut-oil-nature.jpeg";
import oilSpaImg from "../assets/coconut-oil-spa.jpeg";
import shampooLabelsImg from "../assets/shampoo-details-labels.jpeg";
import shampooSteamImg from "../assets/shampoo-trio-steam.jpeg";
import shampooWaterfallImg from "../assets/shampoo-waterfall.jpg";

/* ------------------------------------------------------------------ *
 *  Brand constants
 * ------------------------------------------------------------------ */
export const BRAND = "Bassi Organics";
export const FOUNDER = "Shiv Pratap Singh";
export const PHONE_DISPLAY = "+91 90247 75584";
export const PHONE_TEL = "+919024775584";
export const WA_BASE = "https://wa.me/919024775584";
export const CREDIT = "Marwar Infotech";
export const ADDRESS = "Shri Yade Mata Colony, Parbatsar, Rajasthan, India - 341512";
export const MAP_COORDS = { lat: 26.878538827927546, lng: 74.7543112620447 };
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=26.878538827927546,74.7543112620447&t=&z=16&ie=UTF8&iwloc=&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps?q=26.878538827927546,74.7543112620447";

export const waLink = (message: string) =>
  `${WA_BASE}?text=${encodeURIComponent(message)}`;

/* ------------------------------------------------------------------ *
 *  Imagery
 *  Local files (src/assets) are inlined into the build.
 *  Remote files are direct CDN photographs, lazy-loaded.
 *  To swap any image, replace the value here — nothing else changes.
 * ------------------------------------------------------------------ */
export const px = (id: number, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  logo: logoImg,
  hero: heroImg,
  productOil: productOilImg,
  productShampoo: productShampooImg,
  founder: founderImg,
  coconut: coconutImg,
  oilNature: oilNatureImg,
  oilSpa: oilSpaImg,
  shampooLabels: shampooLabelsImg,
  shampooSteam: shampooSteamImg,
  about: shampooWaterfallImg,
  shampooWaterfall: shampooWaterfallImg,
  herbMortar: px(8450505),
  herbGreen: px(4871295),
  herbJars: px(4044070),
  leafTexture: px(28410614),
  massage: px(23349902),
  washing: px(28994647),
  coconutMarket: px(36063662),
  kraft: px(7814773),
  oilFlatlay: px(6694212),
  herbalFlatlay: px(7526022),
  ferns: px(35996089),
  bottles: px(6694191),
  blending: px(5480192),
  darkOil: px(7148534),
};

export type VideoItem = {
  id: string;
  spec: string;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
  badge: string;
  desc: string;
};

export const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    spec: "FILM 01 · 360° SPIN",
    title: "Herbal Hair Oil — Outdoor 360° Study",
    subtitle: "Cold Pressed Coconut Base · 100ml Bottle",
    src: "./media/coconut-oil-outdoor-spin.mp4",
    poster: IMAGES.oilNature,
    badge: "Outdoor Sunlight",
    desc: "A continuous 360-degree rotation of our golden coconut hair oil bottle captured outdoors on rustic teak with warm natural sun flares.",
  },
  {
    id: "v2",
    spec: "FILM 02 · FULL REEL",
    title: "Flax Seeds Shampoo — Full 360° Bottle View",
    subtitle: "Sulphate & Paraben Free · Pump Dispenser",
    src: "./media/shampoo-360-reel.mp4",
    poster: IMAGES.shampooLabels,
    badge: "Clean Formula",
    desc: "Complete bottle showcase highlighting the gold-tone pump dispenser, clean label declaration, and herbal flaxseed formulation.",
  },
  {
    id: "v3",
    spec: "FILM 03 · MACRO RIPPLE",
    title: "Pure Extraction — Oil Drop & Surface Ripple",
    subtitle: "Cold Pressed Viscosity & Clarity Study",
    src: "./media/coconut-oil-drop-ripple.mp4",
    poster: IMAGES.productOil,
    badge: "Pure Texture",
    desc: "Macro footage of a single pure drop falling and creating clear ripples, demonstrating the unrefined texture and viscosity of our coconut oil.",
  },
  {
    id: "v4",
    spec: "FILM 04 · BATCH PAN",
    title: "Fresh Batch — Apothecary Shelf Pan",
    subtitle: "Handcrafted Bottles on Wooden Shelves",
    src: "./media/shampoo-shelf-pan.mp4",
    poster: IMAGES.shampooSteam,
    badge: "Small Batch",
    desc: "Cinematic pan across freshly formulated and hand-labelled bottles resting in our production workshop.",
  },
  {
    id: "v5",
    spec: "FILM 05 · BOTANICAL RITUAL",
    title: "Herbal Care Ritual — Purity In Every Pour",
    subtitle: "Whole Herbs & Traditional Slow Infusion",
    src: "./media/herbal-hair-ritual.mp4",
    poster: IMAGES.coconut,
    badge: "Traditional Method",
    desc: "Slow motion visual capture focusing on the pure texture and natural botanical essence that goes into every Bassi Organics bottle.",
  },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "ingredients", label: "Ingredients" },
  { id: "why", label: "Why Us" },
  { id: "videos", label: "Videos" },
  { id: "howto", label: "How to Use" },
  { id: "founder", label: "Founder" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "order", label: "Order" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ *
 *  Products — no prices invented; every card points to WhatsApp
 * ------------------------------------------------------------------ */
export type Product = {
  id: string;
  spec: string;
  name: string;
  latin: string;
  blurb: string;
  image: string;
  base: string;
  facts: string[];
  enquiry: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "hair-oil",
    spec: "SPEC. NO. 01",
    name: "Herbal Hair Oil",
    latin: "Oleum herbarium — on a coconut-oil base",
    blurb:
      "Our coconut-oil-based hair oil, prepared with herbs in the traditional way. Built for a slow scalp massage and an unhurried wash day.",
    image: IMAGES.productOil,
    base: "Coconut oil base",
    facts: [
      "Coconut oil as the base ingredient",
      "Prepared in small batches",
      "Full ingredient list shared before you order",
      "No price published — confirmed on WhatsApp",
    ],
    enquiry:
      "Hello Bassi Organics, I would like to enquire about the Herbal Hair Oil. Please share the current ingredient list, pack sizes and price.",
  },
  {
    id: "shampoo",
    spec: "SPEC. NO. 02",
    name: "Herbal Shampoo",
    latin: "Sapo herbarium — gentle cleansing wash",
    blurb:
      "A herbal wash made to follow the oil — enough to rinse the oil out without turning wash day into a stripping session.",
    image: IMAGES.productShampoo,
    base: "Herbal cleansing formula",
    facts: [
      "Formulated as the second step after the hair oil",
      "A small amount lathers across the whole scalp",
      "Full ingredient list shared before you order",
      "No price published — confirmed on WhatsApp",
    ],
    enquiry:
      "Hello Bassi Organics, I would like to enquire about the Herbal Shampoo. Please share the current ingredient list, pack sizes and price.",
  },
];

/* ------------------------------------------------------------------ *
 *  Ingredients — only coconut oil is confirmed by the brand.
 *  Remaining plates are reserved, clearly marked, never invented.
 * ------------------------------------------------------------------ */
export const CONFIRMED_INGREDIENT = {
  spec: "SPEC. NO. 01",
  common: "Coconut Oil",
  latin: "Cocus nucifera",
  role: "Base ingredient",
  note: "Coconut oil is the foundation both products are built on — it carries the herbs and gives the oil its weight on the scalp.",
  image: IMAGES.coconut,
};

export const RESERVED_INGREDIENTS = [
  {
    spec: "SPEC. NO. 02",
    label: "Herbal actives — oil",
    image: IMAGES.herbMortar,
    note: "Botanical plate reserved. The exact herbs used in the Herbal Hair Oil will be listed here once confirmed by Bassi Organics.",
  },
  {
    spec: "SPEC. NO. 03",
    label: "Herbal actives — shampoo",
    image: IMAGES.herbGreen,
    note: "Botanical plate reserved. The cleansing and herbal constituents of the Herbal Shampoo will be listed here once confirmed.",
  },
  {
    spec: "SPEC. NO. 04",
    label: "Batch-wise declaration",
    image: IMAGES.herbJars,
    note: "A batch-wise ingredient declaration will be published here. Ask us on WhatsApp for the sheet of the batch you receive.",
  },
];

/* ------------------------------------------------------------------ *
 *  Why choose us — factual positioning only, no unsupported claims
 * ------------------------------------------------------------------ */
export const WHY = [
  {
    n: "01",
    title: "Two products, not twenty",
    body: "We make a hair oil and a shampoo. A short line-up means each one gets the attention a short line-up deserves.",
    wide: true,
  },
  {
    n: "02",
    title: "Coconut oil is the base",
    body: "Both formulas start from a coconut-oil base, the one ingredient we name up front on every product.",
  },
  {
    n: "03",
    title: "Ingredient transparency",
    body: "Ask for the ingredient list of the batch in your hands and you get it, before you place the order.",
  },
  {
    n: "04",
    title: "Made in small batches",
    body: "Small batches keep the interval between preparation and your shelf short.",
  },
  {
    n: "05",
    title: "Ordered directly from us",
    body: "You message us on WhatsApp and we reply ourselves — no marketplace, no reseller in between.",
    wide: true,
  },
  {
    n: "06",
    title: "No claims we can't stand behind",
    body: "We describe what goes in and how to use it. We leave the medical claims to people qualified to make them.",
  },
];

/* ------------------------------------------------------------------ *
 *  How to use
 * ------------------------------------------------------------------ */
export const HOW_TO = [
  {
    spec: "PROCEDURE A",
    title: "Using the Herbal Hair Oil",
    image: IMAGES.massage,
    steps: [
      "Part dry or slightly damp hair into sections so the scalp is reachable.",
      "Take a small amount at the fingertips and apply scalp-first, section by section.",
      "Massage in with the pads of the fingers for two to three minutes. Fingernails off the scalp.",
      "Leave it on for at least thirty minutes — longer, or overnight, if it suits your routine.",
      "Wash out with the Herbal Shampoo. Repeat the wash if you left it on overnight.",
    ],
    note: "Patch-test on the inner arm before first use. Stop using if irritation occurs.",
  },
  {
    spec: "PROCEDURE B",
    title: "Using the Herbal Shampoo",
    image: IMAGES.washing,
    steps: [
      "Rinse hair thoroughly with water to lift out most of the oil first.",
      "Take a small amount into the palm, add a little water and lather before applying.",
      "Work through the scalp with the pads of the fingers, then pull it through the lengths.",
      "Rinse until the water runs clear. Repeat only if you need a second pass.",
      "Follow with your usual conditioner or rinse, if you use one.",
    ],
    note: "Avoid the eyes. Keep the bottle closed and store away from direct heat.",
  },
];

/* ------------------------------------------------------------------ *
 *  Founder — placeholder copy, clearly marked
 * ------------------------------------------------------------------ */
export const FOUNDER_PROFILE = {
  name: FOUNDER,
  role: "Founder, Bassi Organics",
  portrait: IMAGES.productOil,
  portraitAlt:
    "Bassi Organics Handcrafted Herbal Hair Oil and Flax Seeds Shampoo",
  quote:
    "I wanted a hair-care line short enough that I could explain every bottle from memory.",
  bio: [
    "Shiv Pratap Singh founded Bassi Organics around a simple frustration: hair-care shelves full of long ingredient lists nobody could read out loud.",
    "His answer was to keep the line small — a coconut-oil-based herbal hair oil and a herbal shampoo — and to be ready with the full ingredient list for anyone who asks, before the order is placed.",
  ],
  placeholderNote:
    "Handcrafted in small batches with cold-pressed coconut oil, whole botanicals, and zero harsh chemicals.",
  details: [
    { k: "Role", v: "Founder & formulation oversight" },
    { k: "Origin", v: "Rajasthan, India" },
    { k: "Commitment", v: "100% natural cold-pressed oils & whole herbs" },
  ],
};

/* ------------------------------------------------------------------ *
 *  Gallery
 * ------------------------------------------------------------------ */
export const GALLERY = [
  { src: IMAGES.productOil, caption: "Herbal Hair Oil — bottle study", spec: "PL. I" },
  { src: IMAGES.oilNature, caption: "Cold-Pressed Coconut Oil in natural sunlight", spec: "PL. II" },
  { src: IMAGES.coconut, caption: "Cocus nucifera — the base ingredient", spec: "PL. III" },
  { src: IMAGES.shampooLabels, caption: "Flax Seeds Shampoo — pure ingredients & label", spec: "PL. IV" },
  { src: IMAGES.productShampoo, caption: "Herbal Shampoo — bottle study", spec: "PL. V" },
  { src: IMAGES.oilSpa, caption: "Herbal Hair Care — spa ritual study", spec: "PL. VI" },
  { src: IMAGES.shampooSteam, caption: "Flax Seeds Shampoo trio — steam setting", spec: "PL. VII" },
  { src: IMAGES.blending, caption: "Herbs prepared by hand", spec: "PL. VIII" },
];

/* ------------------------------------------------------------------ *
 *  Reviews — clearly marked placeholders, no invented customers
 * ------------------------------------------------------------------ */
export const REVIEWS = [
  {
    initials: "—",
    name: "Awaiting verified customer",
    meta: "Placeholder review slot 01",
    text: "This slot holds a real, verified customer review of the Herbal Hair Oil once it has been collected and approved for publication.",
  },
  {
    initials: "—",
    name: "Awaiting verified customer",
    meta: "Placeholder review slot 02",
    text: "This slot holds a real, verified customer review of the Herbal Shampoo, including the pack size ordered and the date of the review.",
  },
  {
    initials: "—",
    name: "Awaiting verified customer",
    meta: "Placeholder review slot 03",
    text: "Reviews are published only with the customer's permission and are never edited beyond length. Nothing here is fabricated.",
  },
];

/* ------------------------------------------------------------------ *
 *  FAQ
 * ------------------------------------------------------------------ */
export const FAQS = [
  {
    q: "What are the ingredients in your products?",
    a: "Coconut oil is the confirmed base ingredient of the line. The complete ingredient list for each product and batch is shared on request over WhatsApp, before you order — we publish it permanently on this site as soon as it is signed off.",
  },
  {
    q: "How many products do you sell?",
    a: "Two: the Herbal Hair Oil and the Herbal Shampoo. Everything we make is on the Products section above.",
  },
  {
    q: "How do I use the hair oil and the shampoo together?",
    a: "Oil the scalp first and leave it on for at least half an hour, then wash with the Herbal Shampoo — rinse thoroughly first, lather a small amount in the palm, and repeat only if needed. The full step-by-step is in How to Use.",
  },
  {
    q: "What is the price?",
    a: "Prices are not published on this website so that you always get the current one from us directly. Message on WhatsApp with the product you want and we reply with today's price and the pack sizes available.",
  },
  {
    q: "How do I place an order?",
    a: "Use any WhatsApp button on this page. The Order & Enquiry section lets you pick the product and write a note — the message is pre-filled, so you only press send.",
  },
  {
    q: "Do you deliver, and how long does it take?",
    a: "Delivery is arranged after your order is confirmed on WhatsApp. We confirm the dispatch timeline, the delivery pin codes we currently serve and any shipping charge before you pay anything.",
  },
  {
    q: "Can I return a product?",
    a: "Because of the nature of hair-care products, returns are handled case by case. Message us on WhatsApp with your order details and we will tell you what can be done for that specific order.",
  },
  {
    q: "Do you take wholesale or bulk orders?",
    a: "Tell us what you need on WhatsApp — quantity, destination and timeline — and we will confirm whether we can fulfil it for that batch.",
  },
  {
    q: "Are these medical treatments?",
    a: "No. These are cosmetic hair-care products. Nothing on this site is medical advice or a claim to treat any condition. If you have a scalp condition, please speak to a qualified doctor.",
  },
];

/* ------------------------------------------------------------------ *
 *  Policies
 * ------------------------------------------------------------------ */
export const POLICIES = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "Bassi Organics collects only the details you choose to give us — typically your name, phone number and delivery address — and uses them solely to answer your enquiry and fulfil your order.",
      "We do not sell or rent your information. Enquiries happen over WhatsApp, which is governed by its own privacy policy; we keep only what we need to complete the conversation.",
      "To ask what we hold about you, or to have it removed, write to us on WhatsApp at +91 90247 75584.",
    ],
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    body: [
      "Product information on this site is provided in good faith and is kept current to the best of our knowledge. Images are indicative of the product and its packaging.",
      "An order is confirmed only when we acknowledge it on WhatsApp and you accept the price and quantity quoted at that time.",
      "Prices, pack sizes and availability may change between batches; the confirmation message on WhatsApp is the binding one.",
      "These products are cosmetic hair-care items and are not medicines. Nothing here constitutes medical advice.",
    ],
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    body: [
      "Orders are dispatched after they are confirmed with you on WhatsApp, along with the expected dispatch window for that batch.",
      "Shipping charges and the delivery pin codes we currently serve are confirmed before payment is made — no surprise charges afterwards.",
      "Delivery timelines depend on your destination and are quoted at the time of confirmation. If a parcel is visibly damaged on arrival, photograph it and contact us the same day.",
    ],
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    body: [
      "If your parcel arrives damaged, or the wrong item was sent, message us on WhatsApp with a photograph within 48 hours of delivery and we will make it right.",
      "For change-of-mind returns on opened hair-care items, please contact us first — these are handled individually depending on the condition of the seal and the batch.",
      "Refunds, where agreed, are issued to the original payment method once the returned item is received and inspected.",
    ],
  },
];

export const GALLERY_NOTE =
  "Representative product and botanical photography. Final pack shots will replace these as soon as the shoot is completed.";
