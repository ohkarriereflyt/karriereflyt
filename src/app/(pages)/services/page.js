import Image from "next/image";
import {
  HeroCardTitle,
  List,
  ServiceCardLeft,
  ServiceCardRight,
  Pentagon,
  Footer
} from "../../components/index";

import BriefCase from "../../imagesMidlertidig/briefcase.svg";
import Building from "../../imagesMidlertidig/building.svg";
import Target from "../../imagesMidlertidig/target.svg";
import Bulb from "../../imagesMidlertidig/lightbulb.svg";
import Megaphone from "../../imagesMidlertidig/megaphone.svg";
import Brain from "../../imagesMidlertidig/head.svg";
import { client } from '../../sanity';

const EVENTS_QUERY = `*[_type == "services"][0]{
  mainTitle,
  mainSubTitleItems,
  topTextTitle,
  recruitingTitle,
  recruitingTitleItems,
  recruitingReadMoreText,
  hireTitle,
  hireTitleItems,
  hireReadMoreText,
  headhuntingTitle,
  headhuntingTitleItems,
  headhuntingReadMoreText,
  counselingTitle,
  counselingTitleItems,
  counselingReadMoreText,
  middleTextTitle,
  adaptedToNeedsTitle,
  adaptedToNeedsTitleItems,
  adaptedToNeedsReadMoreText,
  personalityTestAndAbilityTestTitle,
  personalityTestAndAbilityTestTitleItems,
  personalityTestAndAbilityTestReadMoreText
}`;

export default async function Page() {
  console.log("Sanity client:", client);
if (!client) {
    throw new Error("Sanity client is not initialized");
}
const events = await client.fetch(EVENTS_QUERY);
console.log(events);
  return (
    <div>
    <div >
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 overflow-auto">
      <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center">
        <div className="flex-1">
          <HeroCardTitle heading={events.mainTitle} headingSize="text-5xl" />
          <List listItemOne={events.mainSubTitleItems[0]} listItemTwo={events.mainSubTitleItems[1]} listItemThree={events.mainSubTitleItems[2]} listItemFour={events.mainSubTitleItems[3]} />
        </div>
        <Pentagon />
      </div>
      </div>
      <div className="backdrop-filter backdrop-blur-lg px-6 pt-8 pb-8 " style={{ borderTop: '4px solid rgba(255, 255, 255, 0.4)' }}>
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 overflow-auto">
        <div className="text-center"> 
          <HeroCardTitle heading={events.topTextTitle} headingSize="text-3xl"/>
        </div>
        <div className="space-y-8">
          <ServiceCardLeft 
            SvgIcon={() => <Image src={BriefCase} alt="Briefcase" width={64} height={64} />}
            squareColor="bg-slate-gray-flat"
            headingFourText="Kandidater" // Studio fix ? 
            headingFourColor="text-slate-gray-flat"
            headingOneText={events.recruitingTitle}
            listItems={[
              { text: events.recruitingTitleItems[0] },
              { text: events.recruitingTitleItems[1] },
              { text: events.recruitingTitleItems[2] },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-slate-gray-flat",
              iconColor: "text-slate-gray-flat",
              circleColor:"bg-slate-gray-flat",
              text1: events.recruitingReadMoreText,
              text2: "Før vi setter i gang med å finne den rette kandidaten til et oppdrag må vi først bli kjent med bedriftens behov og ønsker, kompetansekrav og arbeidsoppgaver. Når vi har alt dette på plass, kan vi gå i gang med å finne den perfekte kandidaten for deg.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <ServiceCardRight
            SvgIcon={() => <Image src={Building} alt="Building" width={64} height={64} />}
            squareColor="bg-pistasch-flat"
            headingFourText="Bedrifter"
            headingFourColor="text-pistasch-flat"
            headingOneText={events.hireTitle}
            listItems={[
              { text: events.hireTitleItems[0] },
              { text: events.hireTitleItems[1] },
              { text: events.hireTitleItems[2] },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-pistasch-flat",
              iconColor: "text-pistasch-flat",
              circleColor:"bg-slate-gray-flat",
              text1: events.hireReadMoreText,
              text2:"Har din bedrift et midlertidig behov for arbeidskraft, og ønsker et tilbud fra Karriereflyt på innleie av den rette kandidat? Ta kontakt med oss for konsultasjon og pris.",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <ServiceCardLeft
            SvgIcon={() => <Image src={Target} alt="Target" width={64} height={64} />}
            squareColor="bg-weird-red"
            headingFourText="Headhunting"
            headingFourColor="text-weird-red"
            headingOneText={events.headhuntingTitle}
            listItems={[
              { text: events.headhuntingTitleItems[0] },
              { text: events.headhuntingTitleItems[1] },
              { text: events.headhuntingTitleItems[2] },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-weird-red",
              iconColor: "text-weird-red",
              circleColor:"bg-weird-red",
              text1: events.headhuntingReadMoreText,
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
            headingOneText= {events.counselingTitle}
            listItems={[
              { text: events.counselingTitleItems[0] },
              { text: events.counselingTitleItems[1] },
              { text: events.counselingTitleItems[2] },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-vanilla-latte-flat",
              iconColor: "text-vanilla-latte-flat",
              circleColor:"bg-vanilla-latte-flat",
              text: events.counselingReadMoreText,
              text2:"Har din bedrift et midlertidig behov for arbeidskraft, og ønsker et tilbud fra Karriereflyt på innleie av den rette kandidat? Ta kontakt med oss for konsultasjon og pris",
              text1Color: "text-gray-500",
              text2Color: "text-gray-500"
            }}
          />

          <div className="text-center"> 
            <HeroCardTitle heading={events.middleTextTitle} headingSize="text-3xl"/>
          </div>

          <ServiceCardLeft
            SvgIcon={() => <Image src={Megaphone} alt="Megaphone" width={64} height={64} />}
            squareColor="bg-purple"
            headingFourText="Behovtilpasset"
            headingFourColor="text-purple"
            headingOneText= {events.adaptedToNeedsTitle}
            listItems={[
              { text: events.adaptedToNeedsTitleItems[0] },
              { text: events.adaptedToNeedsTitleItems[1] },
              { text: events.adaptedToNeedsTitleItems[2] },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-purple",
              iconColor: "text-purple",
              circleColor:"bg-purple",
              text1: events.adaptedToNeedsReadMoreText,
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
            headingOneText={events.personalityTestAndAbilityTestTitle}
            listItems={[
              { text: events.personalityTestAndAbilityTestTitleItems[0] },
              { text: events.personalityTestAndAbilityTestTitleItems[1] },
              { text: events.personalityTestAndAbilityTestTitleItems[2] },
            ]}
            readMoreProps={{
              direction: "down",
              textColor: "text-weird-green",
              iconColor: "text-weird-green",
              circleColor:"bg-weird-green",
              text1: events.personalityTestAndAbilityTestReadMoreText,
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
