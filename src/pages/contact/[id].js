import { useRouter } from 'next/router';
import Navbar from '../../app/components/Navbar';
import BackgroundBoxes from '../../app/components/BackgroundBoxes';
import EmployeeGrid from '../../app/components/EmployeeGrid';
import "../../app/globals.css";
import localImg from '../../app/imagesMidlertidig/øyvind-haugen.png';
import TransitionLine from '../../app/components/TransitionLine';
import Footer from '../../app/components/Footer';

const employees = [
    {
        name: 'Øyvind Haugen',
        title: 'Daglig leder / CEO',
        phone: '+47 41 28 28 78',
        email: 'oyvind@karriereflyt.no',
        // img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547462&authkey=%21ALrmYuoavoKnmP4&width=256',
        facebook: '',
        linkedin: '',
        stikkord: [
            'Profesjonell',
            'Hyggelig',
            'Effektiv',
        ],
        bio: 'Øyvind Haugen er daglig leder i Karriereflyt AS. Han har lang erfaring fra rekrutteringsbransjen og har hjulpet mange kunder med å finne den rette kandidaten til stillingen. Øyvind er en hyggelig og profesjonell person som alltid er effektiv i sitt arbeid.',
        bioShort: 'Øyvind Haugen er en erfaren leder og grunnlegger av Karriereflyt, et selskap dedikert til å hjelpe enkeltpersoner med å navigere gjennom karriereveien sin.',
    },
    {
        name: 'Finn Christian Aakre',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 46 84 91 97',
        email: 'finn@karriereflyt.no',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/768px-Face-smile.svg.png',
        facebook: '',
        linkedin: '',
    },
    {
        name: 'Andrine Sanden',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 99 49 66 35',
        email: 'andrine@karriereflyt.no',
        img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547466&authkey=%21AEtsTInMxK8m00E&width=256',
        facebook: '',
        linkedin: '',
    },
    {
        name: 'Hanna Arnesen',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 47 84 88 62',
        email: 'hanna@karriereflyt.no',
        img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547464&authkey=%21AOhOwwGCS6LEqNM&width=256',
        facebook: '',
        linkedin: '',
    },
    {
        name: 'Sofie Malsen',
        title: 'Rekrutteringsrådgiver',
        phone: '+47 41 28 28 78',
        email: 'sofie@karriereflyt.no',
        img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547460&authkey=%21AP45A98V2fZd1_s&width=256',
        facebook: '',
        linkedin: '',
    },
    {
        name: 'Connie Haugen',
        title: 'Styremedlem / Rådgiver',
        phone: '',
        email: 'connie@karriereflyt.no',
        img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547465&authkey=%21AOZmY5z_nDKRTN0&width=256',
        facebook: '',
        linkedin: '',
    },
];

const MemberDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the member using the id parameter
    const member = employees.find(m => m.name === decodeURIComponent(id));

    if (!member) {
        return <p>Member not found</p>;
    }

    return (
        <body>
            <BackgroundBoxes />
            <Navbar />
            <div className="pt-16">
                <div className="max-w-7xl mx-auto p-2 sm:p-4 md:p-8 mb-16 mt-24">
                    <div className='flex md:flex-row flex-col w-fill gap-4 text-text-flat-inverted'>
                        <div className='flex flex-col sm:gap-4 gap-2'>
                            <div className='bg-slate-gray-flat kf-border-light'>
                                <div className="flex-shrink-0 h-[356px] md:w-[356px] w-full background-3">
                                    <img className='h-full md:w-[356px] w-full object-cover' src={member.img ? member.img : localImg} alt={member.name} />
                                </div>
                            </div>
                            <div className='bg-slate-gray-flat kf-border-light p-4'>
                                <h2>{member.name}</h2>
                                <h3>{member.title}</h3>
                                <div className="pt-2 flex-col justify-start items-end flex">
                                    {member.email && (
                                        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                            <h3 className="w-16 ">Email:</h3>
                                            <p>{member.email}</p>
                                        </div>
                                    )}
                                    {member.phone && (
                                        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                                            <h3 className="w-16 ">Telefon:</h3>
                                            <p>{member.phone}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {member.stikkord && member.stikkord.length > 0 && (
                                <div className='bg-slate-gray-flat  kf-border-light p-4'>
                                    <p>Ord som beskriver {member.name}:</p>
                                    <div className="w-full flex flex-wrap mt-1">
                                        {member.stikkord && member.stikkord.map((stikkord, index) => (
                                            <div key={index} className='flex items-center gap-2 mr-2'>
                                                {index != 0 && <div className="w-1 h-1 bg-stone-50 rounded-full"></div>}
                                                {/* {<div className="w-1 h-1 bg-stone-50 rounded-full"></div>} */}
                                                <p>{stikkord}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className='bg-slate-gray-flat kf-border-light'>
                                <div className="w-full px-6 py-3 justify-between items-center inline-flex background-flat">
                                    <button onClick={() => member.phone && window.open(`tel:${member.phone}`, '_self')} className={`noStyle w-8 h-8 flex-col justify-center items-center inline-flex ${!member.phone && 'opacity-50 cursor-default'}`}>
                                        <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_810_12787)">
                                                <path className='light-fill' fillRule="evenodd" clipRule="evenodd" d="M31.9966 16.3358C31.9966 25.0845 24.7496 32.3281 15.9966 32.3281C7.25934 32.3281 -0.00341797 25.0845 -0.00341797 16.3358C-0.00341797 7.60293 7.24365 0.34375 15.9809 0.34375C24.7339 0.34375 31.9966 7.60293 31.9966 16.3358ZM8.73574 8.70472C5.89653 11.5582 8.29653 16.3559 12.0769 20.1188C15.8416 23.9129 20.6573 26.3118 23.4966 23.474C23.5697 23.4008 23.6289 23.3277 23.6881 23.2547C23.7178 23.218 23.7474 23.1814 23.7789 23.1447C24.5005 22.3294 24.7044 21.2319 23.7632 20.5264C23.3209 20.204 22.8623 19.8816 22.2952 19.4829C21.8971 19.2029 21.4454 18.8854 20.9083 18.5038C19.9514 17.8453 19.324 18.0021 18.6024 18.7233L17.9593 19.3504C17.7868 19.5387 17.4574 19.5072 17.2377 19.3819C16.673 19.0369 15.7318 18.2844 14.822 17.375C13.9278 16.4813 13.1436 15.5093 12.8142 14.9605C12.7201 14.7724 12.6416 14.4901 12.8456 14.2707L13.473 13.5964C14.2259 12.8282 14.3672 12.2481 13.6927 11.2917L11.7005 8.48522C11.0416 7.52883 10.0377 7.71697 8.95536 8.51658C8.86131 8.57924 8.7986 8.64191 8.7359 8.70456L8.73574 8.70472Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_810_12787">
                                                    <rect width="32" height="32" fill="white" transform="translate(0 0.40625)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <button onClick={() => member.email && window.open(`mailto:${member.email}`, '_self')} className={`noStyle w-8 h-8 flex-col justify-center items-center inline-flex ${!member.email && 'opacity-50 cursor-default'}`}>
                                        <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_810_12792)">
                                                <path className='light-fill' fillRule="evenodd" clipRule="evenodd" d="M32.3418 16.3202C32.3418 25.0689 25.0948 32.3125 16.3418 32.3125C7.60456 32.3125 0.341797 25.0689 0.341797 16.3202C0.341797 7.58731 7.58887 0.328125 16.3261 0.328125C25.0791 0.328125 32.3418 7.58731 32.3418 16.3202ZM7.63207 21.9059L13.185 16.3714L7.60069 10.8055C7.52227 10.978 7.4752 11.3542 7.4752 11.9187V20.7613C7.4752 21.3415 7.52227 21.7178 7.63207 21.9059ZM15.4596 16.8104C15.789 17.1083 16.087 17.1867 16.3536 17.1867C16.636 17.1867 16.9183 17.0925 17.2321 16.8104L24.2909 9.73935C24.087 9.58256 23.6164 9.42578 22.9419 9.42578H9.73403C9.05951 9.42578 8.60462 9.58256 8.4007 9.73935L15.4596 16.8104ZM25.0438 10.8055L19.4596 16.3714L25.0125 21.9059C25.1223 21.7178 25.185 21.3415 25.185 20.7613V11.9187C25.185 11.3542 25.1223 10.978 25.0438 10.8055ZM17.985 17.7041C17.3575 18.2842 16.9183 18.4723 16.3379 18.4723C15.7575 18.4723 15.3027 18.2842 14.691 17.7041L14.1732 17.2337L8.43208 22.9564C8.6203 23.1289 9.0752 23.2543 9.73403 23.2543H22.9262C23.6007 23.2543 24.0399 23.1289 24.2282 22.9564L18.5027 17.2337L17.985 17.7041Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_810_12792">
                                                    <rect width="32" height="32" fill="white" transform="translate(0.333496 0.40625)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <button className={`noStyle w-8 h-8 flex-col justify-center items-center inline-flex ${!member.facebook && 'opacity-50 cursor-default'}`}>
                                        <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_810_12797)">
                                                <path className='light-fill' fillRule="evenodd" clipRule="evenodd" d="M13.8006 32.0477V21.0651H10.0498V16.6031H13.7924V13.3286C13.7924 9.5201 16.0786 7.44552 19.4084 7.44552C20.5311 7.44135 21.6537 7.49975 22.7695 7.62211V11.6002H20.4752C18.6645 11.6002 18.313 12.4818 18.313 13.7694V16.6115H22.6401L22.0801 21.0735H18.313V32.2272C26.3134 31.3914 32.6738 24.5163 32.6738 16.3202C32.6738 7.58731 25.4112 0.328125 16.6582 0.328125C7.9209 0.328125 0.673828 7.58731 0.673828 16.3202C0.673828 24.0887 6.40025 30.6704 13.8006 32.0477Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_810_12797">
                                                    <rect width="32" height="32" fill="white" transform="translate(0.666504 0.40625)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <button className={`noStyle w-8 h-8 flex-col justify-center items-center inline-flex ${!member.linkedin && 'opacity-50 cursor-default'}`}>
                                        <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='light-fill' fillRule="evenodd" clipRule="evenodd" d="M4.8 0.40625C2.14903 0.40625 0 2.55528 0 5.20625V27.6063C0 30.2572 2.14903 32.4062 4.8 32.4062H27.2C29.851 32.4062 32 30.2572 32 27.6063V5.20625C32 2.55528 29.851 0.40625 27.2 0.40625H4.8ZM4.7998 9.04469C4.7998 10.3247 5.7598 11.2847 7.1998 11.2847C8.7998 11.2847 9.75983 10.3247 9.75983 9.04469C9.75983 7.76469 8.7998 6.80469 7.3598 6.80469C5.7598 6.80469 4.7998 7.76469 4.7998 9.04469ZM4.7998 26.6272H9.75983V12.8672H4.7998V26.6272ZM27.1848 26.6272H22.2248V19.1072C22.2248 17.0272 20.9448 16.5472 20.4648 16.5472C19.9848 16.5472 18.3848 16.8672 18.3848 19.1072V26.6272H13.4248V12.8672H18.3848V14.7872C19.0248 13.6672 20.3048 12.8672 22.7048 12.8672C25.1048 12.8672 27.1848 14.7872 27.1848 19.1072V26.6272Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full bg-slate-gray-flat  kf-border-light p-4'>
                            <h2 className="">Om {member.name}</h2>
                            <p className="">{member.bio}</p>
                        </div>
                    </div>
                </div>
                <TransitionLine />
                <div className="bg-slate-gray-flat w-full">
                    <div className="max-w-7xl mx-auto px-4 md:p-8">
                        <h1 className="text-center light mb-8">Lær mer om gjengen vår</h1>
                        <div className="w-full">
                            <EmployeeGrid employees={employees} exclude={member.name} backgroundColor='gray' foregroundColor='dark' border='dark' />
                        </div>
                    </div>
                </div>
                <Footer transitionLine={false} />
            </div>
        </body>
    );
};

export default MemberDetailPage;
