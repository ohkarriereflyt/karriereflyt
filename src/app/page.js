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
        <div className="w-3/5 mx-auto align-center flex xl:flex-row flex-col mt-36 flex-wrap">
          <div className="order-first flex-1 xxl:w-1/2 w-full">
            <HeroCardTitle
              heading="Rekruttering & bemanning"
              headingSize="text-headline"
              subtitle="Profesjonell samarbeidspartner i ansettelser, headhunting og innleie"
              subtitleSize="text-subHeadline"
            />
          </div>
          <div className="relative xl:w-full flex-1 w-full xl:mt-12 xl:mb-0 m-12 order-2">
            <ImagesInSaquares />
          </div>

          <div className="w-full order-3 flex gap-4 py-12">
              <Link href="/applicants">
                <button className="button md:w-48">For jobbsøkere</button>
              </Link>
              <Link href="/services">
                <button className="button light-background kf-border-dark dark">For bedrifter</button>
              </Link>
          </div>
        </div>
      </div>

      {/* Tilbakemeldinger fra våre kunder */}
      <div className="relative">
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
        textColor="text-text-flat-inverted"
      />

      {/* Bottom buttons */}
      <div className="flex justify-center items-center gap-4 py-12">
          <Link href="/applicants">
            <button className="button">For jobbsøkere</button>
          </Link>
          <Link href="/services">
            <button className="button light-background kf-border-dark dark">For bedrifter</button>
          </Link>
      </div>
      <Footer />
    </main>
  );
}
