import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactButton from "./ContactButton";

export default function OurSubjectArea({subjectAreaTitle, subjectAreaCont1Title,  subjectAreaCont1Items, subjectAreaCont2Title,  subjectAreaCont2Items, subjectAreaFooterText}) {
  return (
    <>
      <h1 className="text-center text-subHeadline text-text-flat-inverted mt-36 mb-10">
        {subjectAreaTitle}
      </h1>
      <div className="max-w-7xl bg-slate-gray-flat w-full mx-auto md:px-0 px-8 lg:flex xl:flex-row lg:flex-col  text-slate-gray-flat font-bold">
        <div className=" xl:w-45 shadow-lg rounded-connie p-5 border-2 lg:mb-0 mb-12 bg-background-flat border-border-dark">
          <h3 className="pb-4 md:text-header2 text-mobileHeader2">
            {subjectAreaCont1Title}
          </h3>
          {subjectAreaCont1Items.map((item) => (
            <div key={item.index} className="py-2 flex" style={{}}>
              <FontAwesomeIcon icon={faCheck} className="mr-5 mt-1" />
              <li className="md:text-header3 text-mobileHeader3 inline">
                {item}
              </li>
            </div>
          ))}
        </div>
        <div className="lg:w-10 md:h-4"></div>

        <div className=" xl:w-45 shadow-lg rounded-connie p-5 border-4 lg:mb-0 mb-12 bg-background-flat border-border-dark">
          <h3 className="pb-4 md:text-header2 text-mobileHeader2">{subjectAreaCont2Title}</h3>
          {subjectAreaCont2Items.map((item) => (
            <div key={item.index} className="py-2 flex" style={{}}>
              <FontAwesomeIcon icon={faCheck} className="mr-5 mt-1" />
              <li className="inline md:text-header3 text-mobileHeader3">
                {item}
              </li>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto mb-36 mt-12 ">
        <p className="text-center md:text-xl text-mobileNormal text-text-flat-inverted">
          {subjectAreaFooterText}
        </p>
        {/* <ContactButton /> */}
      </div>
    </>
  );
}
