import { PageTitle, ContactEmployee } from "../../components/index";

export default function Page() {
  return (
    <div className="mx-auto w-full backdrop-blur-xl">
      <PageTitle title="Kontakt oss" />
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8" >
        <ContactEmployee />
      </div>
    </div>
  );
}
