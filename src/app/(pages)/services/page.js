import Image from "next/image";
import {
  HeroCardTitle,
  List,
  ServiceCardLeft,
  ServiceCardRight,
  Pentagon
} from "../../components/index";

import BriefCase from "../../imagesMidlertidig/briefcase.svg";
import Building from "../../imagesMidlertidig/building.svg";
import Target from "../../imagesMidlertidig/target.svg";
import Megaphone from "../../imagesMidlertidig/megaphone.svg";
import Brain from "../../imagesMidlertidig/head.svg";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto">
      <div className="p-12 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center">
        <div className="flex-1">
          <HeroCardTitle heading="Våre tjenester" headingSize="text-5xl" />
          <List listItemOne="Rekruttering" listItemTwo="Utleie av personell" listItemThree="Rådgivning" listItemFour="Headhunting" />
        </div>
        <Pentagon />
        
      </div>

      <div className="backdrop-filter backdrop-blur-sm px-12 ">
        <div className="text-center"> 
          <HeroCardTitle heading="Våre tjenester" headingSize="text-3xl"/>
        </div>
        <div className="space-y-8">
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

          <ServiceCardRight
            SvgIcon={() => <Image src={Building} alt="Building" width={64} height={64} />}
            squareColor="bg-pistasch-flat"
            headingFourText="Bedrifter"
            headingOneText="Har din bedrift behov for innleie?"
            listItems={[
              { text: "Vi finner den perfekte ansatte for akkurat deg" },
              { text: "Bistand til utleie av personell" },
              { text: "Grundig utvelgelsesprosess, intervju og referansesjekk" },
            ]}
          />
          <ServiceCardLeft
            SvgIcon={() => <Image src={Target} alt="Briefcase" width={64} height={64} />}
            squareColor="bg-weird-red"
            headingFourText="Headhunting"
            headingOneText="Headhunting"
            listItems={[
              { text: "Vi finner den perfekte ansatte for akkurat deg" },
              { text: "Bistand til utleie av personell" },
              { text: "Grundig utvelgesess prosses, intervju og referansesjekk" },
            ]}
          />
          <ServiceCardRight
            SvgIcon={() => <Image src={Building} alt="Building" width={64} height={64} />}
            squareColor="bg-vanilla-latte-flat"
            headingFourText="Rådgivning"
            headingOneText="Har du behov for rådgivning?"
            listItems={[
              { text: "Tilpasset veiledning for å styrke din organisasjons ytelse" },
              { text: "Strategisk innsikt for å navigere markedsendringer" },
              { text: "Tilrettelegger for vekst gjennom målrettet kompetanseutvikling" },
            ]}
          />
          <div className="text-center"> 
          <HeroCardTitle heading="Behovtilpassede tjenester" headingSize="text-3xl"/>
          </div>
          <ServiceCardLeft
            SvgIcon={() => <Image src={Megaphone} alt="Briefcase" width={64} height={64} />}
            squareColor="bg-purple"
            headingFourText="Behovtilpasset"
            headingOneText="Enkelttjenester etter behov"
            listItems={[
              { text: "Annonsering" },
              { text: "Screening" },
              { text: "Valgbare tjenester for deler av rekrutteringsprosessen" },
            ]}
          />
          <ServiceCardRight
            SvgIcon={() => <Image src={Brain} alt="Building" width={64} height={64} />}
            squareColor="bg-weird-green"
            headingFourText="Behovtilpasset"
            headingOneText="Personlighetstest & evnetest"
            listItems={[
              { text: "Nøyaktig vurdering av kandidatens styrker og svakheter" },
              { text: "Tilpasser individets potensial mot bedriftens kultur og verdier" },
              { text: "Fremmer karrierevekst gjennom målrettet jobbtilpasning" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
