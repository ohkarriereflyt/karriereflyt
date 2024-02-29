import Image from 'next/image';
export default function EmployeeSection() {



    const employees = [
        // Example employee data - replace with actual data
        { name: 'Øyvind Haugen', position: 'Daglig leder / CEO', imageUrl: '/path/to/image1.jpg' },
        { name: 'Finn Christian Aakre', position: 'Rekrutteringsrådgiver', imageUrl: '/path/to/image2.jpg' },
        // Add more employees as needed
    ];
    return (
    <div className="mt-12">
    <h3 className="text-2xl font-bold mb-4">Møt vårt team</h3>
    <div className="flex flex-wrap -mx-2">
        {employees.map((employee) => (
            <div key={employee.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="bg-white shadow rounded-lg p-4 text-center">
                    {/* <Image src={employee.imageUrl} alt={employee.name} width={100} height={100} className="rounded-full mx-auto" /> */}
                    <h4 className="font-bold mt-2">{employee.name}</h4>
                    <p className="text-sm">{employee.position}</p>
                </div>
            </div>
        ))}
    </div>
</div>
)
}