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
      <div className="lg:flex xl:h-screen">
        <div className="w-3/5  mx-auto  lg:flex xl:flex-row lg:flex-col mt-36">
          <div className="w-full p-8">
            <div className="w-1/2">
              <HeroCardTitle
                heading="Rekruttering & bemanning"
                headingSize="text-headline"
                subtitle="Profesjonell samarbeidspartner i ansettelser, headhunting og innleie"
                subtitleSize="text-subHeadline"
              />
            </div>
            <div className="mt-24">
              <CTAButtons widthOne="170px" widtTwo="170px" />
            </div>
          </div>

          <ImagesInSaquares />
        </div>
      </div>

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
