import { ReadMore } from "../components/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const ServiceCardLeft = ({
  SvgIcon,
  squareColor = "bg-gray-300",
  headingFourText = "Kandidater",
  headingFourColor = "text-gray-700",
  headingOneText = "Rekruttering",
  headingOneColor = "text-gray-600",
  listItems = [
    { text: "Vi hjelper deg å nå dine behov og mål" },
    { text: "Oppfølging" },
    { text: "Kobler deg til nettverk av profesjonelle bedrifter" }
  ],
}) => {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <div className={`flex-none w-64 ${squareColor} flex items-center justify-center`}>
        {SvgIcon && <SvgIcon />} 
      </div>
      <div className="flex-grow p-6">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className={`text-md ${headingFourColor} font-semibold`}>{headingFourText}</h4>
            <h1 className={`text-3xl ${headingOneColor}`}>{headingOneText}</h1>
            <ul className="list-none mt-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {/* Use FontAwesomeIcon for checkmark */}
                  <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-4 h-4" /> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <ReadMore direction="down" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardLeft;
