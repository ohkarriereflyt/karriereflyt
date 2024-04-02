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
        <div className="text-left p-12">
          <HeroCardTitle heading="Våre tjenester" />
          <List listItemOne="Rekruttering" listItemTwo="Utleie av personell" listItemThree="Rådgivning" listItemFour="Headhunting" />
          <h1 className="text-center text-4xl">Våre tjenester</h1>

          <div className="mb-8"> 
            <ServiceCardLeft 
              icon="✚" 
              iconColor="text-blue-600" 
              squareColor="bg-slate-gray-flat" 
              headingFourText="Kandidater" 
              headingFourColor="text-slate-gray-flat text-left" 
              headingOneText="Rekrettering" 
              headingOneColor="text-slate-gray-flat text-left" 
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
              headingFourColor="text-blue-700 text-left"  
              headingOneText="Har din bedrift behov for innleie?" 
              headingOneColor="text-blue-600 text-left"  
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
