import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function CtaButtons() {
    const pathname = usePathname();

    return (
        <>
        <Link className="bg-button-color hover:bg-gray-800 text-white font-bold py-3 px-7 rounded-connie mb-4  border-solid border-4 border-button-border-color" href="/applicants">For jobbsøkere</Link>
        <Link className="bg-button-color hover:bg-gray-800 text-white font-bold py-3 px-7 rounded-connie ml-4 border-solid border-4 border-button-border-color" href="/services">For bedrifter</Link>
        </>
    )
}