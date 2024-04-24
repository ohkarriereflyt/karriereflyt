import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ReadMore({
  direction = "right",
  textColor = "text-gray-700",
  circleColor = "bg-secondary-blue-bg",
  iconColor = "text-white"
}) {
  const icon = direction === "down" ? faArrowDown : faArrowRight;

  return (
    <div className="flex items-center mt-2">
      <p className={`text-sm inline mr-2 ${textColor}`}>Les mer</p>
      <span className={`relative inline-flex justify-center items-center ${iconColor} h-6 w-6 text-xs`}>
        <span className={`absolute inset-0 rounded-full ${circleColor} opacity-20`}></span>
        <FontAwesomeIcon
          icon={icon}
          className="relative z-10"
        />
      </span>
    </div>
  );
}
