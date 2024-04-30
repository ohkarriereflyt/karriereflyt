"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ReadMore({
  direction = "right",
  textColor = "text-gray-700", 
  circleColor = "bg-secondary-blue-bg",
  iconColor = "text-white",
  text1 = "Here is the first part of detailed information.", 
  text2 = "Here is the second part of detailed information.",
  text1Color = "text-gray-500", 
  text2Color = "text-gray-500"  
}) {
  const [isOpen, setIsOpen] = useState(false);

  let icon = faArrowRight; 
  let buttonText = "Les mer"; 

  if (direction === "down") {
    icon = isOpen ? faArrowUp : faArrowDown;
    buttonText = isOpen ? "Lukk" : "Les mer";
  } else if (direction === "right") {
    icon = isOpen ? faArrowUp : faArrowRight;
    buttonText = isOpen ? "Lukk" : "Les mer";
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <>
          <p className={`text-sm mt-2 ${text1Color}`}>{text1}</p>
          <p className={`text-sm mt-4 ${text2Color}`}>{text2}</p>
        </>
      )}
      <div className="flex justify-end md:justify-start w-full">
        <button onClick={toggle} className={`flex items-center mt-2 p-0  border-none bg-transparent outline-none focus:outline-none ${textColor}`}>
          <p className="text-sm inline mr-2">{buttonText}</p>
          <span className={`relative inline-flex justify-center items-center ${iconColor} h-6 w-6 text-xs`}>
            <span className={`absolute inset-0 rounded-full ${circleColor} opacity-20`}></span>
            <FontAwesomeIcon icon={icon} className="relative z-10 " />
          </span>
        </button>
      </div>
    </div>
  );
}
