
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

    const branchCategories = await fetchBranchCategories();
    const jobBranches = await fetchJobBranches();

    // Create a set of unique branch category IDs present in job postings
    const usedBranchCategoryIds = new Set(Object.values(jobBranches).map(job => job.branchCategoryId));

    // Filter branchCategories to only those used in job postings
    const usedBranchCategories = Object.keys(branchCategories)
        .filter(id => usedBranchCategoryIds.has(id))
        .map(id => ({ id, name: branchCategories[id] }));

    return (
        <div className='w-full min-h-screen flex flex-col justify-between items-center '>
   
            
        {/* Din Karrierepartner (Full Width at the Top) */}
        <div style={{ backgroundColor: "#6B858D"}}  className="w-full px-4  shadow flex flex-col justify-start items-center relative z-10">
            <div className="w-full md:w-[1200px] justify-start items-start gap-8 inline-flex">
                <div className='grow shrink basis-0 self-stretch py-4 flex-col justify-start items-start gap-4 inline-flex'>
                    <div className="self-strech text-stone-50 text-[40px] font-normal font-['Filson pro']">Din karriere Partner</div>
                    <div className="self-strech text-stone-50 text-xl font-bold font-['Filson Pro']">Finn din Jobb som får hverdagen til å gli</div>
                    <div className="self-strech text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">
                    Velkommen til oss i Karriereflyt, hvor vårt mål er å gjøre jobbsøkingen så effektiv og tilfredsstillende som mulig for deg. Vi forstår at riktig jobb kan forvandle din hverdag, og derfor legger vi vår stolthet i å matche dine unike ferdigheter og ambisjoner med den perfekte stillingen. Vår tilnærming er personlig; vi lytter til dine behov, forstår dine mål, og bruker vår inngående kunnskap om arbeidsmarkedet til å finne posisjoner som ikke bare utfordrer og engasjerer deg, men som også bidrar til en bedre arbeids- og livsbalance
                        
                        </div>
                </div>
            </div>

            <div className="w-full md:w-[1200px] justify-between items-center inline-flex">
                <div className="justify-start items-start gap-8 flex">
                    <div className="w-full md:w-[236px] px-8 bg-neutral-600 rounded-2xl border-4 border-white border-opacity-20 justify-center items-center gap-4 flex">
                        <div className="text-stone-50 text-base font-medium font-['Filson Pro']">Send en åpen søknad</div>
                    </div>
                </div>

                <div className="w-full md:w-['113px'] py-2 justify-center items-center gap-4 flex">
                    <div className="text-stone-50 text-base font-medium font-['Filson Pro']">Les mer</div>
                        <div className="justify-center items-center gap-[12.86px] flex">
                            <div className="w-9 h-9 relative origin-top-left rotate-90">
                                <div className="w-9 h-9 left-[-0px] top-[36px] absolute origin-top-left -rotate-90 opacity-20 bg-stone-50 rounded-full" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    
        {/* Search Bar (Alone in the Middle) */}
        
        <div className="flex justify-center items-center w-full py-9">
            {/**<input value={searchQuery} onChange={handleSearchChange} type="text" placeholder="Jobbtittel, nøkkelord eller firma" className="w-2/4 h-11 bg-fffbf8 rounded-tl-lg rounded-bl-lg px-2 mr-0"/>*/}
            <button style={{ backgroundColor: "#6B858D", borderColor: "#899DA4" }} className="text-white font-bold h-11 py-0 px-4 rounded-tr-lg rounded-br-lg border-t-2 border-r-2 border-b-2">B</button>
        </div>
    
        {/* "Ledige stillinger" Text */}
        <div className="w-full text-center py-8">
            <h2 style={{ color: "#6B858D" }} className="text-2xl font-bold ">Ledige Stillinger</h2>
        </div>
    
        {/* Filters and Job Results Side by Side */}
        <div className="flex justify-around items-start px-4 gap-7">
            
            {/* Filter Section */}
            <div className='flex-grow shadow rounded-2xl border-1 border-white border-opacity-20 p-4 bg-stone-50'>
                <div  style={{ backgroundColor: "#6B858D", borderColor: "#899DA4" }} className='w-full px-6 py-3 rounded-tr-xl rounded-tl-xl justify-center items-center gap-2.5 inline-flex '>
                    <div></div>
                        <div className='grow shrink basis-0 text-center text-stone-50 text-base font-medium font-["Filson Pro"]'>Filter</div>
                    <div></div>
                </div>
                
                {/* Assuming dynamic filter generation */}
                <div className="flex flex-col">
                    <div className='w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto'>
                        <div className='w-full h-auto pb-8 flex-col justify-start items-start flex'>
                            <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                <div style={{ color: "#6B858D"}} className=' text-base font-bold font-["Filison Pro"]'>Område</div>
                            </div>
                            {/*{region.length > 0 ? ( region.map((job, index) => (
                            <div key={index} className="w-full py-2 justify-start items-center gap-2.5 inline-flex">
                                <label onClick={() => handleRegionClick(job.regionId)}>
                                <input type="checkbox" id={`region-${index}`} /></label>
                                <div style={{ color: "#6B858D"}} className="text-base font-normal font-['Filson Pro'] leading-loose">{job.regionName}</div>
                            </div>
                            ))
                            ) : (
                            <p>No region data available.</p>
                            )}*/}
                        </div>
                    </div>

    
                <div className='w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto'>
                    <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                        <div style={{ color: "#6B858D"}} className="text-base font-bold font-['Filison Pro']">Bransjer</div>
                    </div>
                    {usedBranchCategories.map(branch => (
                    <div key={branch.jobPostId} className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                        
                        <div style={{ color: "#6B858D"}} className="text-base font-normal font-['Filison pro'] leading-loose">{branch.name}</div>
                    </div>
                    ))}
                </div>

                <div className="w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto">
                    <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                        <div style={{ color: "#6B858D"}} className="text-base font-bold font-['Filison Pro']">Stilling</div>
                    </div>

                    <div className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                        <label>
                            {/*<input type='checkbox' checked={selectedPositions.includes("fullTime")} onChange={handleFastClick}/> */}
                        </label>
                        <div style={{ color: "#6B858D"}} className="text-base font-normal font-['Filison pro'] leading-loose">Fast</div>
                    </div>

                </div>



                </div>
            </div>
    
            {/* Job Results */}
            <div className='flex-grow '>
                {/* Assuming dynamic job results generation */}

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
                                    <div className="text-stone-50 text-base font-medium font-['Filson Pro']">
                                        Les mer
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    
        {/* "Finner ikke" Full Width at the Bottom */}
        <div className="w-full py-16 bg-stone-50 shadow text-center">
            <div className="grow shrink basis-0 self-stretch px-6 pt-6 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="text-center text-neutral-600 text-xl font-bold font-['Filson Pro']">Finner du ikke det du leter etter</div>
                <div className="self-strech text-center text-neutral-600 text-base font-normal font-['Filson Pro'] leading-loose">Vi jobber med et bredt spekter av stillinger innen kontor & handel samt industri</div>
                <div className="self-strech text-center text-neutral-600 text-base font-normal font-['Filson Pro'] leading-loose">Send oss gjerne en CV og en åpen søknad her, så vil muligens ta kontakt for jobbmuligheter</div>
                <div className="self-strech text-center text-neutral-600 text-base font-normal font-['Filson Pro'] leading-loose">Det hender også at vi representerer kunder hvor jobbmulighetene ikke bli annonsert slik som du ser denne listen.</div>
                <div className="self-stretch pt-8 justify-center items-center gap-16 inline-flex">
                    <div className="w-[232px] px-8 bg-neutral-600 rounded-xl border-4 border-white border-opacity-20 justify-center items-center gap-4 flex">
                        <div className="text-stone-50 text-base font-medium font-['Filson Pro']">Send en åpen søknad</div>
                    </div>
                    <div className="w-[156px] px-8 bg-neutral-600 rounded-2xl border-4 border-white border-opacity-20 justify-center items-center gap-4 flex">
                        <div className="text-stone-50 text-base font-medium">Kontakt oss</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}