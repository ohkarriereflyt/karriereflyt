import { ContactEmployee } from "../../components/index";

export default function Page() {
  return (
    <div className="mx-auto w-full backdrop-blur-xl pt-4 ">
      {/* <headline className="justify-center text-center">Kontakt oss</headline>
      <subheadline className="justify-center text-center pb-4">Døren vår står alltid åpen, vi er også bare én telefonsamtale unna!</subheadline> */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-96" >
        <ContactEmployee />
      </div>
    </div>
  );
}
