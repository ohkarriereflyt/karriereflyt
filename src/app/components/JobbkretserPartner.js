import Sertifications from "./Sertifications";
import ButtonArrow from "./ButtonArrow";

export default function JobbkretserPartner({ jobbkretserTitle, jobbkretserContItems, jobbkretserImage, jobbkretserReadMore }) {
  return (
    <div className="w-full slate-gray-background">
      <div className="max-w-7xl w-full mx-auto p-8 light">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col justify-end lg:mb-8 md:text-left text-center">
            <h1>{jobbkretserTitle}</h1>
          </div>
          <div className="relative row-span-2 mx-auto">
            <img className="bannerImage opacity-40" src={jobbkretserImage} alt="" />
            <div className="xl:w-60 xl:h-60 w-36 h-36 relative xl:m-44 m-24">
              <div id="kretsBox1" className="sharedBoxClass top-full left-1/2 kf-border-light-big"></div>
              <div id="kretsBox2" className="sharedBoxClass top-1/2 left-0 kf-border-light-big"></div>
              <div id="kretsBox3" className="sharedBoxClass top-0 left-1/2 kf-border-light-big"></div>
              <div id="kretsBox4" className="sharedBoxClass top-1/2 left-full kf-border-light-big"></div>
            </div>
          </div>
          <div>
            <Sertifications jobbkretserContItems={jobbkretserContItems} />
            <div className="flex md:justify-normal justify-end">
              <ButtonArrow href={{
                pathname: `/jobbkretser`,
                query: {
                  title: jobbkretserTitle,
                  contItems: jobbkretserContItems,
                  image: jobbkretserImage,
                  readMore: jobbkretserReadMore,
                }
              }}
              ></ButtonArrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
