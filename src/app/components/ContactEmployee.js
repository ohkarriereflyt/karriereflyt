
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

export default function ContactEmployee() {
    return (
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
            {teamMembers.map((member) => (
                <div key={member.email} className=" flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch p-1 bg-slate-gray-flat rounded-2xl shadow border-4 border-white border-opacity-20 flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch bg-stone-200 rounded-tl-xl rounded-tr-xl flex-col justify-start items-start gap-2.5 flex">
                            <img className="self-stretch p-2.5 rounded-tl-xl rounded-tr-xl shadow-inner border" src="https://via.placeholder.com/354x350" />
                        </div>
                        <div className="self-stretch px-3 py-2 flex-col justify-start items-end flex">
                            <div className="self-stretch justify-between items-center inline-flex">
                                <div className="text-stone-50 text-xl font-bold font-['Filson Pro']">{member.name}</div>
                                <div className="justify-center items-center gap-[12.86px] flex">
                                    <div className="w-9 h-9 relative origin-top-left rotate-90" />
                                </div>
                            </div>
                            <div className="self-stretch text-stone-50 text-base font-normal font-['Filson Pro'] leading-loose">{member.title}</div>
                            <p className="text-blue-600">{member.phone}</p>
                            <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
                            <div className="self-stretch px-6 py-3 justify-between items-center inline-flex">
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-[-0px] top-[-0.08px] absolute">
                                    </div>
                                </div>
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-[0.01px] top-[-0.09px] absolute">
                                    </div>
                                </div>
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-[32.15px] left-[0.01px] top-[-0.09px] absolute">
                                    </div>
                                </div>
                                <img className="w-8 h-8" src="https://via.placeholder.com/32x32" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}