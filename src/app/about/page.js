import Image from 'next/image';
import Link from 'next/link';

const employees = [
    // Example employee data - replace with actual data
    { name: 'Øyvind Haugen', position: 'Daglig leder / CEO', imageUrl: '/path/to/image1.jpg' },
    { name: 'Finn Christian Aakre', position: 'Rekrutteringsrådgiver', imageUrl: '/path/to/image2.jpg' },
    // Add more employees as needed
];

export default function Page() {
    return (
        <div className="py-12 px-4">
            {/* Vår historie Section */}
            <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Vår historie</h2>
                    <p>Karriereflyt AS ble stiftet i 2022 av Øyvind Haugen, som har sin bakgrunn i bedriftsøkonomiske fag- i tillegg til en stabil erfaring fra rekruttering og bemanning som skal til for at både kandidater og kunder skal bli fornøyde.</p>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <Image src="/path/to/your/history-image.jpg" alt="Vår historie" width={500} height={300} layout="responsive" />
                </div>
            </div>

            {/* Employees Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Møt vårt team</h3>
                <div className="flex flex-wrap -mx-2">
                    {employees.map((employee) => (
                        <div key={employee.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                            <div className="bg-white shadow rounded-lg p-4 text-center">
                                <Image src={employee.imageUrl} alt={employee.name} width={100} height={100} className="rounded-full mx-auto" />
                                <h4 className="font-bold mt-2">{employee.name}</h4>
                                <p className="text-sm">{employee.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Button */}
            <div className="text-center mt-8">
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    href="/contact" >
                    Kontakt oss
                </Link>
            </div>
        </div >
    )
}