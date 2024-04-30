import Image from "next/image";
import dnv from "../imagesMidlertidig/partners/dnv.png";
import ebber from "../imagesMidlertidig/partners/ebber.png";
import epicjqs from "../imagesMidlertidig/partners/epic-jqs.png";
import jobbkretser from "../imagesMidlertidig/partners/jobbkretser.png";
import reviderbeidsgiver from "../imagesMidlertidig/partners/revidert-arbeidsgiver.png";
import startbank from "../imagesMidlertidig/partners/startbank.png";
import nho from "../imagesMidlertidig/partners/nho.png";

const partners = [
  {
    name: "Dnv",
    logo: dnv,
  },
  {
    name: "ebber",
    logo: ebber,
  },
  {
    name: "epicjqs",
    logo: epicjqs,
  },
  {
    name: "jobbkretser",
    logo: jobbkretser,
  },
  {
    name: "reviderbeidsgiver",
    logo: reviderbeidsgiver,
  },
  {
    name: "startbank",
    logo: startbank,
  },
  {
    name: "nho",
    logo: nho,
  },
];

export default function PartnersAndSertifications() {
  return (
    <div
      className="h-fit"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="lg:w-3/5 lg:mx-auto lg:pt-24 pt-12 w-full">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-card-text-color mb-12">
            Samarbeidspartnere & sertifiseringer
          </h2>
          <div className="2xl:flex xl:space-x-4  justify-items-center items-center md:pb-0 xl:flex-row xl:gap-0 lg:grid-cols-4 grid md:grid-cols-3 grid-cols-2 md:gap-12 sm:gap:2 ">
            {partners.map((partner) => (
              <div id="partnerBox"
                key={partner.name}
               
                className="bg-partner-box shadow-lg  align-middle p-4 mb-4 rounded-connie w-1/4 flex items-center justify-center"
              >
                <Image
                  className="aspect-square object-contain"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
