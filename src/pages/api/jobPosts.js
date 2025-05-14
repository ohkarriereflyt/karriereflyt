"use server";
const apiKey = process.env.RECMAN_API_SECRET;

export async function fetchJobs() {
  const jobResponse = await fetch(
    `https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId,name,title,ingress,body,numberOfPositions,startDate,endDate,logo,deadline,departmentId,facebook,linkedin,twitter,instagram,address1,address2,postalCode,city,country,web,salary,corporationId,created,updated,applyUrl,contacts,type,sector,accession,companyName,workplace,images,videoUrl,branchCategoryId,branchId,secondaryBranchCategoryId,secondaryBranchId,skills,countryId,regionId,cityId,position,positionType,socialMedia,finnUrl,locations`,
    { next: { revalidate: 7200 } }
  );
  if (!jobResponse.ok) throw new Error("Failed to fetch jobs");
  return jobResponse.json();
}
export async function fetchBranchCategories() {
  const response = await fetch(
    `https://api.recman.no/v2/get/?key=${apiKey}&scope=branch`,
    { next: { revalidate: 7200 } }
  );
  const data = await response.json();
  return data.data;
}

export async function fetchJobBranches() {
  const response = await fetch(
    `https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId`,
    { next: { revalidate: 7200 } }
  );
  const data = await response.json();
  return data.data; // This should be an object with jobPostIds as keys
}

export async function fetchJobRegions() {
  const regionResponse = await fetch(
    `https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=regionId`,
    { next: { revalidate: 7200 } }
  );
  const data = await regionResponse.json();
  return data.data;
}

export async function fetchRegions() {
  const response = await fetch(
    `https://api.recman.no/v2/get/?key=${apiKey}&scope=location`,
    { next: { revalidate: 7200 } }
  );
  if (!response.ok) {
    console.error("Failed to fetch regions:", response.status);
    return []; // Return an empty array if the fetch fails
  }
  const data = await response.json();
  if (!data || !data.region) {
    // Ensure that data.region exists
    console.error("Invalid region data structure:", data);
    return []; // Return empty array if data is not structured correctly
  }
  return data.region; // Directly return the region array
}
