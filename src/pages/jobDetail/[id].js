import "../../app/globals.css";
import { useRouter } from 'next/router';
import Navbar from "../../app/components/Navbar";
import BackgroundBoxes from "../../app/components/BackgroundBoxes";
import Footer from "../../app/components/Footer";
import Link from 'next/link';
import ButtonArrow from "../../app/components/ButtonArrow";


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
        <>
            <BackgroundBoxes />
            <Navbar />
            <div className="pt-16">
                <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 flex flex-col justify-between items-center background-blur">
                    {/* Description and Details Section */}
                    <div className="flex flex-col lg:flex-row gap-4 w-full py-4">
                        {/* Description Section */}
                        <div className="md:p-8 p-4 flex flex-col light-background kf-border-light grow">
                            <h1 className="mb-4">{name}</h1>
                            <div className="px-4" dangerouslySetInnerHTML={{ __html: body }} />
                        </div>

                        {/* Details Section */}
                        <div className="md:p-8 flex flex-col gap-2 light-background p-4 kf-border-light mt-4 lg:mt-0 lg:ml-4 w-full lg:max-w-screen-lg">
                            <h2 className="text-xl font-bold pb-4">Detaljer</h2>
                            <div className="md:w-[259px] w-full h-[152px] rounded-tl-2xl md:rounded-bl-xl md:rounded-tl-xl flex justify-center items-center">
                                <img className="max-w-full max-h-full object-contain" src={logo} alt="Job logo" />
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Tittel:</p>
                                <p>{title}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Søknadsfrist:</p>
                                <p>{deadline}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Antall Stillinger:</p>
                                <p>{numberOfPositions}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Arbeidssted:</p>
                                <p>{workplace}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Lønn:</p>
                                <p>{accession}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Varighet:</p>
                                <p>{position}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Sektor:</p>
                                <p>{sector}</p>
                            </div>
                            <div>
                                <p className="text-base font-bold py-2">Adresse:</p>
                                <p>{address1}</p>
                            </div>

                            <div className="py-3">
                                <button
                                    className="button w-full"
                                    onClick={applyClick}
                                >
                                    Søk
                                </button>

                                {contactList.length > 0 ? (
                                    <ul className="flex-1 py-4 flex flex-col gap-6">
                                        {contactList.map((contact, index) => (
                                            <li key={index}>
                                                <div className="flex-none w-24 h-24 mr-4">
                                                    <img className="w-full h-full object-cover rounded" src={contact.image} alt="Profile picture of contact person" />
                                                </div>
                                                <div className="flex-grow">
                                                    <h2>{contact.firstName} {contact.lastName}</h2>
                                                    {/* <h2 className="text-xl font-bold">{contact.title}</h2> */}
                                                    <p>{contact.email}</p>
                                                    <p>{contact.mobilePhone}</p>
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
                <Footer transitionLine={false} />
            </div>
        </>
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