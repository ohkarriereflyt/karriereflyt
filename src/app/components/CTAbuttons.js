import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function CtaButtons() {
    const pathname = usePathname();

    return (
        <>
        <Link className="bg-button-color hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4" href="/applicants">For jobbsøkere</Link>
        <Link className="bg-button-color hover:bg-green-700 text-white font-bold py-2 px-4 br rounded-xl ml-4" href="/services">For bedrifter</Link>
        </>
    )
}