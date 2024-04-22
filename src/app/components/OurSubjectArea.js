import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactButton from "./ContactButton";

const mercantiles = [
  {
    position: "Markedsføring & reklame",
  },
  {
    position: "Bank, finans & forsikring",
  },
  {
    position: "Salg & prosjektledelse",
  },
  {
    position: "Økonomi & regnskap",
  },
  {
    position: "Rådgivning & konsulenter",
  },
  {
    position: "Ledels / mellom-ledelse",
  },
  {
    position: "Kontor & administrasjon",
  },
  {
    position: "IT & data",
  },
];

const industrials = [
  {
    position: "Bil og mekaniske fag",
  },
  {
    position: "Sveis- & platearbeid",
  },
  {
    position: "Offshore & verftsindustri",
  },
  {
    position: "Maskinering & metallarbeid",
  },
  {
    position: "Lager & logistikk",
  },
  {
    position: "Montører & hjelpearbeidere",
  },
  {
    position: "Elektro & installasjon",
  },
  {
    position: "Industriell produksjon",
  },
];

export default function OurSubjectArea() {
  return (
    <>
      <h1 className="text-center text-subHeadline text-text-flat-inverted mt-36 mb-10">
        Våre fagområder
      </h1>
      <div className="w-3/5  mx-auto lg:flex xl:flex-row lg:flex-col  text-slate-gray-flat font-bold">
        <div className=" xl:w-45 shadow-lg rounded-connie p-5 border-2 lg:mb-0 mb-12 bg-background-flat border-border-dark">
          <h3 className="pb-4 text-header2">Merkantile stillinger</h3>
          {mercantiles.map((mercantile) => (
            <div key={mercantile.position} className="py-2 flex" style={{}}>
              <FontAwesomeIcon icon={faCheck} className="mr-5 mt-1" />
              <li className="text-header3 inline">{mercantile.position}</li>
            </div>
          ))}
        </div>
        <div className="lg:w-10 md:h-4"></div>

        <div className="xl:w-45 shadow-lg rounded-connie p-5 border-2 lg:mb-0 sm:mb-12 bg-background-flat border-border-dark">
          <h3 className="pb-4 text-header2">Industri</h3>
          {industrials.map((industri) => (
            <div key={industri.position} className="py-2 flex" style={{}}>
              <FontAwesomeIcon icon={faCheck} className="mr-5 mt-1" />
              <li className="inline">{industri.position}</li>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/5 mx-auto mb-36 mt-12">
        <p className="text-center text-normal">
          Vi har likevel god innsikt i det meste av stillingsvarianter innen
          merkantile fag. Ta gjerne kontakt direkte med oss dersom du har et
          behov!
        </p>
        <ContactButton />
      </div>
    </>
  );
}
