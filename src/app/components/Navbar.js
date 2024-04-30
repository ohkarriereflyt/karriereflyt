"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import Banner from "../imagesMidlertidig/banner-slategray-full-2.0.svg";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed z-10 w-full bg-gradient-to-b from-gr-start to-gr-end text-text-flat backdrop-blur-3xl overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="flex justify-between items-center w-full lg:w-auto">
              <Link href="/" className="flex">
                <div className="flex items-center mr-2 h-20">
                  <Image src={Banner} alt="Karriereflyt Logo"  />
                </div>
              </Link>
              <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
              </div>
            </div>

            <ul className={`flex flex-col items-start space-y-4 w-full pt-3 pb-6 ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
              <li>
                <Link href="/" className="text-lg font-semibold py-2">Hjem</Link>
              </li>
              <li>
                <Link href="/application" className="text-lg font-semibold py-2">For jobbsøkere</Link>
              </li>
              <li>
                <Link href="/services" className="text-lg font-semibold py-2">Tjenester</Link>
              </li>
              <li>
                <Link href="/about" className="text-lg font-semibold py-2" >Om oss</Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg font-semibold py-2">Kontakt oss</Link>
              </li>
            </ul>

            <div className="hidden lg:flex w-full justify-end">
              <ul className="flex flex-row items-center space-x-7">
                <li>
                  <Link href="/" className={`${pathname === "/" ? "" : "text-text-flat"}`}>Hjem</Link>
                </li>
                <li>
                  <Link href="/application" className={`${pathname === "/application" ? "" : "text-text-flat"}`}>For jobbsøkere</Link>
                </li>
                <li>
                  <Link href="/services" className={`${pathname === "/services" ? "" : "text-text-flat"}`}>Tjenester</Link>
                </li>
                <li>
                  <Link href="/about" className={`${pathname === "/about" ? "" : "text-text-flat"}`}>Om oss</Link>
                </li>
                <li>
                  <Link href="/contact" className={`${pathname === "/contact" ? "" : "text-text-flat"}`}>
                    <button className="button light-background kf-border-dark dark">Kontakt oss</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}