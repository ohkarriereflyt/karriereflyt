
import { get } from "http";
import { Footer } from "../../components";
import Link  from 'next/link'


const apiKey = process.env.RECMAN_API_SECRET;

async function fetchJobs() {
    const jobResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=projectId, name, title, ingress, body, numberOfPositions, startDate, endDate, logo, deadline, address1, address2, postalCode, city, applyUrl, companyName, workplace, position, positionType`);
    if (!jobResponse.ok) throw new Error('Failed to fetch jobs');
    return jobResponse.json();
}

async function fetchBranchCategories() {
    const branchResponse = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=branch`);
    if (!branchResponse.ok) throw new Error('Failed to fetch branch categories');
    const branchData = await branchResponse.json();
    const branchCategories = {};
    branchData.data.branchCategoryList.forEach(category => {
        branchCategories[category.branchCategoryId] = category.name;
    });
    return branchCategories;
}



async function fetchJobBranches() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId`);
    if (!response.ok) throw new Error('Failed to fetch job regions');
    const data = await response.json();
    console.log("fetchJobBranches response:", data);  // Check the structure here
    return data;  // Ensure this is the correct object that includes a 'data' array
}




async function fetchJobRegions() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=jobPost&fields=branchCategoryId,regionId`);
    if (!response.ok) throw new Error('Failed to fetch job regions');
    return response.json();
}

async function fetchRegions() {
    const response = await fetch(`https://api.recman.no/v2/get/?key=${apiKey}&scope=location`);
    if (!response.ok) throw new Error('Failed to fetch regions');
    return response.json();
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



    return (
        <main>
            

            <ul className="space-y-4 pb-4">
                    {jobApi.map(job => (
                        <li key={job.jobPostId} className="bg-stone-50 rounded-2xl shadow border-4 border-white border-opacity-20 ">
                            <div className="flex flex-col md:flex-row justify-start items-center">
                                <div className="md:w-[259px] w-full h-[152px] bg-white rounded-tl-2xl rounded-bl-2x md:rounded-bl-2xl md:rounded-tl-xl border flex justify-center items-center flex-shrink-0">
                                    <img className="max-w-full max-h-full object-contain" src={job.logo} alt="Placeholder" />
                                </div>
                                <div className="flex-grow p-4">
                                    <div className="text-neutral-600 text-xl font-bold font-['Filson Pro']">{job.companyName}</div>
                                    <div className="text-neutral-600 text-base font-normal font-['Filson Pro'] leading-loose">{job.name}</div>
                                </div>
                                <div style={{ backgroundColor: "#6B858D"}} className="w-full md:w-[200px] rounded-br-xl rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl p-4 flex flex-col justify-between flex-shrink-0 ">
                                    <div className="max-w-full overflow-hidden">
                                        <div className="text-stone-50 text-xl font-bold font-['Filson Pro'] whitespace-normal">{job.title}</div>
                                        <div className="text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">{job.position}</div>
                                        <div className="text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">{job.city}</div>
                                    </div>
                                    <div className="flex justify-end items-center">
                                    <div  className="text-stone-50 text-base font-medium font-['Filson Pro']">
                                        Les mer
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
  
        <Footer/>
  
      </main>
    );
}