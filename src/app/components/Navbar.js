'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link className={`hover:text-blue-400 ${pathname === '/' ? 'text-blue-300 font-bold' : 'text-gray-300'}`} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-400 ${pathname === '/applicants' ? 'text-blue-300 font-bold' : 'text-gray-300'}`}
                        href="/applicants"
                    >
                        For jobbsøkere
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-400 ${pathname === '/services' ? 'text-blue-300 font-bold' : 'text-gray-300'}`}
                        href="/services"
                    >
                        Tjenester
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-400 ${pathname === '/about' ? 'text-blue-300 font-bold' : 'text-gray-300'}`}
                        href="/about"
                    >
                        Om oss
                    </Link>
                </li>
                <li>
                    <Link
                        className={`hover:text-blue-400 ${pathname === '/contact' ? 'text-blue-300 font-bold' : 'text-gray-300'}`}
                        href="/contact"
                    >
                        Kontakt oss
                    </Link>
                </li>
            </ul>
        </nav>
    )
}