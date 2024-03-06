import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bannerimage from "../imagesMidlertidig/Bannerimage.png";
import Image from "next/image";
import ReadMore from "./ReadMore";
export default function JobbkretserPartner() {
  return (
    <div className="w-3/5 mx-auto mt-12 py-32 text-white">
      <div className="text-center py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" w-4/5 flex flex-col text-start text-gray-">
          <h2 className="text-3xl mb-8">Som partner med jobbkrester er vi:</h2>
          <div className="py-2">
            <FontAwesomeIcon icon={faCheck} className="mr-3" />
            <p className="inline">Medlem av NHO Service og Handel.</p>
          </div>

          <div className="py-2">
            <FontAwesomeIcon icon={faCheck} className="mr-3" />
            <p className="inline">Revidert arbeidsgiver</p>
          </div>

          <div className="py-2">
            <FontAwesomeIcon icon={faCheck} className="mr-3" />
            <p className="inline">Registrert i EPIM.</p>
          </div>
          <div className="py-2">
            <FontAwesomeIcon icon={faCheck} className="mr-3" />
            Registrert i Startbank.
            <p className="inline"></p>
          </div>
          <div className="py-2 flex">
            <FontAwesomeIcon icon={faCheck} className="mr-3" />
            <p className="inline">
              Registret som godkjent bemanningsbyrå hos arbeidstilsynet
            </p>
          </div>
          <ReadMore />
        </div>

        <div className="flex flex-col">
          <Image
            src={bannerimage}
            alt=""
            style={{
              height: "110px",
              width: "450px",
              position: "absolute",
              marginTop: "85px",
              marginLeft: "20px",
              zIndex: "2",
            }}
          />
          <div className="rounded-notSquared" id="kretsBoxOne"></div>
          <div className="rounded-notSquared" id="kretsBoxTwo"></div>
          <div className="rounded-notSquared" id="kretsBoxThree"></div>
          <div className="rounded-notSquared" id="kretsBoxFour"></div>
        </div>
      </div>
    </div>
  );
}
