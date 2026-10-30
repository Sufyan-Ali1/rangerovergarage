export interface Model {
  image?: string;
  brand: string;
  model: string;
  service: string;
  desc: string;
}

export const rangeRoverModels: Model[] = [
  {
    brand: "RANGE ROVER",
    model: "EVOQUE",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Reconditioned and replacement engine options for every Evoque generation, covering both petrol and diesel variants.",
  },
  {
    brand: "RANGE ROVER",
    model: "SPORT",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Rebuild and replacement engines for the Range Rover Sport, matched precisely to diesel, petrol or hybrid specification.",
  },
  {
    brand: "RANGE ROVER",
    model: "VOGUE OLD MK-3",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Specialist engine sourcing and rebuild work for the L322 Vogue, tackling age-related wear with proven expertise..",
  },
  {
    brand: "RANGE ROVER",
    model: "VOGUE NEW MK-4",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Modern engine supply and rebuild solutions for the L405 Vogue, tested against strict factory tolerances throughout. ",
  },
  {
    brand: "RANGE ROVER",
    model: "VELAR",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "Reconditioned engine supply and rebuild services for the Velar, restoring smooth, dependable everyday performance reliably. ",
  },
  {
    brand: "RANGE ROVER",
    model: "SPORT SVR",
    service: "ENGINE REBUILD & REPLACEMENT",
    desc: "High-performance engine rebuild and replacement for the SVR, engineered to restore power without cutting corners. ",
  },
];

export const landRoverModels: Model[] = [
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 1",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reconditioned and replacement engines for the original Discovery, sourced and tested to handle its classic diesel and V8 units.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 2",
    service: "ENGINE SUPPLY & FIT",
    desc: "Engine supply and rebuild work for Discovery 2, covering Td5 diesel and V8 petrol variants with genuine care.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 3",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reconditioned engine sourcing for Discovery 3, matched precisely to TDV6 and other factory-fitted engine specifications available.",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 4",
    service: "ENGINE SUPPLY & FIT",
    desc: "Rebuild and replacement engines for Discovery 4, addressing SDV6 and TDV6 platforms with tested, warrantied units. ",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY 5",
    service: "ENGINE SUPPLY & FIT",
    desc: "Modern engine supply and fitting for Discovery 5, covering Ingenium diesel platforms to strict testing standards. ",
  },
  {
    brand: "LAND ROVER",
    model: "DISCOVERY SPORT",
    service: "ENGINE SUPPLY & FIT",
    desc: "Reconditioned engine solutions for Discovery Sport, matched to its specific Ingenium diesel and petrol variants.",
  },
  {
    brand: "LAND ROVER",
    model: "FREELANDER 1",
    service: "ENGINE SUPPLY & FIT",
    desc: "Specialist engine sourcing for the Freelander 1, covering K-series and diesel units with proven rebuild expertise.",
  },
  {
    brand: "LAND ROVER",
    model: "FREELANDER 2",
    service: "ENGINE SUPPLY & FIT",
    desc: "Engine supply and rebuild services for Freelander 2, addressing TD4 diesel platforms with genuine tested parts. ",
  },
];

export const jaguarModels: Model[] = [
  {
    "brand": "JAGUAR",
    "model": "E-PACE",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar E-Pace engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "F-PACE",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar F-Pace engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "F-TYPE COUPE",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar F-Type Coupe engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XE",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XE engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XF",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XF engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XF SPORTBRAKE",
    "image": "/images/models/xf-sportbrake-e4d028ff27.webp",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XF Sportbrake engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XJ",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XJ engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XK",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XK engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XKR",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XKR engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "XKR-S",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Specialist Jaguar XKR-S engine rebuild, repair and replacement. Browse engine codes and specifications to find the right engine for your vehicle."
  },
  {
    "brand": "JAGUAR",
    "model": "F-TYPE",
    "service": "ENGINE REBUILD & REPLACEMENT",
    "desc": "Jaguar F-Type engine rebuild and replacement. Browse engine codes and confirm compatibility with our specialists."
  }
];

export const allBrandModels: Model[] = [
  ...rangeRoverModels,
  ...landRoverModels,
  ...jaguarModels,
];

export function toBrandSlug(brand: string) {
  return brand.toLowerCase().replace(/ /g, "-");
}

export function toModelSlug(model: string) {
  return model.toLowerCase().replace(/ /g, "-");
}

export function getModelsByBrandSlug(slug: string): Model[] {
  return allBrandModels.filter((m) => toBrandSlug(m.brand) === slug);
}
