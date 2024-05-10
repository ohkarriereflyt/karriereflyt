import Link from 'next/link';
import { Footer, EmployeeGrid, TransitionLine } from '../../components/index';
import { client } from '../../sanity';

import {
  OurHistorySection,
  OurVisionSection,
  Banner
} from "../../components/index";

const EVENTS_QUERY = `*[_type == "about"][0]{
  mainTitle,
  mainSectionText,
  'mainimg': mainSectionImage.asset->url,
  ourVisionTitle,
  ourVisionText,
  'visionimg': visionImage.asset->url,
  employeesTitle,
  'employees': employees[]->{
    name,
    jobTitle,
    emailText,
    phoneNumber,
    'img': employeeImage.asset->url
  }
}`;

export default async function Page() {
  
    console.log("Sanity client:", client);
  if (!client) {
      throw new Error("Sanity client is not initialized");
  }
  const events = await client.fetch(EVENTS_QUERY);
  console.log(events);
  return (
      <div>
        <Banner/>
        <OurHistorySection title = {events.mainTitle} text = {events.mainSectionText} img = {events.mainimg}/>
        <OurVisionSection title = {events.ourVisionTitle} text = {events.ourVisionText} img = {events.visionimg}/>
        <div className="bg-slate-gray-flat w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-center light mb-8">{events.employeesTitle}</h1>
            <div className="w-full mb-8">
              <EmployeeGrid employees={events.employees} backgroundColor='gray' foregroundColor='dark' border='dark' />
            </div>
            <div className='flex justify-center'>
              <Link href="/contact">
                <button className="button">Kontakt oss</button>
              </Link>
              <TransitionLine />
            </div>
          </div>
        </div>
        <Footer transitionLine={false}/>
      </div>
  );
}
