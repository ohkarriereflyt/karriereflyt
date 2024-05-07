import Link from "next/link";
import { client } from './sanity';
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

const EVENTS_QUERY = `*[_type == "homepage"][0]{
  mainTitle,
  subTitle,
  "heroImages": heroImages[].asset->url,
  reviewsTitle,
  "reviews": reviews[]->{
    author,
    textTitle,
    text,
    position,
    company,
    "reviewImage": authorImage.asset->url
  },
  subjectAreasTitle,
  subjectAreasContainer1Title,
  container1Items,
  subjectAreasContainer2Title,
  container2Items,
  subjectAreasFooterText,
  jobbkretserSectionTitle,
  jobbkretserContainerItems,
  "jobbkretserImage": jobbkretserImage.asset->url,
  jobbkretserSectionReadMore,
  partnerCertificationSectionTitle,
  "partnerCertificationSectionImages": partnerCertificationSectionImages[].asset->url,
  bottomSectionTitle
}`;

export default async function Home() {
  console.log("Sanity client:", client);
  if (!client) {
    throw new Error("Sanity client is not initialized");
  }
  const events = await client.fetch(EVENTS_QUERY);
  console.log(events);
  return (
    <main>
      <div className="md:h-screen h-auto px-4 md:pb-0 md:mb-36 ">
        <div className="md:max-w-7xl md:pl-0 mx-auto align-center flex xl:flex-row flex-col xl:mt-36 mt-12 flex-wrap">
          <div className="order-first flex-1 xxl:w-1/2 md:w-full 2xl:mb-0 md:mb-12 flex flex-col">
            <HeroCardTitle
              heading={events.mainTitle}
              headingSize="md:text-headline text-mobileHeadline lg:pl-0 pl-12"
              subtitle={events.subTitle}
              subtitleSize="md:text-subHeadline text-mobileSubheadline lg:pl-0 pl-12"
            />
          </div>
          <div className="flex-1 xl:mt-12 xl:mb-0 md:mb-96 mt-12 order-2 xl:pr-0 md:pr-48">
            <ImagesInSaquares images={events.heroImages}/>
          </div>
          <div className="xl:mt-12 lg:w-full flex md:mt-64 order-3 xl:ml-0 mb-24 xl:justify-start justify-evenly flex-wrap">
            <CTAButtons widthOne="md:w-48 w-36" widthTwo="md:w-48 w-36" />
          </div>
        </div>
      </div>

      <CustomerFeedback reviewsTitle= {events.reviewsTitle} reviews={events.reviews} />
      <OurSubjectArea subjectAreaTitle = {events.subjectAreaTitle} subjectAreaCont1Title = {events.subjectAreasContainer1Title}  subjectAreaCont1Items = {events.container1Items} subjectAreaCont2Title = {events.subjectAreasContainer2Title}  subjectAreaCont2Items = {events.container2Items} subjectAreaFooterText = {events.subjectAreasFooterText}/>
      <JobbkretserPartner jobbkretserTitle = {events.jobbkretserSectionTitle} jobbkretserContItems = {events.jobbkretserContainerItems} jobbkretserImage = {events.jobbkretserImage} jobbkretserReadMore = {events.jobbkretserSectionReadMore}/>
      <PartnersAndSertifications  PandSTitle = {events.partnerCertificationSectionTitle} PandSImages = {events.partnerCertificationSectionImages}/>
      <Statistics/>
      <PageTitle
        className="md:text-headline1 text-mobileHeadline1"
        title={events.bottomSectionTitle}
        textColor="text-text-flat md:px-0 px-4"
      />
      <div className="flex justify-center items-center gap-4 py-12">
        <Link href="/applicants">
          <button>For jobbsøkere</button>
        </Link>
        <Link href="/services">
          <button className="bg-3 kf-border-dark text-text-flat">
            For bedrifter
          </button>
        </Link>
      </div>
      <Footer/>
    </main>
  );
}