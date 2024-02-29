import Link from 'next/link';
export default function ContactButton() {
    return (
        <div className="text-center mt-8">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="/contact" >
            Kontakt oss
        </Link>
    </div>
    )
}