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
  OurSubjectArea,
} from "./components/index";

export default function Home() {
  const pathname = usePathname();
  return (
    <main>
      {/* Hero section with text and images */}
      <div className="md:h-screen h-auto">
        <div className="md:max-w-7xl md:pl-0 mx-auto align-center  flex xl:flex-row flex-col xl:mt-36 mt-12 flex-wrap">
          <div className="order-first flex-1 xxl:w-1/2 md:w-full flex flex-col">
            <HeroCardTitle
              heading="Rekruttering & bemanning"
              headingSize="md:text-headline text-mobileHeadline lg:pl-0 pl-12"
              subtitle="Profesjonell samarbeidspartner i ansettelser, headhunting og innleie"
              subtitleSize="md:text-subHeadline text-mobileSubheadline  lg:pl-0 pl-12"
            />
          </div>
          <div className="w-1/2  flex-1 xl:mt-12 xl:mb-0 mb-36 mt-12 order-2 justify-evenly lg:pl-0 pl-20 flex ">
            <ImagesInSaquares />
          </div>
          <div className="gap-2 xl:mt-12 lg:w-full md:flex md:mt-96 mt-24 order-3 xl:ml-0  xl:justify-start justify-evenly items-center  flex-row  flex wrap">
            <Link href="/applicants">
              <button className="button">For jobbsøkere</button>
            </Link>
            <Link href="/services">
              <button className="button light-background kf-border-dark dark">
                For bedrifter
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Tilbakemeldinger fra våre kunder */}
      <div className="relative">
        <CustomerFeedback />
        <OurSubjectArea />
      </div>

      {/* Som partner med jobbkrester */}
      <JobbkretserPartner />

      {/* Samarbeidspartnere og sertifiseringer */}
      <PartnersAndSertifications />
      <Statistics />
      <PageTitle
        className="md:text-headline1 text-mobileHeadline1"
        title="Vi strekker oss lenger for å gi deg det du trenger!"
        textColor="text-text-flat md:px-0 px-4 "
      />

      {/* Bottom buttons */}
      <div className="flex justify-center items-center gap-4 py-12">
        <Link href="/applicants">
          <button className="button">For jobbsøkere</button>
        </Link>
        <Link href="/services">
          <button className="button light-background kf-border-dark dark">
            For bedrifter
          </button>
        </Link>
      </div>
    </main>
  );
}
