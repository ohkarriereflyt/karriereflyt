import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ReadMore({ direction = "right" }) {
  const icon = direction === "down" ? faArrowDown : faArrowRight;

  return (
    <div className="flex items-center mt-2"> 
      <p className="text-sm inline mr-2">Les mer</p> 
      <FontAwesomeIcon
        icon={icon}
        className="text-xs h-6 w-6 rounded-full bg-secondary-blue-bg p-1" 
      />
    </div>
  );
}

