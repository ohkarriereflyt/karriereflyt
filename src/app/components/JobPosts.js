'use client'
import { useState, useEffect } from 'react';
import ButtonArrow from './ButtonArrow';
import Link from 'next/link';

const JobPosts = (props) => {
    const [jobApi, setJobApi] = useState(props.jobApi);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(jobApi); //Det siste arrayet som blir vist. Det er arrayet som blir printet ut til siden etter den har blitt tuklet med
    const [selectedBranches, setSelectedBranches] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [fullTimeOnly, setFullTimeOnly] = useState(false);
    const [partTimeOnly, setParTimeOnly] = useState(false);
    const [engagementOnly, setEngagementOnly] = useState(false)
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
            filtered = filtered.filter(job => job.position === 'Fast');
        }

        if (partTimeOnly){
            filtered = filtered.filter(job => job.position === 'partTime')
        }

        if (engagementOnly){
            filtered = filtered.filter(job => job.position === "commitment")
        }

        setSearchResults(filtered);
    }

    // Trigger filter when jobApi, selectedBranches, or searchQuery changes
    useEffect(() => {
        filterJobs(searchQuery, selectedBranches, selectedRegions);
        setLoaded(true);
    }, [jobApi, selectedBranches, searchQuery, selectedRegions, fullTimeOnly, partTimeOnly, engagementOnly]);

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

    const handlePartTimeToggle = () => {
        setParTimeOnly(prev => !prev)
    }

    const handleEngagementToggle = () => {
        setEngagementOnly(prev => !prev)
    }


    function highlightText(text, query) {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? <span key={index} style={{ backgroundColor: '#A5BBC2' }}>{part}</span> : part
        );
    }

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    // jobApi.forEach(job => {
    //     console.log(job);
    // });

    return (
        <div className='w-full min-h-screen flex flex-col justify-between items-center'>
            {/* Din Karrierepartner (Full Width at the Top) */}
            <div className="w-full slate-gray-background shadow flex justify-center mb-4">
                <div className="max-w-7xl p-4 flex flex-col justify-start items-center relative z-10">
                    <div className="w-full justify-start items-start gap-8 inline-flex">
                        <div className='grow shrink basis-0 self-stretch py-4 flex-col justify-start items-start gap-4 inline-flex light'>
                            <h1 >{props.topSectionTitle}</h1>
                            <h2 >{props.topSectionSubTitle}</h2>
                            <p className={`${isExpanded ? '' : 'line-clamp-1'}`}>
                                {props.topSectionText}
                            </p>
                        </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                        <Link href="/contact#contact-form">
                            <button className="button">Send en åpen søknad</button>
                        </Link>
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
                                                    onChange={() => handleBranchClick(branch.branchCategoryId)} />
                                                <p>{props.categoriesBranch[branch.branchCategoryId]}</p>
                                                <p>({jobApi.filter(job => job.branchCategoryId === branch.branchCategoryId).length})</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto">
                                        <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                            <h3>Stilling</h3>
                                        </div>
                                        <div className={`w-full py-2 flex items-center gap-2.5 ${jobApi.filter(job => job.position === "Fast").length == 0 ? 'opacity-50' : ''}`}>
                                            <input
                                                checked={fullTimeOnly}
                                                type='checkbox'
                                                className='w-4 h-4 mx-1'
                                                onChange={handleFullTimeToggle}
                                                disabled={jobApi.filter(job => job.position === "Fast").length == 0}
                                            />
                                            <p>Fast</p>
                                            <p>({jobApi.filter(job => job.position === "Fast").length})</p>
                                        </div>
                                        <div className={`w-full py-2 flex items-center gap-2.5 ${jobApi.filter(job => job.position === "Partime").length == 0 ? 'opacity-50' : ''}`}>
                                            <input
                                                checked={partTimeOnly}
                                                type='checkbox'
                                                className='w-4 h-4 mx-1'
                                                onChange={handlePartTimeToggle}
                                                disabled={jobApi.filter(job => job.position === "Partime").length == 0}
                                            />
                                            <p>Deltid</p>
                                            <p>({jobApi.filter(job => job.position === "Partime").length})</p>
                                        </div>
                                        <div className={`w-full py-2 flex items-center gap-2.5 ${jobApi.filter(job => job.position === "commitment").length == 0 ? 'opacity-50' : ''}`}>
                                            <input
                                                checked={engagementOnly}
                                                type='checkbox'
                                                className='w-4 h-4 mx-1'
                                                onChange={handleEngagementToggle}
                                                disabled={jobApi.filter(job => job.position === "commitment").length == 0}
                                            />
                                            <p>Engasjemang</p>
                                            <p>({jobApi.filter(job => job.position === "commitment").length})</p>
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
                                                onChange={() => handleBranchClick(branch.branchCategoryId)} />
                                            <p>{props.categoriesBranch[branch.branchCategoryId]}</p>
                                            <p>({jobApi.filter(job => job.branchCategoryId === branch.branchCategoryId).length})</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full h-auto p-4 flex-col justify-start items-start flex overflow-y-auto">
                                    <div className='w-full py-2 justify-start items-end gap-2.5 inline-flex'>
                                        <h3>Stilling</h3>
                                    </div>
                                    <div className={`w-full py-2 flex items-center gap-2.5 ${jobApi.filter(job => job.position === "Fast").length == 0 ? 'opacity-50' : ''}`}>
                                        <input
                                            checked={fullTimeOnly}
                                            type='checkbox'
                                            className='w-4 h-4 mx-1'
                                            onChange={handleFullTimeToggle}
                                            disabled={jobApi.filter(job => job.position === "Fast").length == 0}
                                        />
                                        <p>Fast</p>
                                        <p>({jobApi.filter(job => job.position === "Fast").length})</p>
                                    </div>
                                    <div className={`w-full py-2 flex items-center gap-2.5 ${jobApi.filter(job => job.position === "Partime").length == 0 ? 'opacity-50' : ''}`}>
                                        <input 
                                            checked={partTimeOnly}
                                            type='checkbox'
                                            className='w-4 h-4 mx-1'
                                            onChange={handlePartTimeToggle}
                                            disabled={jobApi.filter(job => job.position === "Partime").length == 0}
                                        />
                                        <p>Deltid</p>
                                        <p>({jobApi.filter(job => job.position === "Partime").length})</p>
                                        </div>
                                    <div className={`w-full py-2 flex items-center gap-2.5 ${jobApi.filter(job => job.position === "commitment").length == 0 ? 'opacity-50' : ''}`}>
                                        <input
                                            checked={engagementOnly}
                                            type='checkbox'
                                            className='w-4 h-4 mx-1'
                                            onChange={handleEngagementToggle}
                                            disabled={jobApi.filter(job => job.position === "commitment").length == 0}
                                        />
                                        <p>Engasjemang</p>
                                        <p>({jobApi.filter(job => job.position === "commitment").length})</p>
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
                                <li key={`jobPostId-${job.id}`}>
                                    <Link
                                        className="shadow kf-border-light light-background flex md:flex-row md:h-[216px] w-full h-auto flex-col"
                                        href={{ pathname: `/applicants/${job.id}` }}>
                                        <div className="md:w-[216px] w-full md:h-full h-[100px] flex justify-center items-center flex-shrink-0">
                                            <img className="max-w-full max-h-full object-contain" src={job.logo} alt="Placeholder" />
                                        </div>
                                        <div className="p-4 w-full overflow-auto">
                                            <h2 className='line-clamp-3'>{highlightText(job.companyName, searchQuery)}</h2>
                                            <p className='line-clamp-3'>{highlightText(job.name, searchQuery)}</p>
                                        </div>
                                        <div className="md:w-[256px] w-full p-4 pb-0 flex flex-col justify-between flex-shrink-0 slate-gray-background">
                                            <div className="max-w-full overflow-hidden light">
                                                <h2 className='line-clamp-2'>{highlightText(job.title, searchQuery)}</h2>
                                                <div className='flex gap-2 py-1 items-center'>
                                                    <svg className='sm:h-8 h-6' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.4539 12.9622C5.02431 12.9622 4.70212 12.64 4.70212 12.2104C4.70212 11.7915 5.02431 11.4693 5.4539 11.4693H10.319V4.97175C10.319 4.5529 10.6413 4.2307 11.0601 4.2307C11.4789 4.2307 11.8119 4.5529 11.8119 4.97175V12.2104C11.8119 12.64 11.4789 12.9622 11.0601 12.9622H5.4539ZM11.0708 22.7568C17.0637 22.7568 22.0254 17.7844 22.0254 11.8022C22.0254 5.80945 17.0529 0.847656 11.0601 0.847656C5.07801 0.847656 0.116211 5.80945 0.116211 11.8022C0.116211 17.7844 5.08875 22.7568 11.0708 22.7568Z" fill="white" fillOpacity="0.2" />
                                                        <path d="M4.70312 12.2101C4.70312 12.6398 5.02532 12.962 5.45491 12.962H11.0611C11.4799 12.962 11.8129 12.6398 11.8129 12.2101V4.97151C11.8129 4.55266 11.4799 4.23047 11.0611 4.23047C10.6423 4.23047 10.32 4.55266 10.32 4.97151V11.4691H5.45491C5.02532 11.4691 4.70312 11.7913 4.70312 12.2101Z" fill="#FFFBF8" />
                                                    </svg>
                                                    <p className='line-clamp-2'>{highlightText(job.position, searchQuery)}</p>
                                                </div>
                                                <div className='flex gap-2 py-1 items-center'>
                                                    <svg className='sm:h-8 h-6' viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.0708 22.8272C17.0637 22.8272 22.0254 17.8654 22.0254 11.8725C22.0254 5.89051 17.0529 0.917969 11.0601 0.917969C5.07801 0.917969 0.116211 5.89051 0.116211 11.8725C0.116211 17.8654 5.08875 22.8272 11.0708 22.8272Z" fill="white" fillOpacity="0.2" />
                                                        <path d="M8.53613 7.72699C8.53613 6.33081 9.68529 5.20312 11.0707 5.20312C12.4669 5.20312 13.6054 6.33081 13.6054 7.72699C13.6054 8.87614 12.8535 9.82124 11.8333 10.122V15.6745C11.8333 17.3284 11.5862 18.7568 11.0707 18.7568C10.5659 18.7568 10.2975 17.2961 10.2975 15.6745V10.122C9.28791 9.8105 8.53613 8.8654 8.53613 7.72699Z" fill="white" />
                                                    </svg>
                                                    <p className='line-clamp-2'>{highlightText(job.city, searchQuery)}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end items-center sm:pb-1">
                                                <ButtonArrow
                                                    direction='right'
                                                ></ButtonArrow>
                                            </div>
                                        </div>
                                    </Link>
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
                    <h2>{props.bottomSectionTitle}</h2>
                    <p>{props.bottomSectionText}</p>
                    <div className=" items-center gap-16 inline-flex">
                        <Link href="/contact#contact-form">
                            <button className="button">Send en åpen søknad</button>
                        </Link>
                        <Link href="/contact">
                            <button className="button">Kontakt oss</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPosts;