import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CTAButtons(props) {
  const pathname = usePathname();

  return (
    <>
      <Link
        className="bg-secondary-grey hover:bg-gray-800 text-white font-bold py-3 px-7 rounded-connie mb-4  border-solid border-4 border-button-border-color text-center"
        href="/applicants"
        style={{ width: props.widthOne }}
      >
        For jobbsøkere
      </Link>
      <Link
        className="bg-secondary-grey hover:bg-gray-800 text-white font-bold py-3 px-7 rounded-connie mb-4 border-solid border-4 ml-4 border-button-border-color text-center"
        href="/services"
        style={{ width: props.widthTwo }}
      >
        For bedrifter
      </Link>
    </>
  );
}
