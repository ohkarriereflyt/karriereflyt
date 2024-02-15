'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Home() {
    const pathname = usePathname()
    return (
        <main>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Rekruttering og bemanning</h1>
                <p className="text-xl text-gray-600 mb-8">Profesjonell samarbeidspartner i ansettelser, headhunting og innleie</p>
                <div className="flex space-x-4">
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        href="/applicants">
                        For jobbsøkere
                    </Link>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        href="/services">
                        For bedrifter
                    </Link>
                </div>
            </div>
        </main>
    );
}
