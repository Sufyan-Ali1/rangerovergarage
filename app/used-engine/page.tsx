import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { connection } from "next/server";
import { usedPageData } from "../data/engines/used";

const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
const FAQ = dynamic(() => import("../components/FAQ"));
const SupplyFitPrecision = dynamic(() => import("../components/SupplyFitPrecision"));
const SupplyFitWorkflow = dynamic(() => import("../components/SupplyFitWorkflow"));
const ReconditionedOverview = dynamic(() => import("../components/reconditioned/ReconditionedOverview"));
const ReconditionedOptions = dynamic(() => import("../components/reconditioned/ReconditionedOptions"));
const ReconditionedSupplyOptions = dynamic(() => import("../components/reconditioned/ReconditionedSupplyOptions"));
const ReconditionedContact = dynamic(() => import("../components/reconditioned/ReconditionedContact"));
const ReconditionedHero = dynamic(() => import("../components/reconditioned/ReconditionedHero"));
const ReconditionedGallery = dynamic(() => import("../components/reconditioned/ReconditionedGallery"));
const ReconditionedBuyingGuide = dynamic(() => import("../components/reconditioned/ReconditionedBuyingGuide"));

const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: usedPageData.metadata.title,
  description: usedPageData.metadata.description,
  alternates: { canonical: usedPageData.metadata.canonical },
};

export default async function UsedEnginesPage() {
  await connection();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <ReconditionedHero data={usedPageData.heroSection} />

        <ReconditionedOverview data={usedPageData.overview} />

        <SupplyFitPrecision data={usedPageData.trust} compact />

        <ReconditionedOptions data={usedPageData.optionsSection} />
        <ReconditionedBuyingGuide data={usedPageData.buyingGuide} />
        <SupplyFitPrecision data={usedPageData.benefits} columns={2} />
        <SupplyFitWorkflow
          title={usedPageData.workflow.title}
          description={usedPageData.workflow.description}
          steps={usedPageData.workflow.steps}
        />

        <ReconditionedSupplyOptions data={usedPageData.supplyOptions} />

        <ReconditionedGallery data={usedPageData.gallery} />

        

        <FAQ
          faqs={usedPageData.faq.faqs}
          accordionName={usedPageData.faq.accordionName}
          title={usedPageData.faq.title}
          description={usedPageData.faq.description}
        />

        <ReconditionedContact data={usedPageData.contact} />
      </main>
      <Footer />
    </div>
  );
}
