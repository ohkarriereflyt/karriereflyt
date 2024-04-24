import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ReadMore } from "../components/index";

const ServiceCardRight = ({
  SvgIcon,
  squareColor = "bg-gray-300",
  headingFourText = "Default Title",
  headingFourColor = "text-gray-700",
  headingOneText = "Main Title",
  headingOneColor = "text-gray-600",
  listItems = [
    { text: "Item 1 Description" },
    { text: "Item 2 Description" },
    { text: "Item 3 Description" }
  ],
  readMoreProps = {} // Adding a prop to pass down to ReadMore
}) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden md:flex-row-reverse">
      <div className={`flex-none w-full ${squareColor} flex items-center justify-center p-6 md:w-1/3`}>
        {SvgIcon && <SvgIcon />}
      </div>
      
      <div className="flex-grow p-6 md:w-2/3">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className={`text-md ${headingFourColor} font-semibold`}>{headingFourText}</h4>
            <h1 className={`text-3xl ${headingOneColor}`}>{headingOneText}</h1>
            <ul className="list-none mt-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center mb-4"> 
                  <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-4 h-4" /> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <ReadMore {...readMoreProps} />  {/* Pass custom props to ReadMore */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardRight;
