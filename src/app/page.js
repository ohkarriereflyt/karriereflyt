"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

//Componentsimport
import CtaButtons from "./components/CTAbuttons";
import HeroCardImages from "./components/HeroCardImages";
import HeroCardTitle from "./components/HeroCardTitle";
import CustomerFeedback from "./components/CustomerFeedback";
import JobbkretserPartner from "./components/JobbkretserPartner";
import PartnersAndSertifications from "./components/PartnersAndSertifications";
import ImagesInSaquares from "./components/ImagesInSquares";
import Statistics from "./components/Statistics";
import PageTitle from "./components/PageTitle";
import Footer from "./components/Footer";

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
              <CtaButtons />
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
      <PageTitle title="Vi hjelper deg med dine behov" />

      {/* Bottom buttons */}
      <div className="flex justify-center items-center space-x-4 mx-60 py-12">
        <CtaButtons widthOne="15%" widthTwo="15%" />
      </div>
      <Footer />
    </main>
  );
}
