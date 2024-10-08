import { List, ServiceCard, Pentagon, Footer } from "../../components/index";

import BriefCase from "../../images/briefcase.svg";
import Building from "../../images/building.svg";
import Target from "../../images/target.svg";
import Bulb from "../../images/lightbulb.svg";
import Megaphone from "../../images/megaphone.svg";
import Brain from "../../images/head.svg";
import { client } from "../../sanity";

const EVENTS_QUERY = `*[_type == "services"][0]{
  mainTitle,
  mainSubTitleItems,
  topTextTitle,
  recruitingCategory,
  recruitingTitle,
  recruitingTitleItems,
  recruitingReadMoreText,
  hireCategory,
  hireTitle,
  hireTitleItems,
  hireReadMoreText,
  headhuntingCategory,
  headhuntingTitle,
  headhuntingTitleItems,
  headhuntingReadMoreText,
  counselingCategory,
  counselingTitle,
  counselingTitleItems,
  counselingReadMoreText,
  middleTextTitle,
  adaptedToNeedsCategory,
  adaptedToNeedsTitle,
  adaptedToNeedsTitleItems,
  adaptedToNeedsReadMoreText,
  personalityTestAndAbilityTestCategory,
  personalityTestAndAbilityTestTitle,
  personalityTestAndAbilityTestTitleItems,
  personalityTestAndAbilityTestReadMoreText
}`;

export default async function Services() {
  console.log("Sanity client:", client);
  if (!client) {
    throw new Error("Sanity client is not initialized");
  }

  const formatTextWithBreaks = (text) => {
    if (!text) {
      return <></>; // or you can return any default value you prefer
    }

    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
  };

  const events = await client.fetch(EVENTS_QUERY);
  console.log(events);
  return (
    <div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-auto min-h-[80vh] flex pt-4 ">
        <div className="w-full p-4 md:pt-4 pt-8 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center">
          <div className="w-full">
            <h1 className="headline">{events.mainTitle}</h1>
            <List
              listItemOne={events.mainSubTitleItems[0]}
              listItemTwo={events.mainSubTitleItems[1]}
              listItemThree={events.mainSubTitleItems[2]}
              listItemFour={events.mainSubTitleItems[3]}
            />
          </div>
          <div className="w-full flex justify-center">
            <Pentagon />
          </div>
        </div>
      </div>
      <div
        className="backdrop-filter backdrop-blur-lg"
        style={{ borderTop: "4px solid rgba(255, 255, 255, 0.4)" }}
      >
        <div className="px-6 pt-8 pb-8">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div className="text-center">
              <h1 className={"dark md:pb-8 pt-8 md:pt-0 pb-12 pr-1"}>
                {events.topTextTitle}
              </h1>
              <p></p>
            </div>
            <div className="flex flex-col md:gap-16 gap-4 md:space-y-0 space-y-12">
              <div id="section1">
                <ServiceCard
                  svg={BriefCase}
                  color="slate-gray"
                  category={events.recruitingCategory}
                  title={events.recruitingTitle}
                  listItems={[
                    { text: events.recruitingTitleItems[0] },
                    { text: events.recruitingTitleItems[1] },
                    { text: events.recruitingTitleItems[2] },
                  ]}
                  description={formatTextWithBreaks(
                    events.recruitingReadMoreText
                  )}
                />
              </div>
              <div id="section2">
                <ServiceCard
                  svg={Building}
                  color="pistasch"
                  category={events.hireCategory}
                  title={events.hireTitle}
                  listItems={[
                    { text: events.hireTitleItems[0] },
                    { text: events.hireTitleItems[1] },
                    { text: events.hireTitleItems[2] },
                  ]}
                  description={formatTextWithBreaks(events.hireReadMoreText)}
                  reverse
                />
              </div>
              <div id="section3">
                <ServiceCard
                  svg={Target}
                  color="red"
                  category={events.headhuntingCategory}
                  title={events.headhuntingTitle}
                  listItems={[
                    { text: events.headhuntingTitleItems[0] },
                    { text: events.headhuntingTitleItems[1] },
                    { text: events.headhuntingTitleItems[2] },
                  ]}
                  description={formatTextWithBreaks(
                    events.headhuntingReadMoreText
                  )}
                />
              </div>
              <div id="section4">
                <ServiceCard
                  svg={Bulb}
                  color="vanilla-latte"
                  category={events.counselingCategory}
                  title={events.counselingTitle}
                  listItems={[
                    { text: events.counselingTitleItems[0] },
                    { text: events.counselingTitleItems[1] },
                    { text: events.counselingTitleItems[2] },
                  ]}
                  description={formatTextWithBreaks(
                    events.counselingReadMoreText
                  )}
                  reverse
                />
              </div>
              <div className="text-center">
                <h1>{events.middleTextTitle}</h1>
              </div>
              <ServiceCard
                svg={Megaphone}
                color="purple"
                category={events.adaptedToNeedsCategory}
                title={events.adaptedToNeedsTitle}
                listItems={[
                  { text: events.adaptedToNeedsTitleItems[0] },
                  { text: events.adaptedToNeedsTitleItems[1] },
                  { text: events.adaptedToNeedsTitleItems[2] },
                ]}
                description={formatTextWithBreaks(
                  events.adaptedToNeedsReadMoreText
                )}
              />
              <ServiceCard
                svg={Brain}
                color="green"
                category={events.personalityTestAndAbilityTestCategory}
                title={events.personalityTestAndAbilityTestTitle}
                listItems={[
                  { text: events.personalityTestAndAbilityTestTitleItems[0] },
                  { text: events.personalityTestAndAbilityTestTitleItems[1] },
                  { text: events.personalityTestAndAbilityTestTitleItems[2] },
                ]}
                description={formatTextWithBreaks(
                  events.personalityTestAndAbilityTestReadMoreText
                )}
                reverse
              />
            </div>
          </div>
        </div>
        <Footer transitionLine={true} />
      </div>
    </div>
  );
}
