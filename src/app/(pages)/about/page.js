import Image from "next/image";
import Link from "next/link";

import {
  OurHistorySection,
  EmployeSection,
  ContactButton,
} from "../../components/index";

export default function Page() {
  return (
    <div className="py-12 px-4 h-screen">
      <div className="w-3/5 mx-auto">
        {/* Vår historie Section */}
        <OurHistorySection />

        {/* Employees Section */}
        <EmployeSection />

        {/* Contact Button */}
        <ContactButton />
      </div>
    </div>
  );
}
