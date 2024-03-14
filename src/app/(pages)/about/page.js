import Image from 'next/image';
import Link from 'next/link';

import OurHistorySection from '@/app/components/OurHistorySection';
import EmployeeSection from '@/app/components/EmployeSection';
import ContactButton from '@/app/components/ContactButton';



export default function Page() {
    return (
        <div className="py-12 px-4 h-screen">
             <div className="w-3/5 mx-auto">
            {/* Vår historie Section */}
        <OurHistorySection />

            {/* Employees Section */}
          <EmployeeSection />

            {/* Contact Button */}
           <ContactButton />
        </div>
        </div>
    )
}