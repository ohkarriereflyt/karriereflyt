import { ContactEmployee, ContactForm, ContactInfo, Footer, Modal } from "../../components/index";
import dynamic from 'next/dynamic';

const LocationWithNoSSR = dynamic(() => import('../../components/Location'), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="mx-auto w-full backdrop-blur-xl pt-4 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16" >
        <headline className="justify-center text-center">Kontakt oss</headline>
        <subheadline className="justify-center text-center pb-4">Døren vår står alltid åpen, vi er også bare én telefonsamtale unna!</subheadline>
        <ContactEmployee />
      </div>
      <svg width="2560" height="60" viewBox="0 0 2560 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '-0.1px' }}>
        <g clipPath="url(#clip0_650_12706)">
          <g opacity="0.5" filter="url(#filter0_di_650_12706)">
            <path d="M0 30L2560 30.0001V60H0.000305016L0 30Z" fill="#6B858D" />
          </g>
          <path opacity="0.2" d="M0 0L2560 0.000204861V60H0.000305016L0 0Z" fill="#6B858D" />
        </g>
        <defs>
          <filter id="filter0_di_650_12706" x="-20" y="6" width="2560" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_650_12706" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_650_12706" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="-10" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_650_12706" />
          </filter>
          <clipPath id="clip0_650_12706">
            <rect width="2560" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="bg-slate-gray-flat w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 p-16 flex md:flex-row-reverse flex-col gap-16">
          <div className="w-full">
            <ContactInfo />
            <LocationWithNoSSR address={'C. Sundts Gate 51'} />
          </div>
          <ContactForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
