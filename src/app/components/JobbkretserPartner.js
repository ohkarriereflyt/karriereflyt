import bannerimage from "../imagesMidlertidig/Bannerimage.png";
import Image from "next/image";
import ReadMore from "./ReadMore";
import Sertifications from "./Sertifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function JobbkretserPartner({jobbkretserTitle, jobbkretserContItems, jobbkretserImage, jobbkretserReadMore}) {
  return (
    <div className="lg:w-3/5 w-full  mx-auto lg:bg-inherit bg-slate-gray-flat  text-white md:pb-36 pb-12">
      <div className="flex xl:flex-row xl:order-first xl:items-start items-center  order-2 flex-col">
        <div>
          <h2 className="text-3xl  mb-8 xl:visible invisible text-text-flat-inverted xl:">
            {jobbkretserTitle}
          </h2>

          <Sertifications jobbkretserContItems = {jobbkretserContItems}/>
          <ReadMore jobbkretserReadMore = {jobbkretserReadMore}/>
        </div>
        <div className="box-container lg:py-0 md:pb-36 pb-0 lg:mt-0 xl:pl-24 pl-0 xl:order-2 order-first ">
          <h2 className="md:text-header text-mobileHeader mb-60 xl:invisible visible text-text-flat-inverted text-center">
            {jobbkretserTitle}
          </h2>
          <div id="kretsBoxContainer" className="md:pr-0 pr-24">
            <img className="bannerImage" src={jobbkretserImage} alt="" />
            <div
              className="sharedBoxClass lg:rounded-notSquared rounded-connie flex justify-center items-center"
              id="kretsBoxOne"
            >
              1
            </div>
            <div
              className="sharedBoxClass lg:rounded-notSquared rounded-connie"
              id="kretsBoxTwo"
            >
              2
            </div>
            <div
              className="sharedBoxClass lg:rounded-notSquared rounded-connie"
              id="kretsBoxThree"
            >
              3
            </div>
            <div
              className="sharedBoxClass lg:rounded-notSquared rounded-connie"
              id="kretsBoxFour"
            >
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
