"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  CTAButtons,
  HeroCardTitle,
  CustomerFeedback,
  JobbkretserPartner,
  PartnersAndSertifications,
  ImagesInSaquares,
  Statistics,
  PageTitle,
  Footer,
} from "./components/index";

export default function Home() {
  const pathname = usePathname();
  return (
    <main>
      {/* Hero section with text and images */}
      <div className="flex justify-between items-center h-screen">
        <div className="w-3/5 mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-1/2 p-8">
              <HeroCardTitle
                heading="Rekruttering & bemanning"
                subtitle="Profesjonell samarbeidspartner i ansettelser, headhunting og innleie"
              />
              <CTAButtons />
            </div>
            <ImagesInSaquares />
          </div>
        </div>
      </div>

      {/* Content section at 60% */}

      {/* Tilbakemeldinger fra våre kunder */}
      <CustomerFeedback />

      {/* Som partner med jobbkrester */}
      <JobbkretserPartner />

      {/* Samarbeidspartnere og sertifiseringer */}
      <PartnersAndSertifications />
      <Statistics />
      <PageTitle
        className="text-headline1"
        title="Vi strekker oss lenger for å gi deg det du trenger!"
      />

      {/* Bottom buttons */}
      <div className="flex justify-center items-center space-x-4 mx-60 py-12">
        <CTAButtons widthOne="15%" widthTwo="15%" />
      </div>
      <Footer />
    </main>
  );
}
