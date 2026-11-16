import { getServiceImages } from "../serviceImages";
import { supplyFitHeroData } from "../supplyFit/SupplyFitHeroData";
import type { Faq } from "../faqs";
import type { SupplyFitPrecisionData } from "../types";
import type { ProcessStep } from "../supplyFit/ProcessSteps";

export const usedTrust: SupplyFitPrecisionData = {
  eyebrow: "Before you commit",
  title: "Support with Your Engine Enquiry",
  description: "",
  features: [
    { icon: "tested", title: "Engine Code Matching", description: "Share your registration and we help confirm the correct engine." },
    { icon: "warranty", title: "Clear Condition Information", description: "We share available details on mileage, source and condition." },
    { icon: "specialist", title: "Cover Terms Explained", description: "Ask us about any warranty terms before you place an order." },
    { icon: "collection", title: "Supply and Fitting", description: "Choose supply only or supply and fit, depending on your needs." },
  ],
};

// These are catalogue enquiry categories, not a live inventory or a fitment guarantee.
export const usedOptions = [
  {
    "id": "01",
    "cardEyebrow": "Full-Size Range Rover",
    "label": "Full-Size Model Engines",
    "description": "Used engines for the full-size Range Rover, sourced to suit your model year and engine code. We confirm compatibility before any unit is supplied.",
    "href": "/engines/range-rover",
    "linkLabel": "View full-size engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Enquire Now",
  },
  {
    "id": "02",
    "cardEyebrow": "Range Rover Sport",
    "label": "Range Rover Sport Engines",
    "description": "Looking for a used Range Rover Sport engine for sale? Send your registration and we will check suitable units for your exact variant.",
    "href": "/engines/range-rover/sport",
    "linkLabel": "Explore Sport engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Get a Quote",
  },
  {
    "id": "03",
    "cardEyebrow": "Range Rover Evoque",
    "label": "Evoque Used Engines",
    "description": "We can help source a used Range Rover Evoque engine that matches your model and fuel type, helping keep replacement costs manageable.",
    "href": "/engines/range-rover/evoque",
    "linkLabel": "See Evoque engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Enquire Now",
  },
  {
    "id": "04",
    "cardEyebrow": "Range Rover Velar",
    "label": "Velar Engine Supply",
    "description": "A used Range Rover Velar engine can be a practical alternative to a new unit. We confirm the correct engine variant before supply.",
    "href": "/engines/range-rover/velar",
    "linkLabel": "Check Velar engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Get a Quote",
  },
  {
    "id": "05",
    "cardEyebrow": "Rebuild Alternative",
    "label": "Engine Rebuild Option",
    "description": "If a replacement is not the best fit, rebuilding your existing engine may be possible. Suitability depends on the extent of damage found.",
    "href": "/engines/range-rover",
    "linkLabel": "Learn about rebuild options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Ask Us",
  },
];

export const usedBenefits: SupplyFitPrecisionData = {
  eyebrow: "Why Choose Us",
  title: "Why Owners Choose Our Engine Service",
  description: "We focus on Range Rover engines and give clear, practical guidance at every stage.",
  features: [
    { icon: "ancillaries", title: "Range Rover Focused Knowledge", description: "Our work centres on Range Rover vehicles, from Evoque to full-size models." },
    { icon: "tested", title: "Correct Engine Matching", description: "We check engine codes and specifications to help avoid ordering the wrong unit." },
    { icon: "pricing", title: "Honest Cost Guidance", description: "We explain whether rebuilding or replacing makes more sense for your vehicle." },
    { icon: "collection", title: "Flexible Service Options", description: "Choose supply only or a full supply and fit service." },
  ],
};

export const usedSteps: ProcessStep[] = [
  { number: "01", title: "Send Enquiry", description: "Share your registration, model and details of the engine problem." },
  { number: "02", title: "Vehicle Check", description: "We review your details and confirm the correct engine code." },
  { number: "03", title: "Options Explained", description: "We outline suitable reconditioned, used or repair routes for you." },
  { number: "04", title: "Clear Quote", description: "You receive a quote to review before anything goes ahead." },
  { number: "05", title: "Supply or Fitting", description: "The engine is supplied or fitted, depending on your chosen service." },
  { number: "06", title: "Final Checks", description: "Fitted engines are checked and tested before the vehicle is returned." },
];

export const usedFaqs: Faq[] = [
  { q: "How much does it cost to replace a Range Rover engine?", a: "The cost depends on your model, engine type, whether you choose a used or reconditioned unit, and whether fitting is included. Send your registration for an accurate quote based on your vehicle." },
  { q: "How much is it to replace a Range Rover Sport engine?", a: "Prices vary by Sport model year, engine variant and the type of replacement chosen. A used unit is usually cheaper than a reconditioned one. Contact us with your details for a vehicle-specific quote." },
  { q: "How much does it cost to rebuild a Range Rover engine?", a: "Rebuild costs depend on the extent of internal damage, parts required and labour time. An inspection is usually needed before an accurate figure can be given, as hidden damage may change the scope of work." },
  { q: "Is it cheaper to rebuild or replace an engine?", a: "It depends on the damage. A rebuild can be cheaper when problems are limited, while a used replacement may cost less when damage is extensive. We explain both options so you can compare them clearly." },
  { q: "How do I know which engine fits my Range Rover?", a: "The correct engine depends on your model, year, fuel type and engine code, not just engine size. Share your registration or VIN, and we will help confirm a compatible unit before you order." },
  { q: "Is a used engine worth it on an older Range Rover?", a: "It depends on the vehicle's value, overall condition and how long you plan to keep it. A used engine is often the most cost-conscious option, and we will advise honestly if it may not be worthwhile." },
  { q: "What details should I send with my enquiry?", a: "Please send your registration number, model, year and a short description of the engine problem. Any diagnostic results, warning messages or garage reports also help us recommend a suitable replacement engine." },
];

export const usedHero = {
  ...supplyFitHeroData,
  badgeText: "Used Range Rover Engine Supply",
  titleSpan1: "Reconditioned",
  titleSpan2: "Range Rover Engines",
  description: "Find a used Range Rover engine for sale matched to your model and engine code. We explain your options clearly, so you can compare cost, condition and fitting before deciding.",
  phone: { display: "01708 592377", href: "tel:+441708592377" },
  whatsapp: { number: "447477733313", href: "https://wa.me/447477733313" },
  features: [
    { icon: "+", label: "Engine Code Matching" },
    { icon: "+", label: "Supply or Fit" },
    { icon: "+", label: "Vehicle-Specific Quotes" },
  ],
  stats: [],
};

export const usedPageData = {
  buyingGuide: {
    eyebrow: "Compare Your Options",
    title: "Is It Cheaper to Rebuild or Replace an Engine?",
    description: "The answer depends on the damage, engine type and vehicle value. Compare the main routes below before deciding.",
    subtitle: "Review our verified tiers below to find the correct fit for your Land Rover or Range Rover.",
    cards: [
      {
        tier: "Tier 01",
        badge: "Fix Existing Engine",
        title: "Engine Rebuild",
        description: "Rebuilding repairs your current engine internally. It can make sense when damage is limited and the block is sound.",
        features: ["Keeps your original engine in place", "Cost depends on parts and labour", "Requires inspection before an accurate quote"],
        linkLabel: "Discuss Rebuild",
        href: "/engines",
        highlighted: false,
        recommendation: "",
      },
      {
        tier: "Tier 02",
        badge: "Lower Upfront Cost",
        title: "Used Engine",
        description: "A used Range Rover engine from another vehicle, supplied in its existing condition and often the most affordable replacement.",
        features: ["Usually the most budget-friendly route", "Matched to your engine code", "Internal condition can be less certain"],
        linkLabel: "Get a Quote",
        href: "/get-quote",
        highlighted: true,
        recommendation: "Most popular choice",
      },
      {
        tier: "Tier 03",
        badge: "Rebuilt Unit Supplied",
        title: "Reconditioned Engine",
        description: "A replacement engine that has been stripped, inspected and rebuilt before supply, offering more certainty than an untouched used unit.",
        features: ["Rebuilt and inspected before supply", "Usually costs more than used", "Usually less costly than new"],
        linkLabel: "Compare Reconditioned",
        href: "/services/engine-rebuild",
        highlighted: false,
        recommendation: "",
      },
    ],
  },
  overview: {
    catalogueHref: "/engines",
    imageSrc: "/images/service/engine_rebuild/engine_rebuild 2.webp",
    imageAlt: "Dismantled engine block on a workshop stand with the cylinder head removed",
    eyebrow: "Used Engines Explained",
    title: "What Is a Used Engine?",
    paragraphs: [
      "A used Range Rover engine is a complete unit taken from another vehicle, often one that has been written off or dismantled. It is supplied in its existing condition rather than rebuilt, which usually makes it a lower-cost replacement option.",
      "A reconditioned engine has been stripped, inspected and rebuilt, with worn parts replaced where needed. A used engine has not had this work, so its internal condition is less certain, but it is often cheaper to buy.",
      "A used engine may suit vehicles where budget matters most. Before enquiring, have your registration, engine code and any diagnostic findings ready, so the replacement can be matched correctly to your Range Rover.",
    ],
    catalogueLabel: "Compare engine options below →",
  },
  optionsSection: {
    quoteHref: "/get-quote",
    helpHref: "/contact",
    rangeRoverHref: "/engines/range-rover",
    landRoverHref: "/engines/land-rover",
    eyebrow: "Used Engines by Model",
    title: "Find a Range Rover Engine for Sale",
    description: "Explore used engine options for popular Range Rover models. Every enquiry is checked against your vehicle details before a unit is recommended.",
    cardEyebrow: "Full-Size Range Rover",
    quoteLabel: "Request a Quote",
    helpTitle: "Not sure which engine?",
    helpDescription: "Send us your vehicle details and we will help identify the right engine for your Range Rover.",
    helpLabel: "Speak to Us",
    brandPrefix: "Browse by brand: ",
    rangeRoverLabel: "Range Rover engines",
    brandSeparator: " or ",
    landRoverLabel: "Land Rover engines",
    brandSuffix: ".",
    items: usedOptions,
  },
  supplyOptions: {
    title: "Range Rover Engine for Sale: Supply or Fit",
    description: "Choose the service that suits you, whether you have a mechanic or need us to fit it.",
    cards: [
      {
        eyebrow: "Engine Only",
        title: "Supply Only Service",
        description: "If you have your own trusted mechanic, we can source a used Range Rover engine matched to your vehicle. We confirm the engine code with you first to reduce compatibility issues.",
        details: "",
        linkLabel: "Request Supply Quote",
        href: "/get-quote",
        highlighted: false,
      },
      {
        eyebrow: "Complete Service",
        title: "Supply and Fit",
        description: "For a complete solution, we can supply the engine and handle the fitting. Keeping sourcing, installation and checks in one place can make the process simpler to manage.",
        details: "Before work begins, we explain what is included in the quote. If further faults are found during fitting, we will discuss them with you before proceeding.",
        linkLabel: "Book Supply and Fit",
        href: "/supply-fit",
        highlighted: true,
      },
    ],
  },
  contact: {
    phoneHref: "tel:+441708592377",
    whatsappHref: "https://wa.me/447477733313",
    quoteHref: "/get-quote",
    contactHref: "/contact",
    title: "Need a Range Rover Engine for Sale?",
    description: "Tell us about your vehicle and engine problem, and we will help you compare used, reconditioned and rebuild options with confidence.",
    phoneLabel: "Call us on 01708 592377",
    whatsappLabel: "WhatsApp us on 07477 733313",
    externalLinkLabel: " (opens in a new tab)",
    quoteLabel: "Get a Quote",
    contactLabel: "WhatsApp Us",
  },
  heroSection: {
    formTitle: "Get Your Engine Quote",
    submitLabel: "Request a Quote",
    quoteHref: "/get-quote",
    compatibilityHref: "/contact",
    titleStart: "Range Rover Engine for ",
    titleHighlight: "Sale and Fitting",
    quoteLabel: "Get a Quote",
    compatibilityLabel: "Check Engine Compatibility",
    hero: usedHero,
  },
  gallery: {
    title: "Engine Expertise You Can Trust",
    subtitle: "A closer look at engine work in our workshop. View more photographs in our gallery.",
    linkHref: "/gallery",
    linkLabel: "View Workshop Gallery",
    images: getServiceImages("engine-rebuild"),
  },
  metadata: {"title": "Used Range Rover Engines | Supply & Fitting Enquiries", "description": "Explore reconditioned Range Rover and Land Rover engine options. Enquire about compatibility, engine supply, fitting and warranty terms for your vehicle.", "canonical": "/reconditioned-engine"},
  workflow: {
    title: "How Engine Replacement Works",
    description: "From your first enquiry to final checks, here is what to expect at each stage.",
    steps: usedSteps,
  },
  faq: {
    accordionName: "reconditioned-engines-faq",
    title: "Used Engine Questions Answered",
    description: "Answers to common questions about buying, replacing and rebuilding a Range Rover engine.",
    faqs: usedFaqs,
  },
  trust: usedTrust,
  benefits: usedBenefits,
};
