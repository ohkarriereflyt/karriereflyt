import { useRouter } from 'next/router';

const teamMembers = [
    {
        name: 'Øyvind Haugen',
        title: 'Daglig leder / CEO',
        phone: '+47 41 28 28 78',
        email: 'oyvind@karriereflyt.no',
        // img: 'https://onedrive.live.com/embed?resid=4FD8064FD150BC9C%21547462&authkey=%21ALrmYuoavoKnmP4&width=256',
        facebook: '',
        linkedin: '',
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
    const member = teamMembers.find(m => m.name === decodeURIComponent(id));

    if (!member) {
        return <p>Member not found</p>;
    }

    return (
        <div>
            <h1>{member.name}</h1>
            <p>{member.title}</p>
            <p>Email: {member.email}</p>
            <p>Phone: {member.phone}</p>
            <img src={member.img} alt={member.name} />
        </div>
    );
};

export default MemberDetailPage;
