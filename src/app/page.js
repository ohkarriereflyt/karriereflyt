import Link from "next/link";
import { client } from './sanity';
import {
  CustomerFeedback,
  JobbkretserPartner,
  PartnersAndSertifications,
  ImagesInSaquares,
  Statistics,
  Footer,
  OurSubjectArea,
  TransitionLine,
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
  // console.log(events);
  return (
    <main>
      <div className="max-w-7xl w-full mx-auto p-8 grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-end lg:mb-8">
          <h1 className="headline">{events.mainTitle}</h1>
          <h2 className="subheadline">{events.subTitle}</h2>
        </div>
        <div className="row-span-2">
          <ImagesInSaquares images={events.heroImages} />
        </div>
        <div className="flex gap-4 lg:justify-normal justify-center">
          <Link href="/applicants">
            <button className={`button`}>For jobbsøkere</button>
          </Link>
          <Link href="/services">
            <button className={`button light-background kf-border-dark dark`}>For bedrifter</button>
          </Link>
        </div>
      </div>

      <CustomerFeedback reviewsTitle={events.reviewsTitle} reviews={events.reviews} />
      <OurSubjectArea subjectAreasTitle={events.subjectAreasTitle} subjectAreaCont1Title={events.subjectAreasContainer1Title} subjectAreaCont1Items={events.container1Items} subjectAreaCont2Title={events.subjectAreasContainer2Title} subjectAreaCont2Items={events.container2Items} subjectAreaFooterText={events.subjectAreasFooterText} />
      <div className="background-blur">
        <JobbkretserPartner jobbkretserTitle={events.jobbkretserSectionTitle} jobbkretserContItems={events.jobbkretserContainerItems} jobbkretserImage={events.jobbkretserImage} jobbkretserReadMore={events.jobbkretserSectionReadMore} />
        <TransitionLine reverse />
        <PartnersAndSertifications PandSTitle={events.partnerCertificationSectionTitle} PandSImages={events.partnerCertificationSectionImages} />
        {/* <Statistics />*/}
        <h1 className="text-center">{events.bottomSectionTitle}</h1>
        <div className="flex justify-center items-center gap-4 py-8">
          <Link href="/applicants">
            <button className={`button`}>For jobbsøkere</button>
          </Link>
          <Link href="/services">
            <button className={`button light-background kf-border-dark dark`}>For bedrifter</button>
          </Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}