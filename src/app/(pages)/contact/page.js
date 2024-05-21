import { EmployeeGrid, ContactForm, ContactInfo, Footer, TransitionLine } from "../../components/index";
import dynamic from 'next/dynamic';
import { client } from '../../sanity';

const EVENTS_QUERY = `*[_type == "contact"][0]{
  mainTitle,
  mainSubTitle,
  contactAddress,
  contactPhoneNumber,
  contactEmail,
  'employees': employees[]->{
    name,
    jobTitle,
    emailText,
    phoneNumber,
    'img': employeeImage.asset->url,
    facebook,
    linkedin,
    bioShort,
    bio,
    keywords,
  }
}`;

const LocationWithNoSSR = dynamic(() => import('../../components/Location'), {
  ssr: false,
});

export default async function Page() {
  if (!client) {
    throw new Error("Sanity client is not initialized");
  }
  const events = await client.fetch(EVENTS_QUERY);

  return (
    <div className="mx-auto w-full backdrop-blur-xl pt-4 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 md:mb-16 mb-6" >
        <h1 className="headline justify-center text-center">{events.mainTitle}</h1>
        <h2 className="subheadline justify-center text-center pb-4">{events.mainSubTitle}</h2>
        <EmployeeGrid employees={events.employees} />
      </div>
      <div className="mb-[-2px]">
        <TransitionLine />
      </div>
      <div className="bg-slate-gray-flat w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 p-6 flex md:flex-row-reverse flex-col gap-8">
          <div className="w-full">
            <ContactInfo address={events.contactAddress} phoneNumber={events.contactPhoneNumber} email={events.contactEmail} />
            <LocationWithNoSSR address={events.contactAddress} />
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer transitionLine={false} />
    </div>
  );
}