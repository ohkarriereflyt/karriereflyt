'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Home() {
    const pathname = usePathname();
    return (
        <main>
            {/* Hero section with text and images */}
            <div className="flex justify-between items-center h-screen">
                <div className="w-3/5 mx-auto">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full lg:w-1/2 p-8">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Rekruttering og bemanning</h1>
                            <p className="text-xl text-gray-600 mb-8">Profesjonell samarbeidspartner i ansettelser, headhunting og innleie</p>
                            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" href="/applicants">For jobbsøkere</Link>
                            <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href="/services">For bedrifter</Link>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end p-8">
                            <img src="/path/to/your/image1.jpg" alt="Image 1" className="mb-4" />
                            <img src="/path/to/your/image2.jpg" alt="Image 2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section at 60% */}
            <div className="w-3/5 mx-auto">
                {/* Tilbakemeldinger fra våre kunder */}
                <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Tilbakemeldinger fra våre kunder</h2>
                    <div className="flex justify-center space-x-4">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Kundeanmeldelse 1</div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Kundeanmeldelse 2</div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Kundeanmeldelse 3</div>
                    </div>
                </div>

                {/* Som partner med jobbkrester */}
                <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Som partner med jobbkrester er vi:</h2>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full">
                        <ul className="list-inside list-disc">
                            <li>Partner 1</li>
                            <li>Partner 2</li>
                            <li>Partner 3</li>
                            <li>Partner 4</li>
                            <li>Partner 5</li>
                        </ul>
                    </div>
                </div>

                {/* Samarbeidspartnere og sertifiseringer */}
                <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Samarbeidspartnere og sertifiseringer</h2>
                    <div className="flex justify-center space-x-4">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Logo 1</div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Logo 2</div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4">Logo 3</div>
                    </div>
                </div>

                {/* Bottom buttons */}
                <div className="flex justify-center space-x-4 py-8">
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/applicants">For jobbsøkere</Link>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href="/services">For bedrifter</Link>
                </div>
            </div>
        </main>
    );
}