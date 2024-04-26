import Link from 'next/link';
import { Footer, EmployeeGrid, localImg, TransitionLine } from '../../components/index';

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

import {
  OurHistorySection,
  OurVisionSection,
  Banner,
  EmployeSection,
  ContactButton,
} from "../../components/index";

export default function Page() {
  return (
      <div>
        <Banner/>
        <OurHistorySection />
        <OurVisionSection />
        <div className="bg-slate-gray-flat w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8 p-16">
            <h1 className="text-center light mb-8">Våre ansatte</h1>
            <div className="w-full mb-8">
              <EmployeeGrid employees={employees} backgroundColor='gray' foregroundColor='dark' border='dark' />
            </div>
            <div className='flex justify-center'>
              <Link href="/contact">
                <button className="bg-primary-flat text-white py-4">Kontakt oss</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer transitionLine={false}/>
      </div>
  );
}
