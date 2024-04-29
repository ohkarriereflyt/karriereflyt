import { EmployeeGrid, ContactForm, ContactInfo, Footer, Modal } from "../../components/index";
import dynamic from 'next/dynamic';

const LocationWithNoSSR = dynamic(() => import('../../components/Location'), {
  ssr: false,
});

const employees = [
  {
      name: 'Øyvind Haugen',
      title: 'Daglig leder / CEO',
      phone: '+47 41 28 28 78',
      email: 'oyvind@karriereflyt.no',
      // img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547462&authkey=%21ALrmYuoavoKnmP4&width=256',
      facebook: '',
      linkedin: '',
      stikkord: [
          'Profesjonell',
          'Hyggelig',
          'Effektiv',
      ],
      bio: 'Øyvind Haugen er daglig leder i Karriereflyt AS. Han har lang erfaring fra rekrutteringsbransjen og har hjulpet mange kunder med å finne den rette kandidaten til stillingen. Øyvind er en hyggelig og profesjonell person som alltid er effektiv i sitt arbeid.',
      bioShort: 'Øyvind Haugen er en erfaren leder og grunnlegger av Karriereflyt, et selskap dedikert til å hjelpe enkeltpersoner med å navigere gjennom karriereveien sin.',
  },
  {
      name: 'Finn Christian Aakre',
      title: 'Rekrutteringsrådgiver',
      phone: '+47 46 84 91 97',
      email: 'finn@karriereflyt.no',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/768px-Face-smile.svg.png',
      facebook: '',
      linkedin: '',
  },
  {
      name: 'Andrine Sanden',
      title: 'Rekrutteringsrådgiver',
      phone: '+47 99 49 66 35',
      email: 'andrine@karriereflyt.no',
      img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547466&authkey=%21AEtsTInMxK8m00E&width=256',
      facebook: '',
      linkedin: '',
  },
  {
      name: 'Hanna Arnesen',
      title: 'Rekrutteringsrådgiver',
      phone: '+47 47 84 88 62',
      email: 'hanna@karriereflyt.no',
      img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547464&authkey=%21AOhOwwGCS6LEqNM&width=256',
      facebook: '',
      linkedin: '',
  },
  {
      name: 'Sofie Malsen',
      title: 'Rekrutteringsrådgiver',
      phone: '+47 41 28 28 78',
      email: 'sofie@karriereflyt.no',
      img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547460&authkey=%21AP45A98V2fZd1_s&width=256',
      facebook: '',
      linkedin: '',
  },
  {
      name: 'Connie Haugen',
      title: 'Styremedlem / Rådgiver',
      phone: '',
      email: 'connie@karriereflyt.no',
      img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547465&authkey=%21AOZmY5z_nDKRTN0&width=256',
      facebook: '',
      linkedin: '',
  },
];

export default function Page() {
  return (
    <div className="mx-auto w-full backdrop-blur-xl pt-4 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16" >
        <headline className="justify-center text-center">Kontakt oss</headline>
        <subheadline className="justify-center text-center pb-4">Døren vår står alltid åpen, vi er også bare én telefonsamtale unna!</subheadline>
        <EmployeeGrid employees={employees} />
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
      <Footer transitionLine={false}/>
    </div>
  );
}
