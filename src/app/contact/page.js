const teamMembers = [
    {
        name: 'Øyvind Haugen',
        title: 'Daglig leder / CEO',
        phone: '+47 41 28 28 78',
        email: 'oyvind@karriereflyt.no',
    },
    {
        name: 'Finn Christian Aakre',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 46 84 91 97',
        email: 'finn@karriereflyt.no',
    },
    {
        name: 'Hanna Arnesen',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 99 49 66 35',
        email: 'hanna@karriereflyt.no',
    },
    {
        name: 'Martine Dahl',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 47 84 88 62',
        email: 'martine@karriereflyt.no',
    },
];

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Kontakt Oss</h1>
            <div className="space-y-8">
                {teamMembers.map((member) => (
                    <div key={member.email} className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-bold">{member.name}</h2>
                        <p className="text-gray-600">{member.title}</p>
                        <p className="text-blue-600">{member.phone}</p>
                        <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}