'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ButtonArrow from './ButtonArrow';


const JobPosts = (props) => {
    const [jobApi, setJobApi] = useState(props.jobApi);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(jobApi); //Det siste arrayet som blir vist. Det er arrayet som blir printet ut til siden etter den har blitt tuklet med
    const [selectedBranches, setSelectedBranches] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [fullTimeOnly, setFullTimeOnly] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    // This function is triggered when filter button is clicked
    const handleFilterClick = () => {
        setFilterOpen(prev => !prev);
    }

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
        setLoaded(true);
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

    jobApi.forEach(job => {
        console.log(job);
    });

    return (
        <div className='w-full min-h-screen flex flex-col justify-between items-center background-blur'>
            {/* Din Karrierepartner (Full Width at the Top) */}
            <div className="w-full slate-gray-background shadow flex justify-center mb-4">
                <div className="max-w-7xl p-4 flex flex-col justify-start items-center relative z-10">
                    <div className="w-full justify-start items-start gap-8 inline-flex">
                        <div className='grow shrink basis-0 self-stretch py-4 flex-col justify-start items-start gap-4 inline-flex light'>
                            <h1 >Din karriere Partner</h1>
                            <h2 >Finn din Jobb som får hverdagen til å gli</h2>
                            <p className={`${isExpanded ? '' : 'line-clamp-1'}`}>
                                Velkommen til oss i Karriereflyt, hvor vårt mål er å gjøre jobbsøkingen så effektiv og tilfredsstillende som mulig for deg. Vi forstår at riktig jobb kan forvandle din hverdag, og derfor legger vi vår stolthet i å matche dine unike ferdigheter og ambisjoner med den perfekte stillingen. Vår tilnærming er personlig; vi lytter til dine behov, forstår dine mål, og bruker vår inngående kunnskap om arbeidsmarkedet til å finne posisjoner som ikke bare utfordrer og engasjerer deg, men som også bidrar til en bedre arbeids- og livsbalance
                            </p>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <button className="button">Send en åpen søknad</button>
                        <div onClick={toggleExpand}>
                            <ButtonArrow direction={`${isExpanded ? 'up' : 'down'}`}></ButtonArrow>
                        </div>
                    </div>
                </div>
            </div>
            {/* "Ledige stillinger" Text */}
            <div className="lg:block hidden max-w-7xl mx-auto px-2 sm:px-4 w-full text-center mb-4">
                <h1 >Ledige Stillinger</h1>
            </div>
            {/* Search Bar (Alone in the Middle) */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-4 w-full">
                <div className='kf-border-light light-background w-full flex items-center relative'>
                    <div className="w-full h-full">
                        <label htmlFor="message" className="sr-only">Søk etter stilling, sted, firma etc.</label>
                        <input
                            id="message"
                            name='message'
                            value={searchQuery}
                            onChange={handleChange}
                            className="py-3 px-4 w-full kf-border-light"
                            placeholder="Søk etter stilling, sted, firma etc."
                        />
                    </div>
                    <button className="h-full slate-gray-background px-6 py-4 absolute right-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.917969 8.16016C0.917969 12.457 4.41406 15.9531 8.71094 15.9531C10.4102 15.9531 11.9629 15.4063 13.2422 14.4883L18.0469 19.3027C18.2715 19.5274 18.5645 19.6348 18.877 19.6348C19.541 19.6348 20 19.1367 20 18.4824C20 18.1699 19.8828 17.8867 19.6778 17.6817L14.9024 12.877C15.9082 11.5684 16.5039 9.9375 16.5039 8.16016C16.5039 3.86328 13.0078 0.367188 8.71094 0.367188C4.41406 0.367188 0.917969 3.86328 0.917969 8.16016ZM2.58789 8.16016C2.58789 4.78125 5.33203 2.03711 8.71094 2.03711C12.0899 2.03711 14.834 4.78125 14.834 8.16016C14.834 11.5391 12.0899 14.2832 8.71094 14.2832C5.33203 14.2832 2.58789 11.5391 2.58789 8.16016Z" fill="#FFFBF8" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Filters and Job Results Side by Side */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 w-full flex lg:flex-row flex-col gap-4 mb-4">
                {/* Filter Section */}
                <div className='lg:w-[320px] w-full flex-shrink-0'>
                    <div className='shadow kf-border-light light-background w-full'>
                        <div className='min-h-[56px] slate-gray-background  flex justify-center items-center w-full px-6 py-3 text-center'>
                            <h3 className='light'>Filter</h3>
                            <button className='lg:hidden block absolute right-3 top-3'
                                onClick={handleFilterClick}>
                                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: filterOpen ? 'scaleY(-1)' : 'scaleY(1)' }}>
                                    <path className='light-stroke' d="M24 15.332L18 21.332L12 15.332" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        {/* Assuming dynamic filter generation */}
                        <div className="lg:hidden block">
                            {filterOpen && (
                                <div className="flex flex-col slate-gray">
                                    <div className='w-full h-auto px-4 py-2 flex-col justify-start items-start flex overflow-y-auto'>
                                        <div className='w-full h-auto flex-col justify-start items-start flex'>
                                            <div className='w-full py-2 justify-start items-end gap-2 inline-flex'>
                                                <h3>Område</h3>
                                            </div>
                                            {props.uniqueRegions.map(region => (
                                                <div key={region.regionId} className='w-full py-2 justify-start items-center gap-2 inline-flex'>
                                                    <input
                                                        checked={selectedRegions.includes(region.regionId)}
                                                        type='checkbox'
                                                        className='w-4 h-4 mx-1'
                                                        onChange={() => handleRegionClick(region.regionId)}
                                                    />
                                                    <p>{region.regionName}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='w-full h-auto px-4 py-2 flex-col justify-start items-start flex overflow-y-auto'>
                                        <div className='w-full py-2 justify-start items-end gap-2 inline-flex'>
                                            <h3>Bransjer</h3>
                                        </div>
                                        {props.finishedBranch.map((branch, index) => (
                                            <div key={`branchCategoryId-${branch.branchCategoryId || index}`} className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                                                <input
                                                    checked={selectedBranches.includes(branch.branchCategoryId)}
                                                    type='checkbox'
                                                    className='w-4 h-4 mx-1'
                                                    onClick={() => handleBranchClick(branch.branchCategoryId)} />
                                                <p>{props.categoriesBranch[branch.branchCategoryId]}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto">
                                        <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                            <h3>Stilling</h3>
                                        </div>
                                        <div className='w-full py-2 flex items-center gap-2.5'>
                                            <input
                                                checked={fullTimeOnly}
                                                type='checkbox'
                                                className='w-4 h-4 mx-1'
                                                onChange={handleFullTimeToggle}
                                            />
                                            <p>Fast</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                        <div className="hidden lg:block">
                            <div className="flex flex-col slate-gray">
                                <div className='w-full h-auto px-4 py-2 flex-col justify-start items-start flex overflow-y-auto'>
                                    <div className='w-full h-auto flex-col justify-start items-start flex'>
                                        <div className='w-full py-2 justify-start items-end gap-2 inline-flex'>
                                            <h3>Område</h3>
                                        </div>
                                        {props.uniqueRegions.map(region => (
                                            <div key={region.regionId} className='w-full py-2 justify-start items-center gap-2 inline-flex'>
                                                <input
                                                    checked={selectedRegions.includes(region.regionId)}
                                                    type='checkbox'
                                                    className='w-4 h-4 mx-1'
                                                    onChange={() => handleRegionClick(region.regionId)}
                                                />
                                                <p>{region.regionName}</p>
                                                <p>({jobApi.filter(job => job.regionId === region.regionId).length})</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-full h-auto px-4 py-2 flex-col justify-start items-start flex overflow-y-auto'>
                                    <div className='w-full py-2 justify-start items-end gap-2 inline-flex'>
                                        <h3>Bransjer</h3>
                                    </div>
                                    {props.finishedBranch.map((branch, index) => (
                                        <div key={`branchCategoryId-${branch.branchCategoryId || index}`} className='w-full py-2 justify-start items-center gap-2.5 inline-flex'>
                                            <input
                                                checked={selectedBranches.includes(branch.branchCategoryId)}
                                                type='checkbox'
                                                className='w-4 h-4 mx-1'
                                                onClick={() => handleBranchClick(branch.branchCategoryId)} />
                                            <p>{props.categoriesBranch[branch.branchCategoryId]}</p>
                                            <p>({jobApi.filter(job => job.branchCategoryId === branch.branchCategoryId).length})</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto">
                                    <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                        <h3>Stilling</h3>
                                    </div>
                                    <div className='w-full py-2 flex items-center gap-2.5'>
                                        <input
                                            checked={fullTimeOnly}
                                            type='checkbox'
                                            className='w-4 h-4 mx-1'
                                            onChange={handleFullTimeToggle}
                                        />
                                        <p>Fast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Job Results */}
                <div className=''>
                    {/* Assuming dynamic job results generation */}
                    {searchResults.length > 0 ? (
                        <ul className="flex flex-col gap-4">
                            {searchResults.map(job => (
                                <li key={`jobPostId-${job.id}`} className="shadow kf-border-light light-background flex sm:flex-row sm:h-[216px] w-full h-auto flex-col">
                                    <div className="sm:w-[216px] w-full sm:h-full h-[100px] flex justify-center items-center flex-shrink-0">
                                        <img className="max-w-full max-h-full object-contain" src={job.logo} alt="Placeholder" />
                                    </div>
                                    <div className="p-4 w-full overflow-auto">
                                        <h2 className='line-clamp-3'>{highlightText(job.companyName, searchQuery)}</h2>
                                        <p className='line-clamp-3'>{highlightText(job.name, searchQuery)}</p>
                                    </div>
                                    <div className="sm:w-[216px] w-full p-4 pb-0 flex flex-col justify-between flex-shrink-0 slate-gray-background">
                                        <div className="max-w-full overflow-hidden light">
                                            <h2 className='line-clamp-2'>{highlightText(job.title, searchQuery)}</h2>
                                            <p className='line-clamp-2'>{highlightText(job.position, searchQuery)}</p>
                                            <p className='line-clamp-2'>{highlightText(job.city, searchQuery)}</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <ButtonArrow href={{
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
                                                }
                                            }}
                                                direction='right'
                                            ></ButtonArrow>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center p-16 pb-32">Ingen resultater</p>
                    )}
                </div>
            </div>
            {/* "Finner ikke" Full Width at the Bottom */}
            <div className="w-full py-12 light-background shadow text-center">
                <div className="flex-col justify-start items-center gap-4 inline-flex">
                    <h2>Finner du ikke det du leter etter</h2>
                    <p>Vi jobber med et bredt spekter av stillinger innen kontor & handel samt industri</p>
                    <p>Send oss gjerne en CV og en åpen søknad her, så vil muligens ta kontakt for jobbmuligheter</p>
                    <p>Det hender også at vi representerer kunder hvor jobbmulighetene ikke bli annonsert slik som du ser denne listen.</p>
                    <div className=" items-center gap-16 inline-flex">
                        <button className="button">Send en åpen søknad</button>
                        <button className="button">Kontakt oss</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPosts;