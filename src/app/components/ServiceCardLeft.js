const ServiceCardLeft = ({
    icon = "✚",
    iconColor = "text-gray-600",
    squareColor = "bg-gray-300",
    headingFourText = "Kandidater",
    headingFourColor = "text-gray-700",
    headingOneText = "Rekruttering",
    headingOneColor = "text-gray-600",
    listItems = [
      { icon: "✓", text: "Vi hjelper deg å nå dine behov og mål" },
      { icon: "✓", text: "Oppfølging" },
      { icon: "✓", text: "Kobler deg til nettverk av profesjonelle bedrifter" }
    ],
    buttonColor = "bg-blue-500",
    buttonHoverColor = "hover:bg-blue-700",
    buttonText = "Les mer",
  }) => {
    return (
      <div className="flex bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className={`flex-none w-64 ${squareColor} flex items-center justify-center`}>
          <span className={`text-4xl ${iconColor}`}>{icon}</span>
        </div>
        <div className="flex-grow p-6">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h4 className={`text-md ${headingFourColor} font-semibold`}>{headingFourText}</h4>
              <h1 className={`text-3xl ${headingOneColor}`}>{headingOneText}</h1>
              <ul className="list-none mt-4">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className={`text-green-500 mr-2`}>{item.icon}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`${buttonColor} ${buttonHoverColor} text-white font-bold py-2 px-4 rounded mt-4`}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCardLeft;
  