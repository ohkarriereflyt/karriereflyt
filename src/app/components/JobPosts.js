'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';


const JobPosts = (props) => {
    const [jobApi, setJobApi] = useState(props.jobApi);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(jobApi); //Det siste arrayet som blir vist. Det er arrayet som blir printet ut til siden ettter den har blitt tuklet med
    const [selectedBranches, setSelectedBranches] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [fullTimeOnly, setFullTimeOnly] = useState(false);
   
    // This function is triggered when search input changes
     const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        filterJobs(query, selectedBranches, selectedRegions);
    }

    // Handle filtering of jobs based on search query and selected branches
    const filterJobs = (query, branches, regions) => {
        let filtered = jobApi;
        if (query) {
            filtered = filtered.filter(job => {
                const score = ['name', 'title', 'companyName', 'position', 'city'].reduce((acc, field) => {
                    const matchStart = new RegExp(`\\b${query}`, 'i');
                    const matchAnywhere = new RegExp(`${query}`, 'i');
                    const weight = field === 'title' ? 2 : 1;
                    if (job[field].match(matchStart)) {
                        acc += weight * 2;  // Double the weight for starts-with matches
                    } else if (job[field].match(matchAnywhere)) {
                        acc += weight;
                    }
                    return acc;
                }, 0);
                return score > 0;
            }).sort((a, b) => b.score - a.score);
        }
        if (branches.length > 0) {
            filtered = filtered.filter(job => branches.includes(job.branchCategoryId));
        }

        if (regions.length > 0) {
            filtered = filtered.filter(job => regions.includes(job.regionId));
        }

        if (fullTimeOnly) {
            filtered = filtered.filter(job => job.position === 'fullTime');
        }

        setSearchResults(filtered);
    }

    // Trigger filter when jobApi, selectedBranches, or searchQuery changes
    useEffect(() => {
        filterJobs(searchQuery, selectedBranches, selectedRegions);
    }, [jobApi, selectedBranches, searchQuery, selectedRegions, fullTimeOnly]);

    const handleBranchClick = (branchId) => {
        setSelectedBranches(prevBranches =>
            prevBranches.includes(branchId)
                ? prevBranches.filter(id => id !== branchId)
                : [...prevBranches, branchId]
        );
    }

  
    const handleRegionClick = (regionId) => {
        setSelectedRegions(prevRegions =>
            prevRegions.includes(regionId)
                ? prevRegions.filter(id => id !== regionId)
                : [...prevRegions, regionId]
        );
    };

    const handleFullTimeToggle = () => {
        setFullTimeOnly(prev => !prev);
    };


    function highlightText(text, query) {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? <span key={index} style={{ backgroundColor: '#A5BBC2' }}>{part}</span> : part
        );
    }

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

 

    return (
        <div className='w-full min-h-screen flex flex-col justify-between items-center '>
            {/* Din Karrierepartner (Full Width at the Top) */}
            <div style={{ backgroundColor: "#6B858D" }} className="w-full px-4  shadow flex flex-col justify-start items-center relative z-10">
            <div className="w-full md:w-[1200px] justify-start items-start gap-8 inline-flex">
                <div className='grow shrink basis-0 self-stretch py-4 flex-col justify-start items-start gap-4 inline-flex'>
                    <div className="self-strech text-stone-50 text-[40px] font-normal font-['Filson pro']">Din karriere Partner</div>
                    <div className="self-strech text-stone-50 text-xl font-bold font-['Filson Pro']">Finn din Jobb som får hverdagen til å gli</div>
                    <div className="self-strech text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">
                        {isExpanded ? (
                            `Velkommen til oss i Karriereflyt, hvor vårt mål er å gjøre jobbsøkingen så effektiv og tilfredsstillende som mulig for deg. Vi forstår at riktig jobb kan forvandle din hverdag, og derfor legger vi vår stolthet i å matche dine unike ferdigheter og ambisjoner med den perfekte stillingen. Vår tilnærming er personlig; vi lytter til dine behov, forstår dine mål, og bruker vår inngående kunnskap om arbeidsmarkedet til å finne posisjoner som ikke bare utfordrer og engasjerer deg, men som også bidrar til en bedre arbeids- og livsbalance`
                        ): (
                            `Velkommen til oss i Karriereflyt, hvor vårt mål er å gjøre jobbsøkingen så effektiv og tilfredsstillende som mulig for deg. Vi forstår at riktig jobb kan forvandle..`
                        )}
                        
                        </div>
                </div>
            </div>
                <div className="w-full md:w-[1200px] justify-between items-center inline-flex">
                    <div className="justify-start items-start gap-8 flex">
                        <div className="w-full md:w-[236px] px-8 bg-neutral-600 rounded-2xl border-4 border-white border-opacity-20 justify-center items-center gap-4 flex">
                            <div className="text-stone-50 text-base font-medium font-['Filson Pro']">Send en åpen søknad</div>
                        </div>
                    </div>

                    <div className="w-full md:w-['113px'] py-2 justify-center items-center gap-4 flex" onClick={toggleExpand}>
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
            <div className="max-w-7xl mx-auto px-4 md:px-8 m-8 w-full">
                <div className='kf-border-light light-background w-full flex items-center relative'>
                    <div className="w-full h-full">
                        <label htmlFor="message" className="sr-only">Valgfri melding:</label>
                        <input
                            id="message"
                            name='message'
                            value={searchQuery}
                            onChange={handleChange}
                            className="py-3 px-4 w-full kf-border-light"
                            placeholder="Valgfri melding"
                        />
                    </div>
                    <button className="h-full slate-gray-background px-6 py-4 absolute right-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.917969 8.16016C0.917969 12.457 4.41406 15.9531 8.71094 15.9531C10.4102 15.9531 11.9629 15.4063 13.2422 14.4883L18.0469 19.3027C18.2715 19.5274 18.5645 19.6348 18.877 19.6348C19.541 19.6348 20 19.1367 20 18.4824C20 18.1699 19.8828 17.8867 19.6778 17.6817L14.9024 12.877C15.9082 11.5684 16.5039 9.9375 16.5039 8.16016C16.5039 3.86328 13.0078 0.367188 8.71094 0.367188C4.41406 0.367188 0.917969 3.86328 0.917969 8.16016ZM2.58789 8.16016C2.58789 4.78125 5.33203 2.03711 8.71094 2.03711C12.0899 2.03711 14.834 4.78125 14.834 8.16016C14.834 11.5391 12.0899 14.2832 8.71094 14.2832C5.33203 14.2832 2.58789 11.5391 2.58789 8.16016Z" fill="#FFFBF8" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* "Ledige stillinger" Text */}
            <div className="w-full text-center py-8">
                <h2 style={{ color: "#6B858D" }} className="text-2xl font-bold ">Ledige Stillinger</h2>
            </div>
            {/* Filters and Job Results Side by Side */}
            <div className="flex justify-around items-start px-4 gap-7">
                {/* Filter Section */}
                <div className='flex-grow shadow rounded-2xl border-1 border-white border-opacity-20 p-4 bg-stone-50'>
                    <div style={{ backgroundColor: "#6B858D", borderColor: "#899DA4" }} className='w-full px-6 py-3 rounded-tr-xl rounded-tl-xl justify-center items-center gap-2.5 inline-flex '>
                        <div></div>
                        <div className='grow shrink basis-0 text-center text-stone-50 text-base font-medium font-["Filson Pro"]'>Filter</div>
                        <div></div>
                    </div>
                    {/* Assuming dynamic filter generation */}
                    <div className="flex flex-col">
                        <div className='w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto'>
                            <div className='w-full h-auto pb-8 flex-col justify-start items-start flex'>
                                <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                    <div style={{ color: "#6B858D" }} className=' text-base font-bold font-["Filison Pro"]'>Område</div>
                                </div>
                            {props.uniqueRegions.map(region => (
                                <div key={region.regionId} className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                                    <label>
                                        <input 
                                        type='checkbox'
                                        checked={selectedRegions.includes(region.regionId)}
                                        onChange={() => handleRegionClick(region.regionId)}
                                        />
                                    </label>
                                    <div style={{ color: "#6B858D" }} className="text-base font-normal font-['Filison pro'] leading-loose">{region.regionName}</div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className='w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto'>
                            <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                <div style={{ color: "#6B858D" }} className="text-base font-bold font-['Filison Pro']">Bransjer</div>
                            </div>
                            {props.finishedBranch.map((branch, index) => (
                                <div key={`branchCategoryId-${branch.branchCategoryId || index}`} className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                                    <label onClick={() => handleBranchClick(branch.branchCategoryId)}>
                                        <input type='checkbox'/>
                                    </label>
                                <div style={{ color: "#6B858D" }} className="text-base font-normal font-['Filison pro'] leading-loose">{props.categoriesBranch[branch.branchCategoryId]}</div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto">
                            <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                <div style={{ color: "#6B858D" }} className="text-base font-bold font-['Filison Pro']">Stilling</div>
                            </div>
                            <div className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                                <label>
                                    <input
                                        type='checkbox'
                                        checked={fullTimeOnly}
                                        onChange={handleFullTimeToggle}
                                    />
                                </label>
                                <div style={{ color: "#6B858D" }} className="text-base font-normal font-['Filison pro'] leading-loose">Fast</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Job Results */}
                <div className='flex-grow '>
                    {/* Assuming dynamic job results generation */}
                    <ul className="space-y-4 pb-4">
                        {searchResults.map(job => (
                            <li key={`jobPostId-${job.id}`} className="bg-stone-50 rounded-2xl shadow border-4 border-white border-opacity-20 ">
                                <div className="flex flex-col md:flex-row justify-start items-center">
                                    <div className="md:w-[259px] w-full h-[152px] bg-white rounded-tl-2xl rounded-bl-2x md:rounded-bl-2xl md:rounded-tl-xl border flex justify-center items-center flex-shrink-0">
                                        <img className="max-w-full max-h-full object-contain" src={job.logo} alt="Placeholder" />
                                    </div>
                                    <div className="flex-grow p-4">
                                        <div className="text-neutral-600 text-xl font-bold font-['Filson Pro']">{highlightText(job.companyName, searchQuery)}</div>
                                        <div className="text-neutral-600 text-base font-normal font-['Filson Pro'] leading-loose">{highlightText(job.name, searchQuery)}</div>
                                    </div>
                                    <div style={{ backgroundColor: "#6B858D" }} className="w-full md:w-[200px] rounded-br-xl rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl p-4 flex flex-col justify-between flex-shrink-0 ">
                                        <div className="max-w-full overflow-hidden">
                                            <div className="text-stone-50 text-xl font-bold font-['Filson Pro'] whitespace-normal">{highlightText(job.title, searchQuery)}</div>
                                            <div className="text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">{highlightText(job.position, searchQuery)}</div>
                                            <div className="text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">{highlightText(job.city, searchQuery)}</div>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <Link href={{
                                                pathname: `/jobDetail/{job.id}`,
                                                query: {
                                                    id: job.jobPostId, 
                                                    logo: job.logo, 
                                                    name: job.name, 
                                                    body: job.body, 
                                                    title: job.title, 
                                                    deadline: job.deadline, 
                                                    numberOfPositions: job.numberOfPositions,
                                                    workplace: job.workplace,
                                                    accession: job.accession,
                                                    position: job.position,
                                                    sector: job.sector,
                                                    address1: job.address1,
                                                    applyUrl: job.applyUrl,
                                                    skills: job.skills,
                                                    contacts: encodeURIComponent(JSON.stringify(job.contacts))
                                                }}}        
                                                className="text-stone-50 text-base font-medium font-['Filson Pro']">
                                                Les mer
                                            </Link>
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
};

export default JobPosts;