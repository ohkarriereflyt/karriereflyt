import Link from 'next/link';
import Footer from '../../components/Footer';
import {
    Banner
  } from "../../components/index";

export default function Policy() {
  return (
    <div className='pt-5'>
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-auto min-h-[80vh] flex flex-col pt-8">
      <div className="w-full p-4 flex flex-col items-start justify-start space-y-4 bg-white rounded">
        <h2 className="font-bold text-xl">Karriereflyt AS</h2>
        <p>Org.nr 930 011 428</p>
        <p>C. Sundts Gate 51</p>
        <p>5004 Bergen</p>
        <p>E-post: <a href="mailto:post@karriereflyt.no" className="text-blue-500 hover:underline">post@karriereflyt.no</a></p>

        <h2 className="font-bold text-xl mt-8">Personvernerklæring</h2>
        <p>Karriereflyt AS er behandlingsansvarlig for behandlingen av personopplysninger som beskrevet i denne personvernerklæringen. I denne personvernerklæringen forklarer vi hva slags personopplysninger vi lagrer, hvordan vi behandler de og hvor lenge vi lagrer de.</p>

        <h3 className="font-bold text-lg mt-6">Personopplysninger vi samler inn og behandler</h3>
        <p>Vi behandler følgende kategorier av personopplysninger:</p>
        <ul className="list-disc pl-6">
          <li>Grunnleggende informasjon: navn, fødselsdato</li>
          <li>Kontaktinformasjon: adresse, telefonnummer, epostadresse</li>
          <li>Konto og profilinformasjon: Innstillinger, preferanser</li>
          <li>Betalingsinformasjon: Transaksjonsinformasjon, betalingsmiddel</li>
          <li>Kundehistorikk og kundeengasjement: bestillings- og leveringsopplysninger, handlekurvbevegelser, rabattkoder, lojalitetsprograminformasjon</li>
          <li>Kundehistorikk og kundeengasjement: aktive produkter og avtaler samt produkter og tjenester du har hatt tidligere, hvor mye og hvor ofte de brukes, status på produkter/tjenester</li>
          <li>Kundeaktivitet: lese- og handlingshistorikk fra app, nettsider eller elektronisk kommunikasjon vi sender ut. Samt teknisk informasjon om enhetene du bruker.</li>
          <li>Cookies: se vår informasjon om cookies</li>
        </ul>

        <h3 className="font-bold text-lg mt-6">Hvordan vi bruker personopplysningene</h3>
        <p><strong>Levering av tjeneste/avtaleinngåelse:</strong> Vi bruker dine personopplysninger til å oppfylle våre avtaler med deg, det vil si når du har bestilt et produkt eller en tjeneste fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.</p>

        <p><strong>Administrasjon av kundeforhold:</strong> Vi bruker dine personopplysninger til å administrere vårt kundeforhold med deg. Det kan for eksempel være kundeservice, klagebehandling og feilretting vedrørende ditt kundeforhold. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en avtale med deg.</p>

        <p><strong>Analyse, forretningsutvikling og forbedring av tjenester:</strong> Vi arbeider kontinuerlig med å utvikle og forbedre våre tjenester og produkter. Mye av dette arbeidet innebærer å analysere ulike former for personopplysninger, som for eksempel kundeaktivitet, kundehistorikk og konto og profilinformasjon. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.</p>

        <p><strong>Tilpasset brukeropplevelse:</strong> For å tilpasse brukeropplevelsen og kommunikasjonen til ditt kundeforhold bruker vi personopplysninger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.</p>

        <p><strong>Salg og markedsføring:</strong> Vi bruker personopplysninger i forbindelse med salg og markedsføring av våre produkter og tjenester, for eksempel ved at du mottar epost fra oss. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse. Du har mulighet å reservere deg fra deler av denne behandlingen ved å, for eksempel, reservere deg fra å motta epost fra oss. I tillegg til dette kan vi også be deg om samtykke til å bruke dine personopplysninger til såkalt profilering, hvor vi utleder interesser og behov på bakgrunn av dine personopplysninger. Hensikten med profilering vil være at markedsføringen vår skal bli mer relevant.</p>

        <p><strong>Systemovervåking, feilretting mm.:</strong> Vi overvåker våre systemer etter feil og problemer. En del av disse prosessene innebærer lagring og behandling av personopplysninger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.</p>

        <p><strong>Sikkerhet, avdekking av svindel og kriminelle handlinger:</strong> Vi behandler personopplysninger i vårt arbeid med å beskytte våre brukere og oss selv mot svindelaktivitet, misbruk og kriminelle handlinger. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er vår berettigede interesse.</p>

        <p><strong>Overholde rettslige forpliktelser:</strong> I enkelte tilfeller er vi pålagt å behandle personopplysninger av hensyn til andre rettslige forpliktelser. Et eksempel på dette er informasjon knyttet til salg, som vi er pliktig til å regnskapsføre og oppbevare i henhold til bokføringsloven. Det rettslige grunnlaget for å behandle personopplysninger til dette formålet er at behandlingen er nødvendig for å oppfylle en rettslig forpliktelse som påhviler oss.</p>

        <h3 className="font-bold text-lg mt-6">Dine rettigheter</h3>
        <p><strong>Rett til innsyn i egne opplysninger:</strong> Du kan be om en kopi av alle opplysninger vi behandler om deg. Ta kontakt på epostadressen ovenfor for å bruke innsynsretten din.</p>
        <p><strong>Rett til korrigering av personopplysninger:</strong> Du har rett til å be oss rette eller supplere opplysninger som er feilaktige eller misvisende.</p>
        <p><strong>Retten til sletting av personopplysninger:</strong> Du har rett til å få dine personopplysninger slettet uten ugrunnet opphold. Du kan derfor når som helst be oss slette opplysninger om deg selv. Men merk at informasjon som vi er pålagt beholde av hensyn til andre rettslige forpliktelser (som for eksempel bokføringsloven) ikke vil bli slettet.</p>
        <p><strong>Begrensning av behandling av personopplysninger:</strong> I noen situasjoner kan du også be oss begrense behandlingen av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.</p>
        <p><strong>Protestere mot en behandling av personopplysninger:</strong> Dersom vi behandler opplysninger om deg med grunnlag i våre oppgaver eller på bakgrunn av en interesseavveining, har du rett til å protestere på vår behandling av opplysninger om deg. Dette gjør du ved å administrere samtykker eller reservasjoner i våre løsninger.</p>
        <p><strong>Dataportabilitet:</strong> Du har rett til å få utlevert dine personopplysninger i et strukturert, alminnelig anvendt og maskinlesbart format. Ta kontakt på epostadressen ovenfor for å få utlevert dine personopplysninger.</p>
        <p><strong>Du kan klage på vår behandling av personopplysninger:</strong> Vi håper du vil si ifra dersom du mener vi ikke overholder reglene i personopplysningsloven. Si da gjerne først i fra gjennom den kontakten eller kanalen du allerede har etablert med oss. Du kan også klage over vår behandling av personopplysninger. Dette gjør du til Datatilsynet.</p>
      </div>

      
    </div>
    <Footer transitionLine={true} />
    </div>
  );
}
