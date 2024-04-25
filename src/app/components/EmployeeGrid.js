import CardEmployee from './CardEmployee';

export default function EmployeeGrid({ employees, exclude = null, backgroundColor='slate-gray', foregroundColor='light', border = 'light' }) {
    return (
        <div className="grid md:gap-8 gap-4 xl:grid-cols-3 md:grid-cols-2">
            {employees.map((member, index) => (
                (exclude != member.name) && (
                    <div key={index}>
                        <CardEmployee member={member} index={index} backgroundColor={backgroundColor} foregroundColor={foregroundColor} border={border} />
                    </div>
                )
            ))}
        </div>
    )
}