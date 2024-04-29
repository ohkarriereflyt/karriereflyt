import Image from "next/image";
import TransitionLine from "./TransitionLine";

export default function OurHistorySection() {
  return (
    <div className="background-blur" >
      <TransitionLine reverse={true}/>
      <div className="flex justify-center w-full md:px-8 mb-2  px-4 py-12">
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between">
          <div className="w-full px-4 bg-gray-50 kf-border-dark">
            <Image
              src="/path/to/your/history-image.jpg"
              alt="Vår historie"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="w-full px-4 m-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Vår visjon</h2>
            <p>
              Vår visjon er å sette en ny standard for hva virksomheter og jobbsøkere kan forvente. Vi ønsker å være det beste rekrutterings- og bemanningsbyrået i Norge, en tittel vi ønsker å oppnå gjennom vårt engasjement for kvalitet, innovasjon og en dyp forståelse av både markedets behov og de individuelle ønskene til de vi jobber med.
            </p>
            <p>
              Bærekraft og samfunnsansvar i er viktige verdier vi vil opprettholde og stå for. Vi er forpliktet til å drive vår virksomhet på en måte som er både etisk og miljømessig bærekraftig, og vi jobber aktivt for å fremme mangfold og inkludering i arbeidslivet. Vi tror at ved å bygge sterkere og mer mangfoldige team, kan vi hjelpe bedrifter med å oppnå større innovasjon og konkurransekraft.
            </p>
          </div>
        </div>
      </div>
      <TransitionLine />
    </div>
  );
}
