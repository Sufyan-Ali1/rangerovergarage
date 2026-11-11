import "server-only";
import fs from "node:fs";
import path from "node:path";
import evoqueSpecifications from "./RangeRower/models/evoquecode/204DTA.json";
import defaultSpecifications from "./defaultSpecifications.json";
import { getModelsByBrandSlug, toModelSlug } from "@/app/data/models";

const brandFolders: Record<string, string> = {
  "range-rover": "RangeRower",
  "land-rover": "LandRower",
  "jaguar": "Jaguar",
};

type Specifications = typeof defaultSpecifications & {
  header?: typeof evoqueSpecifications.header;
  faq: typeof defaultSpecifications.faq & { title?: string };
  compatibilityFitting: typeof defaultSpecifications.compatibilityFitting & {
    title?: string;
  };
};

export function getEngineSpecifications(
  brand: string,
  model: string,
  engineCode: string,
): Specifications {
  const folder = brandFolders[brand];
  const knownModel = getModelsByBrandSlug(brand).some(
    (entry) => toModelSlug(entry.model) === model,
  );
  const code = engineCode.toUpperCase();

  if (!folder || !knownModel || !/^[A-Z0-9 .-]+$/.test(code)) {
    return defaultSpecifications;
  }

  // Each model can supply a separate JSON file for each engine code.
  const filePath = path.join(
    process.cwd(),
    "app/data/engines/brands",
    folder,
    "models",
    `${model.replace(/-/g, "")}code`,
    `${code}.json`,
  );

  if (!fs.existsSync(filePath)) return defaultSpecifications;

  const data: Specifications | { template: string } = JSON.parse(
    fs.readFileSync(filePath, "utf8"),
  );

  // Preserve the shared template independently of Evoque's model-specific copy.
  return "template" in data ? defaultSpecifications : data;
}
