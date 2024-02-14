'use client'
// TODO: go through all 'use client' and figure out whats best
import { useState } from 'react';

// Example job listings (replace with real data fetched from an API or database)
const jobListings = [
    { id: 1, title: 'Software Engineer', type: 'Full-time', location: 'Oslo' },
    { id: 2, title: 'Product Manager', type: 'Full-time', location: 'Bergen' },
    { id: 3, title: 'Graphic Designer', type: 'Part-time', location: 'Trondheim' },
    // Add more job listings as needed
];

export default function Page() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    // Function to handle search (update to implement actual search logic)
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Function to handle filter change (update to implement actual filter logic)
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">How to Apply for a Job</h1>
            <p className="mb-6">[Include application information here]</p>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border p-2 w-full mb-4"
                />
                <select onChange={handleFilterChange} className="border p-2 w-full">
                    <option value="">Filter by type...</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    {/* Add more filter options as needed */}
                </select>
            </div>

            <ul className="space-y-4">
                {jobListings
                    // Filter jobs based on search term and filter selection (simplified example)
                    .filter((job) =>
                        job.title.toLowerCase().includes(searchTerm.toLowerCase()) && (filter ? job.type === filter : true)
                    )
                    .map((job) => (
                        <li key={job.id} className="border p-4">
                            <h2 className="text-xl font-bold">{job.title}</h2>
                            <p>{job.type} | {job.location}</p>
                        </li>
                    ))}
            </ul>
        </div>
    )
}