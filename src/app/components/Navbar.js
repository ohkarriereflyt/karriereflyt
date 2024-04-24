"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactButton from "./ContactButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed z-10 w-full bg-gradient-to-b from-gr-start to-gr-end text-text-flat p-5 backdrop-blur-3xl ">
        <div className="md:w-3/5 mx-auto flex justify-between items-center">
          <Link
            className={`flex hover:text-blue-400 ${
              pathname === "/" ? "text-text-flat" : "text-text-flat"
            }`}
            href="/"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.917 57.9089C40.3599 59.6214 46.4739 60.4131 51.7545 56.704C51.7759 56.6861 51.7868 56.6768 51.7868 56.6768C52.9022 54.7056 50.2264 55.2747 45.8934 56.1961C42.8158 56.8505 38.9021 57.6828 34.917 57.9089Z"
                fill="#53727A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.917 57.9089C40.3599 59.6214 46.4739 60.4131 51.7545 56.704C51.7759 56.6861 51.7868 56.6768 51.7868 56.6768C52.9022 54.7056 50.2264 55.2747 45.8934 56.1961C42.8158 56.8505 38.9021 57.6828 34.917 57.9089Z"
                fill="url(#paint0_linear_848_314)"
              />
              <path
                d="M51.787 56.5868C51.787 56.5868 43.5222 63.6341 34.0216 63.9658C24.521 64.2976 15.9113 61.4692 15.7934 58.094C15.6755 54.7188 18.3908 53.6227 22.016 53.4961C27.1414 53.3171 41.1601 64.092 51.787 56.5868Z"
                fill="url(#paint1_linear_848_314)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60.5799 38.8859C60.6073 39.0541 61.7113 46.1817 52.0757 45.8452C47.3748 45.681 41.9343 43.3673 36.2993 40.9708C35.6811 40.708 35.0606 40.4441 34.4385 40.1819C34.3229 38.8624 34.4054 37.9879 34.4054 37.9879C45.4394 44.7401 52.262 41.3275 56.3122 39.3017C58.4146 38.2501 59.7699 37.5722 60.5794 38.8835C60.5794 38.8835 60.5796 38.8843 60.5799 38.8859C60.5799 38.8859 60.5799 38.8859 60.5799 38.8859ZM60.817 41.9764C60.7264 46.1006 58.966 52.8445 48.3398 52.4734C48.2179 52.4691 48.0963 52.4643 47.9751 52.4587C48.0956 52.4647 48.2171 52.4699 48.3398 52.4742C58.9666 52.8453 60.7266 46.1006 60.817 41.9764Z"
                fill="#53727A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60.5799 38.8859C60.6073 39.0541 61.7113 46.1817 52.0757 45.8452C47.3748 45.681 41.9343 43.3673 36.2993 40.9708C35.6811 40.708 35.0606 40.4441 34.4385 40.1819C34.3229 38.8624 34.4054 37.9879 34.4054 37.9879C45.4394 44.7401 52.262 41.3275 56.3122 39.3017C58.4146 38.2501 59.7699 37.5722 60.5794 38.8835C60.5794 38.8835 60.5796 38.8843 60.5799 38.8859C60.5799 38.8859 60.5799 38.8859 60.5799 38.8859ZM60.817 41.9764C60.7264 46.1006 58.966 52.8445 48.3398 52.4734C48.2179 52.4691 48.0963 52.4643 47.9751 52.4587C48.0956 52.4647 48.2171 52.4699 48.3398 52.4742C58.9666 52.8453 60.7266 46.1006 60.817 41.9764Z"
                fill="url(#paint2_linear_848_314)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.857 49.3851C31.799 48.1207 29.0384 46.6424 26.5183 45.2929C22.4988 43.1405 19.0914 41.3158 16.0662 41.2102C8.6907 40.9526 0.903693 45.3116 5.46191 50.9779C5.13638 50.6589 4.84412 50.3354 4.58386 50.0085C4.84327 50.3354 5.13562 50.6595 5.46226 50.9796C7.89001 53.3588 11.5923 52.3049 16.1656 51.0031C21.5811 49.4616 28.218 47.5724 35.4064 50.6241C35.4064 50.6241 35.2231 50.1556 34.857 49.3851Z"
                fill="#53727A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.857 49.3851C31.799 48.1207 29.0384 46.6424 26.5183 45.2929C22.4988 43.1405 19.0914 41.3158 16.0662 41.2102C8.6907 40.9526 0.903693 45.3116 5.46191 50.9779C5.13638 50.6589 4.84412 50.3354 4.58386 50.0085C4.84327 50.3354 5.13562 50.6595 5.46226 50.9796C7.89001 53.3588 11.5923 52.3049 16.1656 51.0031C21.5811 49.4616 28.218 47.5724 35.4064 50.6241C35.4064 50.6241 35.2231 50.1556 34.857 49.3851Z"
                fill="url(#paint3_linear_848_314)"
              />
              <path
                d="M52.0763 45.8405C61.8269 46.181 60.58 38.8782 60.58 38.8782C62.0562 43.5411 58.4586 54.1826 48.9987 55.12C39.5388 56.0574 23.4424 41.4612 16.0669 41.2037C8.69143 40.9461 1.63399 45.8405 5.46264 50.9714C-1.55643 44.0928 1.48008 27.4663 16.0668 27.9757C30.6535 28.4851 42.3256 45.5 52.0763 45.8405Z"
                fill="url(#paint4_linear_848_314)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60.8064 25.4141C60.8053 29.2275 55.6705 30.3089 53.9195 29.9778C50.1762 29.2698 47.5098 26.0428 44.5673 22.1876C45.5447 23.1273 46.8999 24.2356 48.6834 25.2889C50.8223 26.5522 53.1488 25.7923 55.2792 25.0964C57.4665 24.3819 59.4473 23.7349 60.8064 25.4141ZM61.0195 25.6854C61.7588 26.6639 62.2428 27.6724 62.5039 28.6755C62.2953 27.732 61.8139 26.7278 61.0195 25.6854Z"
                fill="#53727A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60.8064 25.4141C60.8053 29.2275 55.6705 30.3089 53.9195 29.9778C50.1762 29.2698 47.5098 26.0428 44.5673 22.1876C45.5447 23.1273 46.8999 24.2356 48.6834 25.2889C50.8223 26.5522 53.1488 25.7923 55.2792 25.0964C57.4665 24.3819 59.4473 23.7349 60.8064 25.4141ZM61.0195 25.6854C61.7588 26.6639 62.2428 27.6724 62.5039 28.6755C62.2953 27.732 61.8139 26.7278 61.0195 25.6854Z"
                fill="url(#paint5_linear_848_314)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.9921 31.7269C40.2448 30.9644 39.4856 30.1703 38.7116 29.3605C33.3646 23.7672 27.3066 17.4299 19.544 15.6377C5.65494 12.4312 1.67694 19.0814 1.8703 23.2349C1.8707 23.2364 1.87109 23.238 1.87148 23.2395C3.32329 28.8635 7.87344 27.9149 14.0305 26.6312C21.5316 25.0674 31.4177 23.0064 40.9921 31.7269Z"
                fill="#53727A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.9921 31.7269C40.2448 30.9644 39.4856 30.1703 38.7116 29.3605C33.3646 23.7672 27.3066 17.4299 19.544 15.6377C5.65494 12.4312 1.67694 19.0814 1.8703 23.2349C1.8707 23.2364 1.87109 23.238 1.87148 23.2395C3.32329 28.8635 7.87344 27.9149 14.0305 26.6312C21.5316 25.0674 31.4177 23.0064 40.9921 31.7269Z"
                fill="url(#paint6_linear_848_314)"
              />
              <path
                d="M53.9203 29.9796C55.6715 30.3108 60.8072 29.2291 60.8072 25.4148C66.3006 32.2031 59.2118 40.6118 50.543 38.6104C41.8742 36.6091 33.4408 18.8401 19.5467 15.6324C5.65257 12.4247 1.67675 19.0809 1.87322 23.2341C0.111283 16.4087 9.21607 3.10574 25.6134 7.14811C42.0107 11.1905 44.695 28.2349 53.9203 29.9796Z"
                fill="url(#paint7_linear_848_314)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.4737 1.07874C25.4729 1.07932 25.472 1.07991 25.4711 1.08049C23.0427 2.70222 23.0049 5.64611 29.2208 7.08114C34.2149 8.23413 40.3105 9.64142 43.9188 13.0046C40.3052 8.03229 36.0061 2.80661 30.328 1.17364C30.328 1.17364 27.547 0.439501 25.4737 1.07874Z"
                fill="#53727A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.4737 1.07874C25.4729 1.07932 25.472 1.07991 25.4711 1.08049C23.0427 2.70222 23.0049 5.64611 29.2208 7.08114C34.2149 8.23413 40.3105 9.64142 43.9188 13.0046C40.3052 8.03229 36.0061 2.80661 30.328 1.17364C30.328 1.17364 27.547 0.439501 25.4737 1.07874Z"
                fill="url(#paint8_linear_848_314)"
              />
              <path
                d="M59.288 20.362C58.5845 23.409 56.3813 24.0557 53.3343 23.3522C47.4841 22.0016 41.6449 4.47833 30.329 1.22398C30.329 1.22398 27.546 0.489318 25.4725 1.12977C27.9009 -0.491953 34.4919 -0.125668 38.1482 0.718455C54.9674 4.60146 59.9914 17.3151 59.288 20.362Z"
                fill="url(#paint9_linear_848_314)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_848_314"
                  x1="50.628"
                  y1="56.5168"
                  x2="42.9694"
                  y2="58.0959"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0.2" />
                  <stop offset="1" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_848_314"
                  x1="33.6418"
                  y1="53.0901"
                  x2="34.0216"
                  y2="63.9658"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7E9AA3" />
                  <stop offset="1" stopColor="#516F76" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_848_314"
                  x1="33.4156"
                  y1="45.3957"
                  x2="60.9559"
                  y2="40.9957"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0.5" />
                  <stop offset="1" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_848_314"
                  x1="3.94562"
                  y1="53.774"
                  x2="25.2849"
                  y2="50.8346"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0.2" />
                  <stop offset="1" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_848_314"
                  x1="31.8233"
                  y1="28.5259"
                  x2="30.9138"
                  y2="54.5695"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7E9AA3" />
                  <stop offset="1" stopColor="#516F76" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_848_314"
                  x1="45.7926"
                  y1="27.9772"
                  x2="61.1734"
                  y2="23.9591"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0.5" />
                  <stop offset="1" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_848_314"
                  x1="19.3947"
                  y1="22.8357"
                  x2="13.5489"
                  y2="32.5886"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0.5" />
                  <stop offset="1" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_848_314"
                  x1="35.9633"
                  y1="9.5344"
                  x2="30.328"
                  y2="33.9434"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7E9AA3" />
                  <stop offset="1" stopColor="#516F76" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_848_314"
                  x1="38.0279"
                  y1="7.31272"
                  x2="23.2531"
                  y2="8.15899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0.5" />
                  <stop offset="1" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_848_314"
                  x1="44.364"
                  y1="2.15347"
                  x2="40.1714"
                  y2="20.3133"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7E9AA3" />
                  <stop offset="1" stopColor="#516F76" />
                </linearGradient>
              </defs>
            </svg>

            <h2 className="text-2xl mt-1">Karriereflyt</h2>
          </Link>

          <ul className="hidden md:flex space-x-7">
            <li className="flex items-center">
              <Link
                hrefLang="javascript:void(0)"
                className={`hover:text-blue-400 ${
                  pathname === "/applicants"
                    ? "text-blue-300 font-bold"
                    : "text-text-flat"
                }`}
                href="/applicants"
              >
                For jobbsøkere
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                hrefLang="javascript:void(0)"
                className={`hover:text-blue-400 ${
                  pathname === "/services"
                    ? "text-blue-300 font-bold"
                    : "text-text-flat"
                }`}
                href="/services"
              >
                Tjenester
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                hrefLang="javascript:void(0)"
                className={`hover:text-blue-400 ${
                  pathname === "/about"
                    ? "text-blue-300 font-bold"
                    : "text-text-flat"
                }`}
                href="/about"
              >
                Om oss
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                hrefLang="javascript:void(0)"
                className={`hover:text-blue-400 ${
                  pathname === "/contact"
                    ? "text-blue-300 font-bold"
                    : "text-text-flat"
                }`}
                href="/contact"
              >
                <button className="bg-background-flat kf-border-dark text-text-flat">Kontakt oss</button>
              </Link>
            </li>
          </ul>
          <div className="md:hidden cursor-pointer ml-auto pl-24">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <nav></nav>
      </nav>
    </>
  );
}