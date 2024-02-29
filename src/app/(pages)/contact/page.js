import PageTitle from "@/app/components/PageTitle";
import ContactEmployee from "@/app/components/ContactEmployee";

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <PageTitle title="Kontakt oss" />
          <ContactEmployee />
        </div>
    )
}