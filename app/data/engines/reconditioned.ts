import { getServiceImages } from "../serviceImages";
import { supplyFitHeroData } from "../supplyFit/SupplyFitHeroData";
import type { Faq } from "../faqs";
import type { SupplyFitPrecisionData } from "../types";
import type { ProcessStep } from "../supplyFit/ProcessSteps";

export const reconditionedTrust: SupplyFitPrecisionData = {
  eyebrow: "Before you commit",
  title: "Support with Your Engine Enquiry",
  description: "",
  features: [
    { icon: "tested", title: "Inspected Before Supply", description: "Reconditioned units are checked before supply to support dependable performance." },
    { icon: "warranty", title: "Cover Terms Explained", description: "Ask us about any warranty terms before you place an order." },
    { icon: "specialist", title: "Compatibility Assistance", description: "Share your registration and we help confirm the correct engine code." },
    { icon: "collection", title: "Supply and Fitting", description: "Choose supply only or supply and fit, depending on your needs." },
  ],
};

// These are catalogue enquiry categories, not a live inventory or a fitment guarantee.
export const reconditionedOptions = [
  {
    "id": "01",
    "cardEyebrow": "Full-Size Range Rover",
    "label": "Reconditioned Range Rover Engines",
    "description": "Reconditioned Range Rover engines for the full-size model, rebuilt and inspected before supply. We match the unit to your vehicle's engine code and specification.",
    "href": "/engines/range-rover",
    "linkLabel": "View full-size engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Enquire Now",
  },
  {
    "id": "02",
    "cardEyebrow": "Range Rover Sport",
    "label": "Range Rover Sport Engines",
    "description": "Looking for a reconditioned Range Rover Sport engine or a used Range Rover Sport engine for sale? Tell us your model year and engine code to check options.",
    "href": "/engines/range-rover/sport",
    "linkLabel": "Explore Sport engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Get a Quote",
  },
  {
    "id": "03",
    "cardEyebrow": "Range Rover Evoque",
    "label": "Evoque Replacement Engines",
    "description": "We can help source a reconditioned Range Rover Evoque engine or a second hand Range Rover Evoque engine, depending on your budget and the vehicle's condition.",
    "href": "/engines/range-rover/evoque",
    "linkLabel": "See Evoque engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Enquire Now",
  },
  {
    "id": "04",
    "cardEyebrow": "Range Rover Velar",
    "label": "Velar Engine Replacement",
    "description": "A reconditioned Range Rover Velar engine can be a practical alternative to a new unit. Share your registration so we can confirm the correct engine variant.",
    "href": "/engines/range-rover/velar",
    "linkLabel": "Check Velar engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Get a Quote",
  },
  {
    "id": "05",
    "cardEyebrow": "Used and Second Hand",
    "label": "Used Range Rover Engines",
    "description": "Prefer a lower-cost route? We can discuss a used Range Rover engine for sale or a second hand Range Rover engine, with an honest view of the trade-offs.",
    "href": "/engines/range-rover",
    "linkLabel": "Learn about used engine options →",
    "quoteHref": "/get-quote",
    "quoteLabel": "Ask Us",
  },
];

export const reconditionedBenefits: SupplyFitPrecisionData = {
  eyebrow: "Why Choose Us",
  title: "Why Owners Choose Our Engine Service",
  description: "We focus on Range Rover engines and give clear, practical guidance at every stage.",
  features: [
    { icon: "ancillaries", title: "Range Rover Focused Knowledge", description: "Our work centres on Range Rover vehicles, from Evoque to full-size models." },
    { icon: "tested", title: "Correct Engine Matching", description: "We check engine codes and specifications to help avoid ordering the wrong unit." },
    { icon: "pricing", title: "Clear, Honest Communication", description: "We explain your options plainly, including when an engine may not be worthwhile." },
    { icon: "collection", title: "Flexible Service Options", description: "Choose supply only or a full supply and fit service." },
  ],
};

export const reconditioningSteps: ProcessStep[] = [
  { number: "01", title: "Send Enquiry", description: "Share your registration, model and details of the engine problem." },
  { number: "02", title: "Vehicle Check", description: "We review your details and confirm the correct engine code." },
  { number: "03", title: "Options Explained", description: "We outline suitable reconditioned, used or repair routes for you." },
  { number: "04", title: "Clear Quote", description: "You receive a quote to review before anything goes ahead." },
  { number: "05", title: "Supply or Fitting", description: "The engine is supplied or fitted, depending on your chosen service." },
  { number: "06", title: "Final Checks", description: "Fitted engines are checked and tested before the vehicle is returned." },
];

export const reconditionedFaqs: Faq[] = [
  { q: "Is a reconditioned engine better than a used one?", a: "Not always, but it usually offers more certainty. A reconditioned engine has been rebuilt and inspected, while a used engine is supplied as found. The right choice depends on your budget, vehicle value and plans." },
  { q: "Do you have reconditioned Range Rover engines for sale?", a: "We can help source reconditioned Range Rover engines for full-size, Sport, Evoque and Velar models. Availability depends on your exact engine code and specification, so send your registration and we will check suitable options for your vehicle." },
  { q: "How do I know which engine fits my vehicle?", a: "The correct replacement depends on your model, year, fuel type and engine code, not just the engine size. Share your registration or VIN, and we will help confirm which Range Rover engine matches your vehicle before you order." },
  { q: "Can you supply a second hand Range Rover engine for sale?", a: "Yes, we can discuss a second hand Range Rover engine if it suits your budget. A used unit usually costs less, but its condition is less certain, so we explain the trade-offs compared with a reconditioned engine." },
  { q: "Is replacing the engine worth it on an older Range Rover?", a: "It depends on the vehicle’s value, overall condition and how long you plan to keep it. A reconditioned Range Rover engine may be worthwhile in some cases, and we will tell you honestly if it may not be." },
  { q: "Do you fit engines for Evoque, Sport and Velar?", a: "We offer supply only or supply and fit for Range Rover Evoque, Sport and Velar models, as well as the full-size Range Rover. Contact us with your vehicle details to confirm the right engine and fitting arrangements." },
  { q: "What details should I send with my enquiry?", a: "Please send your registration number, model, year and a short description of the engine problem. Any recent diagnostic results, warning messages or garage reports also help us understand the issue and recommend suitable engine options." },
];

export const reconditionedHero = {
  ...supplyFitHeroData,
  badgeText: "Range Rover Engine Specialists",
  titleSpan1: "Reconditioned",
  titleSpan2: "Range Rover Engines",
  description: "Get a reconditioned Range Rover engine matched to your model, engine code and budget. We explain the options clearly, from reconditioned to used units, so you can make an informed choice before committing.",
  phone: { display: "01708 592377", href: "tel:+441708592377" },
  whatsapp: { number: "447477733313", href: "https://wa.me/447477733313" },
  features: [
    { icon: "+", label: "Engine Compatibility Checks" },
    { icon: "+", label: "Supply and Fit Options" },
    { icon: "+", label: "Vehicle-Specific Quotes" },
  ],
  stats: [],
};

export const reconditionedPageData = {
  buyingGuide: {
    eyebrow: "Compare Your Options",
    title: "Used, Reconditioned or Repair: Which Suits You?",
    description: "Each route has different costs and levels of certainty. Compare the main options below, then speak to us about your vehicle.",
    subtitle: "Review our verified tiers below to find the correct fit for your Land Rover or Range Rover.",
    cards: [
      {
        tier: "Tier 01",
        badge: "Lower Upfront Cost",
        title: "Used Engine",
        description: "A used Range Rover engine taken from another vehicle and supplied in its existing condition, often at a lower price.",
        features: ["Usually the most budget-friendly route", "Internal condition can be less certain", "Mileage and history vary by unit"],
        linkLabel: "Ask About Used",
        href: "/engines",
        highlighted: false,
        recommendation: "",
      },
      {
        tier: "Tier 02",
        badge: "Balanced Middle Option",
        title: "Reconditioned Engine",
        description: "A refurbished Range Rover engine that has been stripped, inspected and rebuilt, with worn parts replaced where needed.",
        features: ["Rebuilt and inspected before supply", "Greater confidence than an untouched unit", "Usually less costly than a new engine"],
        linkLabel: "Get a Quote",
        href: "/get-quote",
        highlighted: true,
        recommendation: "Most popular choice",
      },
      {
        tier: "Tier 03",
        badge: "Fix Existing Engine",
        title: "Engine Repair",
        description: "Repairing your current engine may be possible when damage is limited. Suitability depends on inspection and diagnosis.",
        features: ["Keeps your original engine in place", "Depends on the extent of damage", "Requires proper inspection before quoting"],
        linkLabel: "Discuss Repair",
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
    eyebrow: "Engine Options Explained",
    title: "What Is a Reconditioned Engine?",
    paragraphs: [
      "A reconditioned Range Rover engine is a previously used unit that has been stripped, inspected and rebuilt. Worn or damaged parts are typically replaced, and key components are measured against specification. The aim is to return the engine to dependable working condition for your vehicle.",
      "A used Range Rover engine, by contrast, is usually removed from another vehicle and supplied as found. It may run well, but its internal condition is less certain. A reconditioned unit has had more work done, which often affects price and confidence.",
      "Whether a replacement engine suits your vehicle depends on its age, value and overall condition. Before enquiring, have your registration, engine code and any recent diagnostic findings ready so we can advise properly.",
    ],
    catalogueLabel: "Compare engine options below →",
  },
  optionsSection: {
    quoteHref: "/get-quote",
    helpHref: "/contact",
    rangeRoverHref: "/engines/range-rover",
    landRoverHref: "/engines/land-rover",
    eyebrow: "Engines by Model Range",
    title: "Choose Your Range Rover Reconditioned Engine Option",
    description: "Explore replacement engine options across popular Range Rover models. Each enquiry is checked against your vehicle details before we recommend a unit.",
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
    items: reconditionedOptions,
  },
  supplyOptions: {
    title: "Range Rover Reconditioned Engine Supply or Fitting",
    description: "Choose the service that suits you, whether you have a mechanic or need us to fit it.",
    cards: [
      {
        eyebrow: "Engine Only",
        title: "Supply Only Service",
        description: "If you have your own trusted mechanic, we can source a reconditioned Range Rover engine matched to your vehicle. We confirm the engine code with you first to reduce the risk of compatibility issues.",
        details: "",
        linkLabel: "Request Supply Quote",
        href: "/get-quote",
        highlighted: false,
      },
      {
        eyebrow: "Complete Service",
        title: "Supply and Fit",
        description: "For a complete solution, we can supply the engine and handle the fitting. This keeps sourcing, installation and checks in one place, which can make the process simpler to manage.",
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
    title: "Find the Right Engine for Your Range Rover",
    description: "Whether you drive a used Range Rover or a newer model, send us your details and we will talk you through suitable engine options.",
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
    titleStart: "Range Rover Reconditioned ",
    titleHighlight: "Engine Sourcing and Fitting",
    quoteLabel: "Get a Quote",
    compatibilityLabel: "Check Engine Compatibility",
    hero: reconditionedHero,
  },
  gallery: {
    title: "Engine Expertise You Can Trust",
    subtitle: "A closer look at engine work in our workshop. View more photographs in our gallery.",
    linkHref: "/gallery",
    linkLabel: "View Workshop Gallery",
    images: getServiceImages("engine-rebuild"),
  },
  metadata: {"title": "Range Rover Reconditioned Engine | Rebuilt & Inspected", "description": "Range Rover reconditioned engine, stripped, rebuilt and inspected before supply. Matched to your Sport, Evoque, Velar or full-size engine code.", "canonical": "/reconditioned-engine"},
  workflow: {
    title: "How Your Engine Replacement Works",
    description: "From first enquiry to final checks, here is what to expect when replacing your engine.",
    steps: reconditioningSteps,
  },
  faq: {
    accordionName: "reconditioned-engines-faq",
    title: "Engine Questions Answered",
    description: "Common questions about reconditioned, used and second hand Range Rover engines, answered in plain terms.",
    faqs: reconditionedFaqs,
  },
  trust: reconditionedTrust,
  benefits: reconditionedBenefits,
};
