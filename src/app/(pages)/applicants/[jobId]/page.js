import "./page.css";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { SocialLinks } from "../../../components";
import { redirect } from "next/navigation";
import { fetchJobs } from "../../../../pages/api/jobPosts";
import noImage from "../../../images/no-image.png";

import Image from "next/image";

const apiKey = process.env.RECMAN_API_SECRET;

const jobTypeToNorwegian = {
  fullTime: "Fast",
  partTime: "Deltid",
};

fetchJobs();

export default async function Page({ params }) {
  const jobApiResponse = await fetchJobs();
  const jobApi = jobApiResponse.data
    ? Object.values(jobApiResponse.data).map((job) => {
        // Conditionally modify the 'position' field
        const position = job.position
          ? jobTypeToNorwegian[job.position] || job.position
          : "Not provided";

        return {
          id: job.jobPostId,
          name: job.name,
          title: job.title,
          ingress: job.ingress,
          body: job.body,
          numberOfPositions: job.numberOfPositions,
          logo: job.logo,
          deadline: job.deadline,
          postalCode: job.postalCode,
          city: job.city,
          applyUrl: job.applyUrl,
          companyName: job.companyName,
          workplace: job.workplace,
          position,
          positionType: job.positionType,
          address1: job.address1,
          contacts: job.contacts,
          skills: job.skills,
          accession: job.accession,
          branchCategoryId: job.branchCategoryId || "Not provided", // Default value if missing
          regionId: job.regionId || "Not provided",
        };
      })
    : [];

  const {
    title,
    logo,
    name,
    body,
    deadline,
    numberOfPositions,
    workplace,
    accession,
    position,
    sector,
    address1,
    contacts = [],
  } = jobApi.find((job) => job.id === params.jobId) || {};

  // jobApi.forEach((job, index) => {
  //     // console.log("Jobs" + job.title + "job.id: " + job.id + " === " + "params.jobID: " + params.jobId + " = " + (job.id === params.jobId))
  //     console.log("id: " + job.id)
  //     console.log("name: " + job.name)
  //     console.log("title: " + job.title)
  //     console.log("applyUrl: " + job.applyUrl)
  //     console.log("address1: " + job.address1)
  //     console.log("skills: " + job.skills)
  //     console.log("accession: " + job.accession)
  // });

  if (!body) {
    const redirectUrl = `https://karriereflyt.recman.no/job.php?job_id=${params.jobId}`;
    redirect(redirectUrl); // Replace with the URL you want to redirect to
  }

  const applyUrl = `https://karriereflyt.recman.no/job.php?job_id=${params.jobId}&apply_only`;

  return (
    <div className="pt-16 background-blur">
      <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 flex flex-col justify-between items-center">
        {/* Description and Details Section */}
        <div className="flex flex-col md:flex-row gap-4 w-full py-4">
          {/* Description Section */}
          <div className="md:p-8 p-4 flex flex-col light-background kf-border-light grow">
            <h1 className="mb-4">{name}</h1>
            {body ? (
              <div
                className={`px-4 dangerouslySetInnerHTML`}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            ) : (
              <p className="pb-4">Problems loading content</p>
            )}
          </div>

          {/* Details Section */}
          <div className="sm:w-[300px] md:p-8 flex flex-col gap-2 light-background p-4 kf-border-light mt-4 lg:mt-0 lg:ml-4 w-full lg:max-w-screen-lg flex-shrink-0">
            <h2 className="text-xl font-bold pb-4">Detaljer</h2>
            <div className=" w-full rounded-tl-2xl md:rounded-bl-xl md:rounded-tl-xl">
              {logo == "" ? (
                <Image
                  src={noImage}
                  alt="Firma logo"
                  width={100}
                  height={100}
                />
              ) : (
                <img
                  className="max-w-full max-h-full object-contain p-4"
                  src={logo}
                  alt="Firma logo"
                />
              )}
              <div className="my-4">
                <h3>Tittel:</h3>
                <p>{title}</p>
              </div>
              <div className="my-4">
                <h3>Søknadsfrist:</h3>
                <p>{deadline}</p>
              </div>
              <div className="my-4">
                <h3>Antall Stillinger:</h3>
                <p>{numberOfPositions}</p>
              </div>
              <div className="my-4">
                <h3>Arbeidssted:</h3>
                <p>{workplace}</p>
              </div>
              <div className="my-4">
                <h3>Lønn:</h3>
                <p>{accession}</p>
              </div>
              <div className="my-4">
                <h3>Varighet:</h3>
                <p>{position}</p>
              </div>
              <div className="my-4">
                <h3>Sektor:</h3>
                <p>{sector}</p>
              </div>
              <div className="my-4">
                <h3>Adresse:</h3>
                <p>{address1}</p>
              </div>
            </div>

            <div className="py-3">
              <Link href={applyUrl || "undefined"}>
                <button className="button w-full">Søk</button>
              </Link>
              {contacts ? (
                <ul className="flex-1 py-4 flex flex-col gap-6">
                  {contacts.map((contact, index) => (
                    <li key={index}>
                      <div className="flex-none w-24 h-24 mr-4">
                        <img
                          className="w-full h-full object-cover rounded"
                          src={contact.image}
                          alt="Profile picture of contact person"
                        />
                      </div>
                      <div className="flex-grow">
                        <h2>
                          {contact.firstName} {contact.lastName}
                        </h2>
                        {/* <h2 className="text-xl font-bold">{contact.title}</h2> */}
                        <p>{contact.email}</p>
                        <p>{contact.mobilePhone}</p>
                      </div>
                      <SocialLinks
                        color="dark"
                        employee={{
                          emailText: contact.email,
                          phoneNumber: contact.mobilePhone,
                          linkedin: contact.linkedin,
                          facebook: "",
                        }}
                        paddingX={false}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No contact information available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
