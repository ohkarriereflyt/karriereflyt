import { Footer } from "../../components";

async function getData() {
  const apiKey = process.env.RECMAN_API_SECRET;
  const res = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId, name, title, ingress, body, numberOfPositions, startDate, endDate, logo, deadline, address1, address2, postalCode, city, applyUrl, companyName, workplace, position, positionType`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const response = await getData();

  const jobListings = response.data ? Object.values(response.data).map(jobListing => ({
    id: jobListing.jobPostId,
    name: jobListing.name,
    title: jobListing.title,
    ingress: jobListing.ingress,
    body: jobListing.body,
    numberOfPositions: jobListing.numberOfPositions,
    startDate: jobListing.startDate,
    endDate: jobListing.endDate,
    logo: jobListing.logo,
    deadline: jobListing.deadline,
    address1: jobListing.address1,
    address2: jobListing.address2,
    postalCode: jobListing.postalCode,
    city: jobListing.city,
    applyUrl: jobListing.applyUrl,
    companyName: jobListing.companyName,
    workplace: jobListing.workplace,
    position: jobListing.position,
    positionType: jobListing.positionType,
  })) : [];

  return (
    <main>
      {jobListings.map(jobListing => (
        <div key={jobListing.id} className="bg-gray-100 p-4 flex items-center rounded-lg mb-4 shadow-sm">
          <img src={jobListing.logo} alt="Company Logo" className="w-16 h-16 mr-4 rounded-full" />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{jobListing.companyName}</h3>
            <p className="text-sm">{jobListing.title}</p>
            <p className="text-sm text-gray-600">{jobListing.name}</p>
          </div>
          <a href={jobListing.applyUrl} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" target="_blank" rel="noopener noreferrer">
            Les mer
          </a>
        </div>
      ))}
      <Footer/>
    </main>
  );
}