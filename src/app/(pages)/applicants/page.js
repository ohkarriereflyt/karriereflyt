"use server";
import { Footer, JobPosts } from "../../components/index";
import { client } from "../../sanity";
import {
  fetchJobs,
  fetchBranchCategories,
  fetchJobBranches,
  fetchJobRegions,
  fetchRegions,
} from "../../../pages/api/jobPosts";

const apiKey = process.env.RECMAN_API_SECRET;

const branchToNorwegian = {
  "Banking / Finance / Insurance": "Bankvirksomhet / Finans / Forsikring",
  Consulting: "Konsulentvirksomhet",
  "Research / Development": "Forskning / Utvikling",
  "Health / Welfare": "Helse / Velferd",
  "Hotel / Restaurant": "Hotell / Restaurant",
  "Building / Construction / Mechanics": "Bygg / Anlegg / Mekanikk",
  "Industry / Manufacturing": "Industri / Produksjon",
  "Interest group": "Interesseorganisasjon",
  "IT / Telecom / Internet": "IT / Telekommunikasjon / Internett",
  "Farming / Forest / Hunting / Fishing": "Jordbruk / Skogbruk / Jakt / Fiske",
  "Arts / Culture": "Kunst / Kultur",
  "Media / Information / PR": "Media / Informasjon / PR",
  "Public service": "Offentlig tjeneste",
  "Offshore exploit": "Offshore utnyttelse",
  "Personal services": "Personlige tjenester",
  "Cleaning / Waste": "Rengjøring / Avfall",
  "Sales / Marketing": "Salg / Markedsføring",
  "Transport / Logistics / Warehouse": "Transport / Logistikk / Lager",
  "Education / Teaching / Research": "Utdanning / Undervisning / Forskning",
  Retail: "Detaljhandel",
  Other: "Annet",
  "Administration / Office / Personnel": "Administrasjon / Kontor / Personell",
  "Economy / Controlling": "Økonomi / Kontroll",
  Engineering: "Ingeniørvirksomhet",
  Tourism: "Turisme",
  "Plumbing / Heating / Sanitary": "VVS (Vann, Varme, Sanitær)",
  "Aviation / Aerospace": "Luftfart / Romfart",
  "Real estate": "Eiendom",
};

const jobTypeToNorwegian = {
  fullTime: "Fast",
  partTime: "Deltid",
};

// Sanity GROQ
const EVENTS_QUERY = `*[_type == "applicants"][0]{
    topSectionTitle,
    topSectionSubTitle,
    topSectionText,
    bottomSectionTitle,
    bottomSectionText
  }`;
fetchJobs();
fetchBranchCategories();
fetchJobBranches();
fetchJobRegions();
fetchRegions();

export default async function Page() {
  // Sanity
  console.log("Sanity client:", client);
  if (!client) {
    throw new Error("Sanity client is not initialized");
  }
  const events = await client.fetch(EVENTS_QUERY);
  console.log(events);

  const jobApiResponse = await fetchJobs();
  const jobApi = jobApiResponse.data
    ? Object.values(jobApiResponse.data)
        .filter((job) => {
          // Remove all jobs where the 'endDate' has passed
          const now = new Date();
          const endDate = new Date(job.endDate);
          console.log(
            `Filtering job: ${job.title}, endDate: ${endDate}, now: ${now}`
          );
          return !isNaN(endDate) && endDate >= now;
        })
        .map((job) => {
          // Conditionally modify the 'position' field
          const position = job.position
            ? jobTypeToNorwegian[job.position] || job.position
            : "Not provided";

          // Return the transformed job object
          return {
            id: job.jobPostId,
            name: job.name,
            created: job.created,
            title: job.title,
            startDate: job.startDate,
            endDate: job.endDate,
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
            position, // Use the transformed 'position' value here
            positionType: job.positionType,
            address1: job.address1,
            contacts: job.contacts,
            skills: job.skills,
            accession: job.accession,
            branchCategoryId: job.branchCategoryId || "Not provided", // Default value if missing
            regionId: job.regionId || "Not provided",
          };
        })
        .sort((a, b) => new Date(b.created) - new Date(a.created))
    : []; // Sort by 'created' date

  // console.log(jobApi);
  // Do something with the filtered and sorted jobs

  const jobBranches = await fetchJobBranches();
  const branchesObject = Object.values(jobBranches);

  const uniqueJobs = {};
  branchesObject.forEach((job) => {
    if (!uniqueJobs[job.branchCategoryId]) {
      uniqueJobs[job.branchCategoryId] = job;
    }
  });

  const finishedBranch = Object.values(uniqueJobs);

  const branchCategories = await fetchBranchCategories();
  const categoriesBranch = {};

  branchCategories.branchCategoryList.forEach((category) => {
    const translated = branchToNorwegian[category.name] || category.name;
    categoriesBranch[category.branchCategoryId] = translated;
  });

  // jobApi.forEach(job => {
  //     console.log("Startdate: " + job.logo + " - " + job.title );
  // });

  //RegionData
  const jobRegionData = await fetchJobRegions();
  const jobRegions = Object.values(jobRegionData);

  // Fetch all regions (complete details including names)
  const allRegions = await fetchRegions();
  const regionMap = allRegions.reduce((acc, region) => {
    acc[region.regionId] = region.name;
    return acc;
  }, {});

  // Map jobApi data to include region names using regionMap
  const enhancedJobApi = jobApi.map((job) => ({
    ...job,
    regionName: regionMap[job.regionId] || "Unknown",
  }));

  // For unique regions used in jobs, create a list for filtering or displaying
  const uniqueRegionIds = new Set(jobRegions.map((job) => job.regionId));
  const uniqueRegions = Array.from(uniqueRegionIds).map((regionId) => ({
    regionId: regionId,
    regionName: regionMap[regionId] || "Unknown",
  }));

  const formatTextWithBreaks = (text) => {
    if (!text) {
      return <></>; // or you can return any default value you prefer
    }

    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className="background-blur">
      <JobPosts
        jobApi={enhancedJobApi}
        finishedBranch={finishedBranch}
        categoriesBranch={categoriesBranch}
        uniqueRegions={uniqueRegions}
        topSectionTitle={events.topSectionTitle}
        topSectionSubTitle={events.topSectionSubTitle}
        topSectionText={formatTextWithBreaks(events.topSectionText)}
        bottomSectionTitle={events.bottomSectionTitle}
        bottomSectionText={formatTextWithBreaks(events.bottomSectionText)}
      />
      <Footer />
    </div>
  );
}
