import { JobPosts } from '../../components/index'

const apiKey = process.env.RECMAN_API_SECRET;

const branchToNorwegian = {
    "Banking / Finance / Insurance": "Bank / Finans / Forsikring",
    "Consulting": "Konsulent",
    "Research / Development": "Forskning / utvikling",
    "Health / Welfare": "Helse / Velferd",
    "Hotel / Resturant": "Hotell / Resturant",
    "Building / Construction / Mechanics": "Bygg / Anlegg / Mekanikk",
    "Industry / Manufacturing": "Industri / Produksjon",
    "IT / Telecom / Internett": "IT / Telekomunikasjon / Internett",
    "Media / Information / PR": "Media / Informasjon / PR",
    "Sales / Marketing": "Salg / Markedsføring",
    "Retail": "Varehandel",
    "Other": "Andre",
    "Administration / Office / Personnel": "Administrasjon / Kontor / Personal",
    "Economy / Controlling": "Økonomi / Regnskap"
};

const jobTypeToNorwegian = {
    "fullTime" : "Fast",
    "partTime": "Deltid",
};

async function fetchJobs() {
    const jobResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId, name, title, ingress, body, numberOfPositions, startDate, endDate, logo, deadline, departmentId, facebook, linkedin, twitter, instagram, address1, address2, postalCode, city, country, web, salary, corporationId, created, updated, applyUrl, contacts, type, sector, accession, companyName, workplace, images, videoUrl, branchCategoryId, branchId, secondaryBranchCategoryId, secondaryBranchId, skills, countryId, regionId, cityId, position, positionType, socialMedia, finnUrl, locations`);
    if (!jobResponse.ok) throw new Error('Failed to fetch jobs');
    return jobResponse.json();
}

async function fetchBranchCategories() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=branch`);
    const data = await response.json();
    return data.data;
}

async function fetchJobBranches() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId`);
    const data = await response.json();
    return data.data; // This should be an object with jobPostIds as keys
}

async function fetchJobRegions() {
    const regionResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=regionId`);
    const data = await regionResponse.json();
    return data.data
}

async function fetchRegions() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=location`);
    if (!response.ok) {
        console.error('Failed to fetch regions:', response.status);
        return [];  // Return an empty array if the fetch fails
    }
    const data = await response.json();
    if (!data || !data.region) {  // Ensure that data.region exists
        console.error('Invalid region data structure:', data);
        return [];  // Return empty array if data is not structured correctly
    }
    return data.region;  // Directly return the region array
}

export default async function Page() {
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
            position, // Use the transformed 'position' value here
            positionType: job.positionType,
            address1: job.address1,
            contacts: job.contacts,
            skills: job.skills,
            accession: job.accession,
            branchCategoryId: job.branchCategoryId || "Not provided", // Default value if missing
            regionId: job.regionId || "Not provided",
        };
    }) : [];

    const jobBranches = await fetchJobBranches();
    const branchesObject = Object.values(jobBranches);
   
    const uniqueJobs = {};
    branchesObject.forEach(job => {
        if (!uniqueJobs[job.branchCategoryId]) {                 
            uniqueJobs[job.branchCategoryId] = job; 
        }
    })

    const finishedBranch = Object.values(uniqueJobs); 


    const branchCategories = await fetchBranchCategories();
    const categoriesBranch = {};

    branchCategories.branchCategoryList.forEach(category => {
        const translated = branchToNorwegian[category.name] || category.name;
        categoriesBranch[category.branchCategoryId] = translated;
    })




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
    const enhancedJobApi = jobApi.map(job => ({
        ...job,
        regionName: regionMap[job.regionId] || "Unknown"
    }));

    // For unique regions used in jobs, create a list for filtering or displaying
    const uniqueRegionIds = new Set(jobRegions.map(job => job.regionId));
    const uniqueRegions = Array.from(uniqueRegionIds).map(regionId => ({
        regionId: regionId,
        regionName: regionMap[regionId] || "Unknown"
    }));
    
   
    return (
        <JobPosts jobApi={jobApi} finishedBranch={finishedBranch} categoriesBranch={categoriesBranch}  uniqueRegions={uniqueRegions}/>
    );
}