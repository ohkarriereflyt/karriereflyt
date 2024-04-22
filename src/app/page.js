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
  WavesBackground,
} from "./components/index";

export default function Home() {
  const pathname = usePathname();
  return (
    <main>
      {/* Hero section with text and images */}
      <div className="h-screen">
        <div className="w-3/5 mx-auto justify-items-center flex xl:flex-row flex-col mt-36 flex-wrap">
          <div className="order-first flex-1 xxl:w-1/2 w-full">
            <HeroCardTitle
              heading="Rekruttering & bemanning"
              headingSize="text-headline"
              subtitle="Profesjonell samarbeidspartner i ansettelser, headhunting og innleie"
              subtitleSize="text-subHeadline"
            />
          </div>
          <div className="xl:w-full flex-1 w-full xl:mt-12 xl:mb-0 mb-48 mt-12 order-2 ">
            <ImagesInSaquares />
          </div>
          <div className="xl:mt-12 mt-96 order-3 w-full xl:ml-0 ml-36 lg:mb-0 mb-12 flex gap-4">
            <>
              <Link href="/applicants">
                <button>For jobbsøkere</button>
              </Link>
              <Link href="/services">
                <button className="bg-3 kf-border-dark text-text-flat">For bedrifter</button>
              </Link>
            </>
          </div>
        </div>
      </div>

      {/* Tilbakemeldinger fra våre kunder */}
      <div class="relative">
        <WavesBackground />

        <CustomerFeedback />
        <OurSubjectArea />
      </div>

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
      <div className="flex justify-center items-center gap-4 py-12">
        <>
          <Link href="/applicants">
            <button>For jobbsøkere</button>
          </Link>
          <Link href="/services">
            <button className="bg-3 kf-border-dark text-text-flat">For bedrifter</button>
          </Link>
        </>
      </div>
      <Footer />
    </main>
  );
}
