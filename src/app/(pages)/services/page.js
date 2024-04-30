import Image from "next/image";
import {
  HeroCardTitle,
  List,
  ServiceCardLeft,
  ServiceCardRight,
  Pentagon,
  Footer,
} from "../../components/index";

import BriefCase from "../../imagesMidlertidig/briefcase.svg";
import Building from "../../imagesMidlertidig/building.svg";
import Target from "../../imagesMidlertidig/target.svg";
import Bulb from "../../imagesMidlertidig/lightbulb.svg";
import Megaphone from "../../imagesMidlertidig/megaphone.svg";
import Brain from "../../imagesMidlertidig/head.svg";

export default function Page() {
  return (
    <div>
    <div >
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 overflow-auto">
      <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center">
        <div className="flex-1">
          <HeroCardTitle heading="Våre tjenester" headingSize="text-5xl" />
          <List
            listItemOne="Rekruttering"
            listItemTwo="Utleie av personell"
            listItemThree="Rådgivning"
            listItemFour="Headhunting"
          />
        </div>
        <Pentagon />
      </div>

      <div className="backdrop-filter backdrop-blur-sm px-12 ">
        <div className="text-center">
          <HeroCardTitle heading="Våre tjenester" headingSize="text-3xl" />
        </div>
        <div className="space-y-8">
          <ServiceCardLeft
            SvgIcon={() => (
              <Image src={BriefCase} alt="Briefcase" width={64} height={64} />
            )}
            squareColor="bg-slate-gray-flat"
            headingFourText="Kandidater"
            headingFourColor="text-slate-gray-flat"
            headingOneText="Rekruttering"
            listItems={[
              { text: "Vi hjelper deg å nå dine behov og mål" },
              { text: "Oppfølging" },
              { text: "Kobler deg til nettverk av profesjonelle bedrifter" },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-slate-gray-flat",
              iconColor: "text-slate-gray-flat",
              circleColor:"bg-slate-gray-flat",
              text1:"Kandidater skal hos oss møte en oppmerksomhet og en oppfølging som bidrar til at de kommer nærmest mulig en optimal arbeidshverdag, og tar de rette stegene i sin karriere.",
              text2: "Før vi setter i gang med å finne den rette kandidaten til et oppdrag må vi først bli kjent med bedriftens behov og ønsker, kompetansekrav og arbeidsoppgaver. Når vi har alt dette på plass, kan vi gå i gang med å finne den perfekte kandidaten for deg.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <ServiceCardRight
            SvgIcon={() => (
              <Image src={Building} alt="Building" width={64} height={64} />
            )}
            squareColor="bg-pistasch-flat"
            headingFourText="Bedrifter"
            headingFourColor="text-pistasch-flat"
            headingOneText="Har din bedrift behov for innleie?"
            listItems={[
              { text: "Vi finner den perfekte ansatte for akurat deg" },
              { text: "Bistand til utleie av personell" },
              {
                text: "Grundig utvelgelsesprosess, intervju og referansesjekk",
              },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-pistasch-flat",
              iconColor: "text-pistasch-flat",
              circleColor:"bg-slate-gray-flat",
              text1:"Selv ved et midlertidig behov, er det viktig for oss at kunden får den kompetansen og kvaliteten de trenger av våre kandidater. For å finne den rette medarbeideren, gjennomgår våre kandidater en grundig utvelgelsesprosess med personlig intervju og referansesjekk.",
              text2:"Har din bedrift et midlertidig behov for arbeidskraft, og ønsker et tilbud fra Karriereflyt på innleie av den rette kandidat? Ta kontakt med oss for konsultasjon og pris.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <ServiceCardLeft
            SvgIcon={() => (
              <Image src={Target} alt="Briefcase" width={64} height={64} />
            )}
            squareColor="bg-weird-red"
            headingFourText="Headhunting"
            headingFourColor="text-weird-red"
            headingOneText="Headhunting"
            listItems={[
              { text: "Vi finner den perfekte ansatte for akurat deg" },
              { text: "Bistand til utleie av personell" },
              { text: "Grundig utvelgesess prosess, intervju og referansesjekk" },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-weird-red",
              iconColor: "text-weird-red",
              circleColor:"bg-weird-red",
              text1:"Selv ved et midlertidig behov, er det viktig for oss at kunden får den kompetansen og kvaliteten de trenger av våre kandidater. For å finne den rette medarbeideren, gjennomgår våre kandidater en grundig utvelgelsesprosess med personlig intervju og referansesjekk.",
              text2:"Har din bedrift et midlertidig behov for arbeidskraft, og ønsker et tilbud fra Karriereflyt på innleie av den rette kandidat? Ta kontakt med oss for konsultasjon og pris.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <ServiceCardRight
            SvgIcon={() => <Image src={Bulb} alt="LightBulb" width={64} height={64} />}
            squareColor="bg-vanilla-latte-flat"
            headingFourText="Rådgivning"
            headingFourColor="text-vanilla-latte-flat"
            headingOneText="Har du behov for rådgivning?"
            listItems={[
              {
                text: "Tilpasset veiledning for å styrke din organisasjons ytelse",
              },
              { text: "Strategisk innsikt for å navigere markedsendringer" },
              {
                text: "Tilrettelegger for vekst gjennom målrettet kompetanseutvikling",
              },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-vanilla-latte-flat",
              iconColor: "text-vanilla-latte-flat",
              circleColor:"bg-vanilla-latte-flat",
              text:"Selv ved et midlertidig behov, er det viktig for oss at kunden får den kompetansen og kvaliteten de trenger av våre kandidater. For å finne den rette medarbeideren, gjennomgår våre kandidater en grundig utvelgelsesprosess med personlig intervju og referansesjekk.",
              text2:"Har din bedrift et midlertidig behov for arbeidskraft, og ønsker et tilbud fra Karriereflyt på innleie av den rette kandidat? Ta kontakt med oss for konsultasjon og pris",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <div className="text-center"> 
            <HeroCardTitle heading="Behovtilpassede tjenester" headingSize="text-3xl"/>
          </div>

          <ServiceCardLeft
            SvgIcon={() => <Image src={Megaphone} alt="Megaphone" width={64} height={64} />}
            squareColor="bg-purple"
            headingFourText="Behovtilpasset"
            headingFourColor="text-purple"
            headingOneText="Enkelttjenester etter behov"
            listItems={[
              { text: "Annonsering" },
              { text: "Screening" },
              {
                text: "Valgbare tjenester for deler av rekrutteringsprosessen",
              },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-purple",
              iconColor: "text-purple",
              circleColor:"bg-purple",
              text1:"Kandidater skal hos oss møte en oppmerksomhet og en oppfølging som bidrar til at de kommer nærmest mulig en optimal arbeidshverdag, og tar de rette stegene i sin karriere.",
              text2:"Før vi setter i gang med å finne den rette kandidaten til et oppdrag må vi først bli kjent med bedriftens behov og ønsker, kompetansekrav og arbeidsoppgaver. Når vi har alt dette på plass, kan vi gå i gang med å finne den perfekte kandidaten for deg.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <ServiceCardRight
            SvgIcon={() => <Image src={Brain} alt="Brain" width={64} height={64} />}
            squareColor="bg-weird-green"
            headingFourText="Behovtilpasset"
            headingFourColor="text-weird-green"
            headingOneText="Personlighetstest & evnetest"
            listItems={[
              {
                text: "Nøyaktig vurdering av kandidatens styrker og svakheter",
              },
              {
                text: "Tilpasser individets potensial mot bedriftens kultur og verdier",
              },
              {
                text: "Fremmer karrierevekst gjennom målrettet jobbtilpasning",
              },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-weird-green",
              iconColor: "text-weird-green",
              circleColor:"bg-weird-green",
              text1:"Vi samarbeider med Jobbkretser for å tilby topprangerte personlighetstester i Norge, sikrer en god match mellom jobbsøkere og bedrifter. Vår tilnærming er grundig; vi evaluerer kandidaters egnethet nøye og sikrer at både bedrift og søker oppnår tilfredshet gjennom personlig og faglig tilpasning.",
              text2:"For å sikre suksess i rekrutteringsprosessen, blir vi først godt kjent med bedriftens behov og preferanser. Med denne forståelsen finner vi den ideelle kandidaten for deg, ved å fokusere på kvalitet i hver fase av prosessen, fra innsiktfull rådgivning til nøye oppfølging og tilkobling med profesjonelle nettverk.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}
