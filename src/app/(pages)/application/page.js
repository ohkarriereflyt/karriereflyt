import { JobPosts } from '../../components/index'

const apiKey = process.env.RECMAN_API_SECRET;

async function fetchJobs() {
    const jobResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId, name, title, ingress, body, numberOfPositions, startDate, endDate, logo, deadline, address1, address2, postalCode, city, applyUrl, companyName, workplace, position, positionType`);
    if (!jobResponse.ok) throw new Error('Failed to fetch jobs');
    return jobResponse.json();
}

async function fetchBranchCategories() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=branch`);
    const data = await response.json();
    return data.data.branchCategoryList.reduce((acc, cur) => {
        acc[cur.branchCategoryId] = cur.name;
        return acc;
    }, {});
}

async function fetchJobBranches() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId`);
    const data = await response.json();
    return data.data; // This should be an object with jobPostIds as keys
}

async function fetchJobRegions() {
    const regionResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId,regionId`);
    const data = await regionResponse.json();
    return data.data
}

async function fetchRegions() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=location`);
    const dataResponse = await response.json();
    return dataResponse.data.region.reduce((acc, cur) => {
        acc[cur.regionId] = cur.name;
        return acc;
    }, {});

}

export default async function Page() {
    const jobApiResponse = await fetchJobs();
    const jobApi = jobApiResponse.data ? Object.values(jobApiResponse.data).map(job => ({
        id: job.jobPostId,
        name: job.name,
        title: job.title,
        ingress: job.ingress,
        body: job.body,
        numberOfPositions: job.numberOfPositions,
        startDate: job.startDate,
        endDate: job.endDate,
        logo: job.logo,
        deadline: job.deadline,
        address1: job.address1,
        address2: job.address2,
        postalCode: job.postalCode,
        city: job.city,
        applyUrl: job.applyUrl,
        companyName: job.companyName,
        workplace: job.workplace,
        position: job.position,
        positionType: job.positionType,

    })) : [];

    const branchCategories = await fetchBranchCategories();
    const jobBranches = await fetchJobBranches();

    // Create a set of unique branch category IDs present in job postings
    const usedBranchCategoryIds = new Set(Object.values(jobBranches).map(job => job.branchCategoryId));

    // Filter branchCategories to only those used in job postings
    const usedBranchCategories = Object.keys(branchCategories)
        .filter(id => usedBranchCategoryIds.has(id))
        .map(id => ({ id, name: branchCategories[id] }));

    const regionCategories = await fetchJobRegions();
    const jobRegions = await fetchJobRegions();
    const usedRegionCategoryIds = new Set(Object.values(jobRegions))

    return (
        <JobPosts jobApi={jobApi} usedBranchCategories={usedBranchCategories} />
    );
}