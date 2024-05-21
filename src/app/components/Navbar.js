"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Banner from "../images/banner-slategray-full-2.0.svg";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const mobileLinkStyle = (path) => {
    return pathname === path ? "text-lg font-bold py-2" : " text-lg  py-2";
  };

  const desktopLinkStyle = (path) => {
    return pathname === path ? " font-bold " : "";
  };

  return (
    <nav className="fixed z-10 w-full overflow-hidden navbar">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <Link href="/" className="flex">
              <div className="flex items-center mr-2 h-20">
                <Image src={Banner} alt="Karriereflyt Logo" className="w-48 h-16 md:w-64 md:h-20 lg:w-72 lg:h-24" />
              </div>
            </Link>
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </div>
          </div>

          <ul className={`flex flex-col items-start space-y-4 w-full pt-3 pb-6 ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
            <li><Link href="/" className={mobileLinkStyle("/")} onClick={closeMenu}>Hjem</Link></li>
            <li><Link href="/applicants" className={mobileLinkStyle("/applicants")} onClick={closeMenu}>For jobbsøkere</Link></li>
            <li><Link href="/services" className={mobileLinkStyle("/services")} onClick={closeMenu}>Tjenester</Link></li>
            <li><Link href="/about" className={mobileLinkStyle("/about")} onClick={closeMenu}>Om oss</Link></li>
            <li><Link href="/contact" className={mobileLinkStyle("/about")} onClick={closeMenu}>Kontakt oss</Link></li>
          </ul>

          <div className="hidden lg:flex w-full justify-end">
            <ul className="flex flex-row items-center space-x-7">
              <li><Link href="/" className={desktopLinkStyle("/")}>Hjem</Link></li>
              <li><Link href="/applicants" className={desktopLinkStyle("/applicants")}>For jobbsøkere</Link></li>
              <li><Link href="/services" className={desktopLinkStyle("/services")}>Tjenester</Link></li>
              <li><Link href="/about" className={desktopLinkStyle("/about")}>Om oss</Link></li>
              <li><Link href="/contact" className={desktopLinkStyle("/contact")}>
                <button className="button light-background kf-border-dark dark">Kontakt oss</button>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
