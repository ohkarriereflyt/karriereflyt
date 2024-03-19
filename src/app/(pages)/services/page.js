import Image from "next/image";
import {
  HeroCardTitle,
  HeroCardImages,
  List,
  ServiceCardLeft,
  ServiceCardRight,
} from "../../components/index";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-[60%]">
        <div className="text-center p-12">
          <HeroCardTitle heading="Våre tjenester" />
          <List listItemOne="Rekruttering" listItemTwo="Utleie av personell" listItemThree="Rådgivning" listItemFour="Headhunting" />
          
          <div className="mb-8"> 
            <ServiceCardLeft 
              icon="✚" 
              iconColor="text-blue-600" 
              squareColor="bg-blue-100" 
              headingFourText="Kandidater" 
              headingFourColor="text-blue-700" 
              headingOneText="Rekrettering" 
              headingOneColor="text-blue-600" 
              listItems={[
                { icon: "✓", text: "Vi hjelper deg å nå dine behov og mål" },
                { icon: "✓", text: "Oppfølging" },
                { icon: "✓", text: "Kobler deg til nettverk av professjonelle bedrifter" }
              ]}
            />
          </div>
          
          <div className="mb-8"> {/* Optionally add margin bottom here too if needed */}
            <ServiceCardRight 
              icon="✚" 
              iconColor="text-blue-600"  
              squareColor="bg-blue-100"  
              headingFourText="Bedrifter"  
              headingFourColor="text-blue-700"  
              headingOneText="Har din bedrift behov for innleie?" 
              headingOneColor="text-blue-600"  
              listItems={[
                { icon: "✓", text: "Vi finner den perfekter ansatte for akkurat deg" }, 
                { icon: "✓", text: "Bistand til utleie av personell" },  
                { icon: "✓", text: "Grundig utvelgelsess prosses, intervju og referansesjekk" }  
              ]}
            />
          </div> 
        </div>
      </div>
    </div>
  );
}
