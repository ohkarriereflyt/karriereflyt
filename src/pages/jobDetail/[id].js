import "../../app/globals.css";
import { useRouter } from 'next/router';

export default function JobDetail({ contacts }) {
    const router = useRouter();
    const { id, title, city, logo, name, body, deadline, numberOfPositions, workplace, accession, position, sector, address1, applyUrl } = router.query;

    const applyClick = () => {
        if (applyUrl) {
            window.open(applyUrl, '_blank');
        }
    };

    let contactList = [];
    try {
        contactList = JSON.parse(contacts);
    } catch (e) {
        console.error('Failed to parse contacts', e);
    }

    return (
        <div className="w-full min-h-screen flex flex-col justify-between items-center bg-white">
            <div className="container mx-auto px-4">
                {/* Description and Details Section */}
                <div className="flex flex-col lg:flex-row gap-4 w-full py-4">
                    {/* Description Section */}
                    <div className="flex flex-col bg-stone-50 p-4 rounded-lg grow">
                        <h1 className="text-2xl font-bold mb-4">{name}</h1>
                        <div className="px-4" dangerouslySetInnerHTML={{ __html: body }} />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col bg-stone-50 p-4 rounded-lg mt-4 lg:mt-0 lg:ml-4 w-full lg:max-w-screen-lg">
                        <h2 className="text-xl font-bold pb-4">Detaljer</h2>
                        <div className="md:w-[259px] w-full h-[152px] rounded-tl-2xl md:rounded-bl-xl md:rounded-tl-xl flex justify-center items-center">
                            <img className="max-w-full max-h-full object-contain" src={logo} alt="Job logo" />
                        </div>
                        <p className="text-base font-bold py-2">Tittel:</p> <p>{title}</p>
                        <p className="text-base font-bold py-2">Søknadsfrist:</p> <p>{deadline}</p>
                        <p className="text-base font-bold py-2">Antall Stillinger:</p> <p>{numberOfPositions}</p>
                        <p className="text-base font-bold py-2">Arbeidssted:</p> <p>{workplace}</p>
                        <p className="text-base font-bold py-2">Lønn:</p> <p>{accession}</p>
                        <p className="text-base font-bold py-2">Varighet:</p> <p>{position}</p>
                        <p className="text-base font-bold py-2">Sektor:</p> <p>{sector}</p>
                        <p className="text-base font-bold py-2">Adresse:</p> <p>{address1}</p>

                        <div className="py-3">
                            <div
                                style={{ backgroundColor: "#6B858D" }}
                                className="py-4 rounded-sm shadow flex items-center justify-center text-white"
                                onClick={applyClick}
                            >
                                Søk
                            </div>

                            {contactList.length > 0 ? (
                                <ul className="flex-1 min-w-0 py-4">
                                    {contactList.map((contact, index) => (
                                        <li key={index} className="bg-white p-4 rounded-lg shadow flex">
                                            <div className="flex-none w-24 h-24 mr-4">
                                                <img className="w-full h-full object-cover rounded" src={contact.image} alt="Profile picture of contact person" />
                                            </div>
                                            <div className="flex-grow">
                                                <h2 className="text-xl font-bold">{contact.title}</h2>
                                                <p>Navn: {contact.firstName} {contact.lastName}</p>
                                                <p>Email: {contact.email}</p>
                                                <p>Mobilnummer: {contact.mobilePhone}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No contact information available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    const { contacts } = query;

    return {
        props: {
            contacts: decodeURIComponent(contacts)
        }
    };
}