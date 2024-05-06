import Image from "next/image";
import dnv from "../imagesMidlertidig/partners/dnv.png";
import ebber from "../imagesMidlertidig/partners/ebber.png";
import epicjqs from "../imagesMidlertidig/partners/epic-jqs.png";
import jobbkretser from "../imagesMidlertidig/partners/jobbkretser.png";
import reviderbeidsgiver from "../imagesMidlertidig/partners/revidert-arbeidsgiver.png";
import startbank from "../imagesMidlertidig/partners/startbank.png";
import nho from "../imagesMidlertidig/partners/nho.png";

export default function PartnersAndSertifications({PandSTitle, PandSImages}) {
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
            {PandSTitle}
          </h2>
          <div className="2xl:flex xl:space-x-4  justify-items-center items-center md:pb-0 xl:flex-row xl:gap-0 lg:grid-cols-4 grid md:grid-cols-3 grid-cols-2 md:gap-12 sm:gap:2 ">
            {PandSImages.map((item) => (
              <div id="partnerBox"
                key={item.index}
               
                className="bg-partner-box shadow-lg  align-middle p-4 mb-4 rounded-connie w-1/4 flex items-center justify-center"
              >
                <img
                  className="aspect-square object-contain"
                  src={item}
                  alt={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
