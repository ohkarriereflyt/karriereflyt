import EmployeeGrid from '../../../components/EmployeeGrid';
import localImg from '../../../imagesMidlertidig/øyvind-haugen.png';
import TransitionLine from '../../../components/TransitionLine';
import Footer from '../../../components/Footer';
import SocialLinks from '../../../components/SocialLinks';
import { client } from '../../../sanity';

const EVENTS_QUERY = `*[_type == "contact"][0]{
    'employees': employees[]->{
      name,
      jobTitle,
      emailText,
      phoneNumber,
      'img': employeeImage.asset->url,
      facebook,
      linkedin,
      bioShort,
      bio,
      keywords,
    }
  }`;

export default async function MemberDetailPage({ params }) {
    const contactsData = await client.fetch(EVENTS_QUERY);

    const employee = contactsData.employees.find((employee) => employee.name === decodeURIComponent(params.id));

    return (
        <div>
            <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 mt-4">
                <div className='flex md:flex-row flex-col w-fill gap-4 text-text-flat-inverted'>
                    <div className='flex flex-col sm:gap-4 gap-2'>
                        <div className='bg-slate-gray-flat kf-border-light'>
                            <div className="flex-shrink-0 h-[356px] md:w-[356px] w-full background-3">
                                <img className='h-full md:w-[356px] w-full object-cover' src={employee.img ? employee.img : localImg} alt={employee.name} />
                            </div>
                        </div>
                        <div className='bg-slate-gray-flat kf-border-light p-4'>
                            <h2>{employee.name}</h2>
                            <h3>{employee.jobTitle}</h3>
                            <div className="pt-2 flex-col justify-start items-end flex">
                                {employee.emailText && (
                                    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                        <p className="w-16 ">Email:</p>
                                        <p>{employee.emailText}</p>
                                    </div>
                                )}
                                {employee.phoneNumber && (
                                    <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                        <p className="w-16 ">Telefon:</p>
                                        <p>{employee.phoneNumber}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {employee.keywords && employee.keywords.length > 0 && (
                            <div className='bg-slate-gray-flat  kf-border-light p-4'>
                                <p>Ord som beskriver {employee.name}:</p>
                                <div className="w-full flex flex-wrap mt-1">
                                    {employee.keywords && employee.keywords.map((keywords, index) => (
                                        <div key={index} className='flex items-center gap-2 mr-2'>
                                            {index != 0 && <div className="w-1 h-1 light-background rounded-full"></div>}
                                            {/* {<div className="w-1 h-1 bg-stone-50 rounded-full"></div>} */}
                                            <p>{keywords}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <SocialLinks phoneNumber={employee.phoneNumber} emailText={employee.emailText} facebook={employee.facebook} linkedin={employee.linkedin} />
                    </div>
                    <div className='w-full bg-slate-gray-flat  kf-border-light p-4'>
                        <h2 className="">Om {employee.name}</h2>
                        <p className="">{employee.bio}</p>
                    </div>
                </div>
            </div>
            <TransitionLine />
            <div className="bg-slate-gray-flat w-full">
                <div className="max-w-7xl mx-auto px-4 md:p-8">
                    <h1 className="text-center light mb-8">Lær mer om gjengen vår</h1>
                    <div className="w-full">
                        <EmployeeGrid employees={contactsData.employees} exclude={employee.name} backgroundColor='gray' foregroundColor='dark' border='dark' />
                    </div>
                </div>
            </div>
            <Footer transitionLine={false} />
        </div>
    );
};