import "./page.css";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { SocialLinks } from "../../../components";

const apiKey = process.env.RECMAN_API_SECRET;

const jobTypeToNorwegian = {
    "fullTime": "Fast",
    "partTime": "Deltid",
};

async function fetchJobs() {
    const jobResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId, name, title, ingress, body, numberOfPositions, startDate, endDate, logo, deadline, departmentId, facebook, linkedin, twitter, instagram, address1, address2, postalCode, city, country, web, salary, corporationId, created, updated, applyUrl, contacts, type, sector, accession, companyName, workplace, images, videoUrl, branchCategoryId, branchId, secondaryBranchCategoryId, secondaryBranchId, skills, countryId, regionId, cityId, position, positionType, socialMedia, finnUrl, locations`);
    if (!jobResponse.ok) throw new Error('Failed to fetch jobs');
    return jobResponse.json();
}

export default async function Page({ params }) {

    const jobApiResponse = await fetchJobs();
    const jobApi = jobApiResponse.data ? Object.values(jobApiResponse.data).map(job => {
        // Conditionally modify the 'position' field
        const position = job.position ? jobTypeToNorwegian[job.position] || job.position : "Not provided";

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
    }) : [];

    const { title, logo, name, body, deadline, numberOfPositions, workplace, accession, position, sector, address1, applyUrl, contacts } = jobApi.find(job => job.id === params.jobId) || {};

    console.log("CONTACTS", contacts)

    return (
        <div className="pt-16 background-blur">
            <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 flex flex-col justify-between items-center">
                {/* Description and Details Section */}
                <div className="flex flex-col md:flex-row gap-4 w-full py-4">
                    {/* Description Section */}
                    <div className="md:p-8 p-4 flex flex-col light-background kf-border-light grow">
                        <h1 className="mb-4">{name}</h1>
                        <div className={`px-4 dangerouslySetInnerHTML`} dangerouslySetInnerHTML={{ __html: body }} />
                    </div>

                    {/* Details Section */}
                    <div className="sm:w-[300px] md:p-8 flex flex-col gap-2 light-background p-4 kf-border-light mt-4 lg:mt-0 lg:ml-4 w-full lg:max-w-screen-lg flex-shrink-0">
                        <h2 className="text-xl font-bold pb-4">Detaljer</h2>
                        <div className=" w-full rounded-tl-2xl md:rounded-bl-xl md:rounded-tl-xl">
                            <img className="max-w-full max-h-full object-contain" src={logo} alt="Job logo" />
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
                            <Link href={applyUrl}><button className="button w-full" >Søk</button></Link>
                            {contacts.length > 0 ? (
                                <ul className="flex-1 py-4 flex flex-col gap-6">
                                    {contacts.map((contact, index) => (
                                        <li key={index}>
                                            <div className="flex-none w-24 h-24 mr-4">
                                                <img className="w-full h-full object-cover rounded" src={contact.image} alt="Profile picture of contact person" />
                                            </div>
                                            <div className="flex-grow">
                                                <h2>{contact.firstName} {contact.lastName}</h2>
                                                {/* <h2 className="text-xl font-bold">{contact.title}</h2> */}
                                                <p>{contact.email}</p>
                                                <p>{contact.mobilePhone}</p>
                                            </div>
                                            <SocialLinks color="dark" employee={{
                                                emailText: contact.email,
                                                phoneNumber: contact.mobilePhone,
                                                linkedin: contact.linkedin,
                                                facebook: ''
                                            }} paddingX={false} />
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