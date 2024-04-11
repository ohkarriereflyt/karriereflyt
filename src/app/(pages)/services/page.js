import Image from "next/image";
import {
  HeroCardTitle,
  HeroCardImages,
  List,
  ServiceCardLeft,
  ServiceCardRight,
  Pentagon,
} from "../../components/index";

import BriefCase from "../../imagesMidlertidig/briefcase.svg";
import Building from "../../imagesMidlertidig/building.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Page() {
  return (
    <div>
      <div className="mx-auto max-w-[60%]">
        <div className="text-left p-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <HeroCardTitle heading="Våre tjenester" headingSize="text-headline" />
              <List listItemOne="Rekruttering" listItemTwo="Utleie av personell" listItemThree="Rådgivning" listItemFour="Headhunting" />
            </div>
            <div>
              <Pentagon />
            </div>
          </div>
          <h1 className="text-center text-4xl">Våre tjenester</h1>
        </div>
      </div>

      <div className="w-full backdrop-filter backdrop-blur-sm px-12">
        <div className="mx-auto max-w-[60%]">
          <div className="mb-8">
          <ServiceCardLeft
              SvgIcon={() => <Image src={BriefCase} alt="Briefcase" width={64} height={64} />}
              squareColor="bg-slate-gray-flat"
              headingFourText="Kandidater"
              headingOneText="Rekruttering"
              listItems={[
                { text: "Vi hjelper deg å nå dine behov og mål" },
                { text: "Oppfølging" },
                { text: "Kobler deg til nettverk av profesjonelle bedrifter" },
              ]}
            />
          </div>

          <div className="mb-8">
            <ServiceCardRight
              SvgIcon={() => <Image src={Building} alt="Building" width={64} height={64} />}
              squareColor="bg-blue-100"
              headingFourText="Bedrifter"
              headingFourColor="text-blue-700 text-left"
              headingOneText="Har din bedrift behov for innleie?"
              headingOneColor="text-blue-600 text-left"
              listItems={[
                { icon: "✓", text: "Vi finner den perfekter ansatte for akkurat deg" },
                { icon: "✓", text: "Bistand til utleie av personell" },
                { icon: "✓", text: "Grundig utvelgelsess prosess, intervju og referansesjekk" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

